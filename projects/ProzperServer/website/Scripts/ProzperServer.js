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
 var Global,FsRoot,ProzperServer,ClientSide,MainProgram,WebSharper,Obj,UI,Var$1,LibraryJS,AppFramework,PlugIn,ModeloUI,Aliado,Operators,View,Var,Lazy,RenderAliados,RenderAliado,FormaRegistro,FormaDatos,FormaContactos,FormaFormasPago,ReporteConsolidado,TablaPagos,ListaDocs,FormaAutorizacion,FormaContrato,Transacciones,Pendientes,EventTarget,Node,JavaScript,JS,Unchecked,LayoutEngineModule,Option,TypesV0,Aliado$1,Aliado$2,Templating,Runtime,Server,TemplateInstance,Arrays,ProviderBuilder,Handler,ProzperServer_Templates,ProzperServer_GeneratedPrintf,ProzperServer_Router,GeneratedPrintf,Doc,Rpc,IdAliado,Modelo,ConcreteVar,Snap,SC$1,ListModel,PlugInVar,PlugInView,PlugInDoc,Pervasives,LazyExtensionsProxy,LazyRecord,Seq,Library,SortWith,Buscar,Collections,FSharpSet,Set,Strings,CorreoElectronico,DatosPersonales,CorreoElectronico$1,Telefono,Direccion,Monads,AsyncResultBuilder,Refresh,System,Guid,Fila,VariousUI,HtmlModule,attr,StatusAliado,Utils,Date,List,CuentaBancaria,RoutingNumber,NumeroCuenta,FormaPago,Result,Archivo,Extensions,ListModel$1,String,TipoArchivo,StatusArchivo,Blob,FormaFirma,PremisasCalculo,Rpc$1,Remoting,AjaxRemotingProvider,PlugInAction,Msal,WindowOrWorkerGlobalScope,LayoutEngine,SC$2,IdForAuthorize,DatosPersonales$1,DiaPago,TipoAliado,Numeric,List$1,Dictionary,HashSet,Client,Abbrev,Async,Fresh,Builder,BuilderP,Eff,EffBuilder,AsyncResultBuilderP,Slice,ParseO,Serializer,Msal$1,Policy,Telefono$1,TipoTelefono,Direccion$1,TipoDireccion,Estado,Pais,ZonaPostal,TarjetaCredito,Expiracion,NumeroTarjeta,TipoTarjeta,TipoCuenta,Genero,Configuration,AuthOptions,Control,MailboxProcessor,Mailbox,EndPoint,Router,ViewBuilder,Remoting$1,IdPayment,CuentaPago,PlugInQuery,FSharpMap,Enumerator,T,BalancedTree,T$1,AsyncResult,Array,CuentaBancaria$1,TarjetaCredito$1,Object,FromView,AttrProxy,Array$1,Concurrency,Storage,AttrModule,LayoutEngine_Templates,LayoutEngine_GeneratedPrintf,WebComponent,WcTabStrip,WcTabStripT,WcSplitter,DictionaryUtil,CheckedInput,Client$1,Templates,DateUtil,SC$3,Pojo,Error,TimeoutException,Promise,Sitelets,RouterOperators,RouterModule,Route,CustomXhrProvider,ConceptoPago,MapUtil,Tree,IdAddress,Docs,Attrs,DomUtility,AsyncBody,SC$4,CT,ArrayStorage,Var$2,Layout,WcSplitterT,DocElemNode,CharacterData,SC$5,XhrProvider,FSharpEvent,LinkedList,AuthenticationParameters,Account,Router$1,List$2,Pair,Result$1,Scheduler,CancellationTokenSource,DynamicAttrNode,Measures,Hoverable,Hoverable$1,Event,UIEvent,ResizeObserver,SC$6,Elt,Attrs$1,Dyn,Prepare,An,Settings,Mailbox$1,OperationCanceledException,Json,HashSetUtil,Event$1,Event$2,NonStandardPromiseRejectionException,SC$7,Map,Queue,SC$8,SC$9,AggregateException,KeyCollection,Updates,Docs$1,RunState,NodeSet,Anims,SC$10,Char,FormatException,StringEncoding,String$1,SC$11,AppendList,LinkedListEnumerator,PathUtil,Easing,HashSet$1,DomNodes,SC$12,IntelliFactory,Runtime$1,Math,$,console,Date$1,JSON,Reflect,String$2;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 ProzperServer=FsRoot.ProzperServer=FsRoot.ProzperServer||{};
 ClientSide=ProzperServer.ClientSide=ProzperServer.ClientSide||{};
 MainProgram=ClientSide.MainProgram=ClientSide.MainProgram||{};
 WebSharper=Global.WebSharper=Global.WebSharper||{};
 Obj=WebSharper.Obj=WebSharper.Obj||{};
 UI=WebSharper.UI=WebSharper.UI||{};
 Var$1=UI.Var$1=UI.Var$1||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 AppFramework=LibraryJS.AppFramework=LibraryJS.AppFramework||{};
 PlugIn=AppFramework.PlugIn=AppFramework.PlugIn||{};
 ModeloUI=ClientSide.ModeloUI=ClientSide.ModeloUI||{};
 Aliado=ModeloUI.Aliado=ModeloUI.Aliado||{};
 Operators=WebSharper.Operators=WebSharper.Operators||{};
 View=UI.View=UI.View||{};
 Var=UI.Var=UI.Var||{};
 Lazy=WebSharper.Lazy=WebSharper.Lazy||{};
 RenderAliados=ModeloUI.RenderAliados=ModeloUI.RenderAliados||{};
 RenderAliado=ModeloUI.RenderAliado=ModeloUI.RenderAliado||{};
 FormaRegistro=ModeloUI.FormaRegistro=ModeloUI.FormaRegistro||{};
 FormaDatos=ModeloUI.FormaDatos=ModeloUI.FormaDatos||{};
 FormaContactos=ModeloUI.FormaContactos=ModeloUI.FormaContactos||{};
 FormaFormasPago=ModeloUI.FormaFormasPago=ModeloUI.FormaFormasPago||{};
 ReporteConsolidado=ModeloUI.ReporteConsolidado=ModeloUI.ReporteConsolidado||{};
 TablaPagos=ModeloUI.TablaPagos=ModeloUI.TablaPagos||{};
 ListaDocs=ModeloUI.ListaDocs=ModeloUI.ListaDocs||{};
 FormaAutorizacion=ModeloUI.FormaAutorizacion=ModeloUI.FormaAutorizacion||{};
 FormaContrato=ModeloUI.FormaContrato=ModeloUI.FormaContrato||{};
 Transacciones=ModeloUI.Transacciones=ModeloUI.Transacciones||{};
 Pendientes=ModeloUI.Pendientes=ModeloUI.Pendientes||{};
 EventTarget=Global.EventTarget;
 Node=Global.Node;
 JavaScript=WebSharper.JavaScript=WebSharper.JavaScript||{};
 JS=JavaScript.JS=JavaScript.JS||{};
 Unchecked=WebSharper.Unchecked=WebSharper.Unchecked||{};
 LayoutEngineModule=LibraryJS.LayoutEngineModule=LibraryJS.LayoutEngineModule||{};
 Option=WebSharper.Option=WebSharper.Option||{};
 TypesV0=ProzperServer.TypesV0=ProzperServer.TypesV0||{};
 Aliado$1=TypesV0.Aliado=TypesV0.Aliado||{};
 Aliado$2=ProzperServer.Aliado=ProzperServer.Aliado||{};
 Templating=UI.Templating=UI.Templating||{};
 Runtime=Templating.Runtime=Templating.Runtime||{};
 Server=Runtime.Server=Runtime.Server||{};
 TemplateInstance=Server.TemplateInstance=Server.TemplateInstance||{};
 Arrays=WebSharper.Arrays=WebSharper.Arrays||{};
 ProviderBuilder=Server.ProviderBuilder=Server.ProviderBuilder||{};
 Handler=Server.Handler=Server.Handler||{};
 ProzperServer_Templates=Global.ProzperServer_Templates=Global.ProzperServer_Templates||{};
 ProzperServer_GeneratedPrintf=Global.ProzperServer_GeneratedPrintf=Global.ProzperServer_GeneratedPrintf||{};
 ProzperServer_Router=Global.ProzperServer_Router=Global.ProzperServer_Router||{};
 GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};
 Doc=UI.Doc=UI.Doc||{};
 Rpc=ModeloUI.Rpc=ModeloUI.Rpc||{};
 IdAliado=TypesV0.IdAliado=TypesV0.IdAliado||{};
 Modelo=TypesV0.Modelo=TypesV0.Modelo||{};
 ConcreteVar=UI.ConcreteVar=UI.ConcreteVar||{};
 Snap=UI.Snap=UI.Snap||{};
 SC$1=Global.StartupCode$ProzperServer$ProzperServer=Global.StartupCode$ProzperServer$ProzperServer||{};
 ListModel=UI.ListModel=UI.ListModel||{};
 PlugInVar=AppFramework.PlugInVar=AppFramework.PlugInVar||{};
 PlugInView=AppFramework.PlugInView=AppFramework.PlugInView||{};
 PlugInDoc=AppFramework.PlugInDoc=AppFramework.PlugInDoc||{};
 Pervasives=JavaScript.Pervasives=JavaScript.Pervasives||{};
 LazyExtensionsProxy=WebSharper.LazyExtensionsProxy=WebSharper.LazyExtensionsProxy||{};
 LazyRecord=LazyExtensionsProxy.LazyRecord=LazyExtensionsProxy.LazyRecord||{};
 Seq=WebSharper.Seq=WebSharper.Seq||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 SortWith=Library.SortWith=Library.SortWith||{};
 Buscar=Aliado$2.Buscar=Aliado$2.Buscar||{};
 Collections=WebSharper.Collections=WebSharper.Collections||{};
 FSharpSet=Collections.FSharpSet=Collections.FSharpSet||{};
 Set=Collections.Set=Collections.Set||{};
 Strings=WebSharper.Strings=WebSharper.Strings||{};
 CorreoElectronico=TypesV0.CorreoElectronico=TypesV0.CorreoElectronico||{};
 DatosPersonales=ModeloUI.DatosPersonales=ModeloUI.DatosPersonales||{};
 CorreoElectronico$1=ModeloUI.CorreoElectronico=ModeloUI.CorreoElectronico||{};
 Telefono=ModeloUI.Telefono=ModeloUI.Telefono||{};
 Direccion=ModeloUI.Direccion=ModeloUI.Direccion||{};
 Monads=Library.Monads=Library.Monads||{};
 AsyncResultBuilder=Monads.AsyncResultBuilder=Monads.AsyncResultBuilder||{};
 Refresh=ModeloUI.Refresh=ModeloUI.Refresh||{};
 System=Global.System=Global.System||{};
 Guid=System.Guid=System.Guid||{};
 Fila=ReporteConsolidado.Fila=ReporteConsolidado.Fila||{};
 VariousUI=ModeloUI.VariousUI=ModeloUI.VariousUI||{};
 HtmlModule=UI.HtmlModule=UI.HtmlModule||{};
 attr=HtmlModule.attr=HtmlModule.attr||{};
 StatusAliado=TypesV0.StatusAliado=TypesV0.StatusAliado||{};
 Utils=WebSharper.Utils=WebSharper.Utils||{};
 Date=LibraryJS.Date=LibraryJS.Date||{};
 List=WebSharper.List=WebSharper.List||{};
 CuentaBancaria=TypesV0.CuentaBancaria=TypesV0.CuentaBancaria||{};
 RoutingNumber=TypesV0.RoutingNumber=TypesV0.RoutingNumber||{};
 NumeroCuenta=TypesV0.NumeroCuenta=TypesV0.NumeroCuenta||{};
 FormaPago=TypesV0.FormaPago=TypesV0.FormaPago||{};
 Result=Monads.Result=Monads.Result||{};
 Archivo=TypesV0.Archivo=TypesV0.Archivo||{};
 Extensions=Monads.Extensions=Monads.Extensions||{};
 ListModel$1=LibraryJS.ListModel=LibraryJS.ListModel||{};
 String=Library.String=Library.String||{};
 TipoArchivo=TypesV0.TipoArchivo=TypesV0.TipoArchivo||{};
 StatusArchivo=TypesV0.StatusArchivo=TypesV0.StatusArchivo||{};
 Blob=Global.Blob;
 FormaFirma=ModeloUI.FormaFirma=ModeloUI.FormaFirma||{};
 PremisasCalculo=TypesV0.PremisasCalculo=TypesV0.PremisasCalculo||{};
 Rpc$1=ProzperServer.Rpc=ProzperServer.Rpc||{};
 Remoting=WebSharper.Remoting=WebSharper.Remoting||{};
 AjaxRemotingProvider=Remoting.AjaxRemotingProvider=Remoting.AjaxRemotingProvider||{};
 PlugInAction=AppFramework.PlugInAction=AppFramework.PlugInAction||{};
 Msal=ClientSide.Msal=ClientSide.Msal||{};
 WindowOrWorkerGlobalScope=Global.WindowOrWorkerGlobalScope;
 LayoutEngine=LibraryJS.LayoutEngine=LibraryJS.LayoutEngine||{};
 SC$2=Global.StartupCode$LayoutEngine$LayoutEngine=Global.StartupCode$LayoutEngine$LayoutEngine||{};
 IdForAuthorize=TypesV0.IdForAuthorize=TypesV0.IdForAuthorize||{};
 DatosPersonales$1=TypesV0.DatosPersonales=TypesV0.DatosPersonales||{};
 DiaPago=TypesV0.DiaPago=TypesV0.DiaPago||{};
 TipoAliado=TypesV0.TipoAliado=TypesV0.TipoAliado||{};
 Numeric=WebSharper.Numeric=WebSharper.Numeric||{};
 List$1=Collections.List=Collections.List||{};
 Dictionary=Collections.Dictionary=Collections.Dictionary||{};
 HashSet=Collections.HashSet=Collections.HashSet||{};
 Client=Runtime.Client=Runtime.Client||{};
 Abbrev=UI.Abbrev=UI.Abbrev||{};
 Async=Abbrev.Async=Abbrev.Async||{};
 Fresh=Abbrev.Fresh=Abbrev.Fresh||{};
 Builder=Result.Builder=Result.Builder||{};
 BuilderP=Result.BuilderP=Result.BuilderP||{};
 Eff=Monads.Eff=Monads.Eff||{};
 EffBuilder=Eff.EffBuilder=Eff.EffBuilder||{};
 AsyncResultBuilderP=Monads.AsyncResultBuilderP=Monads.AsyncResultBuilderP||{};
 Slice=WebSharper.Slice=WebSharper.Slice||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 Serializer=Library.Serializer=Library.Serializer||{};
 Msal$1=LibraryJS.Msal=LibraryJS.Msal||{};
 Policy=Msal$1.Policy=Msal$1.Policy||{};
 Telefono$1=TypesV0.Telefono=TypesV0.Telefono||{};
 TipoTelefono=TypesV0.TipoTelefono=TypesV0.TipoTelefono||{};
 Direccion$1=TypesV0.Direccion=TypesV0.Direccion||{};
 TipoDireccion=TypesV0.TipoDireccion=TypesV0.TipoDireccion||{};
 Estado=TypesV0.Estado=TypesV0.Estado||{};
 Pais=TypesV0.Pais=TypesV0.Pais||{};
 ZonaPostal=TypesV0.ZonaPostal=TypesV0.ZonaPostal||{};
 TarjetaCredito=TypesV0.TarjetaCredito=TypesV0.TarjetaCredito||{};
 Expiracion=TypesV0.Expiracion=TypesV0.Expiracion||{};
 NumeroTarjeta=TypesV0.NumeroTarjeta=TypesV0.NumeroTarjeta||{};
 TipoTarjeta=TypesV0.TipoTarjeta=TypesV0.TipoTarjeta||{};
 TipoCuenta=TypesV0.TipoCuenta=TypesV0.TipoCuenta||{};
 Genero=TypesV0.Genero=TypesV0.Genero||{};
 Configuration=Msal$1.Configuration=Msal$1.Configuration||{};
 AuthOptions=Msal$1.AuthOptions=Msal$1.AuthOptions||{};
 Control=WebSharper.Control=WebSharper.Control||{};
 MailboxProcessor=Control.MailboxProcessor=Control.MailboxProcessor||{};
 Mailbox=Library.Mailbox=Library.Mailbox||{};
 EndPoint=ModeloUI.EndPoint=ModeloUI.EndPoint||{};
 Router=UI.Router=UI.Router||{};
 ViewBuilder=UI.ViewBuilder=UI.ViewBuilder||{};
 Remoting$1=ProzperServer.Remoting=ProzperServer.Remoting||{};
 IdPayment=TypesV0.IdPayment=TypesV0.IdPayment||{};
 CuentaPago=TypesV0.CuentaPago=TypesV0.CuentaPago||{};
 PlugInQuery=AppFramework.PlugInQuery=AppFramework.PlugInQuery||{};
 FSharpMap=Collections.FSharpMap=Collections.FSharpMap||{};
 Enumerator=WebSharper.Enumerator=WebSharper.Enumerator||{};
 T=Enumerator.T=Enumerator.T||{};
 BalancedTree=Collections.BalancedTree=Collections.BalancedTree||{};
 T$1=List.T=List.T||{};
 AsyncResult=Monads.AsyncResult=Monads.AsyncResult||{};
 Array=Library.Array=Library.Array||{};
 CuentaBancaria$1=ModeloUI.CuentaBancaria=ModeloUI.CuentaBancaria||{};
 TarjetaCredito$1=ModeloUI.TarjetaCredito=ModeloUI.TarjetaCredito||{};
 Object=Global.Object;
 FromView=UI.FromView=UI.FromView||{};
 AttrProxy=UI.AttrProxy=UI.AttrProxy||{};
 Array$1=UI.Array=UI.Array||{};
 Concurrency=WebSharper.Concurrency=WebSharper.Concurrency||{};
 Storage=UI.Storage=UI.Storage||{};
 AttrModule=UI.AttrModule=UI.AttrModule||{};
 LayoutEngine_Templates=Global.LayoutEngine_Templates=Global.LayoutEngine_Templates||{};
 LayoutEngine_GeneratedPrintf=Global.LayoutEngine_GeneratedPrintf=Global.LayoutEngine_GeneratedPrintf||{};
 WebComponent=LibraryJS.WebComponent=LibraryJS.WebComponent||{};
 WcTabStrip=WebComponent.WcTabStrip=WebComponent.WcTabStrip||{};
 WcTabStripT=WcTabStrip.WcTabStripT=WcTabStrip.WcTabStripT||{};
 WcSplitter=WebComponent.WcSplitter=WebComponent.WcSplitter||{};
 DictionaryUtil=Collections.DictionaryUtil=Collections.DictionaryUtil||{};
 CheckedInput=UI.CheckedInput=UI.CheckedInput||{};
 Client$1=UI.Client=UI.Client||{};
 Templates=Client$1.Templates=Client$1.Templates||{};
 DateUtil=WebSharper.DateUtil=WebSharper.DateUtil||{};
 SC$3=Global.StartupCode$WebSharper_Main$Remoting=Global.StartupCode$WebSharper_Main$Remoting||{};
 Pojo=LibraryJS.Pojo=LibraryJS.Pojo||{};
 Error=Global.Error;
 TimeoutException=WebSharper.TimeoutException=WebSharper.TimeoutException||{};
 Promise=JavaScript.Promise=JavaScript.Promise||{};
 Sitelets=WebSharper.Sitelets=WebSharper.Sitelets||{};
 RouterOperators=Sitelets.RouterOperators=Sitelets.RouterOperators||{};
 RouterModule=Sitelets.RouterModule=Sitelets.RouterModule||{};
 Route=Sitelets.Route=Sitelets.Route||{};
 CustomXhrProvider=Remoting$1.CustomXhrProvider=Remoting$1.CustomXhrProvider||{};
 ConceptoPago=TypesV0.ConceptoPago=TypesV0.ConceptoPago||{};
 MapUtil=Collections.MapUtil=Collections.MapUtil||{};
 Tree=BalancedTree.Tree=BalancedTree.Tree||{};
 IdAddress=TypesV0.IdAddress=TypesV0.IdAddress||{};
 Docs=UI.Docs=UI.Docs||{};
 Attrs=UI.Attrs=UI.Attrs||{};
 DomUtility=UI.DomUtility=UI.DomUtility||{};
 AsyncBody=Concurrency.AsyncBody=Concurrency.AsyncBody||{};
 SC$4=Global.StartupCode$WebSharper_Main$Concurrency=Global.StartupCode$WebSharper_Main$Concurrency||{};
 CT=Concurrency.CT=Concurrency.CT||{};
 ArrayStorage=Storage.ArrayStorage=Storage.ArrayStorage||{};
 Var$2=LibraryJS.Var=LibraryJS.Var||{};
 Layout=LayoutEngineModule.Layout=LayoutEngineModule.Layout||{};
 WcSplitterT=WcSplitter.WcSplitterT=WcSplitter.WcSplitterT||{};
 DocElemNode=UI.DocElemNode=UI.DocElemNode||{};
 CharacterData=Global.CharacterData;
 SC$5=Global.StartupCode$WebSharper_UI$Abbrev=Global.StartupCode$WebSharper_UI$Abbrev||{};
 XhrProvider=Remoting.XhrProvider=Remoting.XhrProvider||{};
 FSharpEvent=Control.FSharpEvent=Control.FSharpEvent||{};
 LinkedList=Collections.LinkedList=Collections.LinkedList||{};
 AuthenticationParameters=Msal$1.AuthenticationParameters=Msal$1.AuthenticationParameters||{};
 Account=Msal$1.Account=Msal$1.Account||{};
 Router$1=Sitelets.Router=Sitelets.Router||{};
 List$2=Sitelets.List=Sitelets.List||{};
 Pair=Collections.Pair=Collections.Pair||{};
 Result$1=WebSharper.Result=WebSharper.Result||{};
 Scheduler=Concurrency.Scheduler=Concurrency.Scheduler||{};
 CancellationTokenSource=WebSharper.CancellationTokenSource=WebSharper.CancellationTokenSource||{};
 DynamicAttrNode=UI.DynamicAttrNode=UI.DynamicAttrNode||{};
 Measures=LayoutEngineModule.Measures=LayoutEngineModule.Measures||{};
 Hoverable=LibraryJS.Hoverable=LibraryJS.Hoverable||{};
 Hoverable$1=Hoverable.Hoverable=Hoverable.Hoverable||{};
 Event=Global.Event;
 UIEvent=Global.UIEvent;
 ResizeObserver=LibraryJS.ResizeObserver=LibraryJS.ResizeObserver||{};
 SC$6=Global.StartupCode$WebSharper_UI$Templates=Global.StartupCode$WebSharper_UI$Templates||{};
 Elt=UI.Elt=UI.Elt||{};
 Attrs$1=Client$1.Attrs=Client$1.Attrs||{};
 Dyn=Attrs$1.Dyn=Attrs$1.Dyn||{};
 Prepare=Templates.Prepare=Templates.Prepare||{};
 An=UI.An=UI.An||{};
 Settings=Client$1.Settings=Client$1.Settings||{};
 Mailbox$1=Abbrev.Mailbox=Abbrev.Mailbox||{};
 OperationCanceledException=WebSharper.OperationCanceledException=WebSharper.OperationCanceledException||{};
 Json=WebSharper.Json=WebSharper.Json||{};
 HashSetUtil=Collections.HashSetUtil=Collections.HashSetUtil||{};
 Event$1=Control.Event=Control.Event||{};
 Event$2=Event$1.Event=Event$1.Event||{};
 NonStandardPromiseRejectionException=JavaScript.NonStandardPromiseRejectionException=JavaScript.NonStandardPromiseRejectionException||{};
 SC$7=Global.StartupCode$WebSharper_Sitelets$Router=Global.StartupCode$WebSharper_Sitelets$Router||{};
 Map=Collections.Map=Collections.Map||{};
 Queue=WebSharper.Queue=WebSharper.Queue||{};
 SC$8=Global.StartupCode$WebSharper_UI$DomUtility=Global.StartupCode$WebSharper_UI$DomUtility||{};
 SC$9=Global.StartupCode$WebSharper_UI$Attr_Client=Global.StartupCode$WebSharper_UI$Attr_Client||{};
 AggregateException=WebSharper.AggregateException=WebSharper.AggregateException||{};
 KeyCollection=Collections.KeyCollection=Collections.KeyCollection||{};
 Updates=UI.Updates=UI.Updates||{};
 Docs$1=Client$1.Docs=Client$1.Docs||{};
 RunState=Docs$1.RunState=Docs$1.RunState||{};
 NodeSet=Docs$1.NodeSet=Docs$1.NodeSet||{};
 Anims=UI.Anims=UI.Anims||{};
 SC$10=Global.StartupCode$WebSharper_UI$Doc_Proxy=Global.StartupCode$WebSharper_UI$Doc_Proxy||{};
 Char=WebSharper.Char=WebSharper.Char||{};
 FormatException=WebSharper.FormatException=WebSharper.FormatException||{};
 StringEncoding=Sitelets.StringEncoding=Sitelets.StringEncoding||{};
 String$1=UI.String=UI.String||{};
 SC$11=Global.StartupCode$WebSharper_UI$Animation=Global.StartupCode$WebSharper_UI$Animation||{};
 AppendList=UI.AppendList=UI.AppendList||{};
 LinkedListEnumerator=Collections.LinkedListEnumerator=Collections.LinkedListEnumerator||{};
 PathUtil=Sitelets.PathUtil=Sitelets.PathUtil||{};
 Easing=UI.Easing=UI.Easing||{};
 HashSet$1=Abbrev.HashSet=Abbrev.HashSet||{};
 DomNodes=Docs$1.DomNodes=Docs$1.DomNodes||{};
 SC$12=Global.StartupCode$WebSharper_UI$AppendList=Global.StartupCode$WebSharper_UI$AppendList||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime$1=IntelliFactory&&IntelliFactory.Runtime;
 Math=Global.Math;
 $=Global.jQuery;
 console=Global.console;
 Date$1=Global.Date;
 JSON=Global.JSON;
 Reflect=Global.Reflect;
 String$2=Global.String;
 MainProgram.mainProgram=function()
 {
  var titleV,mesActualW,anoActualW,nombreAliadoW,idAliadoW,statusAliadoW,comisionAliadoW,datosAliadoW,l,m,a,o,v,b,t,h,M,M$1,p;
  titleV=Var$1.Create$1(MainProgram.appName());
  mesActualW=View.Map(function($1)
  {
   return MainProgram.mesToString($1.periodoActual);
  },ModeloUI.modeloV().get_View());
  anoActualW=View.Map(function($1)
  {
   return Global.String($1.anoActual);
  },ModeloUI.modeloV().get_View());
  nombreAliadoW=View.Map(function($1)
  {
   return Aliado$2.nombre2($1.datosPersonales);
  },ModeloUI.aliadoW());
  idAliadoW=View.Map(function($1)
  {
   return $1.id.get_Id();
  },ModeloUI.aliadoW());
  statusAliadoW=View.Map(function($1)
  {
   return Global.String($1.status);
  },ModeloUI.aliadoW());
  comisionAliadoW=View.Map(function($1)
  {
   return Global.String($1.comision);
  },ModeloUI.aliadoW());
  datosAliadoW=View.Map(function($1)
  {
   return Global.String($1.nReferidos);
  },ModeloUI.aliadoW());
  AppFramework.addPlugIn(PlugIn.New(MainProgram.appName(),[AppFramework.newVar("title",titleV),AppFramework.newVar("contentVar",ModeloUI.contentVar()),AppFramework.newVar("invitaciones",ModeloUI.invitacionesV()),AppFramework.newVar("influencer",MainProgram.influencerV())],[AppFramework.newViw("mesActual",mesActualW),AppFramework.newViw("anoActual",anoActualW),AppFramework.newViw("aliado",nombreAliadoW),AppFramework.newViw("idAliado",idAliadoW),AppFramework.newViw("status",statusAliadoW),AppFramework.newViw("comision",comisionAliadoW),AppFramework.newViw("datos",datosAliadoW),AppFramework.newViw("emailsInvitar",ModeloUI.emailsInvitarW()),AppFramework.newViw("invitacionesDisabled",ModeloUI.invitacionesDisabledW()),AppFramework.newViw("VideoW",View.Map(function($1)
  {
   return $1.$==5?$1.$0:"";
  },ModeloUI.endPointV().get_View())),AppFramework.newViw("influencerClassW",MainProgram.influencerClassW())],[AppFramework.newDoc("Aliados",Lazy.Create(RenderAliados.aliados)),AppFramework.newDoc("Aliado",Lazy.Create(RenderAliado.aliado)),AppFramework.newDoc("Calculo",Lazy.Create(RenderAliado.calculo)),AppFramework.newDoc("FormaRegistro",Lazy.Create(FormaRegistro.formaDoc)),AppFramework.newDoc("FormaDatos",Lazy.Create(FormaDatos.formaDoc)),AppFramework.newDoc("FormaContactos",Lazy.Create(FormaContactos.formaDoc)),AppFramework.newDoc("FormaFormasPago",Lazy.Create(FormaFormasPago.formaDoc)),AppFramework.newDoc("contentDoc",Lazy.Create(MainProgram.getContentDoc)),AppFramework.newDoc("ReporteConsolidado",Lazy.Create(ReporteConsolidado.consolidado)),AppFramework.newDoc("TablaPagos",Lazy.Create(TablaPagos.comisiones)),AppFramework.newDoc("ListaDocs",Lazy.Create(ListaDocs.listaDocs)),AppFramework.newDoc("FormaAutorizacion",Lazy.Create(FormaAutorizacion.formaAutorizacion)),AppFramework.newDoc("FormaContrato",Lazy.Create(FormaContrato.formaContrato)),AppFramework.newDoc("Transacciones",Lazy.Create(Transacciones.transacciones)),AppFramework.newDoc("Pendientes",Lazy.Create(function()
  {
   return Pendientes.pendientes(ModeloUI.aliadoW());
  }))],[AppFramework.newAct("Logout",function()
  {
   MainProgram.logout();
  }),AppFramework.newAct("LogIn",function()
  {
   MainProgram.login();
  }),AppFramework.newAct("enviarInvitaciones",function()
  {
   MainProgram.enviarCorreosInvitacion();
  }),AppFramework.newAct("gotoInfluencer",function()
  {
   MainProgram.gotoInfluencer();
  })],[]));
  LayoutEngineModule.addLayout((l=(m=self.document.getElementById("GlobalLayout"),Unchecked.Equals(m,null)?"\r\n                            menuEditor layout\r\n                            |          main\r\n            \r\n                            main div \"\"\r\n                            :                 template  header     \"id=header\"           brand  brandV   logout \"@{Prozper.Logout}\" afiliado \"@{Prozper.aliado}\"\r\n                            :                 Doc       Prozper.contentDoc\r\n                            :                 template  sidedrawer \"id=sidedrawer\"       brand  brandV   idaliado \"@{Prozper.idAliado}\" \r\n                            :                 template  footer     \"id=footer\"           brand  brandV   madeby \"CIPHER Bsc\" madebylink \"www.cipherbsc.com\"\r\n             \r\n                            mainContent          template  content    \"id=content-wrapper\"  content aliados                  fecha \"@{Prozper.mesActual} @{Prozper.anoActual}\" idaliado \"@{Prozper.aliado}\"\r\n                            cntFormaRegistro     template  content    \"id=content-wrapper\"  content Prozper.FormaRegistro    titulo \"Referido por: @{Prozper.aliado}\"  \r\n                            cntFormaDatos        template  content    \"id=content-wrapper\"  content Prozper.FormaDatos       titulo \" \"\r\n                            cntFormaContactos    template  content    \"id=content-wrapper\"  content Prozper.FormaContactos   titulo \" \" \r\n                            cntFormaFormasPago   template  content    \"id=content-wrapper\"  content Prozper.FormaFormasPago  titulo \" \" \r\n                            cntFormaCuentas      template  content    \"id=content-wrapper\"  content ProzperLyt.FormaCuentas  titulo \" \"  \r\n                            cntFormaDocumentos   template  content    \"id=content-wrapper\"  content Prozper.FormaDocumentos  titulo \" \"  \r\n                            cntFormaNoUser       template  content    \"id=content-wrapper\"  content botonLogin               titulo \" \"  \r\n                            cntFormaInvitaciones template  content    \"id=content-wrapper\"  content invitaciones             titulo \" \"  \r\n            \r\n                            aliados          div       \"class=row\"\r\n                            :                div       \"class=mui-col-md-6\"\r\n                            ::               div       \"class=mui-panel mui--z5 scrollbar;max-height:550px;overflow:auto\" Prozper.Aliados\r\n                            :                div       \"class=mui-col-md-6\"\r\n                            ::               div       \"class=mui-panel mui--z5 scrollbar;max-height:550px;overflow:auto\" Aliado Comisiones\r\n                            brandV           Var       \"Prozper\"\r\n            \r\n                            botonLogin       div       \"class=row\"\r\n                            :                div       \"class=mui-col-md-6\"\r\n                            ::               div       \"class=mui-panel mui--z5 scrollbar;max-height:550px;overflow:auto\" \r\n                            :::              button    Prozper.LogIn \"class=mui-btn mui-btn--primary\" \"Ingresar al Sistema\"\r\n            \r\n                            invitaciones     div       \"class=row\"\r\n                            :                div       \"class=mui-col-md-6 mui-col-md-offset-1\"\r\n                            ::               div       \"class=mui-panel mui--z5 scrollbar; max-height:550px ; overflow:auto\" \r\n                            :::              h1        \"\" \"Enviar Invitaciones\"\r\n                            :::              textarea  Prozper.invitaciones  \"width:100% ; height:30rem; placeholder=Copie aqui las direcciones de correo electronico\" \r\n                            :                div       \"white-space: pre-wrap\" \"@{Prozper.emailsInvitar}\"\r\n                            :                button    Prozper.enviarInvitaciones \"class=mui-btn mui-btn--raised mui-btn--primary;@{Prozper.invitacionesDisabled}\" \"Enviar\"\r\n            \r\n                            Aliado           div       \"class=mui-col-md-8\"\r\n                            :                Doc Prozper.Aliado\r\n            \r\n                            Comisiones       template    tablacomisiones \"class=mui-col-md-3\"  tbody filasComisiones\r\n                            filasComisiones  concat      \"\"\r\n                            :                template    filacomision    \"\"  periodo \"Ene 2018\" comision \"$1,000\"\r\n                            :                template    filacomision    \"\"  periodo \"Feb 2018\" comision \"$1,000\"\r\n                            :                template    filacomision    \"\"  periodo \"Mar 2018\" comision \"$1,000\"\r\n                            :                template    filacomision    \"\"  periodo \"Abr 2018\" comision \"$1,000\"\r\n                            :                template    filacomision    \"\"  periodo \"May 2018\" comision \"$1,000\"\r\n                            :                template    filacomision    \"\"  periodo \"Jun 2018\" comision \"$1,000\"\r\n                            :                template    filacomision    \"\"  periodo \"Jul 2018\" comision \"$1,000\"\r\n                            :                template    filacomision    \"\"  periodo \"Ago 2018\" comision \"$1,000\"\r\n                            :                template    filacomision    \"\"  periodo \"Sep 2018\" comision \"$1,000\"\r\n                            :                template    filacomision    \"\"  periodo \"Oct 2018\" comision \"$1,000\"\r\n                            :                template    filacomision    \"\"  periodo \"Nov 2018\" comision \"$1,000\"\r\n                            :                template    filacomision    \"\"  periodo \"Dec 2018\" comision \"$1,000\"\r\n                    \r\n                            menuEditorx      horizontal  65          menuLogo                  editorMessages\r\n                            double           horizontal  0-50-100    AppFramework.AppFwkClient menuEditor\r\n                            menuLogo         vertical    350         logo                      menu\r\n                            logo             span       \"margin:0;   color:gray; font-size: 55px; font-weight:530\" \"StackOverflow\"\r\n                            editorMessages   horizontal  10-83-100   editorButtons             messages\r\n                            messages         vertical    0-50-100    messagesLeft              messagesRight\r\n                            editorButtons    vertical    150 buttons snippetsSnippet \r\n                            snippetsSnippet  vertical    0-20-100    snippets                  editorProperties\r\n                            snippets         horizontal  20          \"@{FSharpStation.CurrentPath}\" tblDimensions2\r\n                            editorProperties vertical    0-100-100   snippet                   properties\r\n                            properties       div        \"\"           FSharpStation.Properties\r\n                            snippet          horizontal  35          Name                      FSharpStation.editor\r\n                            menu             span       \"display: grid; grid-template-columns: 30% 20% 20% 10%; grid-gap: 25px; margin:5px; grid-template-rows:50px\" inpServer btnLoad btnSaveAs\r\n                             \r\n                            severalTabs      wcomp-tabstrip  \"\" \r\n                            :                div \"tabname=Dimensions\" \r\n                            ::               div \"\" btnAddDimension RuleEditor.Dimensions\r\n                            :                div \"tabname=Cubes\"\r\n                            :                div \"tabname=Global Definitions\" RuleEditor.globalDefs\r\n                    \r\n                            btnSaveAs        button RuleEditor.SaveAs         \"class=btn @{RuleEditor.SaveNeeded}\" \"Save as...    \"\r\n                            btnAddDimension  button RuleEditor.AddDimension      \"\"                  \"new dim...\"\r\n                            btnDeleteSnippet button FSharpStation.RemoveSnippet  \"\"                  \"Delete Snippet\"\r\n                            btnIndentIn      button FSharpStation.IndentIn       \"\"                  \"Indent In  >> \"\r\n                            btnIndentOut     button FSharpStation.IndentOut      \"\"                  \"Indent Out << \"\r\n                            btnRunFS         button FSharpStation.RunFS          \"\"                  \"Run F#        \"\r\n                            btnAbortFsi      button FSharpStation.AbortFsi       \"\"                  \"Abort Fsi     \"\r\n                    \r\n                            messagesLeft     wcomp-tabstrip                      \"\"                  Output FsCode\r\n                            messagesRight    wcomp-tabstrip                      \"\"                  Parser\r\n                    \r\n                            buttons          div \"overflow: hidden; display: grid; grid-template-columns: 100%; grid-template-rows: repeat(15, calc(100% / 15)); bxackground-color: #eee; box-sizing: border-box; padding : 5px; grid-gap: 5px; margin-right: 21px\"\r\n                            :                button RuleEditor.AddCalculation    \"\"                 \"Add Calculation\"\r\n                            :                button RuleEditor.AddTotal          \"\"                 \"Add Total\"\r\n                            :                Doc       none x\r\n                            :                button RuleEditor.IndentIn          \"\"                  \"Indent In  >> \"\r\n                            :                button RuleEditor.IndentOut         \"\"                  \"Indent Out << \"\r\n                    \r\n                            Output           textarea  RuleEditor.Output         \"tabname=Output ; placeholder=Output messages ; spellcheck=false\" \r\n                            FsCode           textarea  RuleEditor.CodeFS         \"tabname=F# Code; placeholder=F# Code         ; spellcheck=false\" \r\n                            Parser           textarea  RuleEditor.Parser         \"tabname=Parser ; placeholder=Parser messages; dblclick=@{FSharpStation.JumpTo} ; spellcheck=false\" \r\n                            Name             Doc       InputLabel                \"\"     \"Name:\"        FSharpStation.SnippetName\r\n                            inpServer        Doc       InputLabel                \"\"     \"Server:\"      RuleEditor.Server\r\n                            btnLoad          Doc       InputFile                 \"\"     \"Load File...\" RuleEditor.LoadFile  FileName\r\n                            btnImport        Doc       InputFile                 \"\"     \"Import...\"    FSharpStation.Import    \"\"\r\n                            FileName         div                                 \"class=form-control\"  RuleEditor.fileName\r\n            \r\n                       ":m.textContent),LayoutEngineModule.newLyt(MainProgram.layoutName(),l)));
  a=(o=null,(v=MainProgram.layoutName(),o==null?v:o.$0));
  AppFramework.mainDocV().Set(a);
  Doc.BindView(function(al)
  {
   var b$1,p$1,i;
   return Unchecked.Equals(al.id,Aliado$2.empty().id)?(b$1=ProviderBuilder.Make(),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i=new TemplateInstance.New(p$1[1],ProzperServer_Templates.opcionesadministrador(p$1[0])),(b$1.i=i,i)))).get_Doc():Doc.get_Empty();
  },ModeloUI.aliadoW());
  b=(t=(h=MainProgram.getDocView(MainProgram.layoutName(),"headerCenter"),(M=MainProgram.getMenuDoc(),(M$1=MainProgram.getContentDoc(),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"maincontent",
   $1:M$1
  })).WithHole({
   $:0,
   $0:"menu",
   $1:M
  })).WithHole({
   $:0,
   $0:"headercenter",
   $1:h
  })),t.WithHole(Handler.EventQ2(t.k,"logout",function()
  {
   return t.i;
  },function()
  {
   MainProgram.logout();
  }))).WithHole({
   $:2,
   $0:"cortina",
   $1:View.Map(function($1)
   {
    return $1>0?"mui-overlay":"not-mui-overlay";
   },Rpc.llamadas().get_View())
  });
  p=Handler.CompleteHoles(b.k,b.h,[]);
  b.i=new TemplateInstance.New(p[1],Templates.RunFullDocTemplate(p[0]));
  View.Sink(function(t$1)
  {
   self.document.title=t$1;
  },titleV.get_View());
 };
 MainProgram.appName=function()
 {
  SC$1.$cctor();
  return SC$1.appName;
 };
 MainProgram.influencerV=function()
 {
  SC$1.$cctor();
  return SC$1.influencerV;
 };
 MainProgram.influencerClassW=function()
 {
  SC$1.$cctor();
  return SC$1.influencerClassW;
 };
 MainProgram.getContentDoc=function()
 {
  return Doc.EmbedView(View.Map(function(d)
  {
   return MainProgram.getDoc(MainProgram.appName(),d);
  },ModeloUI.contentVar().get_View()));
 };
 MainProgram.logout=function()
 {
  Msal.logout();
 };
 MainProgram.login=function()
 {
  Msal.logout();
 };
 MainProgram.enviarCorreosInvitacion=function()
 {
  var b;
  Rpc.iterA((b=Monads.asyncResult(),b.Run(b.Delay(function()
  {
   return Extensions["AsyncResultBuilder.Bind"](b,View.GetAsync(ModeloUI.emailsInvitarW()),function(a)
   {
    return Extensions["AsyncResultBuilder.Bind"](b,View.GetAsync(View.Map(function($1)
    {
     return $1.id.get_Id();
    },ModeloUI.aliadoW())),function()
    {
     var emails;
     emails=Arrays.filter(function(s)
     {
      return Strings.Trim(s)!=="";
     },Strings.SplitChars(a,["\n"],0));
     return b.Bind$1(Rpc.enviarCorreosInvitacion("Invitacion a Prozper",emails),function()
     {
      var m;
      m=Arrays.length(emails);
      return m===0?(Global.alert("Ningun correo valido ha sido encontrado"),b.Zero()):m===1?(Global.alert("Invitacion ha sido enviada"),b.Zero()):(Global.alert("Invitaciones han sido enviadas"),b.Zero());
     });
    });
   });
  }))));
 };
 MainProgram.gotoInfluencer=function()
 {
  var b;
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Rpc.obtenerIdInfluyente(MainProgram.influencerV().Get()),function(a)
   {
    return a.$==0?(self.location.href="/Register/"+MainProgram.influencerV().Get(),Concurrency.Zero()):(self.alert("Código inválido:"+MainProgram.influencerV().Get()),Concurrency.Zero());
   });
  })),null);
 };
 MainProgram.layoutName=function()
 {
  SC$1.$cctor();
  return SC$1.layoutName;
 };
 MainProgram.getMenuDoc=function()
 {
  return Doc.EmbedView(View.Map2(function($1,$2)
  {
   var d;
   d=$1!=null&&$1.$==1?Unchecked.Equals($2.id,Aliado$2.empty().id)?"ProzperLyt.mnuAdministrador":"ProzperLyt.mnuUsuario":"ProzperLyt.mnuNoUsuario";
   return MainProgram.getDoc(MainProgram.appName(),d);
  },Msal.userO().get_View(),ModeloUI.aliadoW()));
 };
 MainProgram.getDocView=function(appName,docName)
 {
  return LayoutEngineModule.turnToView(function()
  {
   return MainProgram.getDoc(appName,docName);
  });
 };
 MainProgram.mesToString=function(a)
 {
  return a===1?"Ene":a===2?"Feb":a===3?"Mar":a===4?"Abr":a===5?"May":a===6?"Jun":a===7?"Jul":a===8?"Ago":a===9?"Sep":a===10?"Oct":a===11?"Nov":a===12?"Dic":"---";
 };
 MainProgram.getDoc=function(appName,docName)
 {
  var o,o$1,t;
  o=(o$1=(t=((LayoutEngineModule.splitName())(appName))(docName),AppFramework.tryGetDoc(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:LayoutEngineModule.getDocFinal(T$1.Empty,o$1.$0)
  });
  return o==null?LayoutEngineModule.errDoc((function($1)
  {
   return function($2)
   {
    return $1("Doc not found "+Utils.toSafe($2));
   };
  }(Global.id))(docName)):o.$0;
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
 AppFramework.addPlugIn=function(p)
 {
  AppFramework.plugIns().Append(p);
  AppFramework.mainDocV().Set(AppFramework.mainDocV().Get());
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
 AppFramework.newAct=function(name,fnc)
 {
  return PlugInAction.New(name,{
   $:0,
   $0:fnc
  },View.Const(true));
 };
 AppFramework.mainDocV=function()
 {
  SC$2.$cctor();
  return SC$2.mainDocV;
 };
 AppFramework.plugIns=function()
 {
  SC$2.$cctor();
  return SC$2.plugIns;
 };
 AppFramework.newDocF=function(name,docF)
 {
  return PlugInDoc.New(name,docF);
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
 AppFramework.tryGetVar=function(plgName,varName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:Arrays.tryFind(function(_var)
  {
   return _var.varName===varName;
  },o.$0.plgVars);
 };
 AppFramework.selectionPlugInO=function()
 {
  SC$2.$cctor();
  return SC$2.selectionPlugInO;
 };
 AppFramework.defaultPlugIn=function()
 {
  SC$2.$cctor();
  return SC$2.defaultPlugIn;
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
 AppFramework.newQry=function(name,qry)
 {
  return PlugInQuery.New(name,qry);
 };
 AppFramework.AppFwkClient=function()
 {
  SC$2.$cctor();
  return SC$2.AppFwkClient;
 };
 AppFramework.actHello=function()
 {
  SC$2.$cctor();
  return SC$2.actHello;
 };
 AppFramework.qryDocs=function()
 {
  SC$2.$cctor();
  return SC$2.qryDocs;
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
 AppFramework.tryGetPlugIn=function(plgName)
 {
  return AppFramework.plugIns().TryFindByKey(plgName);
 };
 AppFramework.newActF=function(name,fncF)
 {
  return PlugInAction.New(name,fncF,View.Const(true));
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
 ModeloUI.contentVar=function()
 {
  SC$1.$cctor();
  return SC$1.contentVar;
 };
 ModeloUI.invitacionesV=function()
 {
  SC$1.$cctor();
  return SC$1.invitacionesV;
 };
 ModeloUI.emailsInvitarW=function()
 {
  SC$1.$cctor();
  return SC$1.emailsInvitarW;
 };
 ModeloUI.invitacionesDisabledW=function()
 {
  SC$1.$cctor();
  return SC$1.invitacionesDisabledW;
 };
 ModeloUI.endPointV=function()
 {
  SC$1.$cctor();
  return SC$1.endPointV;
 };
 ModeloUI.aliadoW=function()
 {
  SC$1.$cctor();
  return SC$1.aliadoW;
 };
 ModeloUI.modeloV=function()
 {
  SC$1.$cctor();
  return SC$1.modeloV;
 };
 ModeloUI.selAliadoIdOV=function()
 {
  SC$1.$cctor();
  return SC$1.selAliadoIdOV;
 };
 ModeloUI.money=function(m)
 {
  return"$"+ModeloUI.separate(Global.String(m),T$1.Empty);
 };
 ModeloUI.selAliadoIdDoc=function(fDoc)
 {
  var b;
  return Doc.BindView(Global.id,(b=View.get_Do(),View.Bind(function(a)
  {
   return View.Bind(function(a$1)
   {
    var aliadoO,aid;
    aliadoO=a$1==null?null:(aid=a$1.$0,Seq.tryFind(function(al)
    {
     return Unchecked.Equals(al.id,aid);
    },a.aliados));
    return View.Const(aliadoO!=null&&aliadoO.$==1?fDoc(View.Const(aliadoO.$0)):Doc.get_Empty());
   },ModeloUI.selAliadoIdOV().get_View());
  },ModeloUI.modeloV().get_View())));
 };
 ModeloUI.aliadoIdDoc=function(fDoc)
 {
  var b;
  return Doc.BindView(Global.id,(b=View.get_Do(),View.Bind(function(a)
  {
   var aid,aliadoO;
   aid=a.idAliado;
   aliadoO=Seq.tryFind(function(al)
   {
    return Unchecked.Equals(al.id,aid);
   },a.aliados);
   return View.Const(aliadoO!=null&&aliadoO.$==1?fDoc(View.Const(aliadoO.$0)):Doc.get_Empty());
  },ModeloUI.modeloV().get_View())));
 };
 Aliado.get_LoggedId=function()
 {
  var o,o$1;
  return new IdAliado({
   $:0,
   $0:(o=(o$1=Msal.userO().Get(),o$1==null?null:{
    $:1,
    $0:o$1.$0.idToken.oid
   }),o==null?"":o.$0)
  });
 };
 ModeloUI.separate=function(s,parts)
 {
  var s$1;
  while(true)
   if(s==="")
    return(function(s$2)
    {
     return function(s$3)
     {
      return Strings.concat(s$2,s$3);
     };
    }(","))(parts);
   else
    {
     s$1=s;
     s=Library["String.Left$1"](s$1,-3);
     parts=new T$1({
      $:1,
      $0:Library["String.Right$1"](s$1,3),
      $1:parts
     });
    }
 };
 ModeloUI.formasPagoAliadoV=function()
 {
  SC$1.$cctor();
  return SC$1.formasPagoAliadoV;
 };
 Operators.FailWith=function(msg)
 {
  throw new Error(msg);
 };
 Operators.toInt=function(x)
 {
  var u;
  u=Operators.toUInt(x);
  return u>=2147483648?u-4294967296:u;
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
 Operators.toUInt=function(x)
 {
  return(x<0?Math.ceil(x):Math.floor(x))>>>0;
 };
 Operators.KeyValue=function(kvp)
 {
  return[kvp.K,kvp.V];
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
 View.Map2=function(fn,a,a$1)
 {
  return View.CreateLazy(function()
  {
   return Snap.Map2(fn,a(),a$1());
  });
 };
 View.Apply=function(fn,view)
 {
  return View.Map2(function(f,x)
  {
   return f(x);
  },fn,view);
 };
 View.Map3=function(fn,a,a$1,a$2)
 {
  return View.CreateLazy(function()
  {
   return Snap.Map3(fn,a(),a$1(),a$2());
  });
 };
 View.MapAsync=function(fn,a)
 {
  return View.CreateLazy(function()
  {
   return Snap.MapAsync(fn,a());
  });
 };
 View.GetAsync=function(v)
 {
  return Concurrency.FromContinuations(function(ok)
  {
   return View.Get(ok,v);
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
 View.get_Do=function()
 {
  return ViewBuilder.B;
 };
 View.TryGet=function(a)
 {
  return Snap.TryGet(a());
 };
 View.Bind=function(fn,view)
 {
  return View.Join(View.Map(fn,view));
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
   result=Array$1.mapInPlace(function(x)
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
 View.MapSeqCachedBy=function(key,conv,view)
 {
  var state;
  state=[new Dictionary.New$5()];
  return View.Map(function(xs)
  {
   var prevState,newState,result;
   prevState=state[0];
   newState=new Dictionary.New$5();
   result=Array$1.mapInPlace(function(x)
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
 Lazy.CreateFromValue=function(v)
 {
  return LazyRecord.New(true,v,Lazy.cachedLazy);
 };
 RenderAliados.aliados=function()
 {
  var expandidos,hijosDeO,b,T$2,x,p,i;
  function hijosDe(id)
  {
   var o,o$1;
   o=(o$1=hijosDeO.Get(),o$1==null?null:{
    $:1,
    $0:o$1.$0(id)
   });
   return o==null?[]:o.$0;
  }
  function referidos(al)
  {
   return al.nReferidos===0?"-":(((Runtime$1.Curried3(function($1,$2,$3)
   {
    return $1(Global.String($2)+"/"+Global.String($3));
   }))(Global.id))(al.nRefActivos))(al.nReferidos);
  }
  function descendientes(al)
  {
   return al.nDescendientes===0?"-":(((Runtime$1.Curried3(function($1,$2,$3)
   {
    return $1(Global.String($2)+"/"+Global.String($3));
   }))(Global.id))(al.nDescActivos))(al.nDescendientes);
  }
  function comision(v)
  {
   return v===0?"-":ModeloUI.money(v);
  }
  function expandido(id)
  {
   return View.Map(function(exp)
   {
    return Seq.isEmpty(hijosDe(id))?"":Unchecked.Equals(exp==null?null:{
     $:1,
     $0:exp.$0.Contains(id)
    },{
     $:1,
     $0:true
    })?"Expandido":"Colapsado";
   },expandidos.get_View());
  }
  function expandir(id)
  {
   var o,x$1,v;
   expandidos.Set({
    $:1,
    $0:((Unchecked.Equals((o=expandidos.Get(),o==null?null:{
     $:1,
     $0:o.$0.Contains(id)
    }),{
     $:1,
     $0:true
    })?function(v$1)
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
    })(id))((x$1=expandidos.Get(),(v=new FSharpSet.New$1(null),x$1==null?v:x$1.$0)))
   });
  }
  function seleccionar(id)
  {
   ModeloUI.selAliadoIdOV().Set({
    $:1,
    $0:id
   });
  }
  function sortAliados(als)
  {
   var c,c$1,c$2,c$3,c$4,c$5,c$6,c$7,c$8,$1,nivel,raiz,o,als$1,buscar;
   function f(al)
   {
    return al.comision;
   }
   function f$1(al)
   {
    return al.status;
   }
   function f$2(al)
   {
    return[al.nRefActivos,al.nReferidos];
   }
   function f$3(al)
   {
    return[al.nDescActivos,al.nDescendientes];
   }
   function f$4(al)
   {
    return Aliado$2.nombre(al.datosPersonales);
   }
   function buscarExpandidos(al)
   {
    return Seq.delay(function()
    {
     return Seq.append([al],Seq.delay(function()
     {
      var o$1,o$2;
      return(o$1=(o$2=expandidos.Get(),o$2==null?null:{
       $:1,
       $0:o$2.$0.Contains(al.id)
      }),o$1==null?false:o$1.$0)?Seq.collect(buscarExpandidos,buscar.hijos(al)):[];
     }));
    });
   }
   als$1=(c=(c$1=(c$2=(c$3=(c$4=(Runtime$1.Curried3(SortWith.desc))(f),c$5=(Runtime$1.Curried3(SortWith.asc))(f$1),Runtime$1.Curried(SortWith.op_AmpGreater,2,[function($2,$3)
   {
    return(c$4($2))($3);
   },function($2,$3)
   {
    return(c$5($2))($3);
   }])),c$6=(Runtime$1.Curried3(SortWith.desc))(f$2),Runtime$1.Curried(SortWith.op_AmpGreater,2,[function($2,$3)
   {
    return(c$3($2))($3);
   },function($2,$3)
   {
    return(c$6($2))($3);
   }])),c$7=(Runtime$1.Curried3(SortWith.desc))(f$3),Runtime$1.Curried(SortWith.op_AmpGreater,2,[function($2,$3)
   {
    return(c$2($2))($3);
   },function($2,$3)
   {
    return(c$7($2))($3);
   }])),c$8=(Runtime$1.Curried3(SortWith.asc))(f$4),Runtime$1.Curried(SortWith.op_AmpGreater,2,[function($2,$3)
   {
    return(c$1($2))($3);
   },function($2,$3)
   {
    return(c$8($2))($3);
   }])),Seq.sortWith(function($2,$3)
   {
    return(c($2))($3);
   },als));
   buscar=Aliado$2.busqueda(als$1);
   hijosDeO.Set({
    $:1,
    $0:buscar.hijosDe
   });
   try
   {
    nivel=Seq.min(Seq.map(function(al)
    {
     return al.nivel;
    },als$1));
   }
   catch(m)
   {
    nivel=1;
   }
   raiz=Seq.filter(function(al)
   {
    return al.nivel===nivel;
   },als$1);
   Seq.isEmpty(raiz)?expandidos.Set(null):expandidos.Get()==null?(expandidos.Set({
    $:1,
    $0:new FSharpSet.New(Seq.map(function(al)
    {
     return al.id;
    },raiz))
   }),o=Seq.tryHead(Seq.map(function(al)
   {
    return al.id;
   },raiz)),o==null?void 0:seleccionar(o.$0)):void 0;
   return Seq.delay(function()
   {
    return Seq.collect(buscarExpandidos,raiz);
   });
  }
  function a(alid,alv)
  {
   var b$1,t,t$1,e,p$1,i$1;
   return(b$1=(t=(t$1=(e=expandido(alid),ProviderBuilder.Make().WithHole({
    $:2,
    $0:"nombre",
    $1:View.Map(function($1)
    {
     return Aliado$2.nombre($1.datosPersonales);
    },alv)
   }).WithHole({
    $:2,
    $0:"status",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(ProzperServer_GeneratedPrintf.p$1($3));
      };
     }(Global.id))($1.status);
    },alv)
   }).WithHole({
    $:2,
    $0:"tipo",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(ProzperServer_GeneratedPrintf.p$2($3));
      };
     }(Global.id))($1.tipo);
    },alv)
   }).WithHole({
    $:2,
    $0:"nivel",
    $1:View.Map(function($1)
    {
     return Global.String($1.nivel);
    },alv)
   }).WithHole({
    $:2,
    $0:"referidos",
    $1:View.Map(referidos,alv)
   }).WithHole({
    $:2,
    $0:"descendientes",
    $1:View.Map(descendientes,alv)
   }).WithHole({
    $:2,
    $0:"comision",
    $1:View.Map(function($1)
    {
     return comision($1.comision);
    },alv)
   }).WithHole({
    $:2,
    $0:"expandido",
    $1:e
   })),t$1.WithHole(Handler.EventQ2(t$1.k,"expandir",function()
   {
    return t$1.i;
   },function()
   {
    expandir(alid);
   }))).WithHole({
    $:2,
    $0:"seleccionado",
    $1:View.Map(function($1)
    {
     return Unchecked.Equals({
      $:1,
      $0:alid
     },$1)?"seleccionado":"";
    },ModeloUI.selAliadoIdOV().get_View())
   }),t.WithHole(Handler.EventQ2(t.k,"seleccionar",function()
   {
    return t.i;
   },function()
   {
    seleccionar(alid);
   }))),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],ProzperServer_Templates.filaaliado(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();
  }
  expandidos=Var$1.Create$1(null);
  hijosDeO=Var$1.Create$1(null);
  return(b=(T$2=Doc.ConvertSeqBy(function(al)
  {
   return al.id;
  },function($1)
  {
   return function($2)
   {
    return a($1,$2);
   };
  },(x=View.Map(function($1)
  {
   return $1.aliados;
  },ModeloUI.modeloV().get_View()),View.Map2(function(a$1,a$2)
  {
   return sortAliados(a$2);
  },expandidos.get_View(),x))),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tbody",
   $1:T$2
  })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.tablaaliados(p[0])),(b.i=i,i)))).get_Doc();
 };
 RenderAliado.aliado=function()
 {
  function correo(al)
  {
   var o;
   o=Seq.tryPick(function(a)
   {
    return a.$==1?{
     $:1,
     $0:a.$0.email
    }:null;
   },al.contactos);
   return o==null?"correo no encontrado!":o.$0;
  }
  return ModeloUI.selAliadoIdDoc(function(alv)
  {
   var b,C,p,i;
   return(b=(C=RenderAliado.calculo(),ProviderBuilder.Make().WithHole({
    $:2,
    $0:"nombre",
    $1:View.Map(function($1)
    {
     return Aliado$2.nombre2($1.datosPersonales);
    },alv)
   }).WithHole({
    $:2,
    $0:"status",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(ProzperServer_GeneratedPrintf.p$1($3));
      };
     }(Global.id))($1.status);
    },alv)
   }).WithHole({
    $:2,
    $0:"tipo",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(ProzperServer_GeneratedPrintf.p$2($3));
      };
     }(Global.id))($1.tipo);
    },alv)
   }).WithHole({
    $:2,
    $0:"contacto",
    $1:View.Map(correo,alv)
   }).WithHole({
    $:0,
    $0:"calculo",
    $1:C
   })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.aliado(p[0])),(b.i=i,i)))).get_Doc();
  });
 };
 RenderAliado.calculo=function()
 {
  var prem,aliados;
  prem=View.Map(function($1)
  {
   return $1.premisas;
  },ModeloUI.modeloV().get_View());
  aliados=View.Map(function($1)
  {
   return $1.aliados;
  },ModeloUI.modeloV().get_View());
  View.Map2(function($1,$2)
  {
   return Seq.tryFind(function(al)
   {
    return Unchecked.Equals(al.id,$1);
   },$2);
  },View.Map(function($1)
  {
   return $1.idAliado;
  },ModeloUI.modeloV().get_View()),aliados);
  return ModeloUI.selAliadoIdDoc(function(alv)
  {
   var comisionV,premisasV,b,p,i;
   comisionV=View.Map2(Aliado$2.comision,prem,alv);
   premisasV=View.Map2(Aliado$2.premisas,prem,alv);
   return(b=ProviderBuilder.Make().WithHole({
    $:2,
    $0:"referidos",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(Global.String($3));
      };
     }(Global.id))($1.nReferidos);
    },alv)
   }).WithHole({
    $:2,
    $0:"refactivos",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(Global.String($3));
      };
     }(Global.id))($1.nRefActivos);
    },alv)
   }).WithHole({
    $:2,
    $0:"comreferido",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(Global.String($3));
      };
     }(Global.id))($1.nRefActivos);
    },alv)
   }).WithHole({
    $:2,
    $0:"descendientes",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(Global.String($3));
      };
     }(Global.id))($1.nDescendientes);
    },alv)
   }).WithHole({
    $:2,
    $0:"desactivos",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(Global.String($3));
      };
     }(Global.id))($1.nDescActivos);
    },alv)
   }).WithHole({
    $:2,
    $0:"comision",
    $1:View.Map(function($1)
    {
     return ModeloUI.money($1[0]+$1[1]);
    },comisionV)
   }).WithHole({
    $:2,
    $0:"comreferido",
    $1:View.Map(function($1)
    {
     return ModeloUI.money($1[0]);
    },comisionV)
   }).WithHole({
    $:2,
    $0:"comdescendiente",
    $1:View.Map(function($1)
    {
     return ModeloUI.money($1[1]);
    },comisionV)
   }).WithHole({
    $:2,
    $0:"porreferido",
    $1:View.Map(function($1)
    {
     return ModeloUI.money($1[0]);
    },premisasV)
   }).WithHole({
    $:2,
    $0:"pordescendiente",
    $1:View.Map(function($1)
    {
     return ModeloUI.money($1[1]);
    },premisasV)
   }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.calculo(p[0])),(b.i=i,i)))).get_Doc();
  });
 };
 FormaRegistro.formaDoc=function()
 {
  var mensajes,mostrar,datosOV,correoOV,telefonoOV,direccionOV,p,p$1,p$2,p$3,forma,b,t,p$4,i;
  mensajes=Var$1.Create$1("");
  mostrar=Var$1.Create$1(false);
  datosOV=Var$1.Create$1(null);
  correoOV=Var$1.Create$1(null);
  telefonoOV=Var$1.Create$1(null);
  direccionOV=Var$1.Create$1(null);
  p=DatosPersonales.formaDoc(datosOV);
  p$1=CorreoElectronico$1.formaDoc(correoOV);
  p$2=Telefono.formaDoc(telefonoOV);
  p$3=Direccion.formaDoc(direccionOV);
  forma=(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"mensajes",
   $1:View.Map2(function($1,$2)
   {
    return $1?$2:"";
   },mostrar.get_View(),mensajes.get_View())
  }).WithHole({
   $:0,
   $0:"datospersonales",
   $1:p[1]
  }).WithHole({
   $:0,
   $0:"correo",
   $1:p$1[1]
  }).WithHole({
   $:0,
   $0:"telefono",
   $1:p$2[1]
  }).WithHole({
   $:0,
   $0:"direccion",
   $1:p$3[1]
  }),t.WithHole(Handler.EventQ2(t.k,"registrarse",function()
  {
   return t.i;
  },function()
  {
   var m,$1,$2,$3,$4,$5,correo,datos,direccion,telefono,b$1;
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):($1=datosOV.Get(),$2=correoOV.Get(),$3=telefonoOV.Get(),$4=direccionOV.Get(),$1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3!=null&&$3.$==1&&($4!=null&&$4.$==1&&($5=[$2.$0,$1.$0,$4.$0,$3.$0],true))))?(correo=$5[0],datos=$5[1],direccion=$5[2],telefono=$5[3],Rpc.iterA((b$1=Monads.asyncResult(),b$1.Run(b$1.Delay(function()
   {
    var c;
    return b$1.Bind$1(Rpc.ejecutarDataEventoNuevo({
     $:3,
     $0:[new IdAliado({
      $:0,
      $0:Strings.Substring(Strings.Replace((c=Guid.NewGuid(),Global.String(c)),"-",""),0,20)
     }),datos,{
      $:1,
      $0:ModeloUI.modeloV().Get().idAliado
     },[{
      $:1,
      $0:correo
     },{
      $:2,
      $0:telefono
     },{
      $:0,
      $0:direccion
     }]]
    }),function(a)
    {
     Refresh.refrescarData(true);
     Global.alert((function($6)
     {
      return function($7)
      {
       return $6(ProzperServer_GeneratedPrintf.p$15($7));
      };
     }(Global.id))(a));
     return b$1.Zero();
    });
   }))))):Global.alert("Error not caught FormaRegistro"));
  }))),(p$4=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p$4[1],ProzperServer_Templates.formaregistro(p$4[0])),(b.i=i,i))));
  View.Sink(function(a)
  {
   mensajes.Set(a);
  },View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return function($3)
   {
    return function($4)
    {
     var es;
     es=Strings.concat(", ",Seq.delay(function()
     {
      return Seq.append($1,Seq.delay(function()
      {
       return Seq.append($2,Seq.delay(function()
       {
        return Seq.append($3,Seq.delay(function()
        {
         return $4;
        }));
       }));
      }));
     }));
     return es!==""?"Campos requeridos: "+es:"";
    };
   };
  },p[0],p$1[0]),p$2[0]),p$3[0]));
  return forma.get_Doc();
 };
 FormaDatos.formaDoc=function()
 {
  return ModeloUI.aliadoIdDoc(FormaDatos.formaAliado);
 };
 FormaDatos.formaAliado=function(aliadoW)
 {
  var mensajes,mostrar,datosOV,p,forma,b,t,p$1,i;
  function f(a)
  {
   return{
    $:1,
    $0:a
   };
  }
  function g(a)
  {
   datosOV.Set(a);
  }
  mensajes=Var$1.Create$1("");
  mostrar=Var$1.Create$1(false);
  datosOV=Var$1.Create$1(null);
  View.Sink(function(x)
  {
   return g(f(x));
  },View.Map(function(a)
  {
   return a.datosPersonales;
  },aliadoW));
  p=DatosPersonales.formaDoc(datosOV);
  forma=(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"mensajes",
   $1:View.Map2(function($1,$2)
   {
    return $1?$2:"";
   },mostrar.get_View(),mensajes.get_View())
  }).WithHole({
   $:2,
   $0:"changed",
   $1:View.Map2(function($1,$2)
   {
    return Unchecked.Equals({
     $:1,
     $0:$1.datosPersonales
    },$2)?"":"mui-btn--primary";
   },aliadoW,datosOV.get_View())
  }).WithHole({
   $:0,
   $0:"datospersonales",
   $1:p[1]
  }),t.WithHole(Handler.EventQ2(t.k,"salvar",function()
  {
   return t.i;
  },function()
  {
   var m,$1,$2,$3,al,datos,b$1;
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):($1=datosOV.Get(),$2=View.TryGet(aliadoW),$1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3=[$2.$0,$1.$0],true))?(al=$3[0],datos=$3[1],Rpc.iterA((b$1=Monads.asyncResult(),b$1.Run(b$1.Delay(function()
   {
    return b$1.Bind$1(Rpc.ejecutarDataEventoNuevo({
     $:4,
     $0:[al.id,datos]
    }),function(a)
    {
     Refresh.refrescarData(true);
     Global.alert((function($4)
     {
      return function($5)
      {
       return $4(ProzperServer_GeneratedPrintf.p$15($5));
      };
     }(Global.id))(a));
     return b$1.Zero();
    });
   }))))):Global.alert("Error not caught FormaDatos"));
  }))),(p$1=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p$1[1],ProzperServer_Templates.formadatospersonales(p$1[0])),(b.i=i,i))));
  View.Sink(function(a)
  {
   mensajes.Set(a);
  },View.Map(function($1)
  {
   var es;
   es=Strings.concat(", ",Seq.delay(function()
   {
    return $1;
   }));
   return es!==""?"Campos requeridos: "+es:"";
  },p[0]));
  return forma.get_Doc();
 };
 FormaContactos.formaDoc=function()
 {
  return ModeloUI.aliadoIdDoc(FormaContactos.formaContactos);
 };
 FormaContactos.formaContactos=function(aliadoW)
 {
  var mensajes,mostrar,contactosV,contactosIV,ftel,fcor,fdir,tels,cors,dirs,telDocs,corDocs,dirDocs,b,t,t$1,t$2,t$3,p,i;
  function makeVar(f,fr)
  {
   return function(i$1)
   {
    return new FromView.New(View.Map(function($1)
    {
     var o;
     o=Seq.tryItem(i$1,$1);
     return o==null?null:f(o.$0);
    },contactosV.get_View()),function(a)
    {
     if(a!=null&&a.$==1)
      contactosV.Set(Array.replace(i$1,fr(a.$0),contactosV.Get()));
    });
   };
  }
  mensajes=Var$1.Create$1("");
  mostrar=Var$1.Create$1(false);
  contactosV=Var$1.Create$1([]);
  View.Sink(function(a)
  {
   contactosV.Set(a);
  },View.Map(function(a)
  {
   return a.contactos;
  },aliadoW));
  contactosIV=View.Map(Seq.indexed,contactosV.get_View());
  ftel=[function(a)
  {
   return a.$==2?{
    $:1,
    $0:a.$0
   }:null;
  },function(a)
  {
   return{
    $:2,
    $0:a
   };
  }];
  fcor=[function(a)
  {
   return a.$==1?{
    $:1,
    $0:a.$0
   }:null;
  },function(a)
  {
   return{
    $:1,
    $0:a
   };
  }];
  fdir=[function(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  },function(a)
  {
   return{
    $:0,
    $0:a
   };
  }];
  tels=View.Map(function($1)
  {
   function c(i$1,c$1)
   {
    return ftel[0](c$1)==null?null:{
     $:1,
     $0:i$1
    };
   }
   return Seq.choose(function($2)
   {
    return c($2[0],$2[1]);
   },$1);
  },contactosIV);
  cors=View.Map(function($1)
  {
   function c(i$1,c$1)
   {
    return fcor[0](c$1)==null?null:{
     $:1,
     $0:i$1
    };
   }
   return Seq.choose(function($2)
   {
    return c($2[0],$2[1]);
   },$1);
  },contactosIV);
  dirs=View.Map(function($1)
  {
   function c(i$1,c$1)
   {
    return fdir[0](c$1)==null?null:{
     $:1,
     $0:i$1
    };
   }
   return Seq.choose(function($2)
   {
    return c($2[0],$2[1]);
   },$1);
  },contactosIV);
  telDocs=Doc.ConvertBy(Global.id,function(i$1)
  {
   return VariousUI.removeButton(function()
   {
    contactosV.Set(Array.remove(i$1,contactosV.Get()));
   },(Telefono.formaDoc((function($1)
   {
    return makeVar($1[0],$1[1]);
   }(ftel))(i$1)))[1]);
  },tels);
  corDocs=Doc.ConvertBy(Global.id,function(i$1)
  {
   return VariousUI.removeButton(function()
   {
    contactosV.Set(Array.remove(i$1,contactosV.Get()));
   },(CorreoElectronico$1.formaDoc((function($1)
   {
    return makeVar($1[0],$1[1]);
   }(fcor))(i$1)))[1]);
  },cors);
  dirDocs=Doc.ConvertBy(Global.id,function(i$1)
  {
   return VariousUI.removeButton(function()
   {
    contactosV.Set(Array.remove(i$1,contactosV.Get()));
   },(Direccion.formaDoc((function($1)
   {
    return makeVar($1[0],$1[1]);
   }(fdir))(i$1)))[1]);
  },dirs);
  return(b=(t=(t$1=(t$2=(t$3=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"mensajes",
   $1:View.Map2(function($1,$2)
   {
    return $1?$2:"";
   },mostrar.get_View(),mensajes.get_View())
  }).WithHole({
   $:2,
   $0:"changed",
   $1:View.Map2(function($1,$2)
   {
    return Unchecked.Equals($1.contactos,$2)?"":"mui-btn--primary";
   },aliadoW,contactosV.get_View())
  }).WithHole({
   $:0,
   $0:"telefonos",
   $1:telDocs
  }).WithHole({
   $:0,
   $0:"correos",
   $1:corDocs
  }).WithHole({
   $:0,
   $0:"direcciones",
   $1:dirDocs
  }),t$3.WithHole(Handler.EventQ2(t$3.k,"mastelefono",function()
  {
   return t$3.i;
  },function()
  {
   contactosV.Set(contactosV.Get().concat([{
    $:2,
    $0:TypesV0.telVacio()
   }]));
  }))),t$2.WithHole(Handler.EventQ2(t$2.k,"mascorreo",function()
  {
   return t$2.i;
  },function()
  {
   contactosV.Set(contactosV.Get().concat([{
    $:1,
    $0:TypesV0.correoVacio()
   }]));
  }))),t$1.WithHole(Handler.EventQ2(t$1.k,"masdireccion",function()
  {
   return t$1.i;
  },function()
  {
   contactosV.Set(contactosV.Get().concat([{
    $:0,
    $0:TypesV0.dirVacio()
   }]));
  }))),t.WithHole(Handler.EventQ2(t.k,"salvar",function()
  {
   return t.i;
  },function()
  {
   var m,m$1,al,b$1;
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):(m$1=View.TryGet(aliadoW),m$1!=null&&m$1.$==1?(al=m$1.$0,Rpc.iterA((b$1=Monads.asyncResult(),b$1.Run(b$1.Delay(function()
   {
    return b$1.Bind$1(Rpc.ejecutarDataEventoNuevo({
     $:5,
     $0:[al.id,contactosV.Get()]
    }),function(a)
    {
     Refresh.refrescarData(true);
     Global.alert((function($1)
     {
      return function($2)
      {
       return $1(ProzperServer_GeneratedPrintf.p$15($2));
      };
     }(Global.id))(a));
     return b$1.Zero();
    });
   }))))):Global.alert("Error not caught FormaDatos"));
  }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.formacontactos(p[0])),(b.i=i,i)))).get_Doc();
 };
 FormaFormasPago.formaDoc=function()
 {
  return ModeloUI.aliadoIdDoc(FormaFormasPago.formaFormasPago);
 };
 FormaFormasPago.formaFormasPago=function(aliadoW)
 {
  var mensajes,mostrar,formasPagoV,formasPagoIW,tars,ctas,tarDocs,ctaDocs,b,t,t$1,t$2,p,i;
  function makeVar(f,fr)
  {
   return function(i$1)
   {
    return new FromView.New(View.Map(function($1)
    {
     var o;
     o=Seq.tryItem(i$1,$1);
     return o==null?null:f(o.$0);
    },formasPagoV.get_View()),function(a)
    {
     var nv;
     if(a!=null&&a.$==1)
      {
       nv=a.$0;
       formasPagoV.Set(Array.replace(i$1,(fr(Arrays.get(formasPagoV.Get(),i$1)))(VariousUI.fst3(nv[0],nv[1],nv[2])),formasPagoV.Get()));
      }
    });
   };
  }
  function validar(fp$1)
  {
   var b$1;
   Rpc.iterA((b$1=Monads.asyncResult(),b$1.Run(b$1.Delay(function()
   {
    return b$1.Bind(fp$1.authorizeIdR,function(a)
    {
     return b$1.Bind$1(Rpc.validarFormaPago(a),function(a$1)
     {
      Global.alert(a$1);
      return b$1.Zero();
     });
    });
   }))));
  }
  function otherButtons(i$1,docF)
  {
   return VariousUI.removeButton(function()
   {
    formasPagoV.Set(Array.remove(i$1,formasPagoV.Get()));
   },Doc.Concat(List.ofSeq(Seq.delay(function()
   {
    return Seq.append([Doc.Button("AUTORIZAR DEBITO",[AttrProxy.Create("title","Autorizar pago recurrente"),AttrModule.Dynamic("style",View.Map(function($1)
    {
     return Arrays.get($1,i$1).authorizeIdR.$==0?"":"display:None";
    },formasPagoV.get_View()))],function()
    {
     var $1,$2,$3,a;
     $2=Arrays.get(formasPagoV.Get(),i$1).authorizeIdR;
     $3=Arrays.get(formasPagoV.Get(),i$1).cuentaPago;
     switch($2.$==0?$3.$==0?($1=[$2.$0,$3.$0.titular],1):$3.$==1?($1=[$2.$0,$3.$0.titular],1):2:($1=$2.$0,0))
     {
      case 0:
       Global.alert("Pago no está verificado en Authorize: "+$1);
       break;
      case 1:
       a=docF();
       FormaAutorizacion.cuentaAutorizar().Set(a);
       FormaAutorizacion.titular().Set($1[1]);
       FormaAutorizacion.set_pid($1[0]);
       ModeloUI.endPointV().Set({
        $:3,
        $0:"ProzperLyt.cntAutorizacion"
       });
       break;
      case 2:
       Global.alert("Autorizacion no esta implementada");
       break;
     }
    })],Seq.delay(function()
    {
     return Seq.append([Doc.Element("br",[],[])],Seq.delay(function()
     {
      return Seq.append([docF()],Seq.delay(function()
      {
       return[Doc.Button("validar",[AttrProxy.Create("title","validar forma de pago"),AttrModule.Dynamic("style",View.Map(function($1)
       {
        return Arrays.get($1,i$1).authorizeIdR.$==0?"":"display:None";
       },formasPagoV.get_View()))],function()
       {
        validar(Arrays.get(formasPagoV.Get(),i$1));
       })];
      }));
     }));
    }));
   }))));
  }
  function fp(cp)
  {
   return FormaPago.New("",Library.Error$1(""),cp);
  }
  function fpIds(fps)
  {
   return new FSharpSet.New(Seq.choose(function(fp$1)
   {
    var m;
    m=fp$1.authorizeIdR;
    return m.$==0?{
     $:1,
     $0:m.$0
    }:null;
   },fps));
  }
  mensajes=Var$1.Create$1("");
  mostrar=Var$1.Create$1(false);
  formasPagoV=Var$1.Create$1([]);
  View.Sink(function(a)
  {
   formasPagoV.Set(a);
  },ModeloUI.formasPagoAliadoV().get_View());
  FormaFormasPago.refrescarFormasPago();
  formasPagoIW=View.Map(Seq.indexed,formasPagoV.get_View());
  tars=View.Map(function($1)
  {
   function c(i$1,c$1)
   {
    return(FormaFormasPago.ftar())[0](c$1)==null?null:{
     $:1,
     $0:i$1
    };
   }
   return Seq.choose(function($2)
   {
    return c($2[0],$2[1]);
   },$1);
  },formasPagoIW);
  ctas=View.Map(function($1)
  {
   function c(i$1,c$1)
   {
    return(FormaFormasPago.fcta())[0](c$1)==null?null:{
     $:1,
     $0:i$1
    };
   }
   return Seq.choose(function($2)
   {
    return c($2[0],$2[1]);
   },$1);
  },formasPagoIW);
  tarDocs=Doc.ConvertBy(Global.id,function(i$1)
  {
   var v;
   return otherButtons(i$1,(v=(function($1)
   {
    return makeVar($1[0],$1[1]);
   }(FormaFormasPago.ftar()))(i$1),function()
   {
    return(TarjetaCredito$1.formaDocO(v))[1];
   }));
  },tars);
  ctaDocs=Doc.ConvertBy(Global.id,function(i$1)
  {
   var v;
   return otherButtons(i$1,(v=(function($1)
   {
    return makeVar($1[0],$1[1]);
   }(FormaFormasPago.fcta()))(i$1),function()
   {
    return(CuentaBancaria$1.formaDocO(v))[1];
   }));
  },ctas);
  return(b=(t=(t$1=(t$2=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"mensajes",
   $1:View.Map2(function($1,$2)
   {
    return $1?$2:"";
   },mostrar.get_View(),mensajes.get_View())
  }).WithHole({
   $:0,
   $0:"tarjetas",
   $1:tarDocs
  }).WithHole({
   $:0,
   $0:"cuentas",
   $1:ctaDocs
  }),t$2.WithHole(Handler.EventQ2(t$2.k,"mastarjeta",function()
  {
   return t$2.i;
  },function()
  {
   formasPagoV.Set(formasPagoV.Get().concat([fp(new CuentaPago({
    $:1,
    $0:TypesV0.tarVacio()
   }))]));
  }))),t$1.WithHole(Handler.EventQ2(t$1.k,"mascuenta",function()
  {
   return t$1.i;
  },function()
  {
   formasPagoV.Set(formasPagoV.Get().concat([fp(new CuentaPago({
    $:0,
    $0:TypesV0.ctaVacio()
   }))]));
  }))).WithHole({
   $:2,
   $0:"changed",
   $1:View.Map2(function($1,$2)
   {
    return Unchecked.Equals($1,$2)?"":"mui-btn--primary";
   },ModeloUI.formasPagoAliadoV().get_View(),formasPagoV.get_View())
  }),t.WithHole(Handler.EventQ2(t.k,"salvar",function()
  {
   return t.i;
  },function()
  {
   var m,m$1,b$1;
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):(m$1=View.TryGet(aliadoW),m$1!=null&&m$1.$==1?Rpc.iterA((b$1=Monads.asyncResult(),b$1.Run(b$1.Delay(function()
   {
    return b$1.Combine$1(b$1.For(FSharpSet.op_Subtraction(fpIds(ModeloUI.formasPagoAliadoV().Get()),fpIds(formasPagoV.Get())),function(a)
    {
     return b$1.Bind$1(Rpc.borrarFormaPago(a),function()
     {
      return b$1.Zero();
     });
    }),b$1.Delay(function()
    {
     return b$1.Combine$1(b$1.For(formasPagoV.Get(),function(a)
     {
      var callO,m$2,$1,$2;
      callO=(m$2=a.cuentaPago,m$2.$==1&&(!(m$2.$0.numero.get_Id().indexOf("X")!=-1)&&($1=m$2.$0,true))?{
       $:1,
       $0:Rpc.registrarTarjeta($1)
      }:m$2.$==0&&(!(m$2.$0.numero.get_Id().indexOf("X")!=-1)&&($2=m$2.$0,true))?{
       $:1,
       $0:Rpc.registrarCuenta($2)
      }:null);
      return callO!=null&&callO.$==1?b$1.Bind$1(callO.$0,function()
      {
       return b$1.Zero();
      }):b$1.Zero();
     }),b$1.Delay(function()
     {
      FormaFormasPago.refrescarFormasPago();
      Refresh.refrescarData(true);
      return b$1.Zero();
     }));
    }));
   })))):Global.alert("Error not caught FormaDatos"));
  }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.formacuentas(p[0])),(b.i=i,i)))).get_Doc();
 };
 FormaFormasPago.msg=function(a)
 {
  var idR;
  idR=a.authorizeIdR;
  return idR.$==0?(function($1)
  {
   return function($2)
   {
    return $1("Cuenta verificada: "+ProzperServer_GeneratedPrintf.p$16($2));
   };
  }(Global.id))(idR.$0):idR.$0===""?"La cuenta aun no ha sido verificada":idR.$0;
 };
 FormaFormasPago.refrescarFormasPago=function()
 {
  Rpc.iterA(AsyncResult.map(function(a)
  {
   ModeloUI.formasPagoAliadoV().Set(a);
  },Rpc.obtenerFormasDePago()));
 };
 FormaFormasPago.fcta=function()
 {
  SC$1.$cctor();
  return SC$1.fcta;
 };
 FormaFormasPago.ftar=function()
 {
  SC$1.$cctor();
  return SC$1.ftar;
 };
 ReporteConsolidado.consolidado=function()
 {
  var aliadosV,ordenV,filtroV,referidores,listaArchivos,b,T$2,t,t$1,t$2,t$3,t$4,t$5,t$6,t$7,t$8,t$9,t$10,t$11,t$12,t$13,t$14,t$15,p,i;
  function referidos(al)
  {
   return al.nReferidos===0?"-":(((Runtime$1.Curried3(function($1,$2,$3)
   {
    return $1(Global.String($2)+"/"+Global.String($3));
   }))(Global.id))(al.nRefActivos))(al.nReferidos);
  }
  function descendientes(al)
  {
   return al.nDescendientes===0?"-":(((Runtime$1.Curried3(function($1,$2,$3)
   {
    return $1(Global.String($2)+"/"+Global.String($3));
   }))(Global.id))(al.nDescActivos))(al.nDescendientes);
  }
  function comision(v)
  {
   return v===0?"-":ModeloUI.money(v);
  }
  function nombreReferidor(idO)
  {
   var o,o$1,id;
   o=(o$1=idO==null?null:(id=idO.$0,Seq.tryFind(function(al)
   {
    return Unchecked.Equals(al.id,id);
   },ModeloUI.modeloV().Get().aliados)),o$1==null?null:{
    $:1,
    $0:Aliado$2.nombre(o$1.$0.datosPersonales)
   });
   return o==null?"-":o.$0;
  }
  function aliado2Fila(al)
  {
   var o;
   return Fila.New(al.docPendientes===0?(function($1)
   {
    return function($2)
    {
     return $1(Strings.PadLeft(Global.String($2),2));
    };
   }(Global.id))(al.documentos):(((Runtime$1.Curried3(function($1,$2,$3)
   {
    return $1("("+Strings.PadLeft(Global.String($2),2)+")"+Strings.PadLeft(Global.String($3),2));
   }))(Global.id))(al.docPendientes))(al.documentos),Aliado$2.nombre(al.datosPersonales),Aliado$2.correo(al),(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$1($2));
    };
   }(Global.id))(al.status),(o=al.influyente,o==null?"":o.$0),(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$2($2));
    };
   }(Global.id))(al.tipo),nombreReferidor(al.idPadreO),(function($1)
   {
    return function($2)
    {
     return $1(Strings.PadLeft(Global.String($2),9));
    };
   }(Global.id))(al.nivel),(function($1)
   {
    return function($2)
    {
     return $1(Strings.PadLeft(Utils.toSafe($2),9));
    };
   }(Global.id))(referidos(al)),(function($1)
   {
    return function($2)
    {
     return $1(Strings.PadLeft(Utils.toSafe($2),9));
    };
   }(Global.id))(descendientes(al)),(function($1)
   {
    return function($2)
    {
     return $1(Strings.PadLeft(Utils.toSafe($2),9));
    };
   }(Global.id))(comision(al.comision)),Library["String.Right$1"]((function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$17($2));
    };
   }(Global.id))(al.diaPago),2),Date.toYYYYMMDD("-",al.fechaRegistro),(function($1)
   {
    return function($2)
    {
     return $1(Utils.toSafe($2));
    };
   }(Global.id))(al.id.get_Id()));
  }
  function campos(orden)
  {
   return[orden.archivos,orden.nombre,orden.correo,orden.status,orden.influyente,orden.tipo,orden.referido,orden.nivel,orden.referidos,orden.descendientes,orden.comision,orden.diaPago,orden.desde,orden.Id];
  }
  function newOrden(n,a$1,a$2)
  {
   return function(t$16)
   {
    var no;
    no=t$16[0];
    return[no===n?1:no<n?no+1:no,n===no&&n===1?!t$16[1]:t$16[1],t$16[2]];
   };
  }
  function toggle(v)
  {
   ordenV.Set(Fila.New((function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().archivos),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().nombre),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().correo),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().status),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().influyente),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().tipo),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().referido),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().nivel),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().referidos),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().descendientes),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().comision),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().diaPago),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().desde),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().Id)));
  }
  function setAliado(id,f)
  {
   return aliadosV.Set(Arrays.map(function(al)
   {
    return Unchecked.Equals(al.id,id)?f(al):al;
   },aliadosV.Get()));
  }
  function setStatus(id,v)
  {
   return setAliado(id,function(al)
   {
    return Aliado$1.New(al.id,al.idPadreO,al.idForAuthorize,al.influyente,al.datosPersonales,al.contactos,al.identificacion,al.isInternal,StatusAliado.tryParse(v),al.diaPago,al.tipo,al.fechaRegistro,al.fechaStatus,al.nReferidos,al.nRefActivos,al.nDescendientes,al.nDescActivos,al.comision,al.nivel,al.documentos,al.docPendientes);
   });
  }
  function setInfluyente(id,v)
  {
   return setAliado(id,function(al)
   {
    return Aliado$1.New(al.id,al.idPadreO,al.idForAuthorize,Strings.Trim(v)===""?null:{
     $:1,
     $0:Strings.Trim(v)
    },al.datosPersonales,al.contactos,al.identificacion,al.isInternal,al.status,al.diaPago,al.tipo,al.fechaRegistro,al.fechaStatus,al.nReferidos,al.nRefActivos,al.nDescendientes,al.nDescActivos,al.comision,al.nivel,al.documentos,al.docPendientes);
   });
  }
  function setPadre(id,v)
  {
   var padre;
   padre=v===""?null:{
    $:1,
    $0:new IdAliado({
     $:0,
     $0:v
    })
   };
   return setAliado(id,function(al)
   {
    return Aliado$1.New(al.id,padre,al.idForAuthorize,al.influyente,al.datosPersonales,al.contactos,al.identificacion,al.isInternal,al.status,al.diaPago,al.tipo,al.fechaRegistro,al.fechaStatus,al.nReferidos,al.nRefActivos,al.nDescendientes,al.nDescActivos,al.comision,al.nivel,al.documentos,al.docPendientes);
   });
  }
  function obtenerAliado(alid)
  {
   return Seq.tryFind(function(al)
   {
    return Unchecked.Equals(al.id,alid);
   },ModeloUI.modeloV().Get().aliados);
  }
  function salvar()
  {
   var b$1;
   Rpc.iterA((b$1=Monads.asyncResult(),b$1.Run(b$1.Delay(function()
   {
    return b$1.Combine$1(b$1.For(aliadosV.Get(),function(a$1)
    {
     var m,al2;
     m=obtenerAliado(a$1.id);
     return m!=null&&m.$==1?(al2=m.$0,!Unchecked.Equals(a$1.status,al2.status)||!Unchecked.Equals(a$1.idPadreO,al2.idPadreO)||!Unchecked.Equals(a$1.influyente,al2.influyente)?b$1.Bind$1(Rpc.ejecutarDataEventoNuevo({
      $:8,
      $0:[a$1.id,a$1.status,a$1.idPadreO,a$1.influyente]
     }),function()
     {
      return b$1.Zero();
     }):b$1.Zero()):b$1.Zero();
    }),b$1.Delay(function()
    {
     Refresh.refrescarData(true);
     return b$1.Zero();
    }));
   }))));
  }
  function a(alid,fW)
  {
   var b$1,t$16,d,S,i$1,$1,s,$2,r,$3,p$1,i$2;
   return(b$1=(t$16=(d=Doc.BindView(Global.id,View.Map(function($4)
   {
    return Unchecked.Equals($4,{
     $:1,
     $0:new IdAliado({
      $:0,
      $0:alid
     })
    })?listaArchivos.f():Doc.get_Empty();
   },ListaDocs.expandedOV().get_View())),(S=Doc.BindView(VariousUI.crearOptions,VariousUI.statuses().get_View()),(i$1=new FromView.New(View.Map(function($4)
   {
    return $4.influyente;
   },fW),($1=new IdAliado({
    $:0,
    $0:alid
   }),function($4)
   {
    return setInfluyente($1,$4);
   })),(s=new FromView.New(View.Map(function($4)
   {
    return $4.status;
   },fW),($2=new IdAliado({
    $:0,
    $0:alid
   }),function($4)
   {
    return setStatus($2,$4);
   })),(r=new FromView.New(View.Map(function($4)
   {
    return $4.referido;
   },fW),($3=new IdAliado({
    $:0,
    $0:alid
   }),function($4)
   {
    return setPadre($3,$4);
   })),ProviderBuilder.Make().WithHole({
    $:2,
    $0:"nombre",
    $1:View.Map(function($4)
    {
     return $4.nombre;
    },fW)
   }).WithHole({
    $:2,
    $0:"correo",
    $1:View.Map(function($4)
    {
     return $4.correo;
    },fW)
   }).WithHole({
    $:2,
    $0:"tipo",
    $1:View.Map(function($4)
    {
     return $4.tipo;
    },fW)
   }).WithHole({
    $:8,
    $0:"referido",
    $1:r
   })).WithHole({
    $:8,
    $0:"status",
    $1:s
   })).WithHole({
    $:8,
    $0:"influyente",
    $1:i$1
   })).WithHole({
    $:0,
    $0:"statuses",
    $1:S
   })).WithHole({
    $:2,
    $0:"nivel",
    $1:View.Map(function($4)
    {
     return $4.nivel;
    },fW)
   }).WithHole({
    $:2,
    $0:"referidos",
    $1:View.Map(function($4)
    {
     return $4.referidos;
    },fW)
   }).WithHole({
    $:2,
    $0:"descendientes",
    $1:View.Map(function($4)
    {
     return $4.descendientes;
    },fW)
   }).WithHole({
    $:2,
    $0:"comision",
    $1:View.Map(function($4)
    {
     return $4.comision;
    },fW)
   }).WithHole({
    $:2,
    $0:"diapago",
    $1:View.Map(function($4)
    {
     return $4.diaPago;
    },fW)
   }).WithHole({
    $:2,
    $0:"desde",
    $1:View.Map(function($4)
    {
     return $4.desde;
    },fW)
   }).WithHole({
    $:2,
    $0:"id",
    $1:View.Map(function($4)
    {
     return $4.Id;
    },fW)
   }).WithHole({
    $:0,
    $0:"detalles",
    $1:d
   })),t$16.WithHole(Handler.EventQ2(t$16.k,"expandfiles",function()
   {
    return t$16.i;
   },function()
   {
    var a$1;
    a$1=Unchecked.Equals(ListaDocs.expandedOV().Get(),{
     $:1,
     $0:new IdAliado({
      $:0,
      $0:alid
     })
    })?null:{
     $:1,
     $0:new IdAliado({
      $:0,
      $0:alid
     })
    };
    ListaDocs.expandedOV().Set(a$1);
   }))).WithHole({
    $:2,
    $0:"expanded",
    $1:View.Map(function($4)
    {
     return $4.archivos;
    },fW)
   }),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[["influyente",0],["status",0],["referido",0]]),(i$2=new TemplateInstance.New(p$1[1],ProzperServer_Templates.filaconsolidado(p$1[0])),(b$1.i=i$2,i$2)))).get_Doc();
  }
  aliadosV=Var$1.Create$1([]);
  View.Sink(function(a$1)
  {
   aliadosV.Set(a$1);
  },View.Map(function($1)
  {
   return $1.aliados;
  },ModeloUI.modeloV().get_View()));
  ordenV=Var$1.Create$1(Fila.New([1,false,function(d)
  {
   return d.archivos.toUpperCase();
  }],[14,true,function(d)
  {
   return d.nombre.toUpperCase();
  }],[13,true,function(d)
  {
   return d.correo.toUpperCase();
  }],[3,true,function(d)
  {
   return d.status.toUpperCase();
  }],[4,false,function(d)
  {
   return d.influyente.toUpperCase();
  }],[5,true,function(d)
  {
   return d.tipo.toUpperCase();
  }],[6,true,function(d)
  {
   return d.referido.toUpperCase();
  }],[7,true,function(d)
  {
   return d.nivel.toUpperCase();
  }],[8,true,function(d)
  {
   return d.referidos.toUpperCase();
  }],[2,false,function(d)
  {
   return d.descendientes.toUpperCase();
  }],[9,true,function(d)
  {
   return d.comision.toUpperCase();
  }],[10,true,function(d)
  {
   return d.diaPago.toUpperCase();
  }],[11,true,function(d)
  {
   return d.desde.toUpperCase();
  }],[12,true,function(d)
  {
   return d.Id.toUpperCase();
  }]));
  filtroV=Var$1.Create$1("");
  referidores=Doc.BindView(function(m)
  {
   return VariousUI.crearOptions2(Seq.map(function(al)
   {
    return[Aliado$2.nombre2(al.datosPersonales),al.id.get_Id()];
   },m.aliados));
  },ModeloUI.modeloV().get_View());
  listaArchivos=Lazy.Create(function()
  {
   return Doc.Element("tr",[AttrProxy.Create("bgcolor","beige")],[Doc.Element("td",[AttrProxy.Create("colspan","12")],[ListaDocs.listaDocs()])]);
  });
  return(b=(T$2=Doc.ConvertSeqBy(function(al)
  {
   return al.Id;
  },function($1)
  {
   return function($2)
   {
    return a($1,$2);
   };
  },View.Map3(function(als,orden,filtro)
  {
   var vt,filtros,comparar;
   function m(a$1,a$2,f)
   {
    return f;
   }
   function r(c,c$1,a$1,b$1)
   {
    return SortWith.op_AmpGreater(function($1,$2)
    {
     return(c($1))($2);
    },function($1,$2)
    {
     return(c$1($1))($2);
    },a$1,b$1);
   }
   function m$1(n,a$1,f)
   {
    return(a$1?Runtime$1.Curried3(SortWith.asc):Runtime$1.Curried3(SortWith.desc))(f);
   }
   vt=Strings.Trim(filtro).toUpperCase();
   filtros=Arrays.map(function($1)
   {
    return m($1[0],$1[1],$1[2]);
   },campos(orden));
   comparar=Arrays.reduce(function($1,$2)
   {
    return Runtime$1.Curried(r,2,[$1,$2]);
   },Arrays.map(function($1)
   {
    return m$1($1[0],$1[1],$1[2]);
   },Arrays.sortBy(function($1)
   {
    return Global.id($1[0],$1[1],$1[2]);
   },campos(orden))));
   return Seq.sortWith(function($1,$2)
   {
    return(comparar($1))($2);
   },Seq.filter(function(fila)
   {
    return vt===""||Seq.exists(function(f)
    {
     return f(fila).indexOf(vt)!=-1;
    },filtros);
   },Seq.map(aliado2Fila,als)));
  },View.Map(function($1)
  {
   return $1.aliados;
  },ModeloUI.modeloV().get_View()),ordenV.get_View(),filtroV.get_View())),(t=(t$1=(t$2=(t$3=(t$4=(t$5=(t$6=(t$7=(t$8=(t$9=(t$10=(t$11=(t$12=(t$13=(t$14=(t$15=ProviderBuilder.Make(),t$15.WithHole(Handler.EventQ2(t$15.k,"salvar",function()
  {
   return t$15.i;
  },function()
  {
   salvar();
  }))),t$14.WithHole(Handler.EventQ2(t$14.k,"cancelar",function()
  {
   return t$14.i;
  },function()
  {
   aliadosV.Set(ModeloUI.modeloV().Get().aliados);
  }))).WithHole({
   $:2,
   $0:"changed",
   $1:View.Map2(function($1,$2)
   {
    return Unchecked.Equals($1.aliados,$2)?"":"mui-btn--primary";
   },ModeloUI.modeloV().get_View(),aliadosV.get_View())
  }).WithHole({
   $:8,
   $0:"filtro",
   $1:filtroV
  }).WithHole({
   $:0,
   $0:"referidores",
   $1:referidores
  }),t$13.WithHole(Handler.EventQ2(t$13.k,"sort_archivos",function()
  {
   return t$13.i;
  },function()
  {
   toggle(ordenV.Get().archivos);
  }))),t$12.WithHole(Handler.EventQ2(t$12.k,"sort_nombre",function()
  {
   return t$12.i;
  },function()
  {
   toggle(ordenV.Get().nombre);
  }))),t$11.WithHole(Handler.EventQ2(t$11.k,"sort_correo",function()
  {
   return t$11.i;
  },function()
  {
   toggle(ordenV.Get().correo);
  }))),t$10.WithHole(Handler.EventQ2(t$10.k,"sort_status",function()
  {
   return t$10.i;
  },function()
  {
   toggle(ordenV.Get().status);
  }))),t$9.WithHole(Handler.EventQ2(t$9.k,"sort_influyente",function()
  {
   return t$9.i;
  },function()
  {
   toggle(ordenV.Get().influyente);
  }))),t$8.WithHole(Handler.EventQ2(t$8.k,"sort_tipo",function()
  {
   return t$8.i;
  },function()
  {
   toggle(ordenV.Get().tipo);
  }))),t$7.WithHole(Handler.EventQ2(t$7.k,"sort_referido",function()
  {
   return t$7.i;
  },function()
  {
   toggle(ordenV.Get().referido);
  }))),t$6.WithHole(Handler.EventQ2(t$6.k,"sort_nivel",function()
  {
   return t$6.i;
  },function()
  {
   toggle(ordenV.Get().nivel);
  }))),t$5.WithHole(Handler.EventQ2(t$5.k,"sort_referidos",function()
  {
   return t$5.i;
  },function()
  {
   toggle(ordenV.Get().referidos);
  }))),t$4.WithHole(Handler.EventQ2(t$4.k,"sort_descendientes",function()
  {
   return t$4.i;
  },function()
  {
   toggle(ordenV.Get().descendientes);
  }))),t$3.WithHole(Handler.EventQ2(t$3.k,"sort_comision",function()
  {
   return t$3.i;
  },function()
  {
   toggle(ordenV.Get().comision);
  }))),t$2.WithHole(Handler.EventQ2(t$2.k,"sort_diapago",function()
  {
   return t$2.i;
  },function()
  {
   toggle(ordenV.Get().diaPago);
  }))),t$1.WithHole(Handler.EventQ2(t$1.k,"sort_desde",function()
  {
   return t$1.i;
  },function()
  {
   toggle(ordenV.Get().desde);
  }))),t.WithHole(Handler.EventQ2(t.k,"sort_id",function()
  {
   return t.i;
  },function()
  {
   toggle(ordenV.Get().Id);
  }))).WithHole({
   $:0,
   $0:"tbody",
   $1:T$2
  })),(p=Handler.CompleteHoles(b.k,b.h,[["filtro",0]]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.consolidado(p[0])),(b.i=i,i)))).get_Doc();
 };
 TablaPagos.comisiones=function()
 {
  var pagosW,b,T$2,b$1,p,i,b$2,p$1,i$1,t,p$2,i$2;
  function def(d,v)
  {
   return v===""?d:v;
  }
  function saveAs()
  {
   var b$3;
   Concurrency.Start((b$3=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(View.GetAsync(pagosW),function(a$2)
    {
     Global.saveAs(new Blob([Strings.concat("\r\n",Seq.map(function(alfpW)
     {
      var alW,ctaW;
      alW=alfpW[0];
      ctaW=alfpW[1];
      return(((((((Runtime$1.Curried(function($1,$2,$3,$4,$5,$6,$7)
      {
       return $1(Utils.toSafe($2)+","+Utils.toSafe($3)+","+Utils.toSafe($4)+","+Utils.toSafe($5)+","+Utils.prettyPrint($6)+","+Utils.prettyPrint($7));
      },7))(Global.id))("22"))(def("----------",ctaW.numero.get_Id())))(def("----------",ctaW.routing.get_Id())))((function($1)
      {
       return function($2)
       {
        return $1(Global.String($2)+".00");
       };
      }(Global.id))(alW.comision)))("----------"))(ctaW.titular===""?Aliado$2.nombre2(alW.datosPersonales):ctaW.titular);
     },a$2))],{
      type:"text/plain;charset=utf-8"
     }),"pagos.csv");
     return Concurrency.Zero();
    });
   })),null);
  }
  function a(al,a$2)
  {
   return al.id;
  }
  function a$1(alid,alfpW)
  {
   var alW,ctaW,b$3,p$3,i$3;
   alW=View.Map(function($1)
   {
    return $1[0];
   },alfpW);
   ctaW=View.Map(function($1)
   {
    return $1[1];
   },alfpW);
   return(b$3=ProviderBuilder.Make().WithHole({
    $:1,
    $0:"codigo",
    $1:"22"
   }).WithHole({
    $:2,
    $0:"cuenta",
    $1:View.Map(function($1)
    {
     return def("----------",$1.numero.get_Id());
    },ctaW)
   }).WithHole({
    $:2,
    $0:"aba",
    $1:View.Map(function($1)
    {
     return def("----------",$1.routing.get_Id());
    },ctaW)
   }).WithHole({
    $:2,
    $0:"monto",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(Global.String($3)+".00");
      };
     }(Global.id))($1.comision);
    },alW)
   }).WithHole({
    $:1,
    $0:"identificacion",
    $1:"---------"
   }).WithHole({
    $:2,
    $0:"nombre",
    $1:View.Map2(function($1,$2)
    {
     return def(Aliado$2.nombre2($1.datosPersonales),$2.titular);
    },alW,ctaW)
   }),(p$3=Handler.CompleteHoles(b$3.k,b$3.h,[]),(i$3=new TemplateInstance.New(p$3[1],ProzperServer_Templates.filapago(p$3[0])),(b$3.i=i$3,i$3)))).get_Doc();
  }
  pagosW=View.MapAsync(function(als)
  {
   var b$3,f,d;
   function g(v)
   {
    return Concurrency.Return(v);
   }
   return Concurrency.Bind((b$3=Monads.asyncResult(),b$3.Run(b$3.Delay(function()
   {
    var alsf;
    alsf=Seq.filter(function(al)
    {
     return al.comision>0;
    },als);
    return b$3.Bind$1(Rpc.obtenerFormasDePagoPara(Arrays.ofSeq(Seq.map(function(al)
    {
     return al.id;
    },alsf))),function(a$2)
    {
     function c(al,a$3)
     {
      return Unchecked.Equals(al.id,a$3[0])?{
       $:1,
       $0:[al,a$3[1]]
      }:null;
     }
     function m(id,fps)
     {
      var o,v;
      return[id,(o=Seq.tryPick(function(fp)
      {
       var m$1;
       m$1=fp.cuentaPago;
       return m$1.$==0?{
        $:1,
        $0:m$1.$0
       }:null;
      },fps),(v=TypesV0.ctaVacio(),o==null?v:o.$0))];
     }
     return b$3.Return(Seq.choose(function($1)
     {
      return c($1[0],$1[1]);
     },Seq.zip(alsf,Seq.map(function($1)
     {
      return m($1[0],$1[1]);
     },a$2))));
    });
   }))),(f=(d=[],function(r)
   {
    return Result.defaultValue(d,r);
   }),function(x)
   {
    return g(f(x));
   }));
  },View.Map(function($1)
  {
   return $1.aliados;
  },ModeloUI.modeloV().get_View()));
  return(b=(T$2=List.ofArray([(b$1=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"codigo",
   $1:View.Map(function($1)
   {
    return(function($2)
    {
     return function($3)
     {
      return $2(Global.String($3));
     };
    }(Global.id))(Seq.length($1));
   },pagosW)
  }).WithHole({
   $:1,
   $0:"cuenta",
   $1:""
  }).WithHole({
   $:1,
   $0:"aba",
   $1:""
  }).WithHole({
   $:2,
   $0:"monto",
   $1:View.Map(function($1)
   {
    function p$3(pg,a$2)
    {
     return pg.comision;
    }
    return(function($2)
    {
     return function($3)
     {
      return $2(Global.String($3)+".00");
     };
    }(Global.id))(Seq.sumBy(function($2)
    {
     return p$3($2[0],$2[1]);
    },$1));
   },pagosW)
  }).WithHole({
   $:1,
   $0:"identificacion",
   $1:""
  }).WithHole({
   $:1,
   $0:"nombre",
   $1:""
  }),(p=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.filapago(p[0])),(b$1.i=i,i)))).get_Doc(),(b$2=ProviderBuilder.Make().WithHole({
   $:1,
   $0:"codigo",
   $1:""
  }).WithHole({
   $:1,
   $0:"cuenta",
   $1:""
  }).WithHole({
   $:1,
   $0:"aba",
   $1:""
  }).WithHole({
   $:1,
   $0:"monto",
   $1:"--------------------"
  }).WithHole({
   $:1,
   $0:"identificacion",
   $1:""
  }).WithHole({
   $:1,
   $0:"nombre",
   $1:""
  }),(p$1=Handler.CompleteHoles(b$2.k,b$2.h,[]),(i$1=new TemplateInstance.New(p$1[1],ProzperServer_Templates.filapago(p$1[0])),(b$2.i=i$1,i$1)))).get_Doc(),Doc.ConvertSeqBy(function($1)
  {
   return a($1[0],$1[1]);
  },function($1)
  {
   return function($2)
   {
    return a$1($1,$2);
   };
  },pagosW)]),(t=ProviderBuilder.Make(),t.WithHole(Handler.EventQ2(t.k,"exportar",function()
  {
   return t.i;
  },function()
  {
   saveAs();
  }))).WithHole({
   $:0,
   $0:"tbody",
   $1:Doc.Concat(T$2)
  })),(p$2=Handler.CompleteHoles(b.k,b.h,[]),(i$2=new TemplateInstance.New(p$2[1],ProzperServer_Templates.tablapagos(p$2[0])),(b.i=i$2,i$2)))).get_Doc();
 };
 ListaDocs.listaDocs=function()
 {
  var docsV,origV,b,t,T$2,t$1,T$3,p,i;
  function refrescarListaDocs()
  {
   var b$1;
   Rpc.iterA((b$1=Monads.asyncResult(),b$1.Run(b$1.Delay(function()
   {
    origV.Set([]);
    docsV.Set([]);
    return Extensions["AsyncResultBuilder.Bind"](b$1,View.GetAsync(ListaDocs.aliadoIdW()),function(a)
    {
     return b$1.Bind$1(Rpc.obtenerListaDocs(a),function(a$1)
     {
      origV.Set(a$1);
      docsV.Set(a$1);
      return b$1.Zero();
     });
    });
   }))));
  }
  function uploaded(id)
  {
   return function(a,b$1)
   {
    var b$2;
    return Rpc.iterA((b$2=Monads.asyncResult(),b$2.Run(b$2.Delay(function()
    {
     refrescarListaDocs();
     return b$2.Bind$1(Rpc.ejecutarDataEventoNuevo({
      $:9,
      $0:[new IdAliado({
       $:0,
       $0:id
      }),Arrays.ofSeq(docsV["var"].Get())]
     }),function()
     {
      Refresh.refrescarData(true);
      Global.alert(b$1);
      return b$2.Zero();
     });
    }))));
   };
  }
  function subir(e,id)
  {
   var $1,file,filename,r,form,fd,a,i$1,$2,x;
   e.preventDefault();
   form=Global.jQuery("#SubirDocumentos");
   fd=new Global.FormData();
   a=form.serializeArray();
   for(i$1=0,$2=a.length-1;i$1<=$2;i$1++){
    x=Arrays.get(a,i$1);
    fd.append(x.name,x.value);
   }
   file=form.children("input[type=file]").first().get(0).files.item(0);
   filename=file.name;
   fd.append("file",file);
   $.ajax((r={},r.type="POST",r.url="/api/subir/"+id+"/"+filename,r.data=fd,r.contentType=false,r.processData=false,r.success=uploaded(id),r));
  }
  docsV=ListModel.Create(function(ar)
  {
   return ar.nombre;
  },[]);
  origV=ListModel.Create(function(ar)
  {
   return ar.nombre;
  },[]);
  View.Sink(function(id)
  {
   if(!Unchecked.Equals(id,new IdAliado({
    $:0,
    $0:""
   })))
    refrescarListaDocs();
  },ListaDocs.aliadoIdW());
  return(b=(t=(T$2=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.tiposAr().get_View())),(t$1=(T$3=ListModel$1.docLensMapView(Global.id,function(nm,arV)
  {
   var b$1,d,s,i$1,s$1,g,o,t$2,g$1,o$1,p$1,i$2;
   return(b$1=(d=AttrModule.DynamicPred("disabled",View.Map(function($1)
   {
    return Unchecked.Equals($1.idAliado,Aliado.get_LoggedId());
   },arV.get_View()),View.Const("")),(s=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.statusAr().get_View())),(i$1=View.Map(function($1)
   {
    return $1.get_Id();
   },ListaDocs.aliadoIdW()),(s$1=new FromView.New(View.Map(function($1)
   {
    return Global.String($1.status);
   },arV.get_View()),(g=(o=Var$1.Lens(arV,function($1)
   {
    return $1.status;
   },function($1,$2)
   {
    return Archivo.New($1.idAliado,$1.tipo,$1.nombre,$1.modificado,$1.tamano,$2,$1.comentario);
   }),function(a)
   {
    o.Set(a);
   }),function(x)
   {
    return g(StatusArchivo.Parse(x));
   })),(t$2=new FromView.New(View.Map(function($1)
   {
    return Global.String($1.tipo);
   },arV.get_View()),(g$1=(o$1=Var$1.Lens(arV,function($1)
   {
    return $1.tipo;
   },function($1,$2)
   {
    return Archivo.New($1.idAliado,$2,$1.nombre,$1.modificado,$1.tamano,$1.status,$1.comentario);
   }),function(a)
   {
    o$1.Set(a);
   }),function(x)
   {
    return g$1(TipoArchivo.Parse(x));
   })),ProviderBuilder.Make().WithHole({
    $:2,
    $0:"nombre",
    $1:View.Map(function($1)
    {
     return $1.nombre;
    },arV.get_View())
   }).WithHole({
    $:8,
    $0:"tipo",
    $1:t$2
   })).WithHole({
    $:8,
    $0:"status",
    $1:s$1
   })).WithHole({
    $:2,
    $0:"tamano",
    $1:View.Map(function($1)
    {
     return String.thousands($1.tamano);
    },arV.get_View())
   }).WithHole({
    $:2,
    $0:"modificado",
    $1:View.Map(function($1)
    {
     return Date.toYYYYMMDDHHMM("-",$1.modificado);
    },arV.get_View())
   }).WithHole({
    $:2,
    $0:"idaliado",
    $1:i$1
   })).WithHole({
    $:0,
    $0:"statuses",
    $1:s
   })).WithHole({
    $:3,
    $0:"disabled",
    $1:d
   })),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[["tipo",0],["status",0]]),(i$2=new TemplateInstance.New(p$1[1],ProzperServer_Templates.filadocs(p$1[0])),(b$1.i=i$2,i$2)))).get_Doc();
  },docsV),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tbody",
   $1:T$3
  })),t$1.WithHole(Handler.EventQ2(t$1.k,"subir",function()
  {
   return t$1.i;
  },function(e)
  {
   var $1;
   View.Get(($1=e.Event,function($2)
   {
    return subir($1,$2);
   }),View.Map(function(aid)
   {
    return aid.get_Id();
   },ListaDocs.aliadoIdW()));
  }))).WithHole({
   $:0,
   $0:"tiposarchivo",
   $1:T$2
  })).WithHole({
   $:2,
   $0:"changed",
   $1:View.Map2(function($1,$2)
   {
    return Unchecked.Equals($1,$2)?"":"mui-btn--primary";
   },origV.v,docsV.v)
  }),t.WithHole(Handler.EventQ2(t.k,"salvar",function()
  {
   return t.i;
  },function()
  {
   var b$1;
   Rpc.iterA((b$1=Monads.asyncResult(),b$1.Run(b$1.Delay(function()
   {
    var ars;
    ars=Arrays.ofSeq(Seq.filter(function(ar)
    {
     return!Unchecked.Equals(Seq.tryFind(function(o)
     {
      return o.nombre===ar.nombre;
     },origV["var"].Get()),{
      $:1,
      $0:ar
     });
    },docsV["var"].Get()));
    return!Seq.isEmpty(ars)?Extensions["AsyncResultBuilder.Bind"](b$1,View.GetAsync(ListaDocs.aliadoIdW()),function(a)
    {
     return b$1.Bind$1(Rpc.ejecutarDataEventoNuevo({
      $:9,
      $0:[a,ars]
     }),function(a$1)
     {
      refrescarListaDocs();
      Global.alert((function($1)
      {
       return function($2)
       {
        return $1(ProzperServer_GeneratedPrintf.p$15($2));
       };
      }(Global.id))(a$1));
      return b$1.Zero();
     });
    }):b$1.Zero();
   }))));
  }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.subirdocumentos(p[0])),(b.i=i,i)))).get_Doc();
 };
 ListaDocs.expandedOV=function()
 {
  SC$1.$cctor();
  return SC$1.expandedOV;
 };
 ListaDocs.aliadoIdW=function()
 {
  SC$1.$cctor();
  return SC$1.aliadoIdW;
 };
 FormaAutorizacion.formaAutorizacion=function()
 {
  var formaContenido,b,C,p,i;
  formaContenido=(b=(C=Doc.EmbedView(FormaAutorizacion.cuentaAutorizar().get_View()),ProviderBuilder.Make().WithHole({
   $:2,
   $0:"titular",
   $1:FormaAutorizacion.titular().get_View()
  }).WithHole({
   $:2,
   $0:"montoafiliacion",
   $1:View.Map(function($1)
   {
    return(function($2)
    {
     return function($3)
     {
      return $2("$"+Global.String($3)+".00");
     };
    }(Global.id))($1.premisas.montoAfiliacion);
   },ModeloUI.modeloV().get_View())
  }).WithHole({
   $:2,
   $0:"dia",
   $1:View.Map(function($1)
   {
    return Global.String(Aliado$2.dia($1.diaPago));
   },ModeloUI.aliadoW())
  }).WithHole({
   $:0,
   $0:"cuentadebitar",
   $1:C
  })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.autorizacionpago(p[0])),(b.i=i,i)))).get_Doc();
  return FormaFirma.formaFirma(FormaAutorizacion.titular().get_View(),formaContenido,TipoArchivo.Autorizacion,FormaAutorizacion.actualizarSubscripcion,"AutorizacionPago");
 };
 FormaAutorizacion.titular=function()
 {
  SC$1.$cctor();
  return SC$1.titular;
 };
 FormaAutorizacion.actualizarSubscripcion=function()
 {
  var x;
  x=Rpc.actualizarSubscripcion(FormaAutorizacion.pid());
  return AsyncResult.map(function($1)
  {
   return function($2)
   {
    return $1("Subscripción #"+Utils.toSafe($2)+" creada.");
   };
  }(Global.id),x);
 };
 FormaAutorizacion.cuentaAutorizar=function()
 {
  SC$1.$cctor();
  return SC$1.cuentaAutorizar;
 };
 FormaAutorizacion.set_pid=function($1)
 {
  SC$1.$cctor();
  SC$1.pid=$1;
 };
 FormaAutorizacion.pid=function()
 {
  SC$1.$cctor();
  return SC$1.pid;
 };
 FormaContrato.formaContrato=function()
 {
  var nombreW,b,p,i;
  nombreW=View.Map(function($1)
  {
   return Aliado$2.nombre2($1.datosPersonales);
  },ModeloUI.aliadoW());
  return FormaFirma.formaFirma(nombreW,(b=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"aliado",
   $1:nombreW
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.contrato(p[0])),(b.i=i,i)))).get_Doc(),TipoArchivo.Contrato,FormaContrato.firmarContrato,"Contrato");
 };
 FormaContrato.firmarContrato=function()
 {
  return AsyncResult.rtn("Contrato firmado!");
 };
 Transacciones.transacciones=function()
 {
  return ModeloUI.selAliadoIdDoc(Transacciones.docTransacciones);
 };
 Transacciones.docTransacciones=function(aliadoW)
 {
  var b,T$2,p,i;
  function a(trid,trv)
  {
   var b$1,p$1,i$1;
   return(b$1=ProviderBuilder.Make().WithHole({
    $:2,
    $0:"fecha",
    $1:View.Map(function($1)
    {
     return Date.toYYYYMMDDHHMM("-",$1.fechaPago);
    },trv)
   }).WithHole({
    $:2,
    $0:"transid",
    $1:View.Map(function($1)
    {
     return $1.transaccion;
    },trv)
   }).WithHole({
    $:2,
    $0:"cuenta",
    $1:View.Map(function($1)
    {
     return Global.String($1.concepto);
    },trv)
   }).WithHole({
    $:2,
    $0:"status",
    $1:View.Map(function($1)
    {
     return $1.statusTran;
    },trv)
   }).WithHole({
    $:2,
    $0:"monto",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2($3.toFixed(2));
      };
     }(Global.id))($1.monto/100);
    },trv)
   }),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],ProzperServer_Templates.transaccion(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();
  }
  function a$1(trs,al)
  {
   return Seq.sortBy(function(tr)
   {
    return tr.fechaPago;
   },Seq.filter(function(tr)
   {
    return Unchecked.Equals(tr.idAliado,al.id);
   },trs));
  }
  return(b=(T$2=Doc.ConvertSeqBy(function(tr)
  {
   return tr.transaccion;
  },function($1)
  {
   return function($2)
   {
    return a($1,$2);
   };
  },(((Runtime$1.Curried3(View.Map2))(a$1))(Transacciones.transaccionesW()))(aliadoW)),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tbody",
   $1:T$2
  })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.transacciones(p[0])),(b.i=i,i)))).get_Doc();
 };
 Transacciones.transaccionesW=function()
 {
  SC$1.$cctor();
  return SC$1.transaccionesW;
 };
 Pendientes.pendientes=function(aliadoW)
 {
  return Doc.BindView(Global.id,View.MapAsync(function(al)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind(Pendientes.chequearStatusAliado(al,Rpc.obtenerListaDocs(al.id),(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc.obtenerFormasDePagoId:-1441558235",[al.id])),function(a)
    {
     return a.$==1?Concurrency.Return(Doc.TextNode(a.$0)):Concurrency.Return(a.$0);
    });
   });
  },aliadoW));
 };
 Pendientes.chequearStatusAliado=function(aliado,archivosAR,cuentasAR)
 {
  var b;
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return aliado.status.$==0?b.Bind$1(archivosAR,function(a)
   {
    return b.Bind$1(cuentasAR,function(a$1)
    {
     var ctasAuth;
     ctasAuth=Seq.filter(function(fp)
     {
      return fp.authorizeIdR.$==0;
     },a$1);
     return b.Return(Doc.Concat(List.ofSeq(Seq.delay(function()
     {
      var t;
      return Seq.append([Pendientes.chequearArchivos((t=TipoArchivo.Contrato,function(a$2)
      {
       return Pendientes.esArchivoTipo(t,a$2);
      }),Pendientes.firmarContrato,a)],Seq.delay(function()
      {
       return Seq.append([Pendientes.chequearCuentas(function()
       {
        return true;
       },Pendientes.agregarCuenta,a$1)],Seq.delay(function()
       {
        return Seq.append(Seq.length(ctasAuth)>0?[Pendientes.chequearArchivos(function(a$2)
        {
         return Pendientes.esAutorizacion(ctasAuth,a$2);
        },Pendientes.firmarAutorizacion,a)]:[],Seq.delay(function()
        {
         var t$1;
         return Seq.append([Pendientes.chequearArchivos((t$1=TipoArchivo.FormaW9,function(a$2)
         {
          return Pendientes.esArchivoTipo(t$1,a$2);
         }),function()
         {
          return Pendientes.subirArchivoTipo(TipoArchivo.FormaW9);
         },a)],Seq.delay(function()
         {
          var t$2;
          return Seq.append([Pendientes.chequearArchivos((t$2=TipoArchivo.FormaW8BEN,function(a$2)
          {
           return Pendientes.esArchivoTipo(t$2,a$2);
          }),function()
          {
           return Pendientes.subirArchivoTipo(TipoArchivo.FormaW8BEN);
          },a)],Seq.delay(function()
          {
           return[Pendientes.chequearArchivos(Pendientes.esIdentificacion,Pendientes.subirIdentificacion,a)];
          }));
         }));
        }));
       }));
      }));
     }))));
    });
   }):b.Return(Doc.get_Empty());
  }));
 };
 Pendientes.chequearArchivos=function(es,subirlo,archivos)
 {
  var m;
  m=Pendientes.filtroArchivo(es,archivos);
  return!Unchecked.Equals(m,null)&&m.length===0?subirlo():Doc.Concat(Seq.map(Pendientes.verificarArchivo,m));
 };
 Pendientes.firmarContrato=function()
 {
  return Pendientes.pendiente(List.ofArray([Doc.TextNode("Firmar "),Doc.Element("a",[AttrProxy.Create("href","/#/Content/ProzperLyt.cntFormaContrato")],[Doc.TextNode("Contrato")])]));
 };
 Pendientes.esArchivoTipo=function(tipo,ar)
 {
  return Unchecked.Equals(ar.tipo,tipo);
 };
 Pendientes.chequearCuentas=function(es,agregar,cuentas)
 {
  var m;
  m=Pendientes.filtroCuenta(es,cuentas);
  return!Unchecked.Equals(m,null)&&m.length===0?agregar():Doc.Concat(Seq.map(Pendientes.verificarCuenta,m));
 };
 Pendientes.agregarCuenta=function()
 {
  return Pendientes.pendiente(List.ofArray([Doc.TextNode("Agregar Forma de pago: "),Doc.Element("a",[AttrProxy.Create("href","/#/Content/ProzperLyt.cntFormaFormasPago")],[Doc.TextNode("Tarjeta de Credito o Cuenta Bancaria")])]));
 };
 Pendientes.firmarAutorizacion=function()
 {
  return Pendientes.pendiente(List.ofArray([Doc.TextNode("Firmar "),Doc.Element("a",[AttrProxy.Create("href","/#/Content/ProzperLyt.cntFormaFormasPago")],[Doc.TextNode("Autorizacion (de click en: AUTORIZAR DEBITO)")])]));
 };
 Pendientes.esAutorizacion=function(cuentas,archivo)
 {
  return archivo.tipo.$===1&&Seq.exists(function(fp)
  {
   return archivo.nombre.indexOf(fp.cuentaPago.get_MaskedCuenta())!=-1;
  },cuentas);
 };
 Pendientes.subirArchivoTipo=function(tipo)
 {
  return Pendientes.pendiente(List.ofArray([Doc.TextNode("Subir "),Doc.Element("a",[AttrProxy.Create("href","/#/Content/ProzperLyt.cntSubirDocumentos")],[Doc.TextNode((function($1)
  {
   return function($2)
   {
    return $1(ProzperServer_GeneratedPrintf.p$5($2));
   };
  }(Global.id))(tipo))])]));
 };
 Pendientes.esIdentificacion=function(ar)
 {
  var m;
  m=ar.tipo;
  return m.$==2||(m.$==3||m.$==4);
 };
 Pendientes.subirIdentificacion=function()
 {
  return Pendientes.pendiente(List.ofArray([Doc.TextNode("Subir documento de identidad: "),Doc.Element("a",[AttrProxy.Create("href","/#/Content/ProzperLyt.cntSubirDocumentos")],[Doc.TextNode("Cedula, Pasaporte, Licencia de Conducir")])]));
 };
 Pendientes.filtroArchivo=function(p,archivos)
 {
  return Arrays.ofSeq(Seq.filter(p,Seq.filter(function(ar)
  {
   return ar.status.$!==3&&ar.status.$!==4;
  },archivos)));
 };
 Pendientes.verificarArchivo=function(ar)
 {
  var m;
  m=ar.status;
  return m.$==1?Doc.TextNode((((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1(ProzperServer_GeneratedPrintf.p$5($2)+" Verificado ("+Utils.toSafe($3)+")");
  }))(Global.id))(ar.tipo))(m.$0)):Pendientes.pendienteArchivo(ar);
 };
 Pendientes.pendiente=function(docs)
 {
  return Doc.Element("li",[],docs);
 };
 Pendientes.filtroCuenta=function(p,cuentas)
 {
  return Arrays.ofSeq(Seq.filter(p,cuentas));
 };
 Pendientes.verificarCuenta=function(fp)
 {
  var m;
  m=fp.authorizeIdR;
  return m.$==1?Doc.TextNode((((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1(Utils.toSafe($2)+" NO REGISTRADA en Authorize ("+Utils.toSafe($3)+")");
  }))(Global.id))(Global.String(fp.cuentaPago)))(m.$0)):Doc.TextNode((((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1(Utils.toSafe($2)+" Registrada ("+Utils.toSafe($3)+")");
  }))(Global.id))(Global.String(fp.cuentaPago)))(m.$0.get_Id()));
 };
 Pendientes.pendienteArchivo=function(ar)
 {
  return Pendientes.pendiente(List.ofArray([Doc.Element("a",[AttrProxy.Create("href",(((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1("https://prozper0.azurewebsites.net/documentos/"+Utils.toSafe($2)+"/"+Utils.toSafe($3));
  }))(Global.id))(ar.idAliado.get_Id()))(ar.nombre))],[Doc.TextNode((function($1)
  {
   return function($2)
   {
    return $1(ProzperServer_GeneratedPrintf.p$5($2));
   };
  }(Global.id))(ar.tipo))]),Doc.TextNode(" pendiente de Verificacion")]));
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
       var l$2;
       return Seq.append([AppFramework.newDocF("HtmlDoc",{
        $:1,
        $0:(l$2=lyt.lytName,function(h)
        {
         return LayoutEngineModule.htmlDoc(l$2,h);
        }),
        $1:"html"
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
    }));
   })),[],[]));
   AppFramework.mainDocV().Set(AppFramework.mainDocV().Get());
  },lyt.lytDefinition.get_View());
 };
 LayoutEngineModule.createEntries=function(lytNm,txt)
 {
  return LayoutEngineModule.processLines(function(l)
  {
   return LayoutEngineModule.createEntryO(lytNm,l);
  },String.splitByChar("\n",txt));
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
 LayoutEngineModule.htmlDoc=function(lytNm,html)
 {
  var m;
  m=LayoutEngineModule.getTextData(lytNm,html);
  return m.$==1?Doc.BindView(Doc.Verbatim,m.$0):m.$==2?LayoutEngineModule.errDoc((function($1)
  {
   return function($2)
   {
    return $1("HtmlDoc: unexpected action "+GeneratedPrintf.p$1($2));
   };
  }(Global.id))(m.$0)):Doc.Verbatim(m.$0);
 };
 LayoutEngineModule.none=function(x)
 {
  return Doc.Element("span",[],[]);
 };
 LayoutEngineModule.turnToView=function(f)
 {
  return Doc.EmbedView(View.Map(f,AppFramework.mainDocV().get_View()));
 };
 LayoutEngineModule.splitName=function()
 {
  SC$2.$cctor();
  return SC$2.splitName;
 };
 LayoutEngineModule.getDocFinal=function(parms,doc)
 {
  var m;
  m=LayoutEngineModule.getDocF(parms,doc);
  return m[1].$==0?m[0]:LayoutEngineModule.errDoc((((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1("Too many parameters "+GeneratedPrintf.p($2)+" "+Utils.printList(function($4)
   {
    return"("+Utils.prettyPrint($4[0])+", "+Utils.prettyPrint($4[1])+")";
   },$3));
  }))(Global.id))(doc))(parms));
 };
 LayoutEngineModule.errDoc=function(txt)
 {
  return Doc.Element("div",[],[Doc.TextNode(txt)]);
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
 LayoutEngineModule.createSplitter=function(lytNm,name,vertical,measures,docs)
 {
  var p;
  p=LayoutEngineModule.pairOfDocs(lytNm,docs);
  return measures.$==1?LayoutEngineModule.variableSplitter(vertical,measures.$0,measures.$1,measures.$2,p[0],p[1]):LayoutEngineModule.fixedSplitter(vertical,measures.$0,measures.$1,p[0],p[1]);
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
 LayoutEngineModule.createElement=function(lytNm,name,element,attrs,docs)
 {
  var x;
  x=[LayoutEngineModule.turnToView(function()
  {
   return Doc.Concat(LayoutEngineModule.getDocs(lytNm,docs));
  })];
  return Doc.Element(element,LayoutEngineModule.getAttrs(lytNm,attrs[0],attrs[1]),x);
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
   return o==null?LayoutEngineModule.errDoc((function($1)
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
      $0:nm.toLowerCase(),
      $1:(LayoutEngineModule.getDocF(T$1.Empty,o$3.$0))[0]
     }
    }),o$2==null?(o$4=(t$1=((LayoutEngineModule.splitName())(lytNm))(id),AppFramework.tryGetVar(t$1[0],t$1[1])),o$4==null?null:{
     $:1,
     $0:{
      $:8,
      $0:nm.toLowerCase(),
      $1:o$4.$0.varVar
     }
    }):o$2),o$1==null?{
     $:0,
     $0:nm.toLowerCase(),
     $1:LayoutEngineModule.errDoc((function($4)
     {
      return function($5)
      {
       return $4("Missing element: "+Utils.toSafe($5));
      };
     }(Global.id))(id))
    }:o$1.$0):(nm$1=$2[0],m$1=LayoutEngineModule.getTextData(lytNm,$3[0]),m$1.$==1?{
     $:2,
     $0:nm$1.toLowerCase(),
     $1:m$1.$0
    }:m$1.$==2?(act=m$1.$0,{
     $:4,
     $0:nm$1.toLowerCase(),
     $1:function(el)
     {
      return function(ev)
      {
       return AppFramework.callFunction(el,ev,act.actFunction);
      };
     }
    }):{
     $:1,
     $0:nm$1.toLowerCase(),
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
      $0:tempName[0].toLowerCase()
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
 LayoutEngineModule.createConcat=function(lytNm,name,docs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   return Doc.Concat(LayoutEngineModule.getDocs(lytNm,docs));
  });
 };
 LayoutEngineModule.createVar=function(lytNm,varName,v)
 {
  return Var$1.Create$1(v);
 };
 LayoutEngineModule.addNewLayout=function(name,layout)
 {
  var x,x$1;
  LayoutEngineModule.addLayout((x=(x$1=!Unchecked.Equals(layout,null)?layout:"\r\n            split horizontal 0-50-100 AppFramework.AppFwkClient Hello\r\n            Hello h1 \"color:blue; class=btn-primary\" \"How are you today?\" Ask\r\n            Ask Doc InputLabel \"placeholder=Type you answer here...\" \"Answer:\" AppFramework.mainDocV  \r\n            ",(String.unindentStr())(x$1)),LayoutEngineModule.newLyt(!Unchecked.Equals(layout,null)?name:"Lyt_"+Strings.Replace(Global.String(Guid.NewGuid()),"-",""),x)));
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
    return[Doc.Element("div",[],[Doc.TextNode((((Runtime$1.Curried3(function($3,$4,$5)
    {
     return $3("Parameters do not coincide with definition "+GeneratedPrintf.p($4)+" - "+Utils.printList(function($6)
     {
      return"("+Utils.prettyPrint($6[0])+", "+Utils.prettyPrint($6[1])+")";
     },$5));
    }))(Global.id))(doc))(parms))]),T$1.Empty];
  }
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
 LayoutEngineModule.Identifier=function(a,a$1)
 {
  var $1,a$2,t;
  return(a$2=LibraryJS.REGEX$1("^[$a-zA-Z_][0-9a-zA-Z_\\.\\-$]*$","",a),a$2!=null&&a$2.$==1&&((t=a$2.$0,!Unchecked.Equals(t,null)&&t.length===1)&&(a$1?false:($1=Arrays.get(a$2.$0,0),true))))?{
   $:1,
   $0:$1
  }:null;
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
 LayoutEngineModule.createSplitterM=function()
 {
  SC$2.$cctor();
  return SC$2.createSplitterM;
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
 LayoutEngineModule.createButtonM=function()
 {
  SC$2.$cctor();
  return SC$2.createButtonM;
 };
 LayoutEngineModule.createInputM=function()
 {
  SC$2.$cctor();
  return SC$2.createInputM;
 };
 LayoutEngineModule.createTextAreaM=function()
 {
  SC$2.$cctor();
  return SC$2.createTextAreaM;
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
 LayoutEngineModule.createVarM=function()
 {
  SC$2.$cctor();
  return SC$2.createVarM;
 };
 LayoutEngineModule.createDocM=function()
 {
  SC$2.$cctor();
  return SC$2.createDocM;
 };
 LayoutEngineModule.createTemplateM=function()
 {
  SC$2.$cctor();
  return SC$2.createTemplateM;
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
 LayoutEngineModule.createConcatM=function()
 {
  SC$2.$cctor();
  return SC$2.createConcatM;
 };
 LayoutEngineModule.createElementM=function()
 {
  SC$2.$cctor();
  return SC$2.createElementM;
 };
 LayoutEngineModule.getDocs=function(lytNm,docs)
 {
  var m;
  return docs.$==0?T$1.Empty:(m=LayoutEngineModule.getOneDoc(lytNm,docs),new T$1({
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
  }(Global.id))(id),(Library.print(v),v))),parms]:o$2.$0):o.$0)))))):docs.$==0?[Doc.get_Empty(),T$1.Empty]:(rest=docs.$1,(a$1=LayoutEngineModule.getTextData(lytNm,docs.$0[0]),a$1.$==1?[Doc.TextView(a$1.$0),rest]:a$1.$==2?[LayoutEngineModule.errDoc((function($2)
  {
   return function($3)
   {
    return $2("Unexpected action: "+Utils.toSafe($3));
   };
  }(Global.id))(a$1.$0.actName)),rest]:[Doc.TextNode(a$1.$0),rest]));
 };
 Option.ofObj=function(o)
 {
  return o==null?null:{
   $:1,
   $0:o
  };
 };
 Aliado$1.New=function(id,idPadreO,idForAuthorize,influyente,datosPersonales,contactos,identificacion,isInternal,status,diaPago,tipo,fechaRegistro,fechaStatus,nReferidos,nRefActivos,nDescendientes,nDescActivos,comision,nivel,documentos,docPendientes)
 {
  return{
   id:id,
   idPadreO:idPadreO,
   idForAuthorize:idForAuthorize,
   influyente:influyente,
   datosPersonales:datosPersonales,
   contactos:contactos,
   identificacion:identificacion,
   isInternal:isInternal,
   status:status,
   diaPago:diaPago,
   tipo:tipo,
   fechaRegistro:fechaRegistro,
   fechaStatus:fechaStatus,
   nReferidos:nReferidos,
   nRefActivos:nRefActivos,
   nDescendientes:nDescendientes,
   nDescActivos:nDescActivos,
   comision:comision,
   nivel:nivel,
   documentos:documentos,
   docPendientes:docPendientes
  };
 };
 Aliado$2.empty=function()
 {
  SC$1.$cctor();
  return SC$1.empty;
 };
 Aliado$2.nombre2=function(dp)
 {
  var o,o$1;
  return(o=(o$1=dp.titulo,o$1==null?null:{
   $:1,
   $0:" "+o$1.$0
  }),o==null?"":o.$0)+Strings.Trim(dp.nombre1+" "+dp.nombre2)+" "+Strings.Trim(dp.apellido1+" "+dp.apellido2);
 };
 Aliado$2.nombre=function(dp)
 {
  var o,o$1;
  return(o=(o$1=dp.titulo,o$1==null?null:{
   $:1,
   $0:" "+o$1.$0
  }),o==null?"":o.$0)+(dp.apellido1===""?"":Strings.Trim(dp.apellido1+" "+dp.apellido2)+", ")+dp.nombre1+" "+dp.nombre2;
 };
 Aliado$2.busqueda=function(aliados)
 {
  var padres,aliadosMap;
  function m(pO,ch)
  {
   return[pO,Arrays.ofSeq(Seq.map(function(t)
   {
    return t[1];
   },ch))];
  }
  function aliadoO(id)
  {
   var m$1,o;
   m$1=(o=null,[aliadosMap.TryGetValue(id,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o]);
   return m$1[0]?{
    $:1,
    $0:m$1[1]
   }:null;
  }
  function hijosDe(idO)
  {
   var m$1,o;
   m$1=(o=null,[padres.TryGetValue({
    $:1,
    $0:idO
   },{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o]);
   return m$1[0]?m$1[1]:[];
  }
  function nivelDe(idO)
  {
   var o,o$1;
   o=(o$1=idO==null?null:aliadoO(idO.$0),o$1==null?null:{
    $:1,
    $0:1+nivelDe(o$1.$0.idPadreO)
   });
   return o==null?0:o.$0;
  }
  function hijos(al)
  {
   return Arrays.choose(aliadoO,hijosDe(al.id));
  }
  function descendientes(al)
  {
   return Arrays.ofSeq(Seq.delay(function()
   {
    return Seq.collect(function(h)
    {
     return Seq.append([h],Seq.delay(function()
     {
      return descendientes(h);
     }));
    },hijos(al));
   }));
  }
  padres=new FSharpMap.New(Seq.map(function($1)
  {
   return m($1[0],$1[1]);
  },Seq.groupBy(function(t)
  {
   return t[0];
  },Seq.map(function(al)
  {
   return[al.idPadreO,al.id];
  },aliados))));
  aliadosMap=new FSharpMap.New(Seq.map(function(al)
  {
   return[al.id,al];
  },aliados));
  return Buscar.New(hijosDe,nivelDe,function(id)
  {
   try
   {
    return aliadosMap.get_Item(id);
   }
   catch(e)
   {
    return(function($1)
    {
     return function($2)
     {
      return $1("buscarAliado failed: "+ProzperServer_GeneratedPrintf.p$12($2));
     };
    }(Operators.FailWith))(id);
   }
  },aliadoO,hijos,descendientes);
 };
 Aliado$2.comision=function(pre,al)
 {
  var p;
  p=Aliado$2.premisas(pre,al);
  return[al.nRefActivos*p[0],al.nDescActivos*p[1]];
 };
 Aliado$2.premisas=function(pre,al)
 {
  var p;
  p=al.tipo.$==0?[pre.comisionReferidosMaster,pre.comisionDescendientesMaster]:[pre.comisionReferidosRegular,pre.comisionDescendientesRegular];
  return al.status.$==1?[p[0],p[1]]:[0,0];
 };
 Aliado$2.correo=function(al)
 {
  var o;
  o=Seq.tryHead(Seq.choose(function(a)
  {
   return a.$==1?{
    $:1,
    $0:a.$0.email
   }:null;
  },al.contactos));
  return o==null?"":o.$0;
 };
 Aliado$2.dia=function(a)
 {
  return a.$==1?5:a.$==2?10:a.$==3?15:a.$==4?20:a.$==5?25:1;
 };
 TemplateInstance=Server.TemplateInstance=Runtime$1.Class({
  get_Doc:function()
  {
   return this.doc;
  },
  Hole:function(name)
  {
   return this.allVars.get_Item(name);
  }
 },Obj,TemplateInstance);
 TemplateInstance.New=Runtime$1.Ctor(function(c,doc)
 {
  Obj.New.call(this);
  this.doc=doc;
  this.allVars=c.$==0?c.$0:Operators.FailWith("Should not happen");
 },TemplateInstance);
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
 ProzperServer_Templates.opcionesadministrador=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"opcionesadministrador"
  },h):void 0;
 };
 ProzperServer_GeneratedPrintf.p$2=function($1)
 {
  return $1.$==1?"Regular":"Master";
 };
 ProzperServer_GeneratedPrintf.p$1=function($1)
 {
  return $1.$==3?"Cancelado":$1.$==2?"Inactivo":$1.$==1?"Activo":"CuentaCreada";
 };
 ProzperServer_Templates.filaaliado=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"filaaliado"
  },h):void 0;
 };
 ProzperServer_Templates.tablaaliados=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"tablaaliados"
  },h):void 0;
 };
 ProzperServer_Templates.aliado=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"aliado"
  },h):void 0;
 };
 ProzperServer_Templates.calculo=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"calculo"
  },h):void 0;
 };
 ProzperServer_GeneratedPrintf.p$15=function($1)
 {
  return $1.$==2?"Mensaje "+Utils.prettyPrint($1.$0):$1.$==1?"NuevoRegistro "+Utils.prettyPrint($1.$0):"ROk";
 };
 ProzperServer_Templates.formaregistro=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"formaregistro"
  },h):void 0;
 };
 ProzperServer_Templates.filaconsolidado=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"filaconsolidado"
  },h):void 0;
 };
 ProzperServer_Templates.consolidado=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"consolidado"
  },h):void 0;
 };
 ProzperServer_GeneratedPrintf.p$17=function($1)
 {
  return $1.$==5?"Dia25":$1.$==4?"Dia20":$1.$==3?"Dia15":$1.$==2?"Dia10":$1.$==1?"Dia05":"Dia01";
 };
 ProzperServer_Templates.filapago=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"filapago"
  },h):void 0;
 };
 ProzperServer_Templates.tablapagos=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"tablapagos"
  },h):void 0;
 };
 ProzperServer_Templates.filadocs=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"filadocs"
  },h):void 0;
 };
 ProzperServer_Templates.subirdocumentos=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"subirdocumentos"
  },h):void 0;
 };
 ProzperServer_Templates.autorizacionpago=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"autorizacionpago"
  },h):void 0;
 };
 ProzperServer_Templates.contrato=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"contrato"
  },h):void 0;
 };
 ProzperServer_Router.r=function()
 {
  return RouterOperators.JSUnion(void 0,[[null,[[null,[]]],[]],[null,[[null,["NoUser"]]],[]],[null,[[null,["PreRegister"]]],[]],[null,[[null,["Content"]]],[RouterOperators.rString()]],[null,[[null,["Pdf"]]],[RouterOperators.rWildcard()]],[null,[[null,["Video"]]],[RouterOperators.rWildcard()]]]);
 };
 ProzperServer_GeneratedPrintf.p$12=function($1)
 {
  return"IdAliado "+Utils.prettyPrint($1.$0);
 };
 ProzperServer_Templates.datospersonales=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"datospersonales"
  },h):void 0;
 };
 ProzperServer_GeneratedPrintf.p$14=function($1)
 {
  return $1.$==2?"Empresa":$1.$==1?"Femenino":"Masculino";
 };
 ProzperServer_Templates.correo=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"correo"
  },h):void 0;
 };
 ProzperServer_Templates.telefono=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"telefono"
  },h):void 0;
 };
 ProzperServer_Templates.direccion=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"direccion"
  },h):void 0;
 };
 ProzperServer_Templates.formadatospersonales=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"formadatospersonales"
  },h):void 0;
 };
 ProzperServer_Templates.formacontactos=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"formacontactos"
  },h):void 0;
 };
 ProzperServer_Templates.formacuentas=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"formacuentas"
  },h):void 0;
 };
 ProzperServer_Templates.formafirma=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"formafirma"
  },h):void 0;
 };
 ProzperServer_Templates.transaccion=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"transaccion"
  },h):void 0;
 };
 ProzperServer_Templates.transacciones=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"transacciones"
  },h):void 0;
 };
 GeneratedPrintf.p=function($1)
 {
  return"{"+("errorCode = "+Utils.prettyPrint($1.errorCode))+"; "+("errorMessage = "+Utils.prettyPrint($1.errorMessage))+"; "+("message = "+Utils.prettyPrint($1.message))+"; "+("name = "+Utils.prettyPrint($1.name))+"; "+("stack = "+ProzperServer_GeneratedPrintf.p$13($1.stack))+"}";
 };
 GeneratedPrintf.p$1=function($1)
 {
  return"{"+("accessToken = "+Utils.prettyPrint($1.accessToken))+"; "+("account = "+Utils.prettyPrint($1.account))+"; "+("accountState = "+Utils.prettyPrint($1.accountState))+"; "+("expiresOn = "+Utils.prettyPrint($1.expiresOn))+"; "+("idToken = "+Utils.prettyPrint($1.idToken))+"; "+("scopes = "+Utils.prettyPrint($1.scopes))+"; "+("tenantId = "+Utils.prettyPrint($1.tenantId))+"; "+("tokenType = "+Utils.prettyPrint($1.tokenType))+"; "+("uniqueId = "+Utils.prettyPrint($1.uniqueId))+"}";
 };
 ProzperServer_GeneratedPrintf.p$16=function($1)
 {
  return"IdPayment "+Utils.prettyPrint($1.$0);
 };
 ProzperServer_GeneratedPrintf.p$5=function($1)
 {
  return $1.$==7?"Otro "+Utils.prettyPrint($1.$0):$1.$==6?"FormaW8BEN":$1.$==5?"FormaW9":$1.$==4?"LicenciaConducir":$1.$==3?"Cedula":$1.$==2?"Pasaporte":$1.$==1?"Autorizacion":"Contrato";
 };
 ProzperServer_GeneratedPrintf.p$4=function($1)
 {
  return $1.$==2?"OtroS "+Utils.prettyPrint($1.$0):$1.$==1?"Florida":"Texas";
 };
 ProzperServer_GeneratedPrintf.p$3=function($1)
 {
  return $1.$==3?"OtroP "+Utils.prettyPrint($1.$0):$1.$==2?"Argentina":$1.$==1?"Venezuela":"USA";
 };
 ProzperServer_GeneratedPrintf.p$8=function($1)
 {
  return $1.$==2?"Otra "+Utils.prettyPrint($1.$0):$1.$==1?"Corriente":"Ahorro";
 };
 ProzperServer_GeneratedPrintf.p$6=function($1)
 {
  return $1.$==5?"Cambiado":$1.$==4?"Cancelado":$1.$==3?"Expirado":$1.$==2?"Rechazado "+Utils.prettyPrint($1.$0):$1.$==1?"Verificado "+Utils.prettyPrint($1.$0):"Subido";
 };
 ProzperServer_GeneratedPrintf.p$13=function($1)
 {
  return $1==null?"null":"Some "+Utils.prettyPrint($1.$0);
 };
 ProzperServer_Templates.cuentabancaria=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"cuentabancaria"
  },h):void 0;
 };
 ProzperServer_Templates.tarjetacredito=function(h)
 {
  Templates.LoadLocalTemplates("index0");
  return h?Templates.NamedTemplate("index0",{
   $:1,
   $0:"tarjetacredito"
  },h):void 0;
 };
 ProzperServer_GeneratedPrintf.p=function($1)
 {
  return $1.$==3?"ResetPassword":$1.$==2?"EditProfile":$1.$==1?"SignUp":"SignIn";
 };
 ProzperServer_GeneratedPrintf.p$11=function($1)
 {
  return $1.$==3?"Voip":$1.$==2?"Habitacion":$1.$==1?"Oficina":"Movil";
 };
 ProzperServer_GeneratedPrintf.p$10=function($1)
 {
  return $1.$==3?"Otro "+Utils.prettyPrint($1.$0):$1.$==2?"ServicioPostal":$1.$==1?"Oficina":"Habitacion";
 };
 ProzperServer_GeneratedPrintf.p$7=function($1)
 {
  return $1.$==3?"Otra "+Utils.prettyPrint($1.$0):$1.$==2?"Amex":$1.$==1?"MasterCard":"Visa";
 };
 ProzperServer_GeneratedPrintf.p$9=function($1)
 {
  return $1.$==2?"Otro "+Utils.prettyPrint($1.$0):$1.$==1?"PagoComision":"PagoAfiliacion";
 };
 Doc=UI.Doc=Runtime$1.Class({},Obj,Doc);
 Doc.get_Empty=function()
 {
  return Doc.Mk(null,View.Const());
 };
 Doc.Concat=function(xs)
 {
  var x;
  x=Array$1.ofSeqNonCopying(xs);
  return Array$1.TreeReduce(Doc.get_Empty(),Doc.Append,x);
 };
 Doc.BindView=function(f,view)
 {
  return Doc.EmbedView(View.Map(f,view));
 };
 Doc.Mk=function(node,updates)
 {
  return new Doc.New(node,updates);
 };
 Doc.ConvertSeqBy=function(key,render,view)
 {
  return Doc.Flatten(View.MapSeqCachedViewBy(key,function($1,$2)
  {
   return(render($1))($2);
  },view));
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
 Doc.Append=function(a,b)
 {
  return Doc.Mk({
   $:0,
   $0:a.docNode,
   $1:b.docNode
  },View.Map2Unit(a.updates,b.updates));
 };
 Doc.TextNode=function(v)
 {
  return Doc.Mk({
   $:5,
   $0:DomUtility.CreateText(v)
  },View.Const());
 };
 Doc.Verbatim=function(html)
 {
  var m;
  return Doc.Mk(Array$1.MapTreeReduce(function(n)
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
 Doc.Flatten=function(view)
 {
  return Doc.EmbedView(View.Map(Doc.Concat,view));
 };
 Doc.ConvertBy=function(key,render,view)
 {
  return Doc.Flatten(View.MapSeqCachedBy(key,render,view));
 };
 Doc.Button=function(caption,attrs,action)
 {
  var attrs$1;
  attrs$1=AttrProxy.Concat(attrs);
  return Elt.New(Doc.Clickable("button",action),attrs$1,Doc.TextNode(caption));
 };
 Doc.Element=function(name,attr$1,children)
 {
  var a,a$1;
  a=AttrProxy.Concat(attr$1);
  a$1=Doc.Concat(children);
  return Elt.New(DomUtility.CreateElement(name),a,a$1);
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
  View.Sink(An.get_UseAnimations()||Settings.BatchUpdatesEnabled()?Mailbox$1.StartProcessor(Docs.PerformAnimatedUpdate(childrenOnly,st,doc.docNode)):function()
  {
   Docs.PerformSyncUpdate(childrenOnly,st,doc.docNode);
  },doc.updates);
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
 Doc.InputInternal=function(elemTy,attr$1)
 {
  var el;
  el=DomUtility.CreateElement(elemTy);
  return Elt.New(el,AttrProxy.Concat(attr$1(el)),Doc.get_Empty());
 };
 Doc.Run=function(parent,doc)
 {
  Docs.LinkElement(parent,doc.docNode);
  Doc.RunInPlace(false,parent,doc);
 };
 Doc.InputArea=function(attr$1,_var)
 {
  return Doc.InputInternal("textarea",function()
  {
   return Seq.append(attr$1,[AttrModule.Value(_var)]);
  });
 };
 Doc.New=Runtime$1.Ctor(function(docNode,updates)
 {
  Obj.New.call(this);
  this.docNode=docNode;
  this.updates=updates;
 },Doc);
 Rpc.llamadas=function()
 {
  SC$1.$cctor();
  return SC$1.llamadas;
 };
 Rpc.ejecutarDataEventoNuevo=function(p)
 {
  var f,a,b;
  f=(a=Aliado.get_LoggedId(),function(d)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc.ejecutarDataEventoNuevo:1305833807",[a,d]);
  });
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   var a$1;
   a$1=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a$1);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$1(f(p));
   }),function()
   {
    var a$2;
    a$2=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$2);
   });
  }));
 };
 Rpc.iterA=function(arm)
 {
  AsyncResult.iterA(function(a)
  {
   Global.alert(a);
  },Global.ignore,arm);
 };
 Rpc.obtenerFormasDePagoPara=function(p)
 {
  var b;
  function f(a)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc.obtenerFormasDePagoPara:2142892534",[a]);
  }
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$1(f(p));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.obtenerListaDocs=function(p)
 {
  var b;
  function f(a)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc.obtenerListaDocs:462722128",[a]);
  }
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$1(f(p));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.enviarCorreosInvitacion=function(p,p$1)
 {
  var f,a,p$2,b;
  f=(a=Aliado.get_LoggedId(),function(t)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc.enviarCorreosInvitacion:921486630",[a,t[0],t[1]]);
  });
  p$2=[p,p$1];
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   var a$1;
   a$1=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a$1);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$1(f(p$2));
   }),function()
   {
    var a$2;
    a$2=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$2);
   });
  }));
 };
 Rpc.obtenerIdInfluyente=function(p)
 {
  var b;
  function f(c)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc.obtenerIdInfluyente:231616815",[c]);
  }
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$1(f(p));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.obtenerUnions=function()
 {
  var b;
  function f()
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc.obtenerUnions:-1742744641",[]);
  }
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$1(f(void 0));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.agregarUsuarioSiEsNuevo=function(p)
 {
  var f,a,b;
  f=(a=Aliado.get_LoggedId(),function(c)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc.agregarUsuarioSiEsNuevo:2096926511",[a,c]);
  });
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   var a$1;
   a$1=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a$1);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$1(f(p));
   }),function()
   {
    var a$2;
    a$2=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$2);
   });
  }));
 };
 Rpc.obtenerEstadoParaUsuario=function(p)
 {
  var p$1,b;
  function f(a)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc.obtenerEstadoParaUsuario:1912907973",[a]);
  }
  p$1=Aliado.get_LoggedId();
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$1(f(p$1));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.borrarFormaPago=function(p)
 {
  var f,a,b;
  f=(a=Aliado.get_LoggedId(),function(p$1)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc.borrarFormaPago:1837795433",[a,p$1]);
  });
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   var a$1;
   a$1=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a$1);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$1(f(p));
   }),function()
   {
    var a$2;
    a$2=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$2);
   });
  }));
 };
 Rpc.registrarTarjeta=function(p)
 {
  var f,a,b;
  f=(a=Aliado.get_LoggedId(),function(p$1)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc.registrarTarjeta:1914379366",[a,p$1]);
  });
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   var a$1;
   a$1=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a$1);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$1(f(p));
   }),function()
   {
    var a$2;
    a$2=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$2);
   });
  }));
 };
 Rpc.registrarCuenta=function(p)
 {
  var f,a,b;
  f=(a=Aliado.get_LoggedId(),function(p$1)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc.registrarCuenta:1678015656",[a,p$1]);
  });
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   var a$1;
   a$1=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a$1);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$1(f(p));
   }),function()
   {
    var a$2;
    a$2=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$2);
   });
  }));
 };
 Rpc.validarFormaPago=function(p)
 {
  var f,a,b;
  f=(a=Aliado.get_LoggedId(),function(p$1)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc.validarFormaPago:1837795433",[a,p$1]);
  });
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   var a$1;
   a$1=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a$1);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$1(f(p));
   }),function()
   {
    var a$2;
    a$2=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$2);
   });
  }));
 };
 Rpc.actualizarSubscripcion=function(p)
 {
  var f,a,b;
  f=(a=Aliado.get_LoggedId(),function(i)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc.actualizarSubscripcion:1837795433",[a,i]);
  });
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   var a$1;
   a$1=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a$1);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$1(f(p));
   }),function()
   {
    var a$2;
    a$2=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$2);
   });
  }));
 };
 Rpc.obtenerFormasDePago=function()
 {
  var b;
  function f()
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc.obtenerFormasDePagoId:-1441558235",[Aliado.get_LoggedId()]);
  }
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$1(f(void 0));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 IdAliado=TypesV0.IdAliado=Runtime$1.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,IdAliado);
 Modelo.New=function(idAliado,aliados,anoActual,periodoActual,premisas,nevento)
 {
  return{
   idAliado:idAliado,
   aliados:aliados,
   anoActual:anoActual,
   periodoActual:periodoActual,
   premisas:premisas,
   nevento:nevento
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
 Snap.TryGet=function(snap)
 {
  var m,$1;
  m=snap.s;
  return(m!=null&&m.$==0?($1=m.$0,true):m!=null&&m.$==2&&($1=m.$0,true))?{
   $:1,
   $0:$1
  }:null;
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
 SC$1.$cctor=function()
 {
  var f,g,c,c$1,d,m,$1,agent,c$2,c$3,f$1,f$2,b,b$1,b$2,b$3;
  SC$1.$cctor=Global.ignore;
  function g$1(s)
  {
   return Strings.concat("\n",s);
  }
  function f$3(s)
  {
   return String.splitByChar$1("\n",s);
  }
  function g$2(s)
  {
   var a,b$4;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a=0,(b$4=Arrays.length(s)-2,Unchecked.Compare(a,b$4)===1?a:b$4))
   });
  }
  function g$3(s)
  {
   return Strings.concat("\n",s);
  }
  function f$4(s)
  {
   return s+"T00:00:00";
  }
  function g$4(v)
  {
   return(function($2)
   {
    return function($3)
    {
     return $2(Utils.prettyPrint($3));
    };
   }(Global.id))(v);
  }
  function f$5(a)
  {
   var a$1;
   a$1=LibraryJS.REGEX$2(LibraryJS.rexEmail$1(),"gi",a);
   return a$1!=null&&a$1.$==1?a$1.$0:[];
  }
  function g$5(s)
  {
   return Strings.concat("\n",s);
  }
  function f$6(a)
  {
   return a==="ProzperLyt.mainContent"?EndPoint.DefaultEP:{
    $:3,
    $0:a
   };
  }
  function g$6(v)
  {
   if(!Unchecked.Equals(ModeloUI.endPointV().Get(),v))
    ModeloUI.endPointV().Set(v);
  }
  SC$1.rtn=function(v)
  {
   return[v];
  };
  SC$1.result=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.resultP=new BuilderP.New();
  SC$1.eff=new EffBuilder.New();
  SC$1.asyncResult=new AsyncResultBuilder.New();
  SC$1.asyncResultP=new AsyncResultBuilderP.New();
  SC$1.unindentStr=function(x)
  {
   return g$1(String.unindent$1(x));
  };
  SC$1.skipLastLine=(f=function(x)
  {
   return g$2(f$3(x));
  },function(x)
  {
   return g$3(f(x));
  });
  SC$1.parseDateO2=(g=ParseO.tryParseWith$1(function(a)
  {
   var o,m$1;
   o=0;
   return[(m$1=DateUtil.TryParse(a),m$1!=null&&m$1.$==1&&(o=m$1.$0,true)),o];
  }),function(x)
  {
   return g(f$4(x));
  });
  SC$1.parseDateO=ParseO.tryParseWith$1(function(a)
  {
   var o,m$1;
   o=0;
   return[(m$1=DateUtil.TryParse(a),m$1!=null&&m$1.$==1&&(o=m$1.$0,true)),o];
  });
  SC$1.parseIntO=ParseO.tryParseWith$1(function(a)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt32(a,{
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
  SC$1.parseInt64O=ParseO.tryParseWith$1(function(a)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt64(a,{
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
  SC$1.parseSingleO=ParseO.tryParseWith$1(function(a)
  {
   var o,$2;
   o=0;
   return[($2=Global.Number(a),Global.isNaN($2)?false:(o=$2,true)),o];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith$1(function(a)
  {
   var o,$2;
   o=0;
   return[($2=Global.Number(a),Global.isNaN($2)?false:(o=$2,true)),o];
  });
  SC$1.parseGuidO=ParseO.tryParseWith$1(function(a)
  {
   var o;
   o=null;
   return[Guid.TryParse(a,{
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
  SC$1["|Date|_|"]=ParseO.parseDateO$1();
  SC$1["|Int|_|"]=ParseO.parseIntO$1();
  SC$1["|Int64|_|"]=ParseO.parseInt64O$1();
  SC$1["|Single|_|"]=ParseO.parseSingleO$1();
  SC$1["|Double|_|"]=ParseO.parseDoubleO$1();
  SC$1["|Guid|_|"]=ParseO.parseGuidO$1();
  SC$1.serString=[Serializer.toJsonString,function(j)
  {
   return j.tryString();
  }];
  SC$1.serFloat=[function(v)
  {
   return(function($2)
   {
    return function($3)
    {
     return $2(Utils.prettyPrint($3));
    };
   }(Global.id))(v);
  },function(j)
  {
   return j.tryFloat();
  }];
  SC$1.serInt=[function(v)
  {
   return(function($2)
   {
    return function($3)
    {
     return $2(Utils.prettyPrint($3));
    };
   }(Global.id))(v);
  },function(j)
  {
   var o;
   o=j.tryInt();
   return o==null?null:{
    $:1,
    $0:Operators.toInt(o.$0)
   };
  }];
  SC$1.serInt64=[function($2)
  {
   return function($3)
   {
    return $2(Global.String($3));
   };
  }(Global.id),function(j)
  {
   return j.tryInt();
  }];
  SC$1.serBool=[function(v)
  {
   return(function($2)
   {
    return function($3)
    {
     return $2(Utils.prettyPrint($3));
    };
   }(Global.id))(v);
  },function(j)
  {
   return j.tryBool();
  }];
  SC$1.serDate=[function(x)
  {
   return g$4(Global.id(x));
  },function(j)
  {
   var o;
   o=j.tryInt();
   return o==null?null:{
    $:1,
    $0:o.$0
   };
  }];
  SC$1.counter=1;
  SC$1.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  SC$1.rexEmail="(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*";
  SC$1.policies=List.ofArray([Policy.SignIn,Policy.SignUp,Policy.EditProfile,Policy.ResetPassword]);
  SC$1.premisasCalculo=PremisasCalculo.New(15,25,25,0,75,31,26,28);
  SC$1.telVacio=Telefono$1.New(TipoTelefono.Movil,"","","","",false);
  SC$1.dirVacio=Direccion$1.New(Library.Error$1(""),TipoDireccion.Habitacion,"","","",new Estado({
   $:2,
   $0:""
  }),new Pais({
   $:3,
   $0:""
  }),new ZonaPostal({
   $:0,
   $0:""
  }));
  SC$1.tarVacio=TarjetaCredito.New("",TipoTarjeta.Visa,new NumeroTarjeta({
   $:0,
   $0:""
  }),Expiracion.New(2000,1));
  SC$1.ctaVacio=CuentaBancaria.New("","",TipoCuenta.Ahorro,new NumeroCuenta({
   $:0,
   $0:""
  }),new RoutingNumber({
   $:0,
   $0:""
  }));
  SC$1.modeloVacio=Modelo.New(new IdAliado({
   $:0,
   $0:""
  }),[],(c=Date$1.now(),(new Date$1(c)).getFullYear()),(c$1=Date$1.now(),(new Date$1(c$1)).getMonth()+1),TypesV0.premisasCalculo(),0);
  SC$1.correoVacio=CorreoElectronico.New("",null,null);
  SC$1.empty=(d=DatosPersonales$1.New(null,"","","","",Pais.USA,Genero.Masculino,(new Date$1(2000,1-1,1)).getTime()),Aliado$1.New(new IdAliado({
   $:0,
   $0:""
  }),null,null,null,d,[],[],false,StatusAliado.Inactivo,DiaPago.Dia01,TipoAliado.Regular,(new Date$1(2000,1-1,1)).getTime(),(new Date$1(2000,1-1,1)).getTime(),0,0,0,0,0,0,0,0));
  SC$1.serverEndPoint=Lazy.Create(function()
  {
   return self.location.protocol==="http:"?"http://localhost:7071/api/":(function($2)
   {
    return function($3)
    {
     return $2("https://"+Utils.toSafe($3)+"/api/");
    };
   }(Global.id))(self.location.host);
  });
  SC$1.originalProvider=Remoting.AjaxProvider();
  SC$1.getTokenOA=function()
  {
   var b$4;
   b$4=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Return(null);
   });
  };
  SC$1.rootdir="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\ProzperServer\\website";
  SC$1.TemplatesFileName="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\ProzperServer\\website"+"\\index0.html";
  ((function($2)
  {
   return function($3)
   {
    return $2(Utils.toSafe($3));
   };
  }(function(s)
  {
   console.log(s);
  }))("D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\ProzperServer\\website\\index0.html"));
  SC$1.appId=Strings.StartsWith(self.location.host,"prozper0")?"76703639-1d21-4bc3-bd46-c764f5ea78ee":"70ad4f9b-9a2b-409e-9c1e-d04dbb2e7cf2";
  SC$1.applicationId=Msal.storeValue("applicationId",Msal.appId());
  SC$1.tenantName=Msal.storeValue("tenantName","prozper");
  SC$1.ref=Msal.storeValue("ref","");
  SC$1.extraQueryParms=Msal.storeValue("extraQueryParms","mkt=es-us");
  SC$1.refreshBefore=Msal.storeValue("refreshBefore","0");
  SC$1.createOnStart=Msal.storeValue("createOnStart","1");
  SC$1.forceLogin=Msal.storeValue("forceLogin","1");
  SC$1.signInPolicy=Msal.storeValue("signInPolicy","B2C_1_SignIn");
  SC$1.signUpPolicy=Msal.storeValue("signUpPolicy","B2C_1_Registrarse");
  SC$1.editProfilePolicy=Msal.storeValue("editProfilePolicy","B2C_1_EditarPerfil");
  SC$1.resetPasswordPolicy=Msal.storeValue("resetPasswordPolicy","B2C_1_PasswordReset");
  SC$1.policyType=Msal.storeValue("policyType","SignIn");
  m=Msal.storageGetItem("preambleState");
  m==="InPreamble"||(m===""||m===null)?void Msal.storeValue("preambleState","GoToSignIn"):null;
  SC$1.authority=Msal.getAuthority(Msal.tenantName(),Msal.signInPolicy());
  SC$1.userO=Var$1.Create$1(null);
  SC$1.agent=Lazy.Create(function()
  {
   var agent$1,options;
   agent$1=(options=Configuration.New$1({
    $:1,
    $0:AuthOptions.New$1(Msal.applicationId(),{
     $:1,
     $0:Msal.authority()
    },{
     $:1,
     $0:false
    },null,null,null)
   },null,null,null),new self.Msal.UserAgentApplication(options));
   agent$1.handleRedirectCallback(function($2,$3)
   {
    Msal.redirectCallback($2,$3);
   });
   return agent$1;
  });
  SC$1.getTokenO=(agent=Mailbox.callA(function(v)
  {
   Library.print$1(v);
  },Msal.getTokenO0),function()
  {
   return agent.PostAndAsyncReply(function(reply)
   {
    return[reply,null];
   },null);
  });
  SC$1.modeloV=Var$1.Create$1(Modelo.New(new IdAliado({
   $:0,
   $0:":"
  }),[],(c$2=Date$1.now(),(new Date$1(c$2)).getFullYear()),(c$3=Date$1.now(),(new Date$1(c$3)).getMonth()+1),TypesV0.premisasCalculo(),-2));
  SC$1.formasPagoAliadoV=Var$1.Create$1([]);
  SC$1.invitacionesV=Var$1.Create$1("");
  SC$1.emailsInvitarW=View.Map((f$1=(f$2=function(x)
  {
   return Seq.distinct(f$5(x));
  },function(x)
  {
   return Seq.sort(f$2(x));
  }),function(x)
  {
   return g$5(f$1(x));
  }),ModeloUI.invitacionesV().get_View());
  SC$1.invitacionesDisabledW=View.Map(function(a)
  {
   return a===""?"disabled":"";
  },ModeloUI.emailsInvitarW());
  SC$1.selAliadoIdOV=Var$1.Create$1(null);
  SC$1.refAliadoIdOV=Var$1.Create$1(null);
  SC$1.endPointV=Router.InstallHash(EndPoint.DefaultEP,ProzperServer_Router.r());
  View.Sink(function(a)
  {
   if(a.$==1)
    ;
   else
    if(a.$==2)
     ;
    else
     if(a.$==4)
      Global.showPDF(a.$0);
     else
      if(a.$==5)
       Global.playVideo();
      else
       Msal.checkUser();
  },ModeloUI.endPointV().get_View());
  SC$1.contentVar=new FromView.New(View.Map2(function(a,a$1)
  {
   var $2,$3;
   return a$1.$==0&&!Unchecked.Equals(Msal.userO().Get(),null)?"ProzperLyt.mainContent":a$1.$==3&&(!Unchecked.Equals(Msal.userO().Get(),null)&&($3=a$1.$0,true))?$3:a$1.$==2?"ProzperLyt.cntPreRegister":a$1.$==4?"ProzperLyt.cntPDF":a$1.$==5?"ProzperLyt.cntVideo":"ProzperLyt.cntFormaNoUser";
  },Msal.userO().get_View(),ModeloUI.endPointV().get_View()),function(x)
  {
   return g$6(f$6(x));
  });
  SC$1.aliadoW=(b=View.get_Do(),View.Bind(function(a)
  {
   var aid,aliadoO;
   aid=a.idAliado;
   aliadoO=Seq.tryFind(function(al)
   {
    return Unchecked.Equals(al.id,aid);
   },a.aliados);
   return View.Const(aliadoO!=null&&aliadoO.$==1?aliadoO.$0:Aliado$2.empty());
  },ModeloUI.modeloV().get_View()));
  Remoting$1.installBearer(Msal.getTokenO());
  SC$1.llamadas=Var$1.Create$1(0);
  Remoting.set_EndPoint(Rpc$1.serverEndPoint().f()+"rpc/rpc");
  SC$1.shouldRefresh=true;
  View.Sink(function()
  {
   Refresh.refrescarData(true);
  },Msal.userO().get_View());
  Concurrency.Start((b$1=null,Concurrency.Delay(function()
  {
   return Concurrency.While(function()
   {
    return true;
   },Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(5*60*1000),function()
    {
     return Concurrency.Return(null);
    });
   }));
  })),null);
  try
  {
   self.document.addEventListener("visibilityChange",function()
   {
    return null;
   },false);
  }
  catch(m$1)
  {
   null;
  }
  SC$1.paises=Var$1.Create$1([]);
  SC$1.estados=Var$1.Create$1([]);
  SC$1.tiposDir=Var$1.Create$1([]);
  SC$1.tiposTel=Var$1.Create$1([]);
  SC$1.generos=Var$1.Create$1([]);
  SC$1.tiposCta=Var$1.Create$1([]);
  SC$1.tiposTar=Var$1.Create$1([]);
  SC$1.statuses=Var$1.Create$1([]);
  SC$1.aniosV=Var$1.Create$1([]);
  SC$1.mesesV=Var$1.Create$1([]);
  SC$1.tiposAr=Var$1.Create$1([]);
  SC$1.statusAr=Var$1.Create$1([]);
  Rpc.iterA((b$2=Monads.asyncResult(),b$2.Run(b$2.Delay(function()
  {
   return b$2.Bind$1(Rpc.obtenerUnions(),function(a)
   {
    VariousUI.paises().Set(a[0]);
    VariousUI.estados().Set(a[1]);
    VariousUI.tiposDir().Set(a[2]);
    VariousUI.tiposTel().Set(a[3]);
    VariousUI.generos().Set(a[4]);
    VariousUI.tiposCta().Set(a[5]);
    VariousUI.tiposTar().Set(a[6]);
    VariousUI.statuses().Set(a[7]);
    VariousUI.aniosV().Set(a[9]);
    VariousUI.mesesV().Set(a[8]);
    VariousUI.tiposAr().Set(a[10]);
    VariousUI.statusAr().Set(a[11]);
    return b$2.Zero();
   });
  }))));
  SC$1.ftel=[function(a)
  {
   return a.$==2?{
    $:1,
    $0:a.$0
   }:null;
  },function(a)
  {
   return{
    $:2,
    $0:a
   };
  }];
  SC$1.fcor=[function(a)
  {
   return a.$==1?{
    $:1,
    $0:a.$0
   }:null;
  },function(a)
  {
   return{
    $:1,
    $0:a
   };
  }];
  SC$1.fdir=[function(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  },function(a)
  {
   return{
    $:0,
    $0:a
   };
  }];
  SC$1.mensajes=Var$1.Create$1("");
  SC$1.firmanteV=Var$1.Create$1("");
  SC$1.fechaHoraV=Var$1.Create$1("");
  SC$1.locationV=Var$1.Create$1({});
  Concurrency.Start((b$3=null,Concurrency.Delay(function()
  {
   return Concurrency.While(function()
   {
    return true;
   },Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(1000),function()
    {
     var a;
     a=Library["String.Left$1"](function(n)
     {
      return n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2)+" "+("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)+":"+("00"+n.getMilliseconds()).slice(-3);
     }(new Date$1(Date$1.now())),19);
     FormaFirma.fechaHoraV().Set(a);
     return Concurrency.Zero();
    });
   }));
  })),null);
  SC$1.uploaded=function(a,b$4)
  {
   return Library.print$1(b$4);
  };
  SC$1.cuentaAutorizar=Var$1.Create$1(Doc.TextNode("No hay cuenta seleccionada"));
  SC$1.titular=Var$1.Create$1("");
  SC$1.pid=new IdPayment({
   $:0,
   $0:""
  });
  SC$1.ftar=[function(cp)
  {
   var m$2;
   m$2=cp.cuentaPago;
   return m$2.$==1?{
    $:1,
    $0:[m$2.$0,FormaFormasPago.msg(cp),cp.authorizeIdR.$==0]
   }:null;
  },function(fp)
  {
   return function(v)
   {
    var c$4;
    c$4=new CuentaPago({
     $:1,
     $0:v
    });
    return FormaPago.New(fp.nombre,Library.Error$1(""),c$4);
   };
  }];
  SC$1.fcta=[function(cp)
  {
   var m$2;
   m$2=cp.cuentaPago;
   return m$2.$==0?{
    $:1,
    $0:[m$2.$0,FormaFormasPago.msg(cp),cp.authorizeIdR.$==0]
   }:null;
  },function(fp)
  {
   return function(v)
   {
    var c$4;
    c$4=new CuentaPago({
     $:0,
     $0:v
    });
    return FormaPago.New(fp.nombre,Library.Error$1(""),c$4);
   };
  }];
  SC$1.transaccionesW=View.MapAsync(function()
  {
   var f$7,d$1;
   function g$7(v)
   {
    return Concurrency.Return(v);
   }
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc.obtenerTransaccionesPara:1561052143",[Aliado.get_LoggedId()]),(f$7=(d$1=[],function(r)
   {
    return Result.defaultValue(d$1,r);
   }),function(x)
   {
    return g$7(f$7(x));
   }));
  },ModeloUI.modeloV().get_View());
  SC$1.expandedOV=Var$1.Create$1(null);
  SC$1.aliadoIdW=View.Map2(function($2,$3)
  {
   return $2==null?$3.id:$2.$0;
  },ListaDocs.expandedOV().get_View(),ModeloUI.aliadoW());
  SC$1.layoutName="ProzperLyt";
  SC$1.appName="Prozper";
  SC$1.influencerV=Var$1.Create$1("");
  SC$1.influencerClassW=View.MapAsync(function(inf)
  {
   var b$4;
   b$4=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind(Rpc.obtenerIdInfluyente(inf),function(a)
    {
     return a.$==0?Concurrency.Return("mui-btn--primary"):Concurrency.Return("");
    });
   });
  },MainProgram.influencerV().get_View());
 };
 ListModel=UI.ListModel=Runtime$1.Class({
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
  ObsoleteAll:function()
  {
   Seq.iter(function(ksn)
   {
    Snap.Obsolete(ksn.V);
   },this.it);
   this.it.Clear();
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
 ListModel.New=Runtime$1.Ctor(function(key,storage)
 {
  ListModel.New$3.call(this,key,Var$1.Create$1(Arrays.ofSeq(Seq.distinctBy(key,storage.SInit()))),storage);
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
 LazyRecord.New=function(created,evalOrVal,force)
 {
  return{
   c:created,
   v:evalOrVal,
   f:force
  };
 };
 Seq.sortWith=function(f,s)
 {
  return Seq.delay(function()
  {
   var a;
   a=Arrays.ofSeq(s);
   Arrays.sortInPlaceWith(f,a);
   return a;
  });
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
 Seq.collect=function(f,s)
 {
  return Seq.concat(Seq.map(f,s));
 };
 Seq.min=function(s)
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
     Unchecked.Compare(x,m)===-1?m=x:void 0;
    }
   return m;
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
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
 Seq.sumBy=function(f,s)
 {
  return Seq.fold(function($1,$2)
  {
   return $1+f($2);
  },0,s);
 };
 Seq.length=function(s)
 {
  var i,e;
  i=0;
  e=Enumerator.Get(s);
  try
  {
   while(e.MoveNext())
    i=i+1;
   return i;
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 Seq.zip=function(s1,s2)
 {
  return Seq.map2(function($1,$2)
  {
   return[$1,$2];
  },s1,s2);
 };
 Seq.choose=function(f,s)
 {
  return Seq.collect(function(x)
  {
   var m;
   m=f(x);
   return m==null?T$1.Empty:List.ofArray([m.$0]);
  },s);
 };
 Seq.distinct=function(s)
 {
  return Seq.distinctBy(Global.id,s);
 };
 Seq.sort=function(s)
 {
  return Seq.sortBy(Global.id,s);
 };
 Seq.groupBy=function(f,s)
 {
  return Seq.delay(function()
  {
   return Arrays.groupBy(f,Arrays.ofSeq(s));
  });
 };
 Seq.concat=function(ss)
 {
  return{
   GetEnumerator:function()
   {
    var outerE;
    outerE=Enumerator.Get(ss);
    return new T.New(null,null,function(st)
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
 Seq.seqEmpty=function()
 {
  return Operators.FailWith("The input sequence was empty.");
 };
 Seq.indexed=function(s)
 {
  return Seq.mapi(function($1,$2)
  {
   return[$1,$2];
  },s);
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
 Seq.map2=function(f,s1,s2)
 {
  return{
   GetEnumerator:function()
   {
    var e1,e2;
    e1=Enumerator.Get(s1);
    e2=Enumerator.Get(s2);
    return new T.New(null,null,function(e)
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
 Seq.mapi=function(f,s)
 {
  return Seq.map2(f,Seq.initInfinite(Global.id),s);
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
 Seq.init=function(n,f)
 {
  return Seq.take(n,Seq.initInfinite(f));
 };
 Seq.pairwise=function(s)
 {
  return Seq.map(function(x)
  {
   return[Arrays.get(x,0),Arrays.get(x,1)];
  },Seq.windowed(2,s));
 };
 Seq.forall2=function(p,s1,s2)
 {
  return!Seq.exists2(function($1,$2)
  {
   return!p($1,$2);
  },s1,s2);
 };
 Seq.iteri=function(p,s)
 {
  var i,e;
  i=0;
  e=Enumerator.Get(s);
  try
  {
   while(e.MoveNext())
    {
     p(i,e.Current());
     i=i+1;
    }
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
 };
 Seq.initInfinite=function(f)
 {
  return{
   GetEnumerator:function()
   {
    return new T.New(0,null,function(e)
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
    return new T.New(0,null,function(o)
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
 Seq.skip=function(n,s)
 {
  return{
   GetEnumerator:function()
   {
    var o;
    o=Enumerator.Get(s);
    return new T.New(true,null,function(e)
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
 Seq.windowed=function(windowSize,s)
 {
  windowSize<=0?Operators.FailWith("The input must be positive."):void 0;
  return Seq.delay(function()
  {
   return Seq.enumUsing(Enumerator.Get(s),function(e)
   {
    var q;
    q=[];
    return Seq.append(Seq.enumWhile(function()
    {
     return q.length<windowSize&&e.MoveNext();
    },Seq.delay(function()
    {
     q.push(e.Current());
     return[];
    })),Seq.delay(function()
    {
     return q.length===windowSize?Seq.append([q.slice(0)],Seq.delay(function()
     {
      return Seq.enumWhile(function()
      {
       return e.MoveNext();
      },Seq.delay(function()
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
 Seq.unfold=function(f,s)
 {
  return{
   GetEnumerator:function()
   {
    return new T.New(s,null,function(e)
    {
     var m;
     m=f(e.s);
     return m==null?false:(e.c=m.$0[0],e.s=m.$0[1],true);
    },void 0);
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
 SortWith.op_AmpGreater=function(c1,c2,a,b)
 {
  var m;
  m=c1(a,b);
  return m===0?c2(a,b):m;
 };
 SortWith.asc=function(f,a,b)
 {
  return Unchecked.Compare(f(a),f(b));
 };
 SortWith.desc=function(f,a,b)
 {
  return Unchecked.Compare(f(b),f(a));
 };
 Buscar.New=function(hijosDe,nivelDe,aliado,aliadoO,hijos,descendientes)
 {
  return{
   hijosDe:hijosDe,
   nivelDe:nivelDe,
   aliado:aliado,
   aliadoO:aliadoO,
   hijos:hijos,
   descendientes:descendientes
  };
 };
 FSharpSet=Collections.FSharpSet=Runtime$1.Class({
  Contains:function(v)
  {
   return BalancedTree.Contains(v,this.tree);
  },
  Remove:function(v)
  {
   return new FSharpSet.New$1(BalancedTree.Remove(v,this.tree));
  },
  Add:function(x)
  {
   return new FSharpSet.New$1(BalancedTree.Add(x,this.tree));
  },
  Equals:function(other)
  {
   return this.get_Count()===other.get_Count()&&Seq.forall2(Unchecked.Equals,this,other);
  },
  GetEnumerator$1:function()
  {
   return Enumerator.Get(BalancedTree.Enumerate(false,this.tree));
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
 Set.Filter=function(f,s)
 {
  var data;
  return new FSharpSet.New$1((data=Arrays.ofSeq(Seq.filter(f,s)),BalancedTree.Build(data,0,data.length-1)));
 };
 Strings.PadLeft=function(s,n)
 {
  return Strings.PadLeftWith(s,n," ");
 };
 Strings.concat=function(separator,strings)
 {
  return Arrays.ofSeq(strings).join(separator);
 };
 Strings.PadLeftWith=function(s,n,c)
 {
  return n>s.length?Global.Array(n-s.length+1).join(c)+s:s;
 };
 Strings.Trim=function(s)
 {
  return s.replace(new Global.RegExp("^\\s+"),"").replace(new Global.RegExp("\\s+$"),"");
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
 Strings.SplitChars=function(s,sep,opts)
 {
  return Strings.Split(s,new Global.RegExp("["+Strings.RegexEscape(sep.join(""))+"]"),opts);
 };
 Strings.StartsWith=function(t,s)
 {
  return t.substring(0,s.length)==s;
 };
 Strings.ReplaceOnce=function(string,search,replace)
 {
  return string.replace(search,replace);
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
 Strings.IsNullOrEmpty=function(x)
 {
  return x==null||x=="";
 };
 Strings.SplitWith=function(str,pat)
 {
  return str.split(pat);
 };
 Strings.replicate=function(count,s)
 {
  return Arrays.create(count,s).join("");
 };
 Strings.ReplaceChar=function(s,oldC,newC)
 {
  return Strings.Replace(s,oldC,newC);
 };
 Strings.SplitStrings=function(s,sep,opts)
 {
  return Strings.Split(s,new Global.RegExp(Strings.concat("|",Arrays.map(Strings.RegexEscape,sep))),opts);
 };
 Strings.forall=function(f,s)
 {
  return Seq.forall(f,Strings.protect(s));
 };
 Strings.protect=function(s)
 {
  return s===null?"":s;
 };
 Strings.Join=function(sep,values)
 {
  return values.join(sep);
 };
 CorreoElectronico=TypesV0.CorreoElectronico=Runtime$1.Class({
  toString:function()
  {
   return this.email;
  }
 },null,CorreoElectronico);
 CorreoElectronico.New=function(email,enviado,recibido)
 {
  return new CorreoElectronico({
   email:email,
   enviado:enviado,
   recibido:recibido
  });
 };
 DatosPersonales.formaDoc=function(datosV)
 {
  var forma,b,G,p,i,requeridosW;
  forma=(b=(G=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.generos().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"generos",
   $1:G
  })),(p=Handler.CompleteHoles(b.k,b.h,[["nombres",0],["apellidos",0],["fechanacimiento",0],["genero",0]]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.datospersonales(p[0])),(b.i=i,i))));
  View.Sink(function(a)
  {
   var dat;
   if(a!=null&&a.$==1)
    {
     dat=a.$0;
     forma.Hole("nombres").Set(Strings.Trim(dat.nombre1+" "+dat.nombre2));
     forma.Hole("apellidos").Set(Strings.Trim(dat.apellido1+" "+dat.apellido2));
     forma.Hole("fechanacimiento").Set(Date.toYYYYMMDD("-",dat.fechaNacimiento));
     forma.Hole("genero").Set((function($1)
     {
      return function($2)
      {
       return $1(ProzperServer_GeneratedPrintf.p$14($2));
      };
     }(Global.id))(dat.genero));
    }
  },datosV.get_View());
  requeridosW=View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return function($3)
   {
    return function($4)
    {
     return Seq.map(function(t)
     {
      return t[1];
     },Seq.filter(function(t)
     {
      return t[0];
     },List.ofArray([[Strings.Trim($1)==="","Nombres"],[Strings.Trim($2)==="","Apellidos"],[Strings.Trim($3)==="","Fecha de Nacimiento"],[Strings.Trim($4)==="","Genero"]])));
    };
   };
  },forma.Hole("nombres").get_View(),forma.Hole("apellidos").get_View()),forma.Hole("fechanacimiento").get_View()),forma.Hole("genero").get_View());
  View.Sink(function(v)
  {
   if(!Unchecked.Equals(datosV.Get(),v))
    datosV.Set(v);
  },View.Apply(View.Apply(View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime$1.Curried(function($3,$4,$5,$6,$7)
   {
    return!Seq.isEmpty($1)?null:VariousUI.alertIfNone("Genero",Genero.tryParse($2),function(genero)
    {
     return VariousUI.alertIfNone("Fecha incorrecta",(ParseO.parseDateO2$1())($3),function(fecha)
     {
      return{
       $:1,
       $0:DatosPersonales$1.New(null,Arrays.get(Strings.SplitChars(Strings.Trim($4),[" "],0),0),Strings.concat(" ",Slice.array(Strings.SplitChars(Strings.Trim($5),[" "],0),{
        $:1,
        $0:1
       },null)),Arrays.get(Strings.SplitChars(Strings.Trim($6),[" "],0),0),Strings.concat(" ",Slice.array(Strings.SplitChars(Strings.Trim($7),[" "],0),{
        $:1,
        $0:1
       },null)),new Pais({
        $:3,
        $0:""
       }),genero,fecha)
      };
     });
    });
   },5);
  },requeridosW,forma.Hole("genero").get_View()),forma.Hole("fechanacimiento").get_View()),forma.Hole("nombres").get_View()),forma.Hole("nombres").get_View()),forma.Hole("apellidos").get_View()),forma.Hole("apellidos").get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 CorreoElectronico$1.formaDoc=function(corV)
 {
  var mensaje,forma,b,p,i,m,requeridosW;
  mensaje=Var$1.Create$1("");
  forma=(b=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"mensaje",
   $1:mensaje.get_View()
  }),(p=Handler.CompleteHoles(b.k,b.h,[["correo",0],["confirmarcorreo",0]]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.correo(p[0])),(b.i=i,i))));
  m=corV.Get();
  m!=null&&m.$==1?forma.Hole("confirmarcorreo").Set(Global.String(m.$0)):void 0;
  View.Sink(function(a)
  {
   mensaje.Set(a);
  },View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return function($3)
   {
    return function($4)
    {
     return Strings.Trim($1)===""||Strings.Trim($2)===""||Strings.Trim($3)===Strings.Trim($4)?"":"Correos no son iguales";
    };
   };
  },forma.Hole("correo").get_View(),forma.Hole("confirmarcorreo").get_View()),forma.Hole("correo").get_View()),forma.Hole("confirmarcorreo").get_View()));
  View.Sink(function(a)
  {
   if(a!=null&&a.$==1)
    forma.Hole("correo").Set(a.$0.email);
  },corV.get_View());
  requeridosW=View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return function($3)
   {
    return function($4)
    {
     return Seq.map(function(t)
     {
      return t[1];
     },Seq.filter(function(t)
     {
      return t[0];
     },List.ofArray([[Strings.Trim($1)==="","Correo"],[Strings.Trim($2)==="","ConfirmarCorreo"],[$3!=="",$4]])));
    };
   };
  },forma.Hole("correo").get_View(),forma.Hole("confirmarcorreo").get_View()),mensaje.get_View()),mensaje.get_View());
  View.Sink(function(v)
  {
   if(!Unchecked.Equals(corV.Get(),v))
    corV.Set(v);
  },View.Map2(function($1,$2)
  {
   var o,x,i$1,v;
   return!Seq.isEmpty($1)?null:(o=(x=corV.Get(),(i$1={
    $:1,
    $0:TypesV0.correoVacio()
   },x==null?i$1:x)),o==null?null:{
    $:1,
    $0:(v=o.$0,CorreoElectronico.New($2,v.enviado,v.recibido))
   });
  },requeridosW,forma.Hole("correo").get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 Telefono.formaDoc=function(telOV)
 {
  var forma,b,T$2,p,i,requeridosW;
  forma=(b=(T$2=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.tiposTel().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tipos",
   $1:T$2
  })),(p=Handler.CompleteHoles(b.k,b.h,[["tipotelefono",0],["codigopais",0],["codigoarea",0],["telefono",0],["extension",0]]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.telefono(p[0])),(b.i=i,i))));
  View.Sink(function(a)
  {
   var tel;
   if(a!=null&&a.$==1)
    {
     tel=a.$0;
     forma.Hole("codigoarea").Set(tel.codigoArea);
     forma.Hole("codigopais").Set(tel.codigoPais);
     forma.Hole("telefono").Set(tel.numero);
     forma.Hole("extension").Set(tel.extension);
     forma.Hole("tipotelefono").Set((function($1)
     {
      return function($2)
      {
       return $1(Global.String($2));
      };
     }(Global.id))(tel.tipoTelefono));
    }
  },telOV.get_View());
  requeridosW=View.Apply(View.Map2(function($1,$2)
  {
   return function($3)
   {
    return Seq.map(function(t)
    {
     return t[1];
    },Seq.filter(function(t)
    {
     return t[0];
    },List.ofArray([[Strings.Trim($1)==="","CodigoPais"],[Strings.Trim($2)==="","Telefono"],[Strings.Trim($3)==="","TipoTelefono"]])));
   };
  },forma.Hole("codigopais").get_View(),forma.Hole("telefono").get_View()),forma.Hole("tipotelefono").get_View());
  View.Sink(function(v)
  {
   if(!Unchecked.Equals(telOV.Get(),v))
    telOV.Set(v);
  },View.Apply(View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime$1.Curried(function($3,$4,$5,$6)
   {
    return!Seq.isEmpty($1)?null:VariousUI.alertIfNone("TipoTelefono",(TipoTelefono.get_tryParse())(Strings.Trim($2)),function(tipo)
    {
     var c;
     return{
      $:1,
      $0:(c=Strings.Trim($3),Telefono$1.New(tipo,Strings.Trim($4),c,Strings.Trim($5),Strings.Trim($6),false))
     };
    });
   },4);
  },requeridosW,forma.Hole("tipotelefono").get_View()),forma.Hole("codigoarea").get_View()),forma.Hole("codigopais").get_View()),forma.Hole("telefono").get_View()),forma.Hole("extension").get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 Direccion.formaDoc=function(dirV)
 {
  var forma,b,T$2,E,P,p,i,requeridosW;
  forma=(b=(T$2=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.tiposDir().get_View())),(E=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.estados().get_View())),(P=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.paises().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"paises",
   $1:P
  })).WithHole({
   $:0,
   $0:"estados",
   $1:E
  })).WithHole({
   $:0,
   $0:"tipos",
   $1:T$2
  })),(p=Handler.CompleteHoles(b.k,b.h,[["tipodireccion",0],["direccion1",0],["direccion2",0],["ciudad",0],["estado",0],["codigopostal",0],["pais",0]]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.direccion(p[0])),(b.i=i,i))));
  View.Sink(function(a)
  {
   var dir;
   if(a!=null&&a.$==1)
    {
     dir=a.$0;
     forma.Hole("direccion1").Set(dir.linea1);
     forma.Hole("direccion2").Set(dir.linea2);
     forma.Hole("ciudad").Set(dir.ciudad);
     forma.Hole("estado").Set((function($1)
     {
      return function($2)
      {
       return $1(Global.String($2));
      };
     }(Global.id))(dir.estado));
     forma.Hole("pais").Set((function($1)
     {
      return function($2)
      {
       return $1(Global.String($2));
      };
     }(Global.id))(dir.pais));
     forma.Hole("codigopostal").Set((function($1)
     {
      return function($2)
      {
       return $1(Global.String($2));
      };
     }(Global.id))(dir.zonaPostal));
     forma.Hole("tipodireccion").Set((function($1)
     {
      return function($2)
      {
       return $1(Global.String($2));
      };
     }(Global.id))(dir.tipoDireccion));
    }
  },dirV.get_View());
  requeridosW=View.Apply(View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime$1.Curried(function($3,$4,$5,$6)
   {
    return Seq.map(function(t)
    {
     return t[1];
    },Seq.filter(function(t)
    {
     return t[0];
    },List.ofArray([[Strings.Trim($1)==="","Direccion1"],[Strings.Trim($2)==="","Ciudad"],[Strings.Trim($3)==="","Estado"],[Strings.Trim($4)==="","Pais"],[Strings.Trim($5)==="","CodigoPostal"],[Strings.Trim($6)==="","TipoDireccion"]])));
   },4);
  },forma.Hole("direccion1").get_View(),forma.Hole("ciudad").get_View()),forma.Hole("estado").get_View()),forma.Hole("pais").get_View()),forma.Hole("codigopostal").get_View()),forma.Hole("tipodireccion").get_View());
  View.Sink(function(v)
  {
   if(!Unchecked.Equals(dirV.Get(),v))
    dirV.Set(v);
  },View.Apply(View.Apply(View.Apply(View.Apply(View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime$1.Curried(function($3,$4,$5,$6,$7,$8,$9)
   {
    return!Seq.isEmpty($1)?null:VariousUI.alertIfNone("TipoDireccion",TipoDireccion.tryParse(Strings.Trim($2)),function(tipo)
    {
     return VariousUI.alertIfNone("Estado",Estado.tryParse(Strings.Trim($3)),function(estado)
     {
      return VariousUI.alertIfNone("Pais",Pais.tryParse(Strings.Trim($4)),function(pais)
      {
       return VariousUI.alertIfNone("CodigoPostal",ZonaPostal.tryParse(Strings.Trim($5)),function(codigo)
       {
        var o;
        return{
         $:1,
         $0:Direccion$1.New((o=$9==null?null:{
          $:1,
          $0:$9.$0.authorizeIdR
         },o==null?Library.Error$1(""):o.$0),tipo,Strings.Trim($6),Strings.Trim($7),Strings.Trim($8),estado,pais,codigo)
        };
       });
      });
     });
    });
   },7);
  },requeridosW,forma.Hole("tipodireccion").get_View()),forma.Hole("estado").get_View()),forma.Hole("pais").get_View()),forma.Hole("codigopostal").get_View()),forma.Hole("direccion1").get_View()),forma.Hole("direccion2").get_View()),forma.Hole("ciudad").get_View()),dirV.get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 Monads.asyncResult=function()
 {
  SC$1.$cctor();
  return SC$1.asyncResult;
 };
 AsyncResultBuilder=Monads.AsyncResultBuilder=Runtime$1.Class({
  Run:function(fRA)
  {
   return AsyncResult.bind(fRA,AsyncResult.rtn());
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
  Combine$1:function(vRA,fRA)
  {
   return AsyncResult.bind(fRA,vRA);
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
  },
  Return:function(v)
  {
   return AsyncResult.rtn(v);
  },
  Bind:function(vR,fRA)
  {
   return AsyncResult.bind(fRA,AsyncResult.rtnR(vR));
  },
  Using:function(resource,fRA)
  {
   return Concurrency.Using(resource,fRA);
  },
  While:function(guard,fRA)
  {
   return AsyncResult.whileLoop(guard,fRA);
  },
  ReturnFrom$1:Global.id,
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
  }
 },Obj,AsyncResultBuilder);
 AsyncResultBuilder.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },AsyncResultBuilder);
 Refresh.refrescarData=function(force)
 {
  var m,user,b;
  force?Refresh.set_shouldRefresh(true):void 0;
  m=Msal.userO().Get();
  m!=null&&m.$==1?(user=m.$0,Rpc.iterA((b=Monads.asyncResult(),b.Run(b.Delay(function()
  {
   return b.Combine$1(Msal.referidoPor()!==""?b.Bind$1(Rpc.agregarUsuarioSiEsNuevo(Msal.claims(user)),function()
   {
    return b.Return();
   }):b.Zero(),b.Delay(function()
   {
    return!self.document.hidden?Refresh.shouldRefresh()?b.Bind$1(Rpc.obtenerEstadoParaUsuario(),function(a)
    {
     Refresh.set_shouldRefresh(false);
     return!Unchecked.Equals(ModeloUI.modeloV().Get(),a)?(ModeloUI.modeloV().Set(a),b.Zero()):b.Zero();
    }):b.Zero():b.Zero();
   }));
  }))))):ModeloUI.modeloV().Set(TypesV0.modeloVacio());
 };
 Refresh.set_shouldRefresh=function($1)
 {
  SC$1.$cctor();
  SC$1.shouldRefresh=$1;
 };
 Refresh.shouldRefresh=function()
 {
  SC$1.$cctor();
  return SC$1.shouldRefresh;
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
 Fila.New=function(archivos,nombre,correo,status,influyente,tipo,referido,nivel,referidos,descendientes,comision,diaPago,desde,Id)
 {
  return{
   archivos:archivos,
   nombre:nombre,
   correo:correo,
   status:status,
   influyente:influyente,
   tipo:tipo,
   referido:referido,
   nivel:nivel,
   referidos:referidos,
   descendientes:descendientes,
   comision:comision,
   diaPago:diaPago,
   desde:desde,
   Id:Id
  };
 };
 Arrays.map=function(f,arr)
 {
  var r,i,$1;
  r=new Global.Array(arr.length);
  for(i=0,$1=arr.length-1;i<=$1;i++)r[i]=f(arr[i]);
  return r;
 };
 Arrays.sortBy=function(f,arr)
 {
  return Arrays.map(function(t)
  {
   return t[0];
  },Arrays.mapi(function($1,$2)
  {
   return[$2,[f($2),$1]];
  },arr).sort(function($1,$2)
  {
   return Unchecked.Compare($1[1],$2[1]);
  }));
 };
 Arrays.reduce=function(f,arr)
 {
  var acc,i,$1;
  Arrays.nonEmpty(arr);
  acc=arr[0];
  for(i=1,$1=arr.length-1;i<=$1;i++)acc=f(acc,arr[i]);
  return acc;
 };
 Arrays.filter=function(f,arr)
 {
  var r,i,$1;
  r=[];
  for(i=0,$1=arr.length-1;i<=$1;i++)if(f(arr[i]))
   r.push(arr[i]);
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
 Arrays.sortInPlaceWith=function(comparer,arr)
 {
  arr.sort(comparer);
 };
 Arrays.mapi=function(f,arr)
 {
  var y,i,$1;
  y=new Global.Array(arr.length);
  for(i=0,$1=arr.length-1;i<=$1;i++)y[i]=f(i,arr[i]);
  return y;
 };
 Arrays.nonEmpty=function(arr)
 {
  if(arr.length===0)
   Operators.FailWith("The input array was empty.");
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
 Arrays.map2=function(f,arr1,arr2)
 {
  var r,i,$1;
  Arrays.checkLength(arr1,arr2);
  r=new Global.Array(arr2.length);
  for(i=0,$1=arr2.length-1;i<=$1;i++)r[i]=f(arr1[i],arr2[i]);
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
 Arrays.init=function(size,f)
 {
  var r,i,$1;
  size<0?Operators.FailWith("Negative size given."):null;
  r=new Global.Array(size);
  for(i=0,$1=size-1;i<=$1;i++)r[i]=f(i);
  return r;
 };
 Arrays.find=function(f,arr)
 {
  var m;
  m=Arrays.tryFind(f,arr);
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
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
 Arrays.concat=function(xs)
 {
  return Global.Array.prototype.concat.apply([],Arrays.ofSeq(xs));
 };
 Arrays.checkLength=function(arr1,arr2)
 {
  if(arr1.length!==arr2.length)
   Operators.FailWith("The arrays have different lengths.");
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
 Arrays.pick=function(f,arr)
 {
  var m;
  m=Arrays.tryPick(f,arr);
  return m==null?Operators.FailWith("KeyNotFoundException"):m.$0;
 };
 Arrays.create=function(size,value)
 {
  var r,i,$1;
  r=new Global.Array(size);
  for(i=0,$1=size-1;i<=$1;i++)r[i]=value;
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
 Arrays.iter=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)f(arr[i]);
 };
 VariousUI.statuses=function()
 {
  SC$1.$cctor();
  return SC$1.statuses;
 };
 VariousUI.crearOptions=function(ns)
 {
  return Doc.Concat(Seq.map(VariousUI.crearOption,ns));
 };
 VariousUI.crearOptions2=function(nvs)
 {
  return Doc.Concat(Seq.map(function($1)
  {
   return VariousUI.crearOption2($1[0],$1[1]);
  },nvs));
 };
 VariousUI.statusAr=function()
 {
  SC$1.$cctor();
  return SC$1.statusAr;
 };
 VariousUI.tiposAr=function()
 {
  SC$1.$cctor();
  return SC$1.tiposAr;
 };
 VariousUI.paises=function()
 {
  SC$1.$cctor();
  return SC$1.paises;
 };
 VariousUI.estados=function()
 {
  SC$1.$cctor();
  return SC$1.estados;
 };
 VariousUI.tiposDir=function()
 {
  SC$1.$cctor();
  return SC$1.tiposDir;
 };
 VariousUI.tiposTel=function()
 {
  SC$1.$cctor();
  return SC$1.tiposTel;
 };
 VariousUI.generos=function()
 {
  SC$1.$cctor();
  return SC$1.generos;
 };
 VariousUI.tiposCta=function()
 {
  SC$1.$cctor();
  return SC$1.tiposCta;
 };
 VariousUI.tiposTar=function()
 {
  SC$1.$cctor();
  return SC$1.tiposTar;
 };
 VariousUI.aniosV=function()
 {
  SC$1.$cctor();
  return SC$1.aniosV;
 };
 VariousUI.mesesV=function()
 {
  SC$1.$cctor();
  return SC$1.mesesV;
 };
 VariousUI.alertIfNone=function(name,vO,f)
 {
  return vO!=null&&vO.$==1?f(vO.$0):(Global.alert("Error not caught: "+name),null);
 };
 VariousUI.removeButton=function(f,doc)
 {
  return Doc.Element("form",[AttrProxy.Create("class","mui-panel")],[doc,Doc.Button("borrar",[AttrProxy.Create("title","borrar")],f)]);
 };
 VariousUI.fst3=Global.id;
 VariousUI.crearOption=function(n)
 {
  return Doc.Element("option",[],[Doc.TextNode(n)]);
 };
 VariousUI.crearOption2=function(n,v)
 {
  return Doc.Element("option",[AttrProxy.Create("value",v)],[Doc.TextNode(n)]);
 };
 VariousUI.thr3=function(a,a$1,v)
 {
  return v;
 };
 VariousUI.snd3=function(a,v,a$1)
 {
  return v;
 };
 attr=HtmlModule.attr=Runtime$1.Class({},Obj,attr);
 StatusAliado=TypesV0.StatusAliado=Runtime$1.Class({
  toString:function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$1($2));
    };
   }(Global.id))(this);
  }
 },null,StatusAliado);
 StatusAliado.tryParse=function(s)
 {
  var m;
  m=Strings.Trim(s).toUpperCase();
  return m==="CUENTACREADA"?StatusAliado.CuentaCreada:m==="ACTIVO"?StatusAliado.Activo:m==="CANCELADO"?StatusAliado.Cancelado:StatusAliado.Inactivo;
 };
 StatusAliado.Inactivo=new StatusAliado({
  $:2
 });
 StatusAliado.CuentaCreada=new StatusAliado({
  $:0
 });
 StatusAliado.Activo=new StatusAliado({
  $:1
 });
 StatusAliado.Cancelado=new StatusAliado({
  $:3
 });
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
  return"["+Strings.concat("; ",Seq.map(p,o))+"]";
 };
 Library["String.Right$1"]=function(_this,n)
 {
  var a,b;
  return Library["String.Substring2$1"](_this,(a=0,(b=_this.length-n,Unchecked.Compare(a,b)===1?a:b)),_this.length);
 };
 Library.Error$1=function(a)
 {
  return{
   $:1,
   $0:a
  };
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
 Library["String.get_toUnderscore$1"]=function(_this,u)
 {
  return Arrays.ofSeq(Seq.collect(Global.id,Seq.mapi(function(i,c)
  {
   return i>0&&Char.IsUpper(c)?List.ofArray(["_",c]):List.ofArray([c]);
  },_this))).join("");
 };
 Date.toYYYYMMDD=function(sep,date)
 {
  return((((((Runtime$1.Curried(function($1,$2,$3,$4,$5,$6)
  {
   return $1(Global.String($2)+Utils.toSafe($3)+Utils.padNumLeft(Global.String($4),2)+Utils.toSafe($5)+Utils.padNumLeft(Global.String($6),2));
  },6))(Global.id))((new Date$1(date)).getFullYear()))(sep))((new Date$1(date)).getMonth()+1))(sep))((new Date$1(date)).getDate());
 };
 Date.toYYYYMMDDHHMM=function(sep,date)
 {
  return(((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1(Utils.toSafe($2)+" "+Utils.toSafe($3));
  }))(Global.id))(Date.toYYYYMMDD(sep,date)))(Date.toHHMM(date));
 };
 Date.toHHMM=function(date)
 {
  return(((Runtime$1.Curried3(function($1,$2,$3)
  {
   return $1(Utils.padNumLeft(Global.String($2),2)+":"+Utils.padNumLeft(Global.String($3),2));
  }))(Global.id))((new Date$1(date)).getHours()))((new Date$1(date)).getMinutes());
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
 List.rev=function(l)
 {
  var res,r;
  res=T$1.Empty;
  r=l;
  while(r.$==1)
   {
    res=new T$1({
     $:1,
     $0:r.$0,
     $1:res
    });
    r=r.$1;
   }
  return res;
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
 List.iter=function(f,l)
 {
  var r;
  r=l;
  while(r.$==1)
   {
    f(List.head(r));
    r=List.tail(r);
   }
 };
 CuentaBancaria.New=function(titular,banco,tipo,numero,routing)
 {
  return{
   titular:titular,
   banco:banco,
   tipo:tipo,
   numero:numero,
   routing:routing
  };
 };
 RoutingNumber=TypesV0.RoutingNumber=Runtime$1.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,RoutingNumber);
 NumeroCuenta=TypesV0.NumeroCuenta=Runtime$1.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,NumeroCuenta);
 FormaPago.New=function(nombre,authorizeIdR,cuentaPago)
 {
  return{
   nombre:nombre,
   authorizeIdR:authorizeIdR,
   cuentaPago:cuentaPago
  };
 };
 TypesV0.ctaVacio=function()
 {
  SC$1.$cctor();
  return SC$1.ctaVacio;
 };
 TypesV0.premisasCalculo=function()
 {
  SC$1.$cctor();
  return SC$1.premisasCalculo;
 };
 TypesV0.correoVacio=function()
 {
  SC$1.$cctor();
  return SC$1.correoVacio;
 };
 TypesV0.modeloVacio=function()
 {
  SC$1.$cctor();
  return SC$1.modeloVacio;
 };
 TypesV0.telVacio=function()
 {
  SC$1.$cctor();
  return SC$1.telVacio;
 };
 TypesV0.dirVacio=function()
 {
  SC$1.$cctor();
  return SC$1.dirVacio;
 };
 TypesV0.tarVacio=function()
 {
  SC$1.$cctor();
  return SC$1.tarVacio;
 };
 Result.defaultValue=function(d,r)
 {
  return r.$==1?d:r.$0;
 };
 Result.result=function()
 {
  SC$1.$cctor();
  return SC$1.result;
 };
 Result.iter=function(fE,f,r)
 {
  Result.defaultWith(fE,Result$1.Map(f,r));
 };
 Result.defaultWith=function(f,r)
 {
  return r.$==1?f(r.$0):r.$0;
 };
 ListModel.Create=function(key,init)
 {
  return ListModel.CreateWithStorage(key,Storage.InMemory(Arrays.ofSeq(init)));
 };
 ListModel.CreateWithStorage=function(key,storage)
 {
  return new ListModel.New(key,storage);
 };
 Archivo.New=function(idAliado,tipo,nombre,modificado,tamano,status,comentario)
 {
  return{
   idAliado:idAliado,
   tipo:tipo,
   nombre:nombre,
   modificado:modificado,
   tamano:tamano,
   status:status,
   comentario:comentario
  };
 };
 Extensions["AsyncResultBuilder.Bind"]=function(__,vA,fRA)
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
  return AsyncResult.bind(fRA,Concurrency.Bind(vA,function(x)
  {
   return g(f(x));
  }));
 };
 ListModel$1.docLensMapView=function(mapView,f,m)
 {
  function get(k,v)
  {
   return f(k,ListModel$1["lensInto'"](m,Global.id,function()
   {
    return Global.id;
   },k,v));
  }
  return Doc.ConvertSeqBy(m.key,function($1)
  {
   return function($2)
   {
    return get($1,$2);
   };
  },View.Map(mapView,m.v));
 };
 ListModel$1["lensInto'"]=function(m,get,update,key,view)
 {
  var id,$1;
  id=Var$2.freshId();
  $1=new Var({
   Get:function()
   {
    return get(m.FindByKey(key));
   },
   Set:function(v)
   {
    return m.UpdateBy(function(i)
    {
     return{
      $:1,
      $0:(update(i))(v)
     };
    },key);
   },
   Update:function(f)
   {
    return m.UpdateBy(function(i)
    {
     var x;
     return{
      $:1,
      $0:(x=f(get(i)),(update(i))(x))
     };
    },key);
   },
   UpdateMaybe:function(f)
   {
    return m.UpdateBy(function(i)
    {
     var x,m$1;
     x=f(get(i));
     m$1=update(i);
     return x==null?null:{
      $:1,
      $0:m$1(x.$0)
     };
    },key);
   },
   SetFinal:function(v)
   {
    return this.Set(v);
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
    },Operators.range(0,((v.length-s)/3>>0)-1));
   }));
  })));
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
 TipoArchivo=TypesV0.TipoArchivo=Runtime$1.Class({
  toString:function()
  {
   return this.$==7?this.$0:(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$5($2));
    };
   }(Global.id))(this);
  }
 },null,TipoArchivo);
 TipoArchivo.Parse=function(s)
 {
  var a;
  a=String.StartsWith$1("Otro ",s);
  return a!=null&&a.$==1?new TipoArchivo({
   $:7,
   $0:a.$0
  }):s==="Contrato"?TipoArchivo.Contrato:s==="FormaW9"?TipoArchivo.FormaW9:s==="FormaW8BEN"?TipoArchivo.FormaW8BEN:s==="Autorizacion"?TipoArchivo.Autorizacion:s==="Pasaporte"?TipoArchivo.Pasaporte:s==="Cedula"?TipoArchivo.Cedula:s==="LicenciaConducir"?TipoArchivo.LicenciaConducir:new TipoArchivo({
   $:7,
   $0:Strings.Trim(s)
  });
 };
 TipoArchivo.Autorizacion=new TipoArchivo({
  $:1
 });
 TipoArchivo.Contrato=new TipoArchivo({
  $:0
 });
 TipoArchivo.FormaW9=new TipoArchivo({
  $:5
 });
 TipoArchivo.FormaW8BEN=new TipoArchivo({
  $:6
 });
 TipoArchivo.Pasaporte=new TipoArchivo({
  $:2
 });
 TipoArchivo.Cedula=new TipoArchivo({
  $:3
 });
 TipoArchivo.LicenciaConducir=new TipoArchivo({
  $:4
 });
 StatusArchivo=TypesV0.StatusArchivo=Runtime$1.Class({
  toString:function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$6($2));
    };
   }(Global.id))(this);
  }
 },null,StatusArchivo);
 StatusArchivo.Parse=function(s)
 {
  var a,a$1;
  return s==="Cambiado"?StatusArchivo.Cambiado:s==="Expirado"?StatusArchivo.Expirado:s==="Cancelado"?StatusArchivo.Cancelado:(a=String.StartsWith$1("Verificado ",s),a!=null&&a.$==1?new StatusArchivo({
   $:1,
   $0:a.$0
  }):(a$1=String.StartsWith$1("Rechazado ",s),a$1!=null&&a$1.$==1?new StatusArchivo({
   $:2,
   $0:a$1.$0
  }):StatusArchivo.Subido));
 };
 StatusArchivo.Cambiado=new StatusArchivo({
  $:5
 });
 StatusArchivo.Expirado=new StatusArchivo({
  $:3
 });
 StatusArchivo.Cancelado=new StatusArchivo({
  $:4
 });
 StatusArchivo.Subido=new StatusArchivo({
  $:0
 });
 View=UI.View=Runtime$1.Class({
  get_V:function()
  {
   return Operators.FailWith("View<'T>.V can only be called in an argument to a V-enabled function or if 'T = Doc.");
  }
 },null,View);
 FormaFirma.formaFirma=function(nombre,contenido,tipo,procesar,filenamePre)
 {
  var acepto,forma,b,I,t,p,i;
  function firmarDocumento()
  {
   var b$1;
   Rpc.iterA((b$1=Monads.asyncResult(),b$1.Run(b$1.Delay(function()
   {
    return FormaFirma.mensajes().Get()!==""?(Global.alert(FormaFirma.mensajes().Get()),b$1.Zero()):b$1.Bind$1(FormaFirma.subirScreenShot(tipo,filenamePre),function()
    {
     return b$1.ReturnFrom$1(AsyncResult.map(function(a)
     {
      Global.alert(a);
     },procesar()));
    });
   }))));
  }
  acepto=Var$1.Create$1(false);
  forma=(b=(I=Aliado.get_LoggedId().get_Id(),(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"firmarclass",
   $1:View.Map(function($1)
   {
    return $1===""?"mui-btn--primary":"";
   },FormaFirma.mensajes().get_View())
  }).WithHole({
   $:2,
   $0:"mensaje",
   $1:FormaFirma.mensajes().get_View()
  }).WithHole({
   $:0,
   $0:"contenido",
   $1:contenido
  }).WithHole({
   $:9,
   $0:"acepto",
   $1:Var$1.Lens(acepto,Global.id,function($1,$2)
   {
    return $2;
   })
  }),t.WithHole(Handler.EventQ2(t.k,"firmar",function()
  {
   return t.i;
  },function()
  {
   firmarDocumento();
  }))).WithHole({
   $:2,
   $0:"datetime",
   $1:FormaFirma.fechaHoraV().get_View()
  }).WithHole({
   $:1,
   $0:"idloggedin",
   $1:I
  })).WithHole({
   $:2,
   $0:"location",
   $1:View.Map(function($1)
   {
    return(function($2)
    {
     return function($3)
     {
      return $2(Utils.prettyPrint($3));
     };
    }(Global.id))($1);
   },FormaFirma.locationV().get_View())
  }),(p=Handler.CompleteHoles(b.k,b.h,[["firmante",0],["fecha",0],["acepto",2]]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.formafirma(p[0])),(b.i=i,i))));
  View.Sink(function(a)
  {
   FormaFirma.mensajes().Set(a);
  },View.Apply(View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime$1.Curried(function($3,$4,$5,$6)
   {
    return Strings.concat(", ",Seq.map(function(t$1)
    {
     return t$1[1];
    },Seq.filter(function(t$1)
    {
     return t$1[0];
    },List.ofArray([[Strings.Trim($1)!==$2.toUpperCase(),"Nombre en MAYUSCULAS debe coincidir"],[$3!==Library["String.Left$1"]($4,10),"Introduzca fecha de hoy (YYYY-MM-DD)"],[!Unchecked.Equals($5,true),"Acepte los terminos indicados"],[!Unchecked.Equals(Aliado.get_LoggedId(),$6.id),"El documento solo debe ser firmado por el titular de la cuenta"]]))));
   },4);
  },forma.Hole("firmante").get_View(),nombre),forma.Hole("fecha").get_View()),FormaFirma.fechaHoraV().get_View()),forma.Hole("acepto").get_View()),ModeloUI.aliadoW()));
  return forma.get_Doc();
 };
 FormaFirma.fechaHoraV=function()
 {
  SC$1.$cctor();
  return SC$1.fechaHoraV;
 };
 FormaFirma.locationV=function()
 {
  SC$1.$cctor();
  return SC$1.locationV;
 };
 FormaFirma.mensajes=function()
 {
  SC$1.$cctor();
  return SC$1.mensajes;
 };
 FormaFirma.subirScreenShot=function(tipo,filenamePre)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.FromContinuations(function(cnt)
   {
    $.getJSON("https://ipapi.co/json/",function($1)
    {
     cnt($1);
    });
   }),function(a)
   {
    FormaFirma.locationV().Set(a);
    return Concurrency.Bind(Concurrency.Sleep(100),function()
    {
     return Concurrency.Bind(Promise.AsAsync(Global.html2canvas(self.document.querySelector("#content-wrapper"))),function(a$1)
     {
      var filename;
      self.document.body.appendChild(a$1);
      filename=(((Runtime$1.Curried3(function($1,$2,$3)
      {
       return $1(Utils.toSafe($2)+" "+Utils.toSafe($3)+".png");
      }))(Global.id))(filenamePre))(Strings.Replace(FormaFirma.fechaHoraV().Get(),":","."));
      a$1.toBlob(function(blob)
      {
       var fd,r;
       fd=new Global.FormData();
       fd.append("fname",filename);
       fd.append("data",blob);
       $.ajax((r={},r.type="POST",r.url="/api/subir/"+ModeloUI.modeloV().Get().idAliado.get_Id()+"/"+filename,r.data=fd,r.contentType=false,r.processData=false,r.success=FormaFirma.uploaded(),r));
      });
      self.document.body.removeChild(a$1);
      return Concurrency.Bind(Rpc.ejecutarDataEventoNuevo({
       $:9,
       $0:[Aliado.get_LoggedId(),[Archivo.New(ModeloUI.modeloV().Get().idAliado,tipo,filename,Date$1.now(),0,StatusArchivo.Subido,"Firma Electronica")]]
      }),function(a$2)
      {
       Refresh.refrescarData(true);
       return Concurrency.Return(a$2);
      });
     });
    });
   });
  });
 };
 FormaFirma.uploaded=function()
 {
  SC$1.$cctor();
  return SC$1.uploaded;
 };
 PremisasCalculo.New=function(comisionReferidosRegular,comisionReferidosMaster,comisionDescendientesMaster,comisionDescendientesRegular,montoAfiliacion,numeroReferidosMaster,diaCorte1,diaCorte2)
 {
  return{
   comisionReferidosRegular:comisionReferidosRegular,
   comisionReferidosMaster:comisionReferidosMaster,
   comisionDescendientesMaster:comisionDescendientesMaster,
   comisionDescendientesRegular:comisionDescendientesRegular,
   montoAfiliacion:montoAfiliacion,
   numeroReferidosMaster:numeroReferidosMaster,
   diaCorte1:diaCorte1,
   diaCorte2:diaCorte2
  };
 };
 Rpc$1.serverEndPoint=function()
 {
  SC$1.$cctor();
  return SC$1.serverEndPoint;
 };
 AjaxRemotingProvider=Remoting.AjaxRemotingProvider=Runtime$1.Class({
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
 AjaxRemotingProvider.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },AjaxRemotingProvider);
 PlugInAction.New=function(actName,actFunction,actEnabled)
 {
  return{
   actName:actName,
   actFunction:actFunction,
   actEnabled:actEnabled
  };
 };
 Msal.logout=function()
 {
  Msal.executePolicy(true,Policy.SignIn);
 };
 Msal.userO=function()
 {
  SC$1.$cctor();
  return SC$1.userO;
 };
 Msal.storeValue=function(name,v)
 {
  self.localStorage.setItem(name,v);
  return v;
 };
 Msal.appId=function()
 {
  SC$1.$cctor();
  return SC$1.appId;
 };
 Msal.storageGetItem=function(name)
 {
  return self.localStorage.getItem(name);
 };
 Msal.getAuthority=function(tenantName,policyName)
 {
  return((((Runtime$1.Curried(function($1,$2,$3,$4)
  {
   return $1("https://"+Utils.toSafe($2)+".b2clogin.com/tfp/"+Utils.toSafe($3)+".onmicrosoft.com/"+Utils.toSafe($4));
  },4))(Global.id))(tenantName))(tenantName))(policyName);
 };
 Msal.tenantName=function()
 {
  SC$1.$cctor();
  return SC$1.tenantName;
 };
 Msal.signInPolicy=function()
 {
  SC$1.$cctor();
  return SC$1.signInPolicy;
 };
 Msal.applicationId=function()
 {
  SC$1.$cctor();
  return SC$1.applicationId;
 };
 Msal.authority=function()
 {
  SC$1.$cctor();
  return SC$1.authority;
 };
 Msal.redirectCallback=function(error,resp)
 {
  try
  {
   !Unchecked.Equals(error,null)?(function($1)
   {
    return function($2)
    {
     return $1("error: "+GeneratedPrintf.p($2));
    };
   }(function(s)
   {
    console.log(s);
   }))(error):void 0;
   !Unchecked.Equals(resp,null)?(function($1)
   {
    return function($2)
    {
     return $1("resp : "+GeneratedPrintf.p$1($2));
    };
   }(function(s)
   {
    console.log(s);
   }))(resp):null;
  }
  catch(e)
  {
   (((Runtime$1.Curried3(function($1,$2,$3)
   {
    return $1(Utils.prettyPrint($2)+" "+Utils.toSafe($3));
   }))(function(s)
   {
    console.log(s);
   }))(e))(e.stack);
  }
 };
 Msal.getTokenO0=function()
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Msal.userO().Get()==null?Concurrency.Return(null):Concurrency.TryWith(Concurrency.Delay(function()
   {
    return Concurrency.Bind(Promise.AsAsync(Msal.agent().f().acquireTokenSilent(Msal.authParms())),function(a)
    {
     return Concurrency.Return({
      $:1,
      $0:a.accessToken
     });
    });
   }),function()
   {
    return Concurrency.Bind(Promise.AsAsync(Msal.agent().f().acquireTokenPopup(Msal.authParms())),function(a)
    {
     return Concurrency.Return({
      $:1,
      $0:a.accessToken
     });
    });
   });
  });
 };
 Msal.checkUser=function()
 {
  var b;
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(100),function()
   {
    return Concurrency.While(function()
    {
     return true;
    },Concurrency.Delay(function()
    {
     var newO,m;
     newO=(m=Msal.agent().f().getAccount(),Unchecked.Equals(m,null)?null:{
      $:1,
      $0:m
     });
     return Concurrency.Combine(Msal.getId(newO)!==Msal.getId(Msal.userO().Get())?(Msal.userO().Set(newO),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
     {
      return Concurrency.Combine(Unchecked.Equals(Msal.userO().Get(),null)?(Msal.executePolicy(false,Policy.SignIn),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
      {
       return Concurrency.Bind(Concurrency.Sleep(9000),function()
       {
        return Concurrency.Return(null);
       });
      }));
     }));
    }));
   });
  })),null);
 };
 Msal.getTokenO=function()
 {
  SC$1.$cctor();
  return SC$1.getTokenO;
 };
 Msal.referidoPor=function()
 {
  return Msal.storageGetItem("referidoPor");
 };
 Msal.claims=function(user)
 {
  var r;
  r=[["oid",user.idToken.oid],["city",user.idToken.city],["country",user.idToken.country],["extension_DateOfBirth",user.idToken.extension_DateOfBirth],["given_name",user.idToken.given_name],["postalCode",user.idToken.postalCode],["state",user.idToken.state],["streetAddress",user.idToken.streetAddress],["family_name",user.idToken.family_name],["emails",Arrays.get(user.idToken.emails,0)],["referidoPor",Msal.referidoPor()]];
  Msal.storageSetItem("referidoPor","");
  return r;
 };
 Msal.executePolicy=function(force,policy)
 {
  Msal.storeValue("forceLogin",force?"1":"0");
  Msal.storeValue("goInsideLink",self.location.href);
  Msal.storeValue("policyType",Global.String(policy));
  self.location.replace("blob/Msal.html");
 };
 Msal.authParms=function()
 {
  return AuthenticationParameters.New$1(null,null,null,null,null,null,null,null,{
   $:1,
   $0:[(((Runtime$1.Curried3(function($1,$2,$3)
   {
    return $1("https://"+Utils.toSafe($2)+".onmicrosoft.com/"+Utils.toSafe($3)+"/user_impersonation");
   }))(Global.id))(Msal.tenantName()))(Msal.appId())]
  },null,null);
 };
 Msal.agent=function()
 {
  SC$1.$cctor();
  return SC$1.agent;
 };
 Msal.getId=function(userO)
 {
  var o;
  o=userO==null?null:{
   $:1,
   $0:userO.$0.idToken.oid
  };
  return o==null?"":o.$0;
 };
 Msal.storageSetItem=function(name,v)
 {
  self.localStorage.setItem(name,v);
 };
 LayoutEngine.New=function(lytName,lytDefinition)
 {
  return{
   lytName:lytName,
   lytDefinition:lytDefinition
  };
 };
 SC$2.$cctor=function()
 {
  var f,g,x,p,cache,getOrAdd,p$1,cache$1,getOrAdd$1,p$2,cache$2,getOrAdd$2,p$3,cache$3,getOrAdd$3,p$4,cache$4,getOrAdd$4,p$5,cache$5,getOrAdd$5,p$6,cache$6,getOrAdd$6,p$7,cache$7,getOrAdd$7,p$8,cache$8,getOrAdd$8,o,plg;
  SC$2.$cctor=Global.ignore;
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
   var a$1,b;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$1=0,(b=Arrays.length(s)-2,Unchecked.Compare(a$1,b)===1?a$1:b))
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
  function a(a$1)
  {
   var f$3;
   function b(a$2)
   {
    return AppFramework.plugIns().TryFindByKey(a$2);
   }
   function g$4(o$1)
   {
    var v;
    v=AppFramework.defaultPlugIn();
    return o$1==null?v:o$1.$0;
   }
   f$3=function(o$1)
   {
    return o$1==null?null:b(o$1.$0);
   };
   return function(x$1)
   {
    return g$4(f$3(x$1));
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
  function getOrAdd$9(p$9,f$3)
  {
   var o$1;
   o$1=checkO(p$9);
   return o$1==null?store(p$9,f$3(p$9)):o$1.$0;
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
  function getOrAdd$10(p$9,f$3)
  {
   var o$1;
   o$1=checkO$1(p$9);
   return o$1==null?store$1(p$9,f$3(p$9)):o$1.$0;
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
  function getOrAdd$11(p$9,f$3)
  {
   var o$1;
   o$1=checkO$2(p$9);
   return o$1==null?store$2(p$9,f$3(p$9)):o$1.$0;
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
  function getOrAdd$12(p$9,f$3)
  {
   var o$1;
   o$1=checkO$3(p$9);
   return o$1==null?store$3(p$9,f$3(p$9)):o$1.$0;
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
  function getOrAdd$13(p$9,f$3)
  {
   var o$1;
   o$1=checkO$4(p$9);
   return o$1==null?store$4(p$9,f$3(p$9)):o$1.$0;
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
  function getOrAdd$14(p$9,f$3)
  {
   var o$1;
   o$1=checkO$5(p$9);
   return o$1==null?store$5(p$9,f$3(p$9)):o$1.$0;
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
  function getOrAdd$15(p$9,f$3)
  {
   var o$1;
   o$1=checkO$6(p$9);
   return o$1==null?store$6(p$9,f$3(p$9)):o$1.$0;
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
  function getOrAdd$16(p$9,f$3)
  {
   var o$1;
   o$1=checkO$7(p$9);
   return o$1==null?store$7(p$9,f$3(p$9)):o$1.$0;
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
  function getOrAdd$17(p$9,f$3)
  {
   var o$1;
   o$1=checkO$8(p$9);
   return o$1==null?store$8(p$9,f$3(p$9)):o$1.$0;
  }
  SC$2.unindentStr=function(x$1)
  {
   return g$1(String.unindent(x$1));
  };
  SC$2.skipLastLine=(f=function(x$1)
  {
   return g$2(f$1(x$1));
  },function(x$1)
  {
   return g$3(f(x$1));
  });
  SC$2.parseDateO2=(g=ParseO.tryParseWith(function(a$1)
  {
   var o$1,m;
   o$1=0;
   return[(m=DateUtil.TryParse(a$1),m!=null&&m.$==1&&(o$1=m.$0,true)),o$1];
  }),function(x$1)
  {
   return g(f$2(x$1));
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
  SC$2.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  SC$2.rexEmail="(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*";
  SC$2.observers=T$1.Empty;
  SC$2.css="\r\n                .tab-panel {\r\n                 overflow  : hidden   ;\r\n                 display   : flex     ;\r\n                 flex-flow : column   ;\r\n                 background: lightgray;\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                }\r\n                .tab-content {\r\n                 flex      : 1 1     ;\r\n                 overflow  : auto    ;\r\n                 position  : relative;\r\n                }\r\n                .tab-children {\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                 position  : absolute;\r\n                 display   : grid    ;\r\n                }\r\n                .tab-strip {\r\n                 padding   : 0pt     ;\r\n                 flex      : 0 0     ;\r\n                }\r\n                .tab {\r\n                 border     : 0.2pt solid transparent;\r\n                 padding    : 0pt 4pt;\r\n                 display    : inline-block;\r\n                 font-family: sans-serif;\r\n                 font-weight: 200;\r\n                 font-size  : small;\r\n                 color      : #666;\r\n                 cursor     : pointer;\r\n                }\r\n                .top>.tab {\r\n                 border-radius: 2pt 2pt 0pt 0pt;\r\n                 border-bottom-width: 0pt;\r\n                 vertical-align: bottom;\r\n                }\r\n                .bottom>.tab {\r\n                 border-top-width: 0pt;\r\n                 border-radius: 0pt 0pt 2pt 2pt;\r\n                 vertical-align: top;\r\n                }\r\n                .horizontal>.tab:not(:first-child) {\r\n                 border-left-width: 0pt;\r\n                }\r\n                .tab.hovering {\r\n                 background: red;\r\n                }\r\n                .tab.selected {\r\n                 background: white;\r\n                 border-left-width: 0.2pt;\r\n                 color: black;\r\n                 font-weight: 500;\r\n                 border-color: black;\r\n                }\r\n                .horizontal>.tab.selected {\r\n                 border-left-width: 0.2pt;\r\n                }\r\n                ::slotted(*              ) { \r\n                 width : 100%;\r\n                 height: 100%;\r\n                }\r\n                        ";
  SC$2.init=Lazy.Create(function()
  {
   var o$1;
   o$1=new WcTabStripT.New();
   WebComponent.defineWebComponent("wcomp-tabstrip",WcTabStripT.Constructor,self.FsRoot.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New);
  });
  SC$2.layoutHorizontal=Runtime$1.Curried(function($1,$2,$3,$4,$5)
  {
   return Doc.get_Empty();
  },5);
  SC$2.layoutVertical=Runtime$1.Curried(function($1,$2,$3,$4,$5)
  {
   return Doc.get_Empty();
  },5);
  SC$2.plugIns=new ListModel.New$1(function(plg$1)
  {
   return plg$1.plgName;
  });
  SC$2.mainDocV=Var$1.Create$1("AppFramework.AppFwkClient");
  SC$2.TemplateFileName="..\\website\\AppFramework.html";
  SC$2.defaultPlugIn=PlugIn.New("",[],[],[],[],[]);
  SC$2.selectionPlugInO=Var$1.Create$1({
   $:1,
   $0:"AppFramework"
  });
  SC$2.currentPlugInW=(x=AppFramework.selectionPlugInO().get_View(),View.Map2(function($1,$2)
  {
   return(a($1))($2);
  },AppFramework.plugIns().v,x));
  SC$2.currentPlugInV=new FromView.New(AppFramework.currentPlugInW(),function(a$1)
  {
   AppFramework.plugIns().Append(a$1);
  });
  SC$2.AppFwkClient=Lazy.Create(function()
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
  SC$2.actHello=AppFramework.newAct("Hello",function()
  {
   self.alert("Hello!");
  });
  SC$2.qryDocs=AppFramework.newQry("getDocNames",function()
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
  SC$2.getMainDoc=Lazy.Create(function()
  {
   WcSplitter.init(Runtime$1.Curried(AppFramework.horizontal,5),Runtime$1.Curried(AppFramework.vertical,5));
   WcTabStrip.init().f();
   return AppFramework.mainDoc();
  });
  SC$2.splitName=AppFramework.splitName;
  SC$2.createSplitterM=(p=(cache=new Dictionary.New$5(),[[checkO,function($1)
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
  SC$2.createButtonM=(p$1=(cache$1=new Dictionary.New$5(),[[checkO$1,function($1)
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
  SC$2.createInputM=(p$2=(cache$2=new Dictionary.New$5(),[[checkO$2,function($1)
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
  SC$2.createTextAreaM=(p$3=(cache$3=new Dictionary.New$5(),[[checkO$3,function($1)
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
  SC$2.createElementM=(p$4=(cache$4=new Dictionary.New$5(),[[checkO$4,function($1)
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
  SC$2.createDocM=(p$5=(cache$5=new Dictionary.New$5(),[[checkO$5,function($1)
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
  SC$2.createTemplateM=(p$6=(cache$6=new Dictionary.New$5(),[[checkO$6,function($1)
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
  SC$2.createConcatM=(p$7=(cache$7=new Dictionary.New$5(),[[checkO$7,function($1)
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
  SC$2.createVarM=(p$8=(cache$8=new Dictionary.New$5(),[[checkO$8,function($1)
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
 IdForAuthorize=TypesV0.IdForAuthorize=Runtime$1.Class({},null,IdForAuthorize);
 DatosPersonales$1.New=function(titulo,nombre1,nombre2,apellido1,apellido2,nacionalidad,genero,fechaNacimiento)
 {
  return{
   titulo:titulo,
   nombre1:nombre1,
   nombre2:nombre2,
   apellido1:apellido1,
   apellido2:apellido2,
   nacionalidad:nacionalidad,
   genero:genero,
   fechaNacimiento:fechaNacimiento
  };
 };
 DiaPago.Dia01={
  $:0
 };
 TipoAliado=TypesV0.TipoAliado=Runtime$1.Class({
  toString:function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$2($2));
    };
   }(Global.id))(this);
  }
 },null,TipoAliado);
 TipoAliado.Regular=new TipoAliado({
  $:1
 });
 Numeric.TryParseInt32=function(s,r)
 {
  return Numeric.TryParse(s,-2147483648,2147483647,r);
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
  get_Item:function(k)
  {
   return this.get(k);
  },
  Clear:function()
  {
   this.data=[];
   this.count=0;
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
  Add:function(k,v)
  {
   this.add(k,v);
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
 Client.Box=Global.id;
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
 Numeric.TryParseInt64=function(s,r)
 {
  return Numeric.TryParse(s,-9223372036854775808,9223372036854775807,r);
 };
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
 Builder=Result.Builder=Runtime$1.Class({},Obj,Builder);
 Builder.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },Builder);
 BuilderP=Result.BuilderP=Runtime$1.Class({},Obj,BuilderP);
 BuilderP.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },BuilderP);
 EffBuilder=Eff.EffBuilder=Runtime$1.Class({},Obj,EffBuilder);
 EffBuilder.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },EffBuilder);
 AsyncResultBuilderP=Monads.AsyncResultBuilderP=Runtime$1.Class({},Obj,AsyncResultBuilderP);
 AsyncResultBuilderP.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },AsyncResultBuilderP);
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
 ParseO.parseInt64O$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseInt64O;
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
 ParseO.parseDateO2$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseDateO2;
 };
 Serializer.toJsonString=function(v)
 {
  return Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.append(["\""],Seq.delay(function()
   {
    return Seq.append(!Strings.IsNullOrEmpty(v)?Seq.collect(function(i)
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
    },Operators.range(0,v.length-1)):[],Seq.delay(function()
    {
     return["\""];
    }));
   }));
  })).join("");
 };
 Policy=Msal$1.Policy=Runtime$1.Class({
  toString:function()
  {
   return Strings.ReplaceChar(Library["String.get_toUnderscore$1"]((function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p($2));
    };
   }(Global.id))(this)),"_"," ");
  }
 },null,Policy);
 Policy.SignIn=new Policy({
  $:0
 });
 Policy.SignUp=new Policy({
  $:1
 });
 Policy.EditProfile=new Policy({
  $:2
 });
 Policy.ResetPassword=new Policy({
  $:3
 });
 Telefono$1.New=function(tipoTelefono,codigoPais,codigoArea,numero,extension,mensajes)
 {
  return{
   tipoTelefono:tipoTelefono,
   codigoPais:codigoPais,
   codigoArea:codigoArea,
   numero:numero,
   extension:extension,
   mensajes:mensajes
  };
 };
 TipoTelefono=TypesV0.TipoTelefono=Runtime$1.Class({
  toString:function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$11($2));
    };
   }(Global.id))(this);
  }
 },null,TipoTelefono);
 TipoTelefono.Movil=new TipoTelefono({
  $:0
 });
 TipoTelefono.get_tryParse=function()
 {
  return function(a)
  {
   return a==="Movil"?{
    $:1,
    $0:TipoTelefono.Movil
   }:a==="Oficina"?{
    $:1,
    $0:TipoTelefono.Oficina
   }:a==="Habitacion"?{
    $:1,
    $0:TipoTelefono.Habitacion
   }:null;
  };
 };
 TipoTelefono.Oficina=new TipoTelefono({
  $:1
 });
 TipoTelefono.Habitacion=new TipoTelefono({
  $:2
 });
 Direccion$1.New=function(authorizeIdR,tipoDireccion,linea1,linea2,ciudad,estado,pais,zonaPostal)
 {
  return{
   authorizeIdR:authorizeIdR,
   tipoDireccion:tipoDireccion,
   linea1:linea1,
   linea2:linea2,
   ciudad:ciudad,
   estado:estado,
   pais:pais,
   zonaPostal:zonaPostal
  };
 };
 TipoDireccion=TypesV0.TipoDireccion=Runtime$1.Class({
  toString:function()
  {
   return this.$==3?this.$0:(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$10($2));
    };
   }(Global.id))(this);
  }
 },null,TipoDireccion);
 TipoDireccion.Habitacion=new TipoDireccion({
  $:0
 });
 TipoDireccion.tryParse=function(s)
 {
  var m;
  m=Strings.Trim(s);
  return m===""?null:m==="Habitacion"?{
   $:1,
   $0:TipoDireccion.Habitacion
  }:m==="Oficina"?{
   $:1,
   $0:TipoDireccion.Oficina
  }:m==="ServicioPostal"?{
   $:1,
   $0:TipoDireccion.ServicioPostal
  }:{
   $:1,
   $0:new TipoDireccion({
    $:3,
    $0:m
   })
  };
 };
 TipoDireccion.Oficina=new TipoDireccion({
  $:1
 });
 TipoDireccion.ServicioPostal=new TipoDireccion({
  $:2
 });
 Estado=TypesV0.Estado=Runtime$1.Class({
  toString:function()
  {
   return this.$==2?this.$0:(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$4($2));
    };
   }(Global.id))(this);
  }
 },null,Estado);
 Estado.tryParse=function(s)
 {
  var $1,m;
  m=Strings.Trim(s).toUpperCase();
  switch(m)
  {
   case"":
    return null;
   case"TEXAS":
   case"TX":
    return{
     $:1,
     $0:Estado.Texas
    };
   case"FLORIDA":
   case"FL":
    return{
     $:1,
     $0:Estado.Florida
    };
   default:
    return{
     $:1,
     $0:new Estado({
      $:2,
      $0:Strings.Trim(s)
     })
    };
  }
 };
 Estado.Texas=new Estado({
  $:0
 });
 Estado.Florida=new Estado({
  $:1
 });
 Pais=TypesV0.Pais=Runtime$1.Class({
  toString:function()
  {
   return this.$==3?this.$0:(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$3($2));
    };
   }(Global.id))(this);
  }
 },null,Pais);
 Pais.USA=new Pais({
  $:0
 });
 Pais.tryParse=function(s)
 {
  var $1,m;
  m=Strings.Trim(s).toUpperCase();
  switch(m)
  {
   case"":
    return null;
   case"USA":
   case"AMERICA":
   case"E.E.U.U.":
   case"US":
   case"UNITED STATES OF AMERICA":
   case"UNITED STATES":
   case"EEUU":
    return{
     $:1,
     $0:Pais.USA
    };
   case"VENEZUELA":
    return{
     $:1,
     $0:Pais.Venezuela
    };
   case"ARGENTINA":
    return{
     $:1,
     $0:Pais.Argentina
    };
   default:
    return{
     $:1,
     $0:new Pais({
      $:3,
      $0:Strings.Trim(s)
     })
    };
  }
 };
 Pais.Venezuela=new Pais({
  $:1
 });
 Pais.Argentina=new Pais({
  $:2
 });
 ZonaPostal=TypesV0.ZonaPostal=Runtime$1.Class({
  toString:function()
  {
   return this.$0;
  }
 },null,ZonaPostal);
 ZonaPostal.tryParse=function(s)
 {
  return Strings.Trim(s)!==""?{
   $:1,
   $0:new ZonaPostal({
    $:0,
    $0:Strings.Trim(s)
   })
  }:null;
 };
 TarjetaCredito.New=function(titular,tipoTarjeta,numero,expiracion)
 {
  return{
   titular:titular,
   tipoTarjeta:tipoTarjeta,
   numero:numero,
   expiracion:expiracion
  };
 };
 Expiracion=TypesV0.Expiracion=Runtime$1.Class({},null,Expiracion);
 Expiracion.New=function(anio,mes)
 {
  return new Expiracion({
   anio:anio,
   mes:mes
  });
 };
 NumeroTarjeta=TypesV0.NumeroTarjeta=Runtime$1.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,NumeroTarjeta);
 TipoTarjeta=TypesV0.TipoTarjeta=Runtime$1.Class({
  toString:function()
  {
   return this.$==3?this.$0:(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$7($2));
    };
   }(Global.id))(this);
  }
 },null,TipoTarjeta);
 TipoTarjeta.Visa=new TipoTarjeta({
  $:0
 });
 TipoTarjeta.tryParse=function(s)
 {
  var $1,m;
  m=Strings.Trim(s).toUpperCase();
  switch(m)
  {
   case"":
    return null;
   case"VISA":
    return{
     $:1,
     $0:TipoTarjeta.Visa
    };
   case"MASTERCARD":
    return{
     $:1,
     $0:TipoTarjeta.MasterCard
    };
   case"AMERICAN EXPRESS":
   case"AMEX":
    return{
     $:1,
     $0:TipoTarjeta.Amex
    };
   default:
    return{
     $:1,
     $0:new TipoTarjeta({
      $:3,
      $0:Strings.Trim(s)
     })
    };
  }
 };
 TipoTarjeta.MasterCard=new TipoTarjeta({
  $:1
 });
 TipoTarjeta.Amex=new TipoTarjeta({
  $:2
 });
 TipoCuenta=TypesV0.TipoCuenta=Runtime$1.Class({
  toString:function()
  {
   return this.$==2?this.$0:(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$8($2));
    };
   }(Global.id))(this);
  }
 },null,TipoCuenta);
 TipoCuenta.Ahorro=new TipoCuenta({
  $:0
 });
 TipoCuenta.tryParse=function(s)
 {
  var $1,m;
  m=Strings.Trim(s).toUpperCase();
  switch(m)
  {
   case"":
    return null;
   case"AHORRO":
   case"SAVINGS":
    return{
     $:1,
     $0:TipoCuenta.Ahorro
    };
   case"CORRIENTE":
   case"CHECKING":
    return{
     $:1,
     $0:TipoCuenta.Corriente
    };
   default:
    return{
     $:1,
     $0:new TipoCuenta({
      $:2,
      $0:Strings.Trim(s)
     })
    };
  }
 };
 TipoCuenta.Corriente=new TipoCuenta({
  $:1
 });
 Genero.Masculino={
  $:0
 };
 Genero.tryParse=function(s)
 {
  var m;
  m=Strings.Trim(s);
  return m==="Masculino"?{
   $:1,
   $0:Genero.Masculino
  }:m==="Femenino"?{
   $:1,
   $0:Genero.Femenino
  }:m==="Empresa"?{
   $:1,
   $0:Genero.Empresa
  }:null;
 };
 Genero.Femenino={
  $:1
 };
 Genero.Empresa={
  $:2
 };
 Remoting.AjaxProvider=function()
 {
  SC$3.$cctor();
  return SC$3.AjaxProvider;
 };
 Remoting.set_EndPoint=function($1)
 {
  SC$3.$cctor();
  SC$3.EndPoint=$1;
 };
 Remoting.set_AjaxProvider=function($1)
 {
  SC$3.$cctor();
  SC$3.AjaxProvider=$1;
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
  SC$3.$cctor();
  return SC$3.EndPoint;
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
 Configuration.New$1=function(auth,cache,system,framework)
 {
  return Pojo.newPojoOpt([Msal$1.op_EqualsEqualsGreater("auth",auth),Msal$1.op_EqualsEqualsGreater("cache",cache),Msal$1.op_EqualsEqualsGreater("system",system),Msal$1.op_EqualsEqualsGreater("framework",framework)]);
 };
 AuthOptions.New$1=function(clientId,authority,validateAuthority,redirectUri,postLogoutRedirectUri,navigateToLoginRequestUrl)
 {
  return Pojo.newPojoOpt([Msal$1.op_MinusMinusGreater("clientId",clientId),Msal$1.op_EqualsEqualsGreater("authority",authority),Msal$1.op_EqualsEqualsGreater("validateAuthority",validateAuthority),Msal$1.op_EqualsEqualsGreater("redirectUri",redirectUri),Msal$1.op_EqualsEqualsGreater("postLogoutRedirectUri",postLogoutRedirectUri),Msal$1.op_EqualsEqualsGreater("navigateToLoginRequestUrl",navigateToLoginRequestUrl)]);
 };
 MailboxProcessor=Control.MailboxProcessor=Runtime$1.Class({
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
  get_DefaultTimeout:function()
  {
   return this.DefaultTimeout;
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
  resume:function()
  {
   var m;
   m=this.savedCont;
   m!=null&&m.$==1?(this.savedCont=null,this.startAsync(m.$0)):void 0;
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
 MailboxProcessor.New=Runtime$1.Ctor(function(initial,token)
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
 LibraryJS.REGEX$2=function(expr,opt,value)
 {
  var m;
  return value===null?null:(m=(new Global.String(value)).match(new Global.RegExp(expr,opt)),Unchecked.Equals(m,null)?null:!Unchecked.Equals(m,null)&&m.length===0?null:{
   $:1,
   $0:m
  });
 };
 LibraryJS.rexEmail$1=function()
 {
  SC$1.$cctor();
  return SC$1.rexEmail;
 };
 EndPoint.DefaultEP={
  $:0
 };
 Router.InstallHash=function(onParseError,router)
 {
  var _var;
  _var=Var$1.Create$1(Router.getCurrentHash(function(h)
  {
   return RouterModule.Parse(router,Route.FromHash(h,{
    $:1,
    $0:true
   }));
  },onParseError));
  Router.InstallHashInto(_var,onParseError,router);
  return _var;
 };
 Router.InstallHashInto=function(_var,onParseError,router)
 {
  function parse(h)
  {
   return RouterModule.Parse(router,Route.FromHash(h,{
    $:1,
    $0:true
   }));
  }
  function cur()
  {
   return Router.getCurrentHash(parse,onParseError);
  }
  function set(value)
  {
   if(!Unchecked.Equals(_var.Get(),value))
    _var.Set(value);
  }
  self.addEventListener("popstate",function()
  {
   return set(cur());
  },false);
  self.addEventListener("hashchange",function()
  {
   return set(cur());
  },false);
  self.document.body.addEventListener("click",function(ev)
  {
   var o,o$1,href;
   o=(o$1=Router.findLinkHref(ev.target),o$1==null?null:(href=o$1.$0,Strings.StartsWith(href,"#")?parse(href):null));
   return o==null?null:(set(o.$0),ev.preventDefault());
  },false);
  View.Sink(function(value)
  {
   var url;
   if(!Unchecked.Equals(value,cur()))
    {
     url=RouterModule.HashLink(router,value);
     self.history.pushState(null,null,url);
    }
  },_var.get_View());
 };
 Router.getCurrentHash=function(parse,onParseError)
 {
  var h,m;
  h=self.location.hash;
  m=parse(h);
  return m==null?((function($1)
  {
   return function($2)
   {
    return $1("Failed to parse route: "+Utils.toSafe($2));
   };
  }(function(s)
  {
   console.log(s);
  }))(h),onParseError):m.$0;
 };
 Router.findLinkHref=function(n)
 {
  while(true)
   if(n.tagName==="A")
    return Option.ofObj(n.getAttribute("href"));
   else
    if(n===self.document.body)
     return null;
    else
     n=n.parentNode;
 };
 ViewBuilder.B={
  $:0
 };
 Remoting$1.installBearer=function(getTokenOAF)
 {
  Remoting$1.set_getTokenOA(getTokenOAF);
  Remoting.set_AjaxProvider(new CustomXhrProvider.New());
 };
 Remoting$1.set_getTokenOA=function($1)
 {
  SC$1.$cctor();
  SC$1.getTokenOA=$1;
 };
 Remoting$1.getTokenOA=function()
 {
  SC$1.$cctor();
  return SC$1.getTokenOA;
 };
 Remoting$1.originalProvider=function()
 {
  SC$1.$cctor();
  return SC$1.originalProvider;
 };
 IdPayment=TypesV0.IdPayment=Runtime$1.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,IdPayment);
 CuentaPago=TypesV0.CuentaPago=Runtime$1.Class({
  get_MaskedCuenta:function()
  {
   return this.$==0?this.$0.numero.get_Id():this.$==2?this.$0:this.$0.numero.get_Id();
  }
 },null,CuentaPago);
 PlugInQuery.New=function(qryName,qryFunction)
 {
  return{
   qryName:qryName,
   qryFunction:qryFunction
  };
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
 FSharpMap=Collections.FSharpMap=Runtime$1.Class({
  TryGetValue:function(k,r)
  {
   var m;
   m=this.TryFind(k);
   return m!=null&&m.$==1&&(r.set(m.$0),true);
  },
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
  GetHashCode:function()
  {
   return Unchecked.Hash(Arrays.ofSeq(this));
  },
  Add:function(k,v)
  {
   return new FSharpMap.New$1(BalancedTree.Add(Pair.New(k,v),this.tree));
  },
  get_IsEmpty:function()
  {
   return this.tree==null;
  },
  get_Tree:function()
  {
   return this.tree;
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
 T=Enumerator.T=Runtime$1.Class({
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
 T.New=Runtime$1.Ctor(function(s,c,n,d)
 {
  Obj.New.call(this);
  this.s=s;
  this.c=c;
  this.n=n;
  this.d=d;
 },T);
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
 BalancedTree.TryFind=function(v,t)
 {
  var x;
  x=(BalancedTree.Lookup(v,t))[0];
  return x==null?null:{
   $:1,
   $0:x.Node
  };
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
 BalancedTree.Branch=function(node,left,right)
 {
  var a,b;
  return Tree.New(node,left,right,1+(a=left==null?0:left.Height,(b=right==null?0:right.Height,Unchecked.Compare(a,b)===1?a:b)),1+(left==null?0:left.Count)+(right==null?0:right.Count));
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
       spine=new T$1({
        $:1,
        $0:[t$2.Node,t$2.Left],
        $1:spine
       });
      }
     else
      {
       t$2=t$1;
       t$1=t$2.Left;
       spine=new T$1({
        $:1,
        $0:[t$2.Node,t$2.Right],
        $1:spine
       });
      }
  }
  return Seq.unfold(function($1)
  {
   return gen($1[0],$1[1]);
  },[t,T$1.Empty]);
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
 Arrays.mapInPlace=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)arr[i]=f(arr[i]);
 };
 Arrays.mapiInPlace=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)arr[i]=f(i,arr[i]);
  return arr;
 };
 Seq.insufficient=function()
 {
  return Operators.FailWith("The input sequence has an insufficient number of elements.");
 };
 Seq.nonNegative=function()
 {
  return Operators.FailWith("The input must be non-negative.");
 };
 T$1=List.T=Runtime$1.Class({
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
 AsyncResult.rtn=function(v)
 {
  return Concurrency.Return({
   $:0,
   $0:v
  });
 };
 AsyncResult.bind=function(fRA,vRA)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(vRA,function(a)
   {
    return a.$==1?Concurrency.Return(Library.Error$1(a.$0)):fRA(a.$0);
   });
  });
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
 AsyncResult.map=function(f,m)
 {
  return AsyncResult.bind(function(x)
  {
   return AsyncResult.rtn(f(x));
  },m);
 };
 AsyncResult.rtnR=function(vR)
 {
  return Concurrency.Return(vR);
 };
 AsyncResult.whileLoop=function(cond,fRA)
 {
  return cond()?AsyncResult.bind(function()
  {
   return AsyncResult.whileLoop(cond,fRA);
  },fRA()):AsyncResult.rtn();
 };
 Array.replace=function(i,item,array)
 {
  return Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.append(i>0?Slice.array(array,null,{
    $:1,
    $0:i-1
   }):[],Seq.delay(function()
   {
    return Seq.append([item],Seq.delay(function()
    {
     return i<Arrays.length(array)?Slice.array(array,{
      $:1,
      $0:i+1
     },null):[];
    }));
   }));
  }));
 };
 Array.remove=function(i,array)
 {
  return Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.append(i>0?Slice.array(array,null,{
    $:1,
    $0:i-1
   }):[],Seq.delay(function()
   {
    return i<Arrays.length(array)?Slice.array(array,{
     $:1,
     $0:i+1
    },null):[];
   }));
  }));
 };
 CuentaBancaria$1.formaDocO=function(ctaOV)
 {
  var v;
  return CuentaBancaria$1.formaDoc(Var$1.Lens(ctaOV,(v=[TypesV0.ctaVacio(),"",false],function(o)
  {
   return o==null?v:o.$0;
  }),function(a,v$1)
  {
   return{
    $:1,
    $0:v$1
   };
  }));
 };
 CuentaBancaria$1.formaDoc=function(ctaV)
 {
  var disabledW,forma,b,D,D$1,D$2,D$3,D$4,T$2,p,i,requeridosW;
  function a(cta,a$1,a$2)
  {
   forma.Hole("titular").Set(cta.titular);
   forma.Hole("banco").Set(cta.banco);
   forma.Hole("tipocuenta").Set((function($1)
   {
    return function($2)
    {
     return $1(Global.String($2));
    };
   }(Global.id))(cta.tipo));
   forma.Hole("numero").Set(cta.numero.$0);
   forma.Hole("routing").Set(cta.routing.$0);
  }
  disabledW=View.Map(function($1)
  {
   return VariousUI.thr3($1[0],$1[1],$1[2]);
  },ctaV.get_View());
  forma=(b=(D=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$1=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$2=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$3=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$4=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(T$2=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.tiposCta().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tiposcuenta",
   $1:T$2
  })).WithHole({
   $:2,
   $0:"mensaje",
   $1:View.Map(function($1)
   {
    return VariousUI.snd3($1[0],$1[1],$1[2]);
   },ctaV.get_View())
  }).WithHole({
   $:3,
   $0:"disabled1",
   $1:D$4
  })).WithHole({
   $:3,
   $0:"disabled2",
   $1:D$3
  })).WithHole({
   $:3,
   $0:"disabled3",
   $1:D$2
  })).WithHole({
   $:3,
   $0:"disabled4",
   $1:D$1
  })).WithHole({
   $:3,
   $0:"disabled5",
   $1:D
  })),(p=Handler.CompleteHoles(b.k,b.h,[["tipocuenta",0],["titular",0],["numero",0],["banco",0],["routing",0]]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.cuentabancaria(p[0])),(b.i=i,i))));
  View.Sink(function($1)
  {
   return a($1[0],$1[1],$1[2]);
  },ctaV.get_View());
  requeridosW=View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return function($3)
   {
    return function($4)
    {
     return Seq.map(function(t)
     {
      return t[1];
     },Seq.filter(function(t)
     {
      return t[0];
     },List.ofArray([[Strings.Trim($1)==="","Titular"],[Strings.Trim($2)==="","Banco"],[Strings.Trim($3)==="","Numero de Cuenta"],[Strings.Trim($4)==="","ABA/Routing Number"]])));
    };
   };
  },forma.Hole("titular").get_View(),forma.Hole("banco").get_View()),forma.Hole("numero").get_View()),forma.Hole("routing").get_View());
  View.Sink(function(a$1)
  {
   var v,t;
   if(a$1!=null&&a$1.$==1)
    {
     v=a$1.$0;
     !Unchecked.Equals((t=ctaV.Get(),VariousUI.fst3(t[0],t[1],t[2])),v)?ctaV.Set([v,"",false]):void 0;
    }
  },View.Apply(View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime$1.Curried(function($3,$4,$5,$6)
   {
    return!Seq.isEmpty($1)?null:VariousUI.alertIfNone("TipoCuenta",TipoCuenta.tryParse(Strings.Trim($2)),function(tipoCta)
    {
     var b$1;
     return{
      $:1,
      $0:(b$1=Strings.Trim($3),CuentaBancaria.New(Strings.Trim($4),b$1,tipoCta,new NumeroCuenta({
       $:0,
       $0:Strings.Trim($5)
      }),new RoutingNumber({
       $:0,
       $0:Strings.Trim($6)
      })))
     };
    });
   },4);
  },requeridosW,forma.Hole("tipocuenta").get_View()),forma.Hole("banco").get_View()),forma.Hole("titular").get_View()),forma.Hole("numero").get_View()),forma.Hole("routing").get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 TarjetaCredito$1.formaDocO=function(tarOV)
 {
  var v;
  return TarjetaCredito$1.formaDoc(Var$1.Lens(tarOV,(v=[TypesV0.tarVacio(),"",false],function(o)
  {
   return o==null?v:o.$0;
  }),function(a,v$1)
  {
   return{
    $:1,
    $0:v$1
   };
  }));
 };
 TarjetaCredito$1.formaDoc=function(tarV)
 {
  var disabledW,forma,b,D,D$1,D$2,D$3,D$4,M,A,T$2,p,i,requeridosW;
  function a(tar,mensaje,validated)
  {
   var m;
   forma.Hole("titular").Set(tar.titular);
   forma.Hole("tipotarjeta").Set((function($1)
   {
    return function($2)
    {
     return $1(Global.String($2));
    };
   }(Global.id))(tar.tipoTarjeta));
   forma.Hole("numero").Set(tar.numero.$0);
   forma.Hole("aniovenc").Set((function($1)
   {
    return function($2)
    {
     return $1(Utils.padNumLeft(Global.String($2),4));
    };
   }(Global.id))(tar.expiracion.anio));
   forma.Hole("mesvenc").Set((m=tar.expiracion.mes,m===1?"Enero":m===2?"Febrero":m===3?"Marzo":m===4?"Abril":m===5?"Mayo":m===6?"Junio":m===7?"Julio":m===8?"Agosto":m===9?"Septiembre":m===10?"Octubre":m===11?"Noviembre":m===12?"Diciembre":"XX"));
  }
  disabledW=View.Map(function($1)
  {
   return VariousUI.thr3($1[0],$1[1],$1[2]);
  },tarV.get_View());
  forma=(b=(D=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$1=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$2=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$3=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$4=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(M=Doc.EmbedView(View.Map(function($1)
  {
   return VariousUI.crearOptions(Seq.map(Global.String,$1));
  },VariousUI.mesesV().get_View())),(A=Doc.EmbedView(View.Map(function($1)
  {
   return VariousUI.crearOptions(Seq.map(Global.String,$1));
  },VariousUI.aniosV().get_View())),(T$2=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.tiposTar().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tipostarjeta",
   $1:T$2
  })).WithHole({
   $:2,
   $0:"mensaje",
   $1:View.Map(function($1)
   {
    return VariousUI.snd3($1[0],$1[1],$1[2]);
   },tarV.get_View())
  }).WithHole({
   $:0,
   $0:"anios",
   $1:A
  })).WithHole({
   $:0,
   $0:"meses",
   $1:M
  })).WithHole({
   $:3,
   $0:"disabled1",
   $1:D$4
  })).WithHole({
   $:3,
   $0:"disabled2",
   $1:D$3
  })).WithHole({
   $:3,
   $0:"disabled3",
   $1:D$2
  })).WithHole({
   $:3,
   $0:"disabled4",
   $1:D$1
  })).WithHole({
   $:3,
   $0:"disabled5",
   $1:D
  })).WithHole({
   $:2,
   $0:"visible",
   $1:View.Map(function($1)
   {
    return $1?"display:None":"";
   },disabledW)
  }),(p=Handler.CompleteHoles(b.k,b.h,[["tipotarjeta",0],["titular",0],["numero",0],["aniovenc",0],["mesvenc",0]]),(i=new TemplateInstance.New(p[1],ProzperServer_Templates.tarjetacredito(p[0])),(b.i=i,i))));
  View.Sink(function($1)
  {
   return a($1[0],$1[1],$1[2]);
  },tarV.get_View());
  requeridosW=View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime$1.Curried3(function($3,$4,$5)
   {
    return Seq.map(function(t)
    {
     return t[1];
    },Seq.filter(function(t)
    {
     return t[0];
    },List.ofArray([[Strings.Trim($1)==="","Titular"],[Strings.Trim($2)==="","TipoTarjeta"],[Strings.Trim($3)==="","Numero"],[Strings.Trim($4)==="","Ano de Vencimiento"],[Strings.Trim($5)==="","Mes de Vencimiento"]])));
   });
  },forma.Hole("titular").get_View(),forma.Hole("tipotarjeta").get_View()),forma.Hole("numero").get_View()),forma.Hole("aniovenc").get_View()),forma.Hole("mesvenc").get_View());
  View.Sink(function(a$1)
  {
   var v,t;
   if(a$1!=null&&a$1.$==1)
    {
     v=a$1.$0;
     !Unchecked.Equals((t=tarV.Get(),VariousUI.fst3(t[0],t[1],t[2])),v)?tarV.Set([v,"",false]):void 0;
    }
  },View.Apply(View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime$1.Curried(function($3,$4,$5,$6)
   {
    return!Seq.isEmpty($1)?null:VariousUI.alertIfNone("Tipo Tarjeta",TipoTarjeta.tryParse(Strings.Trim($2)),function(tipoTar)
    {
     var o,x,a$1;
     return{
      $:1,
      $0:TarjetaCredito.New(Strings.Trim($3),tipoTar,new NumeroTarjeta({
       $:0,
       $0:Strings.Trim($4)
      }),Expiracion.New((o=(x=Strings.Trim($5),(ParseO.parseIntO$1())(x)),o==null?0:o.$0),(a$1=Strings.Trim($6),a$1==="Febrero"?2:a$1==="Marzo"?3:a$1==="Abril"?4:a$1==="Mayo"?5:a$1==="Junio"?6:a$1==="Julio"?7:a$1==="Agosto"?8:a$1==="Septiembre"?9:a$1==="Octubre"?10:a$1==="Noviembre"?11:a$1==="Diciembre"?12:1)))
     };
    });
   },4);
  },requeridosW,forma.Hole("tipotarjeta").get_View()),forma.Hole("titular").get_View()),forma.Hole("numero").get_View()),forma.Hole("aniovenc").get_View()),forma.Hole("mesvenc").get_View()));
  return[requeridosW,forma.get_Doc()];
 };
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
  x=Array$1.ofSeqNonCopying(xs);
  return Array$1.TreeReduce(Attrs.EmptyAttr(),AttrProxy.Append,x);
 };
 AttrProxy.Append=function(a,b)
 {
  return Attrs.AppendTree(a,b);
 };
 AttrProxy.Handler=function(event,q)
 {
  return AttrProxy.HandlerImpl(event,q);
 };
 Array$1.ofSeqNonCopying=function(xs)
 {
  var q,o;
  if(xs instanceof Global.Array)
   return xs;
  else
   if(xs instanceof T$1)
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
 Array$1.TreeReduce=function(defaultValue,reduction,array)
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
 Array$1.MapTreeReduce=function(mapping,defaultValue,reduction,array)
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
 Array$1.mapInPlace=function(f,arr)
 {
  var i,$1;
  for(i=0,$1=arr.length-1;i<=$1;i++)arr[i]=f(arr[i]);
  return arr;
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
 Concurrency.While=function(g,c)
 {
  return g()?Concurrency.Bind(c,function()
  {
   return Concurrency.While(g,c);
  }):Concurrency.Return();
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
 Concurrency.defCTS=function()
 {
  SC$4.$cctor();
  return SC$4.defCTS;
 };
 Concurrency.UncaughtAsyncError=function(e)
 {
  console.log("WebSharper: Uncaught asynchronous exception",e);
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
 Concurrency.Combine=function(a,b)
 {
  return Concurrency.Bind(a,function()
  {
   return b;
  });
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
 Concurrency.Using=function(x,f)
 {
  return Concurrency.TryFinally(f(x),function()
  {
   x.Dispose();
  });
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
 Concurrency.GetCT=function()
 {
  SC$4.$cctor();
  return SC$4.GetCT;
 };
 Storage.InMemory=function(init)
 {
  return new ArrayStorage.New(init);
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
 AttrModule.DynamicCustom=function(set,view)
 {
  return Attrs.Dynamic(view,set);
 };
 String.splitByChar=function(c,s)
 {
  return Strings.SplitChars(s,[c],0);
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
  SC$2.$cctor();
  return SC$2.unindentStr;
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
 String.splitInTwoO=function(spl,txt)
 {
  var i;
  i=txt.indexOf(spl);
  return i===-1?null:{
   $:1,
   $0:[Library["String.Left"](txt,i),txt.substring(i+spl.length)]
  };
 };
 GeneratedPrintf.p$1=function($1)
 {
  return"{"+("actName = "+Utils.prettyPrint($1.actName))+"; "+("actFunction = "+LayoutEngine_GeneratedPrintf.p$1($1.actFunction))+"; "+("actEnabled = "+LayoutEngine_GeneratedPrintf.p$2($1.actEnabled))+"}";
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
  return"{"+("docName = "+Utils.prettyPrint($1.docName))+"; "+("docDoc = "+LayoutEngine_GeneratedPrintf.p($1.docDoc))+"}";
 };
 LayoutEngine_GeneratedPrintf.p$1=function($1)
 {
  return $1.$==2?"FunAct2 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")":$1.$==1?"FunAct1 (<fun>, "+Utils.prettyPrint($1.$1)+")":"FunAct0 <fun>";
 };
 LayoutEngine_GeneratedPrintf.p$2=function($1)
 {
  return"View <fun>";
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
 LayoutEngine_Templates.actiondisabled=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"actiondisabled"
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
 LayoutEngine_GeneratedPrintf.p=function($1)
 {
  return $1.$==5?"FunDoc5 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+", "+Utils.prettyPrint($1.$4)+", "+Utils.prettyPrint($1.$5)+")":$1.$==4?"FunDoc4 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+", "+Utils.prettyPrint($1.$4)+")":$1.$==3?"FunDoc3 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+")":$1.$==2?"FunDoc2 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")":$1.$==1?"FunDoc1 (<fun>, "+Utils.prettyPrint($1.$1)+")":"LazyDoc "+Utils.prettyPrint($1.$0);
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
    a=WcTabStrip.tabStrip($this.selected,top,true,tabs,Doc.Element("slot",T$1.Empty,T$1.Empty));
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
 WcSplitter.init=function(layoutH,layoutV)
 {
  var o;
  o=new WcSplitterT.New();
  WcSplitter.set_layoutHorizontal(layoutH);
  WcSplitter.set_layoutVertical(layoutV);
  WebComponent.defineWebComponent("wcomp-splitter",WcSplitterT.Constructor,self.FsRoot.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New);
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
      return Seq.append([Doc.Element("style",T$1.Empty,List.ofArray([Doc.TextNode(WcTabStrip.css())]))],Seq.delay(function()
      {
       return[Doc.Element("style",T$1.Empty,List.ofArray([Doc.TextView(View.Map(function($1)
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
 DictionaryUtil.notPresent=function()
 {
  return Operators.FailWith("The given key was not present in the dictionary.");
 };
 DictionaryUtil.alreadyAdded=function()
 {
  return Operators.FailWith("An item with the same key has already been added.");
 };
 CheckedInput=UI.CheckedInput=Runtime$1.Class({
  get_Input:function()
  {
   return this.$==1?this.$0:this.$==2?this.$0:this.$1;
  }
 },null,CheckedInput);
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
 Templates.RunFullDocTemplate=function(fillWith)
 {
  var x,a;
  Templates.LoadLocalTemplates("");
  Templates.PrepareTemplateStrict("",null,DomUtility.ChildrenArray(self.document.body),{
   $:1,
   $0:self.document.body
  },null);
  x=Templates.ChildrenTemplate(self.document.body,fillWith);
  a=self.document.body;
  (function(a$1)
  {
   Doc.RunInPlace(true,a,a$1);
  }(x));
  return x;
 };
 Templates.LocalTemplatesLoaded=function()
 {
  SC$6.$cctor();
  return SC$6.LocalTemplatesLoaded;
 };
 Templates.set_LocalTemplatesLoaded=function($1)
 {
  SC$6.$cctor();
  SC$6.LocalTemplatesLoaded=$1;
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
  SC$6.$cctor();
  return SC$6.LoadedTemplates;
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
       return holeContent.$==1?[textBefore$1,new T$1({
        $:1,
        $0:textAfter===""?holeContent.$0:View.Map(function(s$5)
        {
         return s$5+textAfter;
        },holeContent.$0),
        $1:views
       })]:[textBefore$1+holeContent.$0+textAfter,views];
      };
     }($6))($7);
    },res,[finalText,T$1.Empty]);
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
  },["Render","El"]),Array$1.TreeReduce(View.Const(),View.Map2Unit,updates)];
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
  SC$6.$cctor();
  return SC$6.TextHoleRE;
 };
 DateUtil.TryParse=function(s)
 {
  var d;
  d=Date$1.parse(s);
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
 Numeric.TryParseBool=function(s,r)
 {
  var m;
  m=s.toLowerCase();
  return m==="true"?(r.set(true),true):m==="false"&&(r.set(false),true);
 };
 SC$3.$cctor=function()
 {
  SC$3.$cctor=Global.ignore;
  SC$3.EndPoint="?";
  SC$3.AjaxProvider=new XhrProvider.New();
 };
 Pojo.newPojoOpt=function(propOs)
 {
  function c(n,vO)
  {
   return vO==null?null:{
    $:1,
    $0:[n,vO.$0]
   };
  }
  return Pojo.newPojo(Seq.choose(function($1)
  {
   return c($1[0],$1[1]);
  },propOs));
 };
 Pojo.newPojo=function(props)
 {
  var pojo,f;
  function f$1(a,a$1)
  {
   return function(p)
   {
    return Pojo.addProp(a,a$1,p);
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
 Msal$1.op_EqualsEqualsGreater=function(n,vO)
 {
  return[n,vO==null?null:{
   $:1,
   $0:vO.$0
  }];
 };
 Msal$1.op_MinusMinusGreater=function(n,v)
 {
  return[n,{
   $:1,
   $0:v
  }];
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
 Promise.AsAsync=function(p)
 {
  return Concurrency.FromContinuations(function(ok,ko)
  {
   p.then(ok,function(err)
   {
    return ko(Promise.unwrapExn(err));
   });
  });
 };
 Promise.unwrapExn=function(x)
 {
  return x instanceof Error?x:new NonStandardPromiseRejectionException.New(x);
 };
 RouterOperators.JSUnion=function(t,cases)
 {
  var parseCases;
  function getTag(value)
  {
   var constIndex;
   function p($1)
   {
    return $1!=null&&$1.$==1&&Unchecked.Equals(value,$1.$0);
   }
   constIndex=Seq.tryFindIndex(function($1)
   {
    return p($1[0]);
   },cases);
   return constIndex!=null&&constIndex.$==1?constIndex.$0:value.$;
  }
  function readFields(tag,value)
  {
   return Arrays.init(Arrays.length((Arrays.get(cases,tag))[2]),function(i)
   {
    return value["$"+Global.String(i)];
   });
  }
  function createCase(tag,fieldValues)
  {
   var o,m$1,$1;
   o=t==null?{}:new t();
   m$1=Arrays.get(cases,tag);
   return($1=m$1[0],$1!=null&&$1.$==1)?m$1[0].$0:(o.$=tag,Seq.iteri(function(i,v)
   {
    o["$"+Global.String(i)]=v;
   },fieldValues),o);
  }
  function m(i,a)
  {
   var fields;
   function m$1(m$2,p)
   {
    return[i,m$2,p,fields];
   }
   fields=a[2];
   return Seq.map(function($1)
   {
    return m$1($1[0],$1[1]);
   },a[1]);
  }
  parseCases=Seq.collect(function($1)
  {
   return m($1[0],$1[1]);
  },Seq.indexed(cases));
  return Router$1.New$1(function(path)
  {
   function m$1(i,m$2,s,fields)
   {
    var m$3,p,m$4;
    function collect(fields$1,path$1,acc)
    {
     var t$1;
     function m$5(p$1,a)
     {
      return collect(t$1,p$1,new T$1({
       $:1,
       $0:a,
       $1:acc
      }));
     }
     return fields$1.$==1?(t$1=fields$1.$1,Seq.collect(function($1)
     {
      return m$5($1[0],$1[1]);
     },fields$1.$0.Parse(path$1))):[[path$1,createCase(i,Arrays.ofList(List.rev(acc)))]];
    }
    return RouterOperators.isCorrectMethod(m$2,path.Method)?(m$3=List$2.startsWith(List.ofArray(s),path.Segments),m$3==null?[]:(p=m$3.$0,(m$4=List.ofArray(fields),m$4.$==0?[[Route.New(p,path.QueryArgs,path.FormData,path.Method,path.Body),createCase(i,[])]]:collect(m$4,Route.New(p,path.QueryArgs,path.FormData,path.Method,path.Body),T$1.Empty)))):[];
   }
   return Seq.collect(function($1)
   {
    return m$1($1[0],$1[1],$1[2],$1[3]);
   },parseCases);
  },function(value)
  {
   var tag,p,fields,p$1,casePath,fieldParts;
   function m$1(v,f)
   {
    return f.Write(v);
   }
   tag=getTag(value);
   p=Arrays.get(cases,tag);
   fields=p[2];
   p$1=Arrays.get(p[1],0);
   casePath=[Route.Segment(List.ofArray(p$1[1]),p$1[0])];
   return!Unchecked.Equals(fields,null)&&fields.length===0?{
    $:1,
    $0:casePath
   }:(fieldParts=(((Runtime$1.Curried3(Arrays.map2))(m$1))(readFields(tag,value)))(fields),Arrays.forall(function(o)
   {
    return o!=null;
   },fieldParts)?{
    $:1,
    $0:Seq.append(casePath,Seq.collect(function(o)
    {
     return o.$0;
    },fieldParts))
   }:null);
  });
 };
 RouterOperators.isCorrectMethod=function(m,p)
 {
  return p!=null&&p.$==1?m!=null&&m.$==1?Unchecked.Equals(p.$0,m.$0):true:!(m!=null&&m.$==1);
 };
 RouterOperators.rString=function()
 {
  SC$7.$cctor();
  return SC$7.rString;
 };
 RouterOperators.rWildcard=function()
 {
  SC$7.$cctor();
  return SC$7.rWildcard;
 };
 RouterModule.Parse=function(router,path)
 {
  function c(path$1,value)
  {
   return path$1.Segments.$==0?{
    $:1,
    $0:value
   }:null;
  }
  return Seq.tryPick(function($1)
  {
   return c($1[0],$1[1]);
  },router.Parse(path));
 };
 RouterModule.HashLink=function(router,endpoint)
 {
  return"#"+RouterModule.Link(router,endpoint);
 };
 RouterModule.Link=function(router,endpoint)
 {
  var m;
  m=RouterModule.Write(router,endpoint);
  return m==null?"":m.$0.ToLink();
 };
 RouterModule.Write=function(router,endpoint)
 {
  var o;
  o=router.Write(endpoint);
  return o==null?null:{
   $:1,
   $0:Route.Combine(o.$0)
  };
 };
 Route=Sitelets.Route=Runtime$1.Class({
  ToLink:function()
  {
   return PathUtil.WriteLink(this.Segments,this.QueryArgs);
  }
 },null,Route);
 Route.FromHash=function(path,strict)
 {
  var m,h;
  m=path.indexOf("#");
  return m===-1?Route.get_Empty():(h=path.substring(m+1),strict!=null&&strict.$0?h===""||h==="/"?Route.get_Empty():Strings.StartsWith(h,"/")?Route.FromUrl(h.substring(1),{
   $:1,
   $0:true
  }):Route.Segment$2(h):Route.FromUrl(path.substring(m),{
   $:1,
   $0:false
  }));
 };
 Route.Segment=function(s,m)
 {
  var i;
  i=Route.get_Empty();
  return Route.New(s,i.QueryArgs,i.FormData,m,i.Body);
 };
 Route.get_Empty=function()
 {
  return Route.New(T$1.Empty,new FSharpMap.New([]),new FSharpMap.New([]),null,Lazy.CreateFromValue(null));
 };
 Route.FromUrl=function(path,strict)
 {
  var p,m,i;
  p=(m=path.indexOf("?"),m===-1?[path,new FSharpMap.New([])]:[Strings.Substring(path,0,m),Route.ParseQuery(path.substring(m+1))]);
  i=Route.get_Empty();
  return Route.New(List.ofArray(Strings.SplitChars(p[0],["/"],strict!=null&&strict.$0?0:1)),p[1],i.FormData,i.Method,i.Body);
 };
 Route.Segment$2=function(s)
 {
  var i;
  i=Route.get_Empty();
  return Route.New(List.ofArray([s]),i.QueryArgs,i.FormData,i.Method,i.Body);
 };
 Route.ParseQuery=function(q)
 {
  return Map.OfArray(Arrays.ofSeq(Arrays.choose(function(kv)
  {
   var m,v;
   m=Strings.SplitChars(kv,["="],0);
   return!Unchecked.Equals(m,null)&&m.length===2?(v=Arrays.get(m,1),{
    $:1,
    $0:[Arrays.get(m,0),v]
   }):((function($1)
   {
    return function($2)
    {
     return $1("wrong format for query argument: "+Utils.toSafe($2));
    };
   }(function(s)
   {
    console.log(s);
   }))(kv),null);
  },Strings.SplitChars(q,["&"],0))));
 };
 Route.Combine=function(paths)
 {
  var method,body,queryArgs,formData,i,$1,paths$1,m,segments,l;
  paths$1=Arrays.ofSeq(paths);
  m=Arrays.length(paths$1);
  if(m===0)
   return Route.get_Empty();
  else
   if(m===1)
    return Arrays.get(paths$1,0);
   else
    {
     method=null;
     body=null;
     segments=[];
     queryArgs=new FSharpMap.New([]);
     formData=new FSharpMap.New([]);
     i=0;
     l=Arrays.length(paths$1);
     while(i<l)
      (function()
      {
       var p,m$1,m$2;
       p=Arrays.get(paths$1,i);
       m$1=p.Method;
       m$1!=null&&m$1.$==1?method=m$1:void 0;
       m$2=p.Body.f();
       m$2===null?void 0:body=m$2;
       queryArgs=Map.FoldBack(function(k,v,t)
       {
        return t.Add(k,v);
       },queryArgs,p.QueryArgs);
       formData=Map.FoldBack(function(k,v,t)
       {
        return t.Add(k,v);
       },formData,p.FormData);
       List.iter(function(a)
       {
        segments.push(a);
       },p.Segments);
       i=i+1;
      }());
     return Route.New(List.ofSeq(segments),queryArgs,formData,method,Lazy.CreateFromValue(body));
    }
 };
 Route.New=function(Segments,QueryArgs,FormData,Method,Body)
 {
  return new Route({
   Segments:Segments,
   QueryArgs:QueryArgs,
   FormData:FormData,
   Method:Method,
   Body:Body
  });
 };
 CustomXhrProvider=Remoting$1.CustomXhrProvider=Runtime$1.Class({
  Async:function(url,headers,data,ok,err)
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind((Remoting$1.getTokenOA())(),function(a)
    {
     a==null?void 0:headers.Authorization=(function($1)
     {
      return function($2)
      {
       return $1("Bearer "+Utils.toSafe($2));
      };
     }(Global.id))(a.$0);
     Remoting$1.originalProvider().Async(url,headers,data,ok,err);
     return Concurrency.Zero();
    });
   })),null);
  }
 },Obj,CustomXhrProvider);
 CustomXhrProvider.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },CustomXhrProvider);
 ConceptoPago=TypesV0.ConceptoPago=Runtime$1.Class({
  toString:function()
  {
   return this.$==2?this.$0:(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$9($2));
    };
   }(Global.id))(this);
  }
 },null,ConceptoPago);
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
 IdAddress=TypesV0.IdAddress=Runtime$1.Class({},null,IdAddress);
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
 Docs.LinkElement=function(el,children)
 {
  Docs.InsertDoc(el,children,null);
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
 Docs.InsertBeforeDelim=function(afterDelim,doc)
 {
  var p,before;
  p=afterDelim.parentNode;
  before=self.document.createTextNode("");
  p.insertBefore(before,afterDelim);
  Docs.LinkPrevElement(afterDelim,doc);
  return before;
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
 Docs.InsertNode=function(parent,node,pos)
 {
  DomUtility.InsertAt(parent,pos,node);
  return node;
 };
 Docs.LinkPrevElement=function(el,children)
 {
  Docs.InsertDoc(el.parentNode,children,el);
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
 Attrs.EmptyAttr=function()
 {
  SC$9.$cctor();
  return SC$9.EmptyAttr;
 };
 Attrs.Flags=function(a)
 {
  return a!==null&&a.hasOwnProperty("flags")?a.flags:0;
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
  return Array$1.MapTreeReduce(function(x)
  {
   return x.NChanged();
  },View.Const(),View.Map2Unit,dyn.DynNodes);
 };
 Attrs.Empty=function(e)
 {
  return Dyn.New(e,0,[],null);
 };
 Attrs.SetFlags=function(a,f)
 {
  a.flags=f;
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
 DomUtility.ChildrenArray=function(element)
 {
  var a,i,$1;
  a=[];
  for(i=0,$1=element.childNodes.length-1;i<=$1;i++)a.push(element.childNodes[i]);
  return a;
 };
 DomUtility.CreateElement=function(name)
 {
  return DomUtility.Doc().createElement(name);
 };
 DomUtility.Doc=function()
 {
  SC$8.$cctor();
  return SC$8.Doc;
 };
 DomUtility.SetProperty=function(target,name,value)
 {
  return target.setProperty(name,value);
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
 CT.New=function(IsCancellationRequested,Registrations)
 {
  return{
   c:IsCancellationRequested,
   r:Registrations
  };
 };
 ArrayStorage=Storage.ArrayStorage=Runtime$1.Class({
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
 Var$2.freshId=function()
 {
  Var$2.set_counter(Var$2.counter()+1);
  return"varuid"+Global.String(Var$2.counter());
 };
 Var$2.set_counter=function($1)
 {
  SC$1.$cctor();
  SC$1.counter=$1;
 };
 Var$2.counter=function()
 {
  SC$1.$cctor();
  return SC$1.counter;
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
 SC$5.$cctor=function()
 {
  SC$5.$cctor=Global.ignore;
  SC$5.counter=0;
 };
 XhrProvider=Remoting.XhrProvider=Runtime$1.Class({
  Async:function(url,headers,data,ok,err)
  {
   Remoting.ajax(true,url,headers,data,ok,err,function()
   {
    Remoting.ajax(true,url,headers,data,ok,err,void 0);
   });
  }
 },Obj,XhrProvider);
 XhrProvider.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
 },XhrProvider);
 FSharpEvent=Control.FSharpEvent=Runtime$1.Class({},Obj,FSharpEvent);
 FSharpEvent.New=Runtime$1.Ctor(function()
 {
  Obj.New.call(this);
  this.event=Event$2.New([]);
 },FSharpEvent);
 LinkedList=Collections.LinkedList=Runtime$1.Class({
  AddLast:function(value)
  {
   var node;
   return this.c===0?(node={
    p:null,
    n:null,
    v:value
   },(this.n=node,this.p=this.n,this.c=1,node)):this.AddAfter(this.p,value);
  },
  GetEnumerator$1:function()
  {
   return new LinkedListEnumerator.New(this);
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
  RemoveFirst:function()
  {
   this.Remove$1(this.n);
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
 LinkedList.New=Runtime$1.Ctor(function()
 {
  LinkedList.New$1.call(this,[]);
 },LinkedList);
 LinkedList.New$1=Runtime$1.Ctor(function(coll)
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
 AuthenticationParameters.New$1=function(account,authority,claimsRequest,correlationId,extraQueryParameters,extraScopesToConsent,loginHint,prompt,scopes,sid,state)
 {
  return Pojo.newPojoOpt([Msal$1.op_EqualsEqualsGreater("account",account),Msal$1.op_EqualsEqualsGreater("authority",authority),Msal$1.op_EqualsEqualsGreater("claimsRequest",claimsRequest),Msal$1.op_EqualsEqualsGreater("correlationId",correlationId),Msal$1.op_EqualsEqualsGreater("extraQueryParameters",extraQueryParameters),Msal$1.op_EqualsEqualsGreater("extraScopesToConsent",extraScopesToConsent),Msal$1.op_EqualsEqualsGreater("loginHint",loginHint),Msal$1.op_EqualsEqualsGreater("prompt",prompt),Msal$1.op_EqualsEqualsGreater("scopes",scopes),Msal$1.op_EqualsEqualsGreater("sid",sid),Msal$1.op_EqualsEqualsGreater("state",state)]);
 };
 Account=Msal$1.Account=Runtime$1.Class({},Obj,Account);
 Router$1.New$1=function(Parse,Write)
 {
  return{
   Parse:Parse,
   Write:Write
  };
 };
 List$2.startsWith=function(s,l)
 {
  var $1;
  switch(s.$==1?l.$==1?Unchecked.Equals(s.$0,l.$0)?($1=[l.$0,l.$1,s.$0,s.$1],1):2:2:0)
  {
   case 0:
    return{
     $:1,
     $0:l
    };
   case 1:
    return List$2.startsWith($1[3],$1[1]);
   case 2:
    return null;
  }
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
   t=Date$1.now();
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
      Date$1.now()-t>40?(Global.setTimeout(function()
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
 LibraryJS.REGEX$1=function(expr,opt,value)
 {
  var m;
  return value===null?null:(m=(new Global.String(value)).match(new Global.RegExp(expr,opt)),Unchecked.Equals(m,null)?null:!Unchecked.Equals(m,null)&&m.length===0?null:{
   $:1,
   $0:m
  });
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
    ResizeObserver.set_observers(new T$1({
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
 SC$6.$cctor=function()
 {
  SC$6.$cctor=Global.ignore;
  SC$6.LoadedTemplates=new Dictionary.New$5();
  SC$6.LocalTemplatesLoaded=false;
  SC$6.TextHoleRE="\\${([^}]+)}";
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
  },tree.Attrs),Array$1.TreeReduce(View.Const(),View.Map2Unit,x)),rvUpdates.v),Arrays.get(tree.Els,0),rvUpdates);
 };
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
 Elt.New$1=Runtime$1.Ctor(function(docNode,updates,elt,rvUpdates)
 {
  Doc.New.call(this,docNode,updates);
  this.docNode$1=docNode;
  this.updates$1=updates;
  this.elt=elt;
  this.rvUpdates=rvUpdates;
 },Elt);
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
  SC$10.$cctor();
  return SC$10.BatchUpdatesEnabled;
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
 HashSetUtil.concat=function(o)
 {
  var r,k;
  r=[];
  for(var k$1 in o)r.push.apply(r,o[k$1]);
  return r;
 };
 Event$2=Event$1.Event=Runtime$1.Class({
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
 NonStandardPromiseRejectionException=JavaScript.NonStandardPromiseRejectionException=Runtime$1.Class({},Error,NonStandardPromiseRejectionException);
 NonStandardPromiseRejectionException.New=Runtime$1.Ctor(function(reason)
 {
  this.message="Promise rejected";
  Object.setPrototypeOf(this,NonStandardPromiseRejectionException.prototype);
  this.reason=reason;
 },NonStandardPromiseRejectionException);
 SC$7.$cctor=function()
 {
  SC$7.$cctor=Global.ignore;
  function pInt(x)
  {
   var m,o;
   m=(o=0,[Numeric.TryParseInt32(x,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o]);
   return m[0]?{
    $:1,
    $0:m[1]
   }:null;
  }
  SC$7.Empty=Router$1.New$1(function()
  {
   return[];
  },function()
  {
   return null;
  });
  SC$7.rRoot=Router$1.New(function(path)
  {
   return[path];
  },[]);
  SC$7.rString=Router$1.New$1(function(path)
  {
   var m,m$1;
   m=path.Segments;
   return m.$==1?(m$1=StringEncoding.read(m.$0),m$1!=null&&m$1.$==1?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),m$1.$0]]:[]):[];
  },function(value)
  {
   return{
    $:1,
    $0:[Route.Segment$2(value==null?"null":StringEncoding.write(value))]
   };
  });
  SC$7.rChar=Router$1.New$1(function(path)
  {
   var m,m$1,$1;
   m=path.Segments;
   return m.$==1?(m$1=StringEncoding.read(m.$0),m$1!=null&&m$1.$==1&&(m$1.$0.length===1&&($1=m$1.$0,true))?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),Char.Parse($1)]]:[]):[];
  },function(value)
  {
   return{
    $:1,
    $0:[Route.Segment$2(value)]
   };
  });
  SC$7.rGuid=Router$1.New$1(function(path)
  {
   var m,res;
   m=path.Segments;
   return m.$==1?(res=null,Guid.TryParse(m.$0,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];
  },function(value)
  {
   return{
    $:1,
    $0:[Route.Segment$2(Global.String(value))]
   };
  });
  SC$7.rInt=Router$1.New$1(function(path)
  {
   var m,res;
   m=path.Segments;
   return m.$==1?(res=0,Numeric.TryParseInt32(m.$0,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];
  },function(value)
  {
   return{
    $:1,
    $0:[Route.Segment$2(Global.String(value))]
   };
  });
  SC$7.rDouble=Router$1.New$1(function(path)
  {
   var m,res,$1;
   m=path.Segments;
   return m.$==1?(res=0,($1=Global.Number(m.$0),Global.isNaN($1)?false:(res=$1,true))?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];
  },function(value)
  {
   return{
    $:1,
    $0:[Route.Segment$2(Global.String(value))]
   };
  });
  SC$7.rSByte=Router$1.New$1(function(path)
  {
   var m,res;
   m=path.Segments;
   return m.$==1?(res=0,Numeric.TryParseSByte(m.$0,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];
  },function(value)
  {
   return{
    $:1,
    $0:[Route.Segment$2(Global.String(value))]
   };
  });
  SC$7.rByte=Router$1.New$1(function(path)
  {
   var m,res;
   m=path.Segments;
   return m.$==1?(res=0,Numeric.TryParseByte(m.$0,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];
  },function(value)
  {
   return{
    $:1,
    $0:[Route.Segment$2(Global.String(value))]
   };
  });
  SC$7.rInt16=Router$1.New$1(function(path)
  {
   var m,res;
   m=path.Segments;
   return m.$==1?(res=0,Numeric.TryParseInt16(m.$0,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];
  },function(value)
  {
   return{
    $:1,
    $0:[Route.Segment$2(Global.String(value))]
   };
  });
  SC$7.rUInt16=Router$1.New$1(function(path)
  {
   var m,res;
   m=path.Segments;
   return m.$==1?(res=0,Numeric.TryParseUInt16(m.$0,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];
  },function(value)
  {
   return{
    $:1,
    $0:[Route.Segment$2(Global.String(value))]
   };
  });
  SC$7.rUInt=Router$1.New$1(function(path)
  {
   var m,res;
   m=path.Segments;
   return m.$==1?(res=0,Numeric.TryParseUInt32(m.$0,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];
  },function(value)
  {
   return{
    $:1,
    $0:[Route.Segment$2(Global.String(value))]
   };
  });
  SC$7.rInt64=Router$1.New$1(function(path)
  {
   var m,res;
   m=path.Segments;
   return m.$==1?(res=0,Numeric.TryParseInt64(m.$0,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];
  },function(value)
  {
   return{
    $:1,
    $0:[Route.Segment$2(Global.String(value))]
   };
  });
  SC$7.rUInt64=Router$1.New$1(function(path)
  {
   var m,res;
   m=path.Segments;
   return m.$==1?(res=0,Numeric.TryParseUInt64(m.$0,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];
  },function(value)
  {
   return{
    $:1,
    $0:[Route.Segment$2(Global.String(value))]
   };
  });
  SC$7.rSingle=Router$1.New$1(function(path)
  {
   var m,res,$1;
   m=path.Segments;
   return m.$==1?(res=0,($1=Global.Number(m.$0),Global.isNaN($1)?false:(res=$1,true))?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),res]]:[]):[];
  },function(value)
  {
   return{
    $:1,
    $0:[Route.Segment$2(Global.String(value))]
   };
  });
  SC$7.rBool=Router$1.New$1(function(path)
  {
   var m,m$1,o;
   m=path.Segments;
   return m.$==1?(m$1=(o=null,[Numeric.TryParseBool(m.$0,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o]),m$1[0]?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),m$1[1]]]:[]):[];
  },function(value)
  {
   return{
    $:1,
    $0:[Route.Segment$2(value?"True":"False")]
   };
  });
  SC$7.rWildcard=Router$1.New$1(function(path)
  {
   return[[Route.New(T$1.Empty,path.QueryArgs,path.FormData,path.Method,path.Body),Strings.concat("/",path.Segments)]];
  },function(value)
  {
   return{
    $:1,
    $0:[Route.Segment$2(value)]
   };
  });
  SC$7.rDateTime=Router$1.New$1(function(path)
  {
   var m,h,$1,$2,$3,$4,$5,$6,$7;
   m=path.Segments;
   return m.$==1?(h=m.$0,h.length===19&&h[4]==="-"&&h[7]==="-"&&h[10]==="-"&&h[13]==="."&&h[16]==="."?($1=pInt(Slice.string(h,{
    $:1,
    $0:0
   },{
    $:1,
    $0:3
   })),($2=pInt(Slice.string(h,{
    $:1,
    $0:5
   },{
    $:1,
    $0:6
   })),($3=pInt(Slice.string(h,{
    $:1,
    $0:8
   },{
    $:1,
    $0:9
   })),($4=pInt(Slice.string(h,{
    $:1,
    $0:11
   },{
    $:1,
    $0:12
   })),($5=pInt(Slice.string(h,{
    $:1,
    $0:14
   },{
    $:1,
    $0:15
   })),($6=pInt(Slice.string(h,{
    $:1,
    $0:17
   },{
    $:1,
    $0:18
   })),$1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3!=null&&$3.$==1&&($4!=null&&$4.$==1&&($5!=null&&$5.$==1&&($6!=null&&$6.$==1&&($7=[$3.$0,$4.$0,$2.$0,$5.$0,$6.$0,$1.$0],true))))))?[[Route.New(m.$1,path.QueryArgs,path.FormData,path.Method,path.Body),(new Date$1($7[5],$7[2]-1,$7[0],$7[1],$7[3],$7[4])).getTime()]]:[])))))):[]):[];
  },function(d)
  {
   var s,m;
   function pad2(x)
   {
    var s$1;
    s$1=Global.String(x);
    return s$1.length===1?"0"+s$1:s$1;
   }
   return{
    $:1,
    $0:[Route.Segment$2((s=Global.String((new Date$1(d)).getFullYear()),(m=s.length,m===1?"000"+s:m===2?"00"+s:m===3?"0"+s:s))+"-"+pad2((new Date$1(d)).getMonth()+1)+"-"+pad2((new Date$1(d)).getDate())+"-"+pad2((new Date$1(d)).getHours())+"."+pad2((new Date$1(d)).getMinutes())+"."+pad2((new Date$1(d)).getSeconds()))]
   };
  });
 };
 Map.OfArray=function(a)
 {
  return new FSharpMap.New$1(BalancedTree.OfSeq(Seq.map(function($1)
  {
   return Pair.New($1[0],$1[1]);
  },a)));
 };
 Map.FoldBack=function(f,m,s)
 {
  return Seq.fold(function(s$1,kv)
  {
   return f(kv.Key,kv.Value,s$1);
  },s,BalancedTree.Enumerate(true,m.get_Tree()));
 };
 Map.ToSeq=function(m)
 {
  return Seq.map(function(kv)
  {
   return[kv.Key,kv.Value];
  },BalancedTree.Enumerate(false,m.get_Tree()));
 };
 Queue.Clear=function(a)
 {
  a.splice(0,Arrays.length(a));
 };
 SC$8.$cctor=function()
 {
  SC$8.$cctor=Global.ignore;
  SC$8.Doc=self.document;
 };
 SC$9.$cctor=function()
 {
  SC$9.$cctor=Global.ignore;
  SC$9.EmptyAttr=null;
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
    return new T.New(null,null,function(e$1)
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
    return new T.New(null,null,function(en)
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
  SC$11.$cctor();
  return SC$11.UseAnimations;
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
  xs$1=Array$1.ofSeqNonCopying(xs);
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
 SC$10.$cctor=function()
 {
  SC$10.$cctor=Global.ignore;
  SC$10.BatchUpdatesEnabled=true;
 };
 Char.IsUpper=function(c)
 {
  return c>="A"&&c<="Z";
 };
 Char.Parse=function(s)
 {
  return s.length===1?s:Operators.FailWith("String must be exactly one character long.");
 };
 Char.IsWhiteSpace=function(c)
 {
  return c.match(new Global.RegExp("\\s"))!==null;
 };
 FormatException=WebSharper.FormatException=Runtime$1.Class({},Error,FormatException);
 FormatException.New$1=Runtime$1.Ctor(function(message)
 {
  this.message=message;
  Object.setPrototypeOf(this,FormatException.prototype);
 },FormatException);
 Router$1.New=function(Parse,Segment)
 {
  return{
   Parse:Parse,
   Segment:Segment
  };
 };
 StringEncoding.read=function(s)
 {
  var buf;
  buf=[];
  return function(chars)
  {
   var m;
   while(true)
    {
     m=StringEncoding.readEscapedFromChars(chars);
     if(m[0]===-2)
      return null;
     else
      if(m[0]===-1)
       return{
        $:1,
        $0:(function(s$1)
        {
         return function(s$2)
         {
          return Strings.concat(s$1,s$2);
         };
        }(""))(buf)
       };
      else
       {
        buf.push(String$2.fromCharCode(m[0]));
        chars=m[1];
       }
    }
  }(List.ofSeq(Seq.map(function(v)
  {
   return v.charCodeAt();
  },s)));
 };
 StringEncoding.write=function(s)
 {
  return Strings.concat("",Seq.mapi(function(i,c)
  {
   return StringEncoding.writeEscapedAsString(i+1===s.length,c);
  },s));
 };
 StringEncoding.readEscapedFromChars=function(chars)
 {
  var chars$1,m,m$1,a,b,c,d,y;
  function read()
  {
   var t,h;
   return chars$1.$==1?(t=chars$1.$1,(h=chars$1.$0,(chars$1=t,h))):-1;
  }
  function hex(x)
  {
   return x>="0".charCodeAt()&&x<="9".charCodeAt()?x-"0".charCodeAt():x>="a".charCodeAt()&&x<="f".charCodeAt()?x-"a".charCodeAt()+10:x>="A".charCodeAt()&&x<="F".charCodeAt()?x-"A".charCodeAt()+10:-2;
  }
  chars$1=chars;
  return[(m=read(),m==="~".charCodeAt()?(m$1=read(),m$1==="u".charCodeAt()?(a=read(),(b=read(),(c=read(),(d=read(),a>=0&&b>=0&&c>=0&&d>=0?StringEncoding.op_PlusPlus(StringEncoding.op_PlusPlus(StringEncoding.op_PlusPlus(hex(a),hex(b)),hex(c)),hex(d)):-2)))):(y=read(),m$1>=0&&y>=0?StringEncoding.op_PlusPlus(hex(m$1),hex(y)):-2)):m),chars$1];
 };
 StringEncoding.writeEscapedAsString=function(isLast,c)
 {
  var k;
  k=c.charCodeAt();
  return StringEncoding.isUnreserved(isLast,c)?c:k<256?"~"+Strings.PadLeftWith(k.toString(16),2,"0"):"~u"+Strings.PadLeftWith(k.toString(16),4,"0");
 };
 StringEncoding.op_PlusPlus=function(a,b)
 {
  return(a<<4)+b;
 };
 StringEncoding.isUnreserved=function(isLast,c)
 {
  return c==="-"||(c==="."?!isLast:c==="_"||(c>="A"&&c<="Z"||(c>="a"&&c<="z"||c>="0"&&c<="9")));
 };
 Numeric.TryParseSByte=function(s,r)
 {
  return Numeric.TryParse(s,-128,127,r);
 };
 Numeric.TryParseByte=function(s,r)
 {
  return Numeric.TryParse(s,0,255,r);
 };
 Numeric.TryParseInt16=function(s,r)
 {
  return Numeric.TryParse(s,-32768,32767,r);
 };
 Numeric.TryParseUInt16=function(s,r)
 {
  return Numeric.TryParse(s,0,65535,r);
 };
 Numeric.TryParseUInt32=function(s,r)
 {
  return Numeric.TryParse(s,0,4294967295,r);
 };
 Numeric.TryParseUInt64=function(s,r)
 {
  return Numeric.TryParse(s,0,18446744073709551615,r);
 };
 String$1.isBlank=function(s)
 {
  return Strings.forall(Char.IsWhiteSpace,s);
 };
 SC$11.$cctor=function()
 {
  SC$11.$cctor=Global.ignore;
  SC$11.CubicInOut=Easing.Custom(function(t)
  {
   var t2;
   t2=t*t;
   return 3*t2-2*(t2*t);
  });
  SC$11.UseAnimations=true;
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
  x=Array$1.ofSeqNonCopying(xs);
  return Array$1.TreeReduce(AppendList.Empty(),AppendList.Append,x);
 };
 AppendList.Empty=function()
 {
  SC$12.$cctor();
  return SC$12.Empty;
 };
 LinkedListEnumerator=Collections.LinkedListEnumerator=Runtime$1.Class({
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
 LinkedListEnumerator.New=Runtime$1.Ctor(function(l)
 {
  Obj.New.call(this);
  this.c=l;
 },LinkedListEnumerator);
 PathUtil.WriteLink=function(s,q)
 {
  var query;
  query=q.get_IsEmpty()?"":"?"+PathUtil.WriteQuery(q);
  return"/"+PathUtil.Concat(s)+query;
 };
 PathUtil.Concat=function(xs)
 {
  var sb,start;
  sb=[];
  start=true;
  List.iter(function(x)
  {
   if(!Strings.IsNullOrEmpty(x))
    {
     start?start=false:sb.push("/");
     sb.push(x);
    }
  },xs);
  return Strings.Join("",Arrays.ofSeq(sb));
 };
 PathUtil.WriteQuery=function(q)
 {
  function m(k,v)
  {
   return k+"="+v;
  }
  return Strings.concat("&",Seq.map(function($1)
  {
   return m($1[0],$1[1]);
  },Map.ToSeq(q)));
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
   $0:Array$1.ofSeqNonCopying(q)
  };
 };
 SC$12.$cctor=function()
 {
  SC$12.$cctor=Global.ignore;
  SC$12.Empty={
   $:0
  };
 };
 Runtime$1.OnLoad(function()
 {
  MainProgram.mainProgram();
 });
}());


if (typeof IntelliFactory !=='undefined') {
  IntelliFactory.Runtime.ScriptBasePath = '/Content/';
  IntelliFactory.Runtime.Start();
}
//# sourceMappingURL=ProzperServer.map

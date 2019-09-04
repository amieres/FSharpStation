(function()
{
 "use strict";
 var Global,FsRoot,Library,Dict,ResultMessage,ResultMessageHelpers,Monads,Seq,Async,WebSharper,Obj,Result,Builder,Operators,BuilderP,Eff,Eff$1,Done,EffBuilder,EA,Log,LogEntry,Rsl,Fail,Asy,Asyn,AsyncResult,AsyncResultBuilder,AsyncResultBuilderP,Extensions,String,Array,SortWith,MailboxProcessorExt,Mailbox,StateFull,LibraryJS,Var,ListModel,Pojo,Date,REGEX,Msal,Policy,AuthOptions,CacheOptions,SystemOptions,FrameworkOptions,Configuration,Account,AuthResponse,AuthError,AuthenticationParameters,ProzperServer,ClientSide,Templating,Msal$1,ModeloUI,EndPoint,Rpc,Refresh,VariousUI,CorreoElectronico,Telefono,Direccion,CuentaBancaria,TarjetaCredito,DatosPersonales,FormaRegistro,FormaDatos,FormaContactos,FormaFirma,FormaAutorizacion,FormaContrato,FormaFormasPago,RenderAliados,RenderAliado,Transacciones,ListaDocs,Pendientes,Enlace,ReporteConsolidado,TablaPagos,Calculado,KeylessList,AF,Calculado$1,Aliado,MainProgram,SC$1,prozperDes$js_GeneratedPrintf,prozperDes$js_Templates,prozperDes$js_Router,IntelliFactory,Runtime,Utils,Strings,Seq$1,List,Arrays,Concurrency,Enumerator,Result$1,Operators$1,Unchecked,console,Slice,Control,MailboxProcessor,Char,UI,View,Var$1,FromView,Doc,JavaScript,Promise,Remoting,AjaxRemotingProvider,TypesV0,AttrProxy,Var$2,Templating$1,Runtime$1,Server,ProviderBuilder,Handler,TemplateInstance,CorreoElectronico$1,TipoTelefono,Telefono$1,TipoDireccion,Estado,Pais,ZonaPostal,Direccion$1,AttrModule,TipoCuenta,CuentaBancaria$1,TipoTarjeta,TarjetaCredito$1,Expiracion,ParseO,Genero,DatosPersonales$1,System,Guid,$,Archivo,Date$1,Aliado$1,Collections,FSharpSet,FormaPago,ProzperServer_GeneratedPrintf,ListModel$1,StatusArchivo,TipoArchivo,Aliado$2,StatusAliado,Lazy,AppFramework,PlugIn,LayoutEngineModule,Client,Templates,Modelo,Router,Rpc0,Sitelets,RouterOperators;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 Dict=Library.Dict=Library.Dict||{};
 ResultMessage=Library.ResultMessage=Library.ResultMessage||{};
 ResultMessageHelpers=Library.ResultMessageHelpers=Library.ResultMessageHelpers||{};
 Monads=Library.Monads=Library.Monads||{};
 Seq=Monads.Seq=Monads.Seq||{};
 Async=Monads.Async=Monads.Async||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 Result=Monads.Result=Monads.Result||{};
 Builder=Result.Builder=Result.Builder||{};
 Operators=Result.Operators=Result.Operators||{};
 BuilderP=Result.BuilderP=Result.BuilderP||{};
 Eff=Monads.Eff=Monads.Eff||{};
 Eff$1=Eff.Eff=Eff.Eff||{};
 Done=Eff.Done=Eff.Done||{};
 EffBuilder=Eff.EffBuilder=Eff.EffBuilder||{};
 EA=Eff.EA=Eff.EA||{};
 Log=Eff.Log=Eff.Log||{};
 LogEntry=Log.LogEntry=Log.LogEntry||{};
 Rsl=Eff.Rsl=Eff.Rsl||{};
 Fail=Rsl.Fail=Rsl.Fail||{};
 Asy=Eff.Asy=Eff.Asy||{};
 Asyn=Asy.Asyn=Asy.Asyn||{};
 AsyncResult=Monads.AsyncResult=Monads.AsyncResult||{};
 AsyncResultBuilder=Monads.AsyncResultBuilder=Monads.AsyncResultBuilder||{};
 AsyncResultBuilderP=Monads.AsyncResultBuilderP=Monads.AsyncResultBuilderP||{};
 Extensions=Monads.Extensions=Monads.Extensions||{};
 String=Library.String=Library.String||{};
 Array=Library.Array=Library.Array||{};
 SortWith=Library.SortWith=Library.SortWith||{};
 MailboxProcessorExt=Library.MailboxProcessorExt=Library.MailboxProcessorExt||{};
 Mailbox=Library.Mailbox=Library.Mailbox||{};
 StateFull=Mailbox.StateFull=Mailbox.StateFull||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Var=LibraryJS.Var=LibraryJS.Var||{};
 ListModel=LibraryJS.ListModel=LibraryJS.ListModel||{};
 Pojo=LibraryJS.Pojo=LibraryJS.Pojo||{};
 Date=LibraryJS.Date=LibraryJS.Date||{};
 REGEX=LibraryJS.REGEX=LibraryJS.REGEX||{};
 Msal=LibraryJS.Msal=LibraryJS.Msal||{};
 Policy=Msal.Policy=Msal.Policy||{};
 AuthOptions=Msal.AuthOptions=Msal.AuthOptions||{};
 CacheOptions=Msal.CacheOptions=Msal.CacheOptions||{};
 SystemOptions=Msal.SystemOptions=Msal.SystemOptions||{};
 FrameworkOptions=Msal.FrameworkOptions=Msal.FrameworkOptions||{};
 Configuration=Msal.Configuration=Msal.Configuration||{};
 Account=Msal.Account=Msal.Account||{};
 AuthResponse=Msal.AuthResponse=Msal.AuthResponse||{};
 AuthError=Msal.AuthError=Msal.AuthError||{};
 AuthenticationParameters=Msal.AuthenticationParameters=Msal.AuthenticationParameters||{};
 ProzperServer=FsRoot.ProzperServer=FsRoot.ProzperServer||{};
 ClientSide=ProzperServer.ClientSide=ProzperServer.ClientSide||{};
 Templating=ClientSide.Templating=ClientSide.Templating||{};
 Msal$1=ClientSide.Msal=ClientSide.Msal||{};
 ModeloUI=ClientSide.ModeloUI=ClientSide.ModeloUI||{};
 EndPoint=ModeloUI.EndPoint=ModeloUI.EndPoint||{};
 Rpc=ModeloUI.Rpc=ModeloUI.Rpc||{};
 Refresh=ModeloUI.Refresh=ModeloUI.Refresh||{};
 VariousUI=ModeloUI.VariousUI=ModeloUI.VariousUI||{};
 CorreoElectronico=ModeloUI.CorreoElectronico=ModeloUI.CorreoElectronico||{};
 Telefono=ModeloUI.Telefono=ModeloUI.Telefono||{};
 Direccion=ModeloUI.Direccion=ModeloUI.Direccion||{};
 CuentaBancaria=ModeloUI.CuentaBancaria=ModeloUI.CuentaBancaria||{};
 TarjetaCredito=ModeloUI.TarjetaCredito=ModeloUI.TarjetaCredito||{};
 DatosPersonales=ModeloUI.DatosPersonales=ModeloUI.DatosPersonales||{};
 FormaRegistro=ModeloUI.FormaRegistro=ModeloUI.FormaRegistro||{};
 FormaDatos=ModeloUI.FormaDatos=ModeloUI.FormaDatos||{};
 FormaContactos=ModeloUI.FormaContactos=ModeloUI.FormaContactos||{};
 FormaFirma=ModeloUI.FormaFirma=ModeloUI.FormaFirma||{};
 FormaAutorizacion=ModeloUI.FormaAutorizacion=ModeloUI.FormaAutorizacion||{};
 FormaContrato=ModeloUI.FormaContrato=ModeloUI.FormaContrato||{};
 FormaFormasPago=ModeloUI.FormaFormasPago=ModeloUI.FormaFormasPago||{};
 RenderAliados=ModeloUI.RenderAliados=ModeloUI.RenderAliados||{};
 RenderAliado=ModeloUI.RenderAliado=ModeloUI.RenderAliado||{};
 Transacciones=ModeloUI.Transacciones=ModeloUI.Transacciones||{};
 ListaDocs=ModeloUI.ListaDocs=ModeloUI.ListaDocs||{};
 Pendientes=ModeloUI.Pendientes=ModeloUI.Pendientes||{};
 Enlace=Pendientes.Enlace=Pendientes.Enlace||{};
 ReporteConsolidado=ModeloUI.ReporteConsolidado=ModeloUI.ReporteConsolidado||{};
 TablaPagos=ModeloUI.TablaPagos=ModeloUI.TablaPagos||{};
 Calculado=ModeloUI.Calculado=ModeloUI.Calculado||{};
 KeylessList=Calculado.KeylessList=Calculado.KeylessList||{};
 AF=Calculado.AF=Calculado.AF||{};
 Calculado$1=Calculado.Calculado=Calculado.Calculado||{};
 Aliado=ModeloUI.Aliado=ModeloUI.Aliado||{};
 MainProgram=ClientSide.MainProgram=ClientSide.MainProgram||{};
 SC$1=Global.StartupCode$prozperDes_js$prozperDes_js=Global.StartupCode$prozperDes_js$prozperDes_js||{};
 prozperDes$js_GeneratedPrintf=Global.prozperDes$js_GeneratedPrintf=Global.prozperDes$js_GeneratedPrintf||{};
 prozperDes$js_Templates=Global.prozperDes$js_Templates=Global.prozperDes$js_Templates||{};
 prozperDes$js_Router=Global.prozperDes$js_Router=Global.prozperDes$js_Router||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Utils=WebSharper&&WebSharper.Utils;
 Strings=WebSharper&&WebSharper.Strings;
 Seq$1=WebSharper&&WebSharper.Seq;
 List=WebSharper&&WebSharper.List;
 Arrays=WebSharper&&WebSharper.Arrays;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 Result$1=WebSharper&&WebSharper.Result;
 Operators$1=WebSharper&&WebSharper.Operators;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 console=Global.console;
 Slice=WebSharper&&WebSharper.Slice;
 Control=WebSharper&&WebSharper.Control;
 MailboxProcessor=Control&&Control.MailboxProcessor;
 Char=WebSharper&&WebSharper.Char;
 UI=WebSharper&&WebSharper.UI;
 View=UI&&UI.View;
 Var$1=UI&&UI.Var;
 FromView=UI&&UI.FromView;
 Doc=UI&&UI.Doc;
 JavaScript=WebSharper&&WebSharper.JavaScript;
 Promise=JavaScript&&JavaScript.Promise;
 Remoting=WebSharper&&WebSharper.Remoting;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 TypesV0=ProzperServer&&ProzperServer.TypesV0;
 AttrProxy=UI&&UI.AttrProxy;
 Var$2=UI&&UI.Var$1;
 Templating$1=UI&&UI.Templating;
 Runtime$1=Templating$1&&Templating$1.Runtime;
 Server=Runtime$1&&Runtime$1.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 CorreoElectronico$1=TypesV0&&TypesV0.CorreoElectronico;
 TipoTelefono=TypesV0&&TypesV0.TipoTelefono;
 Telefono$1=TypesV0&&TypesV0.Telefono;
 TipoDireccion=TypesV0&&TypesV0.TipoDireccion;
 Estado=TypesV0&&TypesV0.Estado;
 Pais=TypesV0&&TypesV0.Pais;
 ZonaPostal=TypesV0&&TypesV0.ZonaPostal;
 Direccion$1=TypesV0&&TypesV0.Direccion;
 AttrModule=UI&&UI.AttrModule;
 TipoCuenta=TypesV0&&TypesV0.TipoCuenta;
 CuentaBancaria$1=TypesV0&&TypesV0.CuentaBancaria;
 TipoTarjeta=TypesV0&&TypesV0.TipoTarjeta;
 TarjetaCredito$1=TypesV0&&TypesV0.TarjetaCredito;
 Expiracion=TypesV0&&TypesV0.Expiracion;
 ParseO=Library&&Library.ParseO;
 Genero=TypesV0&&TypesV0.Genero;
 DatosPersonales$1=TypesV0&&TypesV0.DatosPersonales;
 System=Global.System;
 Guid=System&&System.Guid;
 $=Global.jQuery;
 Archivo=TypesV0&&TypesV0.Archivo;
 Date$1=Global.Date;
 Aliado$1=ProzperServer&&ProzperServer.Aliado;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpSet=Collections&&Collections.FSharpSet;
 FormaPago=TypesV0&&TypesV0.FormaPago;
 ProzperServer_GeneratedPrintf=Global.ProzperServer_GeneratedPrintf;
 ListModel$1=UI&&UI.ListModel;
 StatusArchivo=TypesV0&&TypesV0.StatusArchivo;
 TipoArchivo=TypesV0&&TypesV0.TipoArchivo;
 Aliado$2=TypesV0&&TypesV0.Aliado;
 StatusAliado=TypesV0&&TypesV0.StatusAliado;
 Lazy=WebSharper&&WebSharper.Lazy;
 AppFramework=LibraryJS&&LibraryJS.AppFramework;
 PlugIn=AppFramework&&AppFramework.PlugIn;
 LayoutEngineModule=LibraryJS&&LibraryJS.LayoutEngineModule;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Modelo=TypesV0&&TypesV0.Modelo;
 Router=UI&&UI.Router;
 Rpc0=ProzperServer&&ProzperServer.Rpc0;
 Sitelets=WebSharper&&WebSharper.Sitelets;
 RouterOperators=Sitelets&&Sitelets.RouterOperators;
 Dict.add$1=function(key,v,dict)
 {
  if(dict.ContainsKey(key))
   dict.set_Item(key,v);
  else
   dict.Add(key,v);
 };
 ResultMessage=Library.ResultMessage=Runtime.Class({
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
   }(Global.id))(this.$0):this.$==5?(((Runtime.Curried3(function($1,$2,$3)
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
 ResultMessage.summarizedI=function(msg)
 {
  return ResultMessage.summarizedF(function()
  {
   return[0,0,1];
  },msg);
 };
 ResultMessage.summarizedW=function(msg)
 {
  return ResultMessage.summarizedF(function()
  {
   return[0,1,0];
  },msg);
 };
 ResultMessage.summarized=function(msg)
 {
  return ResultMessage.summarizedF(function()
  {
   return[1,0,0];
  },msg);
 };
 ResultMessage.summarizedF=function(f,msg)
 {
  return Strings.concat("\n",Seq$1.filter(function(y)
  {
   return""!==y;
  },List.ofArray([Global.String(msg),ResultMessage.summaryF(f,msg)])));
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
    return(((Runtime.Curried3(function($2,$3,$4)
    {
     return $2("Errors   : "+Global.String($3)+", Warnings: "+Global.String($4)+"\n");
    }))(Global.id))($1[0]))($1[1]);
  }
 };
 ResultMessage.reduceMsgs=function(ms)
 {
  return Seq$1.fold(ResultMessage.addMsg,ResultMessage.NoMsg,ms);
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
 ResultMessage.countI=function(msg)
 {
  return ResultMessage.countF(function()
  {
   return[0,0,1];
  },msg);
 };
 ResultMessage.countW=function(msg)
 {
  return ResultMessage.countF(function()
  {
   return[0,1,0];
  },msg);
 };
 ResultMessage.count=function(msg)
 {
  return ResultMessage.countF(function()
  {
   return[1,0,0];
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
 ResultMessage.isFatalW=function(msg)
 {
  return ResultMessage.isFatalF(function()
  {
   return false;
  },msg);
 };
 ResultMessage.isFatal=function(msg)
 {
  return ResultMessage.isFatalF(function()
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
 ResultMessage.isWarningOrInfoW=function(msg)
 {
  return ResultMessage.isWarningOrInfoF(function()
  {
   return true;
  },msg);
 };
 ResultMessage.isWarningOrInfo=function(msg)
 {
  return ResultMessage.isWarningOrInfoF(function()
  {
   return false;
  },msg);
 };
 ResultMessage.isWarningOrInfoF=function(f,msg)
 {
  return msg.$==2||(msg.$==4?f(msg.$0):msg.$==6&&Seq$1.forall(function(m)
  {
   return ResultMessage.isWarningOrInfoF(f,m)||ResultMessage.isInfoF(f,m);
  },ResultMessage.exclnoMsg(msg.$0)));
 };
 ResultMessage.isInfoI=function(msg)
 {
  return ResultMessage.isInfoF(function()
  {
   return true;
  },msg);
 };
 ResultMessage.isInfo=function(msg)
 {
  return ResultMessage.isInfoF(function()
  {
   return false;
  },msg);
 };
 ResultMessage.isInfoF=function(f,msg)
 {
  return msg.$==3||(msg.$==4?f(msg.$0):msg.$==6&&Seq$1.forall(function(m)
  {
   return ResultMessage.isInfoF(f,m);
  },ResultMessage.exclnoMsg(msg.$0)));
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
 ResultMessage.freeMessageF=function(f,msg)
 {
  return ResultMessage.bindMessage(f,msg);
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
 ResultMessage.noMsg=function(msg)
 {
  return msg.$==0;
 };
 Seq.ofOption$1=function(vO)
 {
  return vO==null?[]:[vO.$0];
 };
 Seq.absorbR$1=function(vOS)
 {
  return Seq$1.choose(function(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  },vOS);
 };
 Seq.absorbO$1=function(vOS)
 {
  return Seq$1.choose(Global.id,vOS);
 };
 Seq.insertR$1=function(vSR)
 {
  return vSR.$==0?Seq$1.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vSR.$0):(Seq.rtn$1())(Library.Error$1(vSR.$0));
 };
 Seq.insertO$1=function(vSO)
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
  return o==null?(Seq.rtn$1())(null):o.$0;
 };
 Seq.rtn$1=function()
 {
  SC$1.$cctor();
  return SC$1.rtn;
 };
 Async.insertR$1=function(vAR)
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
  }):Concurrency.Return(Library.Error$1(vAR.$0));
 };
 Async.insertO$1=function(vAO)
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
 Async.sequenceSeq$1=function(sq)
 {
  return Async.traverseSeq$1(Global.id,sq);
 };
 Async.traverseSeq$1=function(f,sq)
 {
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(Arrays.foldBack(function(head,tail)
  {
   return Async.op_GreaterGreaterEquals$1(f(head),function(h)
   {
    return Async.op_GreaterGreaterEquals$1(tail,function(t)
    {
     return Concurrency.Return(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),Concurrency.Return(List.T.Empty)),function(x)
  {
   return g(Global.id(x));
  });
 };
 Async.op_GreaterGreaterEquals$1=function(v,f)
 {
  return Concurrency.Bind(v,f);
 };
 Async.sleepThen$1=function(f,milliseconds)
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
 Async.apply$1=function(fA,vA)
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
    },body$1()):Result.rtn$1();
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
   return Result.rtn$1();
  },
  Bind:function(w,r)
  {
   return Result$1.Bind(r,w);
  },
  ReturnFrom:Global.id,
  Return:function(x)
  {
   return Result.rtn$1(x);
  }
 },Obj,Builder);
 Builder.New$1=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder);
 Operators.result$1=function()
 {
  SC$1.$cctor();
  return SC$1.result$1;
 };
 Operators.rtn$1=function(v)
 {
  return Result.rtn$1(v);
 };
 Operators.op_GreaterEqualsGreater$1=function(f,g,v)
 {
  return Operators.op_GreaterGreaterEquals$1(f(v),g);
 };
 Operators.op_RightShift$1=function(f,g,v)
 {
  return Operators.op_BarGreaterGreater$1(f(v),g);
 };
 Operators.op_GreaterGreaterEquals$1=function(v,f)
 {
  return Result$1.Bind(f,v);
 };
 Operators.op_BarGreaterGreater$1=function(v,f)
 {
  return Result$1.Map(f,v);
 };
 BuilderP=Result.BuilderP=Runtime.Class({
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
    },body$1()):Result.rtn$1();
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
   return Result.bindP(f,{
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
   return Result.rtn$1();
  },
  Bind:function(w,r)
  {
   return Result$1.Bind(r,w);
  },
  ReturnFrom:Global.id,
  Return:function(x)
  {
   return Result.rtn$1(x);
  }
 },Obj,BuilderP);
 BuilderP.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },BuilderP);
 Result.resultP=function()
 {
  SC$1.$cctor();
  return SC$1.resultP;
 };
 Result.iterP=function(fE,f,r)
 {
  Result.defaultWith$1(fE,Result.mapP(f,r));
 };
 Result.mapP=function(f,m)
 {
  return Result.bindP(function(x)
  {
   return Result.rtn$1(f(x));
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
     $:5,
     $0:e.message,
     $1:e.stack
    }));
   }
 };
 Result.freeMessage=function(r)
 {
  return r.$==1?Library.Error$1(ResultMessage.freeMessage(r.$0)):{
   $:0,
   $0:r.$0
  };
 };
 Result.result$1=function()
 {
  SC$1.$cctor();
  return SC$1.result;
 };
 Result.sequenceSeq$1=function(sq)
 {
  return Result.traverseSeq$1(Global.id,sq);
 };
 Result.traverseSeq$1=function(f,sq)
 {
  return Result$1.Map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return Result.op_GreaterGreaterEquals$1(f(head),function(h)
   {
    return Result.op_GreaterGreaterEquals$1(tail,function(t)
    {
     return Result.rtn$1(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),Result.rtn$1(List.T.Empty)));
 };
 Result.op_GreaterGreaterEquals$1=function(r,f)
 {
  return Result$1.Bind(f,r);
 };
 Result.absorbO$1=function(f,vOR)
 {
  return Result$1.Bind(function(v)
  {
   return Result.ofOption$1(f,v);
  },vOR);
 };
 Result.insertO$1=function(vRO)
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
 Result.ofOption$1=function(f,vO)
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
 Result.get$1=function(r)
 {
  return Result.defaultWith$1(function(x)
  {
   return Operators$1.FailWith(Global.String(x));
  },r);
 };
 Result.iter$1=function(fE,f,r)
 {
  Result.defaultWith$1(fE,Result$1.Map(f,r));
 };
 Result.failIfFalse$1=function(m,v)
 {
  return!v?Library.Error$1(m):{
   $:0,
   $0:null
  };
 };
 Result.failIfTrue$1=function(m,v)
 {
  return v?Library.Error$1(m):{
   $:0,
   $0:null
  };
 };
 Result.defaultValue$1=function(d,r)
 {
  return r.$==1?d:r.$0;
 };
 Result.defaultWith$1=function(f,r)
 {
  return r.$==1?f(r.$0):r.$0;
 };
 Result.toOption$1=function(r)
 {
  return r.$==0?{
   $:1,
   $0:r.$0
  }:null;
 };
 Result.flatten$1=function(r)
 {
  return Result$1.Bind(Global.id,r);
 };
 Result.join$1=function(r)
 {
  return Result$1.Bind(Global.id,r);
 };
 Result.rtn$1=function(a)
 {
  return{
   $:0,
   $0:a
  };
 };
 Result.errorf$1=function(fmt)
 {
  return fmt(Library.Error$1);
 };
 Eff$1=Eff.Eff=Runtime.Class({
  get_Create:function()
  {
   return this.$0;
  }
 },null,Eff$1);
 Done=Eff.Done=Runtime.Class({
  get_Value:function()
  {
   return this.v;
  },
  FsRoot_Library_Monads_Eff_Effect$Extend:function(a)
  {
   return this;
  }
 },Obj,Done);
 Done.New$1=Runtime.Ctor(function(v)
 {
  Obj.New.call(this);
  this.v=v;
 },Done);
 EffBuilder=Eff.EffBuilder=Runtime.Class({
  For:function(s,fEf)
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
     return fEf(_enum.Current());
    }));
   });
  },
  While:function(guard,fEf)
  {
   return Eff.whileLoop$1(guard,fEf);
  },
  Using:function(disposable,body)
  {
   return this.TryFinally(function()
   {
    return body(disposable);
   },function()
   {
    if(!Unchecked.Equals(disposable,null))
     disposable.Dispose();
   });
  },
  TryFinally:function(body,compensation)
  {
   var $1;
   try
   {
    $1=body();
   }
   catch(e)
   {
    compensation();
    throw e;
   }
   return Eff.op_BarGreaterGreaterBang$1($1,function()
   {
    compensation();
   });
  },
  TryWith:function(body,handler)
  {
   return new Eff$1({
    $:0,
    $0:function(k)
    {
     try
     {
      return body().$0(k);
     }
     catch(e)
     {
      return handler(e).$0(k);
     }
    }
   });
  },
  Run:function(fEf)
  {
   return Eff.bind$1(fEf,Eff.rtn$1());
  },
  Delay:Global.id,
  Combine:function(vEf,fEf)
  {
   return Eff.bind$1(fEf,vEf);
  },
  Bind:function(vEf,fEf)
  {
   return Eff.bind$1(fEf,vEf);
  },
  Zero:function()
  {
   return Eff.rtn$1();
  },
  Return:function(v)
  {
   return Eff.rtn$1(v);
  },
  ReturnFrom:Global.id
 },Obj,EffBuilder);
 EffBuilder.New$1=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },EffBuilder);
 EA.tee$1=function(f,v)
 {
  return Eff.map$1(function()
  {
   return v;
  },f(v));
 };
 LogEntry=Log.LogEntry=Runtime.Class({
  get_K:function()
  {
   return this.k;
  },
  get_Value:function()
  {
   return this.v;
  },
  FsRoot_Library_Monads_Eff_Effect$Extend:function(extension)
  {
   var f;
   return new LogEntry.New$1(this.v,(f=this.k,function(x)
   {
    return extension(f(x));
   }));
  }
 },Obj,LogEntry);
 LogEntry.New$1=Runtime.Ctor(function(v,k)
 {
  Obj.New.call(this);
  this.v=v;
  this.k=k;
 },LogEntry);
 Log.loggerLogHandler3$1=function(logger,eff)
 {
  return Log.loggerLogHandler0$1(logger,eff);
 };
 Log.loggerLogHandler2$1=function(logger,eff)
 {
  return Log.loggerLogHandler0$1(logger,eff);
 };
 Log.loggerLogHandler$1=function(logger,eff)
 {
  return Log.loggerLogHandler0$1(logger,eff);
 };
 Log.consoleLogHandler3$1=function(eff)
 {
  return Log.consoleLogHandler0$1(eff);
 };
 Log.consoleLogHandler2$1=function(eff)
 {
  return Log.consoleLogHandler0$1(eff);
 };
 Log.consoleLogHandler$1=function(eff)
 {
  return Log.consoleLogHandler0$1(eff);
 };
 Log.pureLogHandler3$1=function(eff)
 {
  return Log.pureLogHandler0$1(eff);
 };
 Log.pureLogHandler2$1=function(eff)
 {
  return Log.pureLogHandler0$1(eff);
 };
 Log.pureLogHandler$1=function(eff)
 {
  return Log.pureLogHandler0$1(eff);
 };
 Log.loggerLogHandler0$1=function(logger,eff)
 {
  function loop(exitK,a)
  {
   return a instanceof Done?exitK(a.get_Value()):a instanceof LogEntry?(logger(a.get_Value()),loop(exitK,(a.get_K())())):a.FsRoot_Library_Monads_Eff_Effect$Extend(function($1)
   {
    return loop(exitK,$1);
   });
  }
  return new Eff$1({
   $:0,
   $0:function(exitK)
   {
    return loop(exitK,(eff.get_Create())(Eff["done'$1"]));
   }
  });
 };
 Log.consoleLogHandler0$1=function(eff)
 {
  function loop(exitK,a)
  {
   return a instanceof Done?exitK(a.get_Value()):a instanceof LogEntry?((function($1)
   {
    return function($2)
    {
     return $1("Log: "+Utils.prettyPrint($2));
    };
   }(function(s)
   {
    console.log(s);
   }))(a.get_Value()),loop(exitK,(a.get_K())())):a.FsRoot_Library_Monads_Eff_Effect$Extend(function($1)
   {
    return loop(exitK,$1);
   });
  }
  return new Eff$1({
   $:0,
   $0:function(exitK)
   {
    return loop(exitK,(eff.get_Create())(Eff["done'$1"]));
   }
  });
 };
 Log.pureLogHandler0$1=function(eff)
 {
  function loop(exitK,ls,a)
  {
   var x;
   return a instanceof Done?exitK([a.get_Value(),ls]):a instanceof LogEntry?(x=(a.get_K())(),loop(exitK,new List.T({
    $:1,
    $0:a.get_Value(),
    $1:ls
   }),x)):a.FsRoot_Library_Monads_Eff_Effect$Extend(function($1)
   {
    return loop(exitK,ls,$1);
   });
  }
  return new Eff$1({
   $:0,
   $0:function(exitK)
   {
    return loop(exitK,List.T.Empty,(eff.get_Create())(Eff["done'$1"]));
   }
  });
 };
 Log.log3$1=function(s)
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new LogEntry.New$1(s,k);
   }
  });
 };
 Log.log2$1=function(s)
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new LogEntry.New$1(s,k);
   }
  });
 };
 Log.logf$1=function(fmt)
 {
  return fmt(Log.log$1);
 };
 Log.log$1=function(s)
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new LogEntry.New$1(s,k);
   }
  });
 };
 Fail=Rsl.Fail=Runtime.Class({
  get_K:function()
  {
   return this.k;
  },
  get_Value:function()
  {
   return this.v;
  },
  FsRoot_Library_Monads_Eff_Rsl_IRsl_1$get_Value:function()
  {
   return this.v;
  },
  FsRoot_Library_Monads_Eff_Effect$Extend:function(extension)
  {
   var f;
   return new Fail.New$1(this.v,(f=this.k,function(x)
   {
    return extension(f(x));
   }));
  }
 },Obj,Fail);
 Fail.New$1=Runtime.Ctor(function(v,k)
 {
  Obj.New.call(this);
  this.v=v;
  this.k=k;
 },Fail);
 Rsl.absorbO$1=function(f,vOEf)
 {
  return Rsl.absorbR$1(Eff.map$1(function(v)
  {
   return Result.ofOption$1(f,v);
  },vOEf));
 };
 Rsl.absorbR$1=function(vvEf)
 {
  return Eff.bind$1(Rsl.ofResult$1,vvEf);
 };
 Rsl.getResult$1=function(v)
 {
  return Rsl.rslHandler$1(v);
 };
 Rsl.rslHandler$1=function(eff)
 {
  function loop(exitK,a)
  {
   return a instanceof Done?exitK({
    $:0,
    $0:a.get_Value()
   }):typeof a=="object"&&"FsRoot_Library_Monads_Eff_Rsl_IRsl_1$get_Value"in a?exitK(Library.Error$1(a.FsRoot_Library_Monads_Eff_Rsl_IRsl_1$get_Value())):a.FsRoot_Library_Monads_Eff_Effect$Extend(function($1)
   {
    return loop(exitK,$1);
   });
  }
  return new Eff$1({
   $:0,
   $0:function(exitK)
   {
    return loop(exitK,(eff.get_Create())(Eff["done'$1"]));
   }
  });
 };
 Rsl.ofResult$1=function(res)
 {
  var b;
  b=Eff.eff$1();
  return b.Run(b.Delay(function()
  {
   return res.$==1?b.Bind(Rsl.fail$1(res.$0),function()
   {
    return b.Return(Operators$1.FailWith("this code should be unreachable"));
   }):b.Return(res.$0);
  }));
 };
 Rsl.failf$1=function(fmt)
 {
  return fmt(Rsl.fail$1);
 };
 Rsl.fail$1=function(s)
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new Fail.New$1(s,k);
   }
  });
 };
 Asyn=Asy.Asyn=Runtime.Class({
  get_K:function()
  {
   return this.k;
  },
  get_Value:function()
  {
   return this.v;
  },
  FsRoot_Library_Monads_Eff_Asy_AsynG$RunAsync:function(exitK)
  {
   var $this;
   $this=this;
   return Eff["done'$1"](Concurrency.Bind(this.v,function(v)
   {
    return exitK($this.k(v)).get_Value();
   }));
  },
  FsRoot_Library_Monads_Eff_Asy_AsynG$RunSync:function()
  {
   return this.k(console.log("RunSynch Not implemented in JavaSacript"));
  },
  FsRoot_Library_Monads_Eff_Effect$Extend:function(extension)
  {
   var f;
   return new Asyn.New$1(this.v,(f=this.k,function(x)
   {
    return extension(f(x));
   }));
  }
 },Obj,Asyn);
 Asyn.New$1=Runtime.Ctor(function(v,k)
 {
  Obj.New.call(this);
  this.v=v;
  this.k=k;
 },Asyn);
 Asy.asyncHandler$1=function(eff)
 {
  return Asy.asyncHandler0$1(Eff.op_GreaterGreaterEquals$1(Asy.ofAsync$1(Concurrency.Return(null)),function()
  {
   return eff;
  }));
 };
 Asy.asyncHandler0$1=function(eff)
 {
  function loop(exitK,a)
  {
   return a instanceof Done?exitK(Concurrency.Return(a.get_Value())):typeof a=="object"&&"FsRoot_Library_Monads_Eff_Asy_AsynG$RunSync"in a?a.FsRoot_Library_Monads_Eff_Asy_AsynG$RunAsync(function($1)
   {
    return loop(exitK,$1);
   }):a.FsRoot_Library_Monads_Eff_Effect$Extend(function($1)
   {
    return loop(exitK,$1);
   });
  }
  return new Eff$1({
   $:0,
   $0:function(exitK)
   {
    return loop(exitK,(eff.get_Create())(Eff["done'$1"]));
   }
  });
 };
 Asy.syncHandler$1=function(eff)
 {
  function loop(exitK,a)
  {
   return a instanceof Done?exitK(a.get_Value()):typeof a=="object"&&"FsRoot_Library_Monads_Eff_Asy_AsynG$RunSync"in a?loop(exitK,a.FsRoot_Library_Monads_Eff_Asy_AsynG$RunSync()):a.FsRoot_Library_Monads_Eff_Effect$Extend(function($1)
   {
    return loop(exitK,$1);
   });
  }
  return new Eff$1({
   $:0,
   $0:function(exitK)
   {
    return loop(exitK,(eff.get_Create())(Eff["done'$1"]));
   }
  });
 };
 Asy.ofAsync$1=function(v)
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new Asyn.New$1(v,k);
   }
  });
 };
 Eff.eff$1=function()
 {
  SC$1.$cctor();
  return SC$1.eff;
 };
 Eff.whileLoop$1=function(cond,fEf)
 {
  return cond()?Eff.bind$1(function()
  {
   return Eff.whileLoop$1(cond,fEf);
  },fEf()):Eff.rtn$1();
 };
 Eff.bindO$1=function(f,ef)
 {
  function f$1(o)
  {
   return o==null?null:{
    $:1,
    $0:f(o.$0)
   };
  }
  return Eff.bind$1(function(x)
  {
   return Eff.insertO$1(f$1(x));
  },ef);
 };
 Eff.insertSnd$1=function(vEf,snd)
 {
  return Eff.map$1(function(v)
  {
   return[v,snd];
  },vEf);
 };
 Eff.insertFst$1=function(fst,vEf)
 {
  return Eff.map$1(function(v)
  {
   return[fst,v];
  },vEf);
 };
 Eff.insertR$1=function(vvR)
 {
  return vvR.$==0?Eff.map$1(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vvR.$0):Eff.rtn$1(Library.Error$1(vvR.$0));
 };
 Eff.insertO$1=function(vvO)
 {
  var o;
  o=vvO==null?null:{
   $:1,
   $0:Eff.map$1(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vvO.$0)
  };
  return o==null?Eff.rtn$1(null):o.$0;
 };
 Eff.sequenceSeq$1=function(sq)
 {
  return Eff.traverseSeq$1(Global.id,sq);
 };
 Eff.traverseSeq$1=function(f,sq)
 {
  return Eff.op_BarGreaterGreater$1(Arrays.foldBack(function(head,tail)
  {
   return Eff.op_GreaterGreaterEquals$1(f(head),function(h)
   {
    return Eff.op_GreaterGreaterEquals$1(tail,function(t)
    {
     return Eff.rtn$1(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),Eff.rtn$1(List.T.Empty)),Global.id);
 };
 Eff.join$1=function(m)
 {
  return Eff.bind$1(Global.id,m);
 };
 Eff.op_GreaterGreaterEqualsBang$1=function(v,f)
 {
  return Eff.bind$1(function(w)
  {
   return Eff.op_BarGreaterGreater$1(f(w),function()
   {
    return w;
   });
  },v);
 };
 Eff.op_BarGreaterGreaterBang$1=function(v,f)
 {
  return Eff.map$1(function(v$1)
  {
   f(v$1);
   return v$1;
  },v);
 };
 Eff.op_GreaterEqualsGreater$1=function(f,g,v)
 {
  return Eff.op_GreaterGreaterEquals$1(f(v),g);
 };
 Eff.op_GreaterMinusGreater$1=function(f,g,v)
 {
  return Eff.op_BarGreaterGreater$1(f(v),g);
 };
 Eff.op_GreaterGreaterEquals$1=function(v,f)
 {
  return Eff.bind$1(f,v);
 };
 Eff.op_BarGreaterGreater$1=function(v,f)
 {
  return Eff.map$1(f,v);
 };
 Eff.op_LessMultiplyGreater$1=function(f,v)
 {
  return Eff.apply$1(f,v);
 };
 Eff.runResult$1=function(eff)
 {
  try
  {
   return{
    $:0,
    $0:Eff.run$1(eff)
   };
  }
  catch(e)
  {
   return Library.Error$1(Global.String(e));
  }
 };
 Eff.run$1=function(eff)
 {
  var m;
  m=(eff.get_Create())(Eff["done'$1"]);
  return m instanceof Done?m.get_Value():(function($1)
  {
   return function($2)
   {
    return $1("Unhandled effect "+Utils.prettyPrint($2));
   };
  }(Operators$1.FailWith))(m);
 };
 Eff["return'$1"]=function(v)
 {
  return new Eff$1({
   $:0,
   $0:function()
   {
    return Eff["done'$1"](v);
   }
  });
 };
 Eff["done'$1"]=function(v)
 {
  return new Done.New$1(v);
 };
 Eff.apply$1=function(fR,vR)
 {
  return Eff.bind$1(function(f)
  {
   return Eff.map$1(f,vR);
  },fR);
 };
 Eff.map$1=function(f,m)
 {
  return Eff.bind$1(function(x)
  {
   return Eff.rtn$1(f(x));
  },m);
 };
 Eff.bind$1=function(f,effA)
 {
  return new Eff$1({
   $:0,
   $0:function(kb)
   {
    return effA.$0(function(a)
    {
     return f(a).$0(kb);
    });
   }
  });
 };
 Eff.rtn$1=function(v)
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return k(v);
   }
  });
 };
 AsyncResult.absorbO=function(f,vORA)
 {
  function f$1(v)
  {
   return Result.absorbO$1(f,v);
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
 AsyncResult.absorbR=function(vRRA)
 {
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(vRRA,function(x)
  {
   return g(Result.join$1(x));
  });
 };
 AsyncResult.insertR=function(vRAR)
 {
  return vRAR.$==0?AsyncResult.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vRAR.$0):AsyncResult.rtn(Library.Error$1(vRAR.$0));
 };
 AsyncResult.insertO=function(vRAO)
 {
  var o;
  o=vRAO==null?null:{
   $:1,
   $0:AsyncResult.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vRAO.$0)
  };
  return o==null?AsyncResult.rtn(null):o.$0;
 };
 AsyncResult.sequenceSeq=function(sq)
 {
  return AsyncResult.traverseSeq(Global.id,sq);
 };
 AsyncResult.traverseSeq=function(f,sq)
 {
  return AsyncResult.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return AsyncResult.op_GreaterGreaterEquals(f(head),function(h)
   {
    return AsyncResult.op_GreaterGreaterEquals(tail,function(t)
    {
     return AsyncResult.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),AsyncResult.rtn(List.T.Empty)));
 };
 AsyncResult.op_GreaterGreaterEquals=function(v,f)
 {
  return AsyncResult.bind(f,v);
 };
 AsyncResult.whileLoop=function(cond,fRA)
 {
  return cond()?AsyncResult.bind(function()
  {
   return AsyncResult.whileLoop(cond,fRA);
  },fRA()):AsyncResult.rtn();
 };
 AsyncResult.mapP=function(f,m)
 {
  return AsyncResult.bindP(function(x)
  {
   return AsyncResult.rtn(f(x));
  },m);
 };
 AsyncResult.map=function(f,m)
 {
  return AsyncResult.bind(function(x)
  {
   return AsyncResult.rtn(f(x));
  },m);
 };
 AsyncResult.bindP=function(fRA,vRA)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.TryWith(Concurrency.Delay(function()
   {
    return Concurrency.Bind(vRA,function(a)
    {
     return a.$==1?Concurrency.Return(Library.Error$1(a.$0)):fRA(a.$0);
    });
   }),function(a)
   {
    return Concurrency.Return(Library.Error$1(new ResultMessage({
     $:5,
     $0:a.message,
     $1:a.stack
    })));
   });
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
   Result.iter$1(fE,f,r);
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
 AsyncResult.iterS=function(fE,f,vRA)
 {
  throw"iterS cannot be used in JavaScript!";
 };
 AsyncResult.rtnR=function(vR)
 {
  return Concurrency.Return(vR);
 };
 AsyncResult.rtn=function(v)
 {
  return Concurrency.Return({
   $:0,
   $0:v
  });
 };
 AsyncResult.freeMessage=function(v)
 {
  function g(v$1)
  {
   return Concurrency.Return(v$1);
  }
  return Concurrency.Bind(v,function(x)
  {
   return g(Result.freeMessage(x));
  });
 };
 AsyncResult.mapError=function(fE,v)
 {
  function f(r)
  {
   return Result$1.MapError(fE,r);
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
 AsyncResultBuilder=Monads.AsyncResultBuilder=Runtime.Class({
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
  While:function(guard,fRA)
  {
   return AsyncResult.whileLoop(guard,fRA);
  },
  Using:function(resource,fRA)
  {
   return Concurrency.Using(resource,fRA);
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
  Run:function(fRA)
  {
   return AsyncResult.bind(fRA,AsyncResult.rtn());
  },
  Delay:Global.id,
  Combine:function(vR,fRA)
  {
   return AsyncResult.bind(fRA,AsyncResult.rtnR(vR));
  },
  Combine$1:function(vRA,fRA)
  {
   return AsyncResult.bind(fRA,vRA);
  },
  Bind:function(vR,fRA)
  {
   return AsyncResult.bind(fRA,AsyncResult.rtnR(vR));
  },
  Bind$1:function(vRA,fRA)
  {
   return AsyncResult.bind(fRA,vRA);
  },
  Zero:function()
  {
   return AsyncResult.rtn();
  },
  Return:function(v)
  {
   return AsyncResult.rtn(v);
  },
  ReturnFrom:function(vR)
  {
   return AsyncResult.rtnR(vR);
  },
  ReturnFrom$1:Global.id
 },Obj,AsyncResultBuilder);
 AsyncResultBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },AsyncResultBuilder);
 AsyncResultBuilderP=Monads.AsyncResultBuilderP=Runtime.Class({
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
  While:function(guard,fRA)
  {
   return AsyncResult.whileLoop(guard,fRA);
  },
  Using:function(resource,fRA)
  {
   return Concurrency.Using(resource,fRA);
  },
  TryFinally:function(fRA,fn)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    try
    {
     return fRA();
    }
    finally
    {
     fn();
    }
   });
  },
  TryWith:function(fRA,hnd)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    try
    {
     return fRA();
    }
    catch(e)
    {
     return hnd(e);
    }
   });
  },
  Run:function(fRA)
  {
   return AsyncResult.bindP(fRA,AsyncResult.rtn());
  },
  Delay:Global.id,
  Combine:function(vR,fRA)
  {
   return AsyncResult.bindP(fRA,AsyncResult.rtnR(vR));
  },
  Combine$1:function(vRA,fRA)
  {
   return AsyncResult.bindP(fRA,vRA);
  },
  Bind:function(vR,fRA)
  {
   return AsyncResult.bindP(fRA,AsyncResult.rtnR(vR));
  },
  Bind$1:function(vRA,fRA)
  {
   return AsyncResult.bindP(fRA,vRA);
  },
  Zero:function()
  {
   return AsyncResult.rtn();
  },
  Return:function(v)
  {
   return AsyncResult.rtn(v);
  },
  ReturnFrom:function(vR)
  {
   return AsyncResult.rtnR(vR);
  },
  ReturnFrom$1:Global.id
 },Obj,AsyncResultBuilderP);
 AsyncResultBuilderP.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },AsyncResultBuilderP);
 Extensions["AsyncResultBuilderP.Combine"]=function(__,vA,fRA)
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
  return AsyncResult.bindP(fRA,Concurrency.Bind(vA,function(x)
  {
   return g(f(x));
  }));
 };
 Extensions["AsyncResultBuilderP.Bind"]=function(__,vA,fRA)
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
  return AsyncResult.bindP(fRA,Concurrency.Bind(vA,function(x)
  {
   return g(f(x));
  }));
 };
 Extensions["AsyncResultBuilderP.ReturnFrom"]=function(__,vA)
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
  return Concurrency.Bind(vA,function(x)
  {
   return g(f(x));
  });
 };
 Extensions["AsyncResultBuilder.Combine"]=function(__,vA,fRA)
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
 Extensions["AsyncResultBuilder.ReturnFrom"]=function(__,vA)
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
  return Concurrency.Bind(vA,function(x)
  {
   return g(f(x));
  });
 };
 Monads.asyncResultP=function()
 {
  SC$1.$cctor();
  return SC$1.asyncResultP;
 };
 Monads.asyncResult=function()
 {
  SC$1.$cctor();
  return SC$1.asyncResult;
 };
 String.thousands$1=function(n)
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
    },Operators$1.range(0,((v.length-s)/3>>0)-1));
   }));
  })));
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
 String.skipLastLine$1=function()
 {
  SC$1.$cctor();
  return SC$1.skipLastLine;
 };
 String.indentStr$1=function(i)
 {
  function f(s)
  {
   return String.indent$1(i,s);
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
 String.unindentStr$1=function()
 {
  SC$1.$cctor();
  return SC$1.unindentStr;
 };
 String.indent$1=function(n,s)
 {
  var x,x$1;
  x=Strings.SplitChars(s,["\n"],0);
  return Seq$1.map((x$1=Strings.replicate(n," "),function(y)
  {
   return x$1+y;
  }),x);
 };
 String.unindent$1=function(s)
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
 String.skipFirstLine$1=function(txt)
 {
  var i;
  i=txt.indexOf("\n");
  return i<0?"":Slice.string(txt,{
   $:1,
   $0:i+1
  },null);
 };
 String.append$1=function(a,b)
 {
  return a+b;
 };
 String.trim$1=function(s)
 {
  return Strings.Trim(s);
 };
 String.contains$1=function(sub,whole)
 {
  return whole.indexOf(sub)!=-1;
 };
 String.delimitedO$1=function(op,cl,txt)
 {
  var o,$1,bef,o$1,$2;
  o=String.splitInTwoO$1(op,txt);
  return o==null?null:($1=o.$0,(bef=$1[0],(o$1=String.splitInTwoO$1(cl,$1[1]),o$1==null?null:{
   $:1,
   $0:($2=o$1.$0,[bef,$2[0],$2[1]])
  })));
 };
 String.splitInTwoO$1=function(spl,txt)
 {
  var i;
  i=txt.indexOf(spl);
  return i===-1?null:{
   $:1,
   $0:[Library["String.Left$1"](txt,i),txt.substring(i+spl.length)]
  };
 };
 String.splitByChar$1=function(c,s)
 {
  return Strings.SplitChars(s,[c],0);
 };
 Array.remove=function(i,array)
 {
  return Arrays.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(i>0?Slice.array(array,null,{
    $:1,
    $0:i-1
   }):[],Seq$1.delay(function()
   {
    return i<Arrays.length(array)?Slice.array(array,{
     $:1,
     $0:i+1
    },null):[];
   }));
  }));
 };
 Array.replace=function(i,item,array)
 {
  return Arrays.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append(i>0?Slice.array(array,null,{
    $:1,
    $0:i-1
   }):[],Seq$1.delay(function()
   {
    return Seq$1.append([item],Seq$1.delay(function()
    {
     return i<Arrays.length(array)?Slice.array(array,{
      $:1,
      $0:i+1
     },null):[];
    }));
   }));
  }));
 };
 SortWith.op_AmpGreater=function(c1,c2,a,b)
 {
  var m;
  m=c1(a,b);
  return m===0?c2(a,b):m;
 };
 SortWith.desc=function(f,a,b)
 {
  return Unchecked.Compare(f(b),f(a));
 };
 SortWith.asc=function(f,a,b)
 {
  return Unchecked.Compare(f(a),f(b));
 };
 MailboxProcessorExt.PostAndAsyncReply=function(agent,msg,timeout)
 {
  return agent.PostAndAsyncReply(function(reply)
  {
   return[reply,msg];
  },timeout);
 };
 StateFull.applyReply=function(f,agent)
 {
  return StateFull.applyReplyA(function(v)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Return(f(v));
   });
  },agent);
 };
 StateFull.applyReplyA=function(f,agent)
 {
  return agent.PostAndAsyncReply(function(reply)
  {
   return function(v)
   {
    var b;
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Bind(f(v),function(a)
     {
      reply(a[1]);
      return Concurrency.Return(a[0]);
     });
    });
   };
  },null);
 };
 StateFull.apply=function(f,agent)
 {
  StateFull.applyA(function(v)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Return(f(v));
   });
  },agent);
 };
 StateFull.applyA=function(f,agent)
 {
  agent.mailbox.AddLast(function(v)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return f(v);
   });
  });
  agent.resume();
 };
 StateFull.setState=function(v,agent)
 {
  agent.mailbox.AddLast(function()
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Return(v);
   });
  });
  agent.resume();
 };
 StateFull.getStateA=function(agent)
 {
  return agent.PostAndAsyncReply(function(reply)
  {
   return function(v)
   {
    var b;
    b=null;
    return Concurrency.Delay(function()
    {
     reply(v);
     return Concurrency.Return(v);
    });
   };
  },null);
 };
 Mailbox.defHandler=function(ex,st)
 {
  Library.print$1(ex);
  return st;
 };
 Mailbox.stateFull=function(hndl,initState)
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
       return Concurrency.Bind(a(state),function(a$1)
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
 Mailbox.call=function(hndl,f)
 {
  return Mailbox.callA(hndl,function(msg)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Return(f(msg));
   });
  });
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
 Mailbox.iter=function(hndl,f)
 {
  return Mailbox.iterA(hndl,function(msg)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    f(msg);
    return Concurrency.Zero();
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
 Library.mapSnd$1=function(f,a,b)
 {
  return[a,f(b)];
 };
 Library.mapFst$1=function(f,a,b)
 {
  return[f(a),b];
 };
 Library["String.get_toUnderscore$1"]=function(_this,u)
 {
  return Arrays.ofSeq(Seq$1.collect(Global.id,Seq$1.mapi(function(i,c)
  {
   return i>0&&Char.IsUpper(c)?List.ofArray(["_",c]):List.ofArray([c]);
  },_this))).join("");
 };
 Library["String.Right$1"]=function(_this,n)
 {
  var a,b;
  return Library["String.Substring2$1"](_this,(a=0,(b=_this.length-n,Unchecked.Compare(a,b)===1?a:b)),_this.length);
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
 Library.Error$1=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 Var.lensView=function(get,update,view0,_var)
 {
  var id,view,$1;
  id=Var.freshId();
  view=View.Map2(function(v)
  {
   return get(v);
  },_var.get_View(),view0);
  $1=new UI.Var({
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
  Var$1.New.call($1);
  return $1;
 };
 Var.freshId=function()
 {
  Var.set_counter(Var.counter()+1);
  return"varuid"+Global.String(Var.counter());
 };
 Var.counter=function()
 {
  SC$1.$cctor();
  return SC$1.counter;
 };
 Var.set_counter=function($1)
 {
  SC$1.$cctor();
  SC$1.counter=$1;
 };
 ListModel.currentLens=function(def,curr,model)
 {
  return ListModel["currentLensUpd'"](def,curr,function(v)
  {
   model.UpdateBy(function()
   {
    return model.TryFindByKey(model.key(v))==null?null:{
     $:1,
     $0:v
    };
   },model.key(v));
  },model);
 };
 ListModel["currentLensUpd'"]=function(def,curr,upd,model)
 {
  return new FromView.New(View.Map2(function(_mdl,kO)
  {
   var o;
   o=kO==null?null:model.TryFindByKey(kO.$0);
   return o==null?def:o.$0;
  },model.v,curr),upd);
 };
 ListModel.currentLensUpd=function(def,curr,upd,model)
 {
  var f;
  function b(a)
  {
   return model.TryFindByKey(a);
  }
  function g(o)
  {
   return o==null?def:o.$0;
  }
  return Var.lensView((f=function(o)
  {
   return o==null?null:b(o.$0);
  },function(x)
  {
   return g(f(x));
  }),function(kO,v)
  {
   var a;
   a=upd(v);
   kO==null?void 0:a(kO.$0);
   return kO;
  },model.v,curr);
 };
 ListModel.lensDef=function(def,k,m)
 {
  function get(o)
  {
   return o==null?def:o.$0;
  }
  return ListModel["lensIntoO'"](m,get,function()
  {
   return Global.id;
  },k,View.Map(get,m.TryFindByKeyAsView(k)));
 };
 ListModel.docLensMapViewO=function(def,mapView,f,m)
 {
  function get(k,v)
  {
   return f(k,ListModel["lensIntoO'"](m,function(o)
   {
    return o==null?def:o.$0;
   },function()
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
 ListModel.docLensMapView=function(mapView,f,m)
 {
  function get(k,v)
  {
   return f(k,ListModel["lensInto'"](m,Global.id,function()
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
 ListModel["lensIntoO'"]=function(m,get,update,key,view)
 {
  var id,$1;
  id=Var.freshId();
  $1=new Var$1({
   Get:function()
   {
    return get(m.TryFindByKey(key));
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
      $0:(x=f(get({
       $:1,
       $0:i
      })),(update(i))(x))
     };
    },key);
   },
   UpdateMaybe:function(f)
   {
    return m.UpdateBy(function(i)
    {
     var x,m$1;
     x=f(get({
      $:1,
      $0:i
     }));
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
  Var$1.New.call($1);
  return $1;
 };
 ListModel["lensInto'"]=function(m,get,update,key,view)
 {
  var id,$1;
  id=Var.freshId();
  $1=new Var$1({
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
  Var$1.New.call($1);
  return $1;
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
  return Pojo.newPojo(Seq$1.choose(function($1)
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
  Seq$1.iter((f=function(b)
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
 Date.toYYYYMMDDHHMM$1=function(sep,date)
 {
  return(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1(Utils.toSafe($2)+" "+Utils.toSafe($3));
  }))(Global.id))(Date.toYYYYMMDD$1(sep,date)))(Date.toHHMM$1(date));
 };
 Date.toHHMM$1=function(date)
 {
  return(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1(Utils.padNumLeft(Global.String($2),2)+":"+Utils.padNumLeft(Global.String($3),2));
  }))(Global.id))((new Global.Date(date)).getHours()))((new Global.Date(date)).getMinutes());
 };
 Date.toYYYYMMDD$1=function(sep,date)
 {
  return((((((Runtime.Curried(function($1,$2,$3,$4,$5,$6)
  {
   return $1(Global.String($2)+Utils.toSafe($3)+Utils.padNumLeft(Global.String($4),2)+Utils.toSafe($5)+Utils.padNumLeft(Global.String($6),2));
  },6))(Global.id))((new Global.Date(date)).getFullYear()))(sep))((new Global.Date(date)).getMonth()+1))(sep))((new Global.Date(date)).getDate());
 };
 REGEX.Identifier$1=function(a)
 {
  var $1,a$1,t;
  return(a$1=LibraryJS.REGEX$2("^[$a-zA-Z_][0-9a-zA-Z_\\.\\-$]*$","",a),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===1)&&($1=Arrays.get(a$1.$0,0),true)))?{
   $:1,
   $0:$1
  }:null;
 };
 REGEX.getEndWord$1=function(line,ch)
 {
  var a,t;
  a=LibraryJS.REGEX$2("^([a-zA-Z_]\\w*)","g",line.substring(ch));
  return a!=null&&a.$==1?(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1)?Arrays.get(a.$0,0):"":"";
 };
 REGEX.getStartWord$1=function(line,ch)
 {
  var a,t;
  a=LibraryJS.REGEX$2("([a-zA-Z_]\\w*)$","g",Strings.Substring(line,0,ch));
  return a!=null&&a.$==1?(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1)?Arrays.get(a.$0,0):"":"";
 };
 Policy=Msal.Policy=Runtime.Class({
  toString:function()
  {
   return Strings.ReplaceChar(Library["String.get_toUnderscore$1"]((function($1)
   {
    return function($2)
    {
     return $1(prozperDes$js_GeneratedPrintf.p$1($2));
    };
   }(Global.id))(this)),"_"," ");
  }
 },null,Policy);
 Policy.ResetPassword=new Policy({
  $:3
 });
 Policy.EditProfile=new Policy({
  $:2
 });
 Policy.SignUp=new Policy({
  $:1
 });
 Policy.SignIn=new Policy({
  $:0
 });
 Policy.Parse=function(txt)
 {
  var m;
  m=Strings.Replace(txt," ","");
  return m==="SignUp"?Policy.SignUp:m==="EditProfile"?Policy.EditProfile:m==="ResetPassword"?Policy.ResetPassword:Policy.SignIn;
 };
 AuthOptions.New$1=function(clientId,authority,validateAuthority,redirectUri,postLogoutRedirectUri,navigateToLoginRequestUrl)
 {
  return Pojo.newPojoOpt([Msal.op_MinusMinusGreater("clientId",clientId),Msal.op_EqualsEqualsGreater("authority",authority),Msal.op_EqualsEqualsGreater("validateAuthority",validateAuthority),Msal.op_EqualsEqualsGreater("redirectUri",redirectUri),Msal.op_EqualsEqualsGreater("postLogoutRedirectUri",postLogoutRedirectUri),Msal.op_EqualsEqualsGreater("navigateToLoginRequestUrl",navigateToLoginRequestUrl)]);
 };
 AuthOptions.New=function(clientId,authority,validateAuthority,redirectUri,postLogoutRedirectUri,navigateToLoginRequestUrl)
 {
  return{
   clientId:clientId,
   authority:authority,
   validateAuthority:validateAuthority,
   redirectUri:redirectUri,
   postLogoutRedirectUri:postLogoutRedirectUri,
   navigateToLoginRequestUrl:navigateToLoginRequestUrl
  };
 };
 CacheOptions.New$1=function(cacheLocation,storeAuthStateInCookie)
 {
  return Pojo.newPojoOpt([Msal.op_EqualsEqualsGreater("cacheLocation",cacheLocation),Msal.op_EqualsEqualsGreater("storeAuthStateInCookie",storeAuthStateInCookie)]);
 };
 CacheOptions.New=function(cacheLocation,storeAuthStateInCookie)
 {
  return{
   cacheLocation:cacheLocation,
   storeAuthStateInCookie:storeAuthStateInCookie
  };
 };
 SystemOptions.New$1=function(logger,loadFrameTimeout,navigateFrameWait,tokenRenewalOffsetSeconds)
 {
  return Pojo.newPojoOpt([Msal.op_EqualsEqualsGreater("logger",logger),Msal.op_EqualsEqualsGreater("loadFrameTimeout",loadFrameTimeout),Msal.op_EqualsEqualsGreater("navigateFrameWait",navigateFrameWait),Msal.op_EqualsEqualsGreater("tokenRenewalOffsetSeconds",tokenRenewalOffsetSeconds)]);
 };
 SystemOptions.New=function(logger,loadFrameTimeout,navigateFrameWait,tokenRenewalOffsetSeconds)
 {
  return{
   logger:logger,
   loadFrameTimeout:loadFrameTimeout,
   navigateFrameWait:navigateFrameWait,
   tokenRenewalOffsetSeconds:tokenRenewalOffsetSeconds
  };
 };
 FrameworkOptions.New$1=function(isAngular,protectedResourceMap,unprotectedResources)
 {
  return Pojo.newPojoOpt([Msal.op_EqualsEqualsGreater("isAngular",isAngular),Msal.op_EqualsEqualsGreater("protectedResourceMap",protectedResourceMap),Msal.op_EqualsEqualsGreater("unprotectedResources",unprotectedResources)]);
 };
 FrameworkOptions.New=function(isAngular,protectedResourceMap,unprotectedResources)
 {
  return{
   isAngular:isAngular,
   protectedResourceMap:protectedResourceMap,
   unprotectedResources:unprotectedResources
  };
 };
 Configuration.New$1=function(auth,cache,system,framework)
 {
  return Pojo.newPojoOpt([Msal.op_EqualsEqualsGreater("auth",auth),Msal.op_EqualsEqualsGreater("cache",cache),Msal.op_EqualsEqualsGreater("system",system),Msal.op_EqualsEqualsGreater("framework",framework)]);
 };
 Configuration.New=function(auth,cache,system,framework)
 {
  return{
   auth:auth,
   cache:cache,
   system:system,
   framework:framework
  };
 };
 Account=Msal.Account=Runtime.Class({},Obj,Account);
 Account.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Account);
 AuthResponse.New=function(accessToken,account,accountState,expiresOn,idToken,scopes,tenantId,tokenType,uniqueId)
 {
  return{
   accessToken:accessToken,
   account:account,
   accountState:accountState,
   expiresOn:expiresOn,
   idToken:idToken,
   scopes:scopes,
   tenantId:tenantId,
   tokenType:tokenType,
   uniqueId:uniqueId
  };
 };
 AuthError.New=function(errorCode,errorMessage,message,name,stack)
 {
  return{
   errorCode:errorCode,
   errorMessage:errorMessage,
   message:message,
   name:name,
   stack:stack
  };
 };
 AuthenticationParameters.New$1=function(account,authority,claimsRequest,correlationId,extraQueryParameters,extraScopesToConsent,loginHint,prompt,scopes,sid,state)
 {
  return Pojo.newPojoOpt([Msal.op_EqualsEqualsGreater("account",account),Msal.op_EqualsEqualsGreater("authority",authority),Msal.op_EqualsEqualsGreater("claimsRequest",claimsRequest),Msal.op_EqualsEqualsGreater("correlationId",correlationId),Msal.op_EqualsEqualsGreater("extraQueryParameters",extraQueryParameters),Msal.op_EqualsEqualsGreater("extraScopesToConsent",extraScopesToConsent),Msal.op_EqualsEqualsGreater("loginHint",loginHint),Msal.op_EqualsEqualsGreater("prompt",prompt),Msal.op_EqualsEqualsGreater("scopes",scopes),Msal.op_EqualsEqualsGreater("sid",sid),Msal.op_EqualsEqualsGreater("state",state)]);
 };
 AuthenticationParameters.New=function(account,authority,claimsRequest,correlationId,extraQueryParameters,extraScopesToConsent,loginHint,prompt,scopes,sid,state)
 {
  return{
   account:account,
   authority:authority,
   claimsRequest:claimsRequest,
   correlationId:correlationId,
   extraQueryParameters:extraQueryParameters,
   extraScopesToConsent:extraScopesToConsent,
   loginHint:loginHint,
   prompt:prompt,
   scopes:scopes,
   sid:sid,
   state:state
  };
 };
 Msal.op_EqualsEqualsGreater=function(n,vO)
 {
  return[n,vO==null?null:{
   $:1,
   $0:vO.$0
  }];
 };
 Msal.op_MinusMinusGreater=function(n,v)
 {
  return[n,{
   $:1,
   $0:v
  }];
 };
 Msal.policies=function()
 {
  SC$1.$cctor();
  return SC$1.policies;
 };
 LibraryJS.rexEmail$1=function()
 {
  SC$1.$cctor();
  return SC$1.rexEmail;
 };
 LibraryJS.rexGuid$1=function()
 {
  SC$1.$cctor();
  return SC$1.rexGuid;
 };
 LibraryJS.REGEX$2=function(expr,opt,value)
 {
  var m;
  return value===null?null:(m=(new Global.String(value)).match(new Global.RegExp(expr,opt)),Unchecked.Equals(m,null)?null:!Unchecked.Equals(m,null)&&m.length===0?null:{
   $:1,
   $0:m
  });
 };
 Templating.TemplatesFileName=function()
 {
  SC$1.$cctor();
  return SC$1.TemplatesFileName;
 };
 Templating.rootdir=function()
 {
  SC$1.$cctor();
  return SC$1.rootdir;
 };
 Msal$1.getTokenO=function()
 {
  SC$1.$cctor();
  return SC$1.getTokenO;
 };
 Msal$1.getTokenO0=function()
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   function someToken(from,tk)
   {
    return Unchecked.Equals(tk,null)?(console.log(from+" token is null!!"),null):{
     $:1,
     $0:tk
    };
   }
   return Msal$1.userO().Get()==null?(console.log("getTokenO0 (4): No user connected!"),Concurrency.Return(null)):Concurrency.TryWith(Concurrency.Delay(function()
   {
    return Concurrency.Bind(Promise.AsAsync(Msal$1.agent().f().acquireTokenSilent(Msal$1.authParms())),function(a)
    {
     return Concurrency.Return(someToken("getTokenO0 (0): ",a.accessToken));
    });
   }),function(a)
   {
    console.log(["getTokenO0 (1): ",a.message]);
    return Concurrency.TryWith(Concurrency.Delay(function()
    {
     return Concurrency.Bind(Concurrency.FromContinuations(function(ok,ko)
     {
      Msal$1.agent().f().handleRedirectCallback(function(error,resp)
      {
       try
       {
        !Unchecked.Equals(error,null)?(console.log(["redirectCallback ERROR: ",error]),ko(new Global.Error(error.errorMessage))):!Unchecked.Equals(resp,null)?(console.log(["redirectCallback: ",resp]),ok(resp)):null;
       }
       catch(e)
       {
        (((Runtime.Curried3(function($1,$2,$3)
        {
         return $1(Utils.prettyPrint($2)+" "+Utils.toSafe($3));
        }))(function(s)
        {
         console.log(s);
        }))(e))(e.stack);
       }
      });
      return Msal$1.agent().f().acquireTokenRedirect(Msal$1.authParms());
     }),function(a$1)
     {
      return Concurrency.Return(someToken("getTokenO0 (2): ",a$1.accessToken));
     });
    }),function(a$1)
    {
     console.log(["getTokenO0 (3): ",a$1.message]);
     return Concurrency.Return(null);
    });
   });
  });
 };
 Msal$1.authParms=function()
 {
  return AuthenticationParameters.New$1(null,null,null,null,null,null,null,null,{
   $:1,
   $0:[(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("https://"+Utils.toSafe($2)+".onmicrosoft.com/"+Utils.toSafe($3)+"/user_impersonation");
   }))(Global.id))(Msal$1.tenantName()))(Msal$1.appId()),(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("https://"+Utils.toSafe($2)+".onmicrosoft.com/"+Utils.toSafe($3)+"/Prozper.Admin");
   }))(Global.id))(Msal$1.tenantName()))(Msal$1.appId())]
  },null,null);
 };
 Msal$1.logout=function()
 {
  Msal$1.executePolicy(true,Policy.SignIn);
 };
 Msal$1.checkUser=function()
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
     newO=(m=Msal$1.agent().f().getAccount(),Unchecked.Equals(m,null)?null:{
      $:1,
      $0:m
     });
     return Concurrency.Combine(Msal$1.getId(newO)!==Msal$1.getId(Msal$1.userO().Get())?(Msal$1.userO().Set(newO),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
     {
      return Concurrency.Combine(Unchecked.Equals(Msal$1.userO().Get(),null)?(Msal$1.executePolicy(false,Policy.SignIn),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
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
 Msal$1.executePolicy=function(force,policy)
 {
  Msal$1.storeValue("forceLogin",force?"1":"0");
  Msal$1.storeValue("goInsideLink",self.location.href);
  Msal$1.storeValue("policyType",Global.String(policy));
  self.location.replace("blob/Msal.html");
 };
 Msal$1.claims=function(user)
 {
  var r;
  r=[["oid",user.idToken.oid],["city",user.idToken.city],["country",user.idToken.country],["extension_DateOfBirth",user.idToken.extension_DateOfBirth],["given_name",user.idToken.given_name],["postalCode",user.idToken.postalCode],["state",user.idToken.state],["streetAddress",user.idToken.streetAddress],["family_name",user.idToken.family_name],["emails",Arrays.get(user.idToken.emails,0)],["referidoPor",Msal$1.referidoPor()]];
  Msal$1.storageSetItem("referidoPor","");
  return r;
 };
 Msal$1.referidoPor=function()
 {
  return Msal$1.storageGetItem("referidoPor");
 };
 Msal$1.getId=function(userO)
 {
  var o;
  o=userO==null?null:{
   $:1,
   $0:userO.$0.idToken.oid
  };
  return o==null?"":o.$0;
 };
 Msal$1.agent=function()
 {
  SC$1.$cctor();
  return SC$1.agent;
 };
 Msal$1.redirectCallback=function(error,resp)
 {
  try
  {
   !Unchecked.Equals(error,null)?console.log(["redirectCallback ERROR: ",error]):void 0;
   !Unchecked.Equals(resp,null)?console.log(["redirectCallback: ",resp]):null;
  }
  catch(e)
  {
   (((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Utils.prettyPrint($2)+" "+Utils.toSafe($3));
   }))(function(s)
   {
    console.log(s);
   }))(e))(e.stack);
  }
 };
 Msal$1.userO=function()
 {
  SC$1.$cctor();
  return SC$1.userO;
 };
 Msal$1.authority=function()
 {
  SC$1.$cctor();
  return SC$1.authority;
 };
 Msal$1.getAuthority=function(tenantName,policyName)
 {
  return((((Runtime.Curried(function($1,$2,$3,$4)
  {
   return $1("https://"+Utils.toSafe($2)+".b2clogin.com/tfp/"+Utils.toSafe($3)+".onmicrosoft.com/"+Utils.toSafe($4));
  },4))(Global.id))(tenantName))(tenantName))(policyName);
 };
 Msal$1.policyType=function()
 {
  SC$1.$cctor();
  return SC$1.policyType;
 };
 Msal$1.resetPasswordPolicy=function()
 {
  SC$1.$cctor();
  return SC$1.resetPasswordPolicy;
 };
 Msal$1.editProfilePolicy=function()
 {
  SC$1.$cctor();
  return SC$1.editProfilePolicy;
 };
 Msal$1.signUpPolicy=function()
 {
  SC$1.$cctor();
  return SC$1.signUpPolicy;
 };
 Msal$1.signInPolicy=function()
 {
  SC$1.$cctor();
  return SC$1.signInPolicy;
 };
 Msal$1.forceLogin=function()
 {
  SC$1.$cctor();
  return SC$1.forceLogin;
 };
 Msal$1.createOnStart=function()
 {
  SC$1.$cctor();
  return SC$1.createOnStart;
 };
 Msal$1.refreshBefore=function()
 {
  SC$1.$cctor();
  return SC$1.refreshBefore;
 };
 Msal$1.extraQueryParms=function()
 {
  SC$1.$cctor();
  return SC$1.extraQueryParms;
 };
 Msal$1.ref=function()
 {
  SC$1.$cctor();
  return SC$1.ref;
 };
 Msal$1.tenantName=function()
 {
  SC$1.$cctor();
  return SC$1.tenantName;
 };
 Msal$1.applicationId=function()
 {
  SC$1.$cctor();
  return SC$1.applicationId;
 };
 Msal$1.appId=function()
 {
  SC$1.$cctor();
  return SC$1.appId;
 };
 Msal$1.storageSetItem=function(name,v)
 {
  self.localStorage.setItem(name,v);
 };
 Msal$1.storageGetItem=function(name)
 {
  return self.localStorage.getItem(name);
 };
 Msal$1.storeValue=function(name,v)
 {
  self.localStorage.setItem(name,v);
  return v;
 };
 Msal$1.callback=function(errorDesc,token,error,tokenType,state)
 {
  console.log([errorDesc,error,tokenType,token,state]);
 };
 EndPoint.PreRegister={
  $:2
 };
 EndPoint.NoUser={
  $:1
 };
 EndPoint.DefaultEP={
  $:0
 };
 Rpc.refrescarTransacciones=function()
 {
  var b;
  function f($1,$2)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc0.refrescarTransacciones:1155467561",[$1,void 0]);
  }
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.TryFinally(b.Delay(function()
   {
    return Extensions["AsyncResultBuilder.Bind"](b,(Rpc.addLlamadas())(1),function()
    {
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return b.Bind$1(AsyncResult.absorbO(function()
     {
      self.location.href="/Login";
      return"User not logged in";
     },Concurrency.Bind((Msal$1.getTokenO())(),function(x)
     {
      return g(Result.rtn(x));
     })),function(a)
     {
      return b.ReturnFrom$1(f(a,void 0));
     });
    });
   }),function()
   {
    Concurrency.Start((Rpc.addLlamadas())(-1),null);
   });
  }));
 };
 Rpc.obtenerTransaccionesPara=function(p)
 {
  var p$1,b;
  function f($1,$2)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc0.obtenerTransaccionesPara:-1914339047",[$1,$2]);
  }
  p$1=Aliado.get_LoggedId();
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.TryFinally(b.Delay(function()
   {
    return Extensions["AsyncResultBuilder.Bind"](b,(Rpc.addLlamadas())(1),function()
    {
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return b.Bind$1(AsyncResult.absorbO(function()
     {
      self.location.href="/Login";
      return"User not logged in";
     },Concurrency.Bind((Msal$1.getTokenO())(),function(x)
     {
      return g(Result.rtn(x));
     })),function(a)
     {
      return b.ReturnFrom$1(f(a,p$1));
     });
    });
   }),function()
   {
    Concurrency.Start((Rpc.addLlamadas())(-1),null);
   });
  }));
 };
 Rpc.actualizarSubscripcion=function(p)
 {
  var b;
  function f($1,$2)
  {
   return(function(tk)
   {
    var a;
    a=Aliado.get_LoggedId();
    return function(i)
    {
     return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc0.actualizarSubscripcion:-384331266",[tk,a,i]);
    };
   }($1))($2);
  }
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.TryFinally(b.Delay(function()
   {
    return Extensions["AsyncResultBuilder.Bind"](b,(Rpc.addLlamadas())(1),function()
    {
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return b.Bind$1(AsyncResult.absorbO(function()
     {
      self.location.href="/Login";
      return"User not logged in";
     },Concurrency.Bind((Msal$1.getTokenO())(),function(x)
     {
      return g(Result.rtn(x));
     })),function(a)
     {
      return b.ReturnFrom$1(f(a,p));
     });
    });
   }),function()
   {
    Concurrency.Start((Rpc.addLlamadas())(-1),null);
   });
  }));
 };
 Rpc.obtenerEstadoParaUsuario=function(p)
 {
  var p$1,b;
  function f($1,$2)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc0.obtenerEstadoParaUsuario:-1561662925",[$1,$2]);
  }
  p$1=Aliado.get_LoggedId();
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.TryFinally(b.Delay(function()
   {
    return Extensions["AsyncResultBuilder.Bind"](b,(Rpc.addLlamadas())(1),function()
    {
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return b.Bind$1(AsyncResult.absorbO(function()
     {
      self.location.href="/Login";
      return"User not logged in";
     },Concurrency.Bind((Msal$1.getTokenO())(),function(x)
     {
      return g(Result.rtn(x));
     })),function(a)
     {
      return b.ReturnFrom$1(f(a,p$1));
     });
    });
   }),function()
   {
    Concurrency.Start((Rpc.addLlamadas())(-1),null);
   });
  }));
 };
 Rpc.obtenerListaDocs=function(p)
 {
  var b;
  function f($1,$2)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc0.obtenerListaDocs:-881142106",[$1,$2]);
  }
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.TryFinally(b.Delay(function()
   {
    return Extensions["AsyncResultBuilder.Bind"](b,(Rpc.addLlamadas())(1),function()
    {
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return b.Bind$1(AsyncResult.absorbO(function()
     {
      self.location.href="/Login";
      return"User not logged in";
     },Concurrency.Bind((Msal$1.getTokenO())(),function(x)
     {
      return g(Result.rtn(x));
     })),function(a)
     {
      return b.ReturnFrom$1(f(a,p));
     });
    });
   }),function()
   {
    Concurrency.Start((Rpc.addLlamadas())(-1),null);
   });
  }));
 };
 Rpc.obtenerFormasDePagoId=function(p)
 {
  var b;
  function f($1,$2)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc0.obtenerFormasDePagoId:2063455187",[$1,$2]);
  }
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.TryFinally(b.Delay(function()
   {
    return Extensions["AsyncResultBuilder.Bind"](b,(Rpc.addLlamadas())(1),function()
    {
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return b.Bind$1(AsyncResult.absorbO(function()
     {
      self.location.href="/Login";
      return"User not logged in";
     },Concurrency.Bind((Msal$1.getTokenO())(),function(x)
     {
      return g(Result.rtn(x));
     })),function(a)
     {
      return b.ReturnFrom$1(f(a,p));
     });
    });
   }),function()
   {
    Concurrency.Start((Rpc.addLlamadas())(-1),null);
   });
  }));
 };
 Rpc.obtenerFormasDePagoPara=function(p)
 {
  var b;
  function f($1,$2)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc0.obtenerFormasDePagoPara:-1929458241",[$1,$2]);
  }
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.TryFinally(b.Delay(function()
   {
    return Extensions["AsyncResultBuilder.Bind"](b,(Rpc.addLlamadas())(1),function()
    {
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return b.Bind$1(AsyncResult.absorbO(function()
     {
      self.location.href="/Login";
      return"User not logged in";
     },Concurrency.Bind((Msal$1.getTokenO())(),function(x)
     {
      return g(Result.rtn(x));
     })),function(a)
     {
      return b.ReturnFrom$1(f(a,p));
     });
    });
   }),function()
   {
    Concurrency.Start((Rpc.addLlamadas())(-1),null);
   });
  }));
 };
 Rpc.borrarFormaPago=function(p)
 {
  var b;
  function f($1,$2)
  {
   return(function(tk)
   {
    var a;
    a=Aliado.get_LoggedId();
    return function(p$1)
    {
     return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc0.borrarFormaPago:-384331266",[tk,a,p$1]);
    };
   }($1))($2);
  }
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.TryFinally(b.Delay(function()
   {
    return Extensions["AsyncResultBuilder.Bind"](b,(Rpc.addLlamadas())(1),function()
    {
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return b.Bind$1(AsyncResult.absorbO(function()
     {
      self.location.href="/Login";
      return"User not logged in";
     },Concurrency.Bind((Msal$1.getTokenO())(),function(x)
     {
      return g(Result.rtn(x));
     })),function(a)
     {
      return b.ReturnFrom$1(f(a,p));
     });
    });
   }),function()
   {
    Concurrency.Start((Rpc.addLlamadas())(-1),null);
   });
  }));
 };
 Rpc.validarFormaPago=function(p)
 {
  var b;
  function f($1,$2)
  {
   return(function(tk)
   {
    var a;
    a=Aliado.get_LoggedId();
    return function(p$1)
    {
     return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc0.validarFormaPago:-384331266",[tk,a,p$1]);
    };
   }($1))($2);
  }
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.TryFinally(b.Delay(function()
   {
    return Extensions["AsyncResultBuilder.Bind"](b,(Rpc.addLlamadas())(1),function()
    {
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return b.Bind$1(AsyncResult.absorbO(function()
     {
      self.location.href="/Login";
      return"User not logged in";
     },Concurrency.Bind((Msal$1.getTokenO())(),function(x)
     {
      return g(Result.rtn(x));
     })),function(a)
     {
      return b.ReturnFrom$1(f(a,p));
     });
    });
   }),function()
   {
    Concurrency.Start((Rpc.addLlamadas())(-1),null);
   });
  }));
 };
 Rpc.registrarCuenta=function(p)
 {
  var b;
  function f($1,$2)
  {
   return(function(tk)
   {
    var a;
    a=Aliado.get_LoggedId();
    return function(p$1)
    {
     return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc0.registrarCuenta:244739382",[tk,a,p$1]);
    };
   }($1))($2);
  }
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.TryFinally(b.Delay(function()
   {
    return Extensions["AsyncResultBuilder.Bind"](b,(Rpc.addLlamadas())(1),function()
    {
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return b.Bind$1(AsyncResult.absorbO(function()
     {
      self.location.href="/Login";
      return"User not logged in";
     },Concurrency.Bind((Msal$1.getTokenO())(),function(x)
     {
      return g(Result.rtn(x));
     })),function(a)
     {
      return b.ReturnFrom$1(f(a,p));
     });
    });
   }),function()
   {
    Concurrency.Start((Rpc.addLlamadas())(-1),null);
   });
  }));
 };
 Rpc.registrarTarjeta=function(p)
 {
  var b;
  function f($1,$2)
  {
   return(function(tk)
   {
    var a;
    a=Aliado.get_LoggedId();
    return function(p$1)
    {
     return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc0.registrarTarjeta:-1859341136",[tk,a,p$1]);
    };
   }($1))($2);
  }
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.TryFinally(b.Delay(function()
   {
    return Extensions["AsyncResultBuilder.Bind"](b,(Rpc.addLlamadas())(1),function()
    {
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return b.Bind$1(AsyncResult.absorbO(function()
     {
      self.location.href="/Login";
      return"User not logged in";
     },Concurrency.Bind((Msal$1.getTokenO())(),function(x)
     {
      return g(Result.rtn(x));
     })),function(a)
     {
      return b.ReturnFrom$1(f(a,p));
     });
    });
   }),function()
   {
    Concurrency.Start((Rpc.addLlamadas())(-1),null);
   });
  }));
 };
 Rpc.obtenerFormasDePago=function()
 {
  var b;
  function f($1,$2)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc0.obtenerFormasDePagoId:2063455187",[$1,Aliado.get_LoggedId()]);
  }
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.TryFinally(b.Delay(function()
   {
    return Extensions["AsyncResultBuilder.Bind"](b,(Rpc.addLlamadas())(1),function()
    {
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return b.Bind$1(AsyncResult.absorbO(function()
     {
      self.location.href="/Login";
      return"User not logged in";
     },Concurrency.Bind((Msal$1.getTokenO())(),function(x)
     {
      return g(Result.rtn(x));
     })),function(a)
     {
      return b.ReturnFrom$1(f(a,void 0));
     });
    });
   }),function()
   {
    Concurrency.Start((Rpc.addLlamadas())(-1),null);
   });
  }));
 };
 Rpc.enviarCorreosInvitacion=function(p,p$1)
 {
  var p$2,b;
  function f($1,$2)
  {
   return(function(tk)
   {
    var a;
    a=Aliado.get_LoggedId();
    return function(t)
    {
     return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc0.enviarCorreosInvitacion:1622714317",[tk,a,t[0],t[1]]);
    };
   }($1))($2);
  }
  p$2=[p,p$1];
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.TryFinally(b.Delay(function()
   {
    return Extensions["AsyncResultBuilder.Bind"](b,(Rpc.addLlamadas())(1),function()
    {
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return b.Bind$1(AsyncResult.absorbO(function()
     {
      self.location.href="/Login";
      return"User not logged in";
     },Concurrency.Bind((Msal$1.getTokenO())(),function(x)
     {
      return g(Result.rtn(x));
     })),function(a)
     {
      return b.ReturnFrom$1(f(a,p$2));
     });
    });
   }),function()
   {
    Concurrency.Start((Rpc.addLlamadas())(-1),null);
   });
  }));
 };
 Rpc.ejecutarDataEventoNuevo=function(p)
 {
  var b;
  function f($1,$2)
  {
   return(function(tk)
   {
    var a;
    a=Aliado.get_LoggedId();
    return function(d)
    {
     return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc0.ejecutarDataEventoNuevo:181407377",[tk,a,d]);
    };
   }($1))($2);
  }
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.TryFinally(b.Delay(function()
   {
    return Extensions["AsyncResultBuilder.Bind"](b,(Rpc.addLlamadas())(1),function()
    {
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return b.Bind$1(AsyncResult.absorbO(function()
     {
      self.location.href="/Login";
      return"User not logged in";
     },Concurrency.Bind((Msal$1.getTokenO())(),function(x)
     {
      return g(Result.rtn(x));
     })),function(a)
     {
      return b.ReturnFrom$1(f(a,p));
     });
    });
   }),function()
   {
    Concurrency.Start((Rpc.addLlamadas())(-1),null);
   });
  }));
 };
 Rpc.agregarUsuarioSiEsNuevo=function(p)
 {
  var b;
  function f($1,$2)
  {
   return(function(tk)
   {
    var a;
    a=Aliado.get_LoggedId();
    return function(c)
    {
     return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc0.agregarUsuarioSiEsNuevo:1579629588",[tk,a,c]);
    };
   }($1))($2);
  }
  b=Monads.asyncResult();
  return b.Run(b.Delay(function()
  {
   return b.TryFinally(b.Delay(function()
   {
    return Extensions["AsyncResultBuilder.Bind"](b,(Rpc.addLlamadas())(1),function()
    {
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return b.Bind$1(AsyncResult.absorbO(function()
     {
      self.location.href="/Login";
      return"User not logged in";
     },Concurrency.Bind((Msal$1.getTokenO())(),function(x)
     {
      return g(Result.rtn(x));
     })),function(a)
     {
      return b.ReturnFrom$1(f(a,p));
     });
    });
   }),function()
   {
    Concurrency.Start((Rpc.addLlamadas())(-1),null);
   });
  }));
 };
 Rpc.obtenerIdInfluyente=function(p)
 {
  var b;
  function f(c)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc0.obtenerIdInfluyente:231616815",[c]);
  }
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.TryFinally(Concurrency.Delay(function()
   {
    return Concurrency.Bind((Rpc.addLlamadas())(1),function()
    {
     return f(p);
    });
   }),function()
   {
    Concurrency.Start((Rpc.addLlamadas())(-1),null);
   });
  });
 };
 Rpc.obtenerUnions=function()
 {
  var b;
  function f()
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.ProzperServer+Rpc0.obtenerUnions:-1742744641",[]);
  }
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.TryFinally(Concurrency.Delay(function()
   {
    return Concurrency.Bind((Rpc.addLlamadas())(1),function()
    {
     return f(void 0);
    });
   }),function()
   {
    Concurrency.Start((Rpc.addLlamadas())(-1),null);
   });
  });
 };
 Rpc.iterA=function(arm)
 {
  AsyncResult.iterA(function(a)
  {
   Global.alert(a);
  },Global.ignore,arm);
 };
 Rpc.addLlamadas=function()
 {
  SC$1.$cctor();
  return SC$1.addLlamadas;
 };
 Rpc.llamadas=function()
 {
  SC$1.$cctor();
  return SC$1.llamadas;
 };
 Refresh.refrescarData=function(force)
 {
  var m,user,b;
  force?Refresh.set_shouldRefresh(true):void 0;
  m=Msal$1.userO().Get();
  m!=null&&m.$==1?(user=m.$0,Rpc.iterA((b=Monads.asyncResult(),b.Run(b.Delay(function()
  {
   return b.Combine$1(Msal$1.referidoPor()!==""?b.Bind$1(Rpc.agregarUsuarioSiEsNuevo(Msal$1.claims(user)),function()
   {
    return b.Return();
   }):b.Zero(),b.Delay(function()
   {
    return!self.document.hidden?Refresh.shouldRefresh()?b.Bind$1(Rpc.obtenerEstadoParaUsuario(),function(a)
    {
     Refresh.set_shouldRefresh(false);
     ModeloUI.modeloV().Set(a);
     return b.Zero();
    }):b.Zero():b.Zero();
   }));
  }))))):ModeloUI.modeloV().Set(TypesV0.modeloVacio());
 };
 Refresh.shouldRefresh=function()
 {
  SC$1.$cctor();
  return SC$1.shouldRefresh;
 };
 Refresh.set_shouldRefresh=function($1)
 {
  SC$1.$cctor();
  SC$1.shouldRefresh=$1;
 };
 VariousUI.removeButton=function(f,doc)
 {
  return Doc.Element("form",[AttrProxy.Create("class","mui-panel")],[doc,Doc.Button("borrar",[AttrProxy.Create("title","borrar")],f)]);
 };
 VariousUI.crearOptions2=function(nvs)
 {
  return Doc.Concat(Seq$1.map(function($1)
  {
   return VariousUI.crearOption2($1[0],$1[1]);
  },nvs));
 };
 VariousUI.crearOptions=function(ns)
 {
  return Doc.Concat(Seq$1.map(VariousUI.crearOption,ns));
 };
 VariousUI.crearOption2=function(n,v)
 {
  return Doc.Element("option",[AttrProxy.Create("value",v)],[Doc.TextNode(n)]);
 };
 VariousUI.crearOption=function(n)
 {
  return Doc.Element("option",[],[Doc.TextNode(n)]);
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
 VariousUI.mesesV=function()
 {
  SC$1.$cctor();
  return SC$1.mesesV;
 };
 VariousUI.aniosV=function()
 {
  SC$1.$cctor();
  return SC$1.aniosV;
 };
 VariousUI.statuses=function()
 {
  SC$1.$cctor();
  return SC$1.statuses;
 };
 VariousUI.tiposTar=function()
 {
  SC$1.$cctor();
  return SC$1.tiposTar;
 };
 VariousUI.tiposCta=function()
 {
  SC$1.$cctor();
  return SC$1.tiposCta;
 };
 VariousUI.generos=function()
 {
  SC$1.$cctor();
  return SC$1.generos;
 };
 VariousUI.tiposTel=function()
 {
  SC$1.$cctor();
  return SC$1.tiposTel;
 };
 VariousUI.tiposDir=function()
 {
  SC$1.$cctor();
  return SC$1.tiposDir;
 };
 VariousUI.estados=function()
 {
  SC$1.$cctor();
  return SC$1.estados;
 };
 VariousUI.paises=function()
 {
  SC$1.$cctor();
  return SC$1.paises;
 };
 VariousUI.alertIfNone=function(name,vO,f)
 {
  return vO!=null&&vO.$==1?f(vO.$0):(Global.alert("Error not caught: "+name),null);
 };
 VariousUI.thr3=function(a,a$1,v)
 {
  return v;
 };
 VariousUI.snd3=function(a,v,a$1)
 {
  return v;
 };
 VariousUI.fst3=Global.id;
 CorreoElectronico.formaDoc=function(corV)
 {
  var mensaje,forma,b,p,i,m,requeridosW;
  mensaje=Var$2.Create$1("");
  forma=(b=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"mensaje",
   $1:mensaje.get_View()
  }),(p=Handler.CompleteHoles(b.k,b.h,[["correo",0],["confirmarcorreo",0]]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.correo(p[0])),(b.i=i,i))));
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
     return Seq$1.map(function(t)
     {
      return t[1];
     },Seq$1.filter(function(t)
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
   return!Seq$1.isEmpty($1)?null:(o=(x=corV.Get(),(i$1={
    $:1,
    $0:TypesV0.correoVacio()
   },x==null?i$1:x)),o==null?null:{
    $:1,
    $0:(v=o.$0,CorreoElectronico$1.New($2,v.enviado,v.recibido))
   });
  },requeridosW,forma.Hole("correo").get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 Telefono.formaDoc=function(telOV)
 {
  var forma,b,T,p,i,requeridosW;
  forma=(b=(T=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.tiposTel().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tipos",
   $1:T
  })),(p=Handler.CompleteHoles(b.k,b.h,[["tipotelefono",0],["codigopais",0],["codigoarea",0],["telefono",0],["extension",0]]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.telefono(p[0])),(b.i=i,i))));
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
    return Seq$1.map(function(t)
    {
     return t[1];
    },Seq$1.filter(function(t)
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
   return Runtime.Curried(function($3,$4,$5,$6)
   {
    return!Seq$1.isEmpty($1)?null:VariousUI.alertIfNone("TipoTelefono",(TipoTelefono.get_tryParse())(Strings.Trim($2)),function(tipo)
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
  var forma,b,T,E,P,p,i,requeridosW;
  forma=(b=(T=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.tiposDir().get_View())),(E=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.estados().get_View())),(P=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.paises().get_View())),ProviderBuilder.Make().WithHole({
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
   $1:T
  })),(p=Handler.CompleteHoles(b.k,b.h,[["tipodireccion",0],["direccion1",0],["direccion2",0],["ciudad",0],["estado",0],["codigopostal",0],["pais",0]]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.direccion(p[0])),(b.i=i,i))));
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
   return Runtime.Curried(function($3,$4,$5,$6)
   {
    return Seq$1.map(function(t)
    {
     return t[1];
    },Seq$1.filter(function(t)
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
   return Runtime.Curried(function($3,$4,$5,$6,$7,$8,$9)
   {
    return!Seq$1.isEmpty($1)?null:VariousUI.alertIfNone("TipoDireccion",TipoDireccion.tryParse(Strings.Trim($2)),function(tipo)
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
         },o==null?Library.Error(""):o.$0),tipo,Strings.Trim($6),Strings.Trim($7),Strings.Trim($8),estado,pais,codigo)
        };
       });
      });
     });
    });
   },7);
  },requeridosW,forma.Hole("tipodireccion").get_View()),forma.Hole("estado").get_View()),forma.Hole("pais").get_View()),forma.Hole("codigopostal").get_View()),forma.Hole("direccion1").get_View()),forma.Hole("direccion2").get_View()),forma.Hole("ciudad").get_View()),dirV.get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 CuentaBancaria.formaDocO=function(ctaOV)
 {
  var v;
  return CuentaBancaria.formaDoc(Var$2.Lens(ctaOV,(v=[TypesV0.ctaVacio(),"",false],function(o)
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
 CuentaBancaria.formaDoc=function(ctaV)
 {
  var disabledW,forma,b,D,D$1,D$2,D$3,D$4,T,p,i,requeridosW;
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
  forma=(b=(D=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$1=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$2=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$3=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$4=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(T=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.tiposCta().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tiposcuenta",
   $1:T
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
  })),(p=Handler.CompleteHoles(b.k,b.h,[["tipocuenta",0],["titular",0],["numero",0],["banco",0],["routing",0]]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.cuentabancaria(p[0])),(b.i=i,i))));
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
     return Seq$1.map(function(t)
     {
      return t[1];
     },Seq$1.filter(function(t)
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
   return Runtime.Curried(function($3,$4,$5,$6)
   {
    return!Seq$1.isEmpty($1)?null:VariousUI.alertIfNone("TipoCuenta",TipoCuenta.tryParse(Strings.Trim($2)),function(tipoCta)
    {
     var b$1;
     return{
      $:1,
      $0:(b$1=Strings.Trim($3),CuentaBancaria$1.New(Strings.Trim($4),b$1,tipoCta,new TypesV0.NumeroCuenta({
       $:0,
       $0:Strings.Trim($5)
      }),new TypesV0.RoutingNumber({
       $:0,
       $0:Strings.Trim($6)
      })))
     };
    });
   },4);
  },requeridosW,forma.Hole("tipocuenta").get_View()),forma.Hole("banco").get_View()),forma.Hole("titular").get_View()),forma.Hole("numero").get_View()),forma.Hole("routing").get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 TarjetaCredito.formaDocO=function(tarOV)
 {
  var v;
  return TarjetaCredito.formaDoc(Var$2.Lens(tarOV,(v=[TypesV0.tarVacio(),"",false],function(o)
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
 TarjetaCredito.formaDoc=function(tarV)
 {
  var disabledW,forma,b,V,D,D$1,D$2,D$3,D$4,M,A,T,p,i,requeridosW;
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
  forma=(b=(V=AttrModule.Dynamic("style",View.Map(function($1)
  {
   return $1?"display:None":"";
  },disabledW)),(D=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$1=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$2=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$3=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$4=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(M=Doc.EmbedView(View.Map(function($1)
  {
   return VariousUI.crearOptions(Seq$1.map(Global.String,$1));
  },VariousUI.mesesV().get_View())),(A=Doc.EmbedView(View.Map(function($1)
  {
   return VariousUI.crearOptions(Seq$1.map(Global.String,$1));
  },VariousUI.aniosV().get_View())),(T=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.tiposTar().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tipostarjeta",
   $1:T
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
   $:3,
   $0:"visible",
   $1:V
  })),(p=Handler.CompleteHoles(b.k,b.h,[["tipotarjeta",0],["titular",0],["numero",0],["aniovenc",0],["mesvenc",0]]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.tarjetacredito(p[0])),(b.i=i,i))));
  View.Sink(function($1)
  {
   return a($1[0],$1[1],$1[2]);
  },tarV.get_View());
  requeridosW=View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime.Curried3(function($3,$4,$5)
   {
    return Seq$1.map(function(t)
    {
     return t[1];
    },Seq$1.filter(function(t)
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
   return Runtime.Curried(function($3,$4,$5,$6)
   {
    return!Seq$1.isEmpty($1)?null:VariousUI.alertIfNone("Tipo Tarjeta",TipoTarjeta.tryParse(Strings.Trim($2)),function(tipoTar)
    {
     var o,x,a$1;
     return{
      $:1,
      $0:TarjetaCredito$1.New(Strings.Trim($3),tipoTar,new TypesV0.NumeroTarjeta({
       $:0,
       $0:Strings.Trim($4)
      }),Expiracion.New((o=(x=Strings.Trim($5),(ParseO.parseIntO())(x)),o==null?0:o.$0),(a$1=Strings.Trim($6),a$1==="Febrero"?2:a$1==="Marzo"?3:a$1==="Abril"?4:a$1==="Mayo"?5:a$1==="Junio"?6:a$1==="Julio"?7:a$1==="Agosto"?8:a$1==="Septiembre"?9:a$1==="Octubre"?10:a$1==="Noviembre"?11:a$1==="Diciembre"?12:1)))
     };
    });
   },4);
  },requeridosW,forma.Hole("tipotarjeta").get_View()),forma.Hole("titular").get_View()),forma.Hole("numero").get_View()),forma.Hole("aniovenc").get_View()),forma.Hole("mesvenc").get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 DatosPersonales.formaDoc=function(datosV)
 {
  var forma,b,G,p,i,requeridosW;
  forma=(b=(G=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.generos().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"generos",
   $1:G
  })),(p=Handler.CompleteHoles(b.k,b.h,[["nombres",0],["apellidos",0],["fechanacimiento",0],["genero",0]]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.datospersonales(p[0])),(b.i=i,i))));
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
       return $1(prozperDes$js_GeneratedPrintf.p$2($2));
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
     return Seq$1.map(function(t)
     {
      return t[1];
     },Seq$1.filter(function(t)
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
   return Runtime.Curried(function($3,$4,$5,$6,$7)
   {
    return!Seq$1.isEmpty($1)?null:VariousUI.alertIfNone("Genero",Genero.tryParse($2),function(genero)
    {
     return VariousUI.alertIfNone("Fecha incorrecta",(ParseO.parseDateO2())($3),function(fecha)
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
 FormaRegistro.formaDoc$2175$45=function(mostrar,mensajes,datosOV,correoOV,telefonoOV,direccionOV)
 {
  return function()
  {
   var m,$1,$2,$3,$4,$5,correo,datos,direccion,telefono,b;
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):($1=datosOV.Get(),$2=correoOV.Get(),$3=telefonoOV.Get(),$4=direccionOV.Get(),$1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3!=null&&$3.$==1&&($4!=null&&$4.$==1&&($5=[$2.$0,$1.$0,$4.$0,$3.$0],true))))?(correo=$5[0],datos=$5[1],direccion=$5[2],telefono=$5[3],Rpc.iterA((b=Monads.asyncResult(),b.Run(b.Delay(function()
   {
    var c;
    return b.Bind$1(Rpc.ejecutarDataEventoNuevo({
     $:3,
     $0:[new TypesV0.IdAliado({
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
       return $6(prozperDes$js_GeneratedPrintf.p$3($7));
      };
     }(Global.id))(a));
     return b.Zero();
    });
   }))))):Global.alert("Error not caught FormaRegistro"));
  };
 };
 FormaRegistro.formaDoc=function()
 {
  var mensajes,mostrar,datosOV,correoOV,telefonoOV,direccionOV,p,p$1,p$2,p$3,forma,b,t,p$4,i;
  mensajes=Var$2.Create$1("");
  mostrar=Var$2.Create$1(false);
  datosOV=Var$2.Create$1(null);
  correoOV=Var$2.Create$1(null);
  telefonoOV=Var$2.Create$1(null);
  direccionOV=Var$2.Create$1(null);
  p=DatosPersonales.formaDoc(datosOV);
  p$1=CorreoElectronico.formaDoc(correoOV);
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
     $0:[new TypesV0.IdAliado({
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
       return $6(prozperDes$js_GeneratedPrintf.p$3($7));
      };
     }(Global.id))(a));
     return b$1.Zero();
    });
   }))))):Global.alert("Error not caught FormaRegistro"));
  }))),(p$4=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p$4[1],prozperDes$js_Templates.formaregistro(p$4[0])),(b.i=i,i))));
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
     es=Strings.concat(", ",Seq$1.delay(function()
     {
      return Seq$1.append($1,Seq$1.delay(function()
      {
       return Seq$1.append($2,Seq$1.delay(function()
       {
        return Seq$1.append($3,Seq$1.delay(function()
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
 FormaDatos.formaAliado$2228$40=function(mostrar,mensajes,datosOV,aliadoW)
 {
  return function()
  {
   var m,$1,$2,$3,al,datos,b;
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):($1=datosOV.Get(),$2=View.TryGet(aliadoW),$1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3=[$2.$0,$1.$0],true))?(al=$3[0],datos=$3[1],Rpc.iterA((b=Monads.asyncResult(),b.Run(b.Delay(function()
   {
    return b.Bind$1(Rpc.ejecutarDataEventoNuevo({
     $:4,
     $0:[al.id,datos]
    }),function(a)
    {
     Refresh.refrescarData(true);
     Global.alert((function($4)
     {
      return function($5)
      {
       return $4(prozperDes$js_GeneratedPrintf.p$3($5));
      };
     }(Global.id))(a));
     return b.Zero();
    });
   }))))):Global.alert("Error not caught FormaDatos"));
  };
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
  mensajes=Var$2.Create$1("");
  mostrar=Var$2.Create$1(false);
  datosOV=Var$2.Create$1(null);
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
       return $4(prozperDes$js_GeneratedPrintf.p$3($5));
      };
     }(Global.id))(a));
     return b$1.Zero();
    });
   }))))):Global.alert("Error not caught FormaDatos"));
  }))),(p$1=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p$1[1],prozperDes$js_Templates.formadatospersonales(p$1[0])),(b.i=i,i))));
  View.Sink(function(a)
  {
   mensajes.Set(a);
  },View.Map(function($1)
  {
   var es;
   es=Strings.concat(", ",Seq$1.delay(function()
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
 FormaContactos.formaContactos$2321$40=function(mostrar,mensajes,aliadoW,contactosV)
 {
  return function()
  {
   var m,m$1,al,b;
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):(m$1=View.TryGet(aliadoW),m$1!=null&&m$1.$==1?(al=m$1.$0,Rpc.iterA((b=Monads.asyncResult(),b.Run(b.Delay(function()
   {
    return b.Bind$1(Rpc.ejecutarDataEventoNuevo({
     $:5,
     $0:[al.id,contactosV.Get()]
    }),function(a)
    {
     Refresh.refrescarData(true);
     Global.alert((function($1)
     {
      return function($2)
      {
       return $1(prozperDes$js_GeneratedPrintf.p$3($2));
      };
     }(Global.id))(a));
     return b.Zero();
    });
   }))))):Global.alert("Error not caught FormaDatos"));
  };
 };
 FormaContactos.formaContactos$2320$46=function(contactosV)
 {
  return function()
  {
   contactosV.Set(contactosV.Get().concat([{
    $:0,
    $0:TypesV0.dirVacio()
   }]));
  };
 };
 FormaContactos.formaContactos$2319$46=function(contactosV)
 {
  return function()
  {
   contactosV.Set(contactosV.Get().concat([{
    $:1,
    $0:TypesV0.correoVacio()
   }]));
  };
 };
 FormaContactos.formaContactos$2318$46=function(contactosV)
 {
  return function()
  {
   contactosV.Set(contactosV.Get().concat([{
    $:2,
    $0:TypesV0.telVacio()
   }]));
  };
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
     o=Seq$1.tryItem(i$1,$1);
     return o==null?null:f(o.$0);
    },contactosV.get_View()),function(a)
    {
     if(a!=null&&a.$==1)
      contactosV.Set(Array.replace(i$1,fr(a.$0),contactosV.Get()));
    });
   };
  }
  mensajes=Var$2.Create$1("");
  mostrar=Var$2.Create$1(false);
  contactosV=Var$2.Create$1([]);
  View.Sink(function(a)
  {
   contactosV.Set(a);
  },View.Map(function(a)
  {
   return a.contactos;
  },aliadoW));
  contactosIV=View.Map(Seq$1.indexed,contactosV.get_View());
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
   return Seq$1.choose(function($2)
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
   return Seq$1.choose(function($2)
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
   return Seq$1.choose(function($2)
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
   },(CorreoElectronico.formaDoc((function($1)
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
       return $1(prozperDes$js_GeneratedPrintf.p$3($2));
      };
     }(Global.id))(a));
     return b$1.Zero();
    });
   }))))):Global.alert("Error not caught FormaDatos"));
  }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.formacontactos(p[0])),(b.i=i,i)))).get_Doc();
 };
 FormaContactos.formaTelefonos=function(aliadoW)
 {
  var contactosV,contactosIV,tels,cors,dirs,f,f$1,f$2,f$3,f$4,f$5;
  function makeVar(f$6,fr)
  {
   return function(i)
   {
    return new FromView.New(View.Map(function($1)
    {
     var o;
     o=Seq$1.tryItem(i,$1);
     return o==null?null:f$6(o.$0);
    },contactosV.get_View()),function(a)
    {
     if(a!=null&&a.$==1)
      contactosV.Set(Array.replace(i,fr(a.$0),contactosV.Get()));
    });
   };
  }
  function g(t)
  {
   return t[1];
  }
  function g$1(t)
  {
   return t[1];
  }
  function g$2(t)
  {
   return t[1];
  }
  contactosV=Var$2.Create$1([]);
  View.Sink(function(a)
  {
   contactosV.Set(a);
  },View.Map(function(a)
  {
   return a.contactos;
  },aliadoW));
  contactosIV=View.Map(Seq$1.indexed,contactosV.get_View());
  tels=View.Map(function($1)
  {
   function c(i,c$1)
   {
    return(FormaContactos.ftel())[0](c$1)==null?null:{
     $:1,
     $0:i
    };
   }
   return Seq$1.choose(function($2)
   {
    return c($2[0],$2[1]);
   },$1);
  },contactosIV);
  cors=View.Map(function($1)
  {
   function c(i,c$1)
   {
    return(FormaContactos.fcor())[0](c$1)==null?null:{
     $:1,
     $0:i
    };
   }
   return Seq$1.choose(function($2)
   {
    return c($2[0],$2[1]);
   },$1);
  },contactosIV);
  dirs=View.Map(function($1)
  {
   function c(i,c$1)
   {
    return(FormaContactos.fdir())[0](c$1)==null?null:{
     $:1,
     $0:i
    };
   }
   return Seq$1.choose(function($2)
   {
    return c($2[0],$2[1]);
   },$1);
  },contactosIV);
  Doc.ConvertBy(Global.id,(f=(f$1=makeVar.apply(null,FormaContactos.ftel()),function(x)
  {
   return Telefono.formaDoc(f$1(x));
  }),function(x)
  {
   return g(f(x));
  }),tels);
  Doc.ConvertBy(Global.id,(f$2=(f$3=makeVar.apply(null,FormaContactos.fcor()),function(x)
  {
   return CorreoElectronico.formaDoc(f$3(x));
  }),function(x)
  {
   return g$1(f$2(x));
  }),cors);
  Doc.ConvertBy(Global.id,(f$4=(f$5=makeVar.apply(null,FormaContactos.fdir()),function(x)
  {
   return Direccion.formaDoc(f$5(x));
  }),function(x)
  {
   return g$2(f$4(x));
  }),dirs);
 };
 FormaContactos.fdir=function()
 {
  SC$1.$cctor();
  return SC$1.fdir;
 };
 FormaContactos.fcor=function()
 {
  SC$1.$cctor();
  return SC$1.fcor;
 };
 FormaContactos.ftel=function()
 {
  SC$1.$cctor();
  return SC$1.ftel;
 };
 FormaFirma.formaFirma$2436$52=function(firmarDocumento)
 {
  return function()
  {
   firmarDocumento();
  };
 };
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
     return b$1.Bind$1(AsyncResult.map(function(a)
     {
      Global.alert(a);
     },procesar()),function()
     {
      ModeloUI.endPointV().Set(EndPoint.DefaultEP);
      return b$1.Zero();
     });
    });
   }))));
  }
  acepto=Var$2.Create$1(false);
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
   $1:Var$2.Lens(acepto,Global.id,function($1,$2)
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
   $0:"textobotonfirmar",
   $1:View.Map(function($1)
   {
    return $1?"FIRMADO!":"Firmar y Procesar";
   },FormaFirma.firmadoV().get_View())
  }),(p=Handler.CompleteHoles(b.k,b.h,[["firmante",0],["fecha",0],["acepto",2]]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.formafirma(p[0])),(b.i=i,i))));
  View.Sink(function(a)
  {
   FormaFirma.mensajes().Set(a);
  },View.Apply(View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime.Curried(function($3,$4,$5,$6)
   {
    return Strings.concat(", ",Seq$1.map(function(t$1)
    {
     return t$1[1];
    },Seq$1.filter(function(t$1)
    {
     return t$1[0];
    },List.ofArray([[Strings.Trim($1)!==$2.toUpperCase(),"Nombre en MAYUSCULAS debe coincidir"],[$3!==Library["String.Left"]($4,10),"Introduzca fecha de hoy (YYYY-MM-DD)"],[!Unchecked.Equals($5,true),"Acepte los terminos indicados"],[!Unchecked.Equals(Aliado.get_LoggedId(),$6.id),"El documento solo debe ser firmado por el titular de la cuenta"]]))));
   },4);
  },forma.Hole("firmante").get_View(),nombre),forma.Hole("fecha").get_View()),FormaFirma.fechaHoraV().get_View()),forma.Hole("acepto").get_View()),ModeloUI.aliadoW()));
  return forma.get_Doc();
 };
 FormaFirma.subirScreenShot=function(tipo,filenamePre)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.TryFinally(Concurrency.Delay(function()
   {
    FormaFirma.firmadoV().Set(true);
    return Concurrency.Bind(Concurrency.FromContinuations(function(cnt)
    {
     $.getJSON("https://ipapi.co/json/",function($1)
     {
      cnt($1);
     });
    }),function(a)
    {
     Seq$1.iter(function(k)
     {
      a[k]=self.navigator[k];
     },List.ofArray(["appVersion","platform","product","productSub","vendor","languages"]));
     Global.obj2Table(a);
     return Concurrency.Bind(Concurrency.Sleep(100),function()
     {
      return Concurrency.Bind(Promise.AsAsync(Global.html2canvas(self.document.querySelector("#FormaFirma"))),function(a$1)
      {
       var filename;
       self.document.body.appendChild(a$1);
       filename=(((Runtime.Curried3(function($1,$2,$3)
       {
        return $1(Utils.toSafe($2)+" "+Utils.toSafe($3)+".png");
       }))(Global.id))(filenamePre))(Strings.Replace(FormaFirma.fechaHoraV().Get(),":","."));
       FormaFirma.toBlob(a$1,function(blob)
       {
        var fd,r;
        fd=new Global.FormData();
        fd.append("fname",filename);
        fd.append("data",blob);
        $.ajax((r={},r.type="POST",r.url="/api/subir/"+ModeloUI.modeloV().Get().idAliado.get_Id()+"/"+filename,r.data=fd,r.contentType=false,r.processData=false,r.success=FormaFirma.uploaded(),r));
       });
       self.document.body.removeChild(a$1);
       return Rpc.ejecutarDataEventoNuevo({
        $:9,
        $0:[Aliado.get_LoggedId(),[Archivo.New(ModeloUI.modeloV().Get().idAliado,tipo,filename,Date$1.now(),0,TypesV0.StatusArchivo.Subido,"Firma Electronica")]]
       });
      });
     });
    });
   }),function()
   {
    Refresh.refrescarData(true);
    FormaFirma.firmadoV().Set(false);
   });
  });
 };
 FormaFirma.toBlob=function(canvas,f)
 {
  if(!(!canvas.toBlob))
   canvas.toBlob(f);
  else
   if(!(!canvas.msToBlob))
    f(canvas.msToBlob());
   else
    Global.alert("Browser no es compatible: toBlob");
 };
 FormaFirma.uploaded=function()
 {
  SC$1.$cctor();
  return SC$1.uploaded;
 };
 FormaFirma.firmadoV=function()
 {
  SC$1.$cctor();
  return SC$1.firmadoV;
 };
 FormaFirma.locationV=function()
 {
  SC$1.$cctor();
  return SC$1.locationV;
 };
 FormaFirma.fechaHoraV=function()
 {
  SC$1.$cctor();
  return SC$1.fechaHoraV;
 };
 FormaFirma.firmanteV=function()
 {
  SC$1.$cctor();
  return SC$1.firmanteV;
 };
 FormaFirma.mensajes=function()
 {
  SC$1.$cctor();
  return SC$1.mensajes;
 };
 FormaAutorizacion.formaAutorizacion=function()
 {
  var formaContenido,b,C,p,i,x,o,o$1;
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
    return Global.String(Aliado$1.dia($1.diaPago));
   },ModeloUI.aliadoW())
  }).WithHole({
   $:0,
   $0:"cuentadebitar",
   $1:C
  })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.autorizacionpago(p[0])),(b.i=i,i)))).get_Doc();
  x=(o=(o$1=FormaAutorizacion.cuentaPagoO().Get(),o$1==null?null:{
   $:1,
   $0:o$1.$0.get_AutorizacionPre()
  }),o==null?"Autorizacion -- ------":o.$0);
  return FormaFirma.formaFirma(FormaAutorizacion.titular().get_View(),formaContenido,TypesV0.TipoArchivo.Autorizacion,FormaAutorizacion.actualizarSubscripcion,x);
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
 FormaAutorizacion.pid=function()
 {
  SC$1.$cctor();
  return SC$1.pid;
 };
 FormaAutorizacion.set_pid=function($1)
 {
  SC$1.$cctor();
  SC$1.pid=$1;
 };
 FormaAutorizacion.titular=function()
 {
  SC$1.$cctor();
  return SC$1.titular;
 };
 FormaAutorizacion.cuentaAutorizar=function()
 {
  SC$1.$cctor();
  return SC$1.cuentaAutorizar;
 };
 FormaAutorizacion.cuentaPagoO=function()
 {
  SC$1.$cctor();
  return SC$1.cuentaPagoO;
 };
 FormaContrato.formaContrato=function()
 {
  var nombreW,b,p,i;
  nombreW=View.Map(function($1)
  {
   return Aliado$1.nombre2($1.datosPersonales);
  },ModeloUI.aliadoW());
  return FormaFirma.formaFirma(nombreW,(b=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"aliado",
   $1:nombreW
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.contrato(p[0])),(b.i=i,i)))).get_Doc(),TypesV0.TipoArchivo.Contrato,FormaContrato.firmarContrato,"Contrato");
 };
 FormaContrato.firmarContrato=function()
 {
  return AsyncResult.rtn("Contrato firmado!");
 };
 FormaFormasPago.formaDoc=function()
 {
  return ModeloUI.aliadoIdDoc(FormaFormasPago.formaFormasPago);
 };
 FormaFormasPago.formaFormasPago$2588$40=function(mostrar,mensajes,aliadoW,fpIds,formasPagoV)
 {
  return function()
  {
   var m,m$1,b;
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):(m$1=View.TryGet(aliadoW),m$1!=null&&m$1.$==1?Rpc.iterA((b=Monads.asyncResult(),b.Run(b.Delay(function()
   {
    return b.Combine$1(b.For(FSharpSet.op_Subtraction(fpIds(ModeloUI.formasPagoAliadoV().Get()),fpIds(formasPagoV.Get())),function(a)
    {
     return b.Bind$1(Rpc.borrarFormaPago(a),function()
     {
      return b.Zero();
     });
    }),b.Delay(function()
    {
     return b.Combine$1(b.For(formasPagoV.Get(),function(a)
     {
      var callO,m$2,$1,$2;
      callO=(m$2=a.cuentaPago,m$2.$==1&&(!(m$2.$0.numero.get_Id().indexOf("X")!=-1)&&($1=m$2.$0,true))?{
       $:1,
       $0:Rpc.registrarTarjeta($1)
      }:m$2.$==0&&(!(m$2.$0.numero.get_Id().indexOf("X")!=-1)&&($2=m$2.$0,true))?{
       $:1,
       $0:Rpc.registrarCuenta($2)
      }:null);
      return callO!=null&&callO.$==1?b.Bind$1(callO.$0,function()
      {
       return b.Zero();
      }):b.Zero();
     }),b.Delay(function()
     {
      FormaFormasPago.refrescarFormasPago();
      Refresh.refrescarData(true);
      return b.Zero();
     }));
    }));
   })))):Global.alert("Error not caught FormaDatos"));
  };
 };
 FormaFormasPago.formaFormasPago$2586$46=function(formasPagoV,fp)
 {
  return function()
  {
   formasPagoV.Set(formasPagoV.Get().concat([fp(new TypesV0.CuentaPago({
    $:0,
    $0:TypesV0.ctaVacio()
   }))]));
  };
 };
 FormaFormasPago.formaFormasPago$2585$46=function(formasPagoV,fp)
 {
  return function()
  {
   formasPagoV.Set(formasPagoV.Get().concat([fp(new TypesV0.CuentaPago({
    $:1,
    $0:TypesV0.tarVacio()
   }))]));
  };
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
     o=Seq$1.tryItem(i$1,$1);
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
   },Doc.Concat(List.ofSeq(Seq$1.delay(function()
   {
    return Seq$1.append([Doc.Button("AUTORIZAR DEBITO",[AttrProxy.Create("class","mui-btn mui-btn--raised mui-btn--primary"),AttrProxy.Create("title","Autorizar pago recurrente"),AttrModule.Dynamic("style",View.Map(function($1)
    {
     return Arrays.get($1,i$1).authorizeIdR.$==0?"":"display:None";
    },formasPagoV.get_View()))],function()
    {
     var $1,$2,$3,a,a$1;
     $2=Arrays.get(formasPagoV.Get(),i$1).authorizeIdR;
     $3=Arrays.get(formasPagoV.Get(),i$1).cuentaPago;
     switch($2.$==0?$3.$==0?($1=[$2.$0,$3.$0.titular],1):$3.$==1?($1=[$2.$0,$3.$0.titular],1):2:($1=$2.$0,0))
     {
      case 0:
       Global.alert("Pago no está verificado en Authorize: "+$1);
       break;
      case 1:
       a={
        $:1,
        $0:Arrays.get(formasPagoV.Get(),i$1).cuentaPago
       };
       FormaAutorizacion.cuentaPagoO().Set(a);
       a$1=docF();
       FormaAutorizacion.cuentaAutorizar().Set(a$1);
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
    })],Seq$1.delay(function()
    {
     return Seq$1.append([Doc.Element("br",[],[])],Seq$1.delay(function()
     {
      return Seq$1.append([Doc.Element("br",[],[])],Seq$1.delay(function()
      {
       return Seq$1.append([docF()],Seq$1.delay(function()
       {
        return Seq$1.append([Doc.BindView(Global.id,View.Map(function($1)
        {
         var m;
         m=Arrays.get($1,i$1).subscripcion;
         return m!=null&&m.$==1?Doc.Element("div",[],[Doc.TextNode((function($2)
         {
          return function($3)
          {
           return $2("Subscripcion: "+Utils.toSafe($3));
          };
         }(Global.id))(m.$0.get_Short()))]):Doc.get_Empty();
        },formasPagoV.get_View()))],Seq$1.delay(function()
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
     }));
    }));
   }))));
  }
  function fp(cp)
  {
   return FormaPago.New("",Library.Error(""),cp,null);
  }
  function fpIds(fps)
  {
   return new FSharpSet.New(Seq$1.choose(function(fp$1)
   {
    var m;
    m=fp$1.authorizeIdR;
    return m.$==0?{
     $:1,
     $0:m.$0
    }:null;
   },fps));
  }
  mensajes=Var$2.Create$1("");
  mostrar=Var$2.Create$1(false);
  formasPagoV=Var$2.Create$1([]);
  View.Sink(function(a)
  {
   formasPagoV.Set(a);
  },ModeloUI.formasPagoAliadoV().get_View());
  FormaFormasPago.refrescarFormasPago();
  formasPagoIW=View.Map(Seq$1.indexed,formasPagoV.get_View());
  tars=View.Map(function($1)
  {
   function c(i$1,c$1)
   {
    return(FormaFormasPago.ftar())[0](c$1)==null?null:{
     $:1,
     $0:i$1
    };
   }
   return Seq$1.choose(function($2)
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
   return Seq$1.choose(function($2)
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
    return(TarjetaCredito.formaDocO(v))[1];
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
    return(CuentaBancaria.formaDocO(v))[1];
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
   formasPagoV.Set(formasPagoV.Get().concat([fp(new TypesV0.CuentaPago({
    $:1,
    $0:TypesV0.tarVacio()
   }))]));
  }))),t$1.WithHole(Handler.EventQ2(t$1.k,"mascuenta",function()
  {
   return t$1.i;
  },function()
  {
   formasPagoV.Set(formasPagoV.Get().concat([fp(new TypesV0.CuentaPago({
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
  }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.formacuentas(p[0])),(b.i=i,i)))).get_Doc();
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
 FormaFormasPago.msg=function(a)
 {
  var idR;
  idR=a.authorizeIdR;
  return idR.$==0?(function($1)
  {
   return function($2)
   {
    return $1("Cuenta verificada: "+prozperDes$js_GeneratedPrintf.p$4($2));
   };
  }(Global.id))(idR.$0):idR.$0===""?"La cuenta aun no ha sido verificada":idR.$0;
 };
 RenderAliados.aliados$2690$53=function(seleccionar,alid)
 {
  return function()
  {
   seleccionar(alid);
  };
 };
 RenderAliados.aliados$2688$53=function(expandir,alid)
 {
  return function()
  {
   expandir(alid);
  };
 };
 RenderAliados.aliados=function()
 {
  var expandidos,hijosDeO,b,T,x,p,i;
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
   return al.nReferidos===0?"-":(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Global.String($2)+"/"+Global.String($3));
   }))(Global.id))(al.nRefActivos))(al.nReferidos);
  }
  function descendientes(al)
  {
   return al.nDescendientes===0?"-":(((Runtime.Curried3(function($1,$2,$3)
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
    return Seq$1.isEmpty(hijosDe(id))?"":Unchecked.Equals(exp==null?null:{
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
    return Aliado$1.nombre(al.datosPersonales);
   }
   function buscarExpandidos(al)
   {
    return Seq$1.delay(function()
    {
     return Seq$1.append([al],Seq$1.delay(function()
     {
      var o$1,o$2;
      return(o$1=(o$2=expandidos.Get(),o$2==null?null:{
       $:1,
       $0:o$2.$0.Contains(al.id)
      }),o$1==null?false:o$1.$0)?Seq$1.collect(buscarExpandidos,buscar.hijos(al)):[];
     }));
    });
   }
   als$1=(c=(c$1=(c$2=(c$3=(c$4=(Runtime.Curried3(SortWith.desc))(f),c$5=(Runtime.Curried3(SortWith.asc))(f$1),Runtime.Curried(SortWith.op_AmpGreater,2,[function($2,$3)
   {
    return(c$4($2))($3);
   },function($2,$3)
   {
    return(c$5($2))($3);
   }])),c$6=(Runtime.Curried3(SortWith.desc))(f$2),Runtime.Curried(SortWith.op_AmpGreater,2,[function($2,$3)
   {
    return(c$3($2))($3);
   },function($2,$3)
   {
    return(c$6($2))($3);
   }])),c$7=(Runtime.Curried3(SortWith.desc))(f$3),Runtime.Curried(SortWith.op_AmpGreater,2,[function($2,$3)
   {
    return(c$2($2))($3);
   },function($2,$3)
   {
    return(c$7($2))($3);
   }])),c$8=(Runtime.Curried3(SortWith.asc))(f$4),Runtime.Curried(SortWith.op_AmpGreater,2,[function($2,$3)
   {
    return(c$1($2))($3);
   },function($2,$3)
   {
    return(c$8($2))($3);
   }])),Seq$1.sortWith(function($2,$3)
   {
    return(c($2))($3);
   },als));
   buscar=Aliado$1.busqueda(als$1);
   hijosDeO.Set({
    $:1,
    $0:buscar.hijosDe
   });
   try
   {
    nivel=Seq$1.min(Seq$1.map(function(al)
    {
     return al.nivel;
    },als$1));
   }
   catch(m)
   {
    nivel=1;
   }
   raiz=Seq$1.filter(function(al)
   {
    return al.nivel===nivel;
   },als$1);
   Seq$1.isEmpty(raiz)?expandidos.Set(null):expandidos.Get()==null?(expandidos.Set({
    $:1,
    $0:new FSharpSet.New(Seq$1.map(function(al)
    {
     return al.id;
    },raiz))
   }),o=Seq$1.tryHead(Seq$1.map(function(al)
   {
    return al.id;
   },raiz)),o==null?void 0:seleccionar(o.$0)):void 0;
   return Seq$1.delay(function()
   {
    return Seq$1.collect(buscarExpandidos,raiz);
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
     return Aliado$1.nombre($1.datosPersonales);
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
       return $2(ProzperServer_GeneratedPrintf.p($3));
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
       return $2(ProzperServer_GeneratedPrintf.p$1($3));
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
   }))),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],prozperDes$js_Templates.filaaliado(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();
  }
  expandidos=Var$2.Create$1(null);
  hijosDeO=Var$2.Create$1(null);
  return(b=(T=Doc.ConvertSeqBy(function(al)
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
   $1:T
  })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.tablaaliados(p[0])),(b.i=i,i)))).get_Doc();
 };
 RenderAliado.aliado=function()
 {
  function correo(al)
  {
   var o;
   o=Seq$1.tryPick(function(a)
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
     return Aliado$1.nombre2($1.datosPersonales);
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
       return $2(ProzperServer_GeneratedPrintf.p($3));
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
       return $2(ProzperServer_GeneratedPrintf.p$1($3));
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
   })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.aliado(p[0])),(b.i=i,i)))).get_Doc();
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
   return Seq$1.tryFind(function(al)
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
   comisionV=View.Map2(Aliado$1.comision,prem,alv);
   premisasV=View.Map2(Aliado$1.premisas,prem,alv);
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
   }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.calculo(p[0])),(b.i=i,i)))).get_Doc();
  });
 };
 Transacciones.transacciones=function()
 {
  return ModeloUI.selAliadoIdDoc(Transacciones.docTransacciones);
 };
 Transacciones.docTransacciones=function(aliadoW)
 {
  var b,T,p,i;
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
   }),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],prozperDes$js_Templates.transaccion(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();
  }
  function a$1(trs,al)
  {
   return Seq$1.sortBy(function(tr)
   {
    return tr.fechaPago;
   },Seq$1.filter(function(tr)
   {
    return Unchecked.Equals(tr.idAliado,al.id);
   },trs));
  }
  return(b=(T=Doc.ConvertSeqBy(function(tr)
  {
   return tr.transaccion;
  },function($1)
  {
   return function($2)
   {
    return a($1,$2);
   };
  },(((Runtime.Curried3(View.Map2))(a$1))(Transacciones.transaccionesW()))(aliadoW)),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tbody",
   $1:T
  })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.transacciones(p[0])),(b.i=i,i)))).get_Doc();
 };
 Transacciones.transaccionesW=function()
 {
  SC$1.$cctor();
  return SC$1.transaccionesW;
 };
 ListaDocs.listaDocs$2849$36=function(docsV,origV,refrescarListaDocs)
 {
  return function()
  {
   var b;
   Rpc.iterA((b=Monads.asyncResult(),b.Run(b.Delay(function()
   {
    var ars;
    ars=Arrays.ofSeq(Seq$1.filter(function(ar)
    {
     return!Unchecked.Equals(Seq$1.tryFind(function(o)
     {
      return o.nombre===ar.nombre;
     },origV["var"].Get()),{
      $:1,
      $0:ar
     });
    },docsV["var"].Get()));
    return!Seq$1.isEmpty(ars)?Extensions["AsyncResultBuilder.Bind"](b,View.GetAsync(ListaDocs.aliadoIdW()),function(a)
    {
     return b.Bind$1(Rpc.ejecutarDataEventoNuevo({
      $:9,
      $0:[a,ars]
     }),function(a$1)
     {
      refrescarListaDocs();
      Refresh.refrescarData(true);
      Global.alert((function($1)
      {
       return function($2)
       {
        return $1(prozperDes$js_GeneratedPrintf.p$3($2));
       };
      }(Global.id))(a$1));
      return b.Zero();
     });
    }):b.Zero();
   }))));
  };
 };
 ListaDocs.listaDocs$2846$36=function(subir)
 {
  return function(e)
  {
   var x;
   x=View.Map(function(aid)
   {
    return aid.get_Id();
   },ListaDocs.aliadoIdW());
   View.Get(subir(e.Event),x);
  };
 };
 ListaDocs.listaDocs=function()
 {
  var docsV,origV,b,t,T,t$1,T$1,p,i;
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
      $0:[new TypesV0.IdAliado({
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
   form=$("#SubirDocumentos");
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
  docsV=ListModel$1.Create(function(ar)
  {
   return ar.nombre;
  },[]);
  origV=ListModel$1.Create(function(ar)
  {
   return ar.nombre;
  },[]);
  View.Sink(function(id)
  {
   if(!Unchecked.Equals(id,new TypesV0.IdAliado({
    $:0,
    $0:""
   })))
    refrescarListaDocs();
  },ListaDocs.aliadoIdW());
  return(b=(t=(T=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.tiposAr().get_View())),(t$1=(T$1=ListModel.docLensMapView(Global.id,function(nm,arV)
  {
   var disabledW,enlace,b$1,i$1,p$1,i$2,b$2,d,s,s$1,g,o,t$2,g$1,o$1,p$2,i$3;
   disabledW=View.Map(function($1)
   {
    return Unchecked.Equals($1.idAliado,Aliado.get_LoggedId());
   },arV.get_View());
   enlace=(b$1=(i$1=View.Map(function($1)
   {
    return $1.get_Id();
   },ListaDocs.aliadoIdW()),ProviderBuilder.Make().WithHole({
    $:2,
    $0:"idaliado",
    $1:i$1
   })).WithHole({
    $:2,
    $0:"archivo",
    $1:View.Map(function($1)
    {
     return $1.nombre;
    },arV.get_View())
   }).WithHole({
    $:2,
    $0:"nombre",
    $1:View.Map(function($1)
    {
     return $1.nombre;
    },arV.get_View())
   }),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$2=new TemplateInstance.New(p$1[1],prozperDes$js_Templates.enlacedocumento(p$1[0])),(b$1.i=i$2,i$2)))).get_Doc();
   return(b$2=(d=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(s=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.statusAr().get_View())),(s$1=new FromView.New(View.Map(function($1)
   {
    return Global.String($1.status);
   },arV.get_View()),(g=(o=Var$2.Lens(arV,function($1)
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
   },arV.get_View()),(g$1=(o$1=Var$2.Lens(arV,function($1)
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
    $:0,
    $0:"enlace",
    $1:enlace
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
    $:0,
    $0:"statuses",
    $1:s
   })).WithHole({
    $:3,
    $0:"disabled",
    $1:d
   })),(p$2=Handler.CompleteHoles(b$2.k,b$2.h,[["tipo",0],["status",0]]),(i$3=new TemplateInstance.New(p$2[1],prozperDes$js_Templates.filadocs(p$2[0])),(b$2.i=i$3,i$3)))).get_Doc();
  },docsV),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tbody",
   $1:T$1
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
   $1:T
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
    ars=Arrays.ofSeq(Seq$1.filter(function(ar)
    {
     return!Unchecked.Equals(Seq$1.tryFind(function(o)
     {
      return o.nombre===ar.nombre;
     },origV["var"].Get()),{
      $:1,
      $0:ar
     });
    },docsV["var"].Get()));
    return!Seq$1.isEmpty(ars)?Extensions["AsyncResultBuilder.Bind"](b$1,View.GetAsync(ListaDocs.aliadoIdW()),function(a)
    {
     return b$1.Bind$1(Rpc.ejecutarDataEventoNuevo({
      $:9,
      $0:[a,ars]
     }),function(a$1)
     {
      refrescarListaDocs();
      Refresh.refrescarData(true);
      Global.alert((function($1)
      {
       return function($2)
       {
        return $1(prozperDes$js_GeneratedPrintf.p$3($2));
       };
      }(Global.id))(a$1));
      return b$1.Zero();
     });
    }):b$1.Zero();
   }))));
  }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.subirdocumentos(p[0])),(b.i=i,i)))).get_Doc();
 };
 ListaDocs.aliadoIdW=function()
 {
  SC$1.$cctor();
  return SC$1.aliadoIdW;
 };
 ListaDocs.expandedOV=function()
 {
  SC$1.$cctor();
  return SC$1.expandedOV;
 };
 Enlace.Subir=function()
 {
  SC$1.$cctor();
  return SC$1.Subir;
 };
 Enlace.FormaContrato=function()
 {
  SC$1.$cctor();
  return SC$1.FormaContrato;
 };
 Enlace.FormasPago=function()
 {
  SC$1.$cctor();
  return SC$1.FormasPago;
 };
 Enlace.FormaW8BEN=function()
 {
  SC$1.$cctor();
  return SC$1.FormaW8BEN;
 };
 Enlace.FormaW9=function()
 {
  SC$1.$cctor();
  return SC$1.FormaW9;
 };
 Pendientes.pendientes=function(aliadoW)
 {
  return Doc.BindView(Global.id,View.MapAsync(function(al)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind(Pendientes.chequearStatusAliado(al,Rpc.obtenerListaDocs(al.id),Rpc.obtenerFormasDePagoId(al.id)),function(a)
    {
     var $1,b$1,p,p$1,i;
     return a.$==0&&Seq$1.isEmpty(a.$0)?Concurrency.Return(Doc.get_Empty()):a.$==1?Concurrency.Return(Doc.TextNode(a.$0)):Concurrency.Return((b$1=(p=Doc.Concat(Seq$1.map(Pendientes.pendiente,a.$0)),ProviderBuilder.Make().WithHole({
      $:0,
      $0:"pasos",
      $1:p
     })),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i=new TemplateInstance.New(p$1[1],prozperDes$js_Templates.pendientes(p$1[0])),(b$1.i=i,i)))).get_Doc());
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
     ctasAuth=Seq$1.filter(function(fp)
     {
      return fp.authorizeIdR.$==0;
     },a$1);
     return b.Return(List.ofSeq(Seq$1.delay(function()
     {
      var t;
      return Seq$1.append(Pendientes.chequearArchivos((t=TipoArchivo.Contrato,function(a$2)
      {
       return Pendientes.esArchivoTipo(t,a$2);
      }),Pendientes.firmarContrato,a),Seq$1.delay(function()
      {
       return Seq$1.append(Pendientes.chequearCuentas(function()
       {
        return true;
       },Pendientes.agregarCuenta,a$1),Seq$1.delay(function()
       {
        return Seq$1.append(Seq$1.length(ctasAuth)>0?Pendientes.chequearArchivos(function(a$2)
        {
         return Pendientes.esAutorizacion(ctasAuth,a$2);
        },Pendientes.firmarAutorizacion,a):[],Seq$1.delay(function()
        {
         var t$1;
         return Seq$1.append(Pendientes.chequearArchivos((t$1=TipoArchivo.FormaW9,function(a$2)
         {
          return Pendientes.esArchivoTipo(t$1,a$2);
         }),function()
         {
          return Pendientes.subirArchivoTipo(TipoArchivo.FormaW9);
         },a),Seq$1.delay(function()
         {
          var t$2;
          return Seq$1.append(Pendientes.chequearArchivos((t$2=TipoArchivo.FormaW8BEN,function(a$2)
          {
           return Pendientes.esArchivoTipo(t$2,a$2);
          }),function()
          {
           return Pendientes.subirArchivoTipo(TipoArchivo.FormaW8BEN);
          },a),Seq$1.delay(function()
          {
           return Pendientes.chequearArchivos(Pendientes.esIdentificacion,Pendientes.subirIdentificacion,a);
          }));
         }));
        }));
       }));
      }));
     })));
    });
   }):b.Return(List.T.Empty);
  }));
 };
 Pendientes.esAutorizacion=function(cuentas,archivo)
 {
  return archivo.tipo.$===1&&Seq$1.exists(function(fp)
  {
   return archivo.nombre.indexOf(fp.cuentaPago.get_MaskedCuenta())!=-1;
  },cuentas);
 };
 Pendientes.chequearCuentas=function(es,agregar,cuentas)
 {
  var m;
  m=Pendientes.filtroCuenta(es,cuentas);
  return!Unchecked.Equals(m,null)&&m.length===0?[agregar()]:Seq$1.map(Pendientes.verificarCuenta,m);
 };
 Pendientes.verificarCuenta=function(fp)
 {
  var sub,o,o$1,m;
  sub=(o=(o$1=fp.subscripcion,o$1==null?null:{
   $:1,
   $0:"Subscripción: "+o$1.$0.get_Short()
  }),o==null?"":o.$0);
  m=fp.authorizeIdR;
  return m.$==1?List.ofArray([Doc.Element("i",[AttrProxy.Create("class","far fa-square")],[]),Doc.TextNode(((((Runtime.Curried(function($1,$2,$3,$4)
  {
   return $1(" "+Utils.toSafe($2)+" "+Utils.toSafe($3)+" NO REGISTRADA en Authorize ("+Utils.toSafe($4)+")");
  },4))(Global.id))(fp.cuentaPago.get_TipoLargo()))(fp.cuentaPago.get_MaskedCuenta()))(m.$0))]):List.ofArray([Doc.Element("i",[AttrProxy.Create("class","far fa-check-square")],[]),Doc.TextNode((((((Runtime.Curried(function($1,$2,$3,$4,$5)
  {
   return $1(" "+Utils.toSafe($2)+" "+Utils.toSafe($3)+" Registrada. ("+Utils.toSafe($4)+") "+Utils.toSafe($5));
  },5))(Global.id))(fp.cuentaPago.get_TipoLargo()))(fp.cuentaPago.get_MaskedCuenta()))(m.$0.get_Id()))(sub))]);
 };
 Pendientes.chequearArchivos=function(es,subirlo,archivos)
 {
  var m,m$1,mensajes;
  m=Pendientes.filtroArchivo(es,archivos);
  return!Unchecked.Equals(m,null)&&m.length===0?[subirlo()]:(m$1=Seq$1.tryFind(function(d)
  {
   return d.status.$===1;
  },m),m$1==null?(mensajes=Seq$1.map(Pendientes.verificarArchivo,m),Seq$1.exists(function(d)
  {
   return d.status.$!==2;
  },m)?mensajes:Seq$1.append(mensajes,[subirlo()])):[Pendientes.verificarArchivo(m$1.$0)]);
 };
 Pendientes.verificarArchivo=function(ar)
 {
  var m;
  m=ar.status;
  return m.$==1?List.ofArray([Doc.Element("i",[AttrProxy.Create("class","fas fa-check-double")],[]),Doc.TextNode(" "),Pendientes.enlaceArchivo(ar),Doc.TextNode((function($1)
  {
   return function($2)
   {
    return $1(" Verificad"+Utils.toSafe($2));
   };
  }(Global.id))(Pendientes.sufijo(ar)))]):m.$==2?List.ofArray([Doc.Element("i",[AttrProxy.Create("class","fas fa-times-circle")],[]),Doc.TextNode(" "),Pendientes.enlaceArchivo(ar),Doc.TextNode((function($1)
  {
   return function($2)
   {
    return $1(" Rechazad"+Utils.toSafe($2));
   };
  }(Global.id))(Pendientes.sufijo(ar)))]):Pendientes.pendienteArchivo(ar);
 };
 Pendientes.pendienteArchivo=function(ar)
 {
  return List.ofArray([Doc.Element("i",[AttrProxy.Create("class","far fa-check-square")],[]),Doc.TextNode(" "),Pendientes.enlaceArchivo(ar),Doc.TextNode((function($1)
  {
   return function($2)
   {
    return $1(" subid"+Utils.toSafe($2)+". ");
   };
  }(Global.id))(Pendientes.sufijo(ar))),Doc.Element("i",[AttrProxy.Create("class","far fa-square")],[]),Doc.TextNode(" Pendiente de Verificacion")]);
 };
 Pendientes.subirIdentificacion=function()
 {
  return List.ofArray([Doc.Element("i",[AttrProxy.Create("class","far fa-square")],[]),Pendientes.enlace(Enlace.Subir()," Subir "),Doc.TextNode("documento de identidad: "),Pendientes.enlace(Enlace.Subir(),"Cedula, Pasaporte, Licencia de Conducir")]);
 };
 Pendientes.subirArchivoTipo=function(tipo)
 {
  var p;
  p=Pendientes.tarchivo2String(tipo);
  return List.ofArray([Doc.Element("i",[AttrProxy.Create("class","far fa-square")],[]),Pendientes.enlace(Enlace.Subir()," Subir "+p[0][0]+"."),Pendientes.enlace(p[1],"(Descargar aqui)")]);
 };
 Pendientes.firmarAutorizacion=function()
 {
  return List.ofArray([Doc.Element("i",[AttrProxy.Create("class","far fa-square")],[]),Doc.TextNode(" Firmar "),Pendientes.enlace(Enlace.FormasPago(),"Autorizacion (Haga click en: AUTORIZAR DEBITO)")]);
 };
 Pendientes.firmarContrato=function()
 {
  return List.ofArray([Doc.Element("i",[AttrProxy.Create("class","far fa-square")],[]),Doc.TextNode(" Firmar "),Pendientes.enlace(Enlace.FormaContrato(),"Contrato")]);
 };
 Pendientes.agregarCuenta=function()
 {
  return List.ofArray([Doc.Element("i",[AttrProxy.Create("class","far fa-square")],[]),Doc.TextNode(" Agregar Forma de pago: "),Pendientes.enlace(Enlace.FormasPago(),"Tarjeta de Credito o Cuenta Bancaria")]);
 };
 Pendientes.enlaceArchivo=function(ar)
 {
  var b,n,p,i;
  return(b=(n=(Pendientes.tarchivo2String(ar.tipo))[0][0],ProviderBuilder.Make().WithHole({
   $:1,
   $0:"idaliado",
   $1:ar.idAliado.get_Id()
  }).WithHole({
   $:1,
   $0:"archivo",
   $1:ar.nombre
  }).WithHole({
   $:1,
   $0:"title",
   $1:ar.nombre
  }).WithHole({
   $:1,
   $0:"nombre",
   $1:n
  })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.enlacedocumento(p[0])),(b.i=i,i)))).get_Doc();
 };
 Pendientes.enlace=function(dir,texto)
 {
  return Doc.Element("a",[AttrProxy.Create("href",dir)],[Doc.TextNode(texto)]);
 };
 Pendientes.sufijo=function(ar)
 {
  return(Pendientes.tarchivo2String(ar.tipo))[0][1];
 };
 Pendientes.tarchivo2String=function(a)
 {
  return a.$==6?[["Formulario W-8BEN","o"],Enlace.FormaW8BEN()]:a.$==1?[["Autorización de pago","a"],Enlace.FormasPago()]:a.$==0?[["Contrato","o"],Enlace.FormaContrato()]:a.$==3?[["Cedula","a"],Enlace.Subir()]:a.$==4?[["Licencia de Conducir","a"],Enlace.Subir()]:a.$==2?[["Pasaporte","o"],Enlace.Subir()]:a.$==7?[[a.$0,"o(a)"],Enlace.Subir()]:[["Formulario W-9","o"],Enlace.FormaW9()];
 };
 Pendientes.pendiente=function(docs)
 {
  return Doc.Element("li",[],docs);
 };
 Pendientes.filtroCuenta=function(p,cuentas)
 {
  return Arrays.ofSeq(Seq$1.filter(p,cuentas));
 };
 Pendientes.tryArchivoTipo=function(tipo)
 {
  function p(ar)
  {
   return Unchecked.Equals(ar.tipo,tipo);
  }
  return function(a)
  {
   return Pendientes.tryArchivo(p,a);
  };
 };
 Pendientes.tryArchivo=function(p,archivos)
 {
  return Seq$1.tryFind(p,Pendientes.filtroArchivo(function()
  {
   return true;
  },archivos));
 };
 Pendientes.filtroArchivo=function(p,archivos)
 {
  return Arrays.ofSeq(Seq$1.filter(p,Seq$1.filter(function(ar)
  {
   return ar.status.$!==3&&ar.status.$!==4;
  },archivos)));
 };
 Pendientes.esArchivoTipo=function(tipo,ar)
 {
  return Unchecked.Equals(ar.tipo,tipo);
 };
 Pendientes.esIdentificacion=function(ar)
 {
  var m;
  m=ar.tipo;
  return m.$==2||(m.$==3||m.$==4);
 };
 ReporteConsolidado.consolidado$3199$50=function(toggle,ordenV)
 {
  return function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_desde()));
  };
 };
 ReporteConsolidado.consolidado$3198$50=function(toggle,ordenV)
 {
  return function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_diaPago()));
  };
 };
 ReporteConsolidado.consolidado$3197$50=function(toggle,ordenV)
 {
  return function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_comision()));
  };
 };
 ReporteConsolidado.consolidado$3196$50=function(toggle,ordenV)
 {
  return function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_descendientes()));
  };
 };
 ReporteConsolidado.consolidado$3195$50=function(toggle,ordenV)
 {
  return function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_referidos()));
  };
 };
 ReporteConsolidado.consolidado$3194$50=function(toggle,ordenV)
 {
  return function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_nivel()));
  };
 };
 ReporteConsolidado.consolidado$3193$50=function(toggle,ordenV)
 {
  return function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_referido()));
  };
 };
 ReporteConsolidado.consolidado$3192$50=function(toggle,ordenV)
 {
  return function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_tipo()));
  };
 };
 ReporteConsolidado.consolidado$3191$50=function(toggle,ordenV)
 {
  return function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_influyente()));
  };
 };
 ReporteConsolidado.consolidado$3190$50=function(toggle,ordenV)
 {
  return function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_status()));
  };
 };
 ReporteConsolidado.consolidado$3189$50=function(toggle,ordenV)
 {
  return function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_correo()));
  };
 };
 ReporteConsolidado.consolidado$3188$50=function(toggle,ordenV)
 {
  return function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_nombre()));
  };
 };
 ReporteConsolidado.consolidado$3187$50=function(toggle,ordenV)
 {
  return function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_archivos()));
  };
 };
 ReporteConsolidado.consolidado$3183$50=function(aliadosV)
 {
  return function()
  {
   aliadosV.Set(ModeloUI.modeloV().Get().aliados);
  };
 };
 ReporteConsolidado.consolidado$3182$50=function(salvar)
 {
  return function()
  {
   salvar();
  };
 };
 ReporteConsolidado.consolidado$3235$56=function(alid)
 {
  return function()
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind((Rpc.addLlamadas())(1),function()
    {
     var a;
     a=Unchecked.Equals(ListaDocs.expandedOV().Get(),{
      $:1,
      $0:new TypesV0.IdAliado({
       $:0,
       $0:alid
      })
     })?null:{
      $:1,
      $0:new TypesV0.IdAliado({
       $:0,
       $0:alid
      })
     };
     ListaDocs.expandedOV().Set(a);
     return Concurrency.Bind((Rpc.addLlamadas())(-1),function()
     {
      return Concurrency.Return(null);
     });
    });
   })),null);
  };
 };
 ReporteConsolidado.consolidado=function()
 {
  var aliadosV,ordenV,filtroV,referidores,pendientes,b,listaArchivos,b$1,T,t,t$1,t$2,t$3,t$4,t$5,t$6,t$7,t$8,t$9,t$10,t$11,t$12,t$13,t$14,p,i;
  function aliado2Fila(al)
  {
   function m(a$1,a$2,f)
   {
    return f(al);
   }
   return Arrays.map(function($1)
   {
    return m($1[0],$1[1],$1[2]);
   },ReporteConsolidado.definicion());
  }
  function newOrden(n,a$1,a$2)
  {
   return function(t$15)
   {
    var no;
    no=t$15[0];
    return[no===n?1:no<n?no+1:no,n===no&&n===1?!t$15[1]:t$15[1],t$15[2]];
   };
  }
  function toggle(v)
  {
   var x;
   ordenV.Set((x=ordenV.Get(),Arrays.map(newOrden.apply(null,v),x)));
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
    return Aliado$2.New(al.id,al.idPadreO,al.idForAuthorize,al.influyente,al.datosPersonales,al.contactos,al.identificacion,al.isInternal,StatusAliado.tryParse(v),al.diaPago,al.tipo,al.fechaRegistro,al.fechaStatus,al.nReferidos,al.nRefActivos,al.nDescendientes,al.nDescActivos,al.comision,al.nivel,al.documentos,al.docPendientes);
   });
  }
  function setInfluyente(id,v)
  {
   return setAliado(id,function(al)
   {
    return Aliado$2.New(al.id,al.idPadreO,al.idForAuthorize,Strings.Trim(v)===""?null:{
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
    $0:new TypesV0.IdAliado({
     $:0,
     $0:v
    })
   };
   return setAliado(id,function(al)
   {
    return Aliado$2.New(al.id,padre,al.idForAuthorize,al.influyente,al.datosPersonales,al.contactos,al.identificacion,al.isInternal,al.status,al.diaPago,al.tipo,al.fechaRegistro,al.fechaStatus,al.nReferidos,al.nRefActivos,al.nDescendientes,al.nDescActivos,al.comision,al.nivel,al.documentos,al.docPendientes);
   });
  }
  function obtenerAliado(alid)
  {
   return Seq$1.tryFind(function(al)
   {
    return Unchecked.Equals(al.id,alid);
   },ModeloUI.modeloV().Get().aliados);
  }
  function salvar()
  {
   var b$2;
   Rpc.iterA((b$2=Monads.asyncResult(),b$2.Run(b$2.Delay(function()
   {
    return b$2.Combine$1(b$2.For(aliadosV.Get(),function(a$1)
    {
     var m,al2;
     m=obtenerAliado(a$1.id);
     return m!=null&&m.$==1?(al2=m.$0,!Unchecked.Equals(a$1.status,al2.status)||!Unchecked.Equals(a$1.idPadreO,al2.idPadreO)||!Unchecked.Equals(a$1.influyente,al2.influyente)?b$2.Bind$1(Rpc.ejecutarDataEventoNuevo({
      $:8,
      $0:[a$1.id,a$1.status,a$1.idPadreO,a$1.influyente]
     }),function()
     {
      return b$2.Zero();
     }):b$2.Zero()):b$2.Zero();
    }),b$2.Delay(function()
    {
     Refresh.refrescarData(true);
     return b$2.Zero();
    }));
   }))));
  }
  function a(alid,fW)
  {
   var b$2,t$15,d,S,i$1,$1,s,$2,r,$3,p$1,i$2;
   return(b$2=(t$15=(d=Doc.BindView(Global.id,View.Map(function($4)
   {
    return Unchecked.Equals($4,{
     $:1,
     $0:new TypesV0.IdAliado({
      $:0,
      $0:alid
     })
    })?listaArchivos.f():Doc.get_Empty();
   },ListaDocs.expandedOV().get_View())),(S=Doc.BindView(VariousUI.crearOptions,VariousUI.statuses().get_View()),(i$1=new FromView.New(View.Map(function($4)
   {
    return Arrays.get($4,ReporteConsolidado.i_influyente());
   },fW),($1=new TypesV0.IdAliado({
    $:0,
    $0:alid
   }),function($4)
   {
    return setInfluyente($1,$4);
   })),(s=new FromView.New(View.Map(function($4)
   {
    return Arrays.get($4,ReporteConsolidado.i_status());
   },fW),($2=new TypesV0.IdAliado({
    $:0,
    $0:alid
   }),function($4)
   {
    return setStatus($2,$4);
   })),(r=new FromView.New(View.Map(function($4)
   {
    return Arrays.get($4,ReporteConsolidado.i_referido());
   },fW),($3=new TypesV0.IdAliado({
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
     return Arrays.get($4,ReporteConsolidado.i_nombre());
    },fW)
   }).WithHole({
    $:2,
    $0:"correo",
    $1:View.Map(function($4)
    {
     return Arrays.get($4,ReporteConsolidado.i_correo());
    },fW)
   }).WithHole({
    $:2,
    $0:"tipo",
    $1:View.Map(function($4)
    {
     return Arrays.get($4,ReporteConsolidado.i_tipo());
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
     return Arrays.get($4,ReporteConsolidado.i_nivel());
    },fW)
   }).WithHole({
    $:2,
    $0:"referidos",
    $1:View.Map(function($4)
    {
     return Arrays.get($4,ReporteConsolidado.i_referidos());
    },fW)
   }).WithHole({
    $:2,
    $0:"descendientes",
    $1:View.Map(function($4)
    {
     return Arrays.get($4,ReporteConsolidado.i_descendientes());
    },fW)
   }).WithHole({
    $:2,
    $0:"comision",
    $1:View.Map(function($4)
    {
     return Arrays.get($4,ReporteConsolidado.i_comision());
    },fW)
   }).WithHole({
    $:2,
    $0:"diapago",
    $1:View.Map(function($4)
    {
     return Arrays.get($4,ReporteConsolidado.i_diaPago());
    },fW)
   }).WithHole({
    $:2,
    $0:"desde",
    $1:View.Map(function($4)
    {
     return Arrays.get($4,ReporteConsolidado.i_desde());
    },fW)
   }).WithHole({
    $:2,
    $0:"id",
    $1:View.Map(function($4)
    {
     return Arrays.get($4,ReporteConsolidado.i_Id());
    },fW)
   }).WithHole({
    $:0,
    $0:"detalles",
    $1:d
   })),t$15.WithHole(Handler.EventQ2(t$15.k,"expandfiles",function()
   {
    return t$15.i;
   },function()
   {
    var b$3;
    Concurrency.Start((b$3=null,Concurrency.Delay(function()
    {
     return Concurrency.Bind((Rpc.addLlamadas())(1),function()
     {
      var a$1;
      a$1=Unchecked.Equals(ListaDocs.expandedOV().Get(),{
       $:1,
       $0:new TypesV0.IdAliado({
        $:0,
        $0:alid
       })
      })?null:{
       $:1,
       $0:new TypesV0.IdAliado({
        $:0,
        $0:alid
       })
      };
      ListaDocs.expandedOV().Set(a$1);
      return Concurrency.Bind((Rpc.addLlamadas())(-1),function()
      {
       return Concurrency.Return(null);
      });
     });
    })),null);
   }))).WithHole({
    $:2,
    $0:"expanded",
    $1:View.Map(function($4)
    {
     return Arrays.get($4,ReporteConsolidado.i_archivos());
    },fW)
   }),(p$1=Handler.CompleteHoles(b$2.k,b$2.h,[["status",0],["influyente",0],["referido",0]]),(i$2=new TemplateInstance.New(p$1[1],prozperDes$js_Templates.filaconsolidado(p$1[0])),(b$2.i=i$2,i$2)))).get_Doc();
  }
  aliadosV=Var$2.Create$1([]);
  View.Sink(function(a$1)
  {
   aliadosV.Set(a$1);
  },View.Map(function($1)
  {
   return $1.aliados;
  },ModeloUI.modeloV().get_View()));
  ordenV=Var$2.Create$1(Arrays.mapi(function(i$1,t$15)
  {
   return[t$15[0],t$15[1],function(d)
   {
    return Arrays.get(d,i$1).toUpperCase();
   }];
  },ReporteConsolidado.definicion()));
  filtroV=Var$2.Create$1("");
  referidores=Doc.BindView(function(m)
  {
   return VariousUI.crearOptions2(Seq$1.map(function(al)
   {
    return[Aliado$1.nombre2(al.datosPersonales),al.id.get_Id()];
   },m.aliados));
  },ModeloUI.modeloV().get_View());
  pendientes=Doc.BindView(Global.id,(b=View.get_Do(),View.Bind(function(a$1)
  {
   var id;
   return a$1!=null&&a$1.$==1?(id=a$1.$0,View.Bind(function(a$2)
   {
    var m;
    m=Seq$1.tryFind(function(al)
    {
     return Unchecked.Equals(al.id,id);
    },a$2);
    return m!=null&&m.$==1?View.Const(Pendientes.pendientes(View.Const(m.$0))):View.Const(Doc.get_Empty());
   },aliadosV.get_View())):View.Const(Doc.get_Empty());
  },ListaDocs.expandedOV().get_View())));
  listaArchivos=Lazy.Create(function()
  {
   return Doc.Element("tr",[AttrProxy.Create("bgcolor","beige")],[Doc.Element("td",[AttrProxy.Create("colspan","12")],[pendientes,ListaDocs.listaDocs()])]);
  });
  return(b$1=(T=Doc.ConvertSeqBy(function(al)
  {
   return Arrays.get(al,ReporteConsolidado.i_Id());
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
   function r(c,c$1,a$1,b$2)
   {
    return SortWith.op_AmpGreater(function($1,$2)
    {
     return(c($1))($2);
    },function($1,$2)
    {
     return(c$1($1))($2);
    },a$1,b$2);
   }
   function m$1(n,a$1,f)
   {
    return(a$1?Runtime.Curried3(SortWith.asc):Runtime.Curried3(SortWith.desc))(f);
   }
   vt=Strings.Trim(filtro).toUpperCase();
   filtros=Arrays.map(function($1)
   {
    return m($1[0],$1[1],$1[2]);
   },Global.id(orden));
   comparar=Arrays.reduce(function($1,$2)
   {
    return Runtime.Curried(r,2,[$1,$2]);
   },Arrays.map(function($1)
   {
    return m$1($1[0],$1[1],$1[2]);
   },Arrays.sortBy(function($1)
   {
    return Global.id($1[0],$1[1],$1[2]);
   },Global.id(orden))));
   return Seq$1.sortWith(function($1,$2)
   {
    return(comparar($1))($2);
   },Seq$1.filter(function(fila)
   {
    return vt===""||Seq$1.exists(function(f)
    {
     return f(fila).indexOf(vt)!=-1;
    },filtros);
   },Seq$1.map(aliado2Fila,als)));
  },View.Map(function($1)
  {
   return $1.aliados;
  },ModeloUI.modeloV().get_View()),ordenV.get_View(),filtroV.get_View())),(t=(t$1=(t$2=(t$3=(t$4=(t$5=(t$6=(t$7=(t$8=(t$9=(t$10=(t$11=(t$12=(t$13=(t$14=ProviderBuilder.Make(),t$14.WithHole(Handler.EventQ2(t$14.k,"salvar",function()
  {
   return t$14.i;
  },function()
  {
   salvar();
  }))),t$13.WithHole(Handler.EventQ2(t$13.k,"cancelar",function()
  {
   return t$13.i;
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
  }),t$12.WithHole(Handler.EventQ2(t$12.k,"sort_archivos",function()
  {
   return t$12.i;
  },function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_archivos()));
  }))),t$11.WithHole(Handler.EventQ2(t$11.k,"sort_nombre",function()
  {
   return t$11.i;
  },function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_nombre()));
  }))),t$10.WithHole(Handler.EventQ2(t$10.k,"sort_correo",function()
  {
   return t$10.i;
  },function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_correo()));
  }))),t$9.WithHole(Handler.EventQ2(t$9.k,"sort_status",function()
  {
   return t$9.i;
  },function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_status()));
  }))),t$8.WithHole(Handler.EventQ2(t$8.k,"sort_influyente",function()
  {
   return t$8.i;
  },function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_influyente()));
  }))),t$7.WithHole(Handler.EventQ2(t$7.k,"sort_tipo",function()
  {
   return t$7.i;
  },function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_tipo()));
  }))),t$6.WithHole(Handler.EventQ2(t$6.k,"sort_referido",function()
  {
   return t$6.i;
  },function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_referido()));
  }))),t$5.WithHole(Handler.EventQ2(t$5.k,"sort_nivel",function()
  {
   return t$5.i;
  },function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_nivel()));
  }))),t$4.WithHole(Handler.EventQ2(t$4.k,"sort_referidos",function()
  {
   return t$4.i;
  },function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_referidos()));
  }))),t$3.WithHole(Handler.EventQ2(t$3.k,"sort_descendientes",function()
  {
   return t$3.i;
  },function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_descendientes()));
  }))),t$2.WithHole(Handler.EventQ2(t$2.k,"sort_comision",function()
  {
   return t$2.i;
  },function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_comision()));
  }))),t$1.WithHole(Handler.EventQ2(t$1.k,"sort_diapago",function()
  {
   return t$1.i;
  },function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_diaPago()));
  }))),t.WithHole(Handler.EventQ2(t.k,"sort_desde",function()
  {
   return t.i;
  },function()
  {
   toggle(Arrays.get(ordenV.Get(),ReporteConsolidado.i_desde()));
  }))).WithHole({
   $:2,
   $0:"flecha_archivos",
   $1:View.Map(function($1)
   {
    var t$15;
    t$15=Arrays.get($1,ReporteConsolidado.i_archivos());
    return ReporteConsolidado.flecha(t$15[0],t$15[1],t$15[2]);
   },ordenV.get_View())
  }).WithHole({
   $:2,
   $0:"flecha_nombre",
   $1:View.Map(function($1)
   {
    var t$15;
    t$15=Arrays.get($1,ReporteConsolidado.i_nombre());
    return ReporteConsolidado.flecha(t$15[0],t$15[1],t$15[2]);
   },ordenV.get_View())
  }).WithHole({
   $:2,
   $0:"flecha_correo",
   $1:View.Map(function($1)
   {
    var t$15;
    t$15=Arrays.get($1,ReporteConsolidado.i_correo());
    return ReporteConsolidado.flecha(t$15[0],t$15[1],t$15[2]);
   },ordenV.get_View())
  }).WithHole({
   $:2,
   $0:"flecha_status",
   $1:View.Map(function($1)
   {
    var t$15;
    t$15=Arrays.get($1,ReporteConsolidado.i_status());
    return ReporteConsolidado.flecha(t$15[0],t$15[1],t$15[2]);
   },ordenV.get_View())
  }).WithHole({
   $:2,
   $0:"flecha_influyente",
   $1:View.Map(function($1)
   {
    var t$15;
    t$15=Arrays.get($1,ReporteConsolidado.i_influyente());
    return ReporteConsolidado.flecha(t$15[0],t$15[1],t$15[2]);
   },ordenV.get_View())
  }).WithHole({
   $:2,
   $0:"flecha_tipo",
   $1:View.Map(function($1)
   {
    var t$15;
    t$15=Arrays.get($1,ReporteConsolidado.i_tipo());
    return ReporteConsolidado.flecha(t$15[0],t$15[1],t$15[2]);
   },ordenV.get_View())
  }).WithHole({
   $:2,
   $0:"flecha_referido",
   $1:View.Map(function($1)
   {
    var t$15;
    t$15=Arrays.get($1,ReporteConsolidado.i_referido());
    return ReporteConsolidado.flecha(t$15[0],t$15[1],t$15[2]);
   },ordenV.get_View())
  }).WithHole({
   $:2,
   $0:"flecha_nivel",
   $1:View.Map(function($1)
   {
    var t$15;
    t$15=Arrays.get($1,ReporteConsolidado.i_nivel());
    return ReporteConsolidado.flecha(t$15[0],t$15[1],t$15[2]);
   },ordenV.get_View())
  }).WithHole({
   $:2,
   $0:"flecha_referidos",
   $1:View.Map(function($1)
   {
    var t$15;
    t$15=Arrays.get($1,ReporteConsolidado.i_referidos());
    return ReporteConsolidado.flecha(t$15[0],t$15[1],t$15[2]);
   },ordenV.get_View())
  }).WithHole({
   $:2,
   $0:"flecha_descendientes",
   $1:View.Map(function($1)
   {
    var t$15;
    t$15=Arrays.get($1,ReporteConsolidado.i_descendientes());
    return ReporteConsolidado.flecha(t$15[0],t$15[1],t$15[2]);
   },ordenV.get_View())
  }).WithHole({
   $:2,
   $0:"flecha_comision",
   $1:View.Map(function($1)
   {
    var t$15;
    t$15=Arrays.get($1,ReporteConsolidado.i_comision());
    return ReporteConsolidado.flecha(t$15[0],t$15[1],t$15[2]);
   },ordenV.get_View())
  }).WithHole({
   $:2,
   $0:"flecha_diapago",
   $1:View.Map(function($1)
   {
    var t$15;
    t$15=Arrays.get($1,ReporteConsolidado.i_diaPago());
    return ReporteConsolidado.flecha(t$15[0],t$15[1],t$15[2]);
   },ordenV.get_View())
  }).WithHole({
   $:2,
   $0:"flecha_desde",
   $1:View.Map(function($1)
   {
    var t$15;
    t$15=Arrays.get($1,ReporteConsolidado.i_desde());
    return ReporteConsolidado.flecha(t$15[0],t$15[1],t$15[2]);
   },ordenV.get_View())
  }).WithHole({
   $:0,
   $0:"tbody",
   $1:T
  })),(p=Handler.CompleteHoles(b$1.k,b$1.h,[["filtro",0]]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.consolidado(p[0])),(b$1.i=i,i)))).get_Doc();
 };
 ReporteConsolidado.i_Id=function()
 {
  SC$1.$cctor();
  return SC$1.i_Id;
 };
 ReporteConsolidado.i_desde=function()
 {
  SC$1.$cctor();
  return SC$1.i_desde;
 };
 ReporteConsolidado.i_diaPago=function()
 {
  SC$1.$cctor();
  return SC$1.i_diaPago;
 };
 ReporteConsolidado.i_comision=function()
 {
  SC$1.$cctor();
  return SC$1.i_comision;
 };
 ReporteConsolidado.i_descendientes=function()
 {
  SC$1.$cctor();
  return SC$1.i_descendientes;
 };
 ReporteConsolidado.i_referidos=function()
 {
  SC$1.$cctor();
  return SC$1.i_referidos;
 };
 ReporteConsolidado.i_nivel=function()
 {
  SC$1.$cctor();
  return SC$1.i_nivel;
 };
 ReporteConsolidado.i_referido=function()
 {
  SC$1.$cctor();
  return SC$1.i_referido;
 };
 ReporteConsolidado.i_tipo=function()
 {
  SC$1.$cctor();
  return SC$1.i_tipo;
 };
 ReporteConsolidado.i_influyente=function()
 {
  SC$1.$cctor();
  return SC$1.i_influyente;
 };
 ReporteConsolidado.i_status=function()
 {
  SC$1.$cctor();
  return SC$1.i_status;
 };
 ReporteConsolidado.i_correo=function()
 {
  SC$1.$cctor();
  return SC$1.i_correo;
 };
 ReporteConsolidado.i_nombre=function()
 {
  SC$1.$cctor();
  return SC$1.i_nombre;
 };
 ReporteConsolidado.i_archivos=function()
 {
  SC$1.$cctor();
  return SC$1.i_archivos;
 };
 ReporteConsolidado.agregarCampo=function(orden,direccion,f)
 {
  ReporteConsolidado.set_definicion(ReporteConsolidado.definicion().concat([[orden,direccion,f]]));
  return Arrays.length(ReporteConsolidado.definicion())-1;
 };
 ReporteConsolidado.definicion=function()
 {
  SC$1.$cctor();
  return SC$1.definicion;
 };
 ReporteConsolidado.set_definicion=function($1)
 {
  SC$1.$cctor();
  SC$1.definicion=$1;
 };
 ReporteConsolidado.flecha=function(o,d,a)
 {
  return o===1?d?"\u2191":"\u2193":"";
 };
 ReporteConsolidado.comision=function(v)
 {
  return v===0?"-":ModeloUI.money(v);
 };
 ReporteConsolidado.descendientes=function(al)
 {
  return al.nDescendientes===0?"-":(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1(Global.String($2)+"/"+Global.String($3));
  }))(Global.id))(al.nDescActivos))(al.nDescendientes);
 };
 ReporteConsolidado.referidos=function(al)
 {
  return al.nReferidos===0?"-":(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1(Global.String($2)+"/"+Global.String($3));
  }))(Global.id))(al.nRefActivos))(al.nReferidos);
 };
 ReporteConsolidado.nombreReferidor=function(idO)
 {
  var o,o$1,id;
  o=(o$1=idO==null?null:(id=idO.$0,Seq$1.tryFind(function(al)
  {
   return Unchecked.Equals(al.id,id);
  },ModeloUI.modeloV().Get().aliados)),o$1==null?null:{
   $:1,
   $0:Aliado$1.nombre(o$1.$0.datosPersonales)
  });
  return o==null?"-":o.$0;
 };
 TablaPagos.comisiones$3306$41=function(saveAs)
 {
  return function()
  {
   saveAs();
  };
 };
 TablaPagos.comisiones=function()
 {
  var pagosW,b,T,b$1,p,i,b$2,p$1,i$1,t,p$2,i$2;
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
     Global.saveAs(new Global.Blob([Strings.concat("\r\n",Seq$1.map(function(alfpW)
     {
      var alW,ctaW;
      alW=alfpW[0];
      ctaW=alfpW[1];
      return(((((((Runtime.Curried(function($1,$2,$3,$4,$5,$6,$7)
      {
       return $1(Utils.toSafe($2)+","+Utils.toSafe($3)+","+Utils.toSafe($4)+","+Utils.toSafe($5)+","+Utils.prettyPrint($6)+","+Utils.prettyPrint($7));
      },7))(Global.id))("22"))(def("----------",ctaW.numero.get_Id())))(def("----------",ctaW.routing.get_Id())))((function($1)
      {
       return function($2)
       {
        return $1(Global.String($2)+".00");
       };
      }(Global.id))(alW.comision)))("----------"))(ctaW.titular===""?Aliado$1.nombre2(alW.datosPersonales):ctaW.titular);
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
     return def(Aliado$1.nombre2($1.datosPersonales),$2.titular);
    },alW,ctaW)
   }),(p$3=Handler.CompleteHoles(b$3.k,b$3.h,[]),(i$3=new TemplateInstance.New(p$3[1],prozperDes$js_Templates.filapago(p$3[0])),(b$3.i=i$3,i$3)))).get_Doc();
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
    alsf=Seq$1.filter(function(al)
    {
     return al.comision>0;
    },als);
    return b$3.Bind$1(Rpc.obtenerFormasDePagoPara(Arrays.ofSeq(Seq$1.map(function(al)
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
      return[id,(o=Seq$1.tryPick(function(fp)
      {
       var m$1;
       m$1=fp.cuentaPago;
       return m$1.$==0?{
        $:1,
        $0:m$1.$0
       }:null;
      },fps),(v=TypesV0.ctaVacio(),o==null?v:o.$0))];
     }
     return b$3.Return(Seq$1.choose(function($1)
     {
      return c($1[0],$1[1]);
     },Seq$1.zip(alsf,Seq$1.map(function($1)
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
  return(b=(T=List.ofArray([(b$1=ProviderBuilder.Make().WithHole({
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
    }(Global.id))(Seq$1.length($1));
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
    }(Global.id))(Seq$1.sumBy(function($2)
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
  }),(p=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i=new TemplateInstance.New(p[1],prozperDes$js_Templates.filapago(p[0])),(b$1.i=i,i)))).get_Doc(),(b$2=ProviderBuilder.Make().WithHole({
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
  }),(p$1=Handler.CompleteHoles(b$2.k,b$2.h,[]),(i$1=new TemplateInstance.New(p$1[1],prozperDes$js_Templates.filapago(p$1[0])),(b$2.i=i$1,i$1)))).get_Doc(),Doc.ConvertSeqBy(function($1)
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
   $1:Doc.Concat(T)
  })),(p$2=Handler.CompleteHoles(b.k,b.h,[]),(i$2=new TemplateInstance.New(p$2[1],prozperDes$js_Templates.tablapagos(p$2[0])),(b.i=i$2,i$2)))).get_Doc();
 };
 KeylessList.lazyDoc=function(elemUI,newElem)
 {
  var p,doc,addNew;
  p=KeylessList.createListModel(newElem,elemUI);
  doc=p[2];
  addNew=p[1];
  return Lazy.Create(function()
  {
   return KeylessList.elemsUI(doc,addNew);
  });
 };
 KeylessList.elemsUI=function(doc,addNew)
 {
  return Doc.Element("div",[],[doc,Doc.Button("New",[],addNew)]);
 };
 KeylessList.createListModel=function(newF,elUI)
 {
  var elements,i;
  function _delete(k,u)
  {
   return elements.RemoveByKey(k);
  }
  elements=ListModel$1.Create(function(t)
  {
   return t[0];
  },List.T.Empty);
  return[elements,(i=0,function()
  {
   elements.Append([i,newF()]);
   i=i+1;
  }),Doc.Flatten(elements.MapLens(function($1,$2)
  {
   function a(i$1,nv)
   {
    return[i$1,nv];
   }
   return elUI(function($3)
   {
    return _delete($1,$3);
   },Var$2.Lens($2,function(t)
   {
    return t[1];
   },function($3,$4)
   {
    return(function($5)
    {
     var $6;
     $6=$5[0];
     return function($7)
     {
      return a($6,$7);
     };
    }($3))($4);
   }));
  }))];
 };
 AF.addDocs=function(plgName,docs)
 {
  AppFramework.addPlugIn(PlugIn.New(plgName,[],[],Arrays.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.collect(function(m)
   {
    return[AppFramework.newDoc(m[0],m[1])];
   },docs);
  })),[],[]));
 };
 Calculado$1.New=function(valorA,valorB,valorC)
 {
  return{
   valorA:valorA,
   valorB:valorB,
   valorC:valorC
  };
 };
 Calculado.calcUI=function(_delete,calc)
 {
  var valorA,valorB,valorC,dup,mult,multAdd;
  valorA=Calculado.lensVarStr(Var$2.Lens(calc,function($1)
  {
   return $1.valorA;
  },function($1,$2)
  {
   return Calculado$1.New($2,$1.valorB,$1.valorC);
  }));
  valorB=Calculado.lensVarStr(Var$2.Lens(calc,function($1)
  {
   return $1.valorB;
  },function($1,$2)
  {
   return Calculado$1.New($1.valorA,$2,$1.valorC);
  }));
  valorC=Calculado.lensVarStr(Var$2.Lens(calc,function($1)
  {
   return $1.valorC;
  },function($1,$2)
  {
   return Calculado$1.New($1.valorA,$1.valorB,$2);
  }));
  dup=View.Map(function($1)
  {
   return $1.valorA*2;
  },calc.get_View());
  mult=View.Map2(function($1,$2)
  {
   return $1.valorA*$2.valorB;
  },calc.get_View(),calc.get_View());
  multAdd=View.Map2(function($1,$2)
  {
   return $1+$2.valorC;
  },mult,calc.get_View());
  return Doc.Element("div",[],[Doc.Button("x",[],_delete),Calculado.inputLabel([],"valor A: ",valorA),Calculado.inputLabel([],"valor B: ",valorB),Calculado.inputLabel([],"valor C: ",valorC),Calculado.textLine(View.Map2(function($1,$2)
  {
   return(((Runtime.Curried3(function($3,$4,$5)
   {
    return $3(Utils.prettyPrint($4)+" = "+Utils.toSafe($5)+" * 2");
   }))(Global.id))($1))($2);
  },dup,valorA.get_View())),Calculado.textLine(View.Apply(View.Map2(function($1,$2)
  {
   return function($3)
   {
    return((((Runtime.Curried(function($4,$5,$6,$7)
    {
     return $4(Utils.prettyPrint($5)+" = "+Utils.toSafe($6)+" * "+Utils.toSafe($7));
    },4))(Global.id))($1))($2))($3);
   };
  },mult,valorA.get_View()),valorB.get_View())),Calculado.textLine(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return function($3)
   {
    return function($4)
    {
     return(((((Runtime.Curried(function($5,$6,$7,$8,$9)
     {
      return $5(Utils.prettyPrint($6)+" = "+Utils.toSafe($7)+" * "+Utils.toSafe($8)+" + "+Utils.toSafe($9));
     },5))(Global.id))($1))($2))($3))($4);
    };
   };
  },multAdd,valorA.get_View()),valorB.get_View()),valorC.get_View()))]);
 };
 Calculado.newCalc=function()
 {
  return Calculado$1.New(0,0,0);
 };
 Calculado.textLine=function(txtW)
 {
  return Doc.Element("div",[],[Doc.TextView(txtW)]);
 };
 Calculado.lensVarStr=function(v)
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
 Calculado.inputLabel=function(attrs,txt,_var)
 {
  return Doc.Element("div",attrs,[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[Doc.TextNode(txt)]),Doc.Input([AttrProxy.Create("class","form-control")],_var)])]);
 };
 Aliado.get_LoggedId=function()
 {
  var o,o$1;
  return new TypesV0.IdAliado({
   $:0,
   $0:(o=(o$1=Msal$1.userO().Get(),o$1==null?null:{
    $:1,
    $0:o$1.$0.idToken.oid
   }),o==null?"":o.$0)
  });
 };
 ModeloUI.selAliadoIdDoc=function(fDoc)
 {
  var b;
  return Doc.BindView(Global.id,(b=View.get_Do(),View.Bind(function(a)
  {
   return View.Bind(function(a$1)
   {
    var aliadoO,aid;
    aliadoO=a$1==null?null:(aid=a$1.$0,Seq$1.tryFind(function(al)
    {
     return Unchecked.Equals(al.id,aid);
    },a.aliados));
    return View.Const(aliadoO!=null&&aliadoO.$==1?fDoc(View.Const(aliadoO.$0)):Doc.get_Empty());
   },ModeloUI.selAliadoIdOV().get_View());
  },ModeloUI.modeloV().get_View())));
 };
 ModeloUI.aliadoW=function()
 {
  SC$1.$cctor();
  return SC$1.aliadoW;
 };
 ModeloUI.aliadoIdDoc=function(fDoc)
 {
  var b;
  return Doc.BindView(Global.id,(b=View.get_Do(),View.Bind(function(a)
  {
   var aid,aliadoO;
   aid=a.idAliado;
   aliadoO=Seq$1.tryFind(function(al)
   {
    return Unchecked.Equals(al.id,aid);
   },a.aliados);
   return View.Const(aliadoO!=null&&aliadoO.$==1?fDoc(View.Const(aliadoO.$0)):Doc.get_Empty());
  },ModeloUI.modeloV().get_View())));
 };
 ModeloUI.contentVar=function()
 {
  SC$1.$cctor();
  return SC$1.contentVar;
 };
 ModeloUI.endPointV=function()
 {
  SC$1.$cctor();
  return SC$1.endPointV;
 };
 ModeloUI.money=function(m)
 {
  return"$"+ModeloUI.separate(Global.String(m),List.T.Empty);
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
     s=Library["String.Left"](s$1,-3);
     parts=new List.T({
      $:1,
      $0:Library["String.Right"](s$1,3),
      $1:parts
     });
    }
 };
 ModeloUI.refAliadoIdOV=function()
 {
  SC$1.$cctor();
  return SC$1.refAliadoIdOV;
 };
 ModeloUI.selAliadoIdOV=function()
 {
  SC$1.$cctor();
  return SC$1.selAliadoIdOV;
 };
 ModeloUI.invitacionesDisabledW=function()
 {
  SC$1.$cctor();
  return SC$1.invitacionesDisabledW;
 };
 ModeloUI.emailsInvitarW=function()
 {
  SC$1.$cctor();
  return SC$1.emailsInvitarW;
 };
 ModeloUI.invitacionesV=function()
 {
  SC$1.$cctor();
  return SC$1.invitacionesV;
 };
 ModeloUI.formasPagoAliadoV=function()
 {
  SC$1.$cctor();
  return SC$1.formasPagoAliadoV;
 };
 ModeloUI.modeloV=function()
 {
  SC$1.$cctor();
  return SC$1.modeloV;
 };
 MainProgram.mainProgramLoggedOff=function(refId)
 {
  ModeloUI.refAliadoIdOV().Set({
   $:1,
   $0:refId
  });
  MainProgram.mainProgram();
 };
 MainProgram.mainProgram$3696$40=function()
 {
  return function()
  {
   MainProgram.logout();
  };
 };
 MainProgram.mainProgram=function()
 {
  var titleV,mesActualW,anoActualW,nombreAliadoW,idAliadoW,statusAliadoW,comisionAliadoW,datosAliadoW,l,m,a,o,v,b,t,h,M,M$1,p;
  titleV=Var$2.Create$1(MainProgram.appName());
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
   return Aliado$1.nombre2($1.datosPersonales);
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
   return Unchecked.Equals(al.id,Aliado$1.empty().id)?(b$1=ProviderBuilder.Make(),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i=new TemplateInstance.New(p$1[1],prozperDes$js_Templates.opcionesadministrador(p$1[0])),(b$1.i=i,i)))).get_Doc():Doc.get_Empty();
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
   },Rpc.llamadas())
  });
  p=Handler.CompleteHoles(b.k,b.h,[]);
  b.i=new TemplateInstance.New(p[1],Templates.RunFullDocTemplate(p[0]));
  View.Sink(function(t$1)
  {
   self.document.title=t$1;
  },titleV.get_View());
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
 MainProgram.influencerClassW=function()
 {
  SC$1.$cctor();
  return SC$1.influencerClassW;
 };
 MainProgram.influencerV=function()
 {
  SC$1.$cctor();
  return SC$1.influencerV;
 };
 MainProgram.getMenuDoc=function()
 {
  return Doc.EmbedView(View.Map2(function($1,$2)
  {
   var d;
   d=$1!=null&&$1.$==1?Unchecked.Equals($2.id,Aliado$1.empty().id)?"ProzperLyt.mnuAdministrador":"ProzperLyt.mnuUsuario":"ProzperLyt.mnuNoUsuario";
   return MainProgram.getDoc(MainProgram.appName(),d);
  },Msal$1.userO().get_View(),ModeloUI.aliadoW()));
 };
 MainProgram.getContentDoc=function()
 {
  return Doc.EmbedView(View.Map(function(d)
  {
   return MainProgram.getDoc(MainProgram.appName(),d);
  },ModeloUI.contentVar().get_View()));
 };
 MainProgram.getDocView=function(appName,docName)
 {
  return LayoutEngineModule.turnToView(function()
  {
   return MainProgram.getDoc(appName,docName);
  });
 };
 MainProgram.getDoc=function(appName,docName)
 {
  var o,o$1,t;
  o=(o$1=(t=((LayoutEngineModule.splitName())(appName))(docName),AppFramework.tryGetDoc(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:LayoutEngineModule.getDocFinal(List.T.Empty,o$1.$0)
  });
  return o==null?LayoutEngineModule.errDoc((function($1)
  {
   return function($2)
   {
    return $1("Doc not found "+Utils.toSafe($2));
   };
  }(Global.id))(docName)):o.$0;
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
 MainProgram.login=function()
 {
  Msal$1.logout();
 };
 MainProgram.logout=function()
 {
  Msal$1.logout();
 };
 MainProgram.mesToString=function(a)
 {
  return a===1?"Ene":a===2?"Feb":a===3?"Mar":a===4?"Abr":a===5?"May":a===6?"Jun":a===7?"Jul":a===8?"Ago":a===9?"Sep":a===10?"Oct":a===11?"Nov":a===12?"Dic":"---";
 };
 MainProgram.scrollToBottom=function(e,a)
 {
  var b;
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(100),function()
   {
    e.scrollTop=e.scrollHeight;
    return Concurrency.Zero();
   });
  })),null);
 };
 MainProgram.appName=function()
 {
  SC$1.$cctor();
  return SC$1.appName;
 };
 MainProgram.layoutName=function()
 {
  SC$1.$cctor();
  return SC$1.layoutName;
 };
 SC$1.$cctor=function()
 {
  var f,m,$1,agent,c,c$1,f$2,f$3,b,llamadas,$2,b$1,b$2,b$3;
  SC$1.$cctor=Global.ignore;
  SC$1.rtn=function(v)
  {
   return[v];
  };
  SC$1.result=new Builder.New$1();
  SC$1.result$1=Result.result$1();
  SC$1.resultP=new BuilderP.New();
  SC$1.eff=new EffBuilder.New$1();
  SC$1.asyncResult=new AsyncResultBuilder.New();
  SC$1.asyncResultP=new AsyncResultBuilderP.New();
  function g(s)
  {
   return Strings.concat("\n",s);
  }
  SC$1.unindentStr=function(x)
  {
   return g(String.unindent$1(x));
  };
  function f$1(s)
  {
   return String.splitByChar$1("\n",s);
  }
  function g$1(s)
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
  function g$2(s)
  {
   return Strings.concat("\n",s);
  }
  SC$1.skipLastLine=(f=function(x)
  {
   return g$1(f$1(x));
  },function(x)
  {
   return g$2(f(x));
  });
  SC$1.counter=1;
  SC$1.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  SC$1.rexEmail="(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*";
  SC$1.policies=List.ofArray([Policy.SignIn,Policy.SignUp,Policy.EditProfile,Policy.ResetPassword]);
  SC$1.rootdir="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\ProzperServer\\website";
  SC$1.TemplatesFileName="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\ProzperServer\\website"+"\\indexDes.html";
  ((function($3)
  {
   return function($4)
   {
    return $3(Utils.toSafe($4));
   };
  }(function(s)
  {
   console.log(s);
  }))("D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\ProzperServer\\website\\indexDes.html"));
  SC$1.appId=Strings.StartsWith(self.location.host,"prozper0")?"76703639-1d21-4bc3-bd46-c764f5ea78ee":"70ad4f9b-9a2b-409e-9c1e-d04dbb2e7cf2";
  SC$1.applicationId=Msal$1.storeValue("applicationId",Msal$1.appId());
  SC$1.tenantName=Msal$1.storeValue("tenantName","prozper");
  SC$1.ref=Msal$1.storeValue("ref","");
  SC$1.extraQueryParms=Msal$1.storeValue("extraQueryParms","mkt=es-us");
  SC$1.refreshBefore=Msal$1.storeValue("refreshBefore","0");
  SC$1.createOnStart=Msal$1.storeValue("createOnStart","1");
  SC$1.forceLogin=Msal$1.storeValue("forceLogin","1");
  SC$1.signInPolicy=Msal$1.storeValue("signInPolicy","B2C_1_SignIn");
  SC$1.signUpPolicy=Msal$1.storeValue("signUpPolicy","B2C_1_Registrarse");
  SC$1.editProfilePolicy=Msal$1.storeValue("editProfilePolicy","B2C_1_EditarPerfil");
  SC$1.resetPasswordPolicy=Msal$1.storeValue("resetPasswordPolicy","B2C_1_PasswordReset");
  SC$1.policyType=Msal$1.storeValue("policyType","SignIn");
  m=Msal$1.storageGetItem("preambleState");
  m==="InPreamble"||(m===""||m===null)?Msal$1.storeValue("preambleState","GoToSignIn"):void 0;
  SC$1.authority=Msal$1.getAuthority(Msal$1.tenantName(),Msal$1.signInPolicy());
  SC$1.userO=Var$2.Create$1(null);
  SC$1.agent=Lazy.Create(function()
  {
   var agent$1,options;
   agent$1=(options=Configuration.New$1({
    $:1,
    $0:AuthOptions.New$1(Msal$1.applicationId(),{
     $:1,
     $0:Msal$1.authority()
    },{
     $:1,
     $0:false
    },null,null,null)
   },null,null,null),new self.Msal.UserAgentApplication(options));
   agent$1.handleRedirectCallback(function($3,$4)
   {
    Msal$1.redirectCallback($3,$4);
   });
   return agent$1;
  });
  SC$1.getTokenO=(agent=Mailbox.callA(function(v)
  {
   Library.print(v);
  },Msal$1.getTokenO0),function()
  {
   return agent.PostAndAsyncReply(function(reply)
   {
    return[reply,null];
   },null);
  });
  SC$1.modeloV=Var$2.Create$1(Modelo.New(new TypesV0.IdAliado({
   $:0,
   $0:":"
  }),[],(c=Date$1.now(),(new Date$1(c)).getFullYear()),(c$1=Date$1.now(),(new Date$1(c$1)).getMonth()+1),TypesV0.premisasCalculo(),-2));
  SC$1.formasPagoAliadoV=Var$2.Create$1([]);
  SC$1.invitacionesV=Var$2.Create$1("");
  function f$4(a)
  {
   var a$1;
   a$1=LibraryJS.REGEX$1(LibraryJS.rexEmail(),"gi",a);
   return a$1!=null&&a$1.$==1?a$1.$0:[];
  }
  function g$3(s)
  {
   return Strings.concat("\n",s);
  }
  SC$1.emailsInvitarW=View.Map((f$2=(f$3=function(x)
  {
   return Seq$1.distinct(f$4(x));
  },function(x)
  {
   return Seq$1.sort(f$3(x));
  }),function(x)
  {
   return g$3(f$2(x));
  }),ModeloUI.invitacionesV().get_View());
  SC$1.invitacionesDisabledW=View.Map(function(a)
  {
   return a===""?"disabled":"";
  },ModeloUI.emailsInvitarW());
  SC$1.selAliadoIdOV=Var$2.Create$1(null);
  SC$1.refAliadoIdOV=Var$2.Create$1(null);
  SC$1.endPointV=Router.InstallHash(EndPoint.DefaultEP,prozperDes$js_Router.r());
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
       Msal$1.checkUser();
  },ModeloUI.endPointV().get_View());
  function f$5(a)
  {
   return a==="ProzperLyt.mainContent"?EndPoint.DefaultEP:{
    $:3,
    $0:a
   };
  }
  function g$4(v)
  {
   if(!Unchecked.Equals(ModeloUI.endPointV().Get(),v))
    ModeloUI.endPointV().Set(v);
  }
  SC$1.contentVar=new FromView.New(View.Map2(function(a,a$1)
  {
   var $3,$4;
   return a$1.$==0&&!Unchecked.Equals(Msal$1.userO().Get(),null)?"ProzperLyt.mainContent":a$1.$==3&&(!Unchecked.Equals(Msal$1.userO().Get(),null)&&($4=a$1.$0,true))?$4:a$1.$==2?"ProzperLyt.cntPreRegister":a$1.$==4?"ProzperLyt.cntPDF":a$1.$==5?"ProzperLyt.cntVideo":"ProzperLyt.cntFormaNoUser";
  },Msal$1.userO().get_View(),ModeloUI.endPointV().get_View()),function(x)
  {
   return g$4(f$5(x));
  });
  SC$1.aliadoW=(b=View.get_Do(),View.Bind(function(a)
  {
   var aid,aliadoO;
   aid=a.idAliado;
   aliadoO=Seq$1.tryFind(function(al)
   {
    return Unchecked.Equals(al.id,aid);
   },a.aliados);
   return View.Const(aliadoO!=null&&aliadoO.$==1?aliadoO.$0:Aliado$1.empty());
  },ModeloUI.modeloV().get_View()));
  $2=(llamadas=Var$2.Create$1(0),[llamadas.get_View(),function(n)
  {
   var b$4;
   b$4=null;
   return Concurrency.Delay(function()
   {
    llamadas.Set(llamadas.Get()+n);
    return Concurrency.Bind(Concurrency.Sleep(50),function()
    {
     return Concurrency.Return(null);
    });
   });
  }]);
  SC$1.llamadas=$2[0];
  SC$1.addLlamadas=$2[1];
  Remoting.set_EndPoint(Rpc0.serverEndPoint().f()+"rpc/rpc");
  SC$1.shouldRefresh=true;
  View.Sink(function()
  {
   Refresh.refrescarData(true);
  },Msal$1.userO().get_View());
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
  SC$1.paises=Var$2.Create$1([]);
  SC$1.estados=Var$2.Create$1([]);
  SC$1.tiposDir=Var$2.Create$1([]);
  SC$1.tiposTel=Var$2.Create$1([]);
  SC$1.generos=Var$2.Create$1([]);
  SC$1.tiposCta=Var$2.Create$1([]);
  SC$1.tiposTar=Var$2.Create$1([]);
  SC$1.statuses=Var$2.Create$1([]);
  SC$1.aniosV=Var$2.Create$1([]);
  SC$1.mesesV=Var$2.Create$1([]);
  SC$1.tiposAr=Var$2.Create$1([]);
  SC$1.statusAr=Var$2.Create$1([]);
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
  SC$1.mensajes=Var$2.Create$1("");
  SC$1.firmanteV=Var$2.Create$1("");
  SC$1.fechaHoraV=Var$2.Create$1("");
  SC$1.locationV=Var$2.Create$1({});
  SC$1.firmadoV=Var$2.Create$1(false);
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
     a=Library["String.Left"](function(n)
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
   return Library.print(b$4);
  };
  SC$1.cuentaPagoO=Var$2.Create$1(null);
  SC$1.cuentaAutorizar=Var$2.Create$1(Doc.TextNode("No hay cuenta seleccionada"));
  SC$1.titular=Var$2.Create$1("");
  SC$1.pid=new TypesV0.IdPayment({
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
    return FormaPago.New(fp.nombre,Library.Error(""),new TypesV0.CuentaPago({
     $:1,
     $0:v
    }),fp.subscripcion);
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
    return FormaPago.New(fp.nombre,Library.Error(""),new TypesV0.CuentaPago({
     $:0,
     $0:v
    }),fp.subscripcion);
   };
  }];
  SC$1.transaccionesW=View.MapAsync(function()
  {
   var f$6,d;
   function g$5(v)
   {
    return Concurrency.Return(v);
   }
   return Concurrency.Bind(Rpc.obtenerTransaccionesPara(Aliado.get_LoggedId()),(f$6=(d=[],function(r)
   {
    return Result.defaultValue(d,r);
   }),function(x)
   {
    return g$5(f$6(x));
   }));
  },ModeloUI.modeloV().get_View());
  SC$1.expandedOV=Var$2.Create$1(null);
  SC$1.aliadoIdW=View.Map2(function($3,$4)
  {
   return $3==null?$4.id:$3.$0;
  },ListaDocs.expandedOV().get_View(),ModeloUI.aliadoW());
  SC$1.FormaW9="/#/Pdf/blob/Inscripcion/07 Form W-9.pdf";
  SC$1.FormaW8BEN="/#/Pdf/blob/Inscripcion/05 Form W-8BEN.pdf";
  SC$1.FormasPago="/#/Content/ProzperLyt.cntFormaFormasPago";
  SC$1.FormaContrato="/#/Content/ProzperLyt.cntFormaContrato";
  SC$1.Subir="/#/Content/ProzperLyt.cntSubirDocumentos";
  SC$1.definicion=[];
  SC$1.i_archivos=ReporteConsolidado.agregarCampo(1,false,function(al)
  {
   return al.docPendientes===0?(function($3)
   {
    return function($4)
    {
     return $3(Strings.PadLeft(Global.String($4),2));
    };
   }(Global.id))(al.documentos):(((Runtime.Curried3(function($3,$4,$5)
   {
    return $3("("+Strings.PadLeft(Global.String($4),2)+")"+Strings.PadLeft(Global.String($5),2));
   }))(Global.id))(al.docPendientes))(al.documentos);
  });
  SC$1.i_nombre=ReporteConsolidado.agregarCampo(14,true,function(al)
  {
   return Aliado$1.nombre(al.datosPersonales);
  });
  SC$1.i_correo=ReporteConsolidado.agregarCampo(13,true,Aliado$1.correo);
  SC$1.i_status=ReporteConsolidado.agregarCampo(3,true,function(al)
  {
   return(function($3)
   {
    return function($4)
    {
     return $3(ProzperServer_GeneratedPrintf.p($4));
    };
   }(Global.id))(al.status);
  });
  SC$1.i_influyente=ReporteConsolidado.agregarCampo(4,false,function(al)
  {
   var o;
   o=al.influyente;
   return o==null?"":o.$0;
  });
  SC$1.i_tipo=ReporteConsolidado.agregarCampo(5,true,function(al)
  {
   return(function($3)
   {
    return function($4)
    {
     return $3(ProzperServer_GeneratedPrintf.p$1($4));
    };
   }(Global.id))(al.tipo);
  });
  SC$1.i_referido=ReporteConsolidado.agregarCampo(6,true,function(al)
  {
   return ReporteConsolidado.nombreReferidor(al.idPadreO);
  });
  SC$1.i_nivel=ReporteConsolidado.agregarCampo(7,true,function(al)
  {
   return(function($3)
   {
    return function($4)
    {
     return $3(Strings.PadLeft(Global.String($4),9));
    };
   }(Global.id))(al.nivel);
  });
  SC$1.i_referidos=ReporteConsolidado.agregarCampo(8,true,function(al)
  {
   return(function($3)
   {
    return function($4)
    {
     return $3(Strings.PadLeft(Utils.toSafe($4),9));
    };
   }(Global.id))(ReporteConsolidado.referidos(al));
  });
  SC$1.i_descendientes=ReporteConsolidado.agregarCampo(2,false,function(al)
  {
   return(function($3)
   {
    return function($4)
    {
     return $3(Strings.PadLeft(Utils.toSafe($4),9));
    };
   }(Global.id))(ReporteConsolidado.descendientes(al));
  });
  SC$1.i_comision=ReporteConsolidado.agregarCampo(9,true,function(al)
  {
   return(function($3)
   {
    return function($4)
    {
     return $3(Strings.PadLeft(Utils.toSafe($4),9));
    };
   }(Global.id))(ReporteConsolidado.comision(al.comision));
  });
  SC$1.i_diaPago=ReporteConsolidado.agregarCampo(10,true,function(al)
  {
   return Library["String.Right"]((function($3)
   {
    return function($4)
    {
     return $3(prozperDes$js_GeneratedPrintf.p($4));
    };
   }(Global.id))(al.diaPago),2);
  });
  SC$1.i_desde=ReporteConsolidado.agregarCampo(11,true,function(al)
  {
   return Date.toYYYYMMDD("-",al.fechaRegistro);
  });
  SC$1.i_Id=ReporteConsolidado.agregarCampo(12,true,function(al)
  {
   return(function($3)
   {
    return function($4)
    {
     return $3(Utils.toSafe($4));
    };
   }(Global.id))(al.id.get_Id());
  });
  AF.addDocs("Calc",List.ofArray([["Calc",KeylessList.lazyDoc(Calculado.calcUI,Calculado.newCalc)]]));
  SC$1.layoutName="ProzperLyt";
  SC$1.appName="Prozper";
  SC$1.influencerV=Var$2.Create$1("");
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
 prozperDes$js_GeneratedPrintf.p=function($1)
 {
  return $1.$==5?"Dia25":$1.$==4?"Dia20":$1.$==3?"Dia15":$1.$==2?"Dia10":$1.$==1?"Dia05":"Dia01";
 };
 prozperDes$js_GeneratedPrintf.p$1=function($1)
 {
  return $1.$==3?"ResetPassword":$1.$==2?"EditProfile":$1.$==1?"SignUp":"SignIn";
 };
 prozperDes$js_Templates.correo=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"correo"
  },h):void 0;
 };
 prozperDes$js_Templates.telefono=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"telefono"
  },h):void 0;
 };
 prozperDes$js_Templates.direccion=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"direccion"
  },h):void 0;
 };
 prozperDes$js_Templates.cuentabancaria=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"cuentabancaria"
  },h):void 0;
 };
 prozperDes$js_Templates.tarjetacredito=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"tarjetacredito"
  },h):void 0;
 };
 prozperDes$js_Templates.datospersonales=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"datospersonales"
  },h):void 0;
 };
 prozperDes$js_GeneratedPrintf.p$2=function($1)
 {
  return $1.$==2?"Empresa":$1.$==1?"Femenino":"Masculino";
 };
 prozperDes$js_GeneratedPrintf.p$3=function($1)
 {
  return $1.$==2?"Mensaje "+Utils.prettyPrint($1.$0):$1.$==1?"NuevoRegistro "+Utils.prettyPrint($1.$0):"ROk";
 };
 prozperDes$js_Templates.formaregistro=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"formaregistro"
  },h):void 0;
 };
 prozperDes$js_Templates.formadatospersonales=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"formadatospersonales"
  },h):void 0;
 };
 prozperDes$js_Templates.formacontactos=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"formacontactos"
  },h):void 0;
 };
 prozperDes$js_Templates.formafirma=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"formafirma"
  },h):void 0;
 };
 prozperDes$js_Templates.autorizacionpago=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"autorizacionpago"
  },h):void 0;
 };
 prozperDes$js_Templates.contrato=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"contrato"
  },h):void 0;
 };
 prozperDes$js_Templates.formacuentas=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"formacuentas"
  },h):void 0;
 };
 prozperDes$js_GeneratedPrintf.p$4=function($1)
 {
  return"IdPayment "+Utils.prettyPrint($1.$0);
 };
 prozperDes$js_Templates.tablaaliados=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"tablaaliados"
  },h):void 0;
 };
 prozperDes$js_Templates.filaaliado=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"filaaliado"
  },h):void 0;
 };
 prozperDes$js_Templates.aliado=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"aliado"
  },h):void 0;
 };
 prozperDes$js_Templates.calculo=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"calculo"
  },h):void 0;
 };
 prozperDes$js_Templates.transacciones=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"transacciones"
  },h):void 0;
 };
 prozperDes$js_Templates.transaccion=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"transaccion"
  },h):void 0;
 };
 prozperDes$js_Templates.subirdocumentos=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"subirdocumentos"
  },h):void 0;
 };
 prozperDes$js_Templates.enlacedocumento=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"enlacedocumento"
  },h):void 0;
 };
 prozperDes$js_Templates.filadocs=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"filadocs"
  },h):void 0;
 };
 prozperDes$js_Templates.pendientes=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"pendientes"
  },h):void 0;
 };
 prozperDes$js_Templates.consolidado=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"consolidado"
  },h):void 0;
 };
 prozperDes$js_Templates.filaconsolidado=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"filaconsolidado"
  },h):void 0;
 };
 prozperDes$js_Templates.tablapagos=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"tablapagos"
  },h):void 0;
 };
 prozperDes$js_Templates.filapago=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"filapago"
  },h):void 0;
 };
 prozperDes$js_Templates.opcionesadministrador=function(h)
 {
  Templates.LoadLocalTemplates("indexdes");
  return h?Templates.NamedTemplate("indexdes",{
   $:1,
   $0:"opcionesadministrador"
  },h):void 0;
 };
 prozperDes$js_Router.r=function()
 {
  return RouterOperators.JSUnion(void 0,[[null,[[null,[]]],[]],[null,[[null,["NoUser"]]],[]],[null,[[null,["PreRegister"]]],[]],[null,[[null,["Content"]]],[RouterOperators.rString()]],[null,[[null,["Pdf"]]],[RouterOperators.rWildcard()]],[null,[[null,["Video"]]],[RouterOperators.rWildcard()]]]);
 };
 Runtime.OnLoad(function()
 {
  MainProgram.mainProgram();
 });
}());

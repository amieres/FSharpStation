(function()
{
 "use strict";
 var Global,FsRoot,Library,ResultMessage,ResultMessageHelpers,Monads,Seq,Option,Async,WebSharper,Obj,Result,Builder,Operators,Eff,Eff$1,Done,LambdaT,Operators$1,EffBuilder,State,Put,Get,Log,LogEntry,Rsl,Fail,ResultM,Builder$1,Operators$2,ResultMAutoOpen,AsyncResultM,AsyncResultMBuilder,AsyncResultMAutoOpen,String,Array,SortWith,ParseO,LibraryJS,Date,StackOverflow,Templating,TypesV0,LatestType,IdAliado,IdAuthorize,IdAddress,IdPayment,StatusAliado,TipoAliado,Pais,Estado,Identificacion,NumeroCuenta,NumeroTarjeta,Expiracion,RoutingNumber,TipoTarjeta,TipoCuenta,CuentaBancaria,TarjetaCredito,ConceptoPago,Transaccion,TipoDireccion,ZonaPostal,Direccion,CorreoElectronico,TipoTelefono,Telefono,Genero,DatosPersonales,StatusFormaPago,FormaPago,TipoMensaje,Remitente,Mensaje,Aliado,PremisasCalculo,Modelo,TypesV1,LatestType$1,CorreoElectronico$1,Aliado$1,Modelo$1,Aliado$2,Buscar,Evento,Respuesta,EstadoActual,Rpc,ModeloUI,EndPoint,VariousUI,Telefono$1,CorreoElectronico$2,Direccion$1,CuentaBancaria$1,TarjetaCredito$1,DatosPersonales$1,FormaRegistro,FormaDatos,FormaGenerica,FormaContactos,FormaFormasPago,RenderAliados,RenderAliado,MainProgram,SC$1,testing_GeneratedPrintf,testing_JsonDecoder,testing_Templates,testing_Router,IntelliFactory,Runtime,Utils,Strings,Seq$1,List,Arrays,Concurrency,Enumerator,Result$1,Operators$3,Unchecked,console,Slice,Collections,Dictionary,FSharpMap,JavaScript,Promise,JSON,UI,Doc,AttrProxy,View,Templating$1,Runtime$1,Server,ProviderBuilder,Handler,TemplateInstance,Var$1,System,Guid,FromView,FSharpSet,AppFramework,PlugIn,Lazy,LayoutEngineModule,Client,Templates,DateUtil,Numeric,Date$1,Router,ClientSideJson,Provider,Sitelets,RouterOperators;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 ResultMessage=Library.ResultMessage=Library.ResultMessage||{};
 ResultMessageHelpers=Library.ResultMessageHelpers=Library.ResultMessageHelpers||{};
 Monads=Library.Monads=Library.Monads||{};
 Seq=Monads.Seq=Monads.Seq||{};
 Option=Monads.Option=Monads.Option||{};
 Async=Monads.Async=Monads.Async||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 Result=Monads.Result=Monads.Result||{};
 Builder=Result.Builder=Result.Builder||{};
 Operators=Result.Operators=Result.Operators||{};
 Eff=Monads.Eff=Monads.Eff||{};
 Eff$1=Eff.Eff=Eff.Eff||{};
 Done=Eff.Done=Eff.Done||{};
 LambdaT=Eff$1.LambdaT=Eff$1.LambdaT||{};
 Operators$1=Eff.Operators=Eff.Operators||{};
 EffBuilder=Eff.EffBuilder=Eff.EffBuilder||{};
 State=Eff.State=Eff.State||{};
 Put=State.Put=State.Put||{};
 Get=State.Get=State.Get||{};
 Log=Eff.Log=Eff.Log||{};
 LogEntry=Log.LogEntry=Log.LogEntry||{};
 Rsl=Eff.Rsl=Eff.Rsl||{};
 Fail=Rsl.Fail=Rsl.Fail||{};
 ResultM=Monads.ResultM=Monads.ResultM||{};
 Builder$1=ResultM.Builder=ResultM.Builder||{};
 Operators$2=ResultM.Operators=ResultM.Operators||{};
 ResultMAutoOpen=Monads.ResultMAutoOpen=Monads.ResultMAutoOpen||{};
 AsyncResultM=Monads.AsyncResultM=Monads.AsyncResultM||{};
 AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder||{};
 AsyncResultMAutoOpen=Monads.AsyncResultMAutoOpen=Monads.AsyncResultMAutoOpen||{};
 String=Library.String=Library.String||{};
 Array=Library.Array=Library.Array||{};
 SortWith=Library.SortWith=Library.SortWith||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Date=LibraryJS.Date=LibraryJS.Date||{};
 StackOverflow=FsRoot.StackOverflow=FsRoot.StackOverflow||{};
 Templating=StackOverflow.Templating=StackOverflow.Templating||{};
 TypesV0=StackOverflow.TypesV0=StackOverflow.TypesV0||{};
 LatestType=TypesV0.LatestType=TypesV0.LatestType||{};
 IdAliado=TypesV0.IdAliado=TypesV0.IdAliado||{};
 IdAuthorize=TypesV0.IdAuthorize=TypesV0.IdAuthorize||{};
 IdAddress=TypesV0.IdAddress=TypesV0.IdAddress||{};
 IdPayment=TypesV0.IdPayment=TypesV0.IdPayment||{};
 StatusAliado=TypesV0.StatusAliado=TypesV0.StatusAliado||{};
 TipoAliado=TypesV0.TipoAliado=TypesV0.TipoAliado||{};
 Pais=TypesV0.Pais=TypesV0.Pais||{};
 Estado=TypesV0.Estado=TypesV0.Estado||{};
 Identificacion=TypesV0.Identificacion=TypesV0.Identificacion||{};
 NumeroCuenta=TypesV0.NumeroCuenta=TypesV0.NumeroCuenta||{};
 NumeroTarjeta=TypesV0.NumeroTarjeta=TypesV0.NumeroTarjeta||{};
 Expiracion=TypesV0.Expiracion=TypesV0.Expiracion||{};
 RoutingNumber=TypesV0.RoutingNumber=TypesV0.RoutingNumber||{};
 TipoTarjeta=TypesV0.TipoTarjeta=TypesV0.TipoTarjeta||{};
 TipoCuenta=TypesV0.TipoCuenta=TypesV0.TipoCuenta||{};
 CuentaBancaria=TypesV0.CuentaBancaria=TypesV0.CuentaBancaria||{};
 TarjetaCredito=TypesV0.TarjetaCredito=TypesV0.TarjetaCredito||{};
 ConceptoPago=TypesV0.ConceptoPago=TypesV0.ConceptoPago||{};
 Transaccion=TypesV0.Transaccion=TypesV0.Transaccion||{};
 TipoDireccion=TypesV0.TipoDireccion=TypesV0.TipoDireccion||{};
 ZonaPostal=TypesV0.ZonaPostal=TypesV0.ZonaPostal||{};
 Direccion=TypesV0.Direccion=TypesV0.Direccion||{};
 CorreoElectronico=TypesV0.CorreoElectronico=TypesV0.CorreoElectronico||{};
 TipoTelefono=TypesV0.TipoTelefono=TypesV0.TipoTelefono||{};
 Telefono=TypesV0.Telefono=TypesV0.Telefono||{};
 Genero=TypesV0.Genero=TypesV0.Genero||{};
 DatosPersonales=TypesV0.DatosPersonales=TypesV0.DatosPersonales||{};
 StatusFormaPago=TypesV0.StatusFormaPago=TypesV0.StatusFormaPago||{};
 FormaPago=TypesV0.FormaPago=TypesV0.FormaPago||{};
 TipoMensaje=TypesV0.TipoMensaje=TypesV0.TipoMensaje||{};
 Remitente=TypesV0.Remitente=TypesV0.Remitente||{};
 Mensaje=TypesV0.Mensaje=TypesV0.Mensaje||{};
 Aliado=TypesV0.Aliado=TypesV0.Aliado||{};
 PremisasCalculo=TypesV0.PremisasCalculo=TypesV0.PremisasCalculo||{};
 Modelo=TypesV0.Modelo=TypesV0.Modelo||{};
 TypesV1=StackOverflow.TypesV1=StackOverflow.TypesV1||{};
 LatestType$1=TypesV1.LatestType=TypesV1.LatestType||{};
 CorreoElectronico$1=TypesV1.CorreoElectronico=TypesV1.CorreoElectronico||{};
 Aliado$1=TypesV1.Aliado=TypesV1.Aliado||{};
 Modelo$1=TypesV1.Modelo=TypesV1.Modelo||{};
 Aliado$2=StackOverflow.Aliado=StackOverflow.Aliado||{};
 Buscar=Aliado$2.Buscar=Aliado$2.Buscar||{};
 Evento=StackOverflow.Evento=StackOverflow.Evento||{};
 Respuesta=StackOverflow.Respuesta=StackOverflow.Respuesta||{};
 EstadoActual=StackOverflow.EstadoActual=StackOverflow.EstadoActual||{};
 Rpc=StackOverflow.Rpc=StackOverflow.Rpc||{};
 ModeloUI=StackOverflow.ModeloUI=StackOverflow.ModeloUI||{};
 EndPoint=ModeloUI.EndPoint=ModeloUI.EndPoint||{};
 VariousUI=ModeloUI.VariousUI=ModeloUI.VariousUI||{};
 Telefono$1=ModeloUI.Telefono=ModeloUI.Telefono||{};
 CorreoElectronico$2=ModeloUI.CorreoElectronico=ModeloUI.CorreoElectronico||{};
 Direccion$1=ModeloUI.Direccion=ModeloUI.Direccion||{};
 CuentaBancaria$1=ModeloUI.CuentaBancaria=ModeloUI.CuentaBancaria||{};
 TarjetaCredito$1=ModeloUI.TarjetaCredito=ModeloUI.TarjetaCredito||{};
 DatosPersonales$1=ModeloUI.DatosPersonales=ModeloUI.DatosPersonales||{};
 FormaRegistro=ModeloUI.FormaRegistro=ModeloUI.FormaRegistro||{};
 FormaDatos=ModeloUI.FormaDatos=ModeloUI.FormaDatos||{};
 FormaGenerica=ModeloUI.FormaGenerica=ModeloUI.FormaGenerica||{};
 FormaContactos=ModeloUI.FormaContactos=ModeloUI.FormaContactos||{};
 FormaFormasPago=ModeloUI.FormaFormasPago=ModeloUI.FormaFormasPago||{};
 RenderAliados=ModeloUI.RenderAliados=ModeloUI.RenderAliados||{};
 RenderAliado=ModeloUI.RenderAliado=ModeloUI.RenderAliado||{};
 MainProgram=StackOverflow.MainProgram=StackOverflow.MainProgram||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 testing_GeneratedPrintf=Global.testing_GeneratedPrintf=Global.testing_GeneratedPrintf||{};
 testing_JsonDecoder=Global.testing_JsonDecoder=Global.testing_JsonDecoder||{};
 testing_Templates=Global.testing_Templates=Global.testing_Templates||{};
 testing_Router=Global.testing_Router=Global.testing_Router||{};
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
 Operators$3=WebSharper&&WebSharper.Operators;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 console=Global.console;
 Slice=WebSharper&&WebSharper.Slice;
 Collections=WebSharper&&WebSharper.Collections;
 Dictionary=Collections&&Collections.Dictionary;
 FSharpMap=Collections&&Collections.FSharpMap;
 JavaScript=WebSharper&&WebSharper.JavaScript;
 Promise=JavaScript&&JavaScript.Promise;
 JSON=Global.JSON;
 UI=WebSharper&&WebSharper.UI;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 View=UI&&UI.View;
 Templating$1=UI&&UI.Templating;
 Runtime$1=Templating$1&&Templating$1.Runtime;
 Server=Runtime$1&&Runtime$1.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 Var$1=UI&&UI.Var$1;
 System=Global.System;
 Guid=System&&System.Guid;
 FromView=UI&&UI.FromView;
 FSharpSet=Collections&&Collections.FSharpSet;
 AppFramework=LibraryJS&&LibraryJS.AppFramework;
 PlugIn=AppFramework&&AppFramework.PlugIn;
 Lazy=WebSharper&&WebSharper.Lazy;
 LayoutEngineModule=LibraryJS&&LibraryJS.LayoutEngineModule;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 Date$1=Global.Date;
 Router=UI&&UI.Router;
 ClientSideJson=WebSharper&&WebSharper.ClientSideJson;
 Provider=ClientSideJson&&ClientSideJson.Provider;
 Sitelets=WebSharper&&WebSharper.Sitelets;
 RouterOperators=Sitelets&&Sitelets.RouterOperators;
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
 Seq.ofOption=function(vO)
 {
  return vO==null?[]:[vO.$0];
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
 Seq.absorbO=function(vOS)
 {
  return Seq$1.choose(Global.id,vOS);
 };
 Seq.insertR=function(vSR)
 {
  return vSR.$==0?Seq$1.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vSR.$0):(Seq.rtn())(Library.Error$1(vSR.$0));
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
 Seq.rtn=function()
 {
  SC$1.$cctor();
  return SC$1.rtn;
 };
 Option.absorbR=function(vRO)
 {
  var $1,c;
  return vRO!=null&&vRO.$==1&&(c=vRO.$0,c.$==0&&($1=c.$0,true))?{
   $:1,
   $0:$1
  }:null;
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
  }):Option.rtn(Library.Error$1(vOR.$0));
 };
 Option.sequenceSeq=function(sq)
 {
  return Option.traverseSeq(Global.id,sq);
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
     return Option.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),Option.rtn(List.T.Empty));
  return o==null?null:{
   $:1,
   $0:o.$0
  };
 };
 Option.op_GreaterGreaterEquals=function(v,f)
 {
  return v==null?null:f(v.$0);
 };
 Option.bindNone=function(f,o)
 {
  return o!=null&&o.$==1?{
   $:1,
   $0:o.$0
  }:f();
 };
 Option.mapNone=function(f,o)
 {
  return o==null?f():o.$0;
 };
 Option.apply=function(fO,vO)
 {
  var $1;
  return fO!=null&&fO.$==1&&(vO!=null&&vO.$==1&&($1=[fO.$0,vO.$0],true))?{
   $:1,
   $0:$1[0]($1[1])
  }:null;
 };
 Option.join=function(o)
 {
  return o==null?null:o.$0;
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
 Option.rtn=function(a)
 {
  return{
   $:1,
   $0:a
  };
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
  }):Concurrency.Return(Library.Error$1(vAR.$0));
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
 Async.sequenceSeq=function(sq)
 {
  return Async.traverseSeq(Global.id,sq);
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
 Async.op_GreaterGreaterEquals=function(v,f)
 {
  return Concurrency.Bind(v,f);
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
    },body$1()):Result.rtn();
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
   return Result.rtn();
  },
  Bind:function(w,r)
  {
   return Result$1.Bind(r,w);
  },
  ReturnFrom:Global.id,
  Return:function(x)
  {
   return Result.rtn(x);
  }
 },Obj,Builder);
 Builder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder);
 Operators.result=function()
 {
  SC$1.$cctor();
  return SC$1.result$1;
 };
 Operators.rtn=function(v)
 {
  return Result.rtn(v);
 };
 Operators.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Operators.op_GreaterGreaterEquals(f(v),g);
 };
 Operators.op_RightShift=function(f,g,v)
 {
  return Operators.op_BarGreaterGreater(f(v),g);
 };
 Operators.op_GreaterGreaterEquals=function(v,f)
 {
  return Result.bindP(f,v);
 };
 Operators.op_BarGreaterGreater=function(v,f)
 {
  return Result.mapP(f,v);
 };
 Result.result=function()
 {
  SC$1.$cctor();
  return SC$1.result;
 };
 Result.sequenceSeq=function(sq)
 {
  return Result.traverseSeq(Global.id,sq);
 };
 Result.traverseSeq=function(f,sq)
 {
  return Result$1.Map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return Result.op_GreaterGreaterEquals(f(head),function(h)
   {
    return Result.op_GreaterGreaterEquals(tail,function(t)
    {
     return Result.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),Result.rtn(List.T.Empty)));
 };
 Result.op_GreaterGreaterEquals=function(r,f)
 {
  return Result$1.Bind(f,r);
 };
 Result.absorbO=function(f,vOR)
 {
  return Result.bindP(function(v)
  {
   return Result.ofOption(f,v);
  },vOR);
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
 Result.get=function(r)
 {
  return Result.defaultWith(function(x)
  {
   return Operators$3.FailWith(Global.String(x));
  },r);
 };
 Result.iter=function(fE,f,r)
 {
  Result.defaultWith(fE,Result.mapP(f,r));
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
     $:5,
     $0:e.message,
     $1:e.stack
    }));
   }
 };
 Result.failIfFalse=function(m,v)
 {
  return!v?Library.Error$1(m):{
   $:0,
   $0:null
  };
 };
 Result.failIfTrue=function(m,v)
 {
  return v?Library.Error$1(m):{
   $:0,
   $0:null
  };
 };
 Result.defaultValue=function(d,r)
 {
  return r.$==1?d:r.$0;
 };
 Result.defaultWith=function(f,r)
 {
  return r.$==1?f(r.$0):r.$0;
 };
 Result.toOption=function(r)
 {
  return r.$==0?{
   $:1,
   $0:r.$0
  }:null;
 };
 Result.flatten=function(r)
 {
  return Result$1.Bind(Global.id,r);
 };
 Result.join=function(r)
 {
  return Result$1.Bind(Global.id,r);
 };
 Result.rtn=function(a)
 {
  return{
   $:0,
   $0:a
  };
 };
 Result.freeMessage=function(r)
 {
  return r.$==1?Library.Error$1(ResultMessage.freeMessage(r.$0)):{
   $:0,
   $0:r.$0
  };
 };
 Result.errorf=function(fmt)
 {
  return fmt(Library.Error$1);
 };
 Eff$1=Eff.Eff=Runtime.Class({
  get_Cont:function()
  {
   return this.$0;
  }
 },null,Eff$1);
 Done=Eff.Done=Runtime.Class({
  get_Value:function()
  {
   return this.v;
  },
  FsRoot_Library_Monads_Eff_Effect$UnPack:function(a)
  {
   return this;
  }
 },Obj,Done);
 Done.New=Runtime.Ctor(function(v)
 {
  Obj.New.call(this);
  this.v=v;
 },Done);
 LambdaT=Eff$1.LambdaT=Runtime.Class({
  FsRoot_Library_Monads_Eff_Lambda$Invoke:function(k)
  {
   var g;
   g=this.loop;
   return function(x)
   {
    return g(k(x));
   };
  }
 },Obj,LambdaT);
 LambdaT.New=Runtime.Ctor(function(loop)
 {
  Obj.New.call(this);
  this.loop=loop;
 },LambdaT);
 Eff$1.runResult=function(eff)
 {
  var m;
  try
  {
   m=(eff.get_Cont())(Eff$1["done'"]);
   return m instanceof Done?{
    $:0,
    $0:m.get_Value()
   }:Library.Error$1((ResultMessageHelpers.errorMsgf(function($1)
   {
    return function($2)
    {
     return $1("Unhandled effect "+Utils.prettyPrint($2)+" expecting");
    };
   }))(m));
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
 Eff$1.run=function(eff)
 {
  var m;
  m=(eff.get_Cont())(Eff$1["done'"]);
  return m instanceof Done?m.get_Value():(function($1)
  {
   return function($2)
   {
    return $1("Unhandled effect "+Utils.prettyPrint($2));
   };
  }(Operators$3.FailWith))(m);
 };
 Eff$1["return'"]=function(v)
 {
  return new Eff$1({
   $:0,
   $0:function()
   {
    return Eff$1["done'"](v);
   }
  });
 };
 Eff$1["done'"]=function(v)
 {
  return new Done.New(v);
 };
 Eff$1.unpack=function(loop,effect)
 {
  return effect.FsRoot_Library_Monads_Eff_Effect$UnPack(new LambdaT.New(loop));
 };
 Operators$1.rtn=function(v)
 {
  return Eff.rtn(v);
 };
 Operators$1.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Operators$1.op_GreaterGreaterEquals(f(v),g);
 };
 Operators$1.op_RightShift=function(f,g,v)
 {
  return Operators$1.op_BarGreaterGreater(f(v),g);
 };
 Operators$1.op_GreaterGreaterEquals=function(v,f)
 {
  return Eff.bind(f,v);
 };
 Operators$1.op_BarGreaterGreater=function(v,f)
 {
  return Eff.map(f,v);
 };
 Operators$1.op_LessMultiplyGreater=function(f,v)
 {
  return Eff.apply(f,v);
 };
 EffBuilder=Eff.EffBuilder=Runtime.Class({
  For:function(sequence,body)
  {
   var $this;
   $this=this;
   return this.Using(Enumerator.Get(sequence),function(_enum)
   {
    return $this.While(function()
    {
     return _enum.MoveNext();
    },function()
    {
     return $this.Delay(function()
     {
      return body(_enum.Current());
     });
    });
   });
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
   return new Eff$1({
    $:0,
    $0:function(k)
    {
     try
     {
      return body().$0(k);
     }
     finally
     {
      compensation();
     }
    }
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
  While:function(guard,body)
  {
   function whileLoop(guard$1,body$1)
   {
    return guard$1()?Eff.bind(function()
    {
     return whileLoop(guard$1,body$1);
    },body$1()):Operators$1.rtn();
   }
   return whileLoop(guard,body);
  },
  Delay:function(f)
  {
   return new Eff$1({
    $:0,
    $0:function(k)
    {
     return f().$0(k);
    }
   });
  },
  Combine:function(first,second)
  {
   return this.Bind(first,function()
   {
    return second;
   });
  },
  Bind:function(eff,f)
  {
   return Eff.bind(f,eff);
  },
  ReturnFrom:Global.id,
  Return:function(v)
  {
   return Operators$1.rtn(v);
  },
  Zero:function()
  {
   return Operators$1.rtn();
  }
 },Obj,EffBuilder);
 EffBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },EffBuilder);
 Put=State.Put=Runtime.Class({
  get_K:function()
  {
   return this.k;
  },
  get_Value:function()
  {
   return this.v;
  },
  FsRoot_Library_Monads_Eff_Effect$UnPack:function(lambda)
  {
   return new Put.New(this.v,lambda.FsRoot_Library_Monads_Eff_Lambda$Invoke(this.k));
  }
 },Obj,Put);
 Put.New=Runtime.Ctor(function(v,k)
 {
  Obj.New.call(this);
  this.v=v;
  this.k=k;
 },Put);
 Get=State.Get=Runtime.Class({
  get_K:function()
  {
   return this.k;
  },
  FsRoot_Library_Monads_Eff_Effect$UnPack:function(lambda)
  {
   return new Get.New(lambda.FsRoot_Library_Monads_Eff_Lambda$Invoke(this.k));
  }
 },Obj,Get);
 Get.New=Runtime.Ctor(function(k)
 {
  Obj.New.call(this);
  this.k=k;
 },Get);
 State.refHandler=function(state,eff)
 {
  var valueRef;
  function loop(a)
  {
   return a instanceof Put?(valueRef[0]=a.get_Value(),loop((a.get_K())())):a instanceof Get?loop((a.get_K())(valueRef[0])):Eff$1.unpack(loop,a);
  }
  valueRef=[state];
  return new Eff$1({
   $:0,
   $0:function()
   {
    return loop((eff.get_Cont())(Eff$1["done'"]));
   }
  });
 };
 State.stateHandler=function(state,eff)
 {
  function loop(doneK,state$1,a)
  {
   var x;
   return a instanceof Done?doneK([state$1,a.get_Value()]):a instanceof Put?(x=(a.get_K())(),loop(doneK,a.get_Value(),x)):a instanceof Get?loop(doneK,state$1,(a.get_K())(state$1)):Eff$1.unpack(function($1)
   {
    return loop(doneK,state$1,$1);
   },a);
  }
  return new Eff$1({
   $:0,
   $0:function(doneK)
   {
    return loop(doneK,state,(eff.get_Cont())(Eff$1["done'"]));
   }
  });
 };
 State.put=function(s)
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new Put.New(s,k);
   }
  });
 };
 State.get=function()
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new Get.New(k);
   }
  });
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
  FsRoot_Library_Monads_Eff_Effect$UnPack:function(lambda)
  {
   return new LogEntry.New(this.v,lambda.FsRoot_Library_Monads_Eff_Lambda$Invoke(this.k));
  }
 },Obj,LogEntry);
 LogEntry.New=Runtime.Ctor(function(v,k)
 {
  Obj.New.call(this);
  this.v=v;
  this.k=k;
 },LogEntry);
 Log.ignoreLogHandler=function(eff)
 {
  function loop(a)
  {
   return a instanceof LogEntry?loop((a.get_K())()):Eff$1.unpack(loop,a);
  }
  return new Eff$1({
   $:0,
   $0:function()
   {
    return loop((eff.get_Cont())(Eff$1["done'"]));
   }
  });
 };
 Log.consoleLogHandler=function(eff)
 {
  function loop(a)
  {
   return a instanceof LogEntry?((function($1)
   {
    return function($2)
    {
     return $1("Log: "+Utils.prettyPrint($2));
    };
   }(function(s)
   {
    console.log(s);
   }))(a.get_Value()),loop((a.get_K())())):Eff$1.unpack(loop,a);
  }
  return new Eff$1({
   $:0,
   $0:function()
   {
    return loop((eff.get_Cont())(Eff$1["done'"]));
   }
  });
 };
 Log.pureLogHandler=function(eff)
 {
  function loop(s,doneK,a)
  {
   var x;
   return a instanceof Done?doneK([a.get_Value(),s]):a instanceof LogEntry?(x=(a.get_K())(),loop(new List.T({
    $:1,
    $0:a.get_Value(),
    $1:s
   }),doneK,x)):Eff$1.unpack(function($1)
   {
    return loop(s,doneK,$1);
   },a);
  }
  return new Eff$1({
   $:0,
   $0:function(doneK)
   {
    return loop(List.T.Empty,doneK,(eff.get_Cont())(Eff$1["done'"]));
   }
  });
 };
 Log.logf=function(fmt)
 {
  return fmt(Log.log);
 };
 Log.log=function(s)
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new LogEntry.New(s,k);
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
  FsRoot_Library_Monads_Eff_Effect$UnPack:function(lambda)
  {
   return new Fail.New(this.v,lambda.FsRoot_Library_Monads_Eff_Lambda$Invoke(this.k));
  }
 },Obj,Fail);
 Fail.New=Runtime.Ctor(function(v,k)
 {
  Obj.New.call(this);
  this.v=v;
  this.k=k;
 },Fail);
 Rsl.absorbO=function(f,vOEf)
 {
  return Rsl.absorbR(Eff.map(function(v)
  {
   return Result.ofOption(f,v);
  },vOEf));
 };
 Rsl.absorbR=function(vvEf)
 {
  return Eff.bind(Rsl.ofResult,vvEf);
 };
 Rsl.RslHandler=function(eff)
 {
  function loop(doneK,a)
  {
   return a instanceof Done?doneK({
    $:0,
    $0:a.get_Value()
   }):a instanceof Fail?doneK(Library.Error$1(a.get_Value())):Eff$1.unpack(function($1)
   {
    return loop(doneK,$1);
   },a);
  }
  return new Eff$1({
   $:0,
   $0:function(doneK)
   {
    return loop(doneK,(eff.get_Cont())(Eff$1["done'"]));
   }
  });
 };
 Rsl.ofResult=function(res)
 {
  var b;
  b=Eff.eff();
  return b.Delay(function()
  {
   return res.$==1?b.Bind(Rsl.fail(res.$0),function()
   {
    return b.Return(null);
   }):b.Return(res.$0);
  });
 };
 Rsl.fail=function(s)
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new Fail.New(s,k);
   }
  });
 };
 Eff.eff=function()
 {
  SC$1.$cctor();
  return SC$1.eff;
 };
 Eff.insertSnd=function(vEf,snd)
 {
  return Eff.map(function(v)
  {
   return[v,snd];
  },vEf);
 };
 Eff.insertFst=function(fst,vEf)
 {
  return Eff.map(function(v)
  {
   return[fst,v];
  },vEf);
 };
 Eff.insertR=function(vvR)
 {
  return vvR.$==0?Eff.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vvR.$0):Operators$1.rtn(Library.Error$1(vvR.$0));
 };
 Eff.insertO=function(vvO)
 {
  var o;
  o=vvO==null?null:{
   $:1,
   $0:Eff.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vvO.$0)
  };
  return o==null?Operators$1.rtn(null):o.$0;
 };
 Eff.sequenceSeq=function(sq)
 {
  return Eff.traverseSeq(Global.id,sq);
 };
 Eff.traverseSeq=function(f,sq)
 {
  return Eff.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return Operators$1.op_GreaterGreaterEquals(f(head),function(h)
   {
    return Operators$1.op_GreaterGreaterEquals(tail,function(t)
    {
     return Operators$1.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),Operators$1.rtn(List.T.Empty)));
 };
 Eff.apply=function(fR,vR)
 {
  return Eff.bind(function(f)
  {
   return Eff.map(f,vR);
  },fR);
 };
 Eff.map=function(f,m)
 {
  return Eff.bind(function(x)
  {
   return Eff.rtn(f(x));
  },m);
 };
 Eff.bind=function(f,effA)
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return effA.$0(function(v)
    {
     return f(v).$0(k);
    });
   }
  });
 };
 Eff.rtn=function(v)
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return k(v);
   }
  });
 };
 Builder$1=ResultM.Builder=Runtime.Class({
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
    return guard$1()?ResultM.bind(function()
    {
     return whileLoop(guard$1,body$1);
    },body$1()):ResultM.rtn();
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
   return ResultM.bindP(f,Monads.OkM$1());
  },
  Combine:function(a,b)
  {
   return ResultM.bind(b,a);
  },
  Delay:Global.id,
  Zero:function()
  {
   return ResultM.rtn();
  },
  Bind:function(w,r)
  {
   return ResultM.bindM(r,w);
  },
  Bind$1:function(w,r)
  {
   return ResultM.bindP(r,w);
  },
  ReturnFrom:function(x)
  {
   return ResultM.rtnM(x);
  },
  ReturnFrom$1:Global.id,
  ReturnFrom$2:Global.id,
  Return:function(x)
  {
   return ResultM.rtn(x);
  }
 },Obj,Builder$1);
 Builder$1.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder$1);
 Operators$2.rtn=function(v)
 {
  return ResultM.rtn(v);
 };
 Operators$2.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Operators$2.op_GreaterGreaterEquals(f(v),g);
 };
 Operators$2.op_RightShift=function(f,g,v)
 {
  return Operators$2.op_BarGreaterGreater(f(v),g);
 };
 Operators$2.op_GreaterGreaterEquals=function(v,f)
 {
  return ResultM.bindP(f,v);
 };
 Operators$2.op_BarGreaterGreater=function(v,f)
 {
  return ResultM.mapP(f,v);
 };
 ResultM.sequenceSeq=function(sq)
 {
  return ResultM.traverseSeq(Global.id,sq);
 };
 ResultM.traverseSeq=function(f,sq)
 {
  return ResultM.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return ResultM.op_GreaterGreaterEquals(f(head),function(h)
   {
    return ResultM.op_GreaterGreaterEquals(tail,function(t)
    {
     return ResultM.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),ResultM.rtn(List.T.Empty)));
 };
 ResultM.op_GreaterGreaterEquals=function(r,f)
 {
  return ResultM.bind(f,r);
 };
 ResultM.failIfFatalMsgW=function(r)
 {
  var a;
  a=Monads.OkM(r);
  return a.$==0?ResultMessage.isFatalW(a.$0[1])?Monads.ErrorM(a.$0[1]):r:r;
 };
 ResultM.failIfFatalMsg=function(r)
 {
  var a;
  a=Monads.OkM(r);
  return a.$==0?ResultMessage.isFatal(a.$0[1])?Monads.ErrorM(a.$0[1]):r:r;
 };
 ResultM.failIfFatalMsgF=function(f,r)
 {
  var a;
  a=Monads.OkM(r);
  return a.$==0?ResultMessage.isFatalF(f,a.$0[1])?Monads.ErrorM(a.$0[1]):r:r;
 };
 ResultM.addMsg=function(m,r)
 {
  return ResultM.mapMessage(function(b)
  {
   return ResultMessage.addMsg(m,b);
  },r);
 };
 ResultM.absorbO=function(f,vOR)
 {
  return ResultM.bindP(function(v)
  {
   return ResultM.ofOption(f,v);
  },vOR);
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
 ResultM.ofResult=function(vR)
 {
  return ResultM.rtnr(vR);
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
 ResultM.get=function(r)
 {
  return ResultM.defaultWith(function(x)
  {
   return Operators$3.FailWith(Global.String(x));
  },r);
 };
 ResultM.iter=function(fM,f,r)
 {
  var a;
  a=ResultM.mapP(f,r);
  a.$0==null?fM(a.$1):void 0;
 };
 ResultM.mapP=function(f,m)
 {
  return ResultM.bindP(function(x)
  {
   return ResultM.rtn(f(x));
  },m);
 };
 ResultM.check=function(a,vR)
 {
  var $1;
  return($1=vR.$0,$1!=null&&$1.$==1)?ResultMessage.isFatalF(a.$0,vR.$1)?Monads.ErrorM(vR.$1):vR:vR;
 };
 ResultM.bindM=function(f,m)
 {
  return ResultM.bindP(f,ResultM.rtnM(m));
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
 ResultM.mapMessage=function(fM,a)
 {
  return{
   $:0,
   $0:a.$0,
   $1:fM(a.$1)
  };
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
 ResultM.defaultValue=function(d,r)
 {
  return Result.defaultValue(d,ResultM.toResult(r));
 };
 ResultM.defaultWith=function(f,r)
 {
  return Result.defaultWith(f,ResultM.toResult(r));
 };
 ResultM.toOption=function(r)
 {
  return r.$0;
 };
 ResultM.toResultD=function(r)
 {
  return r.$0==null?Library.Error$1(r.$1):{
   $:0,
   $0:[r.$0.$0,r.$1]
  };
 };
 ResultM.toResult=function(r)
 {
  return r.$0==null?Library.Error$1(r.$1):{
   $:0,
   $0:r.$0.$0
  };
 };
 ResultM.freeMessage=function(r)
 {
  return r.$==1?Library.Error$1(ResultMessage.freeMessage(r.$0)):{
   $:0,
   $0:r.$0
  };
 };
 ResultM.rtnr=function(vR)
 {
  return Result.defaultWith(Monads.ErrorM,Result$1.Map(Monads.OkM$1,vR));
 };
 ResultM.rtnM=function(m)
 {
  return Monads.OkMWithMsg(null,m);
 };
 ResultM.rtn=function(v)
 {
  return Monads.OkM$1(v);
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
 ResultMAutoOpen.resultM=function()
 {
  SC$1.$cctor();
  return SC$1.resultM;
 };
 AsyncResultMBuilder=AsyncResultM.AsyncResultMBuilder=Runtime.Class({
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
   return AsyncResultM.whileLoop(guard,fRA);
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
   return AsyncResultM.bind(fRA,AsyncResultM.rtn());
  },
  Delay:Global.id,
  Combine:function(vR,fRA)
  {
   return AsyncResultM.bind(fRA,AsyncResultM.rtnR(vR));
  },
  Combine$1:function(vRA,fRA)
  {
   return AsyncResultM.bind(fRA,vRA);
  },
  Bind:function(w,r)
  {
   return AsyncResultM.bindrA(r,w);
  },
  Bind$1:function(w,r)
  {
   return AsyncResultM.bindR(r,w);
  },
  Bind$2:function(w,r)
  {
   return AsyncResultM.bindM(r,w);
  },
  Bind$3:function(w,r)
  {
   return AsyncResultM.bindr(r,w);
  },
  Bind$4:function(vRA,fRA)
  {
   return AsyncResultM.bind(fRA,vRA);
  },
  Zero:function()
  {
   return AsyncResultM.rtn();
  },
  Return:function(v)
  {
   return AsyncResultM.rtn(v);
  },
  ReturnFrom:function(vR)
  {
   return AsyncResultM.rtnrA(vR);
  },
  ReturnFrom$1:function(vR)
  {
   return AsyncResultM.rtnR(vR);
  },
  ReturnFrom$2:function(vR)
  {
   return AsyncResultM.rtnM(vR);
  },
  ReturnFrom$3:function(vR)
  {
   return AsyncResultM.rtnr(vR);
  },
  ReturnFrom$4:Global.id
 },Obj,AsyncResultMBuilder);
 AsyncResultMBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },AsyncResultMBuilder);
 AsyncResultM.absorbO=function(f,vORA)
 {
  function f$1(v)
  {
   return Result.absorbO(f,v);
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
 AsyncResultM.absorbR=function(vRRA)
 {
  var f;
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(vRRA,(f=function(r)
  {
   return Result.bindP(Global.id,r);
  },function(x)
  {
   return g(f(x));
  }));
 };
 AsyncResultM.insertR=function(vRAR)
 {
  return vRAR.$==0?AsyncResultM.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vRAR.$0):AsyncResultM.rtn(Library.Error$1(vRAR.$0));
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
 AsyncResultM.sequenceSeq=function(sq)
 {
  return AsyncResultM.traverseSeq(Global.id,sq);
 };
 AsyncResultM.traverseSeq=function(f,sq)
 {
  return AsyncResultM.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return AsyncResultM.op_GreaterGreaterEquals(f(head),function(h)
   {
    return AsyncResultM.op_GreaterGreaterEquals(tail,function(t)
    {
     return AsyncResultM.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),AsyncResultM.rtn(List.T.Empty)));
 };
 AsyncResultM.op_GreaterGreaterEquals=function(v,f)
 {
  return AsyncResultM.bind(f,v);
 };
 AsyncResultM.whileLoop=function(cond,fRA)
 {
  return cond()?AsyncResultM.bind(function()
  {
   return AsyncResultM.whileLoop(cond,fRA);
  },fRA()):AsyncResultM.rtn();
 };
 AsyncResultM.map=function(f,m)
 {
  return AsyncResultM.bind(function(x)
  {
   return AsyncResultM.rtn(f(x));
  },m);
 };
 AsyncResultM.bindR=function(f,a)
 {
  return AsyncResultM.bind(f,AsyncResultM.rtnR(a));
 };
 AsyncResultM.bindrA=function(f,a)
 {
  return AsyncResultM.bind(f,AsyncResultM.rtnrA(a));
 };
 AsyncResultM.bindM=function(f,a)
 {
  return AsyncResultM.bind(f,AsyncResultM.rtnM(a));
 };
 AsyncResultM.bindr=function(f,a)
 {
  return AsyncResultM.bind(f,AsyncResultM.rtnr(a));
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
 AsyncResultM.iterpA=function(f,vRA)
 {
  function g(v)
  {
   Library.print$1(v);
  }
  AsyncResultM.iterA(function(x)
  {
   return g(ResultMessage.summarized(x));
  },f,vRA);
 };
 AsyncResultM.iterpS=function(f,vRA)
 {
  function g(v)
  {
   Library.print$1(v);
  }
  AsyncResultM.iterS(function(x)
  {
   return g(ResultMessage.summarized(x));
  },f,vRA);
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
 AsyncResultM.iterS=function(fE,f,vRA)
 {
  throw"iterS cannot be used in JavaScript!";
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
 AsyncResultM.rtnM=function(vM)
 {
  return Concurrency.Return(ResultM.rtnM(vM));
 };
 AsyncResultM.rtnR=function(vR)
 {
  return Concurrency.Return(vR);
 };
 AsyncResultM.rtnr=function(vR)
 {
  return Concurrency.Return(ResultM.rtnr(vR));
 };
 AsyncResultM.rtn=function(v)
 {
  return Concurrency.Return(Monads.OkM$1(v));
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
 AsyncResultMAutoOpen.asyncResultM=function()
 {
  SC$1.$cctor();
  return SC$1.asyncResultM;
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
 Monads.ErrorM=function(m)
 {
  return{
   $:0,
   $0:null,
   $1:m
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
 ParseO.Guid$1=function()
 {
  SC$1.$cctor();
  return SC$1["|Guid|_|"];
 };
 ParseO.Double$1=function()
 {
  SC$1.$cctor();
  return SC$1["|Double|_|"];
 };
 ParseO.Single$1=function()
 {
  SC$1.$cctor();
  return SC$1["|Single|_|"];
 };
 ParseO.Int$1=function()
 {
  SC$1.$cctor();
  return SC$1["|Int|_|"];
 };
 ParseO.Date$1=function()
 {
  SC$1.$cctor();
  return SC$1["|Date|_|"];
 };
 ParseO.parseGuidO$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseGuidO;
 };
 ParseO.parseDoubleO$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseDoubleO;
 };
 ParseO.parseSingleO$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseSingleO;
 };
 ParseO.parseIntO$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseIntO;
 };
 ParseO.parseDateO$1=function()
 {
  SC$1.$cctor();
  return SC$1.parseDateO;
 };
 ParseO.parseDateO2=function()
 {
  SC$1.$cctor();
  return SC$1.parseDateO2;
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
 Date.toYYYYMMDD=function(sep,date)
 {
  return((((((Runtime.Curried(function($1,$2,$3,$4,$5,$6)
  {
   return $1(Global.String($2)+Utils.toSafe($3)+Utils.padNumLeft(Global.String($4),2)+Utils.toSafe($5)+Utils.padNumLeft(Global.String($6),2));
  },6))(Global.id))((new Global.Date(date)).getFullYear()))(sep))((new Global.Date(date)).getMonth()+1))(sep))((new Global.Date(date)).getDate());
 };
 Templating.LoginFileName=function()
 {
  SC$1.$cctor();
  return SC$1.LoginFileName;
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
 LatestType.TypeV0={
  $:0
 };
 IdAliado=TypesV0.IdAliado=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,IdAliado);
 IdAuthorize=TypesV0.IdAuthorize=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,IdAuthorize);
 IdAddress=TypesV0.IdAddress=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,IdAddress);
 IdPayment=TypesV0.IdPayment=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,IdPayment);
 StatusAliado=TypesV0.StatusAliado=Runtime.Class({
  toString:function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(testing_GeneratedPrintf.p($2));
    };
   }(Global.id))(this);
  }
 },null,StatusAliado);
 StatusAliado.Inactivo=new StatusAliado({
  $:3
 });
 StatusAliado.Activo=new StatusAliado({
  $:2
 });
 StatusAliado.DatosBancariosIngresados=new StatusAliado({
  $:1
 });
 StatusAliado.CuentaCreada=new StatusAliado({
  $:0
 });
 TipoAliado=TypesV0.TipoAliado=Runtime.Class({
  toString:function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(testing_GeneratedPrintf.p$1($2));
    };
   }(Global.id))(this);
  }
 },null,TipoAliado);
 TipoAliado.Regular=new TipoAliado({
  $:1
 });
 TipoAliado.Master=new TipoAliado({
  $:0
 });
 Pais=TypesV0.Pais=Runtime.Class({
  toString:function()
  {
   return this.$==3?this.$0:(function($1)
   {
    return function($2)
    {
     return $1(testing_GeneratedPrintf.p$2($2));
    };
   }(Global.id))(this);
  }
 },null,Pais);
 Pais.Argentina=new Pais({
  $:2
 });
 Pais.Venezuela=new Pais({
  $:1
 });
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
 Estado=TypesV0.Estado=Runtime.Class({
  toString:function()
  {
   return this.$==2?this.$0:(function($1)
   {
    return function($2)
    {
     return $1(testing_GeneratedPrintf.p$3($2));
    };
   }(Global.id))(this);
  }
 },null,Estado);
 Estado.Florida=new Estado({
  $:1
 });
 Estado.Texas=new Estado({
  $:0
 });
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
 Identificacion.New=function(emisor,documento,emision,vence)
 {
  return{
   emisor:emisor,
   documento:documento,
   emision:emision,
   vence:vence
  };
 };
 NumeroCuenta=TypesV0.NumeroCuenta=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,NumeroCuenta);
 NumeroTarjeta=TypesV0.NumeroTarjeta=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,NumeroTarjeta);
 Expiracion=TypesV0.Expiracion=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,Expiracion);
 RoutingNumber=TypesV0.RoutingNumber=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,RoutingNumber);
 TipoTarjeta=TypesV0.TipoTarjeta=Runtime.Class({
  toString:function()
  {
   return this.$==3?this.$0:(function($1)
   {
    return function($2)
    {
     return $1(testing_GeneratedPrintf.p$4($2));
    };
   }(Global.id))(this);
  }
 },null,TipoTarjeta);
 TipoTarjeta.Amex=new TipoTarjeta({
  $:2
 });
 TipoTarjeta.MasterCard=new TipoTarjeta({
  $:1
 });
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
 TipoCuenta=TypesV0.TipoCuenta=Runtime.Class({
  toString:function()
  {
   return this.$==2?this.$0:(function($1)
   {
    return function($2)
    {
     return $1(testing_GeneratedPrintf.p$5($2));
    };
   }(Global.id))(this);
  }
 },null,TipoCuenta);
 TipoCuenta.Corriente=new TipoCuenta({
  $:1
 });
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
 TarjetaCredito.New=function(titular,tipoTarjeta,numero,expiracion)
 {
  return{
   titular:titular,
   tipoTarjeta:tipoTarjeta,
   numero:numero,
   expiracion:expiracion
  };
 };
 ConceptoPago=TypesV0.ConceptoPago=Runtime.Class({
  toString:function()
  {
   return this.$==2?this.$0:(function($1)
   {
    return function($2)
    {
     return $1(testing_GeneratedPrintf.p$6($2));
    };
   }(Global.id))(this);
  }
 },null,ConceptoPago);
 ConceptoPago.PagoComision=new ConceptoPago({
  $:1
 });
 ConceptoPago.PagoAfiliacion=new ConceptoPago({
  $:0
 });
 Transaccion.New=function(fechaPago,ano,periodo,monto,idAliado,concepto,transaccion)
 {
  return{
   fechaPago:fechaPago,
   ano:ano,
   periodo:periodo,
   monto:monto,
   idAliado:idAliado,
   concepto:concepto,
   transaccion:transaccion
  };
 };
 TipoDireccion=TypesV0.TipoDireccion=Runtime.Class({
  toString:function()
  {
   return this.$==3?this.$0:(function($1)
   {
    return function($2)
    {
     return $1(testing_GeneratedPrintf.p$7($2));
    };
   }(Global.id))(this);
  }
 },null,TipoDireccion);
 TipoDireccion.ServicioPostal=new TipoDireccion({
  $:2
 });
 TipoDireccion.Oficina=new TipoDireccion({
  $:1
 });
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
 ZonaPostal=TypesV0.ZonaPostal=Runtime.Class({
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
 Direccion.New=function(authorizeIdR,tipoDireccion,linea1,linea2,ciudad,estado,pais,zonaPostal)
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
 CorreoElectronico=TypesV0.CorreoElectronico=Runtime.Class({
  toString:function()
  {
   return this.$0;
  }
 },null,CorreoElectronico);
 TipoTelefono=TypesV0.TipoTelefono=Runtime.Class({
  toString:function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(testing_GeneratedPrintf.p$8($2));
    };
   }(Global.id))(this);
  }
 },null,TipoTelefono);
 TipoTelefono.Voip=new TipoTelefono({
  $:3
 });
 TipoTelefono.Habitacion=new TipoTelefono({
  $:2
 });
 TipoTelefono.Oficina=new TipoTelefono({
  $:1
 });
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
 Telefono.New=function(tipoTelefono,codigoPais,codigoArea,numero,extension,mensajes)
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
 Genero.Empresa={
  $:2
 };
 Genero.Femenino={
  $:1
 };
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
 DatosPersonales.New=function(titulo,nombre1,nombre2,apellido1,apellido2,nacionalidad,genero,fechaNacimiento)
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
 StatusFormaPago.NuevaFormaPago={
  $:0
 };
 FormaPago.New=function(nombre,authorizeIdR,cuentaPago)
 {
  return{
   nombre:nombre,
   authorizeIdR:authorizeIdR,
   cuentaPago:cuentaPago
  };
 };
 TipoMensaje.Saludo={
  $:2
 };
 TipoMensaje.Informacion={
  $:1
 };
 TipoMensaje.Alerta={
  $:0
 };
 Remitente.Prozper={
  $:0
 };
 Mensaje.New=function(tipo,leido,fecha,texto,remitente)
 {
  return{
   tipo:tipo,
   leido:leido,
   fecha:fecha,
   texto:texto,
   remitente:remitente
  };
 };
 Aliado.New=function(id,idPadreO,datosPersonales,contactos,identificacion,formasPago,transacciones,mensajes,isInternal,status,tipo,fechaRegistro,fechaStatus,nReferidos,nRefActivos,nDescendientes,nDescActivos,comision,nivel)
 {
  return{
   id:id,
   idPadreO:idPadreO,
   datosPersonales:datosPersonales,
   contactos:contactos,
   identificacion:identificacion,
   formasPago:formasPago,
   transacciones:transacciones,
   mensajes:mensajes,
   isInternal:isInternal,
   status:status,
   tipo:tipo,
   fechaRegistro:fechaRegistro,
   fechaStatus:fechaStatus,
   nReferidos:nReferidos,
   nRefActivos:nRefActivos,
   nDescendientes:nDescendientes,
   nDescActivos:nDescActivos,
   comision:comision,
   nivel:nivel
  };
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
 TypesV0.ctaVacio=function()
 {
  SC$1.$cctor();
  return SC$1.ctaVacio;
 };
 TypesV0.tarVacio=function()
 {
  SC$1.$cctor();
  return SC$1.tarVacio;
 };
 TypesV0.dirVacio=function()
 {
  SC$1.$cctor();
  return SC$1.dirVacio;
 };
 TypesV0.telVacio=function()
 {
  SC$1.$cctor();
  return SC$1.telVacio;
 };
 TypesV0.premisasCalculo=function()
 {
  SC$1.$cctor();
  return SC$1.premisasCalculo;
 };
 LatestType$1.TypeV1={
  $:0
 };
 CorreoElectronico$1=TypesV1.CorreoElectronico=Runtime.Class({
  toString:function()
  {
   return this.email;
  }
 },null,CorreoElectronico$1);
 CorreoElectronico$1.New=function(email,enviado,recibido)
 {
  return new CorreoElectronico$1({
   email:email,
   enviado:enviado,
   recibido:recibido
  });
 };
 Aliado$1.New=function(id,authorizeIdR,idPadreO,datosPersonales,contactos,identificacion,formasPago,transacciones,mensajes,isInternal,status,tipo,fechaRegistro,fechaStatus,nReferidos,nRefActivos,nDescendientes,nDescActivos,comision,nivel)
 {
  return{
   id:id,
   authorizeIdR:authorizeIdR,
   idPadreO:idPadreO,
   datosPersonales:datosPersonales,
   contactos:contactos,
   identificacion:identificacion,
   formasPago:formasPago,
   transacciones:transacciones,
   mensajes:mensajes,
   isInternal:isInternal,
   status:status,
   tipo:tipo,
   fechaRegistro:fechaRegistro,
   fechaStatus:fechaStatus,
   nReferidos:nReferidos,
   nRefActivos:nRefActivos,
   nDescendientes:nDescendientes,
   nDescActivos:nDescActivos,
   comision:comision,
   nivel:nivel
  };
 };
 Modelo$1.New=function(idAliado,aliados,anoActual,periodoActual,premisas,nevento)
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
 TypesV1.correoVacio=function()
 {
  SC$1.$cctor();
  return SC$1.correoVacio;
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
 Aliado$2.empty=function()
 {
  SC$1.$cctor();
  return SC$1.empty;
 };
 Aliado$2.actualizarAliados=function(modelo)
 {
  var aliadoActualizadoM,p,cache,getOrAdd,buscar,pre;
  function aliadoActualizado(alid)
  {
   var al,hijos,nReferidos,nRefActivos,_al,p$1;
   al=buscar.aliado(alid);
   hijos=Seq$1.cache(Seq$1.map(aliadoActualizadoM,buscar.hijosDe(al.id)));
   nReferidos=Seq$1.length(hijos);
   nRefActivos=Seq$1.length(Seq$1.filter(function(al$1)
   {
    return al$1.status.$===2&&al$1.tipo.$===1;
   },hijos));
   _al=Aliado$1.New(al.id,al.authorizeIdR,al.idPadreO,al.datosPersonales,al.contactos,al.identificacion,al.formasPago,al.transacciones,al.mensajes,al.isInternal,al.status,nRefActivos>=pre.numeroReferidosMaster?TipoAliado.Master:TipoAliado.Regular,al.fechaRegistro,0,nReferidos,nRefActivos,Seq$1.sumBy(function(al$1)
   {
    return al$1.nDescendientes+al$1.nReferidos;
   },hijos),Seq$1.sumBy(function(al$1)
   {
    return al$1.nDescActivos+al$1.nRefActivos;
   },hijos),al.comision,1+buscar.nivelDe(al.idPadreO));
   p$1=Aliado$2.comision(pre,_al);
   return Aliado$1.New(_al.id,_al.authorizeIdR,_al.idPadreO,_al.datosPersonales,_al.contactos,_al.identificacion,_al.formasPago,_al.transacciones,_al.mensajes,_al.isInternal,_al.status,_al.tipo,_al.fechaRegistro,_al.fechaStatus,_al.nReferidos,_al.nRefActivos,_al.nDescendientes,_al.nDescActivos,p$1[0]+p$1[1],_al.nivel);
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
  function getOrAdd$1(p$1,f)
  {
   var o;
   o=checkO(p$1);
   return o==null?store(p$1,f(p$1)):o.$0;
  }
  buscar=Aliado$2.busqueda(modelo.aliados);
  pre=modelo.premisas;
  aliadoActualizadoM=(p=(cache=new Dictionary.New$5(),[[checkO,function($1)
  {
   return function($2)
   {
    return getOrAdd$1($1,$2);
   };
  }],function()
  {
   cache.Clear();
  }]),(getOrAdd=p[0][1],[function(p$1)
  {
   return(getOrAdd(p$1))(aliadoActualizado);
  },p[1]]))[0];
  return Arrays.ofSeq(Seq$1.map(aliadoActualizadoM,Seq$1.map(function(al)
  {
   return al.id;
  },modelo.aliados)));
 };
 Aliado$2.busqueda=function(aliados)
 {
  var padres,aliadosMap;
  function m(pO,ch)
  {
   return[pO,Arrays.ofSeq(Seq$1.map(function(t)
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
   return Arrays.ofSeq(Seq$1.delay(function()
   {
    return Seq$1.collect(function(h)
    {
     return Seq$1.append([h],Seq$1.delay(function()
     {
      return descendientes(h);
     }));
    },hijos(al));
   }));
  }
  padres=new FSharpMap.New(Seq$1.map(function($1)
  {
   return m($1[0],$1[1]);
  },Seq$1.groupBy(function(t)
  {
   return t[0];
  },Seq$1.map(function(al)
  {
   return[al.idPadreO,al.id];
  },aliados))));
  aliadosMap=new FSharpMap.New(Seq$1.map(function(al)
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
      return $1("buscarAliado failed: "+testing_GeneratedPrintf.p$9($2));
     };
    }(Operators$3.FailWith))(id);
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
  return al.status.$==2?[p[0],p[1]]:[0,0];
 };
 Aliado$2.statusActual=function(ano,mes,al)
 {
  var o;
  o=Arrays.tryFind(function(t)
  {
   return Unchecked.Equals(t.idAliado,al.id)&&t.ano===ano&&t.periodo===mes&&t.concepto.$===0;
  },al.transacciones)==null?null:{
   $:1,
   $0:StatusAliado.Activo
  };
  return o==null?StatusAliado.Inactivo:o.$0;
 };
 Aliado$2.aliadoEf=function()
 {
  return Operators$1.op_GreaterGreaterEquals(State.get(),function(modelo)
  {
   return Rsl.ofResult(Result.ofOption(function()
   {
    return(function($1)
    {
     return function($2)
     {
      return $1("Cannot find aliado "+testing_GeneratedPrintf.p$9($2));
     };
    }(Global.id))(modelo.idAliado);
   },Arrays.tryFind(function(al)
   {
    return Unchecked.Equals(al.id,modelo.idAliado);
   },modelo.aliados)));
  });
 };
 Aliado$2.periodoActualEf=function()
 {
  return Operators$1.op_BarGreaterGreater(State.get(),function(modelo)
  {
   return[modelo.anoActual,modelo.periodoActual];
  });
 };
 Evento.New=function(nevento,aliadoO,data)
 {
  return{
   nevento:nevento,
   aliadoO:aliadoO,
   data:data
  };
 };
 Respuesta.ROk={
  $:0
 };
 EstadoActual.estado=function()
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(Promise.AsAsync(self.fetch("http://localhost:7071/api/hello")),function(a)
   {
    return Concurrency.Bind(Promise.AsAsync(a.text()),function(a$1)
    {
     return Concurrency.Return((testing_JsonDecoder.j())(JSON.parse(a$1)));
    });
   });
  });
 };
 Rpc.iterA=function(arm)
 {
  function g(a)
  {
   Global.alert(a);
  }
  AsyncResultM.iterA(function(x)
  {
   return g(ResultMessage.summarized(x));
  },Global.ignore,arm);
 };
 Rpc.obtenerUnions=function()
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Return([[],[],[],[],[],[],[]]);
  });
 };
 Rpc.ejecutarEvento=function(evento)
 {
  return AsyncResultM.rtn(Respuesta.ROk);
 };
 Rpc.leerDataModelo=function(idO)
 {
  var b;
  b=AsyncResultMAutoOpen.asyncResultM();
  return b.Run(b.Delay(function()
  {
   var $1,user,ida;
   $1={
    $:1,
    $0:"admin"
   };
   return $1!=null&&$1.$==1?(user=$1.$0,AsyncResultMAutoOpen["AsyncResultMBuilder.Bind"](b,EstadoActual.estado(),function(a)
   {
    var aliados,buscar,al;
    aliados=Aliado$2.actualizarAliados(a);
    buscar=Aliado$2.busqueda(aliados);
    return user==="admin"?b.Return(Modelo$1.New(a.idAliado,aliados,a.anoActual,a.periodoActual,a.premisas,a.nevento)):(al=Seq$1.find(function(al$1)
    {
     return Unchecked.Equals(al$1.id,new IdAliado({
      $:0,
      $0:user
     }));
    },aliados),b.Return(Modelo$1.New(al.id,[al].concat((al.tipo.$===0?buscar.descendientes:buscar.hijos)(al)),a.anoActual,a.periodoActual,a.premisas,a.nevento)));
   })):idO!=null&&idO.$==1?(ida=idO.$0,AsyncResultMAutoOpen["AsyncResultMBuilder.Bind"](b,EstadoActual.estado(),function(a)
   {
    var al,x,v,i,d,i$1;
    al=(x=Seq$1.tryFind(function(al$1)
    {
     return Unchecked.Equals(al$1.id,ida);
    },a.aliados),(v=(i=new IdAliado({
     $:0,
     $0:"Prozper"
    }),(d=(i$1=Aliado$2.empty().datosPersonales,DatosPersonales.New(i$1.titulo,"Prozper",i$1.nombre2,i$1.apellido1,i$1.apellido2,i$1.nacionalidad,i$1.genero,i$1.fechaNacimiento)),Aliado$1.New(i,Aliado$2.empty().authorizeIdR,Aliado$2.empty().idPadreO,d,Aliado$2.empty().contactos,Aliado$2.empty().identificacion,Aliado$2.empty().formasPago,Aliado$2.empty().transacciones,Aliado$2.empty().mensajes,Aliado$2.empty().isInternal,Aliado$2.empty().status,Aliado$2.empty().tipo,Aliado$2.empty().fechaRegistro,Aliado$2.empty().fechaStatus,Aliado$2.empty().nReferidos,Aliado$2.empty().nRefActivos,Aliado$2.empty().nDescendientes,Aliado$2.empty().nDescActivos,Aliado$2.empty().comision,Aliado$2.empty().nivel))),x==null?v:x.$0));
    return AsyncResultMAutoOpen["AsyncResultMBuilder.Bind"](b,EstadoActual.estado(),function(a$1)
    {
     return b.Return(Modelo$1.New(al.id,[Aliado$1.New(al.id,Aliado$2.empty().authorizeIdR,Aliado$2.empty().idPadreO,al.datosPersonales,Aliado$2.empty().contactos,Aliado$2.empty().identificacion,Aliado$2.empty().formasPago,Aliado$2.empty().transacciones,Aliado$2.empty().mensajes,Aliado$2.empty().isInternal,Aliado$2.empty().status,Aliado$2.empty().tipo,Aliado$2.empty().fechaRegistro,Aliado$2.empty().fechaStatus,Aliado$2.empty().nReferidos,Aliado$2.empty().nRefActivos,Aliado$2.empty().nDescendientes,Aliado$2.empty().nDescActivos,Aliado$2.empty().comision,Aliado$2.empty().nivel)],a$1.anoActual,a$1.periodoActual,a$1.premisas,a$1.nevento));
    });
   })):b.Bind$3(Library.Error$1(new ResultMessage({
    $:1,
    $0:"User not logged in."
   })),function()
   {
    return AsyncResultMAutoOpen["AsyncResultMBuilder.Bind"](b,EstadoActual.estado(),function(a)
    {
     return b.Return(Modelo$1.New(a.idAliado,[],a.anoActual,a.periodoActual,a.premisas,a.nevento));
    });
   });
  }));
 };
 Rpc.logoutUser=function()
 {
  return AsyncResultM.rtn();
 };
 Rpc.loginUser=function(user,password)
 {
  return AsyncResultM.rtn();
 };
 Rpc.userIsAliado=function(user,al)
 {
  return al.datosPersonales.apellido1===user||al.datosPersonales.nombre1===user;
 };
 Rpc.printResult=function(operation,arm)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(arm,function(a)
   {
    (((Runtime.Curried3(function($1,$2,$3)
    {
     return $1(Utils.toSafe($2)+" "+Utils.prettyPrint($3));
    }))(function(s)
    {
     console.log(s);
    }))(operation))(a);
    return arm;
   });
  });
 };
 EndPoint.DefaultEP={
  $:0
 };
 VariousUI.removeButton=function(f,doc)
 {
  return Doc.Element("form",[],[doc,Doc.Button("-",[AttrProxy.Create("title","borrar")],f)]);
 };
 VariousUI.crearOptions=function(ns)
 {
  return Doc.Concat(Seq$1.map(VariousUI.crearOption,ns));
 };
 VariousUI.crearOption=function(n)
 {
  return Doc.Element("option",[],[Doc.TextNode(n)]);
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
 Telefono$1.formaDoc=function(telOV)
 {
  var forma,b,T,p,i,requeridosW;
  forma=(b=(T=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.tiposTel().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tipos",
   $1:T
  })),(p=Handler.CompleteHoles(b.k,b.h,[["tipotelefono",0],["codigopais",0],["codigoarea",0],["telefono",0],["extension",0]]),(i=new TemplateInstance.New(p[1],testing_Templates.telefono(p[0])),(b.i=i,i))));
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
      $0:(c=Strings.Trim($3),Telefono.New(tipo,Strings.Trim($4),c,Strings.Trim($5),Strings.Trim($6),false))
     };
    });
   },4);
  },requeridosW,forma.Hole("tipotelefono").get_View()),forma.Hole("codigoarea").get_View()),forma.Hole("codigopais").get_View()),forma.Hole("telefono").get_View()),forma.Hole("extension").get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 CorreoElectronico$2.formaDoc=function(corV)
 {
  var mensaje,forma,b,p,i,m,requeridosW;
  mensaje=Var$1.Create$1("");
  forma=(b=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"mensaje",
   $1:mensaje.get_View()
  }),(p=Handler.CompleteHoles(b.k,b.h,[["correo",0],["confirmarcorreo",0]]),(i=new TemplateInstance.New(p[1],testing_Templates.correo(p[0])),(b.i=i,i))));
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
    $0:TypesV1.correoVacio()
   },x==null?i$1:x)),o==null?null:{
    $:1,
    $0:(v=o.$0,CorreoElectronico$1.New($2,v.enviado,v.recibido))
   });
  },requeridosW,forma.Hole("correo").get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 Direccion$1.formaDoc=function(dirV)
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
  })),(p=Handler.CompleteHoles(b.k,b.h,[["tipodireccion",0],["direccion1",0],["direccion2",0],["ciudad",0],["estado",0],["codigopostal",0],["pais",0]]),(i=new TemplateInstance.New(p[1],testing_Templates.direccion(p[0])),(b.i=i,i))));
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
         $0:Direccion.New((o=$9==null?null:{
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
 CuentaBancaria$1.formaDocO=function(ctaOV)
 {
  var v;
  return CuentaBancaria$1.formaDoc(Var$1.Lens(ctaOV,(v=[TypesV0.ctaVacio(),""],function(o)
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
  var forma,b,T,p,i,requeridosW;
  function a(cta,a$1)
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
  forma=(b=(T=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.tiposCta().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tiposcuenta",
   $1:T
  })).WithHole({
   $:2,
   $0:"mensaje",
   $1:View.Map(function($1)
   {
    return $1[1];
   },ctaV.get_View())
  }),(p=Handler.CompleteHoles(b.k,b.h,[["tipocuenta",0],["titular",0],["banco",0],["numero",0],["routing",0]]),(i=new TemplateInstance.New(p[1],testing_Templates.cuentabancaria(p[0])),(b.i=i,i))));
  View.Sink(function($1)
  {
   return a($1[0],$1[1]);
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
   var v;
   if(a$1!=null&&a$1.$==1)
    {
     v=a$1.$0;
     !Unchecked.Equals((ctaV.Get())[0],v)?ctaV.Set([v,""]):void 0;
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
  return TarjetaCredito$1.formaDoc(Var$1.Lens(tarOV,(v=[TypesV0.tarVacio(),""],function(o)
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
  var forma,b,T,p,i,requeridosW;
  function a(tar,mensaje)
  {
   forma.Hole("titular").Set(tar.titular);
   forma.Hole("tipotarjeta").Set((function($1)
   {
    return function($2)
    {
     return $1(Global.String($2));
    };
   }(Global.id))(tar.tipoTarjeta));
   forma.Hole("numero").Set(tar.numero.$0);
   forma.Hole("expiracion").Set(tar.expiracion.$0);
  }
  forma=(b=(T=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.tiposTar().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tipostarjeta",
   $1:T
  })).WithHole({
   $:2,
   $0:"mensaje",
   $1:View.Map(function($1)
   {
    return $1[1];
   },tarV.get_View())
  }),(p=Handler.CompleteHoles(b.k,b.h,[["tipotarjeta",0],["titular",0],["numero",0],["expiracion",0]]),(i=new TemplateInstance.New(p[1],testing_Templates.tarjetacredito(p[0])),(b.i=i,i))));
  View.Sink(function($1)
  {
   return a($1[0],$1[1]);
  },tarV.get_View());
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
     },List.ofArray([[Strings.Trim($1)==="","Titular"],[Strings.Trim($2)==="","TipoTarjeta"],[Strings.Trim($3)==="","Numero"],[Strings.Trim($4)==="","Expiracion"]])));
    };
   };
  },forma.Hole("titular").get_View(),forma.Hole("tipotarjeta").get_View()),forma.Hole("numero").get_View()),forma.Hole("expiracion").get_View());
  View.Sink(function(a$1)
  {
   var v;
   if(a$1!=null&&a$1.$==1)
    {
     v=a$1.$0;
     !Unchecked.Equals((tarV.Get())[0],v)?tarV.Set([v,""]):void 0;
    }
  },View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime.Curried3(function($3,$4,$5)
   {
    return!Seq$1.isEmpty($1)?null:VariousUI.alertIfNone("Tipo Tarjeta",TipoTarjeta.tryParse(Strings.Trim($2)),function(tipoTar)
    {
     return{
      $:1,
      $0:TarjetaCredito.New(Strings.Trim($3),tipoTar,new NumeroTarjeta({
       $:0,
       $0:Strings.Trim($4)
      }),new Expiracion({
       $:0,
       $0:Strings.Trim($5)
      }))
     };
    });
   });
  },requeridosW,forma.Hole("tipotarjeta").get_View()),forma.Hole("titular").get_View()),forma.Hole("numero").get_View()),forma.Hole("expiracion").get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 DatosPersonales$1.formaDoc=function(datosV)
 {
  var forma,b,G,p,i,requeridosW;
  forma=(b=(G=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.generos().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"generos",
   $1:G
  })),(p=Handler.CompleteHoles(b.k,b.h,[["nombres",0],["apellidos",0],["fechanacimiento",0],["genero",0]]),(i=new TemplateInstance.New(p[1],testing_Templates.datospersonales(p[0])),(b.i=i,i))));
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
       return $1(testing_GeneratedPrintf.p$10($2));
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
       $0:DatosPersonales.New(null,Arrays.get(Strings.SplitChars(Strings.Trim($4),[" "],0),0),Strings.concat(" ",Slice.array(Strings.SplitChars(Strings.Trim($5),[" "],0),{
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
 FormaRegistro.formaDoc$2290$41=function(mostrar,mensajes,datosOV,correoOV,telefonoOV,direccionOV)
 {
  return function()
  {
   var m,$1,$2,$3,$4,$5,correo,datos,direccion,telefono,b;
   function g(a)
   {
    Global.alert(a);
   }
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):($1=datosOV.Get(),$2=correoOV.Get(),$3=telefonoOV.Get(),$4=direccionOV.Get(),$1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3!=null&&$3.$==1&&($4!=null&&$4.$==1&&($5=[$2.$0,$1.$0,$4.$0,$3.$0],true))))?(correo=$5[0],datos=$5[1],direccion=$5[2],telefono=$5[3],AsyncResultM.iterA(function(x)
   {
    return g(ResultMessage.summarized(x));
   },Global.ignore,(b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
   {
    var c;
    return b.Bind$4(Rpc.ejecutarEvento({
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
     ModeloUI.refrescarData();
     Global.alert((function($6)
     {
      return function($7)
      {
       return $6(testing_GeneratedPrintf.p$11($7));
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
  mensajes=Var$1.Create$1("");
  mostrar=Var$1.Create$1(false);
  datosOV=Var$1.Create$1(null);
  correoOV=Var$1.Create$1(null);
  telefonoOV=Var$1.Create$1(null);
  direccionOV=Var$1.Create$1(null);
  p=DatosPersonales$1.formaDoc(datosOV);
  p$1=CorreoElectronico$2.formaDoc(correoOV);
  p$2=Telefono$1.formaDoc(telefonoOV);
  p$3=Direccion$1.formaDoc(direccionOV);
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
   function g(a)
   {
    Global.alert(a);
   }
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):($1=datosOV.Get(),$2=correoOV.Get(),$3=telefonoOV.Get(),$4=direccionOV.Get(),$1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3!=null&&$3.$==1&&($4!=null&&$4.$==1&&($5=[$2.$0,$1.$0,$4.$0,$3.$0],true))))?(correo=$5[0],datos=$5[1],direccion=$5[2],telefono=$5[3],AsyncResultM.iterA(function(x)
   {
    return g(ResultMessage.summarized(x));
   },Global.ignore,(b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
   {
    var c;
    return b$1.Bind$4(Rpc.ejecutarEvento({
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
     ModeloUI.refrescarData();
     Global.alert((function($6)
     {
      return function($7)
      {
       return $6(testing_GeneratedPrintf.p$11($7));
      };
     }(Global.id))(a));
     return b$1.Zero();
    });
   }))))):Global.alert("Error not caught FormaRegistro"));
  }))),(p$4=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p$4[1],testing_Templates.formaregistro(p$4[0])),(b.i=i,i))));
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
 FormaDatos.formaAliado$2343$36=function(mostrar,mensajes,datosOV,aliadoW)
 {
  return function()
  {
   var m,$1,$2,$3,al,datos,b;
   function g(a)
   {
    Global.alert(a);
   }
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):($1=datosOV.Get(),$2=View.TryGet(aliadoW),$1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3=[$2.$0,$1.$0],true))?(al=$3[0],datos=$3[1],AsyncResultM.iterA(function(x)
   {
    return g(ResultMessage.summarized(x));
   },Global.ignore,(b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
   {
    return b.Bind$4(Rpc.ejecutarEvento({
     $:4,
     $0:[al.id,datos]
    }),function(a)
    {
     ModeloUI.refrescarData();
     Global.alert((function($4)
     {
      return function($5)
      {
       return $4(testing_GeneratedPrintf.p$11($5));
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
  p=DatosPersonales$1.formaDoc(datosOV);
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
   function g$1(a)
   {
    Global.alert(a);
   }
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):($1=datosOV.Get(),$2=View.TryGet(aliadoW),$1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3=[$2.$0,$1.$0],true))?(al=$3[0],datos=$3[1],AsyncResultM.iterA(function(x)
   {
    return g$1(ResultMessage.summarized(x));
   },Global.ignore,(b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
   {
    return b$1.Bind$4(Rpc.ejecutarEvento({
     $:4,
     $0:[al.id,datos]
    }),function(a)
    {
     ModeloUI.refrescarData();
     Global.alert((function($4)
     {
      return function($5)
      {
       return $4(testing_GeneratedPrintf.p$11($5));
      };
     }(Global.id))(a));
     return b$1.Zero();
    });
   }))))):Global.alert("Error not caught FormaDatos"));
  }))),(p$1=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p$1[1],testing_Templates.formadatospersonales(p$1[0])),(b.i=i,i))));
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
 FormaGenerica.forma$2379$38=function(salvar)
 {
  return function()
  {
   salvar();
  };
 };
 FormaGenerica.forma=function(mensajeW,cambioW,contenido,salvar)
 {
  var mostrar,b,t,p,i;
  Var$1.Create$1("");
  mostrar=Var$1.Create$1(false);
  return(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"mensajes",
   $1:View.Map2(function($1,$2)
   {
    return $1?$2:"";
   },mostrar.get_View(),mensajeW)
  }).WithHole({
   $:2,
   $0:"changed",
   $1:View.Map(function($1)
   {
    return $1?"":"mui-btn--primary";
   },cambioW)
  }).WithHole({
   $:0,
   $0:"content",
   $1:contenido
  }),t.WithHole(Handler.EventQ2(t.k,"salvar",function()
  {
   return t.i;
  },function()
  {
   salvar();
  }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.formagenerica(p[0])),(b.i=i,i)))).get_Doc();
 };
 FormaContactos.formaDoc=function()
 {
  return ModeloUI.aliadoIdDoc(FormaContactos.formaContactos);
 };
 FormaContactos.formaContactos$2452$36=function(mostrar,mensajes,aliadoW,contactosV)
 {
  return function()
  {
   var m,m$1,al,b;
   function g(a)
   {
    Global.alert(a);
   }
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):(m$1=View.TryGet(aliadoW),m$1!=null&&m$1.$==1?(al=m$1.$0,AsyncResultM.iterA(function(x)
   {
    return g(ResultMessage.summarized(x));
   },Global.ignore,(b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
   {
    return b.Bind$4(Rpc.ejecutarEvento({
     $:5,
     $0:[al.id,contactosV.Get()]
    }),function(a)
    {
     ModeloUI.refrescarData();
     Global.alert((function($1)
     {
      return function($2)
      {
       return $1(testing_GeneratedPrintf.p$11($2));
      };
     }(Global.id))(a));
     return b.Zero();
    });
   }))))):Global.alert("Error not caught FormaDatos"));
  };
 };
 FormaContactos.formaContactos$2451$42=function(contactosV)
 {
  return function()
  {
   contactosV.Set(contactosV.Get().concat([{
    $:0,
    $0:TypesV0.dirVacio()
   }]));
  };
 };
 FormaContactos.formaContactos$2450$42=function(contactosV)
 {
  return function()
  {
   contactosV.Set(contactosV.Get().concat([{
    $:1,
    $0:TypesV1.correoVacio()
   }]));
  };
 };
 FormaContactos.formaContactos$2449$42=function(contactosV)
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
   },(Telefono$1.formaDoc((function($1)
   {
    return makeVar($1[0],$1[1]);
   }(ftel))(i$1)))[1]);
  },tels);
  corDocs=Doc.ConvertBy(Global.id,function(i$1)
  {
   return VariousUI.removeButton(function()
   {
    contactosV.Set(Array.remove(i$1,contactosV.Get()));
   },(CorreoElectronico$2.formaDoc((function($1)
   {
    return makeVar($1[0],$1[1]);
   }(fcor))(i$1)))[1]);
  },cors);
  dirDocs=Doc.ConvertBy(Global.id,function(i$1)
  {
   return VariousUI.removeButton(function()
   {
    contactosV.Set(Array.remove(i$1,contactosV.Get()));
   },(Direccion$1.formaDoc((function($1)
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
    $0:TypesV1.correoVacio()
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
   function g(a)
   {
    Global.alert(a);
   }
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):(m$1=View.TryGet(aliadoW),m$1!=null&&m$1.$==1?(al=m$1.$0,AsyncResultM.iterA(function(x)
   {
    return g(ResultMessage.summarized(x));
   },Global.ignore,(b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
   {
    return b$1.Bind$4(Rpc.ejecutarEvento({
     $:5,
     $0:[al.id,contactosV.Get()]
    }),function(a)
    {
     ModeloUI.refrescarData();
     Global.alert((function($1)
     {
      return function($2)
      {
       return $1(testing_GeneratedPrintf.p$11($2));
      };
     }(Global.id))(a));
     return b$1.Zero();
    });
   }))))):Global.alert("Error not caught FormaDatos"));
  }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.formacontactos(p[0])),(b.i=i,i)))).get_Doc();
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
  contactosV=Var$1.Create$1([]);
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
   return Telefono$1.formaDoc(f$1(x));
  }),function(x)
  {
   return g(f(x));
  }),tels);
  Doc.ConvertBy(Global.id,(f$2=(f$3=makeVar.apply(null,FormaContactos.fcor()),function(x)
  {
   return CorreoElectronico$2.formaDoc(f$3(x));
  }),function(x)
  {
   return g$1(f$2(x));
  }),cors);
  Doc.ConvertBy(Global.id,(f$4=(f$5=makeVar.apply(null,FormaContactos.fdir()),function(x)
  {
   return Direccion$1.formaDoc(f$5(x));
  }),function(x)
  {
   return g$2(f$4(x));
  }),dirs);
  return Runtime.Curried(FormaGenerica.forma,4);
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
 FormaFormasPago.formaDoc=function()
 {
  return ModeloUI.aliadoIdDoc(FormaFormasPago.formaFormasPago);
 };
 FormaFormasPago.formaFormasPago$2518$36=function(mostrar,mensajes,aliadoW,formasPagoV)
 {
  return function()
  {
   var m,m$1,al,b;
   function g(a)
   {
    Global.alert(a);
   }
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):(m$1=View.TryGet(aliadoW),m$1!=null&&m$1.$==1?(al=m$1.$0,AsyncResultM.iterA(function(x)
   {
    return g(ResultMessage.summarized(x));
   },Global.ignore,(b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
   {
    return b.Bind$4(Rpc.ejecutarEvento({
     $:6,
     $0:[al.id,formasPagoV.Get()]
    }),function(a)
    {
     ModeloUI.refrescarData();
     Global.alert((function($1)
     {
      return function($2)
      {
       return $1(testing_GeneratedPrintf.p$11($2));
      };
     }(Global.id))(a));
     return b.Zero();
    });
   }))))):Global.alert("Error not caught FormaDatos"));
  };
 };
 FormaFormasPago.formaFormasPago$2517$42=function(formasPagoV,fp)
 {
  return function()
  {
   formasPagoV.Set(formasPagoV.Get().concat([fp({
    $:0,
    $0:TypesV0.ctaVacio()
   })]));
  };
 };
 FormaFormasPago.formaFormasPago$2516$42=function(formasPagoV,fp)
 {
  return function()
  {
   formasPagoV.Set(formasPagoV.Get().concat([fp({
    $:1,
    $0:TypesV0.tarVacio()
   })]));
  };
 };
 FormaFormasPago.formaFormasPago=function(aliadoW)
 {
  var mensajes,mostrar,formasPagoV,formasPagoIV,tars,ctas,tarDocs,ctaDocs,b,t,t$1,t$2,p,i;
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
     if(a!=null&&a.$==1)
      formasPagoV.Set(Array.replace(i$1,(fr(Arrays.get(formasPagoV.Get(),i$1)))(a.$0[0]),formasPagoV.Get()));
    });
   };
  }
  function fp(cp)
  {
   return FormaPago.New("",Library.Error(""),cp);
  }
  mensajes=Var$1.Create$1("");
  mostrar=Var$1.Create$1(false);
  formasPagoV=Var$1.Create$1([]);
  View.Sink(function(a)
  {
   formasPagoV.Set(a);
  },View.Map(function(a)
  {
   return a.formasPago;
  },aliadoW));
  formasPagoIV=View.Map(Seq$1.indexed,formasPagoV.get_View());
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
  },formasPagoIV);
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
  },formasPagoIV);
  tarDocs=Doc.ConvertBy(Global.id,function(i$1)
  {
   return VariousUI.removeButton(function()
   {
    formasPagoV.Set(Array.remove(i$1,formasPagoV.Get()));
   },(TarjetaCredito$1.formaDocO((function($1)
   {
    return makeVar($1[0],$1[1]);
   }(FormaFormasPago.ftar()))(i$1)))[1]);
  },tars);
  ctaDocs=Doc.ConvertBy(Global.id,function(i$1)
  {
   return VariousUI.removeButton(function()
   {
    formasPagoV.Set(Array.remove(i$1,formasPagoV.Get()));
   },(CuentaBancaria$1.formaDocO((function($1)
   {
    return makeVar($1[0],$1[1]);
   }(FormaFormasPago.fcta()))(i$1)))[1]);
  },ctas);
  return(b=(t=(t$1=(t$2=ProviderBuilder.Make().WithHole({
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
    return Unchecked.Equals($1.formasPago,$2)?"":"mui-btn--primary";
   },aliadoW,formasPagoV.get_View())
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
   formasPagoV.Set(formasPagoV.Get().concat([fp({
    $:1,
    $0:TypesV0.tarVacio()
   })]));
  }))),t$1.WithHole(Handler.EventQ2(t$1.k,"mascuenta",function()
  {
   return t$1.i;
  },function()
  {
   formasPagoV.Set(formasPagoV.Get().concat([fp({
    $:0,
    $0:TypesV0.ctaVacio()
   })]));
  }))),t.WithHole(Handler.EventQ2(t.k,"salvar",function()
  {
   return t.i;
  },function()
  {
   var m,m$1,al,b$1;
   function g(a)
   {
    Global.alert(a);
   }
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):(m$1=View.TryGet(aliadoW),m$1!=null&&m$1.$==1?(al=m$1.$0,AsyncResultM.iterA(function(x)
   {
    return g(ResultMessage.summarized(x));
   },Global.ignore,(b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
   {
    return b$1.Bind$4(Rpc.ejecutarEvento({
     $:6,
     $0:[al.id,formasPagoV.Get()]
    }),function(a)
    {
     ModeloUI.refrescarData();
     Global.alert((function($1)
     {
      return function($2)
      {
       return $1(testing_GeneratedPrintf.p$11($2));
      };
     }(Global.id))(a));
     return b$1.Zero();
    });
   }))))):Global.alert("Error not caught FormaDatos"));
  }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.formacuentas(p[0])),(b.i=i,i)))).get_Doc();
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
  return idR.$==0?"":idR.$0;
 };
 RenderAliados.aliados$2607$49=function(seleccionar,alid)
 {
  return function()
  {
   seleccionar(alid);
  };
 };
 RenderAliados.aliados$2605$49=function(expandir,alid)
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
   var c,c$1,c$2,c$3,c$4,c$5,c$6,c$7,c$8,$1,nivel,raiz,x$1,als$1,buscar;
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
    return Seq$1.delay(function()
    {
     return Seq$1.append([al],Seq$1.delay(function()
     {
      var o,o$1;
      return(o=(o$1=expandidos.Get(),o$1==null?null:{
       $:1,
       $0:o$1.$0.Contains(al.id)
      }),o==null?false:o.$0)?Seq$1.collect(buscarExpandidos,buscar.hijos(al)):[];
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
   buscar=Aliado$2.busqueda(als$1);
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
   }),x$1=Seq$1.tryHead(Seq$1.map(function(al)
   {
    return al.id;
   },raiz)),(Option.iter(seleccionar))(x$1)):void 0;
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
       return $2(testing_GeneratedPrintf.p($3));
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
       return $2(testing_GeneratedPrintf.p$1($3));
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
   }))),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],testing_Templates.filaaliado(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();
  }
  expandidos=Var$1.Create$1(null);
  hijosDeO=Var$1.Create$1(null);
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
  })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.tablaaliados(p[0])),(b.i=i,i)))).get_Doc();
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
       return $2(testing_GeneratedPrintf.p($3));
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
       return $2(testing_GeneratedPrintf.p$1($3));
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
   })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.aliado(p[0])),(b.i=i,i)))).get_Doc();
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
   }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.calculo(p[0])),(b.i=i,i)))).get_Doc();
  });
 };
 ModeloUI.refrescarData=function()
 {
  var b;
  Rpc.iterA((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
  {
   return b.Bind$4(Rpc.leerDataModelo(ModeloUI.refAliadoIdOV().Get()),function(a)
   {
    ModeloUI.modeloV().Set(a);
    return b.Zero();
   });
  }))));
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
     s=Library["String.Left$1"](s$1,-3);
     parts=new List.T({
      $:1,
      $0:Library["String.Right$1"](s$1,3),
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
 MainProgram.mainProgram=function()
 {
  var titleV,mesActualW,anoActualW,nombreAliadoW,statusAliadoW,comisionAliadoW,datosAliadoW,l,m,a,o,v,b,M,p;
  titleV=Var$1.Create$1("Prozper");
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
  AppFramework.addPlugIn(PlugIn.New("Prozper",[AppFramework.newVar("title",titleV),AppFramework.newVar("contentVar",ModeloUI.contentVar())],[AppFramework.newViw("mesActual",mesActualW),AppFramework.newViw("anoActual",anoActualW),AppFramework.newViw("aliado",nombreAliadoW),AppFramework.newViw("status",statusAliadoW),AppFramework.newViw("comision",comisionAliadoW),AppFramework.newViw("datos",datosAliadoW)],[AppFramework.newDoc("Aliados",Lazy.Create(RenderAliados.aliados)),AppFramework.newDoc("Aliado",Lazy.Create(RenderAliado.aliado)),AppFramework.newDoc("Calculo",Lazy.Create(RenderAliado.calculo)),AppFramework.newDoc("FormaRegistro",Lazy.Create(FormaRegistro.formaDoc)),AppFramework.newDoc("FormaDatos",Lazy.Create(FormaDatos.formaDoc)),AppFramework.newDoc("FormaContactos",Lazy.Create(FormaContactos.formaDoc)),AppFramework.newDoc("FormaFormasPago",Lazy.Create(FormaFormasPago.formaDoc)),AppFramework.newDoc("contentDoc",Lazy.Create(MainProgram.getContentDoc))],[AppFramework.newAct("Logout",function()
  {
   MainProgram.logout();
  })],[]));
  LayoutEngineModule.addLayout((l=(m=self.document.getElementById("GlobalLayout"),Unchecked.Equals(m,null)?"\r\n                    menuEditor       horizontal  65       menuLogo                  editorMessages\r\n                    double           horizontal  0-50-100 AppFramework.AppFwkClient menuEditor\r\n                    menuLogo         vertical    350      logo                      menu\r\n                    logo             span       \"margin:0; color:gray; font-size: 55px; font-weight:530\" \"F# Station\"\r\n                    editorMessages   horizontal 10-83-100 editorButtons             messages\r\n                    messages         vertical   0-50-100  messagesLeft              messagesRight\r\n                    editorButtons    vertical -200 snippetsSnippet buttons\r\n                    buttons div      \"overflow: hidden; display: grid; grid-template-columns: 100%; grid-template-rows: repeat(15, calc(100% / 15)); bxackground-color: #eee; box-sizing: border-box; padding : 5px; grid-gap: 5px; margin-right: 21px\" btnSaveAs none x btnAddSnippet btnDeleteSnippet btnIndentIn btnIndentOut none x btnRunFS none x btnAbortFsi\r\n                    snippetsSnippet  vertical   0-20-100  snippets                  editorProperties\r\n                    snippets         horizontal 20        \"${FSharpStation.CurrentPath}\" FSharpStation.Snippets\r\n                    editorProperties vertical   0-100-100 snippet                   properties\r\n                    properties       div        \"\"        FSharpStation.Properties\r\n                    snippet          horizontal 35        Name                      FSharpStation.editor\r\n                    menu             span  \"\" btnLoad btnImport\r\n        \r\n                    btnSaveAs        button FSharpStation.SaveAs         \"class=btn ${FSharpStation.SaveNeeded}\" \"Save as...    \"\r\n                    btnAddDimension  button RuleEditor.AddDimension      \"\"                  \"Add Dimension \"\r\n                    btnDeleteSnippet button FSharpStation.RemoveSnippet  \"\"                  \"Delete Snippet\"\r\n                    btnIndentIn      button FSharpStation.IndentIn       \"\"                  \"Indent In  >> \"\r\n                    btnIndentOut     button FSharpStation.IndentOut      \"\"                  \"Indent Out << \"\r\n                    btnRunFS         button FSharpStation.RunFS          \"\"                  \"Run F#        \"\r\n                    btnAbortFsi      button FSharpStation.AbortFsi       \"\"                  \"Abort Fsi     \"\r\n        \r\n                    messagesLeft     wcomp-tabstrip                      \"\"                  Output FsCode\r\n                    messagesRight    wcomp-tabstrip                      \"\"                  Parser\r\n        \r\n                    Output           textarea  FSharpStation.Output      \"tabname=Output ; placeholder=Output messages ; spellcheck=false\" \r\n                    FsCode           textarea  FSharpStation.FsCode      \"tabname=F# Code; placeholder=F# Code         ; spellcheck=false\" \r\n                    Parser           textarea  FSharpStation.Parser      \"tabname=Parser ; placeholder=Parser messages; dblclick=${FSharpStation.JumpTo} ; spellcheck=false\" \r\n                    Name             Doc       InputLabel                \"\"     \"Name:\"        FSharpStation.SnippetName\r\n                    btnLoad          Doc       InputFile                 \"\"     \"Load File...\" FSharpStation.LoadFile  FileName\r\n                    btnImport        Doc       InputFile                 \"\"     \"Import...\"    FSharpStation.Import    \"\"\r\n                    FileName         div                                 \"class=form-control\"  FSharpStation.fileName\r\n                   ":m.textContent),LayoutEngineModule.newLyt(MainProgram.layoutName(),l)));
  a=(o=null,(v=MainProgram.layoutName(),o==null?v:o.$0));
  AppFramework.mainDocV().Set(a);
  ModeloUI.refrescarData();
  b=(M=AppFramework.getMainDoc().f(),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"maincontent",
   $1:M
  }));
  p=Handler.CompleteHoles(b.k,b.h,[]);
  b.i=new TemplateInstance.New(p[1],Templates.RunFullDocTemplate(p[0]));
  View.Sink(function(t)
  {
   self.document.title=t;
  },titleV.get_View());
 };
 MainProgram.getContentDoc=function()
 {
  return Doc.EmbedView(View.Map(function(content)
  {
   var o,o$1,t;
   o=(o$1=(t=((LayoutEngineModule.splitName())("Prozper"))(content),AppFramework.tryGetDoc(t[0],t[1])),o$1==null?null:{
    $:1,
    $0:LayoutEngineModule.getDocFinal(List.T.Empty,o$1.$0)
   });
   return o==null?LayoutEngineModule.errDoc((function($1)
   {
    return function($2)
    {
     return $1("Doc not found "+Utils.toSafe($2));
    };
   }(Global.id))(content)):o.$0;
  },ModeloUI.contentVar().get_View()));
 };
 MainProgram.logout=function()
 {
  var b;
  Rpc.iterA((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
  {
   return b.Bind$4(Rpc.logoutUser(),function()
   {
    self.location.replace("/");
    return b.Zero();
   });
  }))));
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
 MainProgram.layoutName=function()
 {
  SC$1.$cctor();
  return SC$1.layoutName;
 };
 SC$1.$cctor=function()
 {
  var f,g,d,c,c$1,b,b$1;
  SC$1.$cctor=Global.ignore;
  function g$1(s)
  {
   return Strings.concat("\n",s);
  }
  function f$1(s)
  {
   return String.splitByChar$1("\n",s);
  }
  function g$2(s)
  {
   var a,b$2;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a=0,(b$2=Arrays.length(s)-2,Unchecked.Compare(a,b$2)===1?a:b$2))
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
  SC$1.rtn=function(v)
  {
   return[v];
  };
  SC$1.result=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.eff=new EffBuilder.New();
  SC$1.resultM=new Builder$1.New();
  SC$1.asyncResultM=new AsyncResultMBuilder.New();
  SC$1.unindentStr=function(x)
  {
   return g$1(String.unindent$1(x));
  };
  SC$1.skipLastLine=(f=function(x)
  {
   return g$2(f$1(x));
  },function(x)
  {
   return g$3(f(x));
  });
  SC$1.parseDateO2=(g=ParseO.tryParseWith$1(function(a)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a),m!=null&&m.$==1&&(o=m.$0,true)),o];
  }),function(x)
  {
   return g(f$2(x));
  });
  SC$1.parseDateO=ParseO.tryParseWith$1(function(a)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a),m!=null&&m.$==1&&(o=m.$0,true)),o];
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
  SC$1.parseSingleO=ParseO.tryParseWith$1(function(a)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a),Global.isNaN($1)?false:(o=$1,true)),o];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith$1(function(a)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a),Global.isNaN($1)?false:(o=$1,true)),o];
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
  SC$1["|Single|_|"]=ParseO.parseSingleO$1();
  SC$1["|Double|_|"]=ParseO.parseDoubleO$1();
  SC$1["|Guid|_|"]=ParseO.parseGuidO$1();
  SC$1.rootdir="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\StackOverflow\\website";
  SC$1.TemplatesFileName="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\StackOverflow\\website"+"\\Templates.html";
  SC$1.LoginFileName="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\StackOverflow\\website"+"\\Login.html";
  ((function($1)
  {
   return function($2)
   {
    return $1(Utils.toSafe($2));
   };
  }(function(s)
  {
   console.log(s);
  }))("D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\StackOverflow\\website\\Templates.html"));
  SC$1.premisasCalculo=PremisasCalculo.New(15,25,25,0,75,31,15,22);
  SC$1.telVacio=Telefono.New(TipoTelefono.Movil,"","","","",false);
  SC$1.dirVacio=Direccion.New(Library.Error$1(""),TipoDireccion.Habitacion,"","","",new Estado({
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
  }),new Expiracion({
   $:0,
   $0:""
  }));
  SC$1.ctaVacio=CuentaBancaria.New("","",TipoCuenta.Ahorro,new NumeroCuenta({
   $:0,
   $0:""
  }),new RoutingNumber({
   $:0,
   $0:""
  }));
  SC$1.correoVacio=CorreoElectronico$1.New("",null,null);
  SC$1.empty=(d=DatosPersonales.New(null,"","","","",Pais.USA,Genero.Masculino,(new Global.Date(2000,1-1,1)).getTime()),Aliado$1.New(new IdAliado({
   $:0,
   $0:""
  }),Library.Error$1(""),null,d,[],[],[],[],[],false,StatusAliado.Inactivo,TipoAliado.Regular,(new Global.Date(2000,1-1,1)).getTime(),(new Global.Date(2000,1-1,1)).getTime(),0,0,0,0,0,0));
  SC$1.modeloV=Var$1.Create$1(Modelo$1.New(new IdAliado({
   $:0,
   $0:":"
  }),[],(c=Date$1.now(),(new Date$1(c)).getFullYear()),(c$1=Date$1.now(),(new Date$1(c$1)).getMonth()+1),TypesV0.premisasCalculo(),-2));
  SC$1.selAliadoIdOV=Var$1.Create$1(null);
  SC$1.refAliadoIdOV=Var$1.Create$1(null);
  SC$1.endPointV=Router.InstallHash(EndPoint.DefaultEP,testing_Router.r());
  SC$1.contentVar=Var$1.Lens(ModeloUI.endPointV(),function(a)
  {
   return a.$==1?a.$0:"ProzperLyt.mainContent";
  },function(a,a$1)
  {
   return a$1==="ProzperLyt.mainContent"?EndPoint.DefaultEP:{
    $:1,
    $0:a$1
   };
  });
  SC$1.aliadoW=(b=View.get_Do(),View.Bind(function(a)
  {
   var aid,aliadoO;
   aid=a.idAliado;
   aliadoO=Seq$1.tryFind(function(al)
   {
    return Unchecked.Equals(al.id,aid);
   },a.aliados);
   return View.Const(aliadoO!=null&&aliadoO.$==1?aliadoO.$0:Aliado$2.empty());
  },ModeloUI.modeloV().get_View()));
  SC$1.paises=Var$1.Create$1([]);
  SC$1.estados=Var$1.Create$1([]);
  SC$1.tiposDir=Var$1.Create$1([]);
  SC$1.tiposTel=Var$1.Create$1([]);
  SC$1.generos=Var$1.Create$1([]);
  SC$1.tiposCta=Var$1.Create$1([]);
  SC$1.tiposTar=Var$1.Create$1([]);
  Concurrency.Start((b$1=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Rpc.obtenerUnions(),function(a)
   {
    VariousUI.paises().Set(a[0]);
    VariousUI.estados().Set(a[1]);
    VariousUI.tiposDir().Set(a[2]);
    VariousUI.tiposTel().Set(a[3]);
    VariousUI.generos().Set(a[4]);
    VariousUI.tiposCta().Set(a[5]);
    VariousUI.tiposTar().Set(a[6]);
    return Concurrency.Zero();
   });
  })),null);
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
  SC$1.ftar=[function(cp)
  {
   var m;
   m=cp.cuentaPago;
   return m.$==1?{
    $:1,
    $0:[m.$0,FormaFormasPago.msg(cp)]
   }:null;
  },function(fp)
  {
   return function(v)
   {
    return FormaPago.New(fp.nombre,Library.Error(""),{
     $:1,
     $0:v
    });
   };
  }];
  SC$1.fcta=[function(cp)
  {
   var m;
   m=cp.cuentaPago;
   return m.$==0?{
    $:1,
    $0:[m.$0,FormaFormasPago.msg(cp)]
   }:null;
  },function(fp)
  {
   return function(v)
   {
    return FormaPago.New(fp.nombre,Library.Error(""),{
     $:0,
     $0:v
    });
   };
  }];
  SC$1.layoutName="ProzperLyt";
 };
 testing_GeneratedPrintf.p=function($1)
 {
  return $1.$==3?"Inactivo":$1.$==2?"Activo":$1.$==1?"DatosBancariosIngresados":"CuentaCreada";
 };
 testing_GeneratedPrintf.p$1=function($1)
 {
  return $1.$==1?"Regular":"Master";
 };
 testing_GeneratedPrintf.p$2=function($1)
 {
  return $1.$==3?"OtroP "+Utils.prettyPrint($1.$0):$1.$==2?"Argentina":$1.$==1?"Venezuela":"USA";
 };
 testing_GeneratedPrintf.p$3=function($1)
 {
  return $1.$==2?"OtroS "+Utils.prettyPrint($1.$0):$1.$==1?"Florida":"Texas";
 };
 testing_GeneratedPrintf.p$4=function($1)
 {
  return $1.$==3?"Otra "+Utils.prettyPrint($1.$0):$1.$==2?"Amex":$1.$==1?"MasterCard":"Visa";
 };
 testing_GeneratedPrintf.p$5=function($1)
 {
  return $1.$==2?"Otra "+Utils.prettyPrint($1.$0):$1.$==1?"Corriente":"Ahorro";
 };
 testing_GeneratedPrintf.p$6=function($1)
 {
  return $1.$==2?"Otro "+Utils.prettyPrint($1.$0):$1.$==1?"PagoComision":"PagoAfiliacion";
 };
 testing_GeneratedPrintf.p$7=function($1)
 {
  return $1.$==3?"Otro "+Utils.prettyPrint($1.$0):$1.$==2?"ServicioPostal":$1.$==1?"Oficina":"Habitacion";
 };
 testing_GeneratedPrintf.p$8=function($1)
 {
  return $1.$==3?"Voip":$1.$==2?"Habitacion":$1.$==1?"Oficina":"Movil";
 };
 testing_GeneratedPrintf.p$9=function($1)
 {
  return"IdAliado "+Utils.prettyPrint($1.$0);
 };
 testing_JsonDecoder.j=function()
 {
  return testing_JsonDecoder._v?testing_JsonDecoder._v:testing_JsonDecoder._v=(Provider.DecodeRecord(void 0,[["idAliado",testing_JsonDecoder.j$1,0],["aliados",Provider.DecodeArray(testing_JsonDecoder.j$2),0],["anoActual",Provider.Id(),0],["periodoActual",Provider.Id(),0],["premisas",Provider.Id(),0],["nevento",Provider.Id(),0]]))();
 };
 testing_JsonDecoder.j$2=function()
 {
  return testing_JsonDecoder._v$2?testing_JsonDecoder._v$2:testing_JsonDecoder._v$2=(Provider.DecodeRecord(void 0,[["id",testing_JsonDecoder.j$1,0],["authorizeIdR",testing_JsonDecoder.j$3,0],["idPadreO",testing_JsonDecoder.j$1,1],["datosPersonales",testing_JsonDecoder.j$5,0],["contactos",Provider.DecodeArray(testing_JsonDecoder.j$8),0],["identificacion",Provider.DecodeArray(testing_JsonDecoder.j$18),0],["formasPago",Provider.DecodeArray(testing_JsonDecoder.j$22),0],["transacciones",Provider.DecodeArray(testing_JsonDecoder.j$34),0],["mensajes",Provider.DecodeArray(testing_JsonDecoder.j$36),0],["isInternal",Provider.Id(),0],["status",testing_JsonDecoder.j$39,0],["tipo",testing_JsonDecoder.j$40,0],["fechaRegistro",Provider.DecodeDateTime(),0],["fechaStatus",Provider.DecodeDateTime(),0],["nReferidos",Provider.Id(),0],["nRefActivos",Provider.Id(),0],["nDescendientes",Provider.Id(),0],["nDescActivos",Provider.Id(),0],["comision",Provider.Id(),0],["nivel",Provider.Id(),0]]))();
 };
 testing_JsonDecoder.j$40=function()
 {
  return testing_JsonDecoder._v$40?testing_JsonDecoder._v$40:testing_JsonDecoder._v$40=(Provider.DecodeUnion(TipoAliado,"$",[[0,[]],[1,[]]]))();
 };
 testing_JsonDecoder.j$39=function()
 {
  return testing_JsonDecoder._v$39?testing_JsonDecoder._v$39:testing_JsonDecoder._v$39=(Provider.DecodeUnion(StatusAliado,"$",[[0,[]],[1,[]],[2,[]],[3,[]]]))();
 };
 testing_JsonDecoder.j$36=function()
 {
  return testing_JsonDecoder._v$36?testing_JsonDecoder._v$36:testing_JsonDecoder._v$36=(Provider.DecodeRecord(void 0,[["tipo",testing_JsonDecoder.j$37,0],["leido",Provider.DecodeDateTime(),1],["fecha",Provider.DecodeDateTime(),0],["texto",Provider.Id(),0],["remitente",testing_JsonDecoder.j$38,0]]))();
 };
 testing_JsonDecoder.j$38=function()
 {
  return testing_JsonDecoder._v$38?testing_JsonDecoder._v$38:testing_JsonDecoder._v$38=(Provider.DecodeUnion(void 0,"$",[[0,[]],[1,[["$0","Item",testing_JsonDecoder.j$1,0]]],[2,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$37=function()
 {
  return testing_JsonDecoder._v$37?testing_JsonDecoder._v$37:testing_JsonDecoder._v$37=(Provider.DecodeUnion(void 0,"$",[[0,[]],[1,[]],[2,[]]]))();
 };
 testing_JsonDecoder.j$34=function()
 {
  return testing_JsonDecoder._v$34?testing_JsonDecoder._v$34:testing_JsonDecoder._v$34=(Provider.DecodeRecord(void 0,[["fechaPago",Provider.DecodeDateTime(),0],["ano",Provider.Id(),0],["periodo",Provider.Id(),0],["monto",Provider.Id(),0],["idAliado",testing_JsonDecoder.j$1,0],["concepto",testing_JsonDecoder.j$35,0],["transaccion",Provider.Id(),0]]))();
 };
 testing_JsonDecoder.j$35=function()
 {
  return testing_JsonDecoder._v$35?testing_JsonDecoder._v$35:testing_JsonDecoder._v$35=(Provider.DecodeUnion(ConceptoPago,"$",[[0,[]],[1,[]],[2,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$22=function()
 {
  return testing_JsonDecoder._v$22?testing_JsonDecoder._v$22:testing_JsonDecoder._v$22=(Provider.DecodeRecord(void 0,[["nombre",Provider.Id(),0],["authorizeIdR",testing_JsonDecoder.j$23,0],["cuentaPago",testing_JsonDecoder.j$25,0]]))();
 };
 testing_JsonDecoder.j$25=function()
 {
  return testing_JsonDecoder._v$25?testing_JsonDecoder._v$25:testing_JsonDecoder._v$25=(Provider.DecodeUnion(void 0,"$",[[0,[[null,null,testing_JsonDecoder.j$30]]],[1,[[null,null,testing_JsonDecoder.j$26]]],[2,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$30=function()
 {
  return testing_JsonDecoder._v$30?testing_JsonDecoder._v$30:testing_JsonDecoder._v$30=(Provider.DecodeRecord(void 0,[["titular",Provider.Id(),0],["banco",Provider.Id(),0],["tipo",testing_JsonDecoder.j$31,0],["numero",testing_JsonDecoder.j$32,0],["routing",testing_JsonDecoder.j$33,0]]))();
 };
 testing_JsonDecoder.j$33=function()
 {
  return testing_JsonDecoder._v$33?testing_JsonDecoder._v$33:testing_JsonDecoder._v$33=(Provider.DecodeUnion(RoutingNumber,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$32=function()
 {
  return testing_JsonDecoder._v$32?testing_JsonDecoder._v$32:testing_JsonDecoder._v$32=(Provider.DecodeUnion(NumeroCuenta,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$31=function()
 {
  return testing_JsonDecoder._v$31?testing_JsonDecoder._v$31:testing_JsonDecoder._v$31=(Provider.DecodeUnion(TipoCuenta,"$",[[0,[]],[1,[]],[2,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$26=function()
 {
  return testing_JsonDecoder._v$26?testing_JsonDecoder._v$26:testing_JsonDecoder._v$26=(Provider.DecodeRecord(void 0,[["titular",Provider.Id(),0],["tipoTarjeta",testing_JsonDecoder.j$27,0],["numero",testing_JsonDecoder.j$28,0],["expiracion",testing_JsonDecoder.j$29,0]]))();
 };
 testing_JsonDecoder.j$29=function()
 {
  return testing_JsonDecoder._v$29?testing_JsonDecoder._v$29:testing_JsonDecoder._v$29=(Provider.DecodeUnion(Expiracion,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$28=function()
 {
  return testing_JsonDecoder._v$28?testing_JsonDecoder._v$28:testing_JsonDecoder._v$28=(Provider.DecodeUnion(NumeroTarjeta,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$27=function()
 {
  return testing_JsonDecoder._v$27?testing_JsonDecoder._v$27:testing_JsonDecoder._v$27=(Provider.DecodeUnion(TipoTarjeta,"$",[[0,[]],[1,[]],[2,[]],[3,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$23=function()
 {
  return testing_JsonDecoder._v$23?testing_JsonDecoder._v$23:testing_JsonDecoder._v$23=(Provider.DecodeUnion(void 0,"$",[[0,[["$0","ResultValue",testing_JsonDecoder.j$24,0]]],[1,[["$0","ErrorValue",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$24=function()
 {
  return testing_JsonDecoder._v$24?testing_JsonDecoder._v$24:testing_JsonDecoder._v$24=(Provider.DecodeUnion(IdPayment,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$18=function()
 {
  return testing_JsonDecoder._v$18?testing_JsonDecoder._v$18:testing_JsonDecoder._v$18=(Provider.DecodeRecord(void 0,[["emisor",testing_JsonDecoder.j$19,0],["documento",testing_JsonDecoder.j$21,0],["emision",Provider.DecodeDateTime(),0],["vence",Provider.DecodeDateTime(),0]]))();
 };
 testing_JsonDecoder.j$21=function()
 {
  return testing_JsonDecoder._v$21?testing_JsonDecoder._v$21:testing_JsonDecoder._v$21=(Provider.DecodeUnion(void 0,"$",[[0,[["$0","Item",Provider.Id(),0]]],[1,[["$0","Item",Provider.Id(),0]]],[2,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$19=function()
 {
  return testing_JsonDecoder._v$19?testing_JsonDecoder._v$19:testing_JsonDecoder._v$19=(Provider.DecodeUnion(void 0,"$",[[0,[["$0","Item",testing_JsonDecoder.j$6,0]]],[1,[["$0","Item",testing_JsonDecoder.j$20,0]]]]))();
 };
 testing_JsonDecoder.j$20=function()
 {
  return testing_JsonDecoder._v$20?testing_JsonDecoder._v$20:testing_JsonDecoder._v$20=(Provider.DecodeUnion(void 0,"$",[[0,[["$0","Item",testing_JsonDecoder.j$16,0]]]]))();
 };
 testing_JsonDecoder.j$8=function()
 {
  return testing_JsonDecoder._v$8?testing_JsonDecoder._v$8:testing_JsonDecoder._v$8=(Provider.DecodeUnion(void 0,"$",[[0,[[null,null,testing_JsonDecoder.j$12]]],[1,[[null,null,testing_JsonDecoder.j$11]]],[2,[[null,null,testing_JsonDecoder.j$9]]],[3,[["$0","Item",Provider.Id(),0]]],[4,[["$0","Item",Provider.Id(),0]]],[5,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$12=function()
 {
  return testing_JsonDecoder._v$12?testing_JsonDecoder._v$12:testing_JsonDecoder._v$12=(Provider.DecodeRecord(void 0,[["authorizeIdR",testing_JsonDecoder.j$13,0],["tipoDireccion",testing_JsonDecoder.j$15,0],["linea1",Provider.Id(),0],["linea2",Provider.Id(),0],["ciudad",Provider.Id(),0],["estado",testing_JsonDecoder.j$16,0],["pais",testing_JsonDecoder.j$6,0],["zonaPostal",testing_JsonDecoder.j$17,0]]))();
 };
 testing_JsonDecoder.j$17=function()
 {
  return testing_JsonDecoder._v$17?testing_JsonDecoder._v$17:testing_JsonDecoder._v$17=(Provider.DecodeUnion(ZonaPostal,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$16=function()
 {
  return testing_JsonDecoder._v$16?testing_JsonDecoder._v$16:testing_JsonDecoder._v$16=(Provider.DecodeUnion(Estado,"$",[[0,[]],[1,[]],[2,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$15=function()
 {
  return testing_JsonDecoder._v$15?testing_JsonDecoder._v$15:testing_JsonDecoder._v$15=(Provider.DecodeUnion(TipoDireccion,"$",[[0,[]],[1,[]],[2,[]],[3,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$13=function()
 {
  return testing_JsonDecoder._v$13?testing_JsonDecoder._v$13:testing_JsonDecoder._v$13=(Provider.DecodeUnion(void 0,"$",[[0,[["$0","ResultValue",testing_JsonDecoder.j$14,0]]],[1,[["$0","ErrorValue",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$14=function()
 {
  return testing_JsonDecoder._v$14?testing_JsonDecoder._v$14:testing_JsonDecoder._v$14=(Provider.DecodeUnion(IdAddress,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$11=function()
 {
  return testing_JsonDecoder._v$11?testing_JsonDecoder._v$11:testing_JsonDecoder._v$11=(Provider.DecodeRecord(CorreoElectronico$1,[["email",Provider.Id(),0],["enviado",Provider.DecodeDateTime(),1],["recibido",Provider.DecodeDateTime(),1]]))();
 };
 testing_JsonDecoder.j$9=function()
 {
  return testing_JsonDecoder._v$9?testing_JsonDecoder._v$9:testing_JsonDecoder._v$9=(Provider.DecodeRecord(void 0,[["tipoTelefono",testing_JsonDecoder.j$10,0],["codigoPais",Provider.Id(),0],["codigoArea",Provider.Id(),0],["numero",Provider.Id(),0],["extension",Provider.Id(),0],["mensajes",Provider.Id(),0]]))();
 };
 testing_JsonDecoder.j$10=function()
 {
  return testing_JsonDecoder._v$10?testing_JsonDecoder._v$10:testing_JsonDecoder._v$10=(Provider.DecodeUnion(TipoTelefono,"$",[[0,[]],[1,[]],[2,[]],[3,[]]]))();
 };
 testing_JsonDecoder.j$5=function()
 {
  return testing_JsonDecoder._v$5?testing_JsonDecoder._v$5:testing_JsonDecoder._v$5=(Provider.DecodeRecord(void 0,[["titulo",Provider.Id(),1],["nombre1",Provider.Id(),0],["nombre2",Provider.Id(),0],["apellido1",Provider.Id(),0],["apellido2",Provider.Id(),0],["nacionalidad",testing_JsonDecoder.j$6,0],["genero",testing_JsonDecoder.j$7,0],["fechaNacimiento",Provider.DecodeDateTime(),0]]))();
 };
 testing_JsonDecoder.j$7=function()
 {
  return testing_JsonDecoder._v$7?testing_JsonDecoder._v$7:testing_JsonDecoder._v$7=(Provider.DecodeUnion(void 0,"$",[[0,[]],[1,[]],[2,[]]]))();
 };
 testing_JsonDecoder.j$6=function()
 {
  return testing_JsonDecoder._v$6?testing_JsonDecoder._v$6:testing_JsonDecoder._v$6=(Provider.DecodeUnion(Pais,"$",[[0,[]],[1,[]],[2,[]],[3,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$3=function()
 {
  return testing_JsonDecoder._v$3?testing_JsonDecoder._v$3:testing_JsonDecoder._v$3=(Provider.DecodeUnion(void 0,"$",[[0,[["$0","ResultValue",testing_JsonDecoder.j$4,0]]],[1,[["$0","ErrorValue",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$4=function()
 {
  return testing_JsonDecoder._v$4?testing_JsonDecoder._v$4:testing_JsonDecoder._v$4=(Provider.DecodeUnion(IdAuthorize,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_JsonDecoder.j$1=function()
 {
  return testing_JsonDecoder._v$1?testing_JsonDecoder._v$1:testing_JsonDecoder._v$1=(Provider.DecodeUnion(IdAliado,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 testing_Templates.telefono=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"telefono"
  },h):void 0;
 };
 testing_Templates.correo=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"correo"
  },h):void 0;
 };
 testing_Templates.direccion=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"direccion"
  },h):void 0;
 };
 testing_Templates.cuentabancaria=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"cuentabancaria"
  },h):void 0;
 };
 testing_Templates.tarjetacredito=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"tarjetacredito"
  },h):void 0;
 };
 testing_Templates.datospersonales=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"datospersonales"
  },h):void 0;
 };
 testing_GeneratedPrintf.p$10=function($1)
 {
  return $1.$==2?"Empresa":$1.$==1?"Femenino":"Masculino";
 };
 testing_GeneratedPrintf.p$11=function($1)
 {
  return $1.$==2?"Mensaje "+Utils.prettyPrint($1.$0):$1.$==1?"NuevoRegistro "+Utils.prettyPrint($1.$0):"ROk";
 };
 testing_Templates.formaregistro=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"formaregistro"
  },h):void 0;
 };
 testing_Templates.formadatospersonales=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"formadatospersonales"
  },h):void 0;
 };
 testing_Templates.formagenerica=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"formagenerica"
  },h):void 0;
 };
 testing_Templates.formacontactos=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"formacontactos"
  },h):void 0;
 };
 testing_Templates.formacuentas=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"formacuentas"
  },h):void 0;
 };
 testing_Templates.tablaaliados=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"tablaaliados"
  },h):void 0;
 };
 testing_Templates.filaaliado=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"filaaliado"
  },h):void 0;
 };
 testing_Templates.aliado=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"aliado"
  },h):void 0;
 };
 testing_Templates.calculo=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"calculo"
  },h):void 0;
 };
 testing_Router.r=function()
 {
  return RouterOperators.JSUnion(void 0,[[null,[[null,[]]],[]],[null,[[null,["Content"]]],[RouterOperators.rString()]]]);
 };
 Runtime.OnLoad(function()
 {
  MainProgram.mainProgram();
 });
}());

(function()
{
 "use strict";
 var Global,FsRoot,Library,Dict,Monads,Seq,Async,WebSharper,Obj,Result,Builder,Operators,Eff,Eff$1,Done,EffBuilder,EA,Reader,Ask,Log,LogEntry,Rsl,Fail,Asy,Asyn,String,ParseO,Serializer,JsonIntermediate,LibraryJS,Promise,Date,ProzperServer,Basico,IdAliado,IdAuthorize,IdAddress,IdPayment,TypesV0,LatestType,IdAliado$1,IdAuthorize$1,IdAddress$1,IdPayment$1,IdSubscription,StatusAliado,TipoAliado,Pais,Estado,Identificacion,TipoArchivo,StatusArchivo,Archivo,Expiracion,NumeroCuenta,NumeroTarjeta,RoutingNumber,TipoTarjeta,TipoCuenta,CuentaBancaria,TarjetaCredito,ConceptoPago,Transaccion,TipoDireccion,ZonaPostal,Direccion,TipoTelefono,Telefono,CorreoElectronico,Genero,DatosPersonales,CuentaPago,StatusFormaPago,Subscripcion,FormaPago,TipoMensaje,Remitente,Mensaje,PremisasCalculo,DiaPago,IdForAuthorize,Aliado,Modelo,Aliado$1,Buscar,Evento,Respuesta,Rpc0,Remoting,CustomXhrProvider,SC$1,ProzperServer_GeneratedPrintf,Seq$1,Concurrency,Arrays,List,IntelliFactory,Runtime,Enumerator,Result$1,Operators$1,Unchecked,Utils,console,Strings,Slice,Collections,FSharpMap,FSharpSet,BalancedTree,Char,Date$1,DateUtil,Dictionary,Remoting$1,Numeric,System,Guid,Lazy;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 Dict=Library.Dict=Library.Dict||{};
 Monads=Library.Monads=Library.Monads||{};
 Seq=Monads.Seq=Monads.Seq||{};
 Async=Monads.Async=Monads.Async||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 Result=Monads.Result=Monads.Result||{};
 Builder=Result.Builder=Result.Builder||{};
 Operators=Result.Operators=Result.Operators||{};
 Eff=Monads.Eff=Monads.Eff||{};
 Eff$1=Eff.Eff=Eff.Eff||{};
 Done=Eff.Done=Eff.Done||{};
 EffBuilder=Eff.EffBuilder=Eff.EffBuilder||{};
 EA=Eff.EA=Eff.EA||{};
 Reader=Eff.Reader=Eff.Reader||{};
 Ask=Reader.Ask=Reader.Ask||{};
 Log=Eff.Log=Eff.Log||{};
 LogEntry=Log.LogEntry=Log.LogEntry||{};
 Rsl=Eff.Rsl=Eff.Rsl||{};
 Fail=Rsl.Fail=Rsl.Fail||{};
 Asy=Eff.Asy=Eff.Asy||{};
 Asyn=Asy.Asyn=Asy.Asyn||{};
 String=Library.String=Library.String||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 Serializer=Library.Serializer=Library.Serializer||{};
 JsonIntermediate=Serializer.JsonIntermediate=Serializer.JsonIntermediate||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Promise=LibraryJS.Promise=LibraryJS.Promise||{};
 Date=LibraryJS.Date=LibraryJS.Date||{};
 ProzperServer=FsRoot.ProzperServer=FsRoot.ProzperServer||{};
 Basico=ProzperServer.Basico=ProzperServer.Basico||{};
 IdAliado=Basico.IdAliado=Basico.IdAliado||{};
 IdAuthorize=Basico.IdAuthorize=Basico.IdAuthorize||{};
 IdAddress=Basico.IdAddress=Basico.IdAddress||{};
 IdPayment=Basico.IdPayment=Basico.IdPayment||{};
 TypesV0=ProzperServer.TypesV0=ProzperServer.TypesV0||{};
 LatestType=TypesV0.LatestType=TypesV0.LatestType||{};
 IdAliado$1=TypesV0.IdAliado=TypesV0.IdAliado||{};
 IdAuthorize$1=TypesV0.IdAuthorize=TypesV0.IdAuthorize||{};
 IdAddress$1=TypesV0.IdAddress=TypesV0.IdAddress||{};
 IdPayment$1=TypesV0.IdPayment=TypesV0.IdPayment||{};
 IdSubscription=TypesV0.IdSubscription=TypesV0.IdSubscription||{};
 StatusAliado=TypesV0.StatusAliado=TypesV0.StatusAliado||{};
 TipoAliado=TypesV0.TipoAliado=TypesV0.TipoAliado||{};
 Pais=TypesV0.Pais=TypesV0.Pais||{};
 Estado=TypesV0.Estado=TypesV0.Estado||{};
 Identificacion=TypesV0.Identificacion=TypesV0.Identificacion||{};
 TipoArchivo=TypesV0.TipoArchivo=TypesV0.TipoArchivo||{};
 StatusArchivo=TypesV0.StatusArchivo=TypesV0.StatusArchivo||{};
 Archivo=TypesV0.Archivo=TypesV0.Archivo||{};
 Expiracion=TypesV0.Expiracion=TypesV0.Expiracion||{};
 NumeroCuenta=TypesV0.NumeroCuenta=TypesV0.NumeroCuenta||{};
 NumeroTarjeta=TypesV0.NumeroTarjeta=TypesV0.NumeroTarjeta||{};
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
 TipoTelefono=TypesV0.TipoTelefono=TypesV0.TipoTelefono||{};
 Telefono=TypesV0.Telefono=TypesV0.Telefono||{};
 CorreoElectronico=TypesV0.CorreoElectronico=TypesV0.CorreoElectronico||{};
 Genero=TypesV0.Genero=TypesV0.Genero||{};
 DatosPersonales=TypesV0.DatosPersonales=TypesV0.DatosPersonales||{};
 CuentaPago=TypesV0.CuentaPago=TypesV0.CuentaPago||{};
 StatusFormaPago=TypesV0.StatusFormaPago=TypesV0.StatusFormaPago||{};
 Subscripcion=TypesV0.Subscripcion=TypesV0.Subscripcion||{};
 FormaPago=TypesV0.FormaPago=TypesV0.FormaPago||{};
 TipoMensaje=TypesV0.TipoMensaje=TypesV0.TipoMensaje||{};
 Remitente=TypesV0.Remitente=TypesV0.Remitente||{};
 Mensaje=TypesV0.Mensaje=TypesV0.Mensaje||{};
 PremisasCalculo=TypesV0.PremisasCalculo=TypesV0.PremisasCalculo||{};
 DiaPago=TypesV0.DiaPago=TypesV0.DiaPago||{};
 IdForAuthorize=TypesV0.IdForAuthorize=TypesV0.IdForAuthorize||{};
 Aliado=TypesV0.Aliado=TypesV0.Aliado||{};
 Modelo=TypesV0.Modelo=TypesV0.Modelo||{};
 Aliado$1=ProzperServer.Aliado=ProzperServer.Aliado||{};
 Buscar=Aliado$1.Buscar=Aliado$1.Buscar||{};
 Evento=ProzperServer.Evento=ProzperServer.Evento||{};
 Respuesta=ProzperServer.Respuesta=ProzperServer.Respuesta||{};
 Rpc0=ProzperServer.Rpc0=ProzperServer.Rpc0||{};
 Remoting=ProzperServer.Remoting=ProzperServer.Remoting||{};
 CustomXhrProvider=Remoting.CustomXhrProvider=Remoting.CustomXhrProvider||{};
 SC$1=Global.StartupCode$ProzperServer$ProzperServer=Global.StartupCode$ProzperServer$ProzperServer||{};
 ProzperServer_GeneratedPrintf=Global.ProzperServer_GeneratedPrintf=Global.ProzperServer_GeneratedPrintf||{};
 Seq$1=WebSharper&&WebSharper.Seq;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Arrays=WebSharper&&WebSharper.Arrays;
 List=WebSharper&&WebSharper.List;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 Result$1=WebSharper&&WebSharper.Result;
 Operators$1=WebSharper&&WebSharper.Operators;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Utils=WebSharper&&WebSharper.Utils;
 console=Global.console;
 Strings=WebSharper&&WebSharper.Strings;
 Slice=WebSharper&&WebSharper.Slice;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpMap=Collections&&Collections.FSharpMap;
 FSharpSet=Collections&&Collections.FSharpSet;
 BalancedTree=Collections&&Collections.BalancedTree;
 Char=WebSharper&&WebSharper.Char;
 Date$1=Global.Date;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Dictionary=Collections&&Collections.Dictionary;
 Remoting$1=WebSharper&&WebSharper.Remoting;
 Numeric=WebSharper&&WebSharper.Numeric;
 System=Global.System;
 Guid=System&&System.Guid;
 Lazy=WebSharper&&WebSharper.Lazy;
 Dict.add=function(key,v,dict)
 {
  if(dict.ContainsKey(key))
   dict.set_Item(key,v);
  else
   dict.Add(key,v);
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
  },vSR.$0):(Seq.rtn())(Library.Error(vSR.$0));
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
  return Result$1.Bind(f,v);
 };
 Operators.op_BarGreaterGreater=function(v,f)
 {
  return Result$1.Map(f,v);
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
  return Result$1.Bind(function(v)
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
   return Library.Error(f(x));
  }():o.$0;
 };
 Result.get=function(r)
 {
  return Result.defaultWith(function(x)
  {
   return Operators$1.FailWith(Global.String(x));
  },r);
 };
 Result.iter=function(fE,f,r)
 {
  Result.defaultWith(fE,Result$1.Map(f,r));
 };
 Result.failIfFalse=function(m,v)
 {
  return!v?Library.Error(m):{
   $:0,
   $0:null
  };
 };
 Result.failIfTrue=function(m,v)
 {
  return v?Library.Error(m):{
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
 Result.errorf=function(fmt)
 {
  return fmt(Library.Error);
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
 Done.New=Runtime.Ctor(function(v)
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
   return Eff.whileLoop(guard,fEf);
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
  Run:function(fEf)
  {
   return Eff.bind(fEf,Eff.rtn());
  },
  Delay:Global.id,
  Combine:function(vEf,fEf)
  {
   return Eff.bind(fEf,vEf);
  },
  Bind:function(vEf,fEf)
  {
   return Eff.bind(fEf,vEf);
  },
  Zero:function()
  {
   return Eff.rtn();
  },
  Return:function(v)
  {
   return Eff.rtn(v);
  },
  ReturnFrom:Global.id
 },Obj,EffBuilder);
 EffBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },EffBuilder);
 EA.tee=function(f,v)
 {
  return Eff.map(function()
  {
   return v;
  },f(v));
 };
 Ask=Reader.Ask=Runtime.Class({
  get_K:function()
  {
   return this.k;
  },
  FsRoot_Library_Monads_Eff_Effect$Extend:function(extension)
  {
   var f;
   return new Ask.New((f=this.k,function(x)
   {
    return extension(f(x));
   }));
  }
 },Obj,Ask);
 Ask.New=Runtime.Ctor(function(k)
 {
  Obj.New.call(this);
  this.k=k;
 },Ask);
 Reader.readerFun=function(f)
 {
  return Eff.map(f,Reader.ask());
 };
 Reader.readerHandler5=function(env,eff)
 {
  return Reader.readerHandler0(env,eff);
 };
 Reader.readerHandler4=function(env,eff)
 {
  return Reader.readerHandler0(env,eff);
 };
 Reader.readerHandler3=function(env,eff)
 {
  return Reader.readerHandler0(env,eff);
 };
 Reader.readerHandler2=function(env,eff)
 {
  return Reader.readerHandler0(env,eff);
 };
 Reader.readerHandler=function(env,eff)
 {
  return Reader.readerHandler0(env,eff);
 };
 Reader.readerHandler0=function(env,eff)
 {
  function loop(exitK,a)
  {
   return a instanceof Done?exitK(a.get_Value()):a instanceof Ask?loop(exitK,(a.get_K())(env)):a.FsRoot_Library_Monads_Eff_Effect$Extend(function($1)
   {
    return loop(exitK,$1);
   });
  }
  return new Eff$1({
   $:0,
   $0:function(exitK)
   {
    return loop(exitK,(eff.get_Create())(Eff["done'"]));
   }
  });
 };
 Reader.ask5=function()
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new Ask.New(k);
   }
  });
 };
 Reader.ask4=function()
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new Ask.New(k);
   }
  });
 };
 Reader.ask3=function()
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new Ask.New(k);
   }
  });
 };
 Reader.ask2=function()
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new Ask.New(k);
   }
  });
 };
 Reader.ask=function()
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new Ask.New(k);
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
  FsRoot_Library_Monads_Eff_Effect$Extend:function(extension)
  {
   var f;
   return new LogEntry.New(this.v,(f=this.k,function(x)
   {
    return extension(f(x));
   }));
  }
 },Obj,LogEntry);
 LogEntry.New=Runtime.Ctor(function(v,k)
 {
  Obj.New.call(this);
  this.v=v;
  this.k=k;
 },LogEntry);
 Log.loggerLogHandler3=function(logger,eff)
 {
  return Log.loggerLogHandler0(logger,eff);
 };
 Log.loggerLogHandler2=function(logger,eff)
 {
  return Log.loggerLogHandler0(logger,eff);
 };
 Log.loggerLogHandler=function(logger,eff)
 {
  return Log.loggerLogHandler0(logger,eff);
 };
 Log.consoleLogHandler3=function(eff)
 {
  return Log.consoleLogHandler0(eff);
 };
 Log.consoleLogHandler2=function(eff)
 {
  return Log.consoleLogHandler0(eff);
 };
 Log.consoleLogHandler=function(eff)
 {
  return Log.consoleLogHandler0(eff);
 };
 Log.pureLogHandler3=function(eff)
 {
  return Log.pureLogHandler0(eff);
 };
 Log.pureLogHandler2=function(eff)
 {
  return Log.pureLogHandler0(eff);
 };
 Log.pureLogHandler=function(eff)
 {
  return Log.pureLogHandler0(eff);
 };
 Log.loggerLogHandler0=function(logger,eff)
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
    return loop(exitK,(eff.get_Create())(Eff["done'"]));
   }
  });
 };
 Log.consoleLogHandler0=function(eff)
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
    return loop(exitK,(eff.get_Create())(Eff["done'"]));
   }
  });
 };
 Log.pureLogHandler0=function(eff)
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
    return loop(exitK,List.T.Empty,(eff.get_Create())(Eff["done'"]));
   }
  });
 };
 Log.log3=function(s)
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new LogEntry.New(s,k);
   }
  });
 };
 Log.log2=function(s)
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new LogEntry.New(s,k);
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
  FsRoot_Library_Monads_Eff_Rsl_IRsl_1$get_Value:function()
  {
   return this.v;
  },
  FsRoot_Library_Monads_Eff_Effect$Extend:function(extension)
  {
   var f;
   return new Fail.New(this.v,(f=this.k,function(x)
   {
    return extension(f(x));
   }));
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
 Rsl.getResult=function(v)
 {
  return Rsl.rslHandler(v);
 };
 Rsl.rslHandler=function(eff)
 {
  function loop(exitK,a)
  {
   return a instanceof Done?exitK({
    $:0,
    $0:a.get_Value()
   }):typeof a=="object"&&"FsRoot_Library_Monads_Eff_Rsl_IRsl_1$get_Value"in a?exitK(Library.Error(a.FsRoot_Library_Monads_Eff_Rsl_IRsl_1$get_Value())):a.FsRoot_Library_Monads_Eff_Effect$Extend(function($1)
   {
    return loop(exitK,$1);
   });
  }
  return new Eff$1({
   $:0,
   $0:function(exitK)
   {
    return loop(exitK,(eff.get_Create())(Eff["done'"]));
   }
  });
 };
 Rsl.ofResult=function(res)
 {
  var b;
  b=Eff.eff();
  return b.Run(b.Delay(function()
  {
   return res.$==1?b.Bind(Rsl.fail(res.$0),function()
   {
    return b.Return(Operators$1.FailWith("this code should be unreachable"));
   }):b.Return(res.$0);
  }));
 };
 Rsl.failf=function(fmt)
 {
  return fmt(Rsl.fail);
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
   return Eff["done'"](Concurrency.Bind(this.v,function(v)
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
   return new Asyn.New(this.v,(f=this.k,function(x)
   {
    return extension(f(x));
   }));
  }
 },Obj,Asyn);
 Asyn.New=Runtime.Ctor(function(v,k)
 {
  Obj.New.call(this);
  this.v=v;
  this.k=k;
 },Asyn);
 Asy.asyncHandler=function(eff)
 {
  return Asy.asyncHandler0(Eff.op_GreaterGreaterEquals(Asy.ofAsync(Concurrency.Return(null)),function()
  {
   return eff;
  }));
 };
 Asy.asyncHandler0=function(eff)
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
    return loop(exitK,(eff.get_Create())(Eff["done'"]));
   }
  });
 };
 Asy.syncHandler=function(eff)
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
    return loop(exitK,(eff.get_Create())(Eff["done'"]));
   }
  });
 };
 Asy.ofAsync=function(v)
 {
  return new Eff$1({
   $:0,
   $0:function(k)
   {
    return new Asyn.New(v,k);
   }
  });
 };
 Eff.eff=function()
 {
  SC$1.$cctor();
  return SC$1.eff;
 };
 Eff.whileLoop=function(cond,fEf)
 {
  return cond()?Eff.bind(function()
  {
   return Eff.whileLoop(cond,fEf);
  },fEf()):Eff.rtn();
 };
 Eff.bindO=function(f,ef)
 {
  function f$1(o)
  {
   return o==null?null:{
    $:1,
    $0:f(o.$0)
   };
  }
  return Eff.bind(function(x)
  {
   return Eff.insertO(f$1(x));
  },ef);
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
  },vvR.$0):Eff.rtn(Library.Error(vvR.$0));
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
  return o==null?Eff.rtn(null):o.$0;
 };
 Eff.sequenceSeq=function(sq)
 {
  return Eff.traverseSeq(Global.id,sq);
 };
 Eff.traverseSeq=function(f,sq)
 {
  return Eff.op_BarGreaterGreater(Arrays.foldBack(function(head,tail)
  {
   return Eff.op_GreaterGreaterEquals(f(head),function(h)
   {
    return Eff.op_GreaterGreaterEquals(tail,function(t)
    {
     return Eff.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),Eff.rtn(List.T.Empty)),Global.id);
 };
 Eff.join=function(m)
 {
  return Eff.bind(Global.id,m);
 };
 Eff.op_GreaterGreaterEqualsBang=function(v,f)
 {
  return Eff.bind(function(w)
  {
   return Eff.op_BarGreaterGreater(f(w),function()
   {
    return w;
   });
  },v);
 };
 Eff.op_BarGreaterGreaterBang=function(v,f)
 {
  return Eff.map(function(v$1)
  {
   f(v$1);
   return v$1;
  },v);
 };
 Eff.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Eff.op_GreaterGreaterEquals(f(v),g);
 };
 Eff.op_GreaterMinusGreater=function(f,g,v)
 {
  return Eff.op_BarGreaterGreater(f(v),g);
 };
 Eff.op_GreaterGreaterEquals=function(v,f)
 {
  return Eff.bind(f,v);
 };
 Eff.op_BarGreaterGreater=function(v,f)
 {
  return Eff.map(f,v);
 };
 Eff.op_LessMultiplyGreater=function(f,v)
 {
  return Eff.apply(f,v);
 };
 Eff.runResult=function(eff)
 {
  try
  {
   return{
    $:0,
    $0:Eff.run(eff)
   };
  }
  catch(e)
  {
   return Library.Error(Global.String(e));
  }
 };
 Eff.run=function(eff)
 {
  var m;
  m=(eff.get_Create())(Eff["done'"]);
  return m instanceof Done?m.get_Value():(function($1)
  {
   return function($2)
   {
    return $1("Unhandled effect "+Utils.prettyPrint($2));
   };
  }(Operators$1.FailWith))(m);
 };
 Eff["return'"]=function(v)
 {
  return new Eff$1({
   $:0,
   $0:function()
   {
    return Eff["done'"](v);
   }
  });
 };
 Eff["done'"]=function(v)
 {
  return new Done.New(v);
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
   $0:function(kb)
   {
    return effA.$0(function(a)
    {
     return f(a).$0(kb);
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
    },Operators$1.range(0,((v.length-s)/3>>0)-1));
   }));
  })));
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
  return Seq$1.map((x$1=Strings.replicate(n," "),function(y)
  {
   return x$1+y;
  }),x);
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
 ParseO.Int64=function()
 {
  SC$1.$cctor();
  return SC$1["|Int64|_|"];
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
 ParseO.parseInt64O=function()
 {
  SC$1.$cctor();
  return SC$1.parseInt64O;
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
 ParseO.parseDateO2=function()
 {
  SC$1.$cctor();
  return SC$1.parseDateO2;
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
 JsonIntermediate.New=function(tryFloat,tryInt,tryString,tryBool,tryArray,tryField,isObject,isNull)
 {
  return{
   tryFloat:tryFloat,
   tryInt:tryInt,
   tryString:tryString,
   tryBool:tryBool,
   tryArray:tryArray,
   tryField:tryField,
   isObject:isObject,
   isNull:isNull
  };
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
 Serializer.serTrp=function(sF,sS,sT)
 {
  return[function(t)
  {
   return((((Runtime.Curried(function($1,$2,$3,$4)
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
 Serializer.serDup=function(serFst,serSnd)
 {
  return[function(t)
  {
   return(((Runtime.Curried3(function($1,$2,$3)
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
 Serializer.serField=function(name,get,set,s,s$1)
 {
  return[name,function(x)
  {
   return s(get(x));
  },function(rc)
  {
   return function(j)
   {
    var o;
    o=s$1(j);
    return o==null?null:{
     $:1,
     $0:set(o.$0,rc)
    };
   };
  }];
 };
 Serializer.serDate=function()
 {
  SC$1.$cctor();
  return SC$1.serDate;
 };
 Serializer.serBool=function()
 {
  SC$1.$cctor();
  return SC$1.serBool;
 };
 Serializer.serInt64=function()
 {
  SC$1.$cctor();
  return SC$1.serInt64;
 };
 Serializer.serInt=function()
 {
  SC$1.$cctor();
  return SC$1.serInt;
 };
 Serializer.serFloat=function()
 {
  SC$1.$cctor();
  return SC$1.serFloat;
 };
 Serializer.serString=function()
 {
  SC$1.$cctor();
  return SC$1.serString;
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
    },Operators$1.range(0,v.length-1)):[],Seq$1.delay(function()
    {
     return["\""];
    }));
   }));
  })).join("");
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
 Serializer.Field=function(field,j)
 {
  return j.tryField(field);
 };
 Serializer.serialize=function(s,s$1,v)
 {
  return[s,s$1][0](v);
 };
 Library.mapSnd=function(f,a,b)
 {
  return[a,f(b)];
 };
 Library.mapFst=function(f,a,b)
 {
  return[f(a),b];
 };
 Library["String.get_toUnderscore"]=function(_this,u)
 {
  return Arrays.ofSeq(Seq$1.collect(Global.id,Seq$1.mapi(function(i,c)
  {
   return i>0&&Char.IsUpper(c)?List.ofArray(["_",c]):List.ofArray([c]);
  },_this))).join("");
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
 Promise.ofAsyncResult=function(v)
 {
  return new Global.Promise(function(resolve,reject)
  {
   Concurrency.StartWithContinuations(v,function(a)
   {
    if(a.$==1)
     reject((function($1)
     {
      return function($2)
      {
       return $1(Utils.prettyPrint($2));
      };
     }(Global.id))(a.$0));
    else
     resolve(a.$0);
   },function(a)
   {
    reject(a);
   },function(a)
   {
    reject(a);
   },null);
  });
 };
 Date.toYYYYMMDDHHMM=function(sep,date)
 {
  return(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1(Utils.toSafe($2)+" "+Utils.toSafe($3));
  }))(Global.id))(Date.toYYYYMMDD(sep,date)))(Date.toHHMM(date));
 };
 Date.toHHMM=function(date)
 {
  return(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1(Utils.padNumLeft(Global.String($2),2)+":"+Utils.padNumLeft(Global.String($3),2));
  }))(Global.id))((new Global.Date(date)).getHours()))((new Global.Date(date)).getMinutes());
 };
 Date.toYYYYMMDD=function(sep,date)
 {
  return((((((Runtime.Curried(function($1,$2,$3,$4,$5,$6)
  {
   return $1(Global.String($2)+Utils.toSafe($3)+Utils.padNumLeft(Global.String($4),2)+Utils.toSafe($5)+Utils.padNumLeft(Global.String($6),2));
  },6))(Global.id))((new Global.Date(date)).getFullYear()))(sep))((new Global.Date(date)).getMonth()+1))(sep))((new Global.Date(date)).getDate());
 };
 IdAliado=Basico.IdAliado=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,IdAliado);
 IdAuthorize=Basico.IdAuthorize=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,IdAuthorize);
 IdAddress=Basico.IdAddress=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,IdAddress);
 IdPayment=Basico.IdPayment=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,IdPayment);
 Basico.carpetaRaiz=function()
 {
  return Eff.op_BarGreaterGreater(Reader.ask(),function(h)
  {
   return h.FsRoot_ProzperServer_Basico_VariableAmbienteI$CarpetaRaiz();
  });
 };
 Basico.variableAmbienteE=function(v)
 {
  return Eff.op_BarGreaterGreater(Reader.ask(),function(h)
  {
   return h.FsRoot_ProzperServer_Basico_VariableAmbienteI$getVar(v);
  });
 };
 LatestType.TypeV0={
  $:0
 };
 IdAliado$1=TypesV0.IdAliado=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,IdAliado$1);
 IdAuthorize$1=TypesV0.IdAuthorize=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,IdAuthorize$1);
 IdAddress$1=TypesV0.IdAddress=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,IdAddress$1);
 IdPayment$1=TypesV0.IdPayment=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,IdPayment$1);
 IdSubscription=TypesV0.IdSubscription=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,IdSubscription);
 StatusAliado=TypesV0.StatusAliado=Runtime.Class({
  toString:function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p($2));
    };
   }(Global.id))(this);
  }
 },null,StatusAliado);
 StatusAliado.Cancelado=new StatusAliado({
  $:3
 });
 StatusAliado.Inactivo=new StatusAliado({
  $:2
 });
 StatusAliado.Activo=new StatusAliado({
  $:1
 });
 StatusAliado.CuentaCreada=new StatusAliado({
  $:0
 });
 StatusAliado.tryParse=function(s)
 {
  var m;
  m=Strings.Trim(s).toUpperCase();
  return m==="CUENTACREADA"?StatusAliado.CuentaCreada:m==="ACTIVO"?StatusAliado.Activo:m==="CANCELADO"?StatusAliado.Cancelado:StatusAliado.Inactivo;
 };
 TipoAliado=TypesV0.TipoAliado=Runtime.Class({
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
     return $1(ProzperServer_GeneratedPrintf.p$2($2));
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
     return $1(ProzperServer_GeneratedPrintf.p$3($2));
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
 TipoArchivo=TypesV0.TipoArchivo=Runtime.Class({
  toString:function()
  {
   return this.$==7?this.$0:(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$4($2));
    };
   }(Global.id))(this);
  }
 },null,TipoArchivo);
 TipoArchivo.FormaW8BEN=new TipoArchivo({
  $:6
 });
 TipoArchivo.FormaW9=new TipoArchivo({
  $:5
 });
 TipoArchivo.LicenciaConducir=new TipoArchivo({
  $:4
 });
 TipoArchivo.Cedula=new TipoArchivo({
  $:3
 });
 TipoArchivo.Pasaporte=new TipoArchivo({
  $:2
 });
 TipoArchivo.Autorizacion=new TipoArchivo({
  $:1
 });
 TipoArchivo.Contrato=new TipoArchivo({
  $:0
 });
 TipoArchivo.Parse=function(s)
 {
  var a;
  a=String.StartsWith("Otro ",s);
  return a!=null&&a.$==1?new TipoArchivo({
   $:7,
   $0:a.$0
  }):s==="Contrato"?TipoArchivo.Contrato:s==="FormaW9"?TipoArchivo.FormaW9:s==="FormaW8BEN"?TipoArchivo.FormaW8BEN:s==="Autorizacion"?TipoArchivo.Autorizacion:s==="Pasaporte"?TipoArchivo.Pasaporte:s==="Cedula"?TipoArchivo.Cedula:s==="LicenciaConducir"?TipoArchivo.LicenciaConducir:new TipoArchivo({
   $:7,
   $0:Strings.Trim(s)
  });
 };
 StatusArchivo=TypesV0.StatusArchivo=Runtime.Class({
  toString:function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$5($2));
    };
   }(Global.id))(this);
  }
 },null,StatusArchivo);
 StatusArchivo.Cambiado=new StatusArchivo({
  $:5
 });
 StatusArchivo.Cancelado=new StatusArchivo({
  $:4
 });
 StatusArchivo.Expirado=new StatusArchivo({
  $:3
 });
 StatusArchivo.Rechazado=new StatusArchivo({
  $:2
 });
 StatusArchivo.Verificado=new StatusArchivo({
  $:1
 });
 StatusArchivo.Subido=new StatusArchivo({
  $:0
 });
 StatusArchivo.Parse=function(s)
 {
  return s==="Cambiado"?StatusArchivo.Cambiado:s==="Expirado"?StatusArchivo.Expirado:s==="Cancelado"?StatusArchivo.Cancelado:s==="Verificado"?StatusArchivo.Verificado:s==="Rechazado"?StatusArchivo.Rechazado:StatusArchivo.Subido;
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
 Expiracion=TypesV0.Expiracion=Runtime.Class({
  get_Id:function()
  {
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Utils.padNumLeft(Global.String($2),4)+"-"+Utils.padNumLeft(Global.String($3),2));
   }))(Global.id))(this.anio))(Operators$1.toInt(Global.Number(this.mes)));
  }
 },null,Expiracion);
 Expiracion.TryParse=function(txt)
 {
  var a,$1,py,$2,py$1;
  function create(century,anio,mes)
  {
   return{
    $:1,
    $0:Expiracion.New(century+Operators$1.toInt(Global.Number(anio)),Operators$1.toInt(Global.Number(mes)))
   };
  }
  return txt.length===4||txt.length===5?create(2000,Library["String.Right"](txt,2),Library["String.Left"](txt,2)):txt.length===7?(a=Strings.SplitChars(txt,["-","/"],0),!Unchecked.Equals(a,null)&&a.length===2&&(py=Arrays.get(a,0),(Arrays.get(a,1),py.length===4))?create(0,Arrays.get(a,0),Arrays.get(a,1)):!Unchecked.Equals(a,null)&&a.length===2&&(py$1=Arrays.get(a,1),(Arrays.get(a,0),py$1.length===4))?create(0,Arrays.get(a,1),Arrays.get(a,0)):null):null;
 };
 Expiracion.New=function(anio,mes)
 {
  return new Expiracion({
   anio:anio,
   mes:mes
  });
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
     return $1(ProzperServer_GeneratedPrintf.p$6($2));
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
     return $1(ProzperServer_GeneratedPrintf.p$7($2));
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
     return $1(ProzperServer_GeneratedPrintf.p$8($2));
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
 ConceptoPago.tryParse=function(s)
 {
  var m;
  m=Strings.Trim(s).toUpperCase();
  return m===""?null:m==="PAGOAFILIACION"?{
   $:1,
   $0:ConceptoPago.PagoAfiliacion
  }:m==="PAGOCOMISION"?{
   $:1,
   $0:ConceptoPago.PagoComision
  }:{
   $:1,
   $0:new ConceptoPago({
    $:2,
    $0:Strings.Trim(s)
   })
  };
 };
 Transaccion.New=function(fechaPago,ano,periodo,monto,idAliado,concepto,transaccion,statusTran)
 {
  return{
   fechaPago:fechaPago,
   ano:ano,
   periodo:periodo,
   monto:monto,
   idAliado:idAliado,
   concepto:concepto,
   transaccion:transaccion,
   statusTran:statusTran
  };
 };
 TipoDireccion=TypesV0.TipoDireccion=Runtime.Class({
  toString:function()
  {
   return this.$==3?this.$0:(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$9($2));
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
 TipoTelefono=TypesV0.TipoTelefono=Runtime.Class({
  toString:function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$10($2));
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
 CorreoElectronico=TypesV0.CorreoElectronico=Runtime.Class({
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
 CuentaPago=TypesV0.CuentaPago=Runtime.Class({
  get_AutorizacionPre:function()
  {
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Autorizacion "+Utils.toSafe($2)+" "+Utils.toSafe($3));
   }))(Global.id))(this.get_TipoCorto()))(this.get_MaskedCuenta());
  },
  get_TipoLargo:function()
  {
   return this.$==0?"Cuenta Bancaria":this.$==2?"Transferencia Electronica":"Tarjeta de Credito";
  },
  get_TipoCorto:function()
  {
   return this.$==0?"CB":this.$==2?"TE":"TC";
  },
  get_MaskedCuenta:function()
  {
   return this.$==0?this.$0.numero.get_Id():this.$==2?this.$0:this.$0.numero.get_Id();
  }
 },null,CuentaPago);
 StatusFormaPago.NuevaFormaPago={
  $:0
 };
 Subscripcion=TypesV0.Subscripcion=Runtime.Class({
  get_Short:function()
  {
   return((((((Runtime.Curried(function($1,$2,$3,$4,$5,$6)
   {
    return $1(Utils.toSafe($2)+" "+Utils.toSafe($3)+" $"+Global.String($4)+".00 "+Utils.toSafe($5)+" "+Global.String($6));
   },6))(Global.id))(this.idSubscripcion.get_Id()))(Date.toYYYYMMDD("-",this.inicio)))(this.monto))(this.descripcion))(this.status);
  }
 },null,Subscripcion);
 Subscripcion.New=function(idSubscripcion,inicio,monto,descripcion,status)
 {
  return new Subscripcion({
   idSubscripcion:idSubscripcion,
   inicio:inicio,
   monto:monto,
   descripcion:descripcion,
   status:status
  });
 };
 FormaPago.New=function(nombre,authorizeIdR,cuentaPago,subscripcion)
 {
  return{
   nombre:nombre,
   authorizeIdR:authorizeIdR,
   cuentaPago:cuentaPago,
   subscripcion:subscripcion
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
 DiaPago.Dia25={
  $:5
 };
 DiaPago.Dia20={
  $:4
 };
 DiaPago.Dia15={
  $:3
 };
 DiaPago.Dia10={
  $:2
 };
 DiaPago.Dia05={
  $:1
 };
 DiaPago.Dia01={
  $:0
 };
 IdForAuthorize=TypesV0.IdForAuthorize=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,IdForAuthorize);
 Aliado.New=function(id,idPadreO,idForAuthorize,influyente,datosPersonales,contactos,identificacion,isInternal,status,diaPago,tipo,fechaRegistro,fechaStatus,nReferidos,nRefActivos,nDescendientes,nDescActivos,comision,nivel,documentos,docPendientes)
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
 Aliado$1.correo=function(al)
 {
  var o;
  o=Seq$1.tryHead(Seq$1.choose(function(a)
  {
   return a.$==1?{
    $:1,
    $0:a.$0.email
   }:null;
  },al.contactos));
  return o==null?"":o.$0;
 };
 Aliado$1.nombre2=function(dp)
 {
  var o,o$1;
  return(o=(o$1=dp.titulo,o$1==null?null:{
   $:1,
   $0:" "+o$1.$0
  }),o==null?"":o.$0)+Strings.Trim(dp.nombre1+" "+dp.nombre2)+" "+Strings.Trim(dp.apellido1+" "+dp.apellido2);
 };
 Aliado$1.nombre=function(dp)
 {
  var o,o$1;
  return(o=(o$1=dp.titulo,o$1==null?null:{
   $:1,
   $0:" "+o$1.$0
  }),o==null?"":o.$0)+(dp.apellido1===""?"":Strings.Trim(dp.apellido1+" "+dp.apellido2)+", ")+dp.nombre1+" "+dp.nombre2;
 };
 Aliado$1.empty=function()
 {
  SC$1.$cctor();
  return SC$1.empty;
 };
 Aliado$1.actualizarAliados=function(transAll,modelo)
 {
  var aliadoActualizadoM,p,cache,getOrAdd,buscar,pre,trans;
  function statusActual(al)
  {
   var m,$1;
   m=al.status;
   return m.$==1||m.$==2?Seq$1.exists(function(tr)
   {
    return Unchecked.Equals(tr.idAliado,al.id)&&tr.monto>=pre.montoAfiliacion;
   },trans)?StatusAliado.Activo:StatusAliado.Inactivo:m;
  }
  function aliadoActualizado(alid)
  {
   var al,hijos,status,nReferidos,nRefActivos,nDescendientes,nDescActivos,nivel,al0,p$1,al1;
   al=buscar.aliado(alid);
   hijos=Seq$1.cache(Seq$1.map(aliadoActualizadoM,buscar.hijosDe(al.id)));
   status=statusActual(al);
   nReferidos=Seq$1.length(hijos);
   nRefActivos=Seq$1.length(Seq$1.filter(function(al$1)
   {
    return al$1.status.$===1&&al$1.tipo.$===1;
   },hijos));
   nDescendientes=Seq$1.sumBy(function(al$1)
   {
    return al$1.nDescendientes+al$1.nReferidos;
   },hijos);
   nDescActivos=Seq$1.sumBy(function(al$1)
   {
    return al$1.nDescActivos+al$1.nRefActivos;
   },hijos);
   nivel=1+buscar.nivelDe(al.idPadreO);
   al0=Aliado.New(al.id,al.idPadreO,al.idForAuthorize,al.influyente,al.datosPersonales,al.contactos,al.identificacion,al.isInternal,status,Aliado$1.diaPago(al.fechaRegistro),nRefActivos>=pre.numeroReferidosMaster?TipoAliado.Master:TipoAliado.Regular,al.fechaRegistro,al.fechaStatus,nReferidos,nRefActivos,nDescendientes,nDescActivos,al.comision,nivel,al.documentos,al.docPendientes);
   p$1=Aliado$1.comision(pre,al0);
   al1=Aliado.New(al0.id,al0.idPadreO,al0.idForAuthorize,al0.influyente,al0.datosPersonales,al0.contactos,al0.identificacion,al0.isInternal,al0.status,al0.diaPago,al0.tipo,al0.fechaRegistro,al0.fechaStatus,al0.nReferidos,al0.nRefActivos,al0.nDescendientes,al0.nDescActivos,p$1[0]+p$1[1],al0.nivel,al0.documentos,al0.docPendientes);
   return Aliado.New(al1.id,al1.idPadreO,al1.idForAuthorize,al1.influyente,al1.datosPersonales,al1.contactos,al1.identificacion,al1.isInternal,al1.status.$===2&&al1.comision>=pre.montoAfiliacion?StatusAliado.Activo:al1.status,al1.diaPago,al1.tipo,al1.fechaRegistro,al1.fechaStatus,al1.nReferidos,al1.nRefActivos,al1.nDescendientes,al1.nDescActivos,al1.comision,al1.nivel,al1.documentos,al1.docPendientes);
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
  buscar=Aliado$1.busqueda(modelo.aliados);
  pre=modelo.premisas;
  trans=Arrays.filter(function(tr)
  {
   var c,c$1;
   return tr.fechaPago>(c=(c$1=Date$1.now(),DateUtil.DatePortion(c$1)),DateUtil.AddMonths(c,-1));
  },transAll);
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
 Aliado$1.dia=function(a)
 {
  return a.$==1?5:a.$==2?10:a.$==3?15:a.$==4?20:a.$==5?25:1;
 };
 Aliado$1.diaPago=function(registro)
 {
  var diaMes;
  diaMes=(new Date$1(registro)).getDate();
  return diaMes===1?DiaPago.Dia01:diaMes<=5?DiaPago.Dia05:diaMes<=10?DiaPago.Dia10:diaMes<=15?DiaPago.Dia15:diaMes<=20?DiaPago.Dia20:diaMes<=25?DiaPago.Dia25:DiaPago.Dia01;
 };
 Aliado$1.busqueda=function(aliados)
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
      return $1("buscarAliado failed: "+ProzperServer_GeneratedPrintf.p$11($2));
     };
    }(Operators$1.FailWith))(id);
   }
  },aliadoO,hijos,descendientes);
 };
 Aliado$1.comision=function(pre,al)
 {
  var p;
  p=Aliado$1.premisas(pre,al);
  return[al.nRefActivos*p[0],al.nDescActivos*p[1]];
 };
 Aliado$1.premisas=function(pre,al)
 {
  var p;
  p=al.tipo.$==0?[pre.comisionReferidosMaster,pre.comisionDescendientesMaster]:[pre.comisionReferidosRegular,pre.comisionDescendientesRegular];
  return al.status.$==1?[p[0],p[1]]:[0,0];
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
 Rpc0.serverEndPoint=function()
 {
  SC$1.$cctor();
  return SC$1.serverEndPoint;
 };
 CustomXhrProvider=Remoting.CustomXhrProvider=Runtime.Class({
  Sync:function(url,headers,data)
  {
   return Remoting.originalProvider().Sync(url,headers,data);
  },
  Async:function(url,headers,data,ok,err)
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind((Remoting.getTokenOA())(),function(a)
    {
     a==null?void 0:headers.Authorization=(function($1)
     {
      return function($2)
      {
       return $1("Bearer "+Utils.toSafe($2));
      };
     }(Global.id))(a.$0);
     Remoting.originalProvider().Async(url,headers,data,ok,err);
     return Concurrency.Zero();
    });
   })),null);
  }
 },Obj,CustomXhrProvider);
 CustomXhrProvider.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },CustomXhrProvider);
 Remoting.installBearer=function(getTokenOAF)
 {
  Remoting.set_getTokenOA(getTokenOAF);
  Remoting$1.set_AjaxProvider(new CustomXhrProvider.New());
 };
 Remoting.getTokenOA=function()
 {
  SC$1.$cctor();
  return SC$1.getTokenOA;
 };
 Remoting.set_getTokenOA=function($1)
 {
  SC$1.$cctor();
  SC$1.getTokenOA=$1;
 };
 Remoting.originalProvider=function()
 {
  SC$1.$cctor();
  return SC$1.originalProvider;
 };
 SC$1.$cctor=function()
 {
  var f,g,c,c$1,d;
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
   var a,b;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a=0,(b=Arrays.length(s)-2,Unchecked.Compare(a,b)===1?a:b))
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
  function g$4(v)
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(v);
  }
  SC$1.rtn=function(v)
  {
   return[v];
  };
  SC$1.result=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.eff=new EffBuilder.New();
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
  SC$1.parseDateO2=(g=ParseO.tryParseWith(function(a)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a),m!=null&&m.$==1&&(o=m.$0,true)),o];
  }),function(x)
  {
   return g(f$2(x));
  });
  SC$1.parseDateO=ParseO.tryParseWith(function(a)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a),m!=null&&m.$==1&&(o=m.$0,true)),o];
  });
  SC$1.parseIntO=ParseO.tryParseWith(function(a)
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
  SC$1.parseInt64O=ParseO.tryParseWith(function(a)
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
  SC$1.parseSingleO=ParseO.tryParseWith(function(a)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a),Global.isNaN($1)?false:(o=$1,true)),o];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith(function(a)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a),Global.isNaN($1)?false:(o=$1,true)),o];
  });
  SC$1.parseGuidO=ParseO.tryParseWith(function(a)
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
  SC$1.serFloat=[function(v)
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(v);
  },function(j)
  {
   return j.tryFloat();
  }];
  SC$1.serInt=[function(v)
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(v);
  },function(j)
  {
   var o;
   o=j.tryInt();
   return o==null?null:{
    $:1,
    $0:Operators$1.toInt(o.$0)
   };
  }];
  SC$1.serInt64=[function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),function(j)
  {
   return j.tryInt();
  }];
  SC$1.serBool=[function(v)
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
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
  SC$1.premisasCalculo=PremisasCalculo.New(15,25,25,0,75,31,26,28);
  SC$1.telVacio=Telefono.New(TipoTelefono.Movil,"","","","",false);
  SC$1.dirVacio=Direccion.New(Library.Error(""),TipoDireccion.Habitacion,"","","",new Estado({
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
  SC$1.modeloVacio=Modelo.New(new IdAliado$1({
   $:0,
   $0:""
  }),[],(c=Date$1.now(),(new Date$1(c)).getFullYear()),(c$1=Date$1.now(),(new Date$1(c$1)).getMonth()+1),TypesV0.premisasCalculo(),0);
  SC$1.correoVacio=CorreoElectronico.New("",null,null);
  SC$1.empty=(d=DatosPersonales.New(null,"","","","",Pais.USA,Genero.Masculino,(new Date$1(2000,1-1,1)).getTime()),Aliado.New(new IdAliado$1({
   $:0,
   $0:""
  }),null,null,null,d,[],[],false,StatusAliado.Inactivo,DiaPago.Dia01,TipoAliado.Regular,(new Date$1(2000,1-1,1)).getTime(),(new Date$1(2000,1-1,1)).getTime(),0,0,0,0,0,0,0,0));
  SC$1.serverEndPoint=Lazy.Create(function()
  {
   return self.location.protocol==="http:"?"http://localhost:7071/api/":(function($1)
   {
    return function($2)
    {
     return $1("https://"+Utils.toSafe($2)+"/api/");
    };
   }(Global.id))(self.location.host);
  });
  SC$1.originalProvider=Remoting$1.AjaxProvider();
  SC$1.getTokenOA=function()
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Return(null);
   });
  };
 };
 ProzperServer_GeneratedPrintf.p=function($1)
 {
  return $1.$==3?"Cancelado":$1.$==2?"Inactivo":$1.$==1?"Activo":"CuentaCreada";
 };
 ProzperServer_GeneratedPrintf.p$1=function($1)
 {
  return $1.$==1?"Regular":"Master";
 };
 ProzperServer_GeneratedPrintf.p$2=function($1)
 {
  return $1.$==3?"OtroP "+Utils.prettyPrint($1.$0):$1.$==2?"Argentina":$1.$==1?"Venezuela":"USA";
 };
 ProzperServer_GeneratedPrintf.p$3=function($1)
 {
  return $1.$==2?"OtroS "+Utils.prettyPrint($1.$0):$1.$==1?"Florida":"Texas";
 };
 ProzperServer_GeneratedPrintf.p$4=function($1)
 {
  return $1.$==7?"Otro "+Utils.prettyPrint($1.$0):$1.$==6?"FormaW8BEN":$1.$==5?"FormaW9":$1.$==4?"LicenciaConducir":$1.$==3?"Cedula":$1.$==2?"Pasaporte":$1.$==1?"Autorizacion":"Contrato";
 };
 ProzperServer_GeneratedPrintf.p$5=function($1)
 {
  return $1.$==5?"Cambiado":$1.$==4?"Cancelado":$1.$==3?"Expirado":$1.$==2?"Rechazado":$1.$==1?"Verificado":"Subido";
 };
 ProzperServer_GeneratedPrintf.p$6=function($1)
 {
  return $1.$==3?"Otra "+Utils.prettyPrint($1.$0):$1.$==2?"Amex":$1.$==1?"MasterCard":"Visa";
 };
 ProzperServer_GeneratedPrintf.p$7=function($1)
 {
  return $1.$==2?"Otra "+Utils.prettyPrint($1.$0):$1.$==1?"Corriente":"Ahorro";
 };
 ProzperServer_GeneratedPrintf.p$8=function($1)
 {
  return $1.$==2?"Otro "+Utils.prettyPrint($1.$0):$1.$==1?"PagoComision":"PagoAfiliacion";
 };
 ProzperServer_GeneratedPrintf.p$9=function($1)
 {
  return $1.$==3?"Otro "+Utils.prettyPrint($1.$0):$1.$==2?"ServicioPostal":$1.$==1?"Oficina":"Habitacion";
 };
 ProzperServer_GeneratedPrintf.p$10=function($1)
 {
  return $1.$==3?"Voip":$1.$==2?"Habitacion":$1.$==1?"Oficina":"Movil";
 };
 ProzperServer_GeneratedPrintf.p$11=function($1)
 {
  return"IdAliado "+Utils.prettyPrint($1.$0);
 };
}());

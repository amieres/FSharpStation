(function()
{
 "use strict";
 var Global,FsRoot,Library,Array,SortWith,LibraryJS,Date,ProzperClient,Templating,ModeloUI,EndPoint,Rpc,VariousUI,CorreoElectronico,Telefono,Direccion,CuentaBancaria,TarjetaCredito,DatosPersonales,FormaRegistro,FormaDatos,FormaGenerica,FormaContactos,FormaFormasPago,RenderAliados,RenderAliado,MainProgram,SC$1,testing_Templates,testing_GeneratedPrintf,testing_Router,WebSharper,Arrays,Seq,Slice,Unchecked,IntelliFactory,Runtime,Utils,Monads,AsyncResultM,ResultMessage,UI,Doc,AttrProxy,Var$1,Templating$1,Runtime$1,Server,ProviderBuilder,Handler,TemplateInstance,View,Strings,List,Prozper,TypesV1,CorreoElectronico$1,TypesV0,TipoTelefono,Telefono$1,TipoDireccion,Estado,Pais,ZonaPostal,Direccion$1,TipoCuenta,CuentaBancaria$1,TipoTarjeta,TarjetaCredito$1,Genero,ParseO,DatosPersonales$1,AsyncResultMAutoOpen,JSON,ProzperServer_JsonEncoder,ProzperServer_JsonDecoder,Rpc$1,ResultM,Concurrency,System,Guid,FromView,FormaPago,Collections,FSharpSet,Aliado,ProzperServer_GeneratedPrintf,ClientSideJson,Provider,AppFramework,PlugIn,Lazy,LayoutEngineModule,Client,Templates,console,Modelo,Date$1,Router,Sitelets,RouterOperators;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 Array=Library.Array=Library.Array||{};
 SortWith=Library.SortWith=Library.SortWith||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Date=LibraryJS.Date=LibraryJS.Date||{};
 ProzperClient=FsRoot.ProzperClient=FsRoot.ProzperClient||{};
 Templating=ProzperClient.Templating=ProzperClient.Templating||{};
 ModeloUI=ProzperClient.ModeloUI=ProzperClient.ModeloUI||{};
 EndPoint=ModeloUI.EndPoint=ModeloUI.EndPoint||{};
 Rpc=ModeloUI.Rpc=ModeloUI.Rpc||{};
 VariousUI=ModeloUI.VariousUI=ModeloUI.VariousUI||{};
 CorreoElectronico=ModeloUI.CorreoElectronico=ModeloUI.CorreoElectronico||{};
 Telefono=ModeloUI.Telefono=ModeloUI.Telefono||{};
 Direccion=ModeloUI.Direccion=ModeloUI.Direccion||{};
 CuentaBancaria=ModeloUI.CuentaBancaria=ModeloUI.CuentaBancaria||{};
 TarjetaCredito=ModeloUI.TarjetaCredito=ModeloUI.TarjetaCredito||{};
 DatosPersonales=ModeloUI.DatosPersonales=ModeloUI.DatosPersonales||{};
 FormaRegistro=ModeloUI.FormaRegistro=ModeloUI.FormaRegistro||{};
 FormaDatos=ModeloUI.FormaDatos=ModeloUI.FormaDatos||{};
 FormaGenerica=ModeloUI.FormaGenerica=ModeloUI.FormaGenerica||{};
 FormaContactos=ModeloUI.FormaContactos=ModeloUI.FormaContactos||{};
 FormaFormasPago=ModeloUI.FormaFormasPago=ModeloUI.FormaFormasPago||{};
 RenderAliados=ModeloUI.RenderAliados=ModeloUI.RenderAliados||{};
 RenderAliado=ModeloUI.RenderAliado=ModeloUI.RenderAliado||{};
 MainProgram=ProzperClient.MainProgram=ProzperClient.MainProgram||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 testing_Templates=Global.testing_Templates=Global.testing_Templates||{};
 testing_GeneratedPrintf=Global.testing_GeneratedPrintf=Global.testing_GeneratedPrintf||{};
 testing_Router=Global.testing_Router=Global.testing_Router||{};
 WebSharper=Global.WebSharper;
 Arrays=WebSharper&&WebSharper.Arrays;
 Seq=WebSharper&&WebSharper.Seq;
 Slice=WebSharper&&WebSharper.Slice;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Utils=WebSharper&&WebSharper.Utils;
 Monads=Library&&Library.Monads;
 AsyncResultM=Monads&&Monads.AsyncResultM;
 ResultMessage=Library&&Library.ResultMessage;
 UI=WebSharper&&WebSharper.UI;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 Var$1=UI&&UI.Var$1;
 Templating$1=UI&&UI.Templating;
 Runtime$1=Templating$1&&Templating$1.Runtime;
 Server=Runtime$1&&Runtime$1.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 View=UI&&UI.View;
 Strings=WebSharper&&WebSharper.Strings;
 List=WebSharper&&WebSharper.List;
 Prozper=FsRoot&&FsRoot.Prozper;
 TypesV1=Prozper&&Prozper.TypesV1;
 CorreoElectronico$1=TypesV1&&TypesV1.CorreoElectronico;
 TypesV0=Prozper&&Prozper.TypesV0;
 TipoTelefono=TypesV0&&TypesV0.TipoTelefono;
 Telefono$1=TypesV0&&TypesV0.Telefono;
 TipoDireccion=TypesV0&&TypesV0.TipoDireccion;
 Estado=TypesV0&&TypesV0.Estado;
 Pais=TypesV0&&TypesV0.Pais;
 ZonaPostal=TypesV0&&TypesV0.ZonaPostal;
 Direccion$1=TypesV0&&TypesV0.Direccion;
 TipoCuenta=TypesV0&&TypesV0.TipoCuenta;
 CuentaBancaria$1=TypesV0&&TypesV0.CuentaBancaria;
 TipoTarjeta=TypesV0&&TypesV0.TipoTarjeta;
 TarjetaCredito$1=TypesV0&&TypesV0.TarjetaCredito;
 Genero=TypesV0&&TypesV0.Genero;
 ParseO=Library&&Library.ParseO;
 DatosPersonales$1=TypesV0&&TypesV0.DatosPersonales;
 AsyncResultMAutoOpen=Monads&&Monads.AsyncResultMAutoOpen;
 JSON=Global.JSON;
 ProzperServer_JsonEncoder=Global.ProzperServer_JsonEncoder;
 ProzperServer_JsonDecoder=Global.ProzperServer_JsonDecoder;
 Rpc$1=Prozper&&Prozper.Rpc;
 ResultM=Monads&&Monads.ResultM;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 System=Global.System;
 Guid=System&&System.Guid;
 FromView=UI&&UI.FromView;
 FormaPago=TypesV0&&TypesV0.FormaPago;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpSet=Collections&&Collections.FSharpSet;
 Aliado=Prozper&&Prozper.Aliado;
 ProzperServer_GeneratedPrintf=Global.ProzperServer_GeneratedPrintf;
 ClientSideJson=WebSharper&&WebSharper.ClientSideJson;
 Provider=ClientSideJson&&ClientSideJson.Provider;
 AppFramework=LibraryJS&&LibraryJS.AppFramework;
 PlugIn=AppFramework&&AppFramework.PlugIn;
 Lazy=WebSharper&&WebSharper.Lazy;
 LayoutEngineModule=LibraryJS&&LibraryJS.LayoutEngineModule;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 console=Global.console;
 Modelo=TypesV1&&TypesV1.Modelo;
 Date$1=Global.Date;
 Router=UI&&UI.Router;
 Sitelets=WebSharper&&WebSharper.Sitelets;
 RouterOperators=Sitelets&&Sitelets.RouterOperators;
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
 EndPoint.DefaultEP={
  $:0
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
 VariousUI.removeButton=function(f,doc)
 {
  return Doc.Element("form",[],[doc,Doc.Button("-",[AttrProxy.Create("title","borrar")],f)]);
 };
 VariousUI.crearOptions=function(ns)
 {
  return Doc.Concat(Seq.map(VariousUI.crearOption,ns));
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
 CorreoElectronico.formaDoc=function(corV)
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
    $0:TypesV1.correoVacio()
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
   return Runtime.Curried(function($3,$4,$5,$6)
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
   return Runtime.Curried(function($3,$4,$5,$6,$7,$8,$9)
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
  return CuentaBancaria.formaDoc(Var$1.Lens(ctaOV,(v=[TypesV0.ctaVacio(),""],function(o)
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
    return!Seq.isEmpty($1)?null:VariousUI.alertIfNone("TipoCuenta",TipoCuenta.tryParse(Strings.Trim($2)),function(tipoCta)
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
  return TarjetaCredito.formaDoc(Var$1.Lens(tarOV,(v=[TypesV0.tarVacio(),""],function(o)
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
     return Seq.map(function(t)
     {
      return t[1];
     },Seq.filter(function(t)
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
    return!Seq.isEmpty($1)?null:VariousUI.alertIfNone("Tipo Tarjeta",TipoTarjeta.tryParse(Strings.Trim($2)),function(tipoTar)
    {
     return{
      $:1,
      $0:TarjetaCredito$1.New(Strings.Trim($3),tipoTar,new TypesV0.NumeroTarjeta({
       $:0,
       $0:Strings.Trim($4)
      }),new TypesV0.Expiracion({
       $:0,
       $0:Strings.Trim($5)
      }))
     };
    });
   });
  },requeridosW,forma.Hole("tipotarjeta").get_View()),forma.Hole("titular").get_View()),forma.Hole("numero").get_View()),forma.Hole("expiracion").get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 DatosPersonales.formaDoc=function(datosV)
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
       return $1(testing_GeneratedPrintf.p($2));
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
   return Runtime.Curried(function($3,$4,$5,$6,$7)
   {
    return!Seq.isEmpty($1)?null:VariousUI.alertIfNone("Genero",Genero.tryParse($2),function(genero)
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
 FormaRegistro.formaDoc$587$41=function(mostrar,mensajes,datosOV,correoOV,telefonoOV,direccionOV)
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
    var x,c,fname,f,g$1,f$1;
    function serializeR(p)
    {
     return JSON.stringify((ProzperServer_JsonEncoder.j$43())(p));
    }
    function deserializeP(s)
    {
     return(ProzperServer_JsonDecoder.j$4())(JSON.parse(s));
    }
    function deserializeR(s)
    {
     return(ProzperServer_JsonDecoder.j$1())(JSON.parse(s));
    }
    function f$2(p)
    {
     return JSON.stringify((ProzperServer_JsonEncoder.j$1())(p));
    }
    function g$2(p)
    {
     return Rpc$1.invoke(fname,p);
    }
    function f$3(r)
    {
     return ResultM.bind(deserializeR,r);
    }
    function g$3(v)
    {
     return Concurrency.Return(v);
    }
    return b.Bind$4((x={
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
    },(fname="ejecutarDataEventoNuevo",[(f=function(x$1)
    {
     return g$2(f$2(x$1));
    },(g$1=(f$1=function(x$1)
    {
     return g$3(f$3(x$1));
    },function(v)
    {
     return Concurrency.Bind(v,f$1);
    }),function(x$1)
    {
     return g$1(f(x$1));
    })),function(f$4)
    {
     var f$5,g$4,f$6;
     function g$5(v)
     {
      return Concurrency.Return(v);
     }
     Rpc$1.registroRpcs().Add(fname,(f$5=function(x$1)
     {
      return f$4(deserializeP(x$1));
     },(g$4=(f$6=function(x$1)
     {
      return g$5(serializeR(x$1));
     },function(v)
     {
      return Concurrency.Bind(v,f$6);
     }),function(x$1)
     {
      return g$4(f$5(x$1));
     })));
    }])[0](x)),function(a)
    {
     ModeloUI.refrescarData();
     Global.alert((function($6)
     {
      return function($7)
      {
       return $6(testing_GeneratedPrintf.p$1($7));
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
    var x,c,fname,f,g$1,f$1;
    function serializeR(p$5)
    {
     return JSON.stringify((ProzperServer_JsonEncoder.j$43())(p$5));
    }
    function deserializeP(s)
    {
     return(ProzperServer_JsonDecoder.j$4())(JSON.parse(s));
    }
    function deserializeR(s)
    {
     return(ProzperServer_JsonDecoder.j$1())(JSON.parse(s));
    }
    function f$2(p$5)
    {
     return JSON.stringify((ProzperServer_JsonEncoder.j$1())(p$5));
    }
    function g$2(p$5)
    {
     return Rpc$1.invoke(fname,p$5);
    }
    function f$3(r)
    {
     return ResultM.bind(deserializeR,r);
    }
    function g$3(v)
    {
     return Concurrency.Return(v);
    }
    return b$1.Bind$4((x={
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
    },(fname="ejecutarDataEventoNuevo",[(f=function(x$1)
    {
     return g$2(f$2(x$1));
    },(g$1=(f$1=function(x$1)
    {
     return g$3(f$3(x$1));
    },function(v)
    {
     return Concurrency.Bind(v,f$1);
    }),function(x$1)
    {
     return g$1(f(x$1));
    })),function(f$4)
    {
     var f$5,g$4,f$6;
     function g$5(v)
     {
      return Concurrency.Return(v);
     }
     Rpc$1.registroRpcs().Add(fname,(f$5=function(x$1)
     {
      return f$4(deserializeP(x$1));
     },(g$4=(f$6=function(x$1)
     {
      return g$5(serializeR(x$1));
     },function(v)
     {
      return Concurrency.Bind(v,f$6);
     }),function(x$1)
     {
      return g$4(f$5(x$1));
     })));
    }])[0](x)),function(a)
    {
     ModeloUI.refrescarData();
     Global.alert((function($6)
     {
      return function($7)
      {
       return $6(testing_GeneratedPrintf.p$1($7));
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
 FormaDatos.formaAliado$640$36=function(mostrar,mensajes,datosOV,aliadoW)
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
    var fname,f,g$1,f$1;
    function serializeR(p)
    {
     return JSON.stringify((ProzperServer_JsonEncoder.j$43())(p));
    }
    function deserializeP(s)
    {
     return(ProzperServer_JsonDecoder.j$4())(JSON.parse(s));
    }
    function deserializeR(s)
    {
     return(ProzperServer_JsonDecoder.j$1())(JSON.parse(s));
    }
    function f$2(p)
    {
     return JSON.stringify((ProzperServer_JsonEncoder.j$1())(p));
    }
    function g$2(p)
    {
     return Rpc$1.invoke(fname,p);
    }
    function f$3(r)
    {
     return ResultM.bind(deserializeR,r);
    }
    function g$3(v)
    {
     return Concurrency.Return(v);
    }
    return b.Bind$4((fname="ejecutarDataEventoNuevo",[(f=function(x)
    {
     return g$2(f$2(x));
    },(g$1=(f$1=function(x)
    {
     return g$3(f$3(x));
    },function(v)
    {
     return Concurrency.Bind(v,f$1);
    }),function(x)
    {
     return g$1(f(x));
    })),function(f$4)
    {
     var f$5,g$4,f$6;
     function g$5(v)
     {
      return Concurrency.Return(v);
     }
     Rpc$1.registroRpcs().Add(fname,(f$5=function(x)
     {
      return f$4(deserializeP(x));
     },(g$4=(f$6=function(x)
     {
      return g$5(serializeR(x));
     },function(v)
     {
      return Concurrency.Bind(v,f$6);
     }),function(x)
     {
      return g$4(f$5(x));
     })));
    }])[0]({
     $:4,
     $0:[al.id,datos]
    }),function(a)
    {
     ModeloUI.refrescarData();
     Global.alert((function($4)
     {
      return function($5)
      {
       return $4(testing_GeneratedPrintf.p$1($5));
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
    var fname,f$1,g$2,f$2;
    function serializeR(p$2)
    {
     return JSON.stringify((ProzperServer_JsonEncoder.j$43())(p$2));
    }
    function deserializeP(s)
    {
     return(ProzperServer_JsonDecoder.j$4())(JSON.parse(s));
    }
    function deserializeR(s)
    {
     return(ProzperServer_JsonDecoder.j$1())(JSON.parse(s));
    }
    function f$3(p$2)
    {
     return JSON.stringify((ProzperServer_JsonEncoder.j$1())(p$2));
    }
    function g$3(p$2)
    {
     return Rpc$1.invoke(fname,p$2);
    }
    function f$4(r)
    {
     return ResultM.bind(deserializeR,r);
    }
    function g$4(v)
    {
     return Concurrency.Return(v);
    }
    return b$1.Bind$4((fname="ejecutarDataEventoNuevo",[(f$1=function(x)
    {
     return g$3(f$3(x));
    },(g$2=(f$2=function(x)
    {
     return g$4(f$4(x));
    },function(v)
    {
     return Concurrency.Bind(v,f$2);
    }),function(x)
    {
     return g$2(f$1(x));
    })),function(f$5)
    {
     var f$6,g$5,f$7;
     function g$6(v)
     {
      return Concurrency.Return(v);
     }
     Rpc$1.registroRpcs().Add(fname,(f$6=function(x)
     {
      return f$5(deserializeP(x));
     },(g$5=(f$7=function(x)
     {
      return g$6(serializeR(x));
     },function(v)
     {
      return Concurrency.Bind(v,f$7);
     }),function(x)
     {
      return g$5(f$6(x));
     })));
    }])[0]({
     $:4,
     $0:[al.id,datos]
    }),function(a)
    {
     ModeloUI.refrescarData();
     Global.alert((function($4)
     {
      return function($5)
      {
       return $4(testing_GeneratedPrintf.p$1($5));
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
   es=Strings.concat(", ",Seq.delay(function()
   {
    return $1;
   }));
   return es!==""?"Campos requeridos: "+es:"";
  },p[0]));
  return forma.get_Doc();
 };
 FormaGenerica.forma$676$38=function(salvar)
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
 FormaContactos.formaContactos$749$36=function(mostrar,mensajes,aliadoW,contactosV)
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
    var x,fname,f,g$1,f$1;
    function serializeR(p)
    {
     return JSON.stringify((ProzperServer_JsonEncoder.j$43())(p));
    }
    function deserializeP(s)
    {
     return(ProzperServer_JsonDecoder.j$4())(JSON.parse(s));
    }
    function deserializeR(s)
    {
     return(ProzperServer_JsonDecoder.j$1())(JSON.parse(s));
    }
    function f$2(p)
    {
     return JSON.stringify((ProzperServer_JsonEncoder.j$1())(p));
    }
    function g$2(p)
    {
     return Rpc$1.invoke(fname,p);
    }
    function f$3(r)
    {
     return ResultM.bind(deserializeR,r);
    }
    function g$3(v)
    {
     return Concurrency.Return(v);
    }
    return b.Bind$4((x={
     $:5,
     $0:[al.id,contactosV.Get()]
    },(fname="ejecutarDataEventoNuevo",[(f=function(x$1)
    {
     return g$2(f$2(x$1));
    },(g$1=(f$1=function(x$1)
    {
     return g$3(f$3(x$1));
    },function(v)
    {
     return Concurrency.Bind(v,f$1);
    }),function(x$1)
    {
     return g$1(f(x$1));
    })),function(f$4)
    {
     var f$5,g$4,f$6;
     function g$5(v)
     {
      return Concurrency.Return(v);
     }
     Rpc$1.registroRpcs().Add(fname,(f$5=function(x$1)
     {
      return f$4(deserializeP(x$1));
     },(g$4=(f$6=function(x$1)
     {
      return g$5(serializeR(x$1));
     },function(v)
     {
      return Concurrency.Bind(v,f$6);
     }),function(x$1)
     {
      return g$4(f$5(x$1));
     })));
    }])[0](x)),function(a)
    {
     ModeloUI.refrescarData();
     Global.alert((function($1)
     {
      return function($2)
      {
       return $1(testing_GeneratedPrintf.p$1($2));
      };
     }(Global.id))(a));
     return b.Zero();
    });
   }))))):Global.alert("Error not caught FormaDatos"));
  };
 };
 FormaContactos.formaContactos$748$42=function(contactosV)
 {
  return function()
  {
   contactosV.Set(contactosV.Get().concat([{
    $:0,
    $0:TypesV0.dirVacio()
   }]));
  };
 };
 FormaContactos.formaContactos$747$42=function(contactosV)
 {
  return function()
  {
   contactosV.Set(contactosV.Get().concat([{
    $:1,
    $0:TypesV1.correoVacio()
   }]));
  };
 };
 FormaContactos.formaContactos$746$42=function(contactosV)
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
    var x,fname,f,g$1,f$1;
    function serializeR(p$1)
    {
     return JSON.stringify((ProzperServer_JsonEncoder.j$43())(p$1));
    }
    function deserializeP(s)
    {
     return(ProzperServer_JsonDecoder.j$4())(JSON.parse(s));
    }
    function deserializeR(s)
    {
     return(ProzperServer_JsonDecoder.j$1())(JSON.parse(s));
    }
    function f$2(p$1)
    {
     return JSON.stringify((ProzperServer_JsonEncoder.j$1())(p$1));
    }
    function g$2(p$1)
    {
     return Rpc$1.invoke(fname,p$1);
    }
    function f$3(r)
    {
     return ResultM.bind(deserializeR,r);
    }
    function g$3(v)
    {
     return Concurrency.Return(v);
    }
    return b$1.Bind$4((x={
     $:5,
     $0:[al.id,contactosV.Get()]
    },(fname="ejecutarDataEventoNuevo",[(f=function(x$1)
    {
     return g$2(f$2(x$1));
    },(g$1=(f$1=function(x$1)
    {
     return g$3(f$3(x$1));
    },function(v)
    {
     return Concurrency.Bind(v,f$1);
    }),function(x$1)
    {
     return g$1(f(x$1));
    })),function(f$4)
    {
     var f$5,g$4,f$6;
     function g$5(v)
     {
      return Concurrency.Return(v);
     }
     Rpc$1.registroRpcs().Add(fname,(f$5=function(x$1)
     {
      return f$4(deserializeP(x$1));
     },(g$4=(f$6=function(x$1)
     {
      return g$5(serializeR(x$1));
     },function(v)
     {
      return Concurrency.Bind(v,f$6);
     }),function(x$1)
     {
      return g$4(f$5(x$1));
     })));
    }])[0](x)),function(a)
    {
     ModeloUI.refrescarData();
     Global.alert((function($1)
     {
      return function($2)
      {
       return $1(testing_GeneratedPrintf.p$1($2));
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
     o=Seq.tryItem(i,$1);
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
  contactosIV=View.Map(Seq.indexed,contactosV.get_View());
  tels=View.Map(function($1)
  {
   function c(i,c$1)
   {
    return(FormaContactos.ftel())[0](c$1)==null?null:{
     $:1,
     $0:i
    };
   }
   return Seq.choose(function($2)
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
   return Seq.choose(function($2)
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
   return Seq.choose(function($2)
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
 FormaFormasPago.formaFormasPago$815$36=function(mostrar,mensajes,aliadoW,formasPagoV)
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
    var x,fname,f,g$1,f$1;
    function serializeR(p)
    {
     return JSON.stringify((ProzperServer_JsonEncoder.j$43())(p));
    }
    function deserializeP(s)
    {
     return(ProzperServer_JsonDecoder.j$4())(JSON.parse(s));
    }
    function deserializeR(s)
    {
     return(ProzperServer_JsonDecoder.j$1())(JSON.parse(s));
    }
    function f$2(p)
    {
     return JSON.stringify((ProzperServer_JsonEncoder.j$1())(p));
    }
    function g$2(p)
    {
     return Rpc$1.invoke(fname,p);
    }
    function f$3(r)
    {
     return ResultM.bind(deserializeR,r);
    }
    function g$3(v)
    {
     return Concurrency.Return(v);
    }
    return b.Bind$4((x={
     $:6,
     $0:[al.id,formasPagoV.Get()]
    },(fname="ejecutarDataEventoNuevo",[(f=function(x$1)
    {
     return g$2(f$2(x$1));
    },(g$1=(f$1=function(x$1)
    {
     return g$3(f$3(x$1));
    },function(v)
    {
     return Concurrency.Bind(v,f$1);
    }),function(x$1)
    {
     return g$1(f(x$1));
    })),function(f$4)
    {
     var f$5,g$4,f$6;
     function g$5(v)
     {
      return Concurrency.Return(v);
     }
     Rpc$1.registroRpcs().Add(fname,(f$5=function(x$1)
     {
      return f$4(deserializeP(x$1));
     },(g$4=(f$6=function(x$1)
     {
      return g$5(serializeR(x$1));
     },function(v)
     {
      return Concurrency.Bind(v,f$6);
     }),function(x$1)
     {
      return g$4(f$5(x$1));
     })));
    }])[0](x)),function(a)
    {
     ModeloUI.refrescarData();
     Global.alert((function($1)
     {
      return function($2)
      {
       return $1(testing_GeneratedPrintf.p$1($2));
      };
     }(Global.id))(a));
     return b.Zero();
    });
   }))))):Global.alert("Error not caught FormaDatos"));
  };
 };
 FormaFormasPago.formaFormasPago$814$42=function(formasPagoV,fp)
 {
  return function()
  {
   formasPagoV.Set(formasPagoV.Get().concat([fp({
    $:0,
    $0:TypesV0.ctaVacio()
   })]));
  };
 };
 FormaFormasPago.formaFormasPago$813$42=function(formasPagoV,fp)
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
     o=Seq.tryItem(i$1,$1);
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
  formasPagoIV=View.Map(Seq.indexed,formasPagoV.get_View());
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
   return Seq.choose(function($2)
   {
    return c($2[0],$2[1]);
   },$1);
  },formasPagoIV);
  tarDocs=Doc.ConvertBy(Global.id,function(i$1)
  {
   return VariousUI.removeButton(function()
   {
    formasPagoV.Set(Array.remove(i$1,formasPagoV.Get()));
   },(TarjetaCredito.formaDocO((function($1)
   {
    return makeVar($1[0],$1[1]);
   }(FormaFormasPago.ftar()))(i$1)))[1]);
  },tars);
  ctaDocs=Doc.ConvertBy(Global.id,function(i$1)
  {
   return VariousUI.removeButton(function()
   {
    formasPagoV.Set(Array.remove(i$1,formasPagoV.Get()));
   },(CuentaBancaria.formaDocO((function($1)
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
    var x,fname,f,g$1,f$1;
    function serializeR(p$1)
    {
     return JSON.stringify((ProzperServer_JsonEncoder.j$43())(p$1));
    }
    function deserializeP(s)
    {
     return(ProzperServer_JsonDecoder.j$4())(JSON.parse(s));
    }
    function deserializeR(s)
    {
     return(ProzperServer_JsonDecoder.j$1())(JSON.parse(s));
    }
    function f$2(p$1)
    {
     return JSON.stringify((ProzperServer_JsonEncoder.j$1())(p$1));
    }
    function g$2(p$1)
    {
     return Rpc$1.invoke(fname,p$1);
    }
    function f$3(r)
    {
     return ResultM.bind(deserializeR,r);
    }
    function g$3(v)
    {
     return Concurrency.Return(v);
    }
    return b$1.Bind$4((x={
     $:6,
     $0:[al.id,formasPagoV.Get()]
    },(fname="ejecutarDataEventoNuevo",[(f=function(x$1)
    {
     return g$2(f$2(x$1));
    },(g$1=(f$1=function(x$1)
    {
     return g$3(f$3(x$1));
    },function(v)
    {
     return Concurrency.Bind(v,f$1);
    }),function(x$1)
    {
     return g$1(f(x$1));
    })),function(f$4)
    {
     var f$5,g$4,f$6;
     function g$5(v)
     {
      return Concurrency.Return(v);
     }
     Rpc$1.registroRpcs().Add(fname,(f$5=function(x$1)
     {
      return f$4(deserializeP(x$1));
     },(g$4=(f$6=function(x$1)
     {
      return g$5(serializeR(x$1));
     },function(v)
     {
      return Concurrency.Bind(v,f$6);
     }),function(x$1)
     {
      return g$4(f$5(x$1));
     })));
    }])[0](x)),function(a)
    {
     ModeloUI.refrescarData();
     Global.alert((function($1)
     {
      return function($2)
      {
       return $1(testing_GeneratedPrintf.p$1($2));
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
 RenderAliados.aliados$904$49=function(seleccionar,alid)
 {
  return function()
  {
   seleccionar(alid);
  };
 };
 RenderAliados.aliados$902$49=function(expandir,alid)
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
    return Aliado.nombre(al.datosPersonales);
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
   }])),Seq.sortWith(function($2,$3)
   {
    return(c($2))($3);
   },als));
   buscar=Aliado.busqueda(als$1);
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
     return Aliado.nombre($1.datosPersonales);
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
     return Aliado.nombre2($1.datosPersonales);
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
   comisionV=View.Map2(Aliado.comision,prem,alv);
   premisasV=View.Map2(Aliado.premisas,prem,alv);
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
   var fname,f,g,f$1;
   function serializeR(p)
   {
    return JSON.stringify((ProzperServer_JsonEncoder.j$46())(p));
   }
   function deserializeP(s)
   {
    return((Provider.Id())())(JSON.parse(s));
   }
   function deserializeR(s)
   {
    return(ProzperServer_JsonDecoder.j$46())(JSON.parse(s));
   }
   function f$2(p)
   {
    return JSON.stringify(((Provider.Id())())(p));
   }
   function g$1(p)
   {
    return Rpc$1.invoke(fname,p);
   }
   function f$3(r)
   {
    return ResultM.bind(deserializeR,r);
   }
   function g$2(v)
   {
    return Concurrency.Return(v);
   }
   return b.Bind$4((fname="obtenerEstado",[(f=function(x)
   {
    return g$1(f$2(x));
   },(g=(f$1=function(x)
   {
    return g$2(f$3(x));
   },function(v)
   {
    return Concurrency.Bind(v,f$1);
   }),function(x)
   {
    return g(f(x));
   })),function(f$4)
   {
    var f$5,g$3,f$6;
    function g$4(v)
    {
     return Concurrency.Return(v);
    }
    Rpc$1.registroRpcs().Add(fname,(f$5=function(x)
    {
     return f$4(deserializeP(x));
    },(g$3=(f$6=function(x)
    {
     return g$4(serializeR(x));
    },function(v)
    {
     return Concurrency.Bind(v,f$6);
    }),function(x)
    {
     return g$3(f$5(x));
    })));
   }])[0](),function(a)
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
    aliadoO=a$1==null?null:(aid=a$1.$0,Seq.tryFind(function(al)
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
   aliadoO=Seq.tryFind(function(al)
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
   return Aliado.nombre2($1.datosPersonales);
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
   var fname,f,g,f$1;
   function serializeR(p)
   {
    return JSON.stringify((ProzperServer_JsonEncoder.j$50())(p));
   }
   function deserializeP(s)
   {
    return((Provider.Id())())(JSON.parse(s));
   }
   function deserializeR(s)
   {
    return(ProzperServer_JsonDecoder.j$50())(JSON.parse(s));
   }
   function f$2(p)
   {
    return JSON.stringify(((Provider.Id())())(p));
   }
   function g$1(p)
   {
    return Rpc$1.invoke(fname,p);
   }
   function f$3(r)
   {
    return ResultM.bind(deserializeR,r);
   }
   function g$2(v)
   {
    return Concurrency.Return(v);
   }
   return b.Bind$4((fname="logoutUser",[(f=function(x)
   {
    return g$1(f$2(x));
   },(g=(f$1=function(x)
   {
    return g$2(f$3(x));
   },function(v)
   {
    return Concurrency.Bind(v,f$1);
   }),function(x)
   {
    return g(f(x));
   })),function(f$4)
   {
    var f$5,g$3,f$6;
    function g$4(v)
    {
     return Concurrency.Return(v);
    }
    Rpc$1.registroRpcs().Add(fname,(f$5=function(x)
    {
     return f$4(deserializeP(x));
    },(g$3=(f$6=function(x)
    {
     return g$4(serializeR(x));
    },function(v)
    {
     return Concurrency.Bind(v,f$6);
    }),function(x)
    {
     return g$3(f$5(x));
    })));
   }])[0](),function()
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
  var c,c$1,b,b$1;
  SC$1.$cctor=Global.ignore;
  SC$1.rootdir="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\ProzperClient\\website";
  SC$1.TemplatesFileName="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\ProzperClient\\website"+"\\Templates.html";
  SC$1.LoginFileName="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\ProzperClient\\website"+"\\Login.html";
  ((function($1)
  {
   return function($2)
   {
    return $1(Utils.toSafe($2));
   };
  }(function(s)
  {
   console.log(s);
  }))("D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\ProzperClient\\website\\Templates.html"));
  SC$1.modeloV=Var$1.Create$1(Modelo.New(new TypesV0.IdAliado({
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
   aliadoO=Seq.tryFind(function(al)
   {
    return Unchecked.Equals(al.id,aid);
   },a.aliados);
   return View.Const(aliadoO!=null&&aliadoO.$==1?aliadoO.$0:Aliado.empty());
  },ModeloUI.modeloV().get_View()));
  SC$1.paises=Var$1.Create$1([]);
  SC$1.estados=Var$1.Create$1([]);
  SC$1.tiposDir=Var$1.Create$1([]);
  SC$1.tiposTel=Var$1.Create$1([]);
  SC$1.generos=Var$1.Create$1([]);
  SC$1.tiposCta=Var$1.Create$1([]);
  SC$1.tiposTar=Var$1.Create$1([]);
  Rpc.iterA((b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
  {
   var fname,f,g,f$1;
   function serializeR(p)
   {
    return JSON.stringify((ProzperServer_JsonEncoder.j$49())(p));
   }
   function deserializeP(s)
   {
    return((Provider.Id())())(JSON.parse(s));
   }
   function deserializeR(s)
   {
    return(ProzperServer_JsonDecoder.j$49())(JSON.parse(s));
   }
   function f$2(p)
   {
    return JSON.stringify(((Provider.Id())())(p));
   }
   function g$1(p)
   {
    return Rpc$1.invoke(fname,p);
   }
   function f$3(r)
   {
    return ResultM.bind(deserializeR,r);
   }
   function g$2(v)
   {
    return Concurrency.Return(v);
   }
   return b$1.Bind$4((fname="obtenerUnions",[(f=function(x)
   {
    return g$1(f$2(x));
   },(g=(f$1=function(x)
   {
    return g$2(f$3(x));
   },function(v)
   {
    return Concurrency.Bind(v,f$1);
   }),function(x)
   {
    return g(f(x));
   })),function(f$4)
   {
    var f$5,g$3,f$6;
    function g$4(v)
    {
     return Concurrency.Return(v);
    }
    Rpc$1.registroRpcs().Add(fname,(f$5=function(x)
    {
     return f$4(deserializeP(x));
    },(g$3=(f$6=function(x)
    {
     return g$4(serializeR(x));
    },function(v)
    {
     return Concurrency.Bind(v,f$6);
    }),function(x)
    {
     return g$3(f$5(x));
    })));
   }])[0](),function(a)
   {
    VariousUI.paises().Set(a[0]);
    VariousUI.estados().Set(a[1]);
    VariousUI.tiposDir().Set(a[2]);
    VariousUI.tiposTel().Set(a[3]);
    VariousUI.generos().Set(a[4]);
    VariousUI.tiposCta().Set(a[5]);
    VariousUI.tiposTar().Set(a[6]);
    return b$1.Zero();
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
 testing_Templates.correo=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"correo"
  },h):void 0;
 };
 testing_Templates.telefono=function(h)
 {
  Templates.LoadLocalTemplates("templates");
  return h?Templates.NamedTemplate("templates",{
   $:1,
   $0:"telefono"
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
 testing_GeneratedPrintf.p=function($1)
 {
  return $1.$==2?"Empresa":$1.$==1?"Femenino":"Masculino";
 };
 testing_GeneratedPrintf.p$1=function($1)
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

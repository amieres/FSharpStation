(function(Global)
{
 "use strict";
 var WebSharper,Obj,FsRoot,Library,Dependency,Log,WsTranslator,Position,SC$1,IntelliFactory,Runtime,Utils,console,Arrays,List,Seq,Strings;
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 Dependency=Library.Dependency=Library.Dependency||{};
 Log=Library.Log=Library.Log||{};
 WsTranslator=FsRoot.WsTranslator=FsRoot.WsTranslator||{};
 Position=WsTranslator.Position=WsTranslator.Position||{};
 SC$1=Global.StartupCode$WsTranslator47$WsTranslator47=Global.StartupCode$WsTranslator47$WsTranslator47||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Utils=WebSharper&&WebSharper.Utils;
 console=Global.console;
 Arrays=WebSharper&&WebSharper.Arrays;
 List=WebSharper&&WebSharper.List;
 Seq=WebSharper&&WebSharper.Seq;
 Strings=WebSharper&&WebSharper.Strings;
 Dependency=Library.Dependency=Runtime.Class({
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
 Log.printfn=function(fmt)
 {
  return fmt(Log.printer().get_D());
 };
 Log.printer=function()
 {
  SC$1.$cctor();
  return SC$1.printer;
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
 Position.New=function(FileName,Start,End)
 {
  return{
   FileName:FileName,
   Start:Start,
   End:End
  };
 };
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
 WsTranslator.fromDll2Meta=function(a)
 {
  return{
   $:0,
   $0:Strings.Replace(a.$0,".dll",".meta")
  };
 };
 WsTranslator.justDlls=function()
 {
  SC$1.$cctor();
  return SC$1.justDlls;
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1.printer=new Dependency.New(function(txt)
  {
   console.log(txt);
  });
  SC$1.justDlls=[{
   $:0,
   $0:"/dlls/WebSharper.Main.dll"
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
}(self));

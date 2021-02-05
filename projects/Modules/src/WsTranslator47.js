(function(Global)
{
 "use strict";
 var WebSharper,Obj,FsRoot,WsTranslator,Dependency,SC$1,IntelliFactory,Runtime,Arrays,List,Seq,Strings;
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 WsTranslator=FsRoot.WsTranslator=FsRoot.WsTranslator||{};
 Dependency=WsTranslator.Dependency=WsTranslator.Dependency||{};
 SC$1=Global.StartupCode$WsTranslator47$WsTranslator47=Global.StartupCode$WsTranslator47$WsTranslator47||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Arrays=WebSharper&&WebSharper.Arrays;
 List=WebSharper&&WebSharper.List;
 Seq=WebSharper&&WebSharper.Seq;
 Strings=WebSharper&&WebSharper.Strings;
 Dependency=WsTranslator.Dependency=Runtime.Class({
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
 WsTranslator.dlls=function()
 {
  return Arrays.ofSeq(List.ofSeq(Seq.delay(function()
  {
   return Seq.collect(function(f)
   {
    return Seq.append([f.$0],Seq.delay(function()
    {
     return[WsTranslator.fromDll2Meta(f).$0];
    }));
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
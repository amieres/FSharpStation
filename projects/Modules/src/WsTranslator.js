(function()
{
 "use strict";
 var Global,FsRoot,WsTranslator,SC$1;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 WsTranslator=FsRoot.WsTranslator=FsRoot.WsTranslator||{};
 SC$1=Global.StartupCode$WsTranslator$WsTranslator=Global.StartupCode$WsTranslator$WsTranslator||{};
 WsTranslator.dlls=function()
 {
  SC$1.$cctor();
  return SC$1.dlls;
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1.dlls=["/dlls/WebSharper.Main.dll","/dlls/WebSharper.Collections.dll","/dlls/WebSharper.Control.dll","/dlls/WebSharper.Web.dll","/dlls/WebSharper.Sitelets.dll","/dlls/WebSharper.UI.dll","/dlls/WebSharper.UI.Templating.Runtime.dll","/dlls/WebSharper.Data.dll"];
 };
}());

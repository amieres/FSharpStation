(function(Global)
{
 "use strict";
 var FsRootDll,LibraryJS,WsTranslatorLoaderPlugIn,SC$1,WebSharper,UI,View,WsTranslatorLoader_GeneratedPrintf,FsRoot,LibraryJS$1,WsTranslatorLoader,AppFramework,UI$1;
 FsRootDll=Global.FsRootDll=Global.FsRootDll||{};
 LibraryJS=FsRootDll.LibraryJS=FsRootDll.LibraryJS||{};
 WsTranslatorLoaderPlugIn=LibraryJS.WsTranslatorLoaderPlugIn=LibraryJS.WsTranslatorLoaderPlugIn||{};
 SC$1=Global.StartupCode$WsTranslatorLoaderPlugIn$WsTranslatorLoaderPlugIn=Global.StartupCode$WsTranslatorLoaderPlugIn$WsTranslatorLoaderPlugIn||{};
 WebSharper=Global.WebSharper;
 UI=WebSharper&&WebSharper.UI;
 View=UI&&UI.View;
 WsTranslatorLoader_GeneratedPrintf=Global.WsTranslatorLoader_GeneratedPrintf;
 FsRoot=Global.FsRoot;
 LibraryJS$1=FsRoot&&FsRoot.LibraryJS;
 WsTranslatorLoader=LibraryJS$1&&LibraryJS$1.WsTranslatorLoader;
 AppFramework=LibraryJS&&LibraryJS.AppFramework;
 UI$1=WsTranslatorLoader&&WsTranslatorLoader.UI;
 WsTranslatorLoaderPlugIn.plugInAdded=function()
 {
  SC$1.$cctor();
  return SC$1.plugInAdded;
 };
 WsTranslatorLoaderPlugIn.statusW=function()
 {
  SC$1.$cctor();
  return SC$1.statusW;
 };
 SC$1.$cctor=function()
 {
  var b;
  SC$1.$cctor=Global.ignore;
  SC$1.statusW=View.Map(function($1)
  {
   return(function($2)
   {
    return function($3)
    {
     return $2("("+WsTranslatorLoader_GeneratedPrintf.p($3[0])+", "+WsTranslatorLoader_GeneratedPrintf.p$1($3[1])+")");
    };
   }(Global.id))([$1[0],$1[1]]);
  },WsTranslatorLoader.wasmStatusV().get_View());
  SC$1.plugInAdded=AppFramework.addPlugIn((b=AppFramework.plugin(),b.AddDoc0(b.AddVar(b.AddVar(b.AddViw(b.Name(b.Yield(),"WsTranslatorPlugIn"),"Status",WsTranslatorLoaderPlugIn.statusW()),"Source",UI$1.codeV()),"Options",UI$1.optsV()),"Form",UI$1.mainDoc)));
 };
}(self));

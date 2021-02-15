(function(Global)
{
 "use strict";
 var FsRootDll,LibraryJS,WsTranslatorLoaderPlugIn,SC$1,WebSharper,UI,View,WsTranslatorLoader_GeneratedPrintf,FsRoot,LibraryJS$1,WsTranslatorLoader,AppFramework,UI$1,Concurrency;
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
 Concurrency=WebSharper&&WebSharper.Concurrency;
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
     return $2("("+WsTranslatorLoader_GeneratedPrintf.p$1($3[0])+", "+WsTranslatorLoader_GeneratedPrintf.p$2($3[1])+")");
    };
   }(Global.id))([$1[0],$1[1]]);
  },WsTranslatorLoader.wasmStatusV().get_View());
  SC$1.plugInAdded=AppFramework.addPlugIn((b=AppFramework.plugin(),b.AddDoc0(b.AddAct(b.AddAct(b.AddAct(b.AddAct(b.AddAct(b.AddAct(b.AddAct(b.AddAct(b.AddAct(b.AddAct(b.AddAct(b.AddVar(b.AddVar(b.AddVar(b.AddVar(b.AddVar(b.AddVar(b.AddViw(b.AddViw(b.AddViw(b.AddViw(b.AddViw(b.Name(b.Yield(),"WsTranslatorPlugIn"),"Status",WsTranslatorLoaderPlugIn.statusW()),"FSharpErrors",UI$1.fsErrsW()),"WebSharperErrors",UI$1.wsErrsW()),"WebSharperWarnings",UI$1.wsWrnsW()),"DebugMode",View.Map(Global.String,UI$1.debugV().get_View())),"JS",UI$1.jsV()),"WasmPath",UI$1.wasmPathTV()),"Command",UI$1.commandV()),"Source",UI$1.codeV()),"Options",UI$1.optsV()),"Output",UI$1.detailsV()),"LoadAsWorker",function()
  {
   UI$1.actLoadAsWorker();
  }),"TerminateWorker",function()
  {
   UI$1.actTerminateWorker();
  }),"LoadInMainThread",function()
  {
   UI$1.actLoadInMainThread();
  }),"ToggleDebug",function()
  {
   UI$1.actToggleDebug();
  }),"Clean",function()
  {
   UI$1.clean();
  }),"Check",function()
  {
   Concurrency.Start(UI$1.actCheck(),null);
  }),"Compile",function()
  {
   Concurrency.Start(UI$1.actCompile(),null);
  }),"Run",function()
  {
   Concurrency.Start(UI$1.actRun(),null);
  }),"Translate",function()
  {
   Concurrency.Start(UI$1.actTranslate(),null);
  }),"Dir",function()
  {
   Concurrency.Start(UI$1.actDir(),null);
  }),"EvalJS",function()
  {
   UI$1.actEvalJS();
  }),"Form",UI$1.mainDoc)));
 };
}(self));

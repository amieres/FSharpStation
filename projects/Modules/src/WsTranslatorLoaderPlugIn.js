(function(Global)
{
 "use strict";
 var FsRootDll,LibraryJS,WsTranslatorLoaderPlugIn,SC$1,AppFramework,WebSharper,UI,FromView,View,FsRoot,LibraryJS$1,WsTranslatorLoader,UI$1,WsTranslatorLoader_GeneratedPrintf,Concurrency;
 FsRootDll=Global.FsRootDll=Global.FsRootDll||{};
 LibraryJS=FsRootDll.LibraryJS=FsRootDll.LibraryJS||{};
 WsTranslatorLoaderPlugIn=LibraryJS.WsTranslatorLoaderPlugIn=LibraryJS.WsTranslatorLoaderPlugIn||{};
 SC$1=Global.StartupCode$WsTranslatorLoaderPlugIn$WsTranslatorLoaderPlugIn=Global.StartupCode$WsTranslatorLoaderPlugIn$WsTranslatorLoaderPlugIn||{};
 AppFramework=LibraryJS&&LibraryJS.AppFramework;
 WebSharper=Global.WebSharper;
 UI=WebSharper&&WebSharper.UI;
 FromView=UI&&UI.FromView;
 View=UI&&UI.View;
 FsRoot=Global.FsRoot;
 LibraryJS$1=FsRoot&&FsRoot.LibraryJS;
 WsTranslatorLoader=LibraryJS$1&&LibraryJS$1.WsTranslatorLoader;
 UI$1=WsTranslatorLoader&&WsTranslatorLoader.UI;
 WsTranslatorLoader_GeneratedPrintf=Global.WsTranslatorLoader_GeneratedPrintf;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 WsTranslatorLoaderPlugIn.plugInAdded=function()
 {
  SC$1.$cctor();
  return SC$1.plugInAdded;
 };
 WsTranslatorLoaderPlugIn.ifThen=function(cond,actN)
 {
  if(cond==="1")
   AppFramework.callFunction(null,null,actN);
 };
 WsTranslatorLoaderPlugIn.lensChannelV=function(ch,lm)
 {
  var f;
  function m(a,a$1)
  {
   return a$1[0];
  }
  function g(o)
  {
   return o==null?"":o.$0;
  }
  return new FromView.New(View.Map((f=function(o)
  {
   var $1;
   return o==null?null:{
    $:1,
    $0:($1=o.$0,m($1[0],$1[1]))
   };
  },function(x)
  {
   return g(f(x));
  }),lm.TryFindByKeyAsView(ch)),function(txt)
  {
   UI$1.setChannel(ch,txt);
  });
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
  SC$1.plugInAdded=AppFramework.addPlugIn((b=AppFramework.plugin(),b.AddDoc0(b.AddDoc0(b.AddDoc0(b.AddAct2(b.AddAct(b.AddAct(b.AddAct(b.AddAct(b.AddAct(b.AddAct(b.AddAct(b.AddAct(b.AddAct(b.AddAct(b.AddAct(b.AddAct(b.AddVar(b.AddVar(b.AddVar(b.AddVar(b.AddVar(b.AddVar(b.AddVar(b.AddVar(b.AddVar(b.AddVar(b.AddVar(b.AddVar(b.AddViw(b.AddViw(b.AddViw(b.AddViw(b.AddViw(b.Name(b.Yield(),"WsTranslatorPlugIn"),"Status",WsTranslatorLoaderPlugIn.statusW()),"DebugMode",View.Map(Global.String,UI$1.debugV().get_View())),"presences",UI$1.presencesW()),"errorsJson",UI$1.fileErrorsW()),"editorResp",UI$1.editorRespW()),"JS",UI$1.jsV()),"WasmPath",UI$1.wasmPathTV()),"Command",UI$1.commandV()),"Source",UI$1.codeV()),"Options",UI$1.optsV()),"stdout",WsTranslatorLoaderPlugIn.lensChannelV("stdout",UI$1.detailsV())),"stderr",WsTranslatorLoaderPlugIn.lensChannelV("stderr",UI$1.detailsV())),"Timings",WsTranslatorLoaderPlugIn.lensChannelV("Timings",UI$1.detailsV())),"WASM",WsTranslatorLoaderPlugIn.lensChannelV("WASM",UI$1.detailsV())),"getPresences",UI$1.getPresencesV()),"fileName",UI$1.fileNameV()),"editorCmd",UI$1.editorCmdV()),"LoadAsWorker",function()
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
   Concurrency.Start(UI$1.actEvalJS(),null);
  }),"EvalFS",function()
  {
   Concurrency.Start(UI$1.actEvalFS(),null);
  }),"ifThen",function(c)
  {
   return function(a)
   {
    return WsTranslatorLoaderPlugIn.ifThen(c,a);
   };
  },"Cond","Action"),"Tabs",UI$1.tabsDoc),"Details",UI$1.detailsDoc),"Form",UI$1.mainDoc)));
 };
}(self));

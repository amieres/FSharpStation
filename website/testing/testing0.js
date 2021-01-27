(function()
{
 "use strict";
 var Global,FsRoot,TestingJS,LibraryJS,WsTranslatorLoader,UI,WebSharper,UI$1,Client,Templates,Doc,IntelliFactory,Runtime;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 LibraryJS=FsRoot&&FsRoot.LibraryJS;
 WsTranslatorLoader=LibraryJS&&LibraryJS.WsTranslatorLoader;
 UI=WsTranslatorLoader&&WsTranslatorLoader.UI;
 WebSharper=Global.WebSharper;
 UI$1=WebSharper&&WebSharper.UI;
 Client=UI$1&&UI$1.Client;
 Templates=Client&&Client.Templates;
 Doc=UI$1&&UI$1.Doc;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 TestingJS.main=function()
 {
  var x,a;
  x=UI.mainDoc();
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x);
 };
 Runtime.OnLoad(function()
 {
  TestingJS.main();
 });
}());

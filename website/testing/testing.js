CIPHERSpaceLoadFiles(["/Scripts/WebSharper/WebSharper.Core.JavaScript/Runtime.js", "/Scripts/WebSharper/WebSharper.Main.js", "/Scripts/WebSharper/WebSharper.Collections.js", "/Scripts/WebSharper/WebSharper.Web.js", "/Scripts/WebSharper/WebSharper.Sitelets.js", "/Scripts/WebSharper/WebSharper.Control.js", "/Scripts/WebSharper/WebSharper.UI.js", "/Scripts/WebSharper/WebSharper.UI.Templating.Runtime.js", "/Scripts/WebSharper/LayoutEngine.js"], function()
{
 "use strict";
 var Global,FsRoot,TestingJS,Test,LibraryJS,AppFramework,WebSharper,UI,Client,Templates,Doc,IntelliFactory,Runtime;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 Test=TestingJS.Test=TestingJS.Test||{};
 LibraryJS=FsRoot&&FsRoot.LibraryJS;
 AppFramework=LibraryJS&&LibraryJS.AppFramework;
 WebSharper=Global.WebSharper;
 UI=WebSharper&&WebSharper.UI;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Doc=UI&&UI.Doc;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Test.main=function()
 {
  var x,a;
  x=AppFramework.getMainDoc().f();
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x);
 };
 Runtime.OnLoad(function()
 {
  Test.main();
 });
});
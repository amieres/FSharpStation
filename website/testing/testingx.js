CIPHERSpaceLoadFiles(["./Scripts/WebSharper/WebSharper.Core.JavaScript/Runtime.js", "./Scripts/WebSharper/WebSharper.Main.js", "./Scripts/WebSharper/WebSharper.Collections.js", "./Scripts/WebSharper/WebSharper.Web.js", "./Scripts/WebSharper/WebSharper.Sitelets.js", "./Scripts/WebSharper/WebSharper.Control.js", "./Scripts/WebSharper/WebSharper.UI.js", "./Scripts/WebSharper/WebSharper.UI.Templating.Runtime.js", "./Scripts/WebSharper/LayoutEngine.js"], function()
{
 "use strict";
 var Global,FsRoot,TestLayout,SC$1,LibraryJS,AppFramework,PlugIn,WebSharper,UI,Var$1,Lazy,Doc,IntelliFactory,Runtime;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 TestLayout=FsRoot.TestLayout=FsRoot.TestLayout||{};
 SC$1=Global["StartupCode$D:\\Abe\\CIPHERWorkspace\\FSharpStation\\src\\wsconfig_json$testing"]=Global["StartupCode$D:\\Abe\\CIPHERWorkspace\\FSharpStation\\src\\wsconfig_json$testing"]||{};
 LibraryJS=FsRoot&&FsRoot.LibraryJS;
 AppFramework=LibraryJS&&LibraryJS.AppFramework;
 PlugIn=AppFramework&&AppFramework.PlugIn;
 WebSharper=Global.WebSharper;
 UI=WebSharper&&WebSharper.UI;
 Var$1=UI&&UI.Var$1;
 Lazy=WebSharper&&WebSharper.Lazy;
 Doc=UI&&UI.Doc;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 TestLayout.main=function()
 {
  AppFramework.plugIns().Append(PlugIn.New("TestPlug",[AppFramework.newVar("testVar",TestLayout["var"]())],[],[AppFramework.newDoc("mainDoc",TestLayout.doc())],[AppFramework.newAct("Hello",function()
  {
   Global.alert("Hello");
  })],[]));
 };
 TestLayout.doc=function()
 {
  SC$1.$cctor();
  return SC$1.doc;
 };
 TestLayout["var"]=function()
 {
  SC$1.$cctor();
  return SC$1["var"];
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1["var"]=Var$1.Create$1("test value");
  SC$1.doc=Lazy.Create(function()
  {
   return Doc.Element("div",[],[Doc.Element("h1",[],[Doc.TextView(TestLayout["var"]().get_View())]),Doc.Input([],TestLayout["var"]())]);
  });
 };
 Runtime.OnLoad(function()
 {
  TestLayout.main();
 });
 IntelliFactory.Runtime.Start();
});
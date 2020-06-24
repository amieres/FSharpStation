(function()
{
 "use strict";
 var Global,FsRoot,Library,TestingJS,WSFrameworkTest,WSFramework,SC$1,WebSharper,UI,Doc,Concurrency,LibraryJS,FShUI,FShUI_AssemblyData,Seq,AssemblyUI,Client,Templates,Var$1,IntelliFactory,Runtime;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 WSFrameworkTest=TestingJS.WSFrameworkTest=TestingJS.WSFrameworkTest||{};
 WSFramework=TestingJS.WSFramework=TestingJS.WSFramework||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 WebSharper=Global.WebSharper;
 UI=WebSharper&&WebSharper.UI;
 Doc=UI&&UI.Doc;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 LibraryJS=FsRoot&&FsRoot.LibraryJS;
 FShUI=LibraryJS&&LibraryJS.FShUI;
 FShUI_AssemblyData=Library&&Library.FShUI_AssemblyData;
 Seq=WebSharper&&WebSharper.Seq;
 AssemblyUI=LibraryJS&&LibraryJS.AssemblyUI;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Var$1=UI&&UI.Var$1;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Library.Error$2=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 WSFrameworkTest.mainDoc=function()
 {
  return Doc.Element("div",[],[Doc.Element("h1",[],[Doc.TextNode("Hello WSFramework")]),WSFrameworkTest.testVarInput(),WSFrameworkTest.testVarOut()]);
 };
 WSFrameworkTest.testVarOut=function()
 {
  return Doc.Element("div",[],[Doc.TextView(WSFrameworkTest.testVar().get_View())]);
 };
 WSFrameworkTest.testVarInput=function()
 {
  return Doc.Element("div",[],[Doc.Input([],WSFrameworkTest.testVar())]);
 };
 WSFrameworkTest.testVar=function()
 {
  SC$1.$cctor();
  return SC$1.testVar;
 };
 WSFramework.main=function()
 {
  var b;
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   var assembs;
   assembs=FShUI.assemblies();
   return Concurrency.Bind(FShUI.loadAssembly(new FShUI_AssemblyData.AssemblyRef({
    $:0,
    $0:"FShUI.asm"
   })),function()
   {
    FShUI.assemblies().Set(Seq.append((FShUI.assemblies())["var"].Get(),assembs["var"].Get()));
    return Concurrency.Bind(Concurrency.Sleep(50),function()
    {
     var x,a;
     x=Doc.Element("div",[],[AssemblyUI.mainDocInput(),AssemblyUI.assembliesDoc(),Doc.Element("div",[],[AssemblyUI.mainSubDoc()])]);
     a=self.document.body;
     Templates.LoadLocalTemplates("");
     Doc.Run(a,x);
     return Concurrency.Return(null);
    });
   });
  })),null);
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1.testVar=Var$1.Create$1("Hello WSFrameWork");
 };
 Runtime.OnLoad(function()
 {
  WSFramework.main();
 });
}());

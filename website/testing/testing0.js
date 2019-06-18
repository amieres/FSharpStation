(function()
{
 "use strict";
 var Global,FsRoot,TestingJS,Button,SC$1,IntelliFactory,Runtime,WebSharper,UI,Doc,AttrProxy,Utils,Client,Templates,Date;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 Button=TestingJS.Button=TestingJS.Button||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 WebSharper=Global.WebSharper;
 UI=WebSharper&&WebSharper.UI;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 Utils=WebSharper&&WebSharper.Utils;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Date=Global.Date;
 Button.main$111$43=Runtime.Curried3(function($1,$2,$3)
 {
  return Global.alert("Hello!");
 });
 Button.main=function()
 {
  var x,a;
  x=Doc.Element("div",[],[Doc.TextNode("When you press the button "),Doc.Element("button",[AttrProxy.HandlerImpl("click",function()
  {
   return function()
   {
    return Global.alert("Hello!");
   };
  })],[Doc.TextNode("Press Me!")]),Doc.TextNode(" It should respond 'Hello!'"),Doc.TextNode((function($1)
  {
   return function($2)
   {
    return $1("Hora: "+Utils.toSafe($2));
   };
  }(Global.id))(Global.String(Button.ahora())))]);
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x);
 };
 Button.ahora=function()
 {
  SC$1.$cctor();
  return SC$1.ahora;
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1.ahora=Date.now();
 };
 Runtime.OnLoad(function()
 {
  Button.main();
 });
}());

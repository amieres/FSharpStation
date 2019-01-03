(function()
{
 "use strict";
 var Global,FsRoot,TestingMixed,ClientFunctions,SC$1,WebSharper,UI,Doc,Concurrency,Remoting,AjaxRemotingProvider,Var$1;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 TestingMixed=FsRoot.TestingMixed=FsRoot.TestingMixed||{};
 ClientFunctions=TestingMixed.ClientFunctions=TestingMixed.ClientFunctions||{};
 SC$1=Global.StartupCode$LittleClientServer$LittleClientServer=Global.StartupCode$LittleClientServer$LittleClientServer||{};
 WebSharper=Global.WebSharper;
 UI=WebSharper&&WebSharper.UI;
 Doc=UI&&UI.Doc;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Remoting=WebSharper&&WebSharper.Remoting;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 Var$1=UI&&UI.Var$1;
 ClientFunctions.clientDoc=function()
 {
  return Doc.Element("div",[],[Doc.Element("h1",[],[Doc.TextNode("State of zero on server:")]),Doc.Element("h2",[],[Doc.TextView(ClientFunctions.zeroState().get_View())]),Doc.Button("increment",[],function()
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("LittleClientServer:FsRoot.TestingMixed+ServerFunctions.addToState:-1770422805",[1]),function(a)
    {
     ClientFunctions.zeroState().Set(a);
     return Concurrency.Zero();
    });
   })),null);
  }),Doc.Button("decrement",[],function()
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("LittleClientServer:FsRoot.TestingMixed+ServerFunctions.addToState:-1770422805",[-1]),function(a)
    {
     ClientFunctions.zeroState().Set(a);
     return Concurrency.Zero();
    });
   })),null);
  })]);
 };
 ClientFunctions.zeroState=function()
 {
  SC$1.$cctor();
  return SC$1.zeroState;
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1.zeroState=Var$1.Create$1("do not know");
 };
}());

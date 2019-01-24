(function()
{
 "use strict";
 var Global,FsRoot,StackOverflow,Templating,WebSharper,Obj,ClientCode,A,B,C,D,Client,MainProgram,Server,SC$1,IntelliFactory,Runtime,UI,Doc,AttrProxy,Collections,FSharpMap,Seq,LibraryJS,AppFramework,PlugIn,LayoutEngineModule,Unchecked,Templating$1,Runtime$1,Server$1,ProviderBuilder,Handler,TemplateInstance,Client$1,Templates,View,Concurrency,Utils,console,Dictionary,Var$1;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 StackOverflow=FsRoot.StackOverflow=FsRoot.StackOverflow||{};
 Templating=StackOverflow.Templating=StackOverflow.Templating||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 ClientCode=StackOverflow.ClientCode=StackOverflow.ClientCode||{};
 A=ClientCode.A=ClientCode.A||{};
 B=ClientCode.B=ClientCode.B||{};
 C=ClientCode.C=ClientCode.C||{};
 D=ClientCode.D=ClientCode.D||{};
 Client=StackOverflow.Client=StackOverflow.Client||{};
 MainProgram=StackOverflow.MainProgram=StackOverflow.MainProgram||{};
 Server=StackOverflow.Server=StackOverflow.Server||{};
 SC$1=Global.StartupCode$StackOverflow$StackOverflow=Global.StartupCode$StackOverflow$StackOverflow||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 UI=WebSharper&&WebSharper.UI;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpMap=Collections&&Collections.FSharpMap;
 Seq=WebSharper&&WebSharper.Seq;
 LibraryJS=FsRoot&&FsRoot.LibraryJS;
 AppFramework=LibraryJS&&LibraryJS.AppFramework;
 PlugIn=AppFramework&&AppFramework.PlugIn;
 LayoutEngineModule=LibraryJS&&LibraryJS.LayoutEngineModule;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Templating$1=UI&&UI.Templating;
 Runtime$1=Templating$1&&Templating$1.Runtime;
 Server$1=Runtime$1&&Runtime$1.Server;
 ProviderBuilder=Server$1&&Server$1.ProviderBuilder;
 Handler=Server$1&&Server$1.Handler;
 TemplateInstance=Server$1&&Server$1.TemplateInstance;
 Client$1=UI&&UI.Client;
 Templates=Client$1&&Client$1.Templates;
 View=UI&&UI.View;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Utils=WebSharper&&WebSharper.Utils;
 console=Global.console;
 Dictionary=Collections&&Collections.Dictionary;
 Var$1=UI&&UI.Var$1;
 Templating.TemplatesFileName=function()
 {
  SC$1.$cctor();
  return SC$1.TemplatesFileName;
 };
 Templating.rootdir=function()
 {
  SC$1.$cctor();
  return SC$1.rootdir;
 };
 A=ClientCode.A=Runtime.Class({},Obj,A);
 A.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },A);
 B=ClientCode.B=Runtime.Class({},A,B);
 B.New=Runtime.Ctor(function()
 {
  A.New.call(this);
 },B);
 C=ClientCode.C=Runtime.Class({
  Doc:function(map)
  {
   return Doc.Element("div",[],[Doc.Element("hr",[],[]),Doc.Element("div",[],[Doc.Element("h1",[],[Doc.TextNode("C")])]),Doc.Element("div",[AttrProxy.Create("class","jumbotron")],[map.get_Item("D").Doc(map)])]);
  }
 },B,C);
 C.New=Runtime.Ctor(function()
 {
  B.New.call(this);
 },C);
 D=ClientCode.D=Runtime.Class({
  Doc:function(a)
  {
   return Doc.Element("span",[AttrProxy.Create("class","alert alart-info")],[Doc.TextNode("D")]);
  }
 },A,D);
 D.New=Runtime.Ctor(function()
 {
  A.New.call(this);
 },D);
 ClientCode.fixMap=function(m)
 {
  return new FSharpMap.New(Seq.map(function(kvp)
  {
   return[kvp.K,ClientCode.fixType(kvp.V)];
  },m));
 };
 ClientCode.fixType=function(v)
 {
  var m,o;
  m=(o=null,[ClientCode.types().TryGetValue(v,{
   get:function()
   {
    return o;
   },
   set:function(v$1)
   {
    o=v$1;
   }
  }),o]);
  return m[0]?m[1][1]:new C.New();
 };
 ClientCode.registerType=function(line,a)
 {
  ClientCode.types().Add(line,[line,a]);
 };
 ClientCode.types=function()
 {
  SC$1.$cctor();
  return SC$1.types;
 };
 Client.getDoc=function(m,docName)
 {
  var m$1;
  m$1=ClientCode.fixMap(m);
  return m$1.get_Item(docName).Doc(m$1);
 };
 MainProgram.mainProgram=function()
 {
  var l,m,a,o,v,b,M,p;
  AppFramework.addPlugIn(PlugIn.New("Prozper",[AppFramework.newVar("title",MainProgram.titleV())],[],[],[],[]));
  LayoutEngineModule.addLayout((l=(m=self.document.getElementById("GlobalLayout"),Unchecked.Equals(m,null)?"\r\n                    menuEditor       horizontal  65       menuLogo                  editorMessages\r\n                    double           horizontal  0-50-100 AppFramework.AppFwkClient menuEditor\r\n                    menuLogo         vertical    350      logo                      menu\r\n                    logo             span       \"margin:0; color:gray; font-size: 55px; font-weight:530\" \"F# Station\"\r\n                    editorMessages   horizontal 10-83-100 editorButtons             messages\r\n                    messages         vertical   0-50-100  messagesLeft              messagesRight\r\n                    editorButtons    vertical -200 snippetsSnippet buttons\r\n                    buttons div      \"overflow: hidden; display: grid; grid-template-columns: 100%; grid-template-rows: repeat(15, calc(100% / 15)); bxackground-color: #eee; box-sizing: border-box; padding : 5px; grid-gap: 5px; margin-right: 21px\" btnSaveAs none x btnAddSnippet btnDeleteSnippet btnIndentIn btnIndentOut none x btnRunFS none x btnAbortFsi\r\n                    snippetsSnippet  vertical   0-20-100  snippets                  editorProperties\r\n                    snippets         horizontal 20        \"${FSharpStation.CurrentPath}\" FSharpStation.Snippets\r\n                    editorProperties vertical   0-100-100 snippet                   properties\r\n                    properties       div        \"\"        FSharpStation.Properties\r\n                    snippet          horizontal 35        Name                      FSharpStation.editor\r\n                    menu             span  \"\" btnLoad btnImport\r\n        \r\n                    btnSaveAs        button FSharpStation.SaveAs         \"class=btn ${FSharpStation.SaveNeeded}\" \"Save as...    \"\r\n                    btnAddDimension  button RuleEditor.AddDimension      \"\"                  \"Add Dimension \"\r\n                    btnDeleteSnippet button FSharpStation.RemoveSnippet  \"\"                  \"Delete Snippet\"\r\n                    btnIndentIn      button FSharpStation.IndentIn       \"\"                  \"Indent In  >> \"\r\n                    btnIndentOut     button FSharpStation.IndentOut      \"\"                  \"Indent Out << \"\r\n                    btnRunFS         button FSharpStation.RunFS          \"\"                  \"Run F#        \"\r\n                    btnAbortFsi      button FSharpStation.AbortFsi       \"\"                  \"Abort Fsi     \"\r\n        \r\n                    messagesLeft     wcomp-tabstrip                      \"\"                  Output FsCode\r\n                    messagesRight    wcomp-tabstrip                      \"\"                  Parser\r\n        \r\n                    Output           textarea  FSharpStation.Output      \"tabname=Output ; placeholder=Output messages ; spellcheck=false\" \r\n                    FsCode           textarea  FSharpStation.FsCode      \"tabname=F# Code; placeholder=F# Code         ; spellcheck=false\" \r\n                    Parser           textarea  FSharpStation.Parser      \"tabname=Parser ; placeholder=Parser messages; dblclick=${FSharpStation.JumpTo} ; spellcheck=false\" \r\n                    Name             Doc       InputLabel                \"\"     \"Name:\"        FSharpStation.SnippetName\r\n                    btnLoad          Doc       InputFile                 \"\"     \"Load File...\" FSharpStation.LoadFile  FileName\r\n                    btnImport        Doc       InputFile                 \"\"     \"Import...\"    FSharpStation.Import    \"\"\r\n                    FileName         div                                 \"class=form-control\"  FSharpStation.fileName\r\n                   ":m.textContent),LayoutEngineModule.newLyt(MainProgram.layoutName(),l)));
  a=(o=null,(v=MainProgram.layoutName(),o==null?v:o.$0));
  AppFramework.mainDocV().Set(a);
  b=(M=AppFramework.getMainDoc().f(),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"maincontent",
   $1:M
  }));
  p=Handler.CompleteHoles(b.k,b.h,[]);
  b.i=new TemplateInstance.New(p[1],Templates.RunFullDocTemplate(p[0]));
  View.Sink(function(t)
  {
   self.document.title=t;
  },MainProgram.titleV().get_View());
 };
 MainProgram.titleV=function()
 {
  SC$1.$cctor();
  return SC$1.titleV;
 };
 MainProgram.scrollToBottom=function(e,a)
 {
  var b;
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(100),function()
   {
    e.scrollTop=e.scrollHeight;
    return Concurrency.Zero();
   });
  })),null);
 };
 MainProgram.layoutName=function()
 {
  SC$1.$cctor();
  return SC$1.layoutName;
 };
 Server.content$338$54=function()
 {
  MainProgram.mainProgram();
  return Doc.TextNode("Initialized");
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1.rootdir="..\\website";
  SC$1.TemplatesFileName="..\\website"+"\\Templates.html";
  ((function($1)
  {
   return function($2)
   {
    return $1(Utils.toSafe($2));
   };
  }(function(s)
  {
   console.log(s);
  }))("..\\website\\Templates.html"));
  SC$1.types=new Dictionary.New$5();
  ClientCode.registerType("StackOverflow.fs"+"152",new C.New());
  ClientCode.registerType("StackOverflow.fs"+"153",new D.New());
  SC$1.layoutName="ProzperLyt";
  SC$1.titleV=Var$1.Create$1("Prozper");
 };
}());

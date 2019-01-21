(function()
{
 "use strict";
 var Global,WebSharper,Obj,FsRoot,StackOverflow,ClientCode,A,B,C,D,Client,EndPoint,SC$1,IntelliFactory,Runtime,UI,Doc,AttrProxy,Collections,FSharpMap,Seq,Dictionary;
 Global=self;
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 StackOverflow=FsRoot.StackOverflow=FsRoot.StackOverflow||{};
 ClientCode=StackOverflow.ClientCode=StackOverflow.ClientCode||{};
 A=ClientCode.A=ClientCode.A||{};
 B=ClientCode.B=ClientCode.B||{};
 C=ClientCode.C=ClientCode.C||{};
 D=ClientCode.D=ClientCode.D||{};
 Client=StackOverflow.Client=StackOverflow.Client||{};
 EndPoint=StackOverflow.EndPoint=StackOverflow.EndPoint||{};
 SC$1=Global.StartupCode$StackOverflow$StackOverflow=Global.StartupCode$StackOverflow$StackOverflow||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 UI=WebSharper&&WebSharper.UI;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpMap=Collections&&Collections.FSharpMap;
 Seq=WebSharper&&WebSharper.Seq;
 Dictionary=Collections&&Collections.Dictionary;
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
 EndPoint.Home={
  $:0
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1.types=new Dictionary.New$5();
  ClientCode.registerType("StackOverflow.fs"+"136",new C.New());
  ClientCode.registerType("StackOverflow.fs"+"137",new D.New());
 };
}());

//# sourceMappingURL=StackOverflow.map
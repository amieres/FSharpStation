CIPHERSpaceLoadFilesDoAfter(function() { IntelliFactory.Runtime.Start() });
CIPHERSpaceLoadFiles(["/Scripts/WebSharper/WebSharper.Core.JavaScript/Runtime.js", "/Scripts/WebSharper/WebSharper.Main.js", "/Scripts/WebSharper/WebSharper.Collections.js", "/Scripts/WebSharper/WebSharper.Web.js", "/Scripts/WebSharper/WebSharper.Sitelets.js", "/Scripts/WebSharper/WebSharper.Control.js", "/Scripts/WebSharper/WebSharper.UI.js", "/Scripts/WebSharper/WebSharper.UI.Templating.Runtime.js"], function()
{
 "use strict";
 var Global,FsRoot,LibraryJS,REGEX,TestingJS,CodeMirror,SC$1,WebSharper,Unchecked,Arrays,Strings,UI,Var$1,Doc,AttrProxy,View,List,Seq,Client,Templates,IntelliFactory,Runtime;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 REGEX=LibraryJS.REGEX=LibraryJS.REGEX||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 CodeMirror=TestingJS.CodeMirror=TestingJS.CodeMirror||{};
 SC$1=Global["StartupCode$D:\\Abe\\CIPHERWorkspace\\FSharpStation\\src\\wsconfig_json$testing"]=Global["StartupCode$D:\\Abe\\CIPHERWorkspace\\FSharpStation\\src\\wsconfig_json$testing"]||{};
 WebSharper=Global.WebSharper;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Arrays=WebSharper&&WebSharper.Arrays;
 Strings=WebSharper&&WebSharper.Strings;
 UI=WebSharper&&WebSharper.UI;
 Var$1=UI&&UI.Var$1;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 View=UI&&UI.View;
 List=WebSharper&&WebSharper.List;
 Seq=WebSharper&&WebSharper.Seq;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 REGEX.Identifier=function(a)
 {
  var $1,a$1,t;
  return(a$1=LibraryJS.REGEX$1("^[$a-zA-Z_][0-9a-zA-Z_\\.\\-$]*$","",a),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===1)&&($1=Arrays.get(a$1.$0,0),true)))?{
   $:1,
   $0:$1
  }:null;
 };
 REGEX.getEndWord=function(line,ch)
 {
  var a,t;
  a=LibraryJS.REGEX$1("^([a-zA-Z_]\\w*)","g",line.substring(ch));
  return a!=null&&a.$==1?(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1)?Arrays.get(a.$0,0):"":"";
 };
 REGEX.getStartWord=function(line,ch)
 {
  var a,t;
  a=LibraryJS.REGEX$1("([a-zA-Z_]\\w*)$","g",Strings.Substring(line,0,ch));
  return a!=null&&a.$==1?(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1)?Arrays.get(a.$0,0):"":"";
 };
 LibraryJS.rexGuid=function()
 {
  SC$1.$cctor();
  return SC$1.rexGuid;
 };
 LibraryJS.REGEX$1=function(expr,opt,value)
 {
  var m;
  if(value===null)
   return null;
  else
   try
   {
    m=(new Global.String(value)).match(new Global.RegExp(expr,opt));
    return Unchecked.Equals(m,null)?null:!Unchecked.Equals(m,null)&&m.length===0?null:{
     $:1,
     $0:m
    };
   }
   catch(e)
   {
    return null;
   }
 };
 CodeMirror.main=function()
 {
  var rexV,parmsV,inputV,x,a;
  rexV=Var$1.Create$1("(Err|Warn|Info) \\((\\d+)\\,\\s*(\\d+)\\) - \\((\\d+)\\,\\s*(\\d+)\\)\\: \"([^\"]+?)\"\\.");
  parmsV=Var$1.Create$1("g");
  inputV=Var$1.Create$1("Err (1, 7) - (1, 12): \"This shows over there as an error\".\nWarn (2, 7) - (2, 12): \"This shows over there as a warning\".\nInfo (3, 7) - (3, 12): \"This shows over there as information\".");
  x=Doc.Element("div",[],[Doc.Element("div",[],[Doc.Element("div",[],[Doc.TextNode("RegEx:")]),Doc.InputArea([AttrProxy.Create("style","width: 1000px; height:80px "),AttrProxy.Create("id","regex")],Var$1.Lens(rexV,Global.id,function($1,$2)
  {
   return $2;
  }))]),Doc.Element("div",[],[Doc.TextNode("Options: "),Doc.Input([AttrProxy.Create("style","width: 700px"),AttrProxy.Create("id","parms")],Var$1.Lens(parmsV,Global.id,function($1,$2)
  {
   return $2;
  }))]),Doc.Element("div",[],[Doc.Element("div",[],[Doc.TextNode("Input:")]),Doc.InputArea([AttrProxy.Create("style","width: 1000px; height:80px "),AttrProxy.Create("id","input")],Var$1.Lens(inputV,Global.id,function($1,$2)
  {
   return $2;
  }))]),Doc.Element("div",[],[Doc.BindView(Global.id,View.Map3(function(inp,rx,opt)
  {
   return Doc.Element("ul",[],List.ofSeq(Seq.delay(function()
   {
    var a$1,f,g,a$2;
    function g$1(v)
    {
     return List.ofArray([v]);
    }
    a$1=LibraryJS.REGEX$1(rx,opt,inp);
    return a$1!=null&&a$1.$==1?Arrays.map((f=function(x$1)
    {
     return g$1(Doc.TextNode(x$1));
    },(g=(a$2=List.T.Empty,function(c)
    {
     return Doc.Element("li",a$2,c);
    }),function(x$1)
    {
     return g(f(x$1));
    })),a$1.$0):[Doc.TextNode("<no match>")];
   })));
  },inputV.get_View(),rexV.get_View(),parmsV.get_View()))])]);
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x);
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
 };
 Runtime.OnLoad(function()
 {
  CodeMirror.main();
 });
});
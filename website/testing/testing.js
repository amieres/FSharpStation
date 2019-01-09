CIPHERSpaceLoadFilesDoAfter(function() { IntelliFactory.Runtime.Start() });
CIPHERSpaceLoadFiles(["/Scripts/WebSharper/WebSharper.Core.JavaScript/Runtime.js", "/Scripts/WebSharper/WebSharper.Main.js", "/Scripts/WebSharper/WebSharper.Collections.js", "/Scripts/WebSharper/WebSharper.Web.js", "/Scripts/WebSharper/WebSharper.Sitelets.js", "/Scripts/WebSharper/WebSharper.Control.js", "/Scripts/WebSharper/WebSharper.UI.js", "/Scripts/WebSharper/WebSharper.UI.Templating.Runtime.js"], function()
{
 "use strict";
 var Global,FsRoot,Library,LibraryJS,REGEX,WebSharper,Obj,TestingJS,WasmFscServices,WorkerEvent,SC$1,CancellationTokenSource,Concurrency,Unchecked,Arrays,Strings,IntelliFactory,Runtime,Seq,List,UI,Doc,AttrProxy,Var$1,Utils,console,View,Client,Templates;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 REGEX=LibraryJS.REGEX=LibraryJS.REGEX||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 WasmFscServices=TestingJS.WasmFscServices=TestingJS.WasmFscServices||{};
 WorkerEvent=WasmFscServices.WorkerEvent=WasmFscServices.WorkerEvent||{};
 SC$1=Global["StartupCode$D:\\Abe\\CIPHERWorkspace\\FSharpStation\\src\\wsconfig_json$testing"]=Global["StartupCode$D:\\Abe\\CIPHERWorkspace\\FSharpStation\\src\\wsconfig_json$testing"]||{};
 CancellationTokenSource=WebSharper&&WebSharper.CancellationTokenSource;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Arrays=WebSharper&&WebSharper.Arrays;
 Strings=WebSharper&&WebSharper.Strings;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Seq=WebSharper&&WebSharper.Seq;
 List=WebSharper&&WebSharper.List;
 UI=WebSharper&&WebSharper.UI;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 Var$1=UI&&UI.Var$1;
 Utils=WebSharper&&WebSharper.Utils;
 console=Global.console;
 View=UI&&UI.View;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Library.delayed=function(delay,doF)
 {
  var cancellationTokenSourceO;
  cancellationTokenSourceO=[null];
  return function(parm)
  {
   var o,b;
   o=cancellationTokenSourceO[0];
   o==null?void 0:o.$0.Cancel$1();
   cancellationTokenSourceO[0]={
    $:1,
    $0:new CancellationTokenSource.New()
   };
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(delay),function()
    {
     doF(parm);
     return Concurrency.Zero();
    });
   })),{
    $:1,
    $0:cancellationTokenSourceO[0].$0
   });
  };
 };
 Library.Error=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
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
 WorkerEvent=WasmFscServices.WorkerEvent=Runtime.Class({},Obj,WorkerEvent);
 WorkerEvent.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },WorkerEvent);
 WasmFscServices.main=function()
 {
  var rexV,parmsV,inputV,inputsV,ww,x,x$1,a;
  function startParseFile(v)
  {
   var o;
   function a$2(a$3,a$4)
   {
    o[a$3]=a$4;
   }
   o={};
   Seq.iter(function($1)
   {
    return a$2($1[0],$1[1]);
   },List.ofArray([["message","parseFile"],["text",v]]));
   ww.postMessage(o);
  }
  function a$1(inp,rx,opt)
  {
   return Doc.Element("ul",[AttrProxy.Create("id","output")],List.ofSeq(Seq.delay(function()
   {
    var a$2,f,g,a$3;
    function g$1(v)
    {
     return List.ofArray([v]);
    }
    a$2=LibraryJS.REGEX$1(rx,opt,inp);
    return a$2!=null&&a$2.$==1?Arrays.map((f=function(x$2)
    {
     return g$1(Doc.TextNode(x$2));
    },(g=(a$3=List.T.Empty,function(c)
    {
     return Doc.Element("li",a$3,c);
    }),function(x$2)
    {
     return g(f(x$2));
    })),a$2.$0):[Doc.TextNode("<no match>")];
   })));
  }
  rexV=Var$1.Create$1("(Err|Warn|Info) \\((\\d+)\\,\\s*(\\d+)\\) - \\((\\d+)\\,\\s*(\\d+)\\)\\: \"([^\"]+?)\"\\.");
  parmsV=Var$1.Create$1("g");
  inputV=Var$1.Create$1("Err (1, 7) - (1, 12): \"This shows over there as an error\".\nWarn (2, 7) - (2, 12): \"This shows over there as a warning\".\nInfo (3, 7) - (3, 12): \"This shows over there as information\".");
  inputsV=Var$1.Create$1(["","",""]);
  ww=new Global.Worker("/WASM/FscServices/FscServicesWorker.js");
  ((function($1)
  {
   return function($2)
   {
    return $1(Utils.prettyPrint($2));
   };
  }(function(s)
  {
   console.log(s);
  }))(ww));
  ww.onmessage=function(ev)
  {
   ((function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(function(s)
   {
    console.log(s);
   }))(ev.data));
   return ev.data.message==="listDir"?(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(function(s)
   {
    console.log(s);
   }))(ev.data.dir):null;
  };
  View.Sink(function(txt)
  {
   startParseFile(txt);
  },inputV.get_View());
  x=View.Map3(function(inp,rx,opt)
  {
   return[inp,rx,opt];
  },inputV.get_View(),rexV.get_View(),parmsV.get_View());
  View.Sink(Library.delayed(180,function(a$2)
  {
   inputsV.Set(a$2);
  }),x);
  x$1=Doc.Element("div",[],[Doc.Element("div",[],[Doc.Element("div",[],[Doc.TextNode("RegEx:")]),Doc.InputArea([AttrProxy.Create("style","width: 1000px; height:80px "),AttrProxy.Create("id","regex")],Var$1.Lens(rexV,Global.id,function($1,$2)
  {
   return $2;
  }))]),Doc.Element("div",[],[Doc.TextNode("Options: "),Doc.Input([AttrProxy.Create("style","width: 700px"),AttrProxy.Create("id","parms")],Var$1.Lens(parmsV,Global.id,function($1,$2)
  {
   return $2;
  }))]),Doc.Element("div",[],[Doc.Element("div",[],[Doc.TextNode("Input:")]),Doc.InputArea([AttrProxy.Create("style","width: 1000px; height:80px "),AttrProxy.Create("id","input")],Var$1.Lens(inputV,Global.id,function($1,$2)
  {
   return $2;
  }))]),Doc.Element("div",[],[Doc.BindView(Global.id,View.Map(function($1)
  {
   return a$1($1[0],$1[1],$1[2]);
  },inputsV.get_View()))])]);
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x$1);
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
 };
 Runtime.OnLoad(function()
 {
  WasmFscServices.main();
 });
});
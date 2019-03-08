(function()
{
 "use strict";
 var Global,FsRoot,Library,ParseO,LibraryJS,Date,TestingJS,Date$1,SC$1,WebSharper,Utils,console,IntelliFactory,Runtime,Seq,UI,Doc,List,Client,Templates,DateUtil,Numeric,System,Guid,Unchecked;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Date=LibraryJS.Date=LibraryJS.Date||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 Date$1=TestingJS.Date=TestingJS.Date||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 WebSharper=Global.WebSharper;
 Utils=WebSharper&&WebSharper.Utils;
 console=Global.console;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Seq=WebSharper&&WebSharper.Seq;
 UI=WebSharper&&WebSharper.UI;
 Doc=UI&&UI.Doc;
 List=WebSharper&&WebSharper.List;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 System=Global.System;
 Guid=System&&System.Guid;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 ParseO.Guid=function()
 {
  SC$1.$cctor();
  return SC$1["|Guid|_|"];
 };
 ParseO.Double=function()
 {
  SC$1.$cctor();
  return SC$1["|Double|_|"];
 };
 ParseO.Single=function()
 {
  SC$1.$cctor();
  return SC$1["|Single|_|"];
 };
 ParseO.Int=function()
 {
  SC$1.$cctor();
  return SC$1["|Int|_|"];
 };
 ParseO.Date=function()
 {
  SC$1.$cctor();
  return SC$1["|Date|_|"];
 };
 ParseO.parseGuidO=function()
 {
  SC$1.$cctor();
  return SC$1.parseGuidO;
 };
 ParseO.parseDoubleO=function()
 {
  SC$1.$cctor();
  return SC$1.parseDoubleO;
 };
 ParseO.parseSingleO=function()
 {
  SC$1.$cctor();
  return SC$1.parseSingleO;
 };
 ParseO.parseIntO=function()
 {
  SC$1.$cctor();
  return SC$1.parseIntO;
 };
 ParseO.parseDateO=function()
 {
  SC$1.$cctor();
  return SC$1.parseDateO;
 };
 ParseO.parseDateO2=function()
 {
  SC$1.$cctor();
  return SC$1.parseDateO2;
 };
 ParseO.tryParseWith=function(tryParseFunc)
 {
  function g($1,$2)
  {
   return $1?{
    $:1,
    $0:$2
   }:null;
  }
  return function(x)
  {
   return g.apply(null,tryParseFunc(x));
  };
 };
 Library.print=function(v)
 {
  if(typeof v=="string")
   ((function($1)
   {
    return function($2)
    {
     return $1(Utils.toSafe($2));
    };
   }(function(s)
   {
    console.log(s);
   }))(v));
  else
   ((function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(function(s)
   {
    console.log(s);
   }))(v));
 };
 Library.Error=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 Date.toYYYYMMDD=function(sep,date)
 {
  return((((((Runtime.Curried(function($1,$2,$3,$4,$5,$6)
  {
   return $1(Global.String($2)+Utils.toSafe($3)+Utils.padNumLeft(Global.String($4),2)+Utils.toSafe($5)+Utils.padNumLeft(Global.String($6),2));
  },6))(Global.id))((new Global.Date(date)).getFullYear()))(sep))((new Global.Date(date)).getMonth()+1))(sep))((new Global.Date(date)).getDate());
 };
 Date$1.main=function()
 {
  var results,x,a;
  function m(name,f)
  {
   var $1;
   try
   {
    $1={
     $:0,
     $0:f()
    };
   }
   catch(e)
   {
    $1=((function($2)
    {
     return function($3)
     {
      return $2(Utils.prettyPrint($3));
     };
    }(function(s)
    {
     console.log(s);
    }))(e),{
     $:1,
     $0:e
    });
   }
   return[name,$1];
  }
  results=Seq.map(function($1)
  {
   return m($1[0],$1[1]);
  },Date$1.testCases());
  x=Doc.Element("div",[],[Doc.Element("h1",[],[Doc.TextNode("parseDateO2")]),Doc.Element("h3",[],[Doc.TextNode("Test Cases")]),Doc.Element("h4",[],[Doc.TextNode((((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("Passed: "+Global.String($2)+"/"+Global.String($3));
  }))(Global.id))(Seq.sumBy(function(a$1)
  {
   var c;
   c=a$1[1];
   return c.$==0?c.$0?1:0:0;
  },results)))(Seq.length(results)))]),Doc.Element("table",[],List.ofSeq(Seq.delay(function()
  {
   return Seq.mapi(function(i,t)
   {
    var r;
    r=t[1];
    return Doc.Element("tr",[],[Doc.Element("td",[],[Doc.TextNode((function($1)
    {
     return function($2)
     {
      return $1(Global.String($2)+".- ");
     };
    }(Global.id))(i+1))]),Doc.Element("td",[],[Doc.TextNode(t[0])]),Doc.Element("td",[],[Doc.TextNode(":")]),Doc.Element("td",[],[Doc.TextNode(r.$==1?r.$0.message:Global.String(r.$0))])]);
   },results);
  })))]);
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x);
 };
 Date$1.testCases=function()
 {
  SC$1.$cctor();
  return SC$1.testCases;
 };
 SC$1.$cctor=function()
 {
  var g;
  SC$1.$cctor=Global.ignore;
  function f(s)
  {
   return s+"T00:00:00";
  }
  SC$1.parseDateO2=(g=ParseO.tryParseWith(function(a)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a),m!=null&&m.$==1&&(o=m.$0,true)),o];
  }),function(x)
  {
   return g(f(x));
  });
  SC$1.parseDateO=ParseO.tryParseWith(function(a)
  {
   var o,m;
   o=0;
   return[(m=DateUtil.TryParse(a),m!=null&&m.$==1&&(o=m.$0,true)),o];
  });
  SC$1.parseIntO=ParseO.tryParseWith(function(a)
  {
   var o;
   o=0;
   return[Numeric.TryParseInt32(a,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o];
  });
  SC$1.parseSingleO=ParseO.tryParseWith(function(a)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a),Global.isNaN($1)?false:(o=$1,true)),o];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith(function(a)
  {
   var o,$1;
   o=0;
   return[($1=Global.Number(a),Global.isNaN($1)?false:(o=$1,true)),o];
  });
  SC$1.parseGuidO=ParseO.tryParseWith(function(a)
  {
   var o;
   o=null;
   return[Guid.TryParse(a,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o];
  });
  SC$1["|Date|_|"]=ParseO.parseDateO();
  SC$1["|Int|_|"]=ParseO.parseIntO();
  SC$1["|Single|_|"]=ParseO.parseSingleO();
  SC$1["|Double|_|"]=ParseO.parseDoubleO();
  SC$1["|Guid|_|"]=ParseO.parseGuidO();
  SC$1.testCases=List.ofArray([["DateTime(Y,M,D)",function()
  {
   var v,v$1;
   return Unchecked.Equals((v=(ParseO.parseDateO2())("2019-03-08"),(Library.print(v),v)),{
    $:1,
    $0:(v$1=(new Global.Date(2019,3-1,8)).getTime(),(Library.print(v$1),v$1))
   });
  }],["toYYYYMMDD roundtrip",function()
  {
   var v,o,v$1;
   return Unchecked.Equals((v=(o=(v$1=(ParseO.parseDateO2())("2019-03-08"),(Library.print(v$1),v$1)),o==null?null:{
    $:1,
    $0:Date.toYYYYMMDD("-",o.$0)
   }),(Library.print(v),v)),{
    $:1,
    $0:"2019-03-08"
   });
  }]]);
 };
 Runtime.OnLoad(function()
 {
  Date$1.main();
 });
}());

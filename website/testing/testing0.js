(function()
{
 "use strict";
 var Global,FsRoot,Library,String,LibraryJS,Pojo,WebSharper,Obj,Msal,User,UserAgentApplication,TestingJS,Msal$1,Policy,SC$1,testing_GeneratedPrintf,Strings,Slice,Seq,Arrays,Char,List,Unchecked,IntelliFactory,Runtime,Concurrency,console,JavaScript,Promise,UI,View,AttrModule,Doc,AttrProxy,Utils,JS,Client,Templates,Var$1;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 String=Library.String=Library.String||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Pojo=LibraryJS.Pojo=LibraryJS.Pojo||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 Msal=LibraryJS.Msal=LibraryJS.Msal||{};
 User=Msal.User=Msal.User||{};
 UserAgentApplication=Msal.UserAgentApplication=Msal.UserAgentApplication||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 Msal$1=TestingJS.Msal=TestingJS.Msal||{};
 Policy=Msal$1.Policy=Msal$1.Policy||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 testing_GeneratedPrintf=Global.testing_GeneratedPrintf=Global.testing_GeneratedPrintf||{};
 Strings=WebSharper&&WebSharper.Strings;
 Slice=WebSharper&&WebSharper.Slice;
 Seq=WebSharper&&WebSharper.Seq;
 Arrays=WebSharper&&WebSharper.Arrays;
 Char=WebSharper&&WebSharper.Char;
 List=WebSharper&&WebSharper.List;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 console=Global.console;
 JavaScript=WebSharper&&WebSharper.JavaScript;
 Promise=JavaScript&&JavaScript.Promise;
 UI=WebSharper&&WebSharper.UI;
 View=UI&&UI.View;
 AttrModule=UI&&UI.AttrModule;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 Utils=WebSharper&&WebSharper.Utils;
 JS=JavaScript&&JavaScript.JS;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Var$1=UI&&UI.Var$1;
 String.EndsWith=function(ends,s)
 {
  return Strings.EndsWith(s,ends)?{
   $:1,
   $0:Slice.string(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:s.length-ends.length-1
   })
  }:null;
 };
 String.StartsWith=function(start,s)
 {
  return Strings.StartsWith(s,start)?{
   $:1,
   $0:Slice.string(s,{
    $:1,
    $0:start.length
   },null)
  }:null;
 };
 String.skipLastLine=function()
 {
  SC$1.$cctor();
  return SC$1.skipLastLine;
 };
 String.indentStr=function(i)
 {
  function f(s)
  {
   return String.indent(i,s);
  }
  function g(s)
  {
   return Strings.concat("\n",s);
  }
  return function(x)
  {
   return g(f(x));
  };
 };
 String.unindentStr=function()
 {
  SC$1.$cctor();
  return SC$1.unindentStr;
 };
 String.indent=function(n,s)
 {
  var x,x$1;
  x=Strings.SplitChars(s,["\n"],0);
  return Seq.map((x$1=Strings.replicate(n," "),function(y)
  {
   return x$1+y;
  }),x);
 };
 String.unindent=function(s)
 {
  var lines,n,o,o$1;
  lines=Strings.SplitChars(s,["\n"],0);
  n=(o=Seq.tryFindIndex(function(y)
  {
   return" "!==y;
  },(o$1=Seq.tryFind(function(l)
  {
   return Strings.Trim(l)!=="";
  },lines),o$1==null?"":o$1.$0)),o==null?0:o.$0);
  return Seq.filter(function(s$1)
  {
   return!Strings.StartsWith(s$1,"# 1 ");
  },Seq.map(function(l)
  {
   return l.length<=n?"":l.substring(n);
  },lines));
 };
 String.skipFirstLine=function(txt)
 {
  var i;
  i=txt.indexOf("\n");
  return i<0?"":Slice.string(txt,{
   $:1,
   $0:i+1
  },null);
 };
 String.append=function(a,b)
 {
  return a+b;
 };
 String.trim=function(s)
 {
  return Strings.Trim(s);
 };
 String.contains=function(sub,whole)
 {
  return whole.indexOf(sub)!=-1;
 };
 String.delimitedO=function(op,cl,txt)
 {
  var o,$1,bef,o$1,$2;
  o=String.splitInTwoO(op,txt);
  return o==null?null:($1=o.$0,(bef=$1[0],(o$1=String.splitInTwoO(cl,$1[1]),o$1==null?null:{
   $:1,
   $0:($2=o$1.$0,[bef,$2[0],$2[1]])
  })));
 };
 String.splitInTwoO=function(spl,txt)
 {
  var i;
  i=txt.indexOf(spl);
  return i===-1?null:{
   $:1,
   $0:[Library["String.Left"](txt,i),txt.substring(i+spl.length)]
  };
 };
 String.splitByChar=function(c,s)
 {
  return Strings.SplitChars(s,[c],0);
 };
 Library["String.get_toUnderscore"]=function(_this,u)
 {
  return Arrays.ofSeq(Seq.collect(Global.id,Seq.mapi(function(i,c)
  {
   return i>0&&Char.IsUpper(c)?List.ofArray(["_",c]):List.ofArray([c]);
  },_this))).join("");
 };
 Library["String.Right"]=function(_this,n)
 {
  var a,b;
  return Library["String.Substring2"](_this,(a=0,(b=_this.length-n,Unchecked.Compare(a,b)===1?a:b)),_this.length);
 };
 Library["String.Left"]=function(_this,n)
 {
  return n<0?Library["String.Substring2"](_this,0,_this.length+n):Library["String.Substring2"](_this,0,n);
 };
 Library["String.Substring2"]=function(_this,from,n)
 {
  var from$1,b;
  while(true)
   {
    if(n<=0)
     return"";
    else
     if(from<0)
      {
       from$1=from;
       from=0;
       n=n+from$1;
      }
     else
      return from>=_this.length?"":Strings.Substring(_this,from,(b=_this.length-from,Unchecked.Compare(n,b)===-1?n:b));
   }
 };
 Library.Error=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 Pojo.newPojoOpt=function(propOs)
 {
  function c(n,vO)
  {
   return vO==null?null:{
    $:1,
    $0:[n,vO.$0]
   };
  }
  return Pojo.newPojo(Seq.choose(function($1)
  {
   return c($1[0],$1[1]);
  },propOs));
 };
 Pojo.newPojo=function(props)
 {
  var pojo,f;
  function f$1(a,a$1)
  {
   return function(p)
   {
    return Pojo.addProp(a,a$1,p);
   };
  }
  function g(v)
  {
  }
  pojo={};
  Seq.iter((f=function(b)
  {
   return(function($1)
   {
    return f$1($1[0],$1[1]);
   }(b))(pojo);
  },function(x)
  {
   return g(f(x));
  }),props);
  return pojo;
 };
 Pojo.addProp=function(p,p$1,pojo)
 {
  pojo[p]=p$1;
  return pojo;
 };
 User=Msal.User=Runtime.Class({},Obj,User);
 User.New=Runtime.Ctor(function(displayableId,name,identityProvider,userIdentifier,idToken,sid)
 {
  Obj.New.call(this);
 },User);
 UserAgentApplication.Options=function(cacheLocation,isAngular,loadFrameTimeout,logger,navigateToLoginRequestUrl,postLogoutRedirectUri,protectedResourceMap,redirectUri,state,storeAuthStateInCookie,unprotectedResources,validateAuthority)
 {
  return Pojo.newPojoOpt([Msal.op_EqualsEqualsGreater("cacheLocation",cacheLocation),Msal.op_EqualsEqualsGreater("isAngular",isAngular),Msal.op_EqualsEqualsGreater("loadFrameTimeout",loadFrameTimeout),Msal.op_EqualsEqualsGreater("logger",logger),Msal.op_EqualsEqualsGreater("navigateToLoginRequestUrl",navigateToLoginRequestUrl),Msal.op_EqualsEqualsGreater("postLogoutRedirectUri",postLogoutRedirectUri),Msal.op_EqualsEqualsGreater("protectedResourceMap",protectedResourceMap),Msal.op_EqualsEqualsGreater("redirectUri",redirectUri),Msal.op_EqualsEqualsGreater("state",state),Msal.op_EqualsEqualsGreater("storeAuthStateInCookie",storeAuthStateInCookie),Msal.op_EqualsEqualsGreater("unprotectedResources",unprotectedResources),Msal.op_EqualsEqualsGreater("validateAuthority",validateAuthority)]);
 };
 Msal.op_EqualsEqualsGreater=function(n,vO)
 {
  return[n,vO==null?null:{
   $:1,
   $0:vO.$0
  }];
 };
 Policy=Msal$1.Policy=Runtime.Class({
  toString:function()
  {
   return Strings.ReplaceChar(Library["String.get_toUnderscore"]((function($1)
   {
    return function($2)
    {
     return $1(testing_GeneratedPrintf.p($2));
    };
   }(Global.id))(this)),"_"," ");
  }
 },null,Policy);
 Policy.ResetPassword=new Policy({
  $:3
 });
 Policy.EditProfile=new Policy({
  $:2
 });
 Policy.SignUp=new Policy({
  $:1
 });
 Policy.SignIn=new Policy({
  $:0
 });
 Policy.Parse=function(txt)
 {
  var m;
  m=Strings.Replace(txt," ","");
  return m==="SignUp"?Policy.SignUp:m==="EditProfile"?Policy.EditProfile:m==="ResetPassword"?Policy.ResetPassword:Policy.SignIn;
 };
 Msal$1.main$517$45=function()
 {
  return function()
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Combine(Concurrency.While(function()
    {
     return!self.Msal;
    },Concurrency.Delay(function()
    {
     return Concurrency.Bind(Concurrency.Sleep(50),function()
     {
      return Concurrency.Return(null);
     });
    })),Concurrency.Delay(function()
    {
     Msal$1.ui();
     return Concurrency.Zero();
    }));
   })),null);
  };
 };
 Msal$1.main=function()
 {
  SC$1.$cctor();
  return SC$1.main;
 };
 Msal$1.ui=function()
 {
  var DoNotShowUI,loginMessageDoc,b,signInW,signUpW,editProfileW,resetPasswordW,doc,_var,ops,elem,b$1,parent;
  function checkUser()
  {
   var a,o,m;
   a=(o=Msal$1.agentO().Get(),o==null?null:(m=o.$0.getUser(),Unchecked.Equals(m,null)?null:{
    $:1,
    $0:m
   }));
   Msal$1.userO().Set(a);
  }
  function executePolicy(f)
  {
   var m,agent,b$2;
   m=Msal$1.agentO().Get();
   m!=null&&m.$==1?(agent=m.$0,Concurrency.Start((b$2=null,Concurrency.Delay(function()
   {
    var promise;
    promise=(f(agent))([null,Msal$1.extraQueryParms().Get()]);
    return Unchecked.Equals(promise,null)?(function($1)
    {
     return $1("No promise?");
    }(function(s)
    {
     console.log(s);
    }),Concurrency.Zero()):Concurrency.Bind(Promise.AsAsync(promise),function(a)
    {
     Msal$1.token().Set(a);
     checkUser();
     return Concurrency.Zero();
    });
   })),null)):void 0;
  }
  function executeRedirect()
  {
   executePolicy(function(agent)
   {
    return function(t)
    {
     return agent.loginRedirect(t[0],t[1]);
    };
   });
  }
  function logout()
  {
   var o;
   o=Msal$1.agentO().Get();
   o==null?void 0:o.$0.logout();
   checkUser();
  }
  function createAgent()
  {
   var a,clientId,authority,options;
   function tokenReceivedCallback(e,t,e$1,t$1,s)
   {
    Msal$1.callback(e,t,e$1,t$1,s);
   }
   a={
    $:1,
    $0:(clientId=Msal$1.localTestingApp().Get(),(authority=Msal$1.authority().Get(),(options=UserAgentApplication.Options(null,null,null,null,{
     $:1,
     $0:true
    },null,null,null,{
     $:1,
     $0:Msal$1.ref().Get()
    },{
     $:1,
     $0:false
    },null,{
     $:1,
     $0:false
    }),new self.Msal.UserAgentApplication(clientId,authority,function($1)
    {
     return tokenReceivedCallback($1[0],$1[1],$1[2],$1[3],$1[4]);
    },options))))
   };
   Msal$1.agentO().Set(a);
   Msal$1.storage().setItem("Editing","");
   Msal$1.storage().getItem("logoutFirst")==="1"?(Msal$1.storage().setItem("logoutFirst",""),executeRedirect()):void 0;
   checkUser();
  }
  function enableAtt(w)
  {
   var view;
   view=View.Const("");
   return AttrModule.DynamicPred("disabled",View.Map(function(v)
   {
    return!v;
   },w),view);
  }
  function enabledV()
  {
   return enableAtt(View.Map(function($1)
   {
    return Unchecked.Equals($1,null);
   },Msal$1.agentO().get_View()));
  }
  function disabledV()
  {
   return enableAtt(View.Map(function($1)
   {
    return!Unchecked.Equals($1,null);
   },Msal$1.agentO().get_View()));
  }
  function row0(attO1,elem1,attO2,elem2)
  {
   var o,o$1;
   return Doc.Element("tr",[],[Doc.Element("td",(o=attO1==null?null:{
    $:1,
    $0:List.ofArray([attO1.$0])
   },o==null?List.T.Empty:o.$0),[elem1]),Doc.Element("td",(o$1=attO2==null?null:{
    $:1,
    $0:List.ofArray([attO2.$0])
   },o$1==null?List.T.Empty:o$1.$0),[elem2])]);
  }
  function input0(lbl,_var$1)
  {
   return row0({
    $:1,
    $0:AttrProxy.Create("style","text-align:right; width: 20%")
   },lbl,null,Doc.Input([enabledV(),AttrProxy.Create("style","width: 95%")],_var$1));
  }
  function input(lbl,_var$1)
  {
   return input0(Doc.Element("label",[],[Doc.TextNode(lbl+":")]),_var$1);
  }
  function tableObject(p,o)
  {
   return Doc.Element("table",[],[Doc.Element("tbody",[],List.ofSeq(Seq.delay(function()
   {
    function m(n,v)
    {
     return Doc.Element("tr",[],[Doc.Element("td",[],[Doc.Element("b",[],[Doc.TextNode(n)])]),Doc.Element("td",[],[Doc.TextNode((function($1)
     {
      return function($2)
      {
       return $1(Utils.prettyPrint($2));
      };
     }(Global.id))(v))])]);
    }
    return Seq.map(function($1)
    {
     return m($1[0],$1[1]);
    },Seq.filter(p,JS.GetFields(o)));
   })))]);
  }
  function buttonV(txt,enabled,act)
  {
   var b$2;
   return Doc.BindView(Global.id,(b$2=View.get_Do(),View.Bind(function(a)
   {
    return View.Const(Doc.Button(a+" "+txt,[enabled?enabledV():disabledV()],act));
   },Msal$1.policyType().get_View())));
  }
  function buttonP(policy,enabledW,act)
  {
   return Doc.Button(Global.String(policy)+" Policy: ",[enableAtt(enabledW)],act);
  }
  function checkbox(txt,_var$1)
  {
   return Doc.Element("span",[],[Doc.TextNode(txt),Doc.CheckBox([],_var$1)]);
  }
  function setAndRunPolicy(logoutFirst,policy)
  {
   var b$2;
   return Concurrency.Start((b$2=null,Concurrency.Delay(function()
   {
    Msal$1.policyTypeT().Set(policy);
    return Concurrency.Bind(View.GetAsync(Msal$1.authorityW()),function()
    {
     createAgent();
     return logoutFirst?(Msal$1.storage().setItem("logoutFirst","1"),logout(),Concurrency.Zero()):(executeRedirect(),Concurrency.Zero());
    });
   })),null);
  }
  DoNotShowUI=Msal$1.storage().getItem("logoutFirst")==="1"&&Msal$1.storage().getItem("Editing")!=="1"&&Msal$1.createOnStartB().Get();
  Msal$1.storage().getItem("Editing")!=="1"&&Msal$1.createOnStartB().Get()?createAgent():void 0;
  loginMessageDoc=Doc.BindView(Global.id,(b=View.get_Do(),View.Bind(function(a)
  {
   return View.Bind(function(a$1)
   {
    return View.Bind(function(a$2)
    {
     var o,user,$1,greeting,v;
     greeting=Doc.Element("h3",List.T.Empty,[Doc.TextNode((o=a==null?null:{
      $:1,
      $0:(user=a.$0,(((Runtime.Curried3(function($2,$3,$4)
      {
       return $2("Hello "+Utils.toSafe($3)+" "+Utils.toSafe($4)+".");
      }))(Global.id))(user.idToken.given_name))(user.idToken.family_name))
     },o==null?"":o.$0))]);
     switch(a$1==null?0:a==null?a$2.$==1?3:a$2.$==2?4:($1=a$2,5):a$2.$==0?1:a$2.$==1?2:($1=a$2,5))
     {
      case 0:
       return View.Const(Doc.TextNode("Select your options and click on <Create Agent>."));
      case 1:
       return View.Const(greeting);
      case 2:
       return View.Const(Doc.Concat(List.ofArray([greeting,Doc.TextNode(function($2)
       {
        return $2("To Sign Up click on <Logout> first!");
       }(Global.id))])));
      case 3:
       return View.Const(Doc.TextNode(function($2)
       {
        return $2("To Sign Up make sure to have clicked on <Logout> first and then click on Sign Up Popup or Redirect!");
       }(Global.id)));
      case 4:
       return View.Const(Doc.TextNode(function($2)
       {
        return $2("Sign In before invoking Edit Profile!");
       }(Global.id)));
      case 5:
       v=Global.String($1);
       return View.Const(Doc.Concat(List.ofArray([greeting,Doc.TextNode(((((Runtime.Curried(function($2,$3,$4,$5)
       {
        return $2("To "+Utils.toSafe($3)+" click on <"+Utils.toSafe($4)+" Popup> or <"+Utils.toSafe($5)+" Redirect>.");
       },4))(Global.id))(v))(v))(v))])));
     }
    },Msal$1.policyTypeT().get_View());
   },Msal$1.agentO().get_View());
  },Msal$1.userO().get_View())));
  signInW=View.Map2(function($1,$2)
  {
   return $1!=null&&$2==null;
  },Msal$1.agentO().get_View(),Msal$1.userO().get_View());
  signUpW=View.Map2(function($1,$2)
  {
   return $1!=null&&$2==null;
  },Msal$1.agentO().get_View(),Msal$1.userO().get_View());
  editProfileW=View.Map2(function($1,$2)
  {
   return $1!=null&&$2!=null;
  },Msal$1.agentO().get_View(),Msal$1.userO().get_View());
  resetPasswordW=View.Map(function($1)
  {
   return $1!=null;
  },Msal$1.agentO().get_View());
  doc=Doc.Element("div",[],[Doc.Element("h1",[],[Doc.TextNode((function($1)
  {
   return function($2)
   {
    return $1("Msal.js "+Utils.toSafe($2)+" (Microsoft authentication library)");
   };
  }(Global.id))(Msal$1.version()))]),Doc.Element("br",[],[]),Doc.Element("table",[],[Doc.Element("tbody",[],[row0(null,Doc.Button("Create Agent",[enabledV()],createAgent),null,checkbox("Create on Start",Msal$1.createOnStartB())),row0(null,Doc.Button("Edit",[disabledV()],function()
  {
   if(Msal$1.refreshBeforeB().Get())
    {
     Msal$1.storage().setItem("Editing","1");
     self.location.reload();
    }
   else
    Msal$1.agentO().Set(null);
  }),null,checkbox("Refresh before Edit",Msal$1.refreshBeforeB()))])]),Doc.Element("br",[],[]),Doc.Element("table",[AttrProxy.Create("style","width: 95%")],[Doc.Element("tbody",[],[input("App Id",Msal$1.localTestingApp()),input("tenant Name",Msal$1.tenantName()),input("ref/state",Msal$1.ref()),input("extra query parameters",Msal$1.extraQueryParms()),input0(buttonP(Policy.SignIn,signInW,function()
  {
   setAndRunPolicy(Msal$1.forceLoginB().Get(),Policy.SignIn);
  }),Msal$1.signInPolicy()),input0(buttonP(Policy.SignUp,signUpW,function()
  {
   setAndRunPolicy(true,Policy.SignUp);
  }),Msal$1.signUpPolicy()),input0(buttonP(Policy.EditProfile,editProfileW,function()
  {
   setAndRunPolicy(false,Policy.EditProfile);
  }),Msal$1.editProfilePolicy()),input0(buttonP(Policy.ResetPassword,resetPasswordW,function()
  {
   setAndRunPolicy(false,Policy.ResetPassword);
  }),Msal$1.resetPasswordPolicy()),Doc.Element("tr",[],[]),(_var=Msal$1.policyTypeT(),(ops=Msal$1.policies(),(elem=Doc.Select([enabledV()],Global.String,ops,_var),row0({
   $:1,
   $0:AttrProxy.Create("style","text-align:right; width: 20%")
  },Doc.Element("label",[],[Doc.TextNode("policy type"+":")]),null,elem)))),input("Authority",Msal$1.authority())])]),checkbox("Force login",Msal$1.forceLoginB()),Doc.Element("br",[],[]),Doc.Element("div",[],[Doc.Button("Logout",[disabledV()],logout)]),loginMessageDoc,Doc.Element("div",[],[buttonV("Popup",false,function()
  {
   executePolicy(function(agent)
   {
    return function(t)
    {
     return agent.loginPopup(t[0],t[1]);
    };
   });
  })]),Doc.Element("div",[],[buttonV("Redirect",false,executeRedirect)]),Doc.Element("br",[],[]),Doc.Element("b",[],[Doc.TextNode("Token: ")]),Doc.TextView(Msal$1.token().get_View()),Doc.Element("br",[],[]),Doc.Element("div",[],[Doc.Button("Check User",[disabledV()],checkUser)]),Doc.Element("h5",[],[Doc.TextNode("User: ")]),Doc.BindView(Global.id,(b$1=View.get_Do(),View.Bind(function(a)
  {
   var user;
   function f(t)
   {
    return t[0];
   }
   function g(y)
   {
    return"idToken"!==y;
   }
   return a!=null&&a.$==1?(user=a.$0,View.Const(Doc.Concat(List.ofArray([tableObject(function(x)
   {
    return g(f(x));
   },user),Doc.Element("h4",[],[Doc.TextNode("idToken")]),tableObject(function()
   {
    return true;
   },user.idToken)])))):View.Const(Doc.get_Empty());
  },Msal$1.userO().get_View())))]);
  !DoNotShowUI?(parent=self.document.body,Templates.LoadLocalTemplates(""),Doc.Run(parent,doc)):void 0;
 };
 Msal$1.agentO=function()
 {
  SC$1.$cctor();
  return SC$1.agentO;
 };
 Msal$1.authorityW=function()
 {
  SC$1.$cctor();
  return SC$1.authorityW;
 };
 Msal$1.userO=function()
 {
  SC$1.$cctor();
  return SC$1.userO;
 };
 Msal$1.token=function()
 {
  SC$1.$cctor();
  return SC$1.token;
 };
 Msal$1.authority=function()
 {
  SC$1.$cctor();
  return SC$1.authority;
 };
 Msal$1.policyNameW=function()
 {
  SC$1.$cctor();
  return SC$1.policyNameW;
 };
 Msal$1.policyTypeT=function()
 {
  SC$1.$cctor();
  return SC$1.policyTypeT;
 };
 Msal$1.forceLoginB=function()
 {
  SC$1.$cctor();
  return SC$1.forceLoginB;
 };
 Msal$1.createOnStartB=function()
 {
  SC$1.$cctor();
  return SC$1.createOnStartB;
 };
 Msal$1.refreshBeforeB=function()
 {
  SC$1.$cctor();
  return SC$1.refreshBeforeB;
 };
 Msal$1.policyType=function()
 {
  SC$1.$cctor();
  return SC$1.policyType;
 };
 Msal$1.resetPasswordPolicy=function()
 {
  SC$1.$cctor();
  return SC$1.resetPasswordPolicy;
 };
 Msal$1.editProfilePolicy=function()
 {
  SC$1.$cctor();
  return SC$1.editProfilePolicy;
 };
 Msal$1.signUpPolicy=function()
 {
  SC$1.$cctor();
  return SC$1.signUpPolicy;
 };
 Msal$1.signInPolicy=function()
 {
  SC$1.$cctor();
  return SC$1.signInPolicy;
 };
 Msal$1.forceLogin=function()
 {
  SC$1.$cctor();
  return SC$1.forceLogin;
 };
 Msal$1.createOnStart=function()
 {
  SC$1.$cctor();
  return SC$1.createOnStart;
 };
 Msal$1.refreshBefore=function()
 {
  SC$1.$cctor();
  return SC$1.refreshBefore;
 };
 Msal$1.extraQueryParms=function()
 {
  SC$1.$cctor();
  return SC$1.extraQueryParms;
 };
 Msal$1.ref=function()
 {
  SC$1.$cctor();
  return SC$1.ref;
 };
 Msal$1.tenantName=function()
 {
  SC$1.$cctor();
  return SC$1.tenantName;
 };
 Msal$1.localTestingApp=function()
 {
  SC$1.$cctor();
  return SC$1.localTestingApp;
 };
 Msal$1.storedRef=function()
 {
  SC$1.$cctor();
  return SC$1.storedRef;
 };
 Msal$1.storedPolicy=function()
 {
  SC$1.$cctor();
  return SC$1.storedPolicy;
 };
 Msal$1.storedVar=function(name,def)
 {
  var storedVar,_var;
  storedVar=Msal$1.storage().getItem(name);
  _var=Var$1.Create$1(storedVar===null?def:storedVar);
  View.Sink(function(v)
  {
   Msal$1.storage().setItem(name,v);
  },_var.get_View());
  return _var;
 };
 Msal$1.storage=function()
 {
  SC$1.$cctor();
  return SC$1.storage;
 };
 Msal$1.callback=function(errorDesc,token,error,tokenType,state)
 {
  ((function($1)
  {
   return function($2)
   {
    return $1("callback: "+("("+Utils.prettyPrint($2[0])+", "+Utils.prettyPrint($2[1])+", "+Utils.prettyPrint($2[2])+", "+Utils.prettyPrint($2[3])+", "+Utils.prettyPrint($2[4])+")"));
   };
  }(function(s)
  {
   console.log(s);
  }))([errorDesc,error,tokenType,token,state]));
 };
 Msal$1.policies=function()
 {
  SC$1.$cctor();
  return SC$1.policies;
 };
 Msal$1.version=function()
 {
  SC$1.$cctor();
  return SC$1.version;
 };
 SC$1.$cctor=function()
 {
  var f,b,b$1,x,a;
  SC$1.$cctor=Global.ignore;
  function g(s)
  {
   return Strings.concat("\n",s);
  }
  function f$1(s)
  {
   return String.splitByChar("\n",s);
  }
  function g$1(s)
  {
   var a$2,b$2;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$2=0,(b$2=Arrays.length(s)-2,Unchecked.Compare(a$2,b$2)===1?a$2:b$2))
   });
  }
  function g$2(s)
  {
   return Strings.concat("\n",s);
  }
  function a$1(a$2)
  {
   return Global.String;
  }
  SC$1.unindentStr=function(x$1)
  {
   return g(String.unindent(x$1));
  };
  SC$1.skipLastLine=(f=function(x$1)
  {
   return g$1(f$1(x$1));
  },function(x$1)
  {
   return g$2(f(x$1));
  });
  SC$1.version="0.2.4";
  SC$1.policies=List.ofArray([Policy.SignIn,Policy.SignUp,Policy.EditProfile,Policy.ResetPassword]);
  SC$1.storage=self.localStorage;
  SC$1.storedPolicy=Msal$1.storage().getItem("policy");
  SC$1.storedRef=Msal$1.storage().getItem("ref");
  SC$1.localTestingApp=Msal$1.storedVar("localTestingApp","faf95af2-18b5-4895-9663-18f7feb95def");
  SC$1.tenantName=Msal$1.storedVar("tenantName","prozper");
  SC$1.ref=Msal$1.storedVar("ref","");
  SC$1.extraQueryParms=Msal$1.storedVar("extraQueryParms","mkt=es-us");
  SC$1.refreshBefore=Msal$1.storedVar("refreshBefore","0");
  SC$1.createOnStart=Msal$1.storedVar("createOnStart","1");
  SC$1.forceLogin=Msal$1.storedVar("forceLogin","0");
  SC$1.signInPolicy=Msal$1.storedVar("signInPolicy","B2C_1_SignIn");
  SC$1.signUpPolicy=Msal$1.storedVar("signUpPolicy","B2C_1_Registrarse");
  SC$1.editProfilePolicy=Msal$1.storedVar("editProfilePolicy","B2C_1_EditarPerfil");
  SC$1.resetPasswordPolicy=Msal$1.storedVar("resetPasswordPolicy","B2C_1_PasswordReset");
  SC$1.policyType=Msal$1.storedVar("policyType","SignIn");
  SC$1.refreshBeforeB=Var$1.Lens(Msal$1.refreshBefore(),function(a$2)
  {
   return a$2==="1";
  },function(a$2,a$3)
  {
   return a$3?"1":"0";
  });
  SC$1.createOnStartB=Var$1.Lens(Msal$1.createOnStart(),function(a$2)
  {
   return a$2==="1";
  },function(a$2,a$3)
  {
   return a$3?"1":"0";
  });
  SC$1.forceLoginB=Var$1.Lens(Msal$1.forceLogin(),function(a$2)
  {
   return a$2==="1";
  },function(a$2,a$3)
  {
   return a$3?"1":"0";
  });
  SC$1.policyTypeT=Var$1.Lens(Msal$1.policyType(),Policy.Parse,function($1,$2)
  {
   return(a$1($1))($2);
  });
  SC$1.policyNameW=(b=View.get_Do(),View.Bind(function(a$2)
  {
   return View.Bind(function(a$3)
   {
    return View.Const(a$3);
   },a$2.$==1?Msal$1.signUpPolicy().get_View():a$2.$==2?Msal$1.editProfilePolicy().get_View():a$2.$==3?Msal$1.resetPasswordPolicy().get_View():Msal$1.signInPolicy().get_View());
  },Msal$1.policyTypeT().get_View()));
  SC$1.authority=Var$1.Create$1("");
  SC$1.token=Var$1.Create$1("");
  SC$1.userO=Var$1.Create$1(null);
  SC$1.authorityW=(b$1=View.get_Do(),View.Bind(function(a$2)
  {
   return View.Bind(function(a$3)
   {
    return View.Const(((((Runtime.Curried(function($1,$2,$3,$4)
    {
     return $1("https://"+Utils.toSafe($2)+".b2clogin.com/tfp/"+Utils.toSafe($3)+".onmicrosoft.com/"+Utils.toSafe($4));
    },4))(Global.id))(a$2))(a$2))(a$3));
   },Msal$1.policyNameW());
  },Msal$1.tenantName().get_View()));
  View.Sink(function(a$2)
  {
   Msal$1.authority().Set(a$2);
  },Msal$1.authorityW());
  SC$1.agentO=Var$1.Create$1(null);
  SC$1.main=(x=Doc.Element("script",[AttrProxy.Create("src",(function($1)
  {
   return function($2)
   {
    return $1("https://secure.aadcdn.microsoftonline-p.com/lib/"+Utils.toSafe($2)+"/js/msal.min.js");
   };
  }(Global.id))(Msal$1.version())),AttrProxy.OnAfterRenderImpl(function()
  {
   var b$2;
   Concurrency.Start((b$2=null,Concurrency.Delay(function()
   {
    return Concurrency.Combine(Concurrency.While(function()
    {
     return!self.Msal;
    },Concurrency.Delay(function()
    {
     return Concurrency.Bind(Concurrency.Sleep(50),function()
     {
      return Concurrency.Return(null);
     });
    })),Concurrency.Delay(function()
    {
     Msal$1.ui();
     return Concurrency.Zero();
    }));
   })),null);
  })],[]),(a=self.document.head,(Templates.LoadLocalTemplates(""),Doc.Run(a,x))));
 };
 testing_GeneratedPrintf.p=function($1)
 {
  return $1.$==3?"ResetPassword":$1.$==2?"EditProfile":$1.$==1?"SignUp":"SignIn";
 };
 Runtime.OnLoad(function()
 {
  Msal$1.main();
 });
}());

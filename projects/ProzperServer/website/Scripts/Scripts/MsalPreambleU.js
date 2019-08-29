CIPHERSpaceLoadFiles(["https://code.jquery.com/jquery-3.1.1.min.js"], function()
{
 "use strict";
 var Global,FsRoot,Library,Monads,Seq,Async,String,LibraryJS,Pojo,Msal,Policy,AuthOptions,CacheOptions,SystemOptions,FrameworkOptions,Configuration,WebSharper,Obj,Account,AuthResponse,AuthError,AuthenticationParameters,TestingJS,Msal$1,PreambleState,SC$1,MsalPreamble_GeneratedPrintf,GeneratedPrintf,Seq$1,Concurrency,Arrays,List,Strings,Slice,Operators,Char,Unchecked,Utils,console,IntelliFactory,Runtime,JavaScript,Promise,UI,View,AttrModule,Doc,AttrProxy,JS,Client,Templates,Var$1;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 Monads=Library.Monads=Library.Monads||{};
 Seq=Monads.Seq=Monads.Seq||{};
 Async=Monads.Async=Monads.Async||{};
 String=Library.String=Library.String||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Pojo=LibraryJS.Pojo=LibraryJS.Pojo||{};
 Msal=LibraryJS.Msal=LibraryJS.Msal||{};
 Policy=Msal.Policy=Msal.Policy||{};
 AuthOptions=Msal.AuthOptions=Msal.AuthOptions||{};
 CacheOptions=Msal.CacheOptions=Msal.CacheOptions||{};
 SystemOptions=Msal.SystemOptions=Msal.SystemOptions||{};
 FrameworkOptions=Msal.FrameworkOptions=Msal.FrameworkOptions||{};
 Configuration=Msal.Configuration=Msal.Configuration||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 Account=Msal.Account=Msal.Account||{};
 AuthResponse=Msal.AuthResponse=Msal.AuthResponse||{};
 AuthError=Msal.AuthError=Msal.AuthError||{};
 AuthenticationParameters=Msal.AuthenticationParameters=Msal.AuthenticationParameters||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 Msal$1=TestingJS.Msal=TestingJS.Msal||{};
 PreambleState=Msal$1.PreambleState=Msal$1.PreambleState||{};
 SC$1=Global.StartupCode$MsalPreamble$MsalPreamble=Global.StartupCode$MsalPreamble$MsalPreamble||{};
 MsalPreamble_GeneratedPrintf=Global.MsalPreamble_GeneratedPrintf=Global.MsalPreamble_GeneratedPrintf||{};
 GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};
 Seq$1=WebSharper&&WebSharper.Seq;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Arrays=WebSharper&&WebSharper.Arrays;
 List=WebSharper&&WebSharper.List;
 Strings=WebSharper&&WebSharper.Strings;
 Slice=WebSharper&&WebSharper.Slice;
 Operators=WebSharper&&WebSharper.Operators;
 Char=WebSharper&&WebSharper.Char;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Utils=WebSharper&&WebSharper.Utils;
 console=Global.console;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 JavaScript=WebSharper&&WebSharper.JavaScript;
 Promise=JavaScript&&JavaScript.Promise;
 UI=WebSharper&&WebSharper.UI;
 View=UI&&UI.View;
 AttrModule=UI&&UI.AttrModule;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 JS=JavaScript&&JavaScript.JS;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Var$1=UI&&UI.Var$1;
 Seq.ofOption=function(vO)
 {
  return vO==null?[]:[vO.$0];
 };
 Seq.absorbR=function(vOS)
 {
  return Seq$1.choose(function(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  },vOS);
 };
 Seq.absorbO=function(vOS)
 {
  return Seq$1.choose(Global.id,vOS);
 };
 Seq.insertR=function(vSR)
 {
  return vSR.$==0?Seq$1.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vSR.$0):(Seq.rtn())(Library.Error(vSR.$0));
 };
 Seq.insertO=function(vSO)
 {
  var o;
  o=vSO==null?null:{
   $:1,
   $0:Seq$1.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vSO.$0)
  };
  return o==null?(Seq.rtn())(null):o.$0;
 };
 Seq.rtn=function()
 {
  SC$1.$cctor();
  return SC$1.rtn;
 };
 Async.insertR=function(vAR)
 {
  function f(a)
  {
   return{
    $:0,
    $0:a
   };
  }
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return vAR.$==0?Concurrency.Bind(vAR.$0,function(x)
  {
   return g(f(x));
  }):Concurrency.Return(Library.Error(vAR.$0));
 };
 Async.insertO=function(vAO)
 {
  var o;
  function f(a)
  {
   return{
    $:1,
    $0:a
   };
  }
  function g(v)
  {
   return Concurrency.Return(v);
  }
  o=vAO==null?null:{
   $:1,
   $0:Concurrency.Bind(vAO.$0,function(x)
   {
    return g(f(x));
   })
  };
  return o==null?Concurrency.Return(null):o.$0;
 };
 Async.sequenceSeq=function(sq)
 {
  return Async.traverseSeq(Global.id,sq);
 };
 Async.traverseSeq=function(f,sq)
 {
  function g(v)
  {
   return Concurrency.Return(v);
  }
  return Concurrency.Bind(Arrays.foldBack(function(head,tail)
  {
   return Async.op_GreaterGreaterEquals(f(head),function(h)
   {
    return Async.op_GreaterGreaterEquals(tail,function(t)
    {
     return Concurrency.Return(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),Concurrency.Return(List.T.Empty)),function(x)
  {
   return g(Global.id(x));
  });
 };
 Async.op_GreaterGreaterEquals=function(v,f)
 {
  return Concurrency.Bind(v,f);
 };
 Async.sleepThen=function(f,milliseconds)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(milliseconds),function()
   {
    return Concurrency.Return(f());
   });
  });
 };
 Async.apply=function(fA,vA)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.StartChild(fA,null),function(a)
   {
    return Concurrency.Bind(Concurrency.StartChild(vA,null),function(a$1)
    {
     return Concurrency.Bind(a,function(a$2)
     {
      return Concurrency.Bind(a$1,function(a$3)
      {
       return Concurrency.Return(a$2(a$3));
      });
     });
    });
   });
  });
 };
 String.thousands=function(n)
 {
  var v,r,s;
  v=Global.String(n);
  r=v.length%3;
  s=r===0?3:r;
  return Strings.concat(",",List.ofSeq(Seq$1.delay(function()
  {
   return Seq$1.append([Slice.string(v,{
    $:1,
    $0:0
   },{
    $:1,
    $0:s-1
   })],Seq$1.delay(function()
   {
    return Seq$1.map(function(i)
    {
     return Slice.string(v,{
      $:1,
      $0:i*3+s
     },{
      $:1,
      $0:i*3+s+2
     });
    },Operators.range(0,((v.length-s)/3>>0)-1));
   }));
  })));
 };
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
  return Seq$1.map((x$1=Strings.replicate(n," "),function(y)
  {
   return x$1+y;
  }),x);
 };
 String.unindent=function(s)
 {
  var lines,n,o,o$1;
  lines=Strings.SplitChars(s,["\n"],0);
  n=(o=Seq$1.tryFindIndex(function(y)
  {
   return" "!==y;
  },(o$1=Seq$1.tryFind(function(l)
  {
   return Strings.Trim(l)!=="";
  },lines),o$1==null?"":o$1.$0)),o==null?0:o.$0);
  return Seq$1.filter(function(s$1)
  {
   return!Strings.StartsWith(s$1,"# 1 ");
  },Seq$1.map(function(l)
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
  return Arrays.ofSeq(Seq$1.collect(Global.id,Seq$1.mapi(function(i,c)
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
 Pojo.newPojoOpt=function(propOs)
 {
  function c(n,vO)
  {
   return vO==null?null:{
    $:1,
    $0:[n,vO.$0]
   };
  }
  return Pojo.newPojo(Seq$1.choose(function($1)
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
  Seq$1.iter((f=function(b)
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
 Policy=Msal.Policy=Runtime.Class({
  toString:function()
  {
   return Strings.ReplaceChar(Library["String.get_toUnderscore"]((function($1)
   {
    return function($2)
    {
     return $1(MsalPreamble_GeneratedPrintf.p($2));
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
 AuthOptions.New$1=function(clientId,authority,validateAuthority,redirectUri,postLogoutRedirectUri,navigateToLoginRequestUrl)
 {
  return Pojo.newPojoOpt([Msal.op_MinusMinusGreater("clientId",clientId),Msal.op_EqualsEqualsGreater("authority",authority),Msal.op_EqualsEqualsGreater("validateAuthority",validateAuthority),Msal.op_EqualsEqualsGreater("redirectUri",redirectUri),Msal.op_EqualsEqualsGreater("postLogoutRedirectUri",postLogoutRedirectUri),Msal.op_EqualsEqualsGreater("navigateToLoginRequestUrl",navigateToLoginRequestUrl)]);
 };
 AuthOptions.New=function(clientId,authority,validateAuthority,redirectUri,postLogoutRedirectUri,navigateToLoginRequestUrl)
 {
  return{
   clientId:clientId,
   authority:authority,
   validateAuthority:validateAuthority,
   redirectUri:redirectUri,
   postLogoutRedirectUri:postLogoutRedirectUri,
   navigateToLoginRequestUrl:navigateToLoginRequestUrl
  };
 };
 CacheOptions.New$1=function(cacheLocation,storeAuthStateInCookie)
 {
  return Pojo.newPojoOpt([Msal.op_EqualsEqualsGreater("cacheLocation",cacheLocation),Msal.op_EqualsEqualsGreater("storeAuthStateInCookie",storeAuthStateInCookie)]);
 };
 CacheOptions.New=function(cacheLocation,storeAuthStateInCookie)
 {
  return{
   cacheLocation:cacheLocation,
   storeAuthStateInCookie:storeAuthStateInCookie
  };
 };
 SystemOptions.New$1=function(logger,loadFrameTimeout,navigateFrameWait,tokenRenewalOffsetSeconds)
 {
  return Pojo.newPojoOpt([Msal.op_EqualsEqualsGreater("logger",logger),Msal.op_EqualsEqualsGreater("loadFrameTimeout",loadFrameTimeout),Msal.op_EqualsEqualsGreater("navigateFrameWait",navigateFrameWait),Msal.op_EqualsEqualsGreater("tokenRenewalOffsetSeconds",tokenRenewalOffsetSeconds)]);
 };
 SystemOptions.New=function(logger,loadFrameTimeout,navigateFrameWait,tokenRenewalOffsetSeconds)
 {
  return{
   logger:logger,
   loadFrameTimeout:loadFrameTimeout,
   navigateFrameWait:navigateFrameWait,
   tokenRenewalOffsetSeconds:tokenRenewalOffsetSeconds
  };
 };
 FrameworkOptions.New$1=function(isAngular,protectedResourceMap,unprotectedResources)
 {
  return Pojo.newPojoOpt([Msal.op_EqualsEqualsGreater("isAngular",isAngular),Msal.op_EqualsEqualsGreater("protectedResourceMap",protectedResourceMap),Msal.op_EqualsEqualsGreater("unprotectedResources",unprotectedResources)]);
 };
 FrameworkOptions.New=function(isAngular,protectedResourceMap,unprotectedResources)
 {
  return{
   isAngular:isAngular,
   protectedResourceMap:protectedResourceMap,
   unprotectedResources:unprotectedResources
  };
 };
 Configuration.New$1=function(auth,cache,system,framework)
 {
  return Pojo.newPojoOpt([Msal.op_EqualsEqualsGreater("auth",auth),Msal.op_EqualsEqualsGreater("cache",cache),Msal.op_EqualsEqualsGreater("system",system),Msal.op_EqualsEqualsGreater("framework",framework)]);
 };
 Configuration.New=function(auth,cache,system,framework)
 {
  return{
   auth:auth,
   cache:cache,
   system:system,
   framework:framework
  };
 };
 Account=Msal.Account=Runtime.Class({},Obj,Account);
 Account.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Account);
 AuthResponse.New=function(accessToken,account,accountState,expiresOn,idToken,scopes,tenantId,tokenType,uniqueId)
 {
  return{
   accessToken:accessToken,
   account:account,
   accountState:accountState,
   expiresOn:expiresOn,
   idToken:idToken,
   scopes:scopes,
   tenantId:tenantId,
   tokenType:tokenType,
   uniqueId:uniqueId
  };
 };
 AuthError.New=function(errorCode,errorMessage,message,name,stack)
 {
  return{
   errorCode:errorCode,
   errorMessage:errorMessage,
   message:message,
   name:name,
   stack:stack
  };
 };
 AuthenticationParameters.New$1=function(account,authority,claimsRequest,correlationId,extraQueryParameters,extraScopesToConsent,loginHint,prompt,scopes,sid,state)
 {
  return Pojo.newPojoOpt([Msal.op_EqualsEqualsGreater("account",account),Msal.op_EqualsEqualsGreater("authority",authority),Msal.op_EqualsEqualsGreater("claimsRequest",claimsRequest),Msal.op_EqualsEqualsGreater("correlationId",correlationId),Msal.op_EqualsEqualsGreater("extraQueryParameters",extraQueryParameters),Msal.op_EqualsEqualsGreater("extraScopesToConsent",extraScopesToConsent),Msal.op_EqualsEqualsGreater("loginHint",loginHint),Msal.op_EqualsEqualsGreater("prompt",prompt),Msal.op_EqualsEqualsGreater("scopes",scopes),Msal.op_EqualsEqualsGreater("sid",sid),Msal.op_EqualsEqualsGreater("state",state)]);
 };
 AuthenticationParameters.New=function(account,authority,claimsRequest,correlationId,extraQueryParameters,extraScopesToConsent,loginHint,prompt,scopes,sid,state)
 {
  return{
   account:account,
   authority:authority,
   claimsRequest:claimsRequest,
   correlationId:correlationId,
   extraQueryParameters:extraQueryParameters,
   extraScopesToConsent:extraScopesToConsent,
   loginHint:loginHint,
   prompt:prompt,
   scopes:scopes,
   sid:sid,
   state:state
  };
 };
 Msal.op_EqualsEqualsGreater=function(n,vO)
 {
  return[n,vO==null?null:{
   $:1,
   $0:vO.$0
  }];
 };
 Msal.op_MinusMinusGreater=function(n,v)
 {
  return[n,{
   $:1,
   $0:v
  }];
 };
 Msal.policies=function()
 {
  SC$1.$cctor();
  return SC$1.policies;
 };
 PreambleState=Msal$1.PreambleState=Runtime.Class({
  toString:function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(MsalPreamble_GeneratedPrintf.p$1($2));
    };
   }(Global.id))(this);
  }
 },null,PreambleState);
 PreambleState.InPreamble=new PreambleState({
  $:11
 });
 PreambleState.WentInside=new PreambleState({
  $:10
 });
 PreambleState.WentToResetPassword=new PreambleState({
  $:9
 });
 PreambleState.WentToEditProfile=new PreambleState({
  $:8
 });
 PreambleState.WentToSignUp=new PreambleState({
  $:7
 });
 PreambleState.WentToSignIn=new PreambleState({
  $:6
 });
 PreambleState.GoToResetPassword=new PreambleState({
  $:5
 });
 PreambleState.GoToEditProfile=new PreambleState({
  $:4
 });
 PreambleState.GoingToSignUp=new PreambleState({
  $:3
 });
 PreambleState.GoToSignUp=new PreambleState({
  $:2
 });
 PreambleState.GoingToSignIn=new PreambleState({
  $:1
 });
 PreambleState.GoToSignIn=new PreambleState({
  $:0
 });
 PreambleState.Parse=function(txt)
 {
  var m;
  m=Strings.Replace(txt," ","");
  return m==="GoToSignIn"?PreambleState.GoToSignIn:m==="GoingToSignIn"?PreambleState.GoingToSignIn:m==="GoToSignUp"?PreambleState.GoToSignUp:m==="GoingToSignUp"?PreambleState.GoingToSignUp:m==="GoToEditProfile"?PreambleState.GoToEditProfile:m==="GoToResetPassword"?PreambleState.GoToResetPassword:m==="WentToSignIn"?PreambleState.WentToSignIn:m==="WentToSignUp"?PreambleState.WentToSignUp:m==="WentToEditProfile"?PreambleState.WentToEditProfile:m==="WentToResetPassword"?PreambleState.WentToResetPassword:m==="WentInside"?PreambleState.WentInside:PreambleState.InPreamble;
 };
 Msal$1.main$896$45=function()
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
  var loginMessageDoc,b,signInW,signUpW,editProfileW,resetPasswordW,p,action,b$1,DoNotShowUI,doc,b$2,parent;
  function checkUser()
  {
   var a,o,m;
   a=(o=Msal$1.agentO().Get(),o==null?null:(m=o.$0.getAccount(),Unchecked.Equals(m,null)?null:{
    $:1,
    $0:m
   }));
   Msal$1.userO().Set(a);
  }
  function convert2QPDict(s)
  {
   return Pojo.newPojo(Arrays.choose(function(t)
   {
    return String.splitInTwoO("=",t);
   },Strings.SplitChars(s,["&"],0)));
  }
  function redirectCallback(error,resp)
  {
   try
   {
    !Unchecked.Equals(error,null)?(function($1)
    {
     return function($2)
     {
      return $1("Preamble redirectCallback error: "+GeneratedPrintf.p$1($2));
     };
    }(function(s)
    {
     console.log(s);
    }))(error):void 0;
    !Unchecked.Equals(resp,null)?(function($1)
    {
     return function($2)
     {
      return $1("Preamble redirectCallback resp : "+GeneratedPrintf.p($2));
     };
    }(function(s)
    {
     console.log(s);
    }))(resp):null;
   }
   catch(e)
   {
    (((Runtime.Curried3(function($1,$2,$3)
    {
     return $1("Preamble redirectCallback exception "+Utils.prettyPrint($2)+" "+Utils.toSafe($3));
    }))(function(s)
    {
     console.log(s);
    }))(e))(e.stack);
   }
  }
  function authParms()
  {
   return AuthenticationParameters.New$1(null,null,null,null,{
    $:1,
    $0:convert2QPDict(Msal$1.extraQueryParms().Get())
   },null,null,null,{
    $:1,
    $0:Arrays.map(Strings.Trim,Strings.SplitChars(Msal$1.scopes().Get(),[","],0))
   },null,null);
  }
  function executePolicy(f)
  {
   var m,agent,b$3;
   m=Msal$1.agentO().Get();
   m!=null&&m.$==1?(agent=m.$0,Concurrency.Start((b$3=null,Concurrency.Delay(function()
   {
    var promise;
    promise=(f(agent))(authParms());
    return Unchecked.Equals(promise,null)?(function($1)
    {
     return $1("Preamble executePolicy No promise?");
    }(function(s)
    {
     console.log(s);
    }),Concurrency.Zero()):Concurrency.Bind(Promise.AsAsync(promise),function(a)
    {
     Msal$1.token().Set(a.accessToken);
     checkUser();
     return Concurrency.Zero();
    });
   })),null)):void 0;
  }
  function executeRedirect()
  {
   executePolicy(function(agent)
   {
    return function(v)
    {
     agent.loginRedirect({
      $:1,
      $0:v
     });
     return null;
    };
   });
  }
  function logout()
  {
   var o;
   o=Msal$1.agentO().Get();
   o==null?void 0:(o.$0.logout(),checkUser());
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
  function row(lbl,elem)
  {
   return row0({
    $:1,
    $0:AttrProxy.Create("style","text-align:right; width: 20%")
   },Doc.Element("label",[],[Doc.TextNode(lbl+":")]),null,elem);
  }
  function input0(lbl,_var)
  {
   return row0({
    $:1,
    $0:AttrProxy.Create("style","text-align:right; width: 20%")
   },lbl,null,Doc.Input([enabledV(),AttrProxy.Create("style","width: 95%")],_var));
  }
  function input(lbl,_var)
  {
   return input0(Doc.Element("label",[],[Doc.TextNode(lbl+":")]),_var);
  }
  function select0(attrs,_var,ops)
  {
   return Doc.Select(attrs,Global.String,ops,_var);
  }
  function tableObject(p$1,o)
  {
   return Doc.Element("table",[],[Doc.Element("tbody",[],List.ofSeq(Seq$1.delay(function()
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
    return Seq$1.map(function($1)
    {
     return m($1[0],$1[1]);
    },Seq$1.filter(p$1,JS.GetFields(o)));
   })))]);
  }
  function buttonV(txt,enabled,act)
  {
   var b$3;
   return Doc.BindView(Global.id,(b$3=View.get_Do(),View.Bind(function(a)
   {
    return View.Const(Doc.Button(a+" "+txt,[enabled?enabledV():disabledV()],act));
   },Msal$1.policyTypeS().get_View())));
  }
  function buttonP(policy,enabledW,act)
  {
   return Doc.Button(Global.String(policy)+" Policy: ",[enableAtt(enabledW)],act);
  }
  function checkbox(txt,_var)
  {
   return Doc.Element("span",[],[Doc.TextNode(txt),Doc.CheckBox([],_var)]);
  }
  function createAgent()
  {
   var a,x,options;
   a={
    $:1,
    $0:(x=(options=Configuration.New$1({
     $:1,
     $0:AuthOptions.New$1(Msal$1.applicationId().Get(),{
      $:1,
      $0:Msal$1.authority().Get()
     },{
      $:1,
      $0:false
     },null,null,null)
    },null,null,null),new self.Msal.UserAgentApplication(options)),(function(agent)
    {
     agent.handleRedirectCallback(Runtime.CreateFuncWithArgs(function($1)
     {
      return redirectCallback($1[0],$1[1]);
     }));
    }(x),x))
   };
   Msal$1.agentO().Set(a);
   Msal$1.editingB().Set(false);
   checkUser();
  }
  function setAndRunPolicy(policy)
  {
   var b$3;
   Concurrency.Start((b$3=null,Concurrency.Delay(function()
   {
    Msal$1.policyType().Set(policy);
    return Concurrency.Bind(View.GetAsync(Msal$1.authorityW()),function()
    {
     createAgent();
     executeRedirect();
     return Concurrency.Zero();
    });
   })),null);
  }
  function actSignIn()
  {
   setAndRunPolicy(Policy.SignIn);
  }
  function actSignUp()
  {
   setAndRunPolicy(Policy.SignUp);
  }
  function actEditProfile()
  {
   setAndRunPolicy(Policy.EditProfile);
  }
  function actResetPassword()
  {
   setAndRunPolicy(Policy.ResetPassword);
  }
  function goInside()
  {
   self.location.replace(Msal$1.goInsideLink().Get());
  }
  function updateOnEnter(state)
  {
   var $1;
   switch(state.$==1?1:state.$==2?2:state.$==3?3:state.$==4?4:state.$==5?5:state.$==6?6:state.$==7?6:state.$==8?6:state.$==9?6:state.$==10?7:state.$==11?8:0)
   {
    case 0:
     return[PreambleState.GoingToSignIn,Msal$1.forceLoginB().Get()?{
      $:1,
      $0:logout
     }:null];
    case 1:
     return[PreambleState.WentToSignIn,{
      $:1,
      $0:actSignIn
     }];
    case 2:
     return[PreambleState.GoingToSignUp,{
      $:1,
      $0:logout
     }];
    case 3:
     return[PreambleState.WentToSignUp,{
      $:1,
      $0:actSignUp
     }];
    case 4:
     return[PreambleState.WentToEditProfile,{
      $:1,
      $0:actEditProfile
     }];
    case 5:
     return[PreambleState.WentToResetPassword,{
      $:1,
      $0:actResetPassword
     }];
    case 6:
     return self.location.hash!==""?[state,{
      $:1,
      $0:Global.ignore
     }]:Msal$1.goInsideLink().Get()===""?[PreambleState.InPreamble,null]:Msal$1.userO().Get()!=null?[PreambleState.WentInside,{
      $:1,
      $0:goInside
     }]:[PreambleState.GoingToSignIn,{
      $:1,
      $0:logout
     }];
    case 7:
     return Msal$1.goInsideLink().Get()===""?[PreambleState.InPreamble,null]:[PreambleState.GoingToSignIn,{
      $:1,
      $0:logout
     }];
    case 8:
     return[PreambleState.InPreamble,null];
   }
  }
  function getTokenO0()
  {
   var b$3;
   b$3=null;
   return Concurrency.Delay(function()
   {
    var $1,$2,$3,agent;
    $1=Msal$1.userO().Get();
    $2=Msal$1.agentO().Get();
    return $1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3=[$2.$0,$1.$0],true))?(agent=$3[0],Concurrency.TryWith(Concurrency.Delay(function()
    {
     return Concurrency.Bind(Promise.AsAsync(agent.acquireTokenSilent(authParms())),function(a)
     {
      return Concurrency.Return({
       $:1,
       $0:a.accessToken
      });
     });
    }),function()
    {
     return Concurrency.Bind(Concurrency.FromContinuations(function(ok,ko)
     {
      agent.handleRedirectCallback(function(error,resp)
      {
       try
       {
        !Unchecked.Equals(error,null)?(console.log(["redirectCallback ERROR: ",error]),ko(new Global.Error(error.errorMessage))):!Unchecked.Equals(resp,null)?(console.log(["redirectCallback: ",resp]),ok(resp)):null;
       }
       catch(e)
       {
        (((Runtime.Curried3(function($4,$5,$6)
        {
         return $4("Preamble getTokenO0 exception "+Utils.prettyPrint($5)+" "+Utils.toSafe($6));
        }))(function(s)
        {
         console.log(s);
        }))(e))(e.stack);
       }
      });
      return agent.acquireTokenRedirect(authParms());
     }),function(a)
     {
      return Concurrency.Return({
       $:1,
       $0:a.accessToken
      });
     });
    })):Concurrency.Return(null);
   });
  }
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
        return $2("To Sign Up make sure to really be logged out by clicking on <Logout> first and then click on Sign Up Popup or Redirect!");
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
    },Msal$1.policyType().get_View());
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
  Msal$1.createOnStartB().Get()&&!Msal$1.editingB().Get()?(createAgent(),checkUser(),(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("Preamble updateState ENTERING STATE "+MsalPreamble_GeneratedPrintf.p$1($2)+", user = "+Utils.prettyPrint($3));
  }))(function(s)
  {
   console.log(s);
  }))(Msal$1.preambleState().Get()))(Msal$1.userO().Get()!=null),p=function(state)
  {
   var p$1,newState,action$1;
   while(true)
    {
     p$1=updateOnEnter(state);
     newState=p$1[0];
     action$1=p$1[1];
     if(action$1==null&&newState.$!==11)
      state=newState;
     else
      return[newState,action$1];
    }
  }(Msal$1.preambleState().Get()),action=p[1],Msal$1.preambleState().Set(p[0]),Concurrency.Start((b$1=null,Concurrency.Delay(function()
  {
   return Concurrency.Combine(Concurrency.While(function()
   {
    return!Unchecked.Equals(Msal$1.preambleState().Get(),PreambleState.Parse(Msal$1.storage().getItem("preambleState")));
   },Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(50),function()
    {
     return Concurrency.Return(null);
    });
   })),Concurrency.Delay(function()
   {
    (((Runtime.Curried3(function($1,$2,$3)
    {
     return $1("Preamble updateState EXITING STATE "+MsalPreamble_GeneratedPrintf.p$1($2)+" = "+Utils.toSafe($3));
    }))(function(s)
    {
     console.log(s);
    }))(Msal$1.preambleState().Get()))(Msal$1.storage().getItem("preambleState"));
    action==null?void 0:action.$0();
    return Concurrency.Zero();
   }));
  })),null)):void 0;
  DoNotShowUI=Msal$1.preambleState().Get().$!==11&&Msal$1.createOnStartB().Get()&&!Msal$1.editingB().Get();
  doc=Doc.Element("div",[],[Doc.Element("h1",[],[Doc.TextNode((function($1)
  {
   return function($2)
   {
    return $1("Msal.js "+Utils.toSafe($2)+" (Microsoft authentication library) & Azure AD B2C");
   };
  }(Global.id))(Msal$1.version()))]),Doc.Element("br",[],[]),Doc.Element("table",[],[Doc.Element("tbody",[],[row0(null,Doc.Button("Create Agent",[enabledV()],createAgent),null,checkbox("Create on Start",Msal$1.createOnStartB())),row0(null,Doc.Button("Edit",[disabledV()],function()
  {
   if(Msal$1.refreshBeforeB().Get())
    {
     Msal$1.editingB().Set(true);
     self.location.reload();
    }
   else
    Msal$1.agentO().Set(null);
  }),null,checkbox("Refresh before Edit",Msal$1.refreshBeforeB()))])]),Doc.Element("br",[],[]),Doc.Element("table",[AttrProxy.Create("style","width: 95%")],[Doc.Element("tbody",[],[row("preamble state",Doc.Concat([select0(List.T.Empty,Msal$1.preambleState(),Msal$1.preambleStates()),Doc.TextNode("Refresh (F5) to update state")])),input("App Id",Msal$1.applicationId()),input("tenant Name",Msal$1.tenantName()),input("ref/state",Msal$1.ref()),input("extra query parameters",Msal$1.extraQueryParms()),input("go Inside link",Msal$1.goInsideLink()),input0(Doc.Concat(List.ofArray([checkbox("Force login dialog",Msal$1.forceLoginB()),buttonP(Policy.SignIn,signInW,actSignIn)])),Msal$1.signInPolicy()),input0(buttonP(Policy.SignUp,signUpW,actSignUp),Msal$1.signUpPolicy()),input0(buttonP(Policy.EditProfile,editProfileW,actEditProfile),Msal$1.editProfilePolicy()),input0(buttonP(Policy.ResetPassword,resetPasswordW,actResetPassword),Msal$1.resetPasswordPolicy()),Doc.Element("tr",[],[]),row("policy type",select0(List.ofArray([enabledV()]),Msal$1.policyType(),Msal.policies())),input("Authority",Msal$1.authority()),input0(Doc.Button("Scopes",[enableAtt(editProfileW)],function()
  {
   var b$3;
   Concurrency.Start((b$3=null,Concurrency.Delay(function()
   {
    var m;
    m=Msal$1.agentO().Get();
    return m!=null&&m.$==1?Concurrency.Bind(Promise.AsAsync(m.$0.acquireTokenSilent(authParms())),function(a)
    {
     ((function($1)
     {
      return function($2)
      {
       return $1("Preamble actObtainToken "+GeneratedPrintf.p($2));
      };
     }(function(s)
     {
      console.log(s);
     }))(a));
     return Concurrency.Zero();
    }):Concurrency.Zero();
   })),null);
  }),Msal$1.scopes())])]),Doc.Element("br",[],[]),Doc.Element("div",[],[Doc.Button("Logout",[disabledV()],logout)]),loginMessageDoc,Doc.Element("div",[],[buttonV("Popup",false,function()
  {
   executePolicy(function(agent)
   {
    return function(v)
    {
     return agent.loginPopup({
      $:1,
      $0:v
     });
    };
   });
  })]),Doc.Element("div",[],[buttonV("Redirect",false,executeRedirect)]),Doc.Element("br",[],[]),Doc.Element("b",[],[Doc.TextNode("Token: ")]),Doc.TextView(Msal$1.token().get_View()),Doc.Element("br",[],[]),Doc.Element("div",[],[Doc.Button("Check User",[disabledV()],checkUser)]),Doc.Element("div",[],[Doc.Button("Get Token",[disabledV()],function()
  {
   function f(o)
   {
    console.log(o);
   }
   function g(v)
   {
    return Concurrency.Return(v);
   }
   Concurrency.Start(Concurrency.Bind(getTokenO0(),function(x)
   {
    return g(f(x));
   }),null);
  })]),Doc.Element("h5",[],[Doc.TextNode("User: ")]),Doc.BindView(Global.id,(b$2=View.get_Do(),View.Bind(function(a)
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
  },Msal$1.userO().get_View()))),Doc.Element("a",[AttrProxy.Create("href","https://gist.github.com/amieres/bc8e39f2e1e6e54fd1dfaeeae24ad304")],[Doc.TextNode("gist")])]);
  !DoNotShowUI?(parent=self.document.body,Templates.LoadLocalTemplates(""),Doc.Run(parent,doc)):void 0;
 };
 Msal$1.agentO=function()
 {
  SC$1.$cctor();
  return SC$1.agentO;
 };
 Msal$1.authParms=function()
 {
  return AuthenticationParameters.New$1(null,null,null,null,null,null,null,null,{
   $:1,
   $0:[(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("https://"+Utils.toSafe($2)+".onmicrosoft.com/"+Utils.toSafe($3)+"/user_impersonation");
   }))(Global.id))(Msal$1.tenantName().Get()))(Msal$1.applicationId().Get()),(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("https://"+Utils.toSafe($2)+".onmicrosoft.com/"+Utils.toSafe($3)+"/Prozper.Admin");
   }))(Global.id))(Msal$1.tenantName().Get()))(Msal$1.applicationId().Get())]
  },null,null);
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
 Msal$1.preambleState=function()
 {
  SC$1.$cctor();
  return SC$1.preambleState;
 };
 Msal$1.policyType=function()
 {
  SC$1.$cctor();
  return SC$1.policyType;
 };
 Msal$1.preambleStateS=function()
 {
  SC$1.$cctor();
  return SC$1.preambleStateS;
 };
 Msal$1.scopes=function()
 {
  SC$1.$cctor();
  return SC$1.scopes;
 };
 Msal$1.goInsideLink=function()
 {
  SC$1.$cctor();
  return SC$1.goInsideLink;
 };
 Msal$1.policyTypeS=function()
 {
  SC$1.$cctor();
  return SC$1.policyTypeS;
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
 Msal$1.applicationId=function()
 {
  SC$1.$cctor();
  return SC$1.applicationId;
 };
 Msal$1.editingB=function()
 {
  SC$1.$cctor();
  return SC$1.editingB;
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
 Msal$1.storedVarB=function(name,def)
 {
  function toS(a$1)
  {
   return a$1?"1":"";
  }
  function a(a$1)
  {
   return toS;
  }
  return Var$1.Lens(Msal$1.storedVar(name,toS(def)),function(a$1)
  {
   return a$1==="1";
  },function($1,$2)
  {
   return(a($1))($2);
  });
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
 Msal$1.replaceQueryParameters=function()
 {
  var m,query;
  m=Strings.SplitChars(self.location.href,["?"],0);
  !Unchecked.Equals(m,null)&&m.length===2?(query=Arrays.get(m,1),Arrays.get(m,0),Seq$1.iter(function(p)
  {
   var m$1,value,name;
   m$1=Strings.SplitChars(p,["="],0);
   !Unchecked.Equals(m$1,null)&&m$1.length===2?(value=Arrays.get(m$1,1),name=Arrays.get(m$1,0),Msal$1.storage().setItem(name,Global.decodeURIComponent(value)),(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Preamble: Query param: "+Utils.toSafe($2)+" = "+Utils.toSafe($3));
   }))(function(s)
   {
    console.log(s);
   }))(name))(value)):void 0;
  },Strings.SplitChars(query,["&"],0))):void 0;
 };
 Msal$1.storage=function()
 {
  SC$1.$cctor();
  return SC$1.storage;
 };
 Msal$1.version=function()
 {
  SC$1.$cctor();
  return SC$1.version;
 };
 Msal$1.preambleStates=function()
 {
  SC$1.$cctor();
  return SC$1.preambleStates;
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
   var a$3,b$2;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$3=0,(b$2=Arrays.length(s)-2,Unchecked.Compare(a$3,b$2)===1?a$3:b$2))
   });
  }
  function g$2(s)
  {
   return Strings.concat("\n",s);
  }
  function a$1(a$3)
  {
   return Global.String;
  }
  function a$2(a$3)
  {
   return Global.String;
  }
  SC$1.rtn=function(v)
  {
   return[v];
  };
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
  SC$1.policies=List.ofArray([Policy.SignIn,Policy.SignUp,Policy.EditProfile,Policy.ResetPassword]);
  SC$1.preambleStates=List.ofArray([PreambleState.GoToSignIn,PreambleState.GoingToSignIn,PreambleState.GoToSignUp,PreambleState.GoingToSignUp,PreambleState.GoToEditProfile,PreambleState.GoToResetPassword,PreambleState.WentToSignIn,PreambleState.WentToSignUp,PreambleState.WentToEditProfile,PreambleState.WentToResetPassword,PreambleState.WentInside,PreambleState.InPreamble]);
  SC$1.version="1.0.0";
  SC$1.storage=self.localStorage;
  Msal$1.replaceQueryParameters();
  SC$1.refreshBeforeB=Msal$1.storedVarB("refreshBefore",false);
  SC$1.createOnStartB=Msal$1.storedVarB("createOnStart",true);
  SC$1.forceLoginB=Msal$1.storedVarB("forceLogin",false);
  SC$1.editingB=Msal$1.storedVarB("Editing",false);
  SC$1.applicationId=Msal$1.storedVar("applicationId","faf95af2-18b5-4895-9663-18f7feb95def");
  SC$1.tenantName=Msal$1.storedVar("tenantName","prozper");
  SC$1.ref=Msal$1.storedVar("ref","");
  SC$1.extraQueryParms=Msal$1.storedVar("extraQueryParms","mkt=es-us");
  SC$1.signInPolicy=Msal$1.storedVar("signInPolicy","B2C_1_SignIn");
  SC$1.signUpPolicy=Msal$1.storedVar("signUpPolicy","B2C_1_Registrarse");
  SC$1.editProfilePolicy=Msal$1.storedVar("editProfilePolicy","B2C_1_EditarPerfil");
  SC$1.resetPasswordPolicy=Msal$1.storedVar("resetPasswordPolicy","B2C_1_PasswordReset");
  SC$1.policyTypeS=Msal$1.storedVar("policyType","SignIn");
  SC$1.goInsideLink=Msal$1.storedVar("goInsideLink","");
  SC$1.scopes=Msal$1.storedVar("scopes","https://prozper.onmicrosoft.com/faf95af2-18b5-4895-9663-18f7feb95def/user_impersonation");
  SC$1.preambleStateS=Msal$1.storedVar("preambleState","InPreamble");
  SC$1.policyType=Var$1.Lens(Msal$1.policyTypeS(),Policy.Parse,function($1,$2)
  {
   return(a$1($1))($2);
  });
  SC$1.preambleState=Var$1.Lens(Msal$1.preambleStateS(),PreambleState.Parse,function($1,$2)
  {
   return(a$2($1))($2);
  });
  SC$1.policyNameW=(b=View.get_Do(),View.Bind(function(a$3)
  {
   return View.Bind(function(a$4)
   {
    return View.Const(a$4);
   },a$3.$==1?Msal$1.signUpPolicy().get_View():a$3.$==2?Msal$1.editProfilePolicy().get_View():a$3.$==3?Msal$1.resetPasswordPolicy().get_View():Msal$1.signInPolicy().get_View());
  },Msal$1.policyType().get_View()));
  SC$1.authority=Var$1.Create$1("");
  SC$1.token=Var$1.Create$1("");
  SC$1.userO=Var$1.Create$1(null);
  SC$1.authorityW=(b$1=View.get_Do(),View.Bind(function(a$3)
  {
   return View.Bind(function(a$4)
   {
    return View.Const(((((Runtime.Curried(function($1,$2,$3,$4)
    {
     return $1("https://"+Utils.toSafe($2)+".b2clogin.com/tfp/"+Utils.toSafe($3)+".onmicrosoft.com/"+Utils.toSafe($4));
    },4))(Global.id))(a$3))(a$3))(a$4));
   },Msal$1.policyNameW());
  },Msal$1.tenantName().get_View()));
  View.Sink(function(a$3)
  {
   Msal$1.authority().Set(a$3);
  },Msal$1.authorityW());
  SC$1.agentO=Var$1.Create$1(null);
  SC$1.main=self.location.search!==""?self.location.replace(Arrays.get(Strings.SplitChars(self.location.href,["?"],0),0)):(x=Doc.Element("script",[AttrProxy.Create("src",(function($1)
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
 MsalPreamble_GeneratedPrintf.p=function($1)
 {
  return $1.$==3?"ResetPassword":$1.$==2?"EditProfile":$1.$==1?"SignUp":"SignIn";
 };
 MsalPreamble_GeneratedPrintf.p$1=function($1)
 {
  return $1.$==11?"InPreamble":$1.$==10?"WentInside":$1.$==9?"WentToResetPassword":$1.$==8?"WentToEditProfile":$1.$==7?"WentToSignUp":$1.$==6?"WentToSignIn":$1.$==5?"GoToResetPassword":$1.$==4?"GoToEditProfile":$1.$==3?"GoingToSignUp":$1.$==2?"GoToSignUp":$1.$==1?"GoingToSignIn":"GoToSignIn";
 };
 GeneratedPrintf.p$1=function($1)
 {
  return"{"+("errorCode = "+Utils.prettyPrint($1.errorCode))+"; "+("errorMessage = "+Utils.prettyPrint($1.errorMessage))+"; "+("message = "+Utils.prettyPrint($1.message))+"; "+("name = "+Utils.prettyPrint($1.name))+"; "+("stack = "+MsalPreamble_GeneratedPrintf.p$2($1.stack))+"}";
 };
 MsalPreamble_GeneratedPrintf.p$2=function($1)
 {
  return $1==null?"null":"Some "+Utils.prettyPrint($1.$0);
 };
 GeneratedPrintf.p=function($1)
 {
  return"{"+("accessToken = "+Utils.prettyPrint($1.accessToken))+"; "+("account = "+Utils.prettyPrint($1.account))+"; "+("accountState = "+Utils.prettyPrint($1.accountState))+"; "+("expiresOn = "+Utils.prettyPrint($1.expiresOn))+"; "+("idToken = "+Utils.prettyPrint($1.idToken))+"; "+("scopes = "+Utils.prettyPrint($1.scopes))+"; "+("tenantId = "+Utils.prettyPrint($1.tenantId))+"; "+("tokenType = "+Utils.prettyPrint($1.tokenType))+"; "+("uniqueId = "+Utils.prettyPrint($1.uniqueId))+"}";
 };
 Runtime.OnLoad(function()
 {
  Msal$1.main();
 });
});
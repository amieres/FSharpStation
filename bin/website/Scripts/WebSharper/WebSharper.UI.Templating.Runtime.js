(function()
{
 "use strict";
 var Global,WebSharper,Obj,UI,Templating,Runtime,Server,TemplateInitializer,TemplateInstances,Handler,TemplateInstance,Client,IntelliFactory,Runtime$1,Collections,Dictionary,Arrays,Var,Operators,Doc,HashSet,Enumerator,Seq,MatchFailureException;
 Global=window;
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 UI=WebSharper.UI=WebSharper.UI||{};
 Templating=UI.Templating=UI.Templating||{};
 Runtime=Templating.Runtime=Templating.Runtime||{};
 Server=Runtime.Server=Runtime.Server||{};
 TemplateInitializer=Server.TemplateInitializer=Server.TemplateInitializer||{};
 TemplateInstances=Server.TemplateInstances=Server.TemplateInstances||{};
 Handler=Server.Handler=Server.Handler||{};
 TemplateInstance=Server.TemplateInstance=Server.TemplateInstance||{};
 Client=Runtime.Client=Runtime.Client||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime$1=IntelliFactory&&IntelliFactory.Runtime;
 Collections=WebSharper&&WebSharper.Collections;
 Dictionary=Collections&&Collections.Dictionary;
 Arrays=WebSharper&&WebSharper.Arrays;
 Var=UI&&UI.Var;
 Operators=WebSharper&&WebSharper.Operators;
 Doc=UI&&UI.Doc;
 HashSet=Collections&&Collections.HashSet;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 Seq=WebSharper&&WebSharper.Seq;
 MatchFailureException=WebSharper&&WebSharper.MatchFailureException;
 TemplateInitializer=Server.TemplateInitializer=Runtime$1.Class({
  get_Vars:function()
  {
   return this.vars;
  },
  get_Id:function()
  {
   return this.id;
  }
 },Obj,TemplateInitializer);
 TemplateInitializer.New=Runtime$1.Ctor(function(id,vars)
 {
  var $1,d,a,i,$2,f,t;
  this.id=id;
  this.vars=vars;
  d=new Dictionary.New$5();
  a=this.vars;
  for(i=0,$2=a.length-1;i<=$2;i++){
   f=Arrays.get(a,i);
   t=f[1];
   d.set_Item(f[0],t===0?Var.Create$1(""):t===1?Var.Create$1(0):t===2?Var.Create$1(false):Operators.FailWith("Invalid value type"));
  }
  TemplateInstances.get_Instances().set_Item(this.id,new TemplateInstance.New({
   $:0,
   $0:d
  },Doc.Empty()));
 },TemplateInitializer);
 TemplateInstances.$cctor=function()
 {
  TemplateInstances.$cctor=Global.ignore;
  TemplateInstances.instances=new Dictionary.New$5();
 };
 TemplateInstances=Server.TemplateInstances=Runtime$1.Class({},Obj,TemplateInstances);
 TemplateInstances.GetInstance=function(key)
 {
  TemplateInstances.$cctor();
  return TemplateInstances.instances.get_Item(key);
 };
 TemplateInstances.get_Instances=function()
 {
  TemplateInstances.$cctor();
  return TemplateInstances.instances;
 };
 TemplateInstances.New=Runtime$1.Ctor(function()
 {
  TemplateInstances.$cctor();
 },TemplateInstances);
 Handler.CompleteHoles$145$20=function(key,s)
 {
  return function(el)
  {
   return function()
   {
    return TemplateInstances.GetInstance(key).Hole(s).Set(el.value);
   };
  };
 };
 Handler.EventQ2$120$42=function(key,f)
 {
  return function(el)
  {
   return function(ev)
   {
    return f({
     Vars:TemplateInstances.GetInstance(key),
     Target:el,
     Event:ev
    });
   };
  };
 };
 Handler.CompleteHoles=function(a,filledHoles,vars)
 {
  var allVars,filledVars,e,h,$1,n;
  function c(name,ty)
  {
   var p,r,r$1,r$2;
   return filledVars.Contains(name)?null:(p=ty===0?(r=Var.Create$1(""),[{
    $:7,
    $0:name,
    $1:r
   },r]):ty===1?(r$1=Var.Create$1(0),[{
    $:12,
    $0:name,
    $1:r$1
   },r$1]):ty===2?(r$2=Var.Create$1(false),[{
    $:8,
    $0:name,
    $1:r$2
   },r$2]):Operators.FailWith("Invalid value type"),(allVars.set_Item(name,p[1]),{
    $:1,
    $0:p[0]
   }));
  }
  allVars=new Dictionary.New$5();
  filledVars=new HashSet.New$3();
  e=Enumerator.Get(filledHoles);
  try
  {
   while(e.MoveNext())
    {
     h=e.Current();
     (h.$==7?($1=[h.$0,Client.Box(h.$1)],true):h.$==10?($1=[h.$0,Client.Box(h.$1)],true):h.$==9?($1=[h.$0,Client.Box(h.$1)],true):h.$==12?($1=[h.$0,Client.Box(h.$1)],true):h.$==11?($1=[h.$0,Client.Box(h.$1)],true):h.$==8&&($1=[h.$0,Client.Box(h.$1)],true))?(n=$1[0],filledVars.Add(n),allVars.set_Item(n,$1[1])):void 0;
    }
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
  return[Seq.append(filledHoles,Arrays.choose(function($2)
  {
   return c($2[0],$2[1]);
  },vars)),{
   $:0,
   $0:allVars
  }];
 };
 TemplateInstance=Server.TemplateInstance=Runtime$1.Class({
  Hole:function(name)
  {
   return this.allVars.get_Item(name);
  },
  get_Doc:function()
  {
   return this.doc;
  }
 },Obj,TemplateInstance);
 TemplateInstance.New=Runtime$1.Ctor(function(c,doc)
 {
  this.doc=doc;
  if(c.$==0)
   void 0;
  else
   throw new MatchFailureException.New("RuntimeClient.fs",47,8);
  this.allVars=c.$0;
 },TemplateInstance);
 Client.WrapEventWithOnlyArgs=Runtime$1.Curried3(function(f,el,ev)
 {
  return f(el,ev);
 });
 Client.WrapInstanceEventWithArgs=function(ti,f)
 {
  return(Runtime$1.Curried3(f))(ti[0]);
 };
 Client.WrapInstanceEvent=function(ti,f)
 {
  return function()
  {
   return function()
   {
    return f(ti[0]);
   };
  };
 };
 Client.Box=Global.id;
}());

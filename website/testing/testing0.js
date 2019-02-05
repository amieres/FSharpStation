(function()
{
 "use strict";
 var Global,FsRoot,Library,Monads,Seq,String,LibraryJS,Var,ListModel,LoadFiles,TestingJS,Comment,Sort,SC$1,testing_Templates,WebSharper,Seq$1,Strings,Slice,Unchecked,UI,View,Var$1,FromView,Doc,Concurrency,Remoting,Date,BirstComment,Rpc,Templating,Runtime,Server,ProviderBuilder,Handler,TemplateInstance,Client,Templates,Var$2,AsyncResultMAutoOpen,AjaxRemotingProvider,IntelliFactory,Runtime$1,Utils,System,Guid,Arrays,ListModel$1,$;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 Monads=Library.Monads=Library.Monads||{};
 Seq=Monads.Seq=Monads.Seq||{};
 String=Library.String=Library.String||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Var=LibraryJS.Var=LibraryJS.Var||{};
 ListModel=LibraryJS.ListModel=LibraryJS.ListModel||{};
 LoadFiles=LibraryJS.LoadFiles=LibraryJS.LoadFiles||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 Comment=TestingJS.Comment=TestingJS.Comment||{};
 Sort=Comment.Sort=Comment.Sort||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 testing_Templates=Global.testing_Templates=Global.testing_Templates||{};
 WebSharper=Global.WebSharper;
 Seq$1=WebSharper&&WebSharper.Seq;
 Strings=WebSharper&&WebSharper.Strings;
 Slice=WebSharper&&WebSharper.Slice;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 UI=WebSharper&&WebSharper.UI;
 View=UI&&UI.View;
 Var$1=UI&&UI.Var;
 FromView=UI&&UI.FromView;
 Doc=UI&&UI.Doc;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Remoting=WebSharper&&WebSharper.Remoting;
 Date=Global.Date;
 BirstComment=FsRoot&&FsRoot.BirstComment;
 Rpc=BirstComment&&BirstComment.Rpc;
 Templating=UI&&UI.Templating;
 Runtime=Templating&&Templating.Runtime;
 Server=Runtime&&Runtime.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Var$2=UI&&UI.Var$1;
 AsyncResultMAutoOpen=Monads&&Monads.AsyncResultMAutoOpen;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 IntelliFactory=Global.IntelliFactory;
 Runtime$1=IntelliFactory&&IntelliFactory.Runtime;
 Utils=WebSharper&&WebSharper.Utils;
 System=Global.System;
 Guid=System&&System.Guid;
 Arrays=WebSharper&&WebSharper.Arrays;
 ListModel$1=UI&&UI.ListModel;
 $=Global.jQuery;
 Seq.ofOption=function(vO)
 {
  return vO==null?[]:[vO.$0];
 };
 Seq.absorbR$1=function(vOS)
 {
  return Seq$1.choose(function(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  },vOS);
 };
 Seq.absorbO$1=function(vOS)
 {
  return Seq$1.choose(Global.id,vOS);
 };
 Seq.insertR$1=function(vSR)
 {
  return vSR.$==0?Seq$1.map(function(a)
  {
   return{
    $:0,
    $0:a
   };
  },vSR.$0):(Seq.rtn$1())(Library.Error$1(vSR.$0));
 };
 Seq.insertO$1=function(vSO)
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
  return o==null?(Seq.rtn$1())(null):o.$0;
 };
 Seq.rtn$1=function()
 {
  SC$1.$cctor();
  return SC$1.rtn;
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
 Library.Error$1=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 Var.lensView=function(get,update,view0,_var)
 {
  var id,view,$1;
  id=Var.freshId();
  view=View.Map2(function(v)
  {
   return get(v);
  },_var.get_View(),view0);
  $1=new UI.Var({
   Get:function()
   {
    return get(_var.Get());
   },
   Set:function(v)
   {
    return _var.Update(function(t)
    {
     return update(t,v);
    });
   },
   SetFinal:function(v)
   {
    return this.Set(v);
   },
   Update:function(f)
   {
    return _var.Update(function(t)
    {
     return update(t,f(get(t)));
    });
   },
   UpdateMaybe:function(f)
   {
    return _var.UpdateMaybe(function(t)
    {
     var x;
     x=f(get(t));
     return x==null?null:{
      $:1,
      $0:update(t,x.$0)
     };
    });
   },
   get_View:function()
   {
    return view;
   },
   get_Id:function()
   {
    return id;
   }
  });
  Var$1.New.call($1);
  return $1;
 };
 Var.freshId=function()
 {
  Var.set_counter(Var.counter()+1);
  return"varuid"+Global.String(Var.counter());
 };
 Var.counter=function()
 {
  SC$1.$cctor();
  return SC$1.counter;
 };
 Var.set_counter=function($1)
 {
  SC$1.$cctor();
  SC$1.counter=$1;
 };
 ListModel.currentLens=function(def,curr,model)
 {
  return ListModel["currentLensUpd'"](def,curr,function(v)
  {
   model.UpdateBy(function()
   {
    return model.TryFindByKey(model.key(v))==null?null:{
     $:1,
     $0:v
    };
   },model.key(v));
  },model);
 };
 ListModel["currentLensUpd'"]=function(def,curr,upd,model)
 {
  return new FromView.New(View.Map2(function(_mdl,kO)
  {
   var o;
   o=kO==null?null:model.TryFindByKey(kO.$0);
   return o==null?def:o.$0;
  },model.v,curr),upd);
 };
 ListModel.currentLensUpd=function(def,curr,upd,model)
 {
  var f;
  function b(a)
  {
   return model.TryFindByKey(a);
  }
  function g(o)
  {
   return o==null?def:o.$0;
  }
  return Var.lensView((f=function(o)
  {
   return o==null?null:b(o.$0);
  },function(x)
  {
   return g(f(x));
  }),function(kO,v)
  {
   var a;
   a=upd(v);
   kO==null?void 0:a(kO.$0);
   return kO;
  },model.v,curr);
 };
 ListModel.lensDef=function(def,k,m)
 {
  function get(o)
  {
   return o==null?def:o.$0;
  }
  return ListModel["lensIntoO'"](m,get,function()
  {
   return Global.id;
  },k,View.Map(get,m.TryFindByKeyAsView(k)));
 };
 ListModel.docLensMapViewO=function(def,mapView,f,m)
 {
  function get(k,v)
  {
   return f(k,ListModel["lensIntoO'"](m,function(o)
   {
    return o==null?def:o.$0;
   },function()
   {
    return Global.id;
   },k,v));
  }
  return Doc.ConvertSeqBy(m.key,function($1)
  {
   return function($2)
   {
    return get($1,$2);
   };
  },View.Map(mapView,m.v));
 };
 ListModel.docLensMapView=function(mapView,f,m)
 {
  function get(k,v)
  {
   return f(k,ListModel["lensInto'"](m,Global.id,function()
   {
    return Global.id;
   },k,v));
  }
  return Doc.ConvertSeqBy(m.key,function($1)
  {
   return function($2)
   {
    return get($1,$2);
   };
  },View.Map(mapView,m.v));
 };
 ListModel["lensIntoO'"]=function(m,get,update,key,view)
 {
  var id,$1;
  id=Var.freshId();
  $1=new Var$1({
   Get:function()
   {
    return get(m.TryFindByKey(key));
   },
   Set:function(v)
   {
    return m.UpdateBy(function(i)
    {
     return{
      $:1,
      $0:(update(i))(v)
     };
    },key);
   },
   Update:function(f)
   {
    return m.UpdateBy(function(i)
    {
     var x;
     return{
      $:1,
      $0:(x=f(get({
       $:1,
       $0:i
      })),(update(i))(x))
     };
    },key);
   },
   UpdateMaybe:function(f)
   {
    return m.UpdateBy(function(i)
    {
     var x,m$1;
     x=f(get({
      $:1,
      $0:i
     }));
     m$1=update(i);
     return x==null?null:{
      $:1,
      $0:m$1(x.$0)
     };
    },key);
   },
   SetFinal:function(v)
   {
    return this.Set(v);
   },
   get_View:function()
   {
    return view;
   },
   get_Id:function()
   {
    return id;
   }
  });
  Var$1.New.call($1);
  return $1;
 };
 ListModel["lensInto'"]=function(m,get,update,key,view)
 {
  var id,$1;
  id=Var.freshId();
  $1=new Var$1({
   Get:function()
   {
    return get(m.FindByKey(key));
   },
   Set:function(v)
   {
    return m.UpdateBy(function(i)
    {
     return{
      $:1,
      $0:(update(i))(v)
     };
    },key);
   },
   Update:function(f)
   {
    return m.UpdateBy(function(i)
    {
     var x;
     return{
      $:1,
      $0:(x=f(get(i)),(update(i))(x))
     };
    },key);
   },
   UpdateMaybe:function(f)
   {
    return m.UpdateBy(function(i)
    {
     var x,m$1;
     x=f(get(i));
     m$1=update(i);
     return x==null?null:{
      $:1,
      $0:m$1(x.$0)
     };
    },key);
   },
   SetFinal:function(v)
   {
    return this.Set(v);
   },
   get_View:function()
   {
    return view;
   },
   get_Id:function()
   {
    return id;
   }
  });
  Var$1.New.call($1);
  return $1;
 };
 LoadFiles.LoadFilesAsync=function(files)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.For(files,function(a)
   {
    return Concurrency.Bind(LoadFiles.LoadFile(a),function()
    {
     return Concurrency.Return(null);
    });
   });
  });
 };
 LoadFiles.LoadFile=function(file)
 {
  var o,o$1,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,ref,b;
  function EndsWith(s,fn)
  {
   return Strings.EndsWith(fn,s)?{
    $:1,
    $0:null
   }:null;
  }
  function a($11,$12)
  {
   try
   {
    ref.onload=$11;
    self.document.head.appendChild(ref);
   }
   catch(e)
   {
    $12(e);
   }
  }
  o=(o$1=(($2=EndsWith(".js",file),$2!=null&&$2.$==1)?!self.document.querySelector("script[src='"+file+"']")||(($3=EndsWith(".fsx",file),$3!=null&&$3.$==1)?!self.document.querySelector("script[src='"+file+"']")||($4=EndsWith(".fs",file),$4!=null&&$4.$==1)&&!self.document.querySelector("script[src='"+file+"']"):($5=EndsWith(".fs",file),$5!=null&&$5.$==1)&&!self.document.querySelector("script[src='"+file+"']")):($6=EndsWith(".fsx",file),$6!=null&&$6.$==1)?!self.document.querySelector("script[src='"+file+"']")||($7=EndsWith(".fs",file),$7!=null&&$7.$==1)&&!self.document.querySelector("script[src='"+file+"']"):($8=EndsWith(".fs",file),$8!=null&&$8.$==1)&&!self.document.querySelector("script[src='"+file+"']"))?{
   $:1,
   $0:LoadFiles.createScript(file)
  }:($9=EndsWith(".css",file),$9!=null&&$9.$==1)?{
   $:1,
   $0:LoadFiles.createCss(file)
  }:($10=EndsWith(".html",file),$10!=null&&$10.$==1)?{
   $:1,
   $0:LoadFiles.createHtml(file)
  }:null,o$1==null?null:{
   $:1,
   $0:(ref=o$1.$0,Concurrency.FromContinuations(function($11,$12,$13)
   {
    return a.apply(null,[$11,$12,$13]);
   }))
  });
  return o==null?(b=null,Concurrency.Delay(function()
  {
   return Concurrency.Return(null);
  })):o.$0;
 };
 LoadFiles.createHtml=function(fn)
 {
  var fileRef;
  fileRef=self.document.createElement("link");
  fileRef.setAttribute("rel","import");
  fileRef.setAttribute("type","text/html");
  fileRef.setAttribute("href",fn);
  return fileRef;
 };
 LoadFiles.createCss=function(fn)
 {
  var fileRef;
  fileRef=self.document.createElement("link");
  fileRef.setAttribute("rel","stylesheet");
  fileRef.setAttribute("type","text/css");
  fileRef.setAttribute("href",fn);
  return fileRef;
 };
 LoadFiles.createScript=function(fn)
 {
  var fileRef;
  fileRef=self.document.createElement("script");
  fileRef.setAttribute("type","text/javascript");
  fileRef.setAttribute("src",fn);
  return fileRef;
 };
 Sort.Oldest={
  $:1
 };
 Sort.Newest={
  $:0
 };
 Comment.main$402$35=function()
 {
  return function()
  {
   Comment.addComment(Comment.newCommentV().Get());
  };
 };
 Comment.main$401$35=function()
 {
  return function(ev)
  {
   if(ev.Event.keyCode===13)
    Comment.addComment(Comment.newCommentV().Get());
  };
 };
 Comment.main=function()
 {
  var b,b$1;
  Remoting.set_EndPoint("http://localhost:9009");
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.While(function()
   {
    return true;
   },Concurrency.Delay(function()
   {
    Comment.nowV().Set(Date.now());
    Rpc.iterA(Comment.getComments());
    return Concurrency.Bind(Concurrency.Sleep(60000),function()
    {
     return Concurrency.Return(null);
    });
   }));
  })),null);
  Concurrency.Start((b$1=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(LoadFiles.LoadFilesAsync(["//cdn.muicss.com/mui-0.9.41/extra/mui-combined.js","//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"]),function()
   {
    var x,b$2,L,R,t,t$1,p,i,a;
    x=(b$2=(L=ListModel.docLensMapView(Global.id,Comment.renderComment,Comment.commentsV()),(R=ListModel.docLensMapView(function(x$1)
    {
     return Seq.ofOption(Seq$1.tryLast(x$1));
    },Comment.renderComment,Comment.commentsV()),(t=(t$1=ProviderBuilder.Make(),t$1.WithHole(Handler.EventQ2(t$1.k,"keyup",function()
    {
     return t$1.i;
    },function(ev)
    {
     if(ev.Event.keyCode===13)
      Comment.addComment(Comment.newCommentV().Get());
    }))),t.WithHole(Handler.EventQ2(t.k,"add",function()
    {
     return t.i;
    },function()
    {
     Comment.addComment(Comment.newCommentV().Get());
    }))).WithHole({
     $:2,
     $0:"addclass",
     $1:View.Map(function($1)
     {
      return Strings.Trim($1)===""?"NoComment":"Comment";
     },Comment.newCommentV().get_View())
    }).WithHole({
     $:8,
     $0:"newcomment",
     $1:Comment.newCommentV()
    }).WithHole({
     $:0,
     $0:"recent",
     $1:R
    })).WithHole({
     $:0,
     $0:"list",
     $1:L
    })),(p=Handler.CompleteHoles(b$2.k,b$2.h,[["newcomment",0]]),(i=new TemplateInstance.New(p[1],testing_Templates.comments(p[0])),(b$2.i=i,i)))).get_Doc();
    a=self.document.body;
    Templates.LoadLocalTemplates("");
    Doc.Run(a,x);
    return Concurrency.Zero();
   });
  })),null);
 };
 Comment.renderComment$354$49=function(cid)
 {
  return function()
  {
   if(Global.confirm("Remove this comment?"))
    Comment.deleteComment(cid);
  };
 };
 Comment.renderComment$362$49=function(cid,comment)
 {
  return function()
  {
   Comment.editingIdV().Set(cid);
   Comment.editCommentV().Set(comment.Get());
  };
 };
 Comment.renderComment$372$49=function(comment,cid)
 {
  return function()
  {
   Comment.editingIdV().Set("");
   comment.Set(Comment.editCommentV().Get());
   Comment.updateComment(cid,Comment.editCommentV().Get());
  };
 };
 Comment.renderComment$371$49=function()
 {
  return function()
  {
   Comment.editingIdV().Set("");
  };
 };
 Comment.renderComment=function(cid,cV)
 {
  var comment,b,E,E$1,E$2,f,p,i;
  comment=Var$2.Lens(cV,function($1)
  {
   return $1.comment;
  },function($1,$2)
  {
   return{
    commentId:$1.commentId,
    title:$1.title,
    comment:$2,
    created:$1.created,
    modified:$1.modified,
    userName:$1.userName,
    order:$1.order
   };
  });
  return(b=(E=Doc.BindView(Global.id,View.Map2(function($1,$2)
  {
   var b$1,t,t$1,p$1,i$1,b$2,p$2,i$2;
   return cid===$1?(b$1=(t=(t$1=ProviderBuilder.Make().WithHole({
    $:8,
    $0:"editcomment",
    $1:Comment.editCommentV()
   }),t$1.WithHole(Handler.EventQ2(t$1.k,"cancel",function()
   {
    return t$1.i;
   },function()
   {
    Comment.editingIdV().Set("");
   }))),t.WithHole(Handler.EventQ2(t.k,"save",function()
   {
    return t.i;
   },function()
   {
    Comment.editingIdV().Set("");
    comment.Set(Comment.editCommentV().Get());
    Comment.updateComment(cid,Comment.editCommentV().Get());
   }))),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[["editcomment",0]]),(i$1=new TemplateInstance.New(p$1[1],testing_Templates.editing(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc():(b$2=ProviderBuilder.Make().WithHole({
    $:1,
    $0:"comment",
    $1:$2.comment
   }),(p$2=Handler.CompleteHoles(b$2.k,b$2.h,[]),(i$2=new TemplateInstance.New(p$2[1],testing_Templates.commentc(p$2[0])),(b$2.i=i$2,i$2)))).get_Doc();
  },Comment.editingIdV().get_View(),cV.get_View())),(E$1=Doc.BindView(Global.id,View.Map2(function($1,$2)
  {
   var b$1,t,p$1,i$1;
   return $1.userName===$2?(b$1=(t=ProviderBuilder.Make(),t.WithHole(Handler.EventQ2(t.k,"edit",function()
   {
    return t.i;
   },function()
   {
    Comment.editingIdV().Set(cid);
    Comment.editCommentV().Set(comment.Get());
   }))),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],testing_Templates.editable2(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc():Doc.get_Empty();
  },cV.get_View(),Comment.userV().get_View())),(E$2=Doc.BindView(Global.id,View.Map2(function($1,$2)
  {
   var b$1,t,p$1,i$1;
   return $1.userName===$2?(b$1=(t=ProviderBuilder.Make(),t.WithHole(Handler.EventQ2(t.k,"delete",function()
   {
    return t.i;
   },function()
   {
    if(Global.confirm("Remove this comment?"))
     Comment.deleteComment(cid);
   }))),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],testing_Templates.editable1(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc():Doc.get_Empty();
  },cV.get_View(),Comment.userV().get_View())),(f=View.Bind(Comment.fromNowW,View.Map(function($1)
  {
   return $1.modified;
  },cV.get_View())),ProviderBuilder.Make().WithHole({
   $:2,
   $0:"user",
   $1:View.Map(function($1)
   {
    return $1.userName;
   },cV.get_View())
  }).WithHole({
   $:2,
   $0:"fromnow",
   $1:f
  })).WithHole({
   $:0,
   $0:"editable1",
   $1:E$2
  })).WithHole({
   $:0,
   $0:"editable2",
   $1:E$1
  })).WithHole({
   $:0,
   $0:"editing",
   $1:E
  })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.commentx(p[0])),(b.i=i,i)))).get_Doc();
 };
 Comment.fromNowW=function(d)
 {
  return View.Map(function($1)
  {
   return Global.moment(d).fromNow();
  },Comment.nowV().get_View());
 };
 Comment.updateComment=function(key,comment)
 {
  var b;
  if(Strings.Trim(comment)!=="")
   {
    Rpc.iterA((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
    {
     return b.Bind$4((new AjaxRemotingProvider.New()).Async("BirstComment:FsRoot.BirstComment+Rpc.updateComment:-1768176827",[key,Library["String.Left"](comment,40),comment]),function()
     {
      return b.Bind$4(Comment.getComments(),function()
      {
       return b.Return();
      });
     });
    }))));
   }
 };
 Comment.deleteComment=function(key)
 {
  var b;
  Rpc.iterA((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
  {
   Comment.commentsV().RemoveByKey(key);
   return b.Bind$4((new AjaxRemotingProvider.New()).Async("BirstComment:FsRoot.BirstComment+Rpc.deleteComment:-1324353239",[key]),function()
   {
    return b.Bind$4(Comment.getComments(),function()
    {
     return b.Return();
    });
   });
  }))));
 };
 Comment.addComment=function(comment)
 {
  var b;
  if(Strings.Trim(comment)!=="")
   {
    Rpc.iterA((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
    {
     var title,key,order,cs,now,newC;
     title=Library["String.Left"](comment,40);
     key=(((Runtime$1.Curried3(function($1,$2,$3)
     {
      return $1(Utils.toSafe($2)+"-"+Utils.prettyPrint($3));
     }))(Global.id))(Comment.keyPrefixV().Get()))(Guid.NewGuid());
     order=(cs=(Comment.commentsV())["var"].Get(),(Seq$1.isEmpty(cs)?0:Seq$1.max(Seq$1.map(function(c)
     {
      return c.order;
     },cs)))+1);
     now=Date.now();
     newC={
      commentId:key,
      title:title,
      comment:comment,
      created:now,
      modified:now,
      userName:Comment.userV().Get(),
      order:order
     };
     Comment.commentsV().Append(newC);
     return b.Bind$4((new AjaxRemotingProvider.New()).Async("BirstComment:FsRoot.BirstComment+Rpc.addComment:-1474170970",[newC.commentId,newC.title,newC.comment,newC.userName]),function()
     {
      return b.Bind$4(Comment.getComments(),function()
      {
       Comment.newCommentV().Set("");
       return b.Zero();
      });
     });
    }))));
   }
 };
 Comment.getComments=function()
 {
  var b;
  b=AsyncResultMAutoOpen.asyncResultM();
  return b.Run(b.Delay(function()
  {
   return b.Bind$4((new AjaxRemotingProvider.New()).Async("BirstComment:FsRoot.BirstComment+Rpc.getComments:797728594",[Comment.topNV().Get(),Comment.keyPrefixV().Get()+"%"]),function(a)
   {
    Comment.commentsV().Set(a);
    return b.Zero();
   });
  }));
 };
 Comment.commentsV=function()
 {
  SC$1.$cctor();
  return SC$1.commentsV;
 };
 Comment.editingIdV=function()
 {
  SC$1.$cctor();
  return SC$1.editingIdV;
 };
 Comment.editCommentV=function()
 {
  SC$1.$cctor();
  return SC$1.editCommentV;
 };
 Comment.newCommentV=function()
 {
  SC$1.$cctor();
  return SC$1.newCommentV;
 };
 Comment.keyPrefixV=function()
 {
  SC$1.$cctor();
  return SC$1.keyPrefixV;
 };
 Comment.topNV=function()
 {
  SC$1.$cctor();
  return SC$1.topNV;
 };
 Comment.ascendingV=function()
 {
  SC$1.$cctor();
  return SC$1.ascendingV;
 };
 Comment.userV=function()
 {
  SC$1.$cctor();
  return SC$1.userV;
 };
 Comment.nowV=function()
 {
  SC$1.$cctor();
  return SC$1.nowV;
 };
 SC$1.$cctor=function()
 {
  var f;
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
   var a,b;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a=0,(b=Arrays.length(s)-2,Unchecked.Compare(a,b)===1?a:b))
   });
  }
  function g$2(s)
  {
   return Strings.concat("\n",s);
  }
  SC$1.rtn=function(v)
  {
   return[v];
  };
  SC$1.unindentStr=function(x)
  {
   return g(String.unindent(x));
  };
  SC$1.skipLastLine=(f=function(x)
  {
   return g$1(f$1(x));
  },function(x)
  {
   return g$2(f(x));
  });
  SC$1.counter=1;
  SC$1.nowV=Var$2.Create$1(Date.now());
  SC$1.userV=Var$2.Create$1("hguerra");
  SC$1.ascendingV=Var$2.Create$1(Sort.Newest);
  SC$1.topNV=Var$2.Create$1(20);
  SC$1.keyPrefixV=Var$2.Create$1("Demo1");
  SC$1.newCommentV=Var$2.Create$1("");
  SC$1.editCommentV=Var$2.Create$1("");
  SC$1.editingIdV=Var$2.Create$1("");
  SC$1.commentsV=ListModel$1.Create(function(l)
  {
   return l.commentId;
  },[]);
 };
 testing_Templates.comments=function(h)
 {
  return h?Templates.GetOrLoadTemplate("birstcomments",{
   $:1,
   $0:"comments"
  },function()
  {
   return $.parseHTML("<div>\r\n    <ul>\r\n      <div ws-hole=\"Recent\"></div>\r\n    </ul>\r\n    <div>\r\n      <div class=\"mui-textfield\" style=\"padding-top:2px; margin-bottom:5px;\">\r\n        <input ws-var=\"newComment\" ws-onkeyup=\"keyup\" placeholder=\"Enter new comment:\">\r\n      </div>\r\n      <button ws-onclick=\"add\" class=\"${addClass} mui-btn mui-btn--raised mui-btn--small\">Add</button>\r\n    </div>\r\n    <style>\r\n      li:hover i.mui--invisible { visibility: visible }\r\n      .NoComment { display: none }\r\n    </style>\r\n    Comments:\r\n    <ul ws-hole=\"List\"></ul>    \r\n  </div>");
  },h):Templates.PrepareTemplate("birstcomments",{
   $:1,
   $0:"comments"
  },function()
  {
   return $.parseHTML("<div>\r\n    <ul>\r\n      <div ws-hole=\"Recent\"></div>\r\n    </ul>\r\n    <div>\r\n      <div class=\"mui-textfield\" style=\"padding-top:2px; margin-bottom:5px;\">\r\n        <input ws-var=\"newComment\" ws-onkeyup=\"keyup\" placeholder=\"Enter new comment:\">\r\n      </div>\r\n      <button ws-onclick=\"add\" class=\"${addClass} mui-btn mui-btn--raised mui-btn--small\">Add</button>\r\n    </div>\r\n    <style>\r\n      li:hover i.mui--invisible { visibility: visible }\r\n      .NoComment { display: none }\r\n    </style>\r\n    Comments:\r\n    <ul ws-hole=\"List\"></ul>    \r\n  </div>");
  });
 };
 testing_Templates.commentx=function(h)
 {
  return h?Templates.GetOrLoadTemplate("birstcomments",{
   $:1,
   $0:"commentx"
  },function()
  {
   return $.parseHTML("\r\n        <li>\r\n          <div></div>\r\n          <div ws-replace=\"Editing\"></div>\r\n          <a> <i class=\"fa fa-user\"></i> ${user} </a>\r\n          <div ws-replace=\"Editable1\"></div>\r\n          <span class=\"mui--text-caption mui--text-accent-secondary\">${fromNow}</span>\r\n          <div ws-replace=\"Editable2\"></div>\r\n        </li>\r\n    ");
  },h):Templates.PrepareTemplate("birstcomments",{
   $:1,
   $0:"commentx"
  },function()
  {
   return $.parseHTML("\r\n        <li>\r\n          <div></div>\r\n          <div ws-replace=\"Editing\"></div>\r\n          <a> <i class=\"fa fa-user\"></i> ${user} </a>\r\n          <div ws-replace=\"Editable1\"></div>\r\n          <span class=\"mui--text-caption mui--text-accent-secondary\">${fromNow}</span>\r\n          <div ws-replace=\"Editable2\"></div>\r\n        </li>\r\n    ");
  });
 };
 testing_Templates.commentc=function(h)
 {
  return h?Templates.GetOrLoadTemplate("birstcomments",{
   $:1,
   $0:"commentc"
  },function()
  {
   return $.parseHTML("${comment}");
  },h):Templates.PrepareTemplate("birstcomments",{
   $:1,
   $0:"commentc"
  },function()
  {
   return $.parseHTML("${comment}");
  });
 };
 testing_Templates.editing=function(h)
 {
  return h?Templates.GetOrLoadTemplate("birstcomments",{
   $:1,
   $0:"editing"
  },function()
  {
   return $.parseHTML("<div>\r\n            <div class=\"mui-textfield\">\r\n              <input ws-var=\"editComment\" placeholder=\"Enter comment:\">\r\n            </div>          \r\n            <button ws-onclick=\"save\" class=\"mui-btn mui-btn--raised mui-btn--small\">Save  </button>\r\n            <button ws-onclick=\"cancel\" class=\"mui-btn mui-btn--raised mui-btn--small\">Cancel</button>\r\n          </div>");
  },h):Templates.PrepareTemplate("birstcomments",{
   $:1,
   $0:"editing"
  },function()
  {
   return $.parseHTML("<div>\r\n            <div class=\"mui-textfield\">\r\n              <input ws-var=\"editComment\" placeholder=\"Enter comment:\">\r\n            </div>          \r\n            <button ws-onclick=\"save\" class=\"mui-btn mui-btn--raised mui-btn--small\">Save  </button>\r\n            <button ws-onclick=\"cancel\" class=\"mui-btn mui-btn--raised mui-btn--small\">Cancel</button>\r\n          </div>");
  });
 };
 testing_Templates.editable2=function(h)
 {
  return h?Templates.GetOrLoadTemplate("birstcomments",{
   $:1,
   $0:"editable2"
  },function()
  {
   return $.parseHTML("\r\n            <i ws-onclick=\"edit\" title=\"edit\" style=\"cursor: pointer;\" class=\"fa fa-pencil mui--invisible\"></i>\r\n          ");
  },h):Templates.PrepareTemplate("birstcomments",{
   $:1,
   $0:"editable2"
  },function()
  {
   return $.parseHTML("\r\n            <i ws-onclick=\"edit\" title=\"edit\" style=\"cursor: pointer;\" class=\"fa fa-pencil mui--invisible\"></i>\r\n          ");
  });
 };
 testing_Templates.editable1=function(h)
 {
  return h?Templates.GetOrLoadTemplate("birstcomments",{
   $:1,
   $0:"editable1"
  },function()
  {
   return $.parseHTML("\r\n              <i ws-onclick=\"delete\" title=\"remove\" style=\"cursor: pointer;\" class=\"fa fa-minus-circle mui--invisible\"></i>\r\n          ");
  },h):Templates.PrepareTemplate("birstcomments",{
   $:1,
   $0:"editable1"
  },function()
  {
   return $.parseHTML("\r\n              <i ws-onclick=\"delete\" title=\"remove\" style=\"cursor: pointer;\" class=\"fa fa-minus-circle mui--invisible\"></i>\r\n          ");
  });
 };
 Runtime$1.OnLoad(function()
 {
  Comment.main();
 });
}());

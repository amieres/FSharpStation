CIPHERSpaceLoadFilesDoAfter(function() { IntelliFactory.Runtime.Start() });
CIPHERSpaceLoadFiles(["https://code.jquery.com/jquery-3.1.1.min.js"], function()
{
 "use strict";
 var Global,FsRoot,Library,LibraryJS,Pojo,GenEditor,Position,AnnotationType,Annotation,Completion,GenEditorHook,GenEditor$1,Element,LoadFiles,REGEX,CodeMirror,Pos,AnchorHead,WebSharper,Obj,Editor,CodeMirror$1,Hint,Hint$1,Response,Options,Lint,Response$1,CodeMirrorGenAdapter,CodeMirrorRT,TestingJS,CodeMirror$2,SC$1,Utils,console,Seq,UI,View,Unchecked,Var$1,Concurrency,Strings,Arrays,IntelliFactory,Runtime,Doc,AttrProxy,Client,Templates,Operators;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Pojo=LibraryJS.Pojo=LibraryJS.Pojo||{};
 GenEditor=LibraryJS.GenEditor=LibraryJS.GenEditor||{};
 Position=GenEditor.Position=GenEditor.Position||{};
 AnnotationType=GenEditor.AnnotationType=GenEditor.AnnotationType||{};
 Annotation=GenEditor.Annotation=GenEditor.Annotation||{};
 Completion=GenEditor.Completion=GenEditor.Completion||{};
 GenEditorHook=GenEditor.GenEditorHook=GenEditor.GenEditorHook||{};
 GenEditor$1=GenEditor.GenEditor=GenEditor.GenEditor||{};
 Element=LibraryJS.Element=LibraryJS.Element||{};
 LoadFiles=LibraryJS.LoadFiles=LibraryJS.LoadFiles||{};
 REGEX=LibraryJS.REGEX=LibraryJS.REGEX||{};
 CodeMirror=LibraryJS.CodeMirror=LibraryJS.CodeMirror||{};
 Pos=CodeMirror.Pos=CodeMirror.Pos||{};
 AnchorHead=CodeMirror.AnchorHead=CodeMirror.AnchorHead||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 Editor=CodeMirror.Editor=CodeMirror.Editor||{};
 CodeMirror$1=CodeMirror.CodeMirror=CodeMirror.CodeMirror||{};
 Hint=CodeMirror.Hint=CodeMirror.Hint||{};
 Hint$1=Hint.Hint=Hint.Hint||{};
 Response=Hint.Response=Hint.Response||{};
 Options=Hint.Options=Hint.Options||{};
 Lint=CodeMirror.Lint=CodeMirror.Lint||{};
 Response$1=Lint.Response=Lint.Response||{};
 CodeMirrorGenAdapter=LibraryJS.CodeMirrorGenAdapter=LibraryJS.CodeMirrorGenAdapter||{};
 CodeMirrorRT=CodeMirrorGenAdapter.CodeMirrorRT=CodeMirrorGenAdapter.CodeMirrorRT||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 CodeMirror$2=TestingJS.CodeMirror=TestingJS.CodeMirror||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 Utils=WebSharper&&WebSharper.Utils;
 console=Global.console;
 Seq=WebSharper&&WebSharper.Seq;
 UI=WebSharper&&WebSharper.UI;
 View=UI&&UI.View;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Var$1=UI&&UI.Var$1;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Strings=WebSharper&&WebSharper.Strings;
 Arrays=WebSharper&&WebSharper.Arrays;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Operators=WebSharper&&WebSharper.Operators;
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
 Position.New=function(line,col)
 {
  return{
   line:line,
   col:col
  };
 };
 AnnotationType.Hint={
  $:3
 };
 AnnotationType.Info={
  $:2
 };
 AnnotationType.Warning={
  $:1
 };
 AnnotationType.Error={
  $:0
 };
 Annotation.New=function(startP,endP,severity,message)
 {
  return{
   startP:startP,
   endP:endP,
   severity:severity,
   message:message
  };
 };
 Completion.New=function(kind,label,detail,replace)
 {
  return{
   kind:kind,
   label:label,
   detail:detail,
   replace:replace
  };
 };
 GenEditorHook.New=function(generateDoc,getValue,setValue,setDisabled,showAnnotations,posFromIndex,indexFromPos,getWordAt,getUri,setUri,hookOnChange)
 {
  return{
   generateDoc:generateDoc,
   getValue:getValue,
   setValue:setValue,
   setDisabled:setDisabled,
   showAnnotations:showAnnotations,
   posFromIndex:posFromIndex,
   indexFromPos:indexFromPos,
   getWordAt:getWordAt,
   getUri:getUri,
   setUri:setUri,
   hookOnChange:hookOnChange
  };
 };
 GenEditor$1.New=function(_var,disabled,annotations,onChange,onRender,autoCompletion,toolTip,declaration,editorO,editorHook)
 {
  return{
   "var":_var,
   disabled:disabled,
   annotations:annotations,
   onChange:onChange,
   onRender:onRender,
   autoCompletion:autoCompletion,
   toolTip:toolTip,
   declaration:declaration,
   editorO:editorO,
   editorHook:editorHook
  };
 };
 GenEditor.generateDoc=function(genE)
 {
  var onChange,o,o$1;
  onChange=(o=(o$1=genE.onChange,o$1==null?null:{
   $:1,
   $0:o$1.$0(genE)
  }),o==null?Global.ignore:o.$0);
  return(genE.editorHook.generateDoc(genE))(function(ed)
  {
   genE.editorO={
    $:1,
    $0:ed
   };
   GenEditor.bindVarEditor(genE.editorHook.hookOnChange,genE.editorHook.getValue,genE.editorHook.setValue,onChange,genE["var"]);
   View.Sink(genE.editorHook.showAnnotations,genE.annotations);
   View.Sink(genE.editorHook.setDisabled,genE.disabled);
   genE.onRender(genE);
  });
 };
 GenEditor.bindVarEditor=function(setEvent,getVal,setVal,onChange,_var)
 {
  var editorChanged,varChanged;
  editorChanged=[0];
  varChanged=[0];
  setEvent(function()
  {
   var v;
   v=getVal();
   !Unchecked.Equals(_var.Get(),v)?(editorChanged[0]=editorChanged[0]+1,_var.Set(v),onChange(v)):void 0;
  });
  View.Sink(function()
  {
   if(editorChanged[0]>varChanged[0])
    varChanged[0]=editorChanged[0];
   else
    if(!Unchecked.Equals(getVal(),_var.Get()))
     setVal(_var.Get());
  },_var.get_View());
 };
 GenEditor.newVarO=function(edh,v)
 {
  var x;
  x=GenEditor.newVar(edh,Var$1.Lens(v,function(o)
  {
   return o==null?"":o.$0;
  },function(sO,s)
  {
   return sO==null?null:{
    $:1,
    $0:s
   };
  }));
  return GenEditor.disabled(View.Map(function($1)
  {
   return $1==null;
  },v.get_View()),x);
 };
 GenEditor.newText=function(edh,v)
 {
  return GenEditor.newVar(edh,Var$1.Create$1(v));
 };
 GenEditor.newVar=function(edh,_var)
 {
  return GenEditor$1.New(_var,View.Const(false),View.Const([]),null,Global.ignore,null,null,null,null,edh);
 };
 GenEditor["var"]=function(genE)
 {
  return genE["var"];
 };
 GenEditor.disabled=function(dis,genE)
 {
  return GenEditor$1.New(genE["var"],dis,genE.annotations,genE.onChange,genE.onRender,genE.autoCompletion,genE.toolTip,genE.declaration,genE.editorO,genE.editorHook);
 };
 GenEditor.onRender=function(f,genE)
 {
  return GenEditor$1.New(genE["var"],genE.disabled,genE.annotations,genE.onChange,f,genE.autoCompletion,genE.toolTip,genE.declaration,genE.editorO,genE.editorHook);
 };
 GenEditor.onChange=function(f,genE)
 {
  return GenEditor$1.New(genE["var"],genE.disabled,genE.annotations,f,genE.onRender,genE.autoCompletion,genE.toolTip,genE.declaration,genE.editorO,genE.editorHook);
 };
 GenEditor.setVar=function(v,genE)
 {
  return GenEditor$1.New(v,genE.disabled,genE.annotations,genE.onChange,genE.onRender,genE.autoCompletion,genE.toolTip,genE.declaration,genE.editorO,genE.editorHook);
 };
 Element.findRootElement=function(e)
 {
  var root;
  return!function(a)
  {
   return e.getRootNode(a);
  }?self.document.body:(root=e.getRootNode(),!root.body?root.firstChild:root.body);
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
 Pos.New=function(line,ch)
 {
  return{
   line:line,
   ch:ch
  };
 };
 AnchorHead.New=function(anchor,head)
 {
  return{
   anchor:anchor,
   head:head
  };
 };
 Editor=CodeMirror.Editor=Runtime.Class({},Obj,Editor);
 Editor.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Editor);
 CodeMirror$1.New=function(_var,onChange,onRender,editorO,disabled)
 {
  return{
   "var":_var,
   onChange:onChange,
   onRender:onRender,
   editorO:editorO,
   disabled:disabled
  };
 };
 Hint$1.New=function(text,displayText,className)
 {
  return{
   text:text,
   displayText:displayText,
   className:className
  };
 };
 Response.New=function(list,from,to)
 {
  return{
   list:list,
   from:from,
   to:to
  };
 };
 Options.New=function(hint,completeSingle,container)
 {
  return{
   hint:hint,
   completeSingle:completeSingle,
   container:container
  };
 };
 Hint.showHints=function(ed,getHints,completeSingle,a)
 {
  var _v;
  _v=Options.New(Runtime.CreateFuncWithArgs(getHints),completeSingle,Element.findRootElement(ed.getWrapperElement()));
  _v.hint.async=1;
  ed.showHint(_v);
 };
 Response$1.New=function(message,severity,from,to)
 {
  return{
   message:message,
   severity:severity,
   from:from,
   to:to
  };
 };
 Lint.setLint=function(ed,getAnnotations)
 {
  ed.setOption("lint",{
   async:1,
   getAnnotations:Runtime.CreateFuncWithArgs(getAnnotations),
   container:Element.findRootElement(ed.getWrapperElement())
  });
 };
 CodeMirror.newVarO=function(v)
 {
  var x;
  x=CodeMirror.newVar(Var$1.Lens(v,function(o)
  {
   return o==null?"":o.$0;
  },function(sO,s)
  {
   return sO==null?null:{
    $:1,
    $0:s
   };
  }));
  return CodeMirror.disabled(View.Map(function($1)
  {
   return $1==null;
  },v.get_View()),x);
 };
 CodeMirror.newText=function(v)
 {
  return CodeMirror.newVar(Var$1.Create$1(v));
 };
 CodeMirror["var"]=function(cdmr)
 {
  return cdmr["var"];
 };
 CodeMirror.disabled=function(dis,cdmr)
 {
  return CodeMirror$1.New(cdmr["var"],cdmr.onChange,cdmr.onRender,cdmr.editorO,dis);
 };
 CodeMirror.onRender=function(f,cdmr)
 {
  return CodeMirror$1.New(cdmr["var"],cdmr.onChange,{
   $:1,
   $0:f
  },cdmr.editorO,cdmr.disabled);
 };
 CodeMirror.onChange=function(f,cdmr)
 {
  return CodeMirror$1.New(cdmr["var"],f,cdmr.onRender,cdmr.editorO,cdmr.disabled);
 };
 CodeMirror.setVar=function(v,cdmr)
 {
  return CodeMirror$1.New(v,cdmr.onChange,cdmr.onRender,cdmr.editorO,cdmr.disabled);
 };
 CodeMirror.render$390$42=function(cdmr)
 {
  return function(elchild)
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(LoadFiles.LoadFilesAsync(CodeMirror.includes()),function()
    {
     var editor,o;
     editor=self.CodeMirror(elchild.parentElement,{});
     elchild.parentNode.removeChild(elchild);
     cdmr.editorO={
      $:1,
      $0:editor
     };
     o=cdmr.onRender;
     o==null?void 0:o.$0(editor);
     GenEditor.bindVarEditor(function(f)
     {
      editor.on("changes",f);
     },function()
     {
      return editor.getValue();
     },function(v)
     {
      editor.setValue(v);
      editor.getDoc().clearHistory();
     },cdmr.onChange,cdmr["var"]);
     View.Sink(function(dis)
     {
      editor.setOption("readOnly",dis&&"nocursor");
     },cdmr.disabled);
     return Concurrency.Zero();
    });
   })),null);
  };
 };
 CodeMirror.render=function(cdmr)
 {
  return Doc.Element("div",[AttrProxy.OnAfterRenderImpl(function(elchild)
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(LoadFiles.LoadFilesAsync(CodeMirror.includes()),function()
    {
     var editor,o;
     editor=self.CodeMirror(elchild.parentElement,{});
     elchild.parentNode.removeChild(elchild);
     cdmr.editorO={
      $:1,
      $0:editor
     };
     o=cdmr.onRender;
     o==null?void 0:o.$0(editor);
     GenEditor.bindVarEditor(function(f)
     {
      editor.on("changes",f);
     },function()
     {
      return editor.getValue();
     },function(v)
     {
      editor.setValue(v);
      editor.getDoc().clearHistory();
     },cdmr.onChange,cdmr["var"]);
     View.Sink(function(dis)
     {
      editor.setOption("readOnly",dis&&"nocursor");
     },cdmr.disabled);
     return Concurrency.Zero();
    });
   })),null);
  })],[]);
 };
 CodeMirror.includes=function()
 {
  SC$1.$cctor();
  return SC$1.includes;
 };
 CodeMirror.newVar=function(_var)
 {
  return CodeMirror$1.New(_var,Global.ignore,null,null,View.Const(false));
 };
 CodeMirror.cmPos=function(l,c)
 {
  return Pos.New(l,c);
 };
 CodeMirrorRT.New=function(editorO,onChange,uri,options,overrides)
 {
  return{
   editorO:editorO,
   onChange:onChange,
   uri:uri,
   options:options,
   overrides:overrides
  };
 };
 CodeMirrorGenAdapter.newVar=function(options,overrides,v)
 {
  return GenEditor.newVar(CodeMirrorGenAdapter.newHook(CodeMirrorGenAdapter.newRT(options,overrides)),v);
 };
 CodeMirrorGenAdapter.newRT=function(options,overrides)
 {
  return CodeMirrorRT.New(null,Global.ignore,"",options,overrides);
 };
 CodeMirrorGenAdapter.newHook=function(cdmRT)
 {
  function g(g$1,o)
  {
   return CodeMirrorGenAdapter.generateDoc(cdmRT,g$1,o);
  }
  return GenEditorHook.New(function($1)
  {
   return function($2)
   {
    return g($1,$2);
   };
  },function()
  {
   return CodeMirrorGenAdapter.getValue(cdmRT);
  },function(t)
  {
   CodeMirrorGenAdapter.setValue(cdmRT,t);
  },function(d)
  {
   CodeMirrorGenAdapter.setDisabled(cdmRT,d);
  },function(a)
  {
   CodeMirrorGenAdapter.showAnnotations(cdmRT,a);
  },function(i)
  {
   return CodeMirrorGenAdapter.posFromIndex(cdmRT,i);
  },function(p)
  {
   return CodeMirrorGenAdapter.indexFromPos(cdmRT,p);
  },function(p)
  {
   return CodeMirrorGenAdapter.getWordAt(cdmRT,p);
  },function()
  {
   return cdmRT.uri;
  },function(uri)
  {
   cdmRT.uri=uri;
  },function(f)
  {
   cdmRT.onChange=f;
  });
 };
 CodeMirrorGenAdapter.posFromIndex=function(cdmRT,i)
 {
  var o;
  o=CodeMirrorGenAdapter.mapEditor(cdmRT,function(ed)
  {
   return CodeMirrorGenAdapter.posEd2Gen(ed.posFromIndex(i));
  });
  return o==null?Position.New(1,1):o.$0;
 };
 CodeMirrorGenAdapter.indexFromPos=function(cdmRT,p)
 {
  var o;
  o=CodeMirrorGenAdapter.mapEditor(cdmRT,function(ed)
  {
   return ed.indexFromPos(CodeMirrorGenAdapter.posGen2Ed(p));
  });
  return o==null?-1:o.$0;
 };
 CodeMirrorGenAdapter.setDisabled=function(cdmRT,dis)
 {
  CodeMirrorGenAdapter.iterEditor(cdmRT,function(ed)
  {
   ed.setOption("readOnly",dis&&"nocursor");
  });
 };
 CodeMirrorGenAdapter.showAnnotations=function(cdmRT,ans)
 {
  CodeMirrorGenAdapter.iterEditor(cdmRT,function(ed)
  {
   var ms;
   ms=Arrays.ofSeq(Seq.map(function(an)
   {
    var m;
    return Response$1.New(an.message,(m=an.severity,m.$==0?"error":m.$==1?"warning":"info"),CodeMirrorGenAdapter.posGen2Ed(an.startP),CodeMirrorGenAdapter.posGen2Ed(an.endP));
   },ans));
   Lint.setLint(ed,function(t)
   {
    t[1](ms);
   });
  });
 };
 CodeMirrorGenAdapter.getWordAt=function(cdmRT,pos)
 {
  return CodeMirrorGenAdapter.bindEditor(cdmRT,function(ed)
  {
   var anchorHead;
   anchorHead=ed.findWordAt(CodeMirrorGenAdapter.posGen2Ed(pos));
   return!anchorHead||Unchecked.Equals(anchorHead.anchor,anchorHead.head)?null:{
    $:1,
    $0:[ed.getRange(anchorHead.anchor,anchorHead.head),CodeMirrorGenAdapter.posEd2Gen(anchorHead.anchor)]
   };
  });
 };
 CodeMirrorGenAdapter.setValue=function(cdmRT,txt)
 {
  CodeMirrorGenAdapter.iterEditor(cdmRT,function(ed)
  {
   ed.setValue(txt);
  });
 };
 CodeMirrorGenAdapter.getValue=function(cdmRT)
 {
  var o;
  o=CodeMirrorGenAdapter.mapEditor(cdmRT,function(ed)
  {
   return ed.getValue();
  });
  return o==null?"":o.$0;
 };
 CodeMirrorGenAdapter.generateDoc$587$50=function(cdmRT,onRender)
 {
  return function(elchild)
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(LoadFiles.LoadFilesAsync(CodeMirror.includes()),function()
    {
     var editor;
     editor=self.CodeMirror(elchild.parentElement,cdmRT.options);
     elchild.parentNode.removeChild(elchild);
     cdmRT.editorO={
      $:1,
      $0:editor
     };
     onRender(editor);
     editor.on("changes",function(t)
     {
      cdmRT.onChange([t[0],t[1]]);
     });
     return Concurrency.Zero();
    });
   })),null);
  };
 };
 CodeMirrorGenAdapter.generateDoc=function(cdmRT,genE,onRender)
 {
  var b;
  return Doc.Async((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Return(Doc.Element("div",[AttrProxy.OnAfterRenderImpl(function(elchild)
   {
    var b$1;
    Concurrency.Start((b$1=null,Concurrency.Delay(function()
    {
     return Concurrency.Bind(LoadFiles.LoadFilesAsync(CodeMirror.includes()),function()
     {
      var editor;
      editor=self.CodeMirror(elchild.parentElement,cdmRT.options);
      elchild.parentNode.removeChild(elchild);
      cdmRT.editorO={
       $:1,
       $0:editor
      };
      onRender(editor);
      editor.on("changes",function(t)
      {
       cdmRT.onChange([t[0],t[1]]);
      });
      return Concurrency.Zero();
     });
    })),null);
   })],[]));
  })));
 };
 CodeMirrorGenAdapter.getToolTipFunction=function(genE,showToolTip)
 {
  var o,o$1,getToolTip;
  function getWordO(p)
  {
   var o$2,$1,w,p$1;
   o$2=genE.editorHook.getWordAt(p);
   return o$2==null?null:($1=o$2.$0,(w=$1[0],(p$1=$1[1],Strings.Trim(w)===""?null:{
    $:1,
    $0:[w,p$1]
   })));
  }
  o=(o$1=genE.toolTip,o$1==null?null:{
   $:1,
   $0:(getToolTip=o$1.$0,function(ed)
   {
    var b;
    Concurrency.Start((b=null,Concurrency.Delay(function()
    {
     var p,sels,p$1,o$2,o$3,o$4,$1,w,p$2,p2,p1;
     p=ed.somethingSelected()?(sels=ed.listSelections(),[CodeMirrorGenAdapter.posEd2Gen(Arrays.get(sels,0).anchor),CodeMirrorGenAdapter.posEd2Gen(Arrays.get(sels,0).head)]):(p$1=CodeMirrorGenAdapter.posEd2Gen(ed.getCursor()),(o$2=(o$3=(o$4=getWordO(p$1),o$4==null?getWordO(Position.New(p$1.line,p$1.col-1)):o$4),o$3==null?null:{
      $:1,
      $0:($1=o$3.$0,(w=$1[0],(p$2=$1[1],[p$2,Position.New(p$2.line,p$2.col+w.length)])))
     }),o$2==null?[p$1,Position.New(p$1.line,p$1.col+2)]:o$2.$0));
     p2=p[1];
     p1=p[0];
     return Concurrency.Bind((getToolTip(genE))(p1),function(a)
     {
      a==null?void 0:showToolTip(p1,p2,a.$0);
      return Concurrency.Zero();
     });
    })),null);
   })
  });
  return o==null?Global.ignore:o.$0;
 };
 CodeMirrorGenAdapter.posEd2Gen=function(p)
 {
  return Position.New(p.line+1,p.ch+1);
 };
 CodeMirrorGenAdapter.posGen2Ed=function(p)
 {
  return Pos.New(p.line-1,p.col-1);
 };
 CodeMirrorGenAdapter.bindEditor=function(cdmRT,f)
 {
  var m;
  m=cdmRT.editorO;
  return m!=null&&m.$==1?f(m.$0):null;
 };
 CodeMirrorGenAdapter.mapEditor=function(cdmRT,f)
 {
  var m;
  m=cdmRT.editorO;
  return m!=null&&m.$==1?{
   $:1,
   $0:f(m.$0)
  }:null;
 };
 CodeMirrorGenAdapter.iterEditor=function(cdmRT,f)
 {
  var m;
  m=cdmRT.editorO;
  m!=null&&m.$==1?f(m.$0):void 0;
 };
 LibraryJS.rexGuid=function()
 {
  SC$1.$cctor();
  return SC$1.rexGuid;
 };
 LibraryJS.REGEX$1=function(expr,opt,value)
 {
  var m;
  return value===null?null:(m=(new Global.String(value)).match(new Global.RegExp(expr,opt)),Unchecked.Equals(m,null)?null:!Unchecked.Equals(m,null)&&m.length===0?null:{
   $:1,
   $0:m
  });
 };
 CodeMirror$2.main=function()
 {
  var _var,codeMirror,i,x,b,a;
  _var=Var$1.Create$1("Hello there.\nHello there.\nHello there.\nHello there.\n");
  codeMirror=GenEditor.onRender(function(ged)
  {
   var o,ed,toolTips;
   o=ged.editorO;
   o==null?void 0:(ed=o.$0,toolTips=CodeMirrorGenAdapter.getToolTipFunction(ged,CodeMirror$2.showToolTip),ed.addKeyMap(Pojo.newPojo([["F2",toolTips],["F11",function()
   {
    ed.setOption("fullScreen",!ed.getOption("fullScreen"));
   }],["Tab",function()
   {
    ed.replaceSelection("    ","end");
   }]])),ed.on("dblclick",toolTips));
  },(i=CodeMirror$2.codeMirrorNew(_var),GenEditor$1.New(i["var"],i.disabled,View.Map(CodeMirror$2.transformAnnotations,CodeMirror$2.annotationsV().get_View()),i.onChange,i.onRender,{
   $:1,
   $0:function(g)
   {
    return function(p)
    {
     return CodeMirror$2.autoCompletion(g,p);
    };
   }
  },{
   $:1,
   $0:function(g)
   {
    return function(p)
    {
     return CodeMirror$2.getToolTip(g,p);
    };
   }
  },{
   $:1,
   $0:function(g)
   {
    return function(p)
    {
     return CodeMirror$2.declaration(g,p);
    };
   }
  },i.editorO,i.editorHook)));
  x=Doc.Async((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(LoadFiles.LoadFilesAsync(["/EPFileX/codemirror/content/editor.css","/EPFileX/codemirror/content/codemirror.css","/EPFileX/codemirror/scripts/addon/display/fullscreen.css","/EPFileX/codemirror/scripts/addon/dialog/dialog.css","/EPFileX/codemirror/scripts/addon/hint/show-hint.css","/EPFileX/codemirror/scripts/addon/lint/lint.css","/EPFileX/codemirror/content/theme/rubyblue.css"]),function()
   {
    return Concurrency.Return(Doc.Element("div",[],[Doc.Element("div",[AttrProxy.Create("style","height: 400px; width: 800px")],[GenEditor.generateDoc(codeMirror)]),Doc.Element("div",[],[Doc.TextNode("These are the annotations that create tooltips, warnings and errors:")]),Doc.InputArea([AttrProxy.Create("style","height: 100px; width: 600px")],Var$1.Lens(CodeMirror$2.annotationsV(),Global.id,function($1,$2)
    {
     return $2;
    })),Doc.Element("div",[],[Doc.TextView(_var.get_View())])]));
   });
  })));
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x);
 };
 CodeMirror$2.autoCompletion=function(ged,pos)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Return([Completion.New("F","Hello","",[pos,pos]),Completion.New("F","How","",[pos,pos]),Completion.New("F","Are","",[pos,pos]),Completion.New("F","You","",[pos,pos])]);
  });
 };
 CodeMirror$2.declaration=function(ged,pos)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   var m,i;
   m=ged.editorHook.getWordAt(pos);
   return m!=null&&m.$==1?(i=ged.editorHook.getValue().indexOf(m.$0[0]),i<0?Concurrency.Return(null):Concurrency.Return({
    $:1,
    $0:[ged.editorHook.posFromIndex(i),ged.editorHook.getUri()]
   })):Concurrency.Return(null);
  });
 };
 CodeMirror$2.getToolTip=function(ged,pos)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   var m;
   m=ged.editorHook.getWordAt(pos);
   return m!=null&&m.$==1?Concurrency.Return({
    $:1,
    $0:(function($1)
    {
     return function($2)
     {
      return $1("The word is: "+Utils.toSafe($2));
     };
    }(Global.id))(m.$0[0])
   }):Concurrency.Return(null);
  });
 };
 CodeMirror$2.codeMirrorNew=function(_var)
 {
  return CodeMirrorGenAdapter.newVar(Pojo.newPojo([["mode","fsharp"],["theme","rubyblue"],["lineNumbers",true],["matchBrackets",true],["gutters",["CodeMirror-lint-markers"]]]),null,_var);
 };
 CodeMirror$2.showToolTip=function(p1,p2,str)
 {
  var a;
  a=CodeMirror$2.annotationsV().Get()+((((((Runtime.Curried(function($1,$2,$3,$4,$5,$6)
  {
   return $1("\nInfo ("+Global.String($2)+", "+Global.String($3)+") - ("+Global.String($4)+", "+Global.String($5)+"): "+Utils.prettyPrint($6)+".");
  },6))(Global.id))(p1.line))(p1.col))(p2.line))(p2.col))(str);
  CodeMirror$2.annotationsV().Set(a);
 };
 CodeMirror$2.transformAnnotations=function(msgs)
 {
  var rex,a;
  function m(ty,fl,fc,tl,tc,msg)
  {
   return Annotation.New(Position.New(fl,fc),Position.New(tl,tc),ty==="Err"?AnnotationType.Error:ty==="Warn"?AnnotationType.Warning:ty==="Hint"?AnnotationType.Hint:{
    $:4,
    $0:ty
   },msg);
  }
  rex="(Err|Warn|Info|Hint) \\((\\d+)\\,\\s*(\\d+)\\) - \\((\\d+)\\,\\s*(\\d+)\\)\\: \"([^\"]+?)\"\\.";
  return Seq.map(function($1)
  {
   return m($1[0],$1[1],$1[2],$1[3],$1[4],$1[5]);
  },Seq.choose(function(v)
  {
   var $1,a$1,t;
   return(a$1=LibraryJS.REGEX$1(rex,"",v),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===7)&&($1=[Arrays.get(a$1.$0,3),Arrays.get(a$1.$0,2),Arrays.get(a$1.$0,6),Arrays.get(a$1.$0,5),Arrays.get(a$1.$0,4),Arrays.get(a$1.$0,1)],true)))?{
    $:1,
    $0:[$1[5],Operators.toInt(Global.Number($1[1])),Operators.toInt(Global.Number($1[0])),Operators.toInt(Global.Number($1[4])),Operators.toInt(Global.Number($1[3])),$1[2]]
   }:null;
  },(a=LibraryJS.REGEX$1(rex,"g",msgs),a!=null&&a.$==1?a.$0:[])));
 };
 CodeMirror$2.annotationsV=function()
 {
  SC$1.$cctor();
  return SC$1.annotationsV;
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  SC$1.includes=["/EPFileX/codemirror/scripts/codemirror/codemirror.js","/EPFileX/codemirror/scripts/codemirror/codemirror-intellisense.js","/EPFileX/codemirror/scripts/codemirror/codemirror-compiler.js","/EPFileX/codemirror/scripts/codemirror/mode/none.js","/EPFileX/codemirror/scripts/codemirror/mode/fsharp.js","/EPFileX/codemirror/scripts/codemirror/mode/css.js","/EPFileX/codemirror/scripts/codemirror/mode/javascript.js","/EPFileX/codemirror/scripts/codemirror/mode/markdown.js","/EPFileX/codemirror/scripts/addon/search/searchcursor.js","/EPFileX/codemirror/scripts/addon/search/search.js","/EPFileX/codemirror/scripts/addon/search/jump-to-line.js","/EPFileX/codemirror/scripts/addon/dialog/dialog.js","/EPFileX/codemirror/scripts/addon/edit/matchbrackets.js","/EPFileX/codemirror/scripts/addon/selection/active-line.js","/EPFileX/codemirror/scripts/addon/display/fullscreen.js","/EPFileX/codemirror/scripts/addon/hint/show-hint.js","/EPFileX/codemirror/scripts/addon/lint/lint.js"];
  SC$1.annotationsV=Var$1.Create$1("Err (1, 7) - (1, 12): \"This shows over there as an error\".\nWarn (2, 7) - (2, 12): \"This shows over there as a warning\".\nInfo (3, 7) - (3, 12): \"This shows over there as information\".\nHint (4, 7) - (4, 12): \"This shows over there as a hint\".");
 };
 Runtime.OnLoad(function()
 {
  CodeMirror$2.main();
 });
});
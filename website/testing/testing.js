CIPHERSpaceLoadFilesDoAfter(function() { IntelliFactory.Runtime.Start() });
CIPHERSpaceLoadFiles(["/Scripts/WebSharper/WebSharper.Core.JavaScript/Runtime.js", "/Scripts/WebSharper/WebSharper.Main.js", "/Scripts/WebSharper/WebSharper.Collections.js", "/Scripts/WebSharper/WebSharper.Web.js", "/Scripts/WebSharper/WebSharper.Sitelets.js", "/Scripts/WebSharper/WebSharper.Control.js", "/Scripts/WebSharper/WebSharper.UI.js", "/Scripts/WebSharper/WebSharper.UI.Templating.Runtime.js"], function()
{
 "use strict";
 var Global,FsRoot,Library,String,LibraryJS,LoadFiles,REGEX,ResizeObserver,Monaco,Position,Range,Uri,Location,FindMatch,WordAtPosition,Model,MarkDownString,MarkerData,CompletionItem,Hover,WebSharper,Obj,Editor,MonacoConfig,TestingJS,Monaco$1,HoverProvider,CompletionItemProvider,DefinitionProvider,SC$1,Strings,Slice,Seq,Unchecked,Utils,console,Concurrency,Arrays,List,IntelliFactory,Runtime,UI,Var$1,View,Doc,AttrProxy,Client,Templates,Operators;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 String=Library.String=Library.String||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 LoadFiles=LibraryJS.LoadFiles=LibraryJS.LoadFiles||{};
 REGEX=LibraryJS.REGEX=LibraryJS.REGEX||{};
 ResizeObserver=LibraryJS.ResizeObserver=LibraryJS.ResizeObserver||{};
 Monaco=LibraryJS.Monaco=LibraryJS.Monaco||{};
 Position=Monaco.Position=Monaco.Position||{};
 Range=Monaco.Range=Monaco.Range||{};
 Uri=Monaco.Uri=Monaco.Uri||{};
 Location=Monaco.Location=Monaco.Location||{};
 FindMatch=Monaco.FindMatch=Monaco.FindMatch||{};
 WordAtPosition=Monaco.WordAtPosition=Monaco.WordAtPosition||{};
 Model=Monaco.Model=Monaco.Model||{};
 MarkDownString=Monaco.MarkDownString=Monaco.MarkDownString||{};
 MarkerData=Monaco.MarkerData=Monaco.MarkerData||{};
 CompletionItem=Monaco.CompletionItem=Monaco.CompletionItem||{};
 Hover=Monaco.Hover=Monaco.Hover||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 Editor=Monaco.Editor=Monaco.Editor||{};
 MonacoConfig=Monaco.MonacoConfig=Monaco.MonacoConfig||{};
 TestingJS=FsRoot.TestingJS=FsRoot.TestingJS||{};
 Monaco$1=TestingJS.Monaco=TestingJS.Monaco||{};
 HoverProvider=Monaco$1.HoverProvider=Monaco$1.HoverProvider||{};
 CompletionItemProvider=Monaco$1.CompletionItemProvider=Monaco$1.CompletionItemProvider||{};
 DefinitionProvider=Monaco$1.DefinitionProvider=Monaco$1.DefinitionProvider||{};
 SC$1=Global["StartupCode$D:\\Abe\\CIPHERWorkspace\\FSharpStation\\src\\wsconfig_json$testing"]=Global["StartupCode$D:\\Abe\\CIPHERWorkspace\\FSharpStation\\src\\wsconfig_json$testing"]||{};
 Strings=WebSharper&&WebSharper.Strings;
 Slice=WebSharper&&WebSharper.Slice;
 Seq=WebSharper&&WebSharper.Seq;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Utils=WebSharper&&WebSharper.Utils;
 console=Global.console;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Arrays=WebSharper&&WebSharper.Arrays;
 List=WebSharper&&WebSharper.List;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 UI=WebSharper&&WebSharper.UI;
 Var$1=UI&&UI.Var$1;
 View=UI&&UI.View;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Operators=WebSharper&&WebSharper.Operators;
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
 Library["String.Right"]=function(_this,n)
 {
  var a,b;
  return Library["String.Substring2"](_this,(a=0,(b=_this.length-n,Unchecked.Compare(a,b)===1?a:b)),_this.length);
 };
 Library["String.Left"]=function(_this,n)
 {
  return Library["String.Substring2"](_this,0,n);
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
 ResizeObserver.addResizeObserver=function(f,el)
 {
  var r,ro,changed,b;
  try
  {
   r=!(!Global.ResizeObserver);
  }
  catch(e)
  {
   r=false;
  }
  if(r)
   {
    ro=new Global.ResizeObserver(f);
    ResizeObserver.set_observers(new List.T({
     $:1,
     $0:ro,
     $1:ResizeObserver.observers()
    }));
    ro.observe(el);
   }
  else
   {
    changed=ResizeObserver.dimsChanged(el);
    Concurrency.Start((b=null,Concurrency.Delay(function()
    {
     return Concurrency.While(function()
     {
      return el.isConnected;
     },Concurrency.Delay(function()
     {
      return Concurrency.Bind(Concurrency.Sleep(110),function()
      {
       return changed()?(f(),Concurrency.Zero()):Concurrency.Zero();
      });
     }));
    })),null);
   }
 };
 ResizeObserver.dimsChanged=function(el)
 {
  var dims;
  dims=[el.getBoundingClientRect()];
  return function()
  {
   var ndims;
   ndims=el.getBoundingClientRect();
   return Unchecked.Equals(ResizeObserver.domRect2Tuple(dims[0]),ResizeObserver.domRect2Tuple(ndims))?false:(dims[0]=ndims,true);
  };
 };
 ResizeObserver.domRect2Tuple=function(r)
 {
  return[r.top,r.left,r.width,r.height];
 };
 ResizeObserver.observers=function()
 {
  SC$1.$cctor();
  return SC$1.observers;
 };
 ResizeObserver.set_observers=function($1)
 {
  SC$1.$cctor();
  SC$1.observers=$1;
 };
 Position.New=function(column,lineNumber)
 {
  return{
   column:column,
   lineNumber:lineNumber
  };
 };
 Range.New=function(startColumn,endColumn,startLineNumber,endLineNumber)
 {
  return{
   startColumn:startColumn,
   endColumn:endColumn,
   startLineNumber:startLineNumber,
   endLineNumber:endLineNumber
  };
 };
 Uri.New=function(authority,fragment,fsPath,path,query,scheme)
 {
  return{
   authority:authority,
   fragment:fragment,
   fsPath:fsPath,
   path:path,
   query:query,
   scheme:scheme
  };
 };
 Location.New=function(range,uri)
 {
  return{
   range:range,
   uri:uri
  };
 };
 FindMatch.New=function(matches,range)
 {
  return{
   matches:matches,
   range:range
  };
 };
 WordAtPosition.New=function(endColumn,startColumn,word)
 {
  return{
   endColumn:endColumn,
   startColumn:startColumn,
   word:word
  };
 };
 Model.New=function(uri)
 {
  return{
   uri:uri
  };
 };
 MarkDownString.New=function(value,isTrusted)
 {
  return{
   value:value,
   isTrusted:isTrusted
  };
 };
 MarkerData.New=function(startColumn,endColumn,startLineNumber,endLineNumber,severity,message)
 {
  return{
   startColumn:startColumn,
   endColumn:endColumn,
   startLineNumber:startLineNumber,
   endLineNumber:endLineNumber,
   severity:severity,
   message:message
  };
 };
 CompletionItem.New=function(kind,label,detail)
 {
  return{
   kind:kind,
   label:label,
   detail:detail
  };
 };
 Hover.New=function(contents,range)
 {
  return{
   contents:contents,
   range:range
  };
 };
 Editor=Monaco.Editor=Runtime.Class({},Obj,Editor);
 Editor.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Editor);
 MonacoConfig.New=function(_var,onChange,onRender,editorO,disabled,options,overrides)
 {
  return{
   "var":_var,
   onChange:onChange,
   onRender:onRender,
   editorO:editorO,
   disabled:disabled,
   options:options,
   overrides:overrides
  };
 };
 Monaco.newVarO=function(v)
 {
  var x;
  x=Monaco.newVar(Var$1.Lens(v,function(o)
  {
   return o==null?"":o.$0;
  },function(sO,s)
  {
   return sO==null?null:{
    $:1,
    $0:s
   };
  }));
  return Monaco.disabled(View.Map(function($1)
  {
   return $1==null;
  },v.get_View()),x);
 };
 Monaco.newText=function(v)
 {
  return Monaco.newVar(Var$1.Create$1(v));
 };
 Monaco["var"]=function(monc)
 {
  return monc["var"];
 };
 Monaco.disabled=function(dis,monc)
 {
  return MonacoConfig.New(monc["var"],monc.onChange,monc.onRender,monc.editorO,dis,monc.options,monc.overrides);
 };
 Monaco.onRender=function(f,monc)
 {
  return MonacoConfig.New(monc["var"],monc.onChange,{
   $:1,
   $0:f
  },monc.editorO,monc.disabled,monc.options,monc.overrides);
 };
 Monaco.onChange=function(f,monc)
 {
  return MonacoConfig.New(monc["var"],f,monc.onRender,monc.editorO,monc.disabled,monc.options,monc.overrides);
 };
 Monaco.setVar=function(v,monc)
 {
  return MonacoConfig.New(v,monc.onChange,monc.onRender,monc.editorO,monc.disabled,monc.options,monc.overrides);
 };
 Monaco.render$474$42=function(monc)
 {
  return function(elchild)
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(Monaco.loader(),function()
    {
     var editor,_elt,o;
     editor=(_elt=elchild.parentElement,self.monaco.editor.create(_elt,monc.options,monc.overrides));
     ResizeObserver.addResizeObserver(function()
     {
      editor.layout();
     },elchild.parentElement);
     elchild.parentNode.removeChild(elchild);
     monc.editorO={
      $:1,
      $0:editor
     };
     o=monc.onRender;
     o==null?void 0:o.$0(editor);
     LibraryJS.bindVarEditor(function(a)
     {
      editor.onDidChangeModelContent(a);
     },function()
     {
      return editor.getValue();
     },function(a)
     {
      editor.setValue(a);
     },monc.onChange,monc["var"]);
     return Concurrency.Zero();
    });
   })),null);
  };
 };
 Monaco.render=function(monc)
 {
  return Doc.Element("div",[AttrProxy.OnAfterRenderImpl(function(elchild)
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(Monaco.loader(),function()
    {
     var editor,_elt,o;
     editor=(_elt=elchild.parentElement,self.monaco.editor.create(_elt,monc.options,monc.overrides));
     ResizeObserver.addResizeObserver(function()
     {
      editor.layout();
     },elchild.parentElement);
     elchild.parentNode.removeChild(elchild);
     monc.editorO={
      $:1,
      $0:editor
     };
     o=monc.onRender;
     o==null?void 0:o.$0(editor);
     LibraryJS.bindVarEditor(function(a)
     {
      editor.onDidChangeModelContent(a);
     },function()
     {
      return editor.getValue();
     },function(a)
     {
      editor.setValue(a);
     },monc.onChange,monc["var"]);
     return Concurrency.Zero();
    });
   })),null);
  })],[]);
 };
 Monaco.loader=function()
 {
  SC$1.$cctor();
  return SC$1.loader;
 };
 Monaco.newVar=function(_var)
 {
  return MonacoConfig.New(_var,Global.ignore,null,null,View.Const(false),null,null);
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
 LibraryJS.bindVarEditor=function(setEvent,getVal,setVal,onChange,_var)
 {
  var editorChanged,varChanged;
  editorChanged=[0];
  varChanged=[0];
  setEvent(function()
  {
   var v;
   v=getVal();
   _var.Get()!==v?(editorChanged[0]=editorChanged[0]+1,_var.Set(v),onChange()):void 0;
  });
  View.Sink(function()
  {
   if(editorChanged[0]>varChanged[0])
    varChanged[0]=editorChanged[0];
   else
    if(getVal()!==_var.Get())
     setVal(_var.Get());
  },_var.get_View());
 };
 HoverProvider=Monaco$1.HoverProvider=Runtime.Class({
  provideHover:function(model,pos,token)
  {
   var word,x;
   word=model.getWordAtPosition(pos);
   return!word?null:Hover.New([MarkDownString.New((x=word.word,(function($1)
   {
    return function($2)
    {
     return $1("The word is: "+Utils.toSafe($2));
    };
   }(Global.id))(x)),true)],Range.New(word.startColumn,word.endColumn,pos.lineNumber,pos.lineNumber));
  }
 },Obj,HoverProvider);
 HoverProvider.New=Runtime.Ctor(function(ed)
 {
  Obj.New.call(this);
 },HoverProvider);
 CompletionItemProvider=Monaco$1.CompletionItemProvider=Runtime.Class({
  resolveCompletionItem:function(item,token)
  {
   return CompletionItem.New(item.kind,item.label,"more details");
  },
  provideCompletionItems:function(model,pos,token,context)
  {
   var word;
   word=model.getWordAtPosition(pos);
   return!word?null:[CompletionItem.New(2,"Hello",""),CompletionItem.New(2,"How",""),CompletionItem.New(2,"Are",""),CompletionItem.New(2,"You",""),CompletionItem.New(2,word.word,"")];
  }
 },Obj,CompletionItemProvider);
 CompletionItemProvider.New=Runtime.Ctor(function(ed)
 {
  Obj.New.call(this);
 },CompletionItemProvider);
 DefinitionProvider=Monaco$1.DefinitionProvider=Runtime.Class({
  provideDefinition:function(model,pos,token)
  {
   var word,ms;
   word=model.getWordAtPosition(pos);
   return!word?null:(ms=model.findMatches(word.word,false,false,true," <>()+-=.,/#@$%^&*\"",false,1),Arrays.length(ms)===0?null:Location.New(Arrays.get(ms,0).range,model.uri));
  }
 },Obj,DefinitionProvider);
 DefinitionProvider.New=Runtime.Ctor(function(ed)
 {
  Obj.New.call(this);
 },DefinitionProvider);
 Monaco$1.main=function()
 {
  var _var,monaco,x,a;
  _var=Var$1.Create$1("Hello there.\nHello there.\nHello there.\nHello there.\n");
  monaco=Monaco$1.monacoNew(_var,{
   $:1,
   $0:View.Map2(function($1,$2)
   {
    return $1===""?[]:Monaco$1.transformAnnotations($2);
   },_var.get_View(),Monaco$1.annotationsV().get_View())
  },null,null);
  x=Doc.Element("div",[],[Doc.Element("div",[AttrProxy.Create("style","height: 400px; width: 800px")],[Monaco.render(monaco)]),Doc.Element("div",[],[Doc.TextNode("These are the annotations that create tooltips, warnings and errors:")]),Doc.InputArea([AttrProxy.Create("style","height: 100px; width: 600px")],Var$1.Lens(Monaco$1.annotationsV(),Global.id,function($1,$2)
  {
   return $2;
  })),Doc.Element("div",[],[Doc.TextView(_var.get_View())])]);
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x);
 };
 Monaco$1.monacoNew=function(_var,annotationsWO,showToolTipO,getHintsO)
 {
  return Monaco.onRender(function(ed)
  {
   var _m,hp,cp,dp;
   function x(a,a$1,a$2)
   {
    return hp.provideHover(a,a$1,a$2);
   }
   function x$1(a,a$1,a$2,a$3)
   {
    return cp.provideCompletionItems(a,a$1,a$2,a$3);
   }
   function x$2(a,a$1)
   {
    return cp.resolveCompletionItem(a,a$1);
   }
   function x$3(a,a$1,a$2)
   {
    return dp.provideDefinition(a,a$1,a$2);
   }
   _m=ed.getModel();
   self.monaco.editor.setModelLanguage(_m,"fsharp");
   self.monaco.editor.setTheme("vs-dark");
   hp=new HoverProvider.New(ed);
   cp=new CompletionItemProvider.New(ed);
   dp=new DefinitionProvider.New(ed);
   Library.print(function($1)
   {
    return x($1[0],$1[1],$1[2]);
   });
   Library.print(function($1)
   {
    return x$1($1[0],$1[1],$1[2],$1[3]);
   });
   Library.print(function($1)
   {
    return x$2($1[0],$1[1]);
   });
   Library.print(function($1)
   {
    return x$3($1[0],$1[1],$1[2]);
   });
   self.monaco.languages.registerHoverProvider("fsharp",hp);
   self.monaco.languages.registerCompletionItemProvider("fsharp",cp);
   self.monaco.languages.registerDefinitionProvider("fsharp",dp);
   annotationsWO==null?void 0:View.Sink(function(ms)
   {
    var _m$1;
    _m$1=ed.getModel();
    self.monaco.editor.setModelMarkers(_m$1,"annotations",ms);
   },annotationsWO.$0);
  },Monaco.newVar(_var));
 };
 Monaco$1.transformAnnotations=function(msgs)
 {
  var rex,a;
  function m(ty,fl,fc,tl,tc,msg)
  {
   return MarkerData.New(fc,tc,fl,tl,ty==="Err"?8:ty==="Warn"?4:ty==="Hint"?1:2,msg);
  }
  rex="(Err|Warn|Info|Hint) \\((\\d+)\\,\\s*(\\d+)\\) - \\((\\d+)\\,\\s*(\\d+)\\)\\: \"([^\"]+?)\"\\.";
  return Arrays.map(function($1)
  {
   return m($1[0],$1[1],$1[2],$1[3],$1[4],$1[5]);
  },Arrays.choose(function(v)
  {
   var $1,a$1,t;
   return(a$1=LibraryJS.REGEX$1(rex,"",v),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===7)&&($1=[Arrays.get(a$1.$0,3),Arrays.get(a$1.$0,2),Arrays.get(a$1.$0,6),Arrays.get(a$1.$0,5),Arrays.get(a$1.$0,4),Arrays.get(a$1.$0,1)],true)))?{
    $:1,
    $0:[$1[5],Operators.toInt(Global.Number($1[1])),Operators.toInt(Global.Number($1[0])),Operators.toInt(Global.Number($1[4])),Operators.toInt(Global.Number($1[3])),$1[2]]
   }:null;
  },(a=LibraryJS.REGEX$1(rex,"g",msgs),a!=null&&a.$==1?a.$0:[])));
 };
 Monaco$1.annotationsV=function()
 {
  SC$1.$cctor();
  return SC$1.annotationsV;
 };
 SC$1.$cctor=function()
 {
  var f,b;
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
   var a,b$1;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a=0,(b$1=Arrays.length(s)-2,Unchecked.Compare(a,b$1)===1?a:b$1))
   });
  }
  function g$2(s)
  {
   return Strings.concat("\n",s);
  }
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
  SC$1.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  SC$1.observers=List.T.Empty;
  SC$1.loader=(b=null,Concurrency.Delay(function()
  {
   self.require.config({
    paths:{
     vs:"/EPFileX/monaco/package/min/vs"
    }
   });
   return Concurrency.Bind(Concurrency.FromContinuations(function(success,failed)
   {
    return self.require(["vs/editor/editor.main"],success,failed);
   }),function()
   {
    return Concurrency.Return(null);
   });
  }));
  SC$1.annotationsV=Var$1.Create$1("Err (1, 7) - (1, 12): \"This shows over there as an error\".\nWarn (2, 7) - (2, 12): \"This shows over there as a warning\".\nInfo (3, 7) - (3, 12): \"This shows over there as information\".\nHint (4, 7) - (4, 12): \"This shows over there as a hint\".");
 };
 Runtime.OnLoad(function()
 {
  Monaco$1.main();
 });
});
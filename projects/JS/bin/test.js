(function()
{
 "use strict";
 var Global,FsRoot,AppFramework,PlugInVar,PlugInView,PlugInDoc,PlugInAction,PlugInQuery,PlugIn,SC$1,test_Templates,WebSharper,UI,Client,Templates,Doc,Templating,Runtime,Server,ProviderBuilder,Handler,TemplateInstance,View,Seq,ListModel,Var$1,Lazy,$,IntelliFactory,Runtime$1;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 AppFramework=FsRoot.AppFramework=FsRoot.AppFramework||{};
 PlugInVar=AppFramework.PlugInVar=AppFramework.PlugInVar||{};
 PlugInView=AppFramework.PlugInView=AppFramework.PlugInView||{};
 PlugInDoc=AppFramework.PlugInDoc=AppFramework.PlugInDoc||{};
 PlugInAction=AppFramework.PlugInAction=AppFramework.PlugInAction||{};
 PlugInQuery=AppFramework.PlugInQuery=AppFramework.PlugInQuery||{};
 PlugIn=AppFramework.PlugIn=AppFramework.PlugIn||{};
 SC$1=Global.StartupCode$test$test=Global.StartupCode$test$test||{};
 test_Templates=Global.test_Templates=Global.test_Templates||{};
 WebSharper=Global.WebSharper;
 UI=WebSharper&&WebSharper.UI;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Doc=UI&&UI.Doc;
 Templating=UI&&UI.Templating;
 Runtime=Templating&&Templating.Runtime;
 Server=Runtime&&Runtime.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 View=UI&&UI.View;
 Seq=WebSharper&&WebSharper.Seq;
 ListModel=UI&&UI.ListModel;
 Var$1=UI&&UI.Var$1;
 Lazy=WebSharper&&WebSharper.Lazy;
 $=Global.jQuery;
 IntelliFactory=Global.IntelliFactory;
 Runtime$1=IntelliFactory&&IntelliFactory.Runtime;
 PlugInVar.New=function(varName,varVar)
 {
  return{
   varName:varName,
   varVar:varVar
  };
 };
 PlugInView.New=function(viwName,viwView)
 {
  return{
   viwName:viwName,
   viwView:viwView
  };
 };
 PlugInDoc.New=function(docName,docDoc)
 {
  return{
   docName:docName,
   docDoc:docDoc
  };
 };
 PlugInAction.New=function(actName,actFunction,actEnabled)
 {
  return{
   actName:actName,
   actFunction:actFunction,
   actEnabled:actEnabled
  };
 };
 PlugInQuery.New=function(qryName,qryFunction)
 {
  return{
   qryName:qryName,
   qryFunction:qryFunction
  };
 };
 PlugIn.New=function(plgName,plgVars,plgViews,plgDocs,plgActions,plgQueries)
 {
  return{
   plgName:plgName,
   plgVars:plgVars,
   plgViews:plgViews,
   plgDocs:plgDocs,
   plgActions:plgActions,
   plgQueries:plgQueries
  };
 };
 AppFramework.main=function()
 {
  var x,a;
  AppFramework.plugIns().Append(PlugIn.New("AppFramework",[PlugInVar.New("mainDocV",AppFramework.mainDocV())],[],[PlugInDoc.New("AppFwkClient",AppFramework.AppFwkClient().f())],[],[]));
  x=AppFramework.mainDoc();
  a=self.document.body;
  Templates.LoadLocalTemplates("");
  Doc.Run(a,x);
 };
 AppFramework.mainDoc=function()
 {
  var b,M,M$1,p,i;
  return(b=(M=AppFramework.getMainClientDoc(),(M$1=AppFramework.mainDocV().get_View(),ProviderBuilder.Make().WithHole({
   $:2,
   $0:"maindoc",
   $1:M$1
  })).WithHole({
   $:8,
   $0:"maindocv",
   $1:AppFramework.mainDocV()
  }).WithHole({
   $:0,
   $0:"mainclient",
   $1:M
  })),(p=Handler.CompleteHoles(b.k,b.h,[["maindocv",0]]),(i=new TemplateInstance.New(p[1],test_Templates.appframework(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFramework.getMainClientDoc=function()
 {
  var x;
  return Doc.EmbedView((x=AppFramework.plugIns().v,View.Map2(function(mainDoc,plgs)
  {
   var x$1,v;
   x$1=Seq.tryPick(function(plg)
   {
    var o;
    o=Seq.tryFind(function(doc)
    {
     return plg.plgName+"."+doc.docName===mainDoc;
    },plg.plgDocs);
    return o==null?null:{
     $:1,
     $0:o.$0.docDoc
    };
   },plgs);
   v=Doc.get_Empty();
   return x$1==null?v:x$1.$0;
  },AppFramework.mainDocV().get_View(),x)));
 };
 AppFramework.AppFwkClient=function()
 {
  SC$1.$cctor();
  return SC$1.AppFwkClient;
 };
 AppFramework.TemplateFileName=function()
 {
  SC$1.$cctor();
  return SC$1.TemplateFileName;
 };
 AppFramework.mainDocV=function()
 {
  SC$1.$cctor();
  return SC$1.mainDocV;
 };
 AppFramework.plugIns=function()
 {
  SC$1.$cctor();
  return SC$1.plugIns;
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1.plugIns=new ListModel.New$1(function(plg)
  {
   return plg.plgName;
  });
  SC$1.mainDocV=Var$1.Create$1("AppFramework.mainDoc");
  SC$1.TemplateFileName="D:\\Abe\\CIPHERWorkspace\\FSharpStationN\\website\\AppFramework.html";
  SC$1.AppFwkClient=Lazy.Create(function()
  {
   var b,p,i;
   return(b=ProviderBuilder.Make(),(p=Handler.CompleteHoles(b.k,b.h,[["filename",0],["name",0],["output",0],["fscode",0],["parser",0]]),(i=new TemplateInstance.New(p[1],test_Templates.appfwkclient(p[0])),(b.i=i,i)))).get_Doc();
  });
 };
 test_Templates.appframework=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"appframework"
  },function()
  {
   return $.parseHTML("<div style=\"height: calc(100vh - 4px); width: calc(100vw - 4px)\" class=\"relative\">\r\n        <wcomp-splitter value=\"0\" min=\"0\" max=\"100\">\r\n            <div><div>AppFramework:${MainDoc} </div><div><input type=\"text\" ws-var=\"MainDocV\"></div></div>\r\n            <div ws-hole=\"MainClient\"></div>\r\n        </wcomp-splitter>\r\n    </div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"appframework"
  },function()
  {
   return $.parseHTML("<div style=\"height: calc(100vh - 4px); width: calc(100vw - 4px)\" class=\"relative\">\r\n        <wcomp-splitter value=\"0\" min=\"0\" max=\"100\">\r\n            <div><div>AppFramework:${MainDoc} </div><div><input type=\"text\" ws-var=\"MainDocV\"></div></div>\r\n            <div ws-hole=\"MainClient\"></div>\r\n        </wcomp-splitter>\r\n    </div>");
  });
 };
 test_Templates.fixedsplitterhor=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"fixedsplitterhor"
  },function()
  {
   return $.parseHTML("<div style=\"display: grid; \r\n          grid-gap: 0px; \r\n          box-sizing: border-box; \r\n          height: 100%;\r\n          width : 100%;\r\n          grid-template-areas: 'one' 'two'; \r\n          grid-template-columns:100%; \r\n          overflow: hidden; \r\n          grid-template-rows   : ${PartSizes}\">\r\n  <div ws-hole=\"First\" style=\"grid-area: one; \" class=\"relative\"></div>\r\n  <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\"></div>\r\n    </div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"fixedsplitterhor"
  },function()
  {
   return $.parseHTML("<div style=\"display: grid; \r\n          grid-gap: 0px; \r\n          box-sizing: border-box; \r\n          height: 100%;\r\n          width : 100%;\r\n          grid-template-areas: 'one' 'two'; \r\n          grid-template-columns:100%; \r\n          overflow: hidden; \r\n          grid-template-rows   : ${PartSizes}\">\r\n  <div ws-hole=\"First\" style=\"grid-area: one; \" class=\"relative\"></div>\r\n  <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\"></div>\r\n    </div>");
  });
 };
 test_Templates.fixedsplitterver=function(h)
 {
  return h?Templates.GetOrLoadTemplate("appframework",{
   $:1,
   $0:"fixedsplitterver"
  },function()
  {
   return $.parseHTML("<div style=\"display: grid; \r\n               grid-gap: 0px; \r\n               box-sizing: border-box; \r\n               height: 100%;\r\n               width : 100%;\r\n               grid-template-areas: 'one two'; \r\n               grid-template-rows   :100%; \r\n               overflow: hidden; \r\n               grid-template-columns: ${PartSizes}\">\r\n       <div ws-hole=\"First\" style=\"grid-area: one; \" class=\"relative\"></div>\r\n       <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\"></div>\r\n    </div>");
  },h):Templates.PrepareTemplate("appframework",{
   $:1,
   $0:"fixedsplitterver"
  },function()
  {
   return $.parseHTML("<div style=\"display: grid; \r\n               grid-gap: 0px; \r\n               box-sizing: border-box; \r\n               height: 100%;\r\n               width : 100%;\r\n               grid-template-areas: 'one two'; \r\n               grid-template-rows   :100%; \r\n               overflow: hidden; \r\n               grid-template-columns: ${PartSizes}\">\r\n       <div ws-hole=\"First\" style=\"grid-area: one; \" class=\"relative\"></div>\r\n       <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\"></div>\r\n    </div>");
  });
 };
 test_Templates.appfwkclient=function(h)
 {
  var n;
  n={
   $:1,
   $0:"appfwkclient"
  };
  test_Templates.fixedsplitterhor();
  test_Templates.fixedsplitterver();
  return h?Templates.GetOrLoadTemplate("appframework",n,function()
  {
   return $.parseHTML("<div>\r\n        <ws-fixedsplitterhor>\r\n            <partsizes>55px calc(100% - 55px)</partsizes>\r\n            <first>\r\n                <span style=\"display: grid;\r\n                      grid-template-columns: 30% 20% 20% 10%;\r\n                      grid-gap: 25px;\r\n                    \">\r\n                    <div class=\"mainTitle\">AppFramework</div>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-btn\">\r\n                            <label class=\"btn\">Load File...\r\n                                <div>\r\n                                    <input ws-onclick=\"LoadFileClear\" ws-onchange=\"LoadFileChanged\" type=\"file\" class=\"form-control\" style=\"display: none\" placeholder=\"Filename:\">\r\n                                </div>\r\n                            </label>\r\n                        </span>\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" ws-var=\"Filename\" placeholder=\"Filename:\" style=\"width: 100%;\">\r\n                    </div>                                    \r\n                    <button ws-onclick=\"SaveAs\" type=\"button\" id=\"\" class=\"btn ${SaveAsClass}\">Save as...</button>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-btn\">\r\n                            <label class=\"btn\">Import...\r\n                                <div>\r\n                                    <input ws-onclick=\"ImportFileClear\" ws-onchange=\"ImportFileChanged\" type=\"file\" class=\"form-control\" style=\"display: none\" placeholder=\"Filename:\">\r\n                                </div>\r\n                            </label>\r\n                        </span>\r\n                    </div>                                    \r\n                </span>\r\n            </first>\r\n            <second>\r\n                <wcomp-splitter value=\"85\" min=\"0\" max=\"100\">\r\n                    <ws-fixedsplitterver>\r\n                        <partsizes>calc(100% - 150px) 150px</partsizes>\r\n                        <first>\r\n                            <wcomp-splitter vertical=\"\" value=\"18\" max=\"100\">\r\n                                <div><div ws-hole=\"Snippets\" style=\"overflow:auto\"></div></div>\r\n                                <wcomp-splitter vertical=\"\" value=\"100\" min=\"30\" max=\"100\">\r\n                                    <ws-fixedsplitterhor>\r\n                                        <partsizes>55px calc(100% - 55px)</partsizes>\r\n                                        <first>\r\n                                            <div>\r\n                                            <div class=\"input-group\">\r\n                                                <span class=\"input-group-addon\">name:</span>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Snippet name...\" ws-var=\"Name\" spellcheck=\"false\">\r\n                                            </div></div>\r\n                                        </first>\r\n                                        <second>\r\n                                            <div ws-hole=\"CodeEditor\"></div>\r\n                                        </second>\r\n                                    </ws-fixedsplitterhor>\r\n                                    <wcomp-tabstrip>\r\n                                        <div tabname=\"Properties\">\r\n                                            <div>\r\n                                                <table style=\"border-spacing:0px\">\r\n                                                    <thead>\r\n                                                        <th style=\"width: 30%  \">Name</th>\r\n                                                        <th style=\"width: 70% \">Value</th>\r\n                                                    </thead>\r\n                                                    <tbody ws-hole=\"Properties\"></tbody>\r\n                                                </table>\r\n                                                <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </wcomp-tabstrip>\r\n                                </wcomp-splitter>\r\n                            </wcomp-splitter>\r\n                        </first>\r\n                        <second>\r\n                            <div style=\"\r\n                                overflow: hidden;\r\n                                display: grid;\r\n                                grid-template-columns: 100%;\r\n                                grid-template-rows: repeat(15, calc(100% / 15));\r\n                                bxackground-color: #eee;\r\n                                box-sizing: border-box;\r\n                                padding : 5px;\r\n                                grid-gap: 5px;\r\n                                margin-right: 21px;\r\n                           \" class=\"absolute\">\r\n                                <button ws-onclick=\"AddSnippet\" class=\"btn\" type=\"button\" id=\"\">Add Snippet</button>\r\n                                <button ws-onclick=\"RemoveSnippet\" class=\"btn\" type=\"button\" id=\"\">Delete Snippet</button>\r\n                                <button ws-onclick=\"IndentIn\" class=\"btn\" type=\"button\" id=\"\">Indent In &gt;&gt;</button>\r\n                                <button ws-onclick=\"IndentOut\" class=\"btn\" type=\"button\" id=\"\">Indent Out &lt;&lt;</button>\r\n                                <span></span>\r\n                                <button ws-onclick=\"RunFS\" class=\"btn\" type=\"button\" id=\"\">Run F#</button>\r\n                                <button ws-onclick=\"Reorder\" class=\"btn\" type=\"button\" id=\"\">Reorder</button>\r\n                                <span></span>\r\n                            </div>\r\n                        </second>\r\n                    </ws-fixedsplitterver>\r\n                    <wcomp-splitter vertical=\"\">\r\n                        <wcomp-tabstrip>\r\n                            <textarea tabname=\"Output\" ws-var=\"Output\" ws-onafterrender=\"OutputAfterRender\" style=\"height: 100%;  width: 100%; box-sizing: border-box; \" spellcheck=\"false\" title=\"\" placeholder=\"Output:\"></textarea>\r\n                            <textarea tabname=\"F# code\" ws-var=\"FSCode\" style=\"height: 100%;  width: 100%; box-sizing: border-box; \" spellcheck=\"false\" title=\"\" placeholder=\"F# Code:\"></textarea>\r\n                        </wcomp-tabstrip>\r\n                        <wcomp-tabstrip>\r\n                            <textarea tabname=\"Parser\" ws-var=\"Parser\" style=\"height: 100%;  width: 100%; box-sizing: border-box; \" spellcheck=\"false\" title=\"\" placeholder=\"Parser messages:\" ws-ondblclick=\"JumpRef\"></textarea>\r\n                        </wcomp-tabstrip>\r\n                    </wcomp-splitter>\r\n                </wcomp-splitter>\r\n            </second>\r\n        </ws-fixedsplitterhor>\r\n    </div>");
  },h):Templates.PrepareTemplate("appframework",n,function()
  {
   return $.parseHTML("<div>\r\n        <ws-fixedsplitterhor>\r\n            <partsizes>55px calc(100% - 55px)</partsizes>\r\n            <first>\r\n                <span style=\"display: grid;\r\n                      grid-template-columns: 30% 20% 20% 10%;\r\n                      grid-gap: 25px;\r\n                    \">\r\n                    <div class=\"mainTitle\">AppFramework</div>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-btn\">\r\n                            <label class=\"btn\">Load File...\r\n                                <div>\r\n                                    <input ws-onclick=\"LoadFileClear\" ws-onchange=\"LoadFileChanged\" type=\"file\" class=\"form-control\" style=\"display: none\" placeholder=\"Filename:\">\r\n                                </div>\r\n                            </label>\r\n                        </span>\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" ws-var=\"Filename\" placeholder=\"Filename:\" style=\"width: 100%;\">\r\n                    </div>                                    \r\n                    <button ws-onclick=\"SaveAs\" type=\"button\" id=\"\" class=\"btn ${SaveAsClass}\">Save as...</button>\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-btn\">\r\n                            <label class=\"btn\">Import...\r\n                                <div>\r\n                                    <input ws-onclick=\"ImportFileClear\" ws-onchange=\"ImportFileChanged\" type=\"file\" class=\"form-control\" style=\"display: none\" placeholder=\"Filename:\">\r\n                                </div>\r\n                            </label>\r\n                        </span>\r\n                    </div>                                    \r\n                </span>\r\n            </first>\r\n            <second>\r\n                <wcomp-splitter value=\"85\" min=\"0\" max=\"100\">\r\n                    <ws-fixedsplitterver>\r\n                        <partsizes>calc(100% - 150px) 150px</partsizes>\r\n                        <first>\r\n                            <wcomp-splitter vertical=\"\" value=\"18\" max=\"100\">\r\n                                <div><div ws-hole=\"Snippets\" style=\"overflow:auto\"></div></div>\r\n                                <wcomp-splitter vertical=\"\" value=\"100\" min=\"30\" max=\"100\">\r\n                                    <ws-fixedsplitterhor>\r\n                                        <partsizes>55px calc(100% - 55px)</partsizes>\r\n                                        <first>\r\n                                            <div>\r\n                                            <div class=\"input-group\">\r\n                                                <span class=\"input-group-addon\">name:</span>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Snippet name...\" ws-var=\"Name\" spellcheck=\"false\">\r\n                                            </div></div>\r\n                                        </first>\r\n                                        <second>\r\n                                            <div ws-hole=\"CodeEditor\"></div>\r\n                                        </second>\r\n                                    </ws-fixedsplitterhor>\r\n                                    <wcomp-tabstrip>\r\n                                        <div tabname=\"Properties\">\r\n                                            <div>\r\n                                                <table style=\"border-spacing:0px\">\r\n                                                    <thead>\r\n                                                        <th style=\"width: 30%  \">Name</th>\r\n                                                        <th style=\"width: 70% \">Value</th>\r\n                                                    </thead>\r\n                                                    <tbody ws-hole=\"Properties\"></tbody>\r\n                                                </table>\r\n                                                <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </wcomp-tabstrip>\r\n                                </wcomp-splitter>\r\n                            </wcomp-splitter>\r\n                        </first>\r\n                        <second>\r\n                            <div style=\"\r\n                                overflow: hidden;\r\n                                display: grid;\r\n                                grid-template-columns: 100%;\r\n                                grid-template-rows: repeat(15, calc(100% / 15));\r\n                                bxackground-color: #eee;\r\n                                box-sizing: border-box;\r\n                                padding : 5px;\r\n                                grid-gap: 5px;\r\n                                margin-right: 21px;\r\n                           \" class=\"absolute\">\r\n                                <button ws-onclick=\"AddSnippet\" class=\"btn\" type=\"button\" id=\"\">Add Snippet</button>\r\n                                <button ws-onclick=\"RemoveSnippet\" class=\"btn\" type=\"button\" id=\"\">Delete Snippet</button>\r\n                                <button ws-onclick=\"IndentIn\" class=\"btn\" type=\"button\" id=\"\">Indent In &gt;&gt;</button>\r\n                                <button ws-onclick=\"IndentOut\" class=\"btn\" type=\"button\" id=\"\">Indent Out &lt;&lt;</button>\r\n                                <span></span>\r\n                                <button ws-onclick=\"RunFS\" class=\"btn\" type=\"button\" id=\"\">Run F#</button>\r\n                                <button ws-onclick=\"Reorder\" class=\"btn\" type=\"button\" id=\"\">Reorder</button>\r\n                                <span></span>\r\n                            </div>\r\n                        </second>\r\n                    </ws-fixedsplitterver>\r\n                    <wcomp-splitter vertical=\"\">\r\n                        <wcomp-tabstrip>\r\n                            <textarea tabname=\"Output\" ws-var=\"Output\" ws-onafterrender=\"OutputAfterRender\" style=\"height: 100%;  width: 100%; box-sizing: border-box; \" spellcheck=\"false\" title=\"\" placeholder=\"Output:\"></textarea>\r\n                            <textarea tabname=\"F# code\" ws-var=\"FSCode\" style=\"height: 100%;  width: 100%; box-sizing: border-box; \" spellcheck=\"false\" title=\"\" placeholder=\"F# Code:\"></textarea>\r\n                        </wcomp-tabstrip>\r\n                        <wcomp-tabstrip>\r\n                            <textarea tabname=\"Parser\" ws-var=\"Parser\" style=\"height: 100%;  width: 100%; box-sizing: border-box; \" spellcheck=\"false\" title=\"\" placeholder=\"Parser messages:\" ws-ondblclick=\"JumpRef\"></textarea>\r\n                        </wcomp-tabstrip>\r\n                    </wcomp-splitter>\r\n                </wcomp-splitter>\r\n            </second>\r\n        </ws-fixedsplitterhor>\r\n    </div>");
  });
 };
 Runtime$1.OnLoad(function()
 {
  AppFramework.main();
 });
}());

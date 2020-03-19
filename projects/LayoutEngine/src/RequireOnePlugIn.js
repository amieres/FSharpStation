(function()
{
 "use strict";
 var Global,FsRootDll,LibraryJS,RequireOnePlugIn,WebSharper,UI,Var$1,AppFramework,View,console;
 Global=self;
 FsRootDll=Global.FsRootDll=Global.FsRootDll||{};
 LibraryJS=FsRootDll.LibraryJS=FsRootDll.LibraryJS||{};
 RequireOnePlugIn=LibraryJS.RequireOnePlugIn=LibraryJS.RequireOnePlugIn||{};
 WebSharper=Global.WebSharper;
 UI=WebSharper&&WebSharper.UI;
 Var$1=UI&&UI.Var$1;
 AppFramework=LibraryJS&&LibraryJS.AppFramework;
 View=UI&&UI.View;
 console=Global.console;
 RequireOnePlugIn.plugInAdded=function(name,path)
 {
  var loadPath,wasLoaded,b;
  loadPath=Var$1.Create$1(path);
  wasLoaded=Var$1.Create$1(false);
  AppFramework.addPlugIn((b=AppFramework.plugin(),b.AddAct1(b.AddViw(b.AddVar(b.Name(b.Yield(),"RequireOne"+name),"LoadPath",Var$1.Lens(loadPath,Global.id,function(v,nv)
  {
   return wasLoaded.Get()?v:nv;
  })),"loaded",View.Map(Global.String,wasLoaded.get_View())),"Load",function(f)
  {
   function f1()
   {
    wasLoaded.Set(true);
   }
   if(loadPath.Get()==="")
    (function($1)
    {
     return $1("No loadPath");
    }(function(s)
    {
     console.log(s);
    }));
   else
    {
     self.RequireOnePlugInLoadPath=loadPath.Get();
     Global.requirejs([loadPath.Get()],function(v)
     {
      f1();
      if(Global.$f instanceof Global.Function)
       f(v);
     });
    }
  },"f(mdl)")));
 };
}());

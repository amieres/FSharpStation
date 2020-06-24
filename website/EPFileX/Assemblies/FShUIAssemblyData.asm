{
  "asName": "FShUIAssemblyData",
  "dependencies": [
    "WebSharper.Main.asm",
    "WebSharper.Collections.asm",
    "WebSharper.Web.asm",
    "WebSharper.Sitelets.asm",
    "WebSharper.Control.asm",
    "WebSharper.UI.asm",
    "WebSharper.UI.Templating.Runtime.asm"
  ],
  "resources": [],
  "modules": [
    {
      "moName": "FsRoot.Library+FShUI_AssemblyData+ModuleName",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+FShUI_AssemblyData+TypeName",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+FShUI_AssemblyData+MethodName",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+FShUI_AssemblyData+AssemblyName",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+FShUI_AssemblyData+AssemblyRef",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+FShUI_AssemblyData+JSCode",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+FShUI_AssemblyData+Resource",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+FShUI_AssemblyData+ModuleRef",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+FShUI_AssemblyData+TypeRef",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+FShUI_AssemblyData+MethodDef",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+FShUI_AssemblyData+ModuleDef",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+FShUI_AssemblyData+AssemblyDef",
      "methods": []
    },
    {
      "moName": "FsRoot.Library+FShUI_AssemblyData",
      "methods": []
    },
    {
      "moName": "FsRoot.Library",
      "methods": [
        {
          "meName": "Error",
          "isField": 0,
          "type": {
            "tName": "Result<'b, 'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        }
      ]
    }
  ],
  "jsModules": [
    {
      "jsName": "WebSharper.js",
      "code": "(function()\r\n{\r\n \"use strict\";\r\n var Global,FsRoot,Library,FShUI_AssemblyData,ModuleName,TypeName,MethodName,AssemblyName,AssemblyRef,JSCode,Resource,ModuleRef,TypeRef,MethodDef,ModuleDef,AssemblyDef,IntelliFactory,Runtime,WebSharper,Strings;\r\n Global=self;\r\n FsRoot=Global.FsRoot=Global.FsRoot||{};\r\n Library=FsRoot.Library=FsRoot.Library||{};\r\n FShUI_AssemblyData=Library.FShUI_AssemblyData=Library.FShUI_AssemblyData||{};\r\n ModuleName=FShUI_AssemblyData.ModuleName=FShUI_AssemblyData.ModuleName||{};\r\n TypeName=FShUI_AssemblyData.TypeName=FShUI_AssemblyData.TypeName||{};\r\n MethodName=FShUI_AssemblyData.MethodName=FShUI_AssemblyData.MethodName||{};\r\n AssemblyName=FShUI_AssemblyData.AssemblyName=FShUI_AssemblyData.AssemblyName||{};\r\n AssemblyRef=FShUI_AssemblyData.AssemblyRef=FShUI_AssemblyData.AssemblyRef||{};\r\n JSCode=FShUI_AssemblyData.JSCode=FShUI_AssemblyData.JSCode||{};\r\n Resource=FShUI_AssemblyData.Resource=FShUI_AssemblyData.Resource||{};\r\n ModuleRef=FShUI_AssemblyData.ModuleRef=FShUI_AssemblyData.ModuleRef||{};\r\n TypeRef=FShUI_AssemblyData.TypeRef=FShUI_AssemblyData.TypeRef||{};\r\n MethodDef=FShUI_AssemblyData.MethodDef=FShUI_AssemblyData.MethodDef||{};\r\n ModuleDef=FShUI_AssemblyData.ModuleDef=FShUI_AssemblyData.ModuleDef||{};\r\n AssemblyDef=FShUI_AssemblyData.AssemblyDef=FShUI_AssemblyData.AssemblyDef||{};\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime=IntelliFactory&&IntelliFactory.Runtime;\r\n WebSharper=Global.WebSharper;\r\n Strings=WebSharper&&WebSharper.Strings;\r\n ModuleName=FShUI_AssemblyData.ModuleName=Runtime.Class({\r\n  get_Id2:function()\r\n  {\r\n   return Strings.Replace(this.get_Id(),\"+\",\".\");\r\n  },\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,ModuleName);\r\n TypeName=FShUI_AssemblyData.TypeName=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,TypeName);\r\n MethodName=FShUI_AssemblyData.MethodName=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,MethodName);\r\n AssemblyName=FShUI_AssemblyData.AssemblyName=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,AssemblyName);\r\n AssemblyRef=FShUI_AssemblyData.AssemblyRef=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,AssemblyRef);\r\n JSCode=FShUI_AssemblyData.JSCode=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,JSCode);\r\n Resource=FShUI_AssemblyData.Resource=Runtime.Class({\r\n  get_Id:function()\r\n  {\r\n   return this.$0;\r\n  }\r\n },null,Resource);\r\n ModuleRef.New=function(name,asmName)\r\n {\r\n  return{\r\n   name:name,\r\n   asmName:asmName\r\n  };\r\n };\r\n TypeRef.New=function(name,asm)\r\n {\r\n  return{\r\n   name:name,\r\n   asm:asm\r\n  };\r\n };\r\n MethodDef.New=function(name,retType,parms,isField)\r\n {\r\n  return{\r\n   name:name,\r\n   retType:retType,\r\n   parms:parms,\r\n   isField:isField\r\n  };\r\n };\r\n ModuleDef.New=function(name,methods)\r\n {\r\n  return{\r\n   name:name,\r\n   methods:methods\r\n  };\r\n };\r\n AssemblyDef.New=function(name,self$1,modules,dependencies,resources,javaScripts)\r\n {\r\n  return{\r\n   name:name,\r\n   self:self$1,\r\n   modules:modules,\r\n   dependencies:dependencies,\r\n   resources:resources,\r\n   javaScripts:javaScripts\r\n  };\r\n };\r\n Library.Error=function(a)\r\n {\r\n  return{\r\n   $:1,\r\n   $0:a\r\n  };\r\n };\r\n}());\r\n"
    }
  ]
}
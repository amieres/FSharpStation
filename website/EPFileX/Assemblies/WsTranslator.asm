{
  "asName": "WsTranslator",
  "dependencies": [
    "WebSharper.Main.asm",
    "WebSharper.Collections.asm",
    "WebSharper.Web.asm",
    "WebSharper.Sitelets.asm",
    "WebSharper.Control.asm",
    "WebSharper.UI.asm",
    "WebSharper.UI.Templating.Runtime.asm",
    "FShUIAssemblyData.asm"
  ],
  "resources": [],
  "modules": [
    {
      "moName": "FsRoot.WsTranslator+Rpc",
      "methods": []
    },
    {
      "moName": "FsRoot.WsTranslator",
      "methods": [
        {
          "meName": "dlls",
          "isField": 1,
          "type": {
            "tName": "string[]",
            "asm": "netstandard"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "StartupCode$WsTranslator$WsTranslator",
      "methods": []
    }
  ],
  "jsModules": [
    {
      "jsName": "WebSharper.js",
      "code": "(function()\r\n{\r\n \"use strict\";\r\n var Global,FsRoot,WsTranslator,SC$1;\r\n Global=self;\r\n FsRoot=Global.FsRoot=Global.FsRoot||{};\r\n WsTranslator=FsRoot.WsTranslator=FsRoot.WsTranslator||{};\r\n SC$1=Global.StartupCode$WsTranslator$WsTranslator=Global.StartupCode$WsTranslator$WsTranslator||{};\r\n WsTranslator.dlls=function()\r\n {\r\n  SC$1.$cctor();\r\n  return SC$1.dlls;\r\n };\r\n SC$1.$cctor=function()\r\n {\r\n  SC$1.$cctor=Global.ignore;\r\n  SC$1.dlls=[\"/dlls/WebSharper.Main.dll\",\"/dlls/WebSharper.Collections.dll\",\"/dlls/WebSharper.Control.dll\",\"/dlls/WebSharper.Web.dll\",\"/dlls/WebSharper.Sitelets.dll\",\"/dlls/WebSharper.UI.dll\",\"/dlls/WebSharper.UI.Templating.Runtime.dll\",\"/dlls/WebSharper.Data.dll\"];\r\n };\r\n}());\r\n"
    }
  ]
}
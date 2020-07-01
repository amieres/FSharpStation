{
  "asName": "WebSharper.Owin.WebSocket",
  "dependencies": [
    "WebSharper.Main.asm",
    "WebSharper.Collections.asm",
    "WebSharper.Control.asm",
    "WebSharper.Web.asm",
    "WebSharper.Sitelets.asm"
  ],
  "resources": [],
  "modules": [
    {
      "moName": "WebSharper.Owin.WebSocket.JsonEncoding",
      "methods": [
        {
          "meName": "_unique_Readable",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_Typed",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "WebSharper.Owin.WebSocket.Async",
      "methods": [
        {
          "meName": "FoldAgent",
          "isField": 0,
          "type": {
            "tName": "FSharpMailboxProcessor<'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "('a -> ('b -> Async<'a>))",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.Owin.WebSocket.Endpoint`2",
      "methods": [
        {
          "meName": "CreateRemote",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Owin.WebSocket.Endpoint<'a, 'b>",
            "asm": "WebSharper.Owin.WebSocket"
          },
          "parms": [
            {
              "tName": "string",
              "asm": "netstandard"
            },
            {
              "tName": "Option<WebSharper.Owin.WebSocket.JsonEncoding>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.Owin.WebSocket.Client+Message`1",
      "methods": [
        {
          "meName": "_unique_Close",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_Open",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        },
        {
          "meName": "_unique_Error",
          "isField": 0,
          "type": {
            "tName": "unit",
            "asm": "FSharp.Core"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "WebSharper.Owin.WebSocket.Client+WebSocketServer`2",
      "methods": []
    },
    {
      "moName": "WebSharper.Owin.WebSocket.Client+WithEncoding",
      "methods": [
        {
          "meName": "Connect",
          "isField": 0,
          "type": {
            "tName": "Async<WebSharper.Owin.WebSocket.Client+WebSocketServer<'b, 'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(string -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.Owin.WebSocket.Endpoint<'b, 'a>",
              "asm": "WebSharper.Owin.WebSocket"
            },
            {
              "tName": "(WebSharper.Owin.WebSocket.Client+WebSocketServer<'b, 'a> -> Async<(WebSharper.Owin.WebSocket.Client+Message<'b> -> unit)>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "ConnectStateful",
          "isField": 0,
          "type": {
            "tName": "Async<WebSharper.Owin.WebSocket.Client+WebSocketServer<'b, 'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(string -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.Owin.WebSocket.Endpoint<'b, 'a>",
              "asm": "WebSharper.Owin.WebSocket"
            },
            {
              "tName": "(WebSharper.Owin.WebSocket.Client+WebSocketServer<'b, 'a> -> Async<('c * ('c -> (WebSharper.Owin.WebSocket.Client+Message<'b> -> Async<'c>)))>)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "FromWebSocket",
          "isField": 0,
          "type": {
            "tName": "Async<WebSharper.Owin.WebSocket.Client+WebSocketServer<'b, 'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(string -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.JavaScript.WebSocket",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "(WebSharper.Owin.WebSocket.Client+WebSocketServer<'b, 'a> -> Async<(WebSharper.Owin.WebSocket.Client+Message<'b> -> unit)>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.Owin.WebSocket.JsonEncoding",
              "asm": "WebSharper.Owin.WebSocket"
            }
          ]
        },
        {
          "meName": "FromWebSocketStateful",
          "isField": 0,
          "type": {
            "tName": "Async<WebSharper.Owin.WebSocket.Client+WebSocketServer<'b, 'a>>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(string -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.JavaScript.WebSocket",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "(WebSharper.Owin.WebSocket.Client+WebSocketServer<'b, 'a> -> Async<('c * ('c -> (WebSharper.Owin.WebSocket.Client+Message<'b> -> Async<'c>)))>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.Owin.WebSocket.JsonEncoding",
              "asm": "WebSharper.Owin.WebSocket"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.Owin.WebSocket.Client",
      "methods": [
        {
          "meName": "getEncoding",
          "isField": 0,
          "type": {
            "tName": "(('a -> string) * ('c -> 'b))",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> string)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(string -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "WebSharper.Owin.WebSocket.JsonEncoding",
              "asm": "WebSharper.Owin.WebSocket"
            }
          ]
        },
        {
          "meName": "cacheSocket",
          "isField": 0,
          "type": {
            "tName": "((Message<'a> -> unit) -> bool)",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "WebSharper.JavaScript.WebSocket",
              "asm": "WebSharper.JavaScript"
            },
            {
              "tName": "(WebSharper.JavaScript.MessageEvent -> 'a)",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    }
  ],
  "jsModules": [
    {
      "jsName": "WebSharper.js",
      "code": "(function()\r\n{\r\n \"use strict\";\r\n var Global,WebSharper,Owin,WebSocket,JsonEncoding,Async,Endpoint,Client,Message,Obj,WebSocketServer,WithEncoding,IntelliFactory,Runtime,Control,MailboxProcessor,Concurrency,JSON,Json,Seq;\r\n Global=self;\r\n WebSharper=Global.WebSharper=Global.WebSharper||{};\r\n Owin=WebSharper.Owin=WebSharper.Owin||{};\r\n WebSocket=Owin.WebSocket=Owin.WebSocket||{};\r\n JsonEncoding=WebSocket.JsonEncoding=WebSocket.JsonEncoding||{};\r\n Async=WebSocket.Async=WebSocket.Async||{};\r\n Endpoint=WebSocket.Endpoint=WebSocket.Endpoint||{};\r\n Client=WebSocket.Client=WebSocket.Client||{};\r\n Message=Client.Message=Client.Message||{};\r\n Obj=WebSharper&&WebSharper.Obj;\r\n WebSocketServer=Client.WebSocketServer=Client.WebSocketServer||{};\r\n WithEncoding=Client.WithEncoding=Client.WithEncoding||{};\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime=IntelliFactory&&IntelliFactory.Runtime;\r\n Control=WebSharper&&WebSharper.Control;\r\n MailboxProcessor=Control&&Control.MailboxProcessor;\r\n Concurrency=WebSharper&&WebSharper.Concurrency;\r\n JSON=Global.JSON;\r\n Json=WebSharper&&WebSharper.Json;\r\n Seq=WebSharper&&WebSharper.Seq;\r\n JsonEncoding=WebSocket.JsonEncoding=Runtime.Class({\r\n  ClientProviderOrElse:function(p)\r\n  {\r\n   return this.$==1?p:p;\r\n  }\r\n },null,JsonEncoding);\r\n JsonEncoding.Readable=new JsonEncoding({\r\n  $:1\r\n });\r\n JsonEncoding.Typed=new JsonEncoding({\r\n  $:0\r\n });\r\n Async.FoldAgent=function(initState,f)\r\n {\r\n  return MailboxProcessor.Start(function(inbox)\r\n  {\r\n   function loop(state)\r\n   {\r\n    var b;\r\n    b=null;\r\n    return Concurrency.Delay(function()\r\n    {\r\n     return Concurrency.Bind(inbox.Receive(null),function(a)\r\n     {\r\n      return Concurrency.Bind(f(state,a),function(a$1)\r\n      {\r\n       return loop(a$1);\r\n      });\r\n     });\r\n    });\r\n   }\r\n   return loop(initState);\r\n  },null);\r\n };\r\n Endpoint.CreateRemote=function(url,encoding)\r\n {\r\n  return Endpoint.New(url,\"\",encoding==null?JsonEncoding.Typed:encoding.$0);\r\n };\r\n Endpoint.New=function(URI,Route,JsonEncoding$1)\r\n {\r\n  return{\r\n   URI:URI,\r\n   Route:Route,\r\n   JsonEncoding:JsonEncoding$1\r\n  };\r\n };\r\n Message.Close={\r\n  $:3\r\n };\r\n Message.Open={\r\n  $:2\r\n };\r\n Message.Error={\r\n  $:1\r\n };\r\n WebSocketServer=Client.WebSocketServer=Runtime.Class({\r\n  Post:function(msg)\r\n  {\r\n   this.conn.send(this.encode(msg));\r\n  },\r\n  get_Connection:function()\r\n  {\r\n   return this.conn;\r\n  }\r\n },Obj,WebSocketServer);\r\n WebSocketServer.New=Runtime.Ctor(function(conn,encode)\r\n {\r\n  Obj.New.call(this);\r\n  this.conn=conn;\r\n  this.encode=encode;\r\n },WebSocketServer);\r\n WithEncoding.Connect=function(encode,decode,endpoint,agent)\r\n {\r\n  return WithEncoding.FromWebSocket(encode,decode,new Global.WebSocket(endpoint.URI),agent,endpoint.JsonEncoding);\r\n };\r\n WithEncoding.ConnectStateful=function(encode,decode,endpoint,agent)\r\n {\r\n  return WithEncoding.FromWebSocketStateful(encode,decode,new Global.WebSocket(endpoint.URI),agent,endpoint.JsonEncoding);\r\n };\r\n WithEncoding.FromWebSocket=function(encode,decode,socket,agent,jsonEncoding)\r\n {\r\n  var p,decode$1,flush,server,b;\r\n  p=Client.getEncoding(encode,decode,jsonEncoding);\r\n  decode$1=p[1];\r\n  flush=Client.cacheSocket(socket,decode$1);\r\n  server=new WebSocketServer.New(socket,p[0]);\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(agent(server),function(a)\r\n   {\r\n    function a$1(ok,ko)\r\n    {\r\n     var isOpen;\r\n     isOpen=flush(a);\r\n     socket.onopen=function()\r\n     {\r\n      a(Message.Open);\r\n      return ok(server);\r\n     };\r\n     socket.onclose=function()\r\n     {\r\n      return a(Message.Close);\r\n     };\r\n     socket.onmessage=function(msg)\r\n     {\r\n      return a({\r\n       $:0,\r\n       $0:decode$1(msg)\r\n      });\r\n     };\r\n     socket.onerror=function()\r\n     {\r\n      a(Message.Error);\r\n      return ko(new Global.Error(\"Could not connect to the server.\"));\r\n     };\r\n     isOpen?ok(server):void 0;\r\n    }\r\n    return Concurrency.FromContinuations(function($1,$2,$3)\r\n    {\r\n     return a$1.apply(null,[$1,$2,$3]);\r\n    });\r\n   });\r\n  });\r\n };\r\n WithEncoding.FromWebSocketStateful=function(encode,decode,socket,agent,jsonEncoding)\r\n {\r\n  var p,decode$1,flush,server,b;\r\n  p=Client.getEncoding(encode,decode,jsonEncoding);\r\n  decode$1=p[1];\r\n  flush=Client.cacheSocket(socket,decode$1);\r\n  server=new WebSocketServer.New(socket,p[0]);\r\n  b=null;\r\n  return Concurrency.Delay(function()\r\n  {\r\n   return Concurrency.Bind(agent(server),function(a)\r\n   {\r\n    var func,agent$1;\r\n    function a$1(ok,ko)\r\n    {\r\n     var isOpen;\r\n     isOpen=flush(function(a$2)\r\n     {\r\n      agent$1.mailbox.AddLast(a$2);\r\n      agent$1.resume();\r\n     });\r\n     socket.onopen=function()\r\n     {\r\n      agent$1.mailbox.AddLast(Message.Open);\r\n      agent$1.resume();\r\n      return ok(server);\r\n     };\r\n     socket.onclose=function()\r\n     {\r\n      agent$1.mailbox.AddLast(Message.Close);\r\n      return agent$1.resume();\r\n     };\r\n     socket.onmessage=function(msg)\r\n     {\r\n      agent$1.mailbox.AddLast({\r\n       $:0,\r\n       $0:decode$1(msg)\r\n      });\r\n      return agent$1.resume();\r\n     };\r\n     socket.onerror=function()\r\n     {\r\n      agent$1.mailbox.AddLast(Message.Error);\r\n      agent$1.resume();\r\n      return ko(new Global.Error(\"Could not connect to the server.\"));\r\n     };\r\n     isOpen?ok(server):void 0;\r\n    }\r\n    func=a[1];\r\n    agent$1=Async.FoldAgent(a[0],function($1,$2)\r\n    {\r\n     return(func($1))($2);\r\n    });\r\n    return Concurrency.FromContinuations(function($1,$2,$3)\r\n    {\r\n     return a$1.apply(null,[$1,$2,$3]);\r\n    });\r\n   });\r\n  });\r\n };\r\n Client.getEncoding=function(encode,decode,jsonEncoding)\r\n {\r\n  var p,decode$1;\r\n  function f(a)\r\n  {\r\n   return JSON.parse(a);\r\n  }\r\n  p=jsonEncoding.$==0?[function(a)\r\n  {\r\n   return JSON.stringify(a);\r\n  },function(x)\r\n  {\r\n   return Json.Activate(f(x));\r\n  }]:[encode,decode];\r\n  decode$1=p[1];\r\n  return[p[0],function(msg)\r\n  {\r\n   return decode$1(msg.data);\r\n  }];\r\n };\r\n Client.cacheSocket=function(socket,decode)\r\n {\r\n  var cache,isOpen;\r\n  cache=[];\r\n  isOpen=[false];\r\n  socket.onopen=function()\r\n  {\r\n   cache.push(Message.Open);\r\n   isOpen[0]=true;\r\n  };\r\n  socket.onclose=function()\r\n  {\r\n   return cache.push(Message.Close);\r\n  };\r\n  socket.onmessage=function(msg)\r\n  {\r\n   return cache.push({\r\n    $:0,\r\n    $0:decode(msg)\r\n   });\r\n  };\r\n  socket.onerror=function()\r\n  {\r\n   return cache.push(Message.Error);\r\n  };\r\n  return function(post)\r\n  {\r\n   Seq.iter(post,cache);\r\n   return isOpen[0];\r\n  };\r\n };\r\n}());\r\n"
    }
  ]
}
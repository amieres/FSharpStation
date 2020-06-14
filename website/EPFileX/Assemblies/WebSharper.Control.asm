{
  "asName": "WebSharper.Control",
  "dependencies": [
    "WebSharper.Main.asm",
    "WebSharper.Collections.asm"
  ],
  "modules": [
    {
      "moName": "WebSharper.Control.Disposable",
      "methods": []
    },
    {
      "moName": "WebSharper.Control.Observer+Message`1",
      "methods": [
        {
          "meName": "_unique_Completed",
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
      "moName": "WebSharper.Control.Observer",
      "methods": [
        {
          "meName": "New",
          "isField": 0,
          "type": {
            "tName": "IObserver<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Exception -> unit)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(unit -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Of",
          "isField": 0,
          "type": {
            "tName": "IObserver<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> unit)",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.Control.HotStream+HotStream`1",
      "methods": [
        {
          "meName": "New",
          "isField": 0,
          "type": {
            "tName": "WebSharper.Control.HotStream+HotStream<'b>",
            "asm": "WebSharper.Control"
          },
          "parms": []
        }
      ]
    },
    {
      "moName": "WebSharper.Control.Observable",
      "methods": [
        {
          "meName": "Sequence",
          "isField": 0,
          "type": {
            "tName": "IObservable<List<'a>>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IEnumerable<IObservable<'a>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Aggregate",
          "isField": 0,
          "type": {
            "tName": "IObservable<'b>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IObservable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "'b",
              "asm": ""
            },
            {
              "tName": "('b -> ('a -> 'b))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "SelectMany",
          "isField": 0,
          "type": {
            "tName": "IObservable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IObservable<IObservable<'a>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Switch",
          "isField": 0,
          "type": {
            "tName": "IObservable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IObservable<IObservable<'a>>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "CombineLatest",
          "isField": 0,
          "type": {
            "tName": "IObservable<'c>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IObservable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IObservable<'b>",
              "asm": "netstandard"
            },
            {
              "tName": "('a -> ('b -> 'c))",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Range",
          "isField": 0,
          "type": {
            "tName": "IObservable<int>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "int",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Concat",
          "isField": 0,
          "type": {
            "tName": "IObservable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IObservable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IObservable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Merge",
          "isField": 0,
          "type": {
            "tName": "IObservable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IObservable<'a>",
              "asm": "netstandard"
            },
            {
              "tName": "IObservable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Drop",
          "isField": 0,
          "type": {
            "tName": "IObservable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "int",
              "asm": "netstandard"
            },
            {
              "tName": "IObservable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Choose",
          "isField": 0,
          "type": {
            "tName": "IObservable<'b>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> Option<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IObservable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Filter",
          "isField": 0,
          "type": {
            "tName": "IObservable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IObservable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Map",
          "isField": 0,
          "type": {
            "tName": "IObservable<'b>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IObservable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Protect",
          "isField": 0,
          "type": {
            "tName": "'b",
            "asm": ""
          },
          "parms": [
            {
              "tName": "(unit -> 'a)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "(Exception -> 'b)",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Never",
          "isField": 0,
          "type": {
            "tName": "IObservable<'a>",
            "asm": "netstandard"
          },
          "parms": []
        },
        {
          "meName": "Return",
          "isField": 0,
          "type": {
            "tName": "IObservable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "'a",
              "asm": ""
            }
          ]
        },
        {
          "meName": "Of",
          "isField": 0,
          "type": {
            "tName": "IObservable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "(('a -> unit) -> (unit -> unit))",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Control.ObservableModule",
      "methods": [
        {
          "meName": "Split",
          "isField": 0,
          "type": {
            "tName": "(IObservable<'b> * IObservable<'c>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> FSharpChoice<'b, 'c>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IObservable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Scan",
          "isField": 0,
          "type": {
            "tName": "IObservable<'a>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "IObservable<'b>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Partition",
          "isField": 0,
          "type": {
            "tName": "(IObservable<'a> * IObservable<'a>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IObservable<'a>",
              "asm": "netstandard"
            }
          ]
        },
        {
          "meName": "Pairwise",
          "isField": 0,
          "type": {
            "tName": "IObservable<('a * 'a)>",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "IObservable<'a>",
              "asm": "netstandard"
            }
          ]
        }
      ]
    },
    {
      "moName": "WebSharper.Control.Event+Event`1",
      "methods": []
    },
    {
      "moName": "WebSharper.Control.Event",
      "methods": []
    },
    {
      "moName": "WebSharper.Control.DelegateEvent+DelegateEvent`1",
      "methods": []
    },
    {
      "moName": "WebSharper.Control.DelegateEvent",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Control.FSharpEvent`1",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Control.FSharpDelegateEvent`1",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Control.EventModule",
      "methods": [
        {
          "meName": "Split",
          "isField": 0,
          "type": {
            "tName": "(IEvent<FSharpHandler<'b>, 'b> * IEvent<FSharpHandler<'c>, 'c>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> FSharpChoice<'b, 'c>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEvent<'d, 'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Scan",
          "isField": 0,
          "type": {
            "tName": "IEvent<FSharpHandler<'a>, 'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> ('b -> 'a))",
              "asm": "FSharp.Core"
            },
            {
              "tName": "'a",
              "asm": ""
            },
            {
              "tName": "IEvent<'c, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Partition",
          "isField": 0,
          "type": {
            "tName": "(IEvent<FSharpHandler<'a>, 'a> * IEvent<FSharpHandler<'a>, 'a>)",
            "asm": "netstandard"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEvent<'b, 'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Pairwise",
          "isField": 0,
          "type": {
            "tName": "IEvent<FSharpHandler<('b * 'b)>, ('b * 'b)>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEvent<'a, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Merge",
          "isField": 0,
          "type": {
            "tName": "IEvent<FSharpHandler<'b>, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "IEvent<'a, 'b>",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEvent<'c, 'b>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Map",
          "isField": 0,
          "type": {
            "tName": "IEvent<FSharpHandler<'b>, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> 'b)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEvent<'c, 'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Filter",
          "isField": 0,
          "type": {
            "tName": "IEvent<FSharpHandler<'a>, 'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> bool)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEvent<'b, 'a>",
              "asm": "FSharp.Core"
            }
          ]
        },
        {
          "meName": "Choose",
          "isField": 0,
          "type": {
            "tName": "IEvent<FSharpHandler<'b>, 'b>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "('a -> Option<'b>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "IEvent<'c, 'a>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    },
    {
      "moName": "Microsoft.FSharp.Control.FSharpAsyncReplyChannel`1",
      "methods": []
    },
    {
      "moName": "Microsoft.FSharp.Control.FSharpMailboxProcessor`1",
      "methods": [
        {
          "meName": "Start",
          "isField": 0,
          "type": {
            "tName": "FSharpMailboxProcessor<'a>",
            "asm": "FSharp.Core"
          },
          "parms": [
            {
              "tName": "(FSharpMailboxProcessor<'a> -> Async<unit>)",
              "asm": "FSharp.Core"
            },
            {
              "tName": "Option<Threading.CancellationToken>",
              "asm": "FSharp.Core"
            }
          ]
        }
      ]
    }
  ],
  "js": "(function()\r\n{\r\n \"use strict\";\r\n var Global,WebSharper,Control,Observer,Message,HotStream,HotStream$1,Observable,Microsoft,FSharp,Control$1,ObservableModule,Event,Event$1,DelegateEvent,DelegateEvent$1,Obj,FSharpEvent,FSharpDelegateEvent,EventModule,MailboxProcessor,IntelliFactory,Runtime,Util,List,Seq,Unchecked,Arrays,Concurrency,TimeoutException,Operators,Collections,LinkedList;\r\n Global=self;\r\n WebSharper=Global.WebSharper=Global.WebSharper||{};\r\n Control=WebSharper.Control=WebSharper.Control||{};\r\n Observer=Control.Observer=Control.Observer||{};\r\n Message=Observer.Message=Observer.Message||{};\r\n HotStream=Control.HotStream=Control.HotStream||{};\r\n HotStream$1=HotStream.HotStream=HotStream.HotStream||{};\r\n Observable=Control.Observable=Control.Observable||{};\r\n Microsoft=Global.Microsoft=Global.Microsoft||{};\r\n FSharp=Microsoft.FSharp=Microsoft.FSharp||{};\r\n Control$1=FSharp.Control=FSharp.Control||{};\r\n ObservableModule=Control$1.ObservableModule=Control$1.ObservableModule||{};\r\n Event=Control.Event=Control.Event||{};\r\n Event$1=Event.Event=Event.Event||{};\r\n DelegateEvent=Control.DelegateEvent=Control.DelegateEvent||{};\r\n DelegateEvent$1=DelegateEvent.DelegateEvent=DelegateEvent.DelegateEvent||{};\r\n Obj=WebSharper&&WebSharper.Obj;\r\n FSharpEvent=Control.FSharpEvent=Control.FSharpEvent||{};\r\n FSharpDelegateEvent=Control.FSharpDelegateEvent=Control.FSharpDelegateEvent||{};\r\n EventModule=Control$1.EventModule=Control$1.EventModule||{};\r\n MailboxProcessor=Control.MailboxProcessor=Control.MailboxProcessor||{};\r\n IntelliFactory=Global.IntelliFactory;\r\n Runtime=IntelliFactory&&IntelliFactory.Runtime;\r\n Util=WebSharper&&WebSharper.Util;\r\n List=WebSharper&&WebSharper.List;\r\n Seq=WebSharper&&WebSharper.Seq;\r\n Unchecked=WebSharper&&WebSharper.Unchecked;\r\n Arrays=WebSharper&&WebSharper.Arrays;\r\n Concurrency=WebSharper&&WebSharper.Concurrency;\r\n TimeoutException=WebSharper&&WebSharper.TimeoutException;\r\n Operators=WebSharper&&WebSharper.Operators;\r\n Collections=WebSharper&&WebSharper.Collections;\r\n LinkedList=Collections&&Collections.LinkedList;\r\n Message.Completed={\r\n  $:2\r\n };\r\n Observer.New=function(f,e,c)\r\n {\r\n  return{\r\n   OnNext:f,\r\n   OnError:e,\r\n   OnCompleted:function()\r\n   {\r\n    return c();\r\n   }\r\n  };\r\n };\r\n Observer.Of=function(f)\r\n {\r\n  return{\r\n   OnNext:f,\r\n   OnError:function(x)\r\n   {\r\n    throw x;\r\n   },\r\n   OnCompleted:function()\r\n   {\r\n    return null;\r\n   }\r\n  };\r\n };\r\n HotStream$1=HotStream.HotStream=Runtime.Class({\r\n  Trigger:function(v)\r\n  {\r\n   this.Latest[0]={\r\n    $:1,\r\n    $0:v\r\n   };\r\n   this.Event.event.Trigger(v);\r\n  },\r\n  Subscribe:function(o)\r\n  {\r\n   this.Latest[0]!=null?o.OnNext(this.Latest[0].$0):void 0;\r\n   return this.Event.event.Subscribe(Util.observer(function(v)\r\n   {\r\n    o.OnNext(v);\r\n   }));\r\n  }\r\n },null,HotStream$1);\r\n HotStream$1.New$1=function()\r\n {\r\n  return HotStream$1.New([null],new FSharpEvent.New());\r\n };\r\n HotStream$1.New=function(Latest,Event$2)\r\n {\r\n  return new HotStream$1({\r\n   Latest:Latest,\r\n   Event:Event$2\r\n  });\r\n };\r\n Observable.Sequence=function(ios)\r\n {\r\n  function sequence(ios$1)\r\n  {\r\n   return ios$1.$==1?Observable.CombineLatest(ios$1.$0,sequence(ios$1.$1),function($1,$2)\r\n   {\r\n    return new List.T({\r\n     $:1,\r\n     $0:$1,\r\n     $1:$2\r\n    });\r\n   }):Observable.Return(List.T.Empty);\r\n  }\r\n  return sequence(List.ofSeq(ios));\r\n };\r\n Observable.Aggregate=function(io,seed,fold)\r\n {\r\n  return{\r\n   Subscribe:function(o1)\r\n   {\r\n    var state;\r\n    state=[seed];\r\n    return io.Subscribe(Observer.New(function(v)\r\n    {\r\n     Observable.Protect(function()\r\n     {\r\n      return fold(state[0],v);\r\n     },function(s)\r\n     {\r\n      state[0]=s;\r\n      o1.OnNext(s);\r\n     },function(a)\r\n     {\r\n      o1.OnError(a);\r\n     });\r\n    },function(a)\r\n    {\r\n     o1.OnError(a);\r\n    },function()\r\n    {\r\n     o1.OnCompleted();\r\n    }));\r\n   }\r\n  };\r\n };\r\n Observable.SelectMany=function(io)\r\n {\r\n  return{\r\n   Subscribe:function(o)\r\n   {\r\n    var disp,d;\r\n    function dispose()\r\n    {\r\n     disp[0]();\r\n     d.Dispose();\r\n    }\r\n    disp=[Global.ignore];\r\n    d=io.Subscribe(Util.observer(function(o1)\r\n    {\r\n     var d$1;\r\n     d$1=o1.Subscribe(Util.observer(function(v)\r\n     {\r\n      o.OnNext(v);\r\n     }));\r\n     disp[0]=function()\r\n     {\r\n      disp[0]();\r\n      d$1.Dispose();\r\n     };\r\n    }));\r\n    return{\r\n     Dispose:function()\r\n     {\r\n      return dispose();\r\n     }\r\n    };\r\n   }\r\n  };\r\n };\r\n Observable.Switch=function(io)\r\n {\r\n  return{\r\n   Subscribe:function(o)\r\n   {\r\n    var index,disp;\r\n    index=[0];\r\n    disp=[null];\r\n    return io.Subscribe(Util.observer(function(o1)\r\n    {\r\n     var currentIndex;\r\n     index[0]++;\r\n     disp[0]!=null?disp[0].$0.Dispose():void 0;\r\n     currentIndex=index[0];\r\n     disp[0]={\r\n      $:1,\r\n      $0:o1.Subscribe(Util.observer(function(v)\r\n      {\r\n       if(currentIndex===index[0])\r\n        o.OnNext(v);\r\n      }))\r\n     };\r\n    }));\r\n   }\r\n  };\r\n };\r\n Observable.CombineLatest=function(io1,io2,f)\r\n {\r\n  return{\r\n   Subscribe:function(o)\r\n   {\r\n    var lv1,lv2,d1,d2;\r\n    function update()\r\n    {\r\n     var $1,$2,v1,v2;\r\n     $1=lv1[0];\r\n     $2=lv2[0];\r\n     $1!=null&&$1.$==1?$2!=null&&$2.$==1?(v1=$1.$0,v2=$2.$0,Observable.Protect(function()\r\n     {\r\n      return f(v1,v2);\r\n     },function(a)\r\n     {\r\n      o.OnNext(a);\r\n     },function(a)\r\n     {\r\n      o.OnError(a);\r\n     })):void 0:void 0;\r\n    }\r\n    function dispose()\r\n    {\r\n     d1.Dispose();\r\n     d2.Dispose();\r\n    }\r\n    lv1=[null];\r\n    lv2=[null];\r\n    d1=io1.Subscribe(Observer.New(function(x)\r\n    {\r\n     lv1[0]={\r\n      $:1,\r\n      $0:x\r\n     };\r\n     update();\r\n    },Global.ignore,Global.ignore));\r\n    d2=io2.Subscribe(Observer.New(function(y)\r\n    {\r\n     lv2[0]={\r\n      $:1,\r\n      $0:y\r\n     };\r\n     update();\r\n    },Global.ignore,Global.ignore));\r\n    return{\r\n     Dispose:function()\r\n     {\r\n      return dispose();\r\n     }\r\n    };\r\n   }\r\n  };\r\n };\r\n Observable.Range=function(start,count)\r\n {\r\n  return{\r\n   Subscribe:function(o)\r\n   {\r\n    var i,$1;\r\n    function dispose()\r\n    {\r\n    }\r\n    for(i=start,$1=start+count;i<=$1;i++)o.OnNext(i);\r\n    return{\r\n     Dispose:function()\r\n     {\r\n      return dispose();\r\n     }\r\n    };\r\n   }\r\n  };\r\n };\r\n Observable.Concat=function(io1,io2)\r\n {\r\n  return{\r\n   Subscribe:function(o)\r\n   {\r\n    var innerDisp,outerDisp;\r\n    function d()\r\n    {\r\n     innerDisp[0]!=null?innerDisp[0].$0.Dispose():void 0;\r\n     outerDisp.Dispose();\r\n    }\r\n    innerDisp=[null];\r\n    outerDisp=io1.Subscribe(Observer.New(function(a)\r\n    {\r\n     o.OnNext(a);\r\n    },Global.ignore,function()\r\n    {\r\n     innerDisp[0]={\r\n      $:1,\r\n      $0:io2.Subscribe(o)\r\n     };\r\n    }));\r\n    return{\r\n     Dispose:function()\r\n     {\r\n      return d();\r\n     }\r\n    };\r\n   }\r\n  };\r\n };\r\n Observable.Merge=function(io1,io2)\r\n {\r\n  return{\r\n   Subscribe:function(o)\r\n   {\r\n    var completed1,completed2,disp1,disp2;\r\n    function dispose()\r\n    {\r\n     disp1.Dispose();\r\n     disp2.Dispose();\r\n    }\r\n    completed1=[false];\r\n    completed2=[false];\r\n    disp1=io1.Subscribe(Observer.New(function(a)\r\n    {\r\n     o.OnNext(a);\r\n    },Global.ignore,function()\r\n    {\r\n     completed1[0]=true;\r\n     completed1[0]&&completed2[0]?o.OnCompleted():void 0;\r\n    }));\r\n    disp2=io2.Subscribe(Observer.New(function(a)\r\n    {\r\n     o.OnNext(a);\r\n    },Global.ignore,function()\r\n    {\r\n     completed2[0]=true;\r\n     completed1[0]&&completed2[0]?o.OnCompleted():void 0;\r\n    }));\r\n    return{\r\n     Dispose:function()\r\n     {\r\n      return dispose();\r\n     }\r\n    };\r\n   }\r\n  };\r\n };\r\n Observable.Drop=function(count,io)\r\n {\r\n  return{\r\n   Subscribe:function(o1)\r\n   {\r\n    var index;\r\n    index=[0];\r\n    return io.Subscribe(Observer.New(function(v)\r\n    {\r\n     index[0]++;\r\n     index[0]>count?o1.OnNext(v):void 0;\r\n    },function(a)\r\n    {\r\n     o1.OnError(a);\r\n    },function()\r\n    {\r\n     o1.OnCompleted();\r\n    }));\r\n   }\r\n  };\r\n };\r\n Observable.Choose=function(f,io)\r\n {\r\n  return{\r\n   Subscribe:function(o1)\r\n   {\r\n    return io.Subscribe(Observer.New(function(v)\r\n    {\r\n     function a(a$1)\r\n     {\r\n      o1.OnNext(a$1);\r\n     }\r\n     Observable.Protect(function()\r\n     {\r\n      return f(v);\r\n     },function(o)\r\n     {\r\n      if(o==null)\r\n       ;\r\n      else\r\n       a(o.$0);\r\n     },function(a$1)\r\n     {\r\n      o1.OnError(a$1);\r\n     });\r\n    },function(a)\r\n    {\r\n     o1.OnError(a);\r\n    },function()\r\n    {\r\n     o1.OnCompleted();\r\n    }));\r\n   }\r\n  };\r\n };\r\n Observable.Filter=function(f,io)\r\n {\r\n  return{\r\n   Subscribe:function(o1)\r\n   {\r\n    return io.Subscribe(Observer.New(function(v)\r\n    {\r\n     function a(a$1)\r\n     {\r\n      o1.OnNext(a$1);\r\n     }\r\n     Observable.Protect(function()\r\n     {\r\n      return f(v)?{\r\n       $:1,\r\n       $0:v\r\n      }:null;\r\n     },function(o)\r\n     {\r\n      if(o==null)\r\n       ;\r\n      else\r\n       a(o.$0);\r\n     },function(a$1)\r\n     {\r\n      o1.OnError(a$1);\r\n     });\r\n    },function(a)\r\n    {\r\n     o1.OnError(a);\r\n    },function()\r\n    {\r\n     o1.OnCompleted();\r\n    }));\r\n   }\r\n  };\r\n };\r\n Observable.Map=function(f,io)\r\n {\r\n  return{\r\n   Subscribe:function(o1)\r\n   {\r\n    return io.Subscribe(Observer.New(function(v)\r\n    {\r\n     Observable.Protect(function()\r\n     {\r\n      return f(v);\r\n     },function(a)\r\n     {\r\n      o1.OnNext(a);\r\n     },function(a)\r\n     {\r\n      o1.OnError(a);\r\n     });\r\n    },function(a)\r\n    {\r\n     o1.OnError(a);\r\n    },function()\r\n    {\r\n     o1.OnCompleted();\r\n    }));\r\n   }\r\n  };\r\n };\r\n Observable.Protect=function(f,succeed,fail)\r\n {\r\n  var m;\r\n  try\r\n  {\r\n   m={\r\n    $:0,\r\n    $0:f()\r\n   };\r\n  }\r\n  catch(e)\r\n  {\r\n   m={\r\n    $:1,\r\n    $0:e\r\n   };\r\n  }\r\n  return m.$==1?fail(m.$0):succeed(m.$0);\r\n };\r\n Observable.Never=function()\r\n {\r\n  return{\r\n   Subscribe:function()\r\n   {\r\n    function dispose()\r\n    {\r\n    }\r\n    return{\r\n     Dispose:function()\r\n     {\r\n      return dispose();\r\n     }\r\n    };\r\n   }\r\n  };\r\n };\r\n Observable.Return=function(x)\r\n {\r\n  return{\r\n   Subscribe:function(o)\r\n   {\r\n    function dispose()\r\n    {\r\n    }\r\n    o.OnNext(x);\r\n    o.OnCompleted();\r\n    return{\r\n     Dispose:function()\r\n     {\r\n      return dispose();\r\n     }\r\n    };\r\n   }\r\n  };\r\n };\r\n Observable.Of=function(f)\r\n {\r\n  return{\r\n   Subscribe:function(o)\r\n   {\r\n    var dispose;\r\n    dispose=f(function(x)\r\n    {\r\n     o.OnNext(x);\r\n    });\r\n    return{\r\n     Dispose:function()\r\n     {\r\n      return dispose();\r\n     }\r\n    };\r\n   }\r\n  };\r\n };\r\n ObservableModule.Split=function(f,e)\r\n {\r\n  return[Observable.Choose(function(x)\r\n  {\r\n   var m;\r\n   m=f(x);\r\n   return m.$==0?{\r\n    $:1,\r\n    $0:m.$0\r\n   }:null;\r\n  },e),Observable.Choose(function(x)\r\n  {\r\n   var m;\r\n   m=f(x);\r\n   return m.$==1?{\r\n    $:1,\r\n    $0:m.$0\r\n   }:null;\r\n  },e)];\r\n };\r\n ObservableModule.Scan=function(fold,seed,e)\r\n {\r\n  return{\r\n   Subscribe:function(o1)\r\n   {\r\n    var state;\r\n    state=[seed];\r\n    return e.Subscribe(Observer.New(function(v)\r\n    {\r\n     Observable.Protect(function()\r\n     {\r\n      return fold(state[0],v);\r\n     },function(s)\r\n     {\r\n      state[0]=s;\r\n      o1.OnNext(s);\r\n     },function(a)\r\n     {\r\n      o1.OnError(a);\r\n     });\r\n    },function(a)\r\n    {\r\n     o1.OnError(a);\r\n    },function()\r\n    {\r\n     o1.OnCompleted();\r\n    }));\r\n   }\r\n  };\r\n };\r\n ObservableModule.Partition=function(f,e)\r\n {\r\n  function g(v)\r\n  {\r\n   return!v;\r\n  }\r\n  return[Observable.Filter(f,e),Observable.Filter(function(x)\r\n  {\r\n   return g(f(x));\r\n  },e)];\r\n };\r\n ObservableModule.Pairwise=function(e)\r\n {\r\n  return{\r\n   Subscribe:function(o1)\r\n   {\r\n    var last;\r\n    last=[null];\r\n    return e.Subscribe(Observer.New(function(v)\r\n    {\r\n     var m;\r\n     m=last[0];\r\n     m!=null&&m.$==1?o1.OnNext([m.$0,v]):void 0;\r\n     last[0]={\r\n      $:1,\r\n      $0:v\r\n     };\r\n    },function(a)\r\n    {\r\n     o1.OnError(a);\r\n    },function()\r\n    {\r\n     o1.OnCompleted();\r\n    }));\r\n   }\r\n  };\r\n };\r\n Event$1=Event.Event=Runtime.Class({\r\n  Subscribe$1:function(observer)\r\n  {\r\n   var $this;\r\n   function h(a,x)\r\n   {\r\n    return observer.OnNext(x);\r\n   }\r\n   function dispose()\r\n   {\r\n    $this.RemoveHandler$1(h);\r\n   }\r\n   $this=this;\r\n   this.AddHandler$1(h);\r\n   return{\r\n    Dispose:function()\r\n    {\r\n     return dispose();\r\n    }\r\n   };\r\n  },\r\n  RemoveHandler$1:function(h)\r\n  {\r\n   var o,o$1;\r\n   o=Seq.tryFindIndex(function(y)\r\n   {\r\n    return Unchecked.Equals(h,y);\r\n   },this.Handlers);\r\n   o==null?void 0:(o$1=this.Handlers,o$1.splice.apply(o$1,[o.$0,1]));\r\n  },\r\n  AddHandler$1:function(h)\r\n  {\r\n   this.Handlers.push(h);\r\n  },\r\n  Trigger:function(x)\r\n  {\r\n   var a,i,$1;\r\n   a=this.Handlers.slice();\r\n   for(i=0,$1=a.length-1;i<=$1;i++)(Arrays.get(a,i))(null,x);\r\n  },\r\n  RemoveHandler:function(x)\r\n  {\r\n   this.RemoveHandler$1(x);\r\n  },\r\n  AddHandler:function(x)\r\n  {\r\n   this.AddHandler$1(x);\r\n  },\r\n  Subscribe:function(observer)\r\n  {\r\n   return this.Subscribe$1(observer);\r\n  },\r\n  Dispose:Global.ignore\r\n },null,Event$1);\r\n Event$1.New=function(Handlers)\r\n {\r\n  return new Event$1({\r\n   Handlers:Handlers\r\n  });\r\n };\r\n DelegateEvent$1=DelegateEvent.DelegateEvent=Runtime.Class({\r\n  RemoveHandler$1:function(h)\r\n  {\r\n   var o,o$1;\r\n   o=Seq.tryFindIndex(function(y)\r\n   {\r\n    return Unchecked.Equals(h,y);\r\n   },this.Handlers);\r\n   o==null?void 0:(o$1=this.Handlers,o$1.splice.apply(o$1,[o.$0,1]));\r\n  },\r\n  AddHandler$1:function(h)\r\n  {\r\n   this.Handlers.push(h);\r\n  },\r\n  Trigger:function(x)\r\n  {\r\n   var a,i,$1;\r\n   a=this.Handlers.slice();\r\n   for(i=0,$1=a.length-1;i<=$1;i++)Arrays.get(a,i).apply(null,x);\r\n  },\r\n  RemoveHandler:function(x)\r\n  {\r\n   this.RemoveHandler$1(x);\r\n  },\r\n  AddHandler:function(x)\r\n  {\r\n   this.AddHandler$1(x);\r\n  },\r\n  Dispose:Global.ignore\r\n },null,DelegateEvent$1);\r\n DelegateEvent$1.New=function(Handlers)\r\n {\r\n  return new DelegateEvent$1({\r\n   Handlers:Handlers\r\n  });\r\n };\r\n FSharpEvent=Control.FSharpEvent=Runtime.Class({},Obj,FSharpEvent);\r\n FSharpEvent.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n  this.event=Event$1.New([]);\r\n },FSharpEvent);\r\n FSharpDelegateEvent=Control.FSharpDelegateEvent=Runtime.Class({},Obj,FSharpDelegateEvent);\r\n FSharpDelegateEvent.New=Runtime.Ctor(function()\r\n {\r\n  Obj.New.call(this);\r\n  this.event=DelegateEvent$1.New([]);\r\n },FSharpDelegateEvent);\r\n EventModule.Split=function(f,e)\r\n {\r\n  return[EventModule.Choose(function(x)\r\n  {\r\n   var m;\r\n   m=f(x);\r\n   return m.$==0?{\r\n    $:1,\r\n    $0:m.$0\r\n   }:null;\r\n  },e),EventModule.Choose(function(x)\r\n  {\r\n   var m;\r\n   m=f(x);\r\n   return m.$==1?{\r\n    $:1,\r\n    $0:m.$0\r\n   }:null;\r\n  },e)];\r\n };\r\n EventModule.Scan=function(fold,seed,e)\r\n {\r\n  var state;\r\n  state=[seed];\r\n  return EventModule.Map(function(value)\r\n  {\r\n   state[0]=fold(state[0],value);\r\n   return state[0];\r\n  },e);\r\n };\r\n EventModule.Partition=function(f,e)\r\n {\r\n  function g(v)\r\n  {\r\n   return!v;\r\n  }\r\n  return[EventModule.Filter(f,e),EventModule.Filter(function(x)\r\n  {\r\n   return g(f(x));\r\n  },e)];\r\n };\r\n EventModule.Pairwise=function(e)\r\n {\r\n  var buf,ev;\r\n  buf=[null];\r\n  ev=Event$1.New([]);\r\n  e.Subscribe(Util.observer(function(x)\r\n  {\r\n   var m;\r\n   m=buf[0];\r\n   m!=null&&m.$==1?(buf[0]={\r\n    $:1,\r\n    $0:x\r\n   },ev.Trigger([m.$0,x])):buf[0]={\r\n    $:1,\r\n    $0:x\r\n   };\r\n  }));\r\n  return ev;\r\n };\r\n EventModule.Merge=function(e1,e2)\r\n {\r\n  var r;\r\n  r=Event$1.New([]);\r\n  e1.Subscribe(Util.observer(function(a)\r\n  {\r\n   r.Trigger(a);\r\n  }));\r\n  e2.Subscribe(Util.observer(function(a)\r\n  {\r\n   r.Trigger(a);\r\n  }));\r\n  return r;\r\n };\r\n EventModule.Map=function(f,e)\r\n {\r\n  var r;\r\n  r=Event$1.New([]);\r\n  e.Subscribe(Util.observer(function(x)\r\n  {\r\n   r.Trigger(f(x));\r\n  }));\r\n  return r;\r\n };\r\n EventModule.Filter=function(ok,e)\r\n {\r\n  var r;\r\n  r=Event$1.New([]);\r\n  e.Subscribe(Util.observer(function(x)\r\n  {\r\n   if(ok(x))\r\n    r.Trigger(x);\r\n  }));\r\n  return r;\r\n };\r\n EventModule.Choose=function(c,e)\r\n {\r\n  var r;\r\n  r=new FSharpEvent.New();\r\n  e.Subscribe(Util.observer(function(x)\r\n  {\r\n   var m;\r\n   m=c(x);\r\n   m==null?void 0:r.event.Trigger(m.$0);\r\n  }));\r\n  return r.event;\r\n };\r\n MailboxProcessor=Control.MailboxProcessor=Runtime.Class({\r\n  dequeue:function()\r\n  {\r\n   var f;\r\n   f=this.mailbox.n.v;\r\n   this.mailbox.RemoveFirst();\r\n   return f;\r\n  },\r\n  resume:function()\r\n  {\r\n   var m;\r\n   m=this.savedCont;\r\n   m!=null&&m.$==1?(this.savedCont=null,this.startAsync(m.$0)):void 0;\r\n  },\r\n  startAsync:function(a)\r\n  {\r\n   Concurrency.Start(a,this.token);\r\n  },\r\n  Scan:function(scanner,timeout)\r\n  {\r\n   var $this,b;\r\n   $this=this;\r\n   b=null;\r\n   return Concurrency.Delay(function()\r\n   {\r\n    return Concurrency.Bind($this.TryScan(scanner,timeout),function(a)\r\n    {\r\n     var $1,$2;\r\n     if(a!=null&&a.$==1)\r\n      $2=a.$0;\r\n     else\r\n      throw new TimeoutException.New();\r\n     return Concurrency.Return($2);\r\n    });\r\n   });\r\n  },\r\n  TryScan:function(scanner,timeout)\r\n  {\r\n   var $this,timeout$1,d,b;\r\n   $this=this;\r\n   timeout$1=(d=this.get_DefaultTimeout(),timeout==null?d:timeout.$0);\r\n   b=null;\r\n   return Concurrency.Delay(function()\r\n   {\r\n    var m,m$1,found,m$2;\r\n    function a(ok)\r\n    {\r\n     var waiting,pending;\r\n     function scanNext()\r\n     {\r\n      var b$1;\r\n      $this.savedCont={\r\n       $:1,\r\n       $0:(b$1=null,Concurrency.Delay(function()\r\n       {\r\n        var m$3;\r\n        m$3=scanner($this.mailbox.n.v);\r\n        return m$3!=null&&m$3.$==1?($this.mailbox.RemoveFirst(),Concurrency.Bind(m$3.$0,function(a$1)\r\n        {\r\n         ok({\r\n          $:1,\r\n          $0:a$1\r\n         });\r\n         return Concurrency.Zero();\r\n        })):(scanNext(),Concurrency.Zero());\r\n       }))\r\n      };\r\n     }\r\n     function scanNext$1()\r\n     {\r\n      var b$1;\r\n      $this.savedCont={\r\n       $:1,\r\n       $0:(b$1=null,Concurrency.Delay(function()\r\n       {\r\n        var m$3;\r\n        m$3=scanner($this.mailbox.n.v);\r\n        return m$3!=null&&m$3.$==1?($this.mailbox.RemoveFirst(),Concurrency.Bind(m$3.$0,function(a$1)\r\n        {\r\n         return waiting[0]?(waiting[0]=false,Global.clearTimeout(pending),ok({\r\n          $:1,\r\n          $0:a$1\r\n         }),Concurrency.Zero()):Concurrency.Zero();\r\n        })):(scanNext$1(),Concurrency.Zero());\r\n       }))\r\n      };\r\n     }\r\n     if(timeout$1<0)\r\n      {\r\n       scanNext();\r\n      }\r\n     else\r\n      {\r\n       waiting=[true];\r\n       pending=Global.setTimeout(function()\r\n       {\r\n        if(waiting[0])\r\n         {\r\n          waiting[0]=false;\r\n          $this.savedCont=null;\r\n          ok(null);\r\n         }\r\n       },timeout$1);\r\n       scanNext$1();\r\n      }\r\n    }\r\n    m$1=$this.mailbox.n;\r\n    found=null;\r\n    while(!Unchecked.Equals(m$1,null))\r\n     {\r\n      m$2=scanner(m$1.v);\r\n      m$2==null?m$1=m$1.n:($this.mailbox.Remove$1(m$1),m$1=null,found=m$2);\r\n     }\r\n    m=found;\r\n    return m!=null&&m.$==1?Concurrency.Bind(m.$0,function(a$1)\r\n    {\r\n     return Concurrency.Return({\r\n      $:1,\r\n      $0:a$1\r\n     });\r\n    }):Concurrency.FromContinuations(function($1,$2,$3)\r\n    {\r\n     return a.apply(null,[$1,$2,$3]);\r\n    });\r\n   });\r\n  },\r\n  PostAndAsyncReply:function(msgf,timeout)\r\n  {\r\n   var $this,b;\r\n   $this=this;\r\n   b=null;\r\n   return Concurrency.Delay(function()\r\n   {\r\n    return Concurrency.Bind($this.PostAndTryAsyncReply(msgf,timeout),function(a)\r\n    {\r\n     var $1,$2;\r\n     if(a!=null&&a.$==1)\r\n      $2=a.$0;\r\n     else\r\n      throw new TimeoutException.New();\r\n     return Concurrency.Return($2);\r\n    });\r\n   });\r\n  },\r\n  PostAndTryAsyncReply:function(msgf,timeout)\r\n  {\r\n   var $this,timeout$1,d;\r\n   function a(ok)\r\n   {\r\n    var waiting;\r\n    function f(a$1)\r\n    {\r\n     return{\r\n      $:1,\r\n      $0:a$1\r\n     };\r\n    }\r\n    if(timeout$1<0)\r\n     {\r\n      $this.mailbox.AddLast(msgf(function(x)\r\n      {\r\n       return ok(f(x));\r\n      }));\r\n      $this.resume();\r\n     }\r\n    else\r\n     {\r\n      waiting=[true];\r\n      $this.mailbox.AddLast(msgf(function(res)\r\n      {\r\n       if(waiting[0])\r\n        {\r\n         waiting[0]=false;\r\n         ok({\r\n          $:1,\r\n          $0:res\r\n         });\r\n        }\r\n      }));\r\n      $this.resume();\r\n      Global.setTimeout(function()\r\n      {\r\n       if(waiting[0])\r\n        {\r\n         waiting[0]=false;\r\n         ok(null);\r\n        }\r\n      },timeout$1);\r\n     }\r\n   }\r\n   $this=this;\r\n   timeout$1=(d=this.get_DefaultTimeout(),timeout==null?d:timeout.$0);\r\n   return Concurrency.FromContinuations(function($1,$2,$3)\r\n   {\r\n    return a.apply(null,[$1,$2,$3]);\r\n   });\r\n  },\r\n  get_CurrentQueueLength:function()\r\n  {\r\n   return this.mailbox.c;\r\n  },\r\n  Receive:function(timeout)\r\n  {\r\n   var $this,b;\r\n   $this=this;\r\n   b=null;\r\n   return Concurrency.Delay(function()\r\n   {\r\n    return Concurrency.Bind($this.TryReceive(timeout),function(a)\r\n    {\r\n     var $1,$2;\r\n     if(a!=null&&a.$==1)\r\n      $2=a.$0;\r\n     else\r\n      throw new TimeoutException.New();\r\n     return Concurrency.Return($2);\r\n    });\r\n   });\r\n  },\r\n  TryReceive:function(timeout)\r\n  {\r\n   var $this,timeout$1,d;\r\n   function a(ok)\r\n   {\r\n    var b,waiting,pending,b$1;\r\n    if(Unchecked.Equals($this.mailbox.n,null))\r\n    {\r\n     if(timeout$1<0)\r\n      {\r\n       $this.savedCont={\r\n        $:1,\r\n        $0:(b=null,Concurrency.Delay(function()\r\n        {\r\n         ok({\r\n          $:1,\r\n          $0:$this.dequeue()\r\n         });\r\n         return Concurrency.Zero();\r\n        }))\r\n       };\r\n      }\r\n     else\r\n      {\r\n       waiting=[true];\r\n       pending=Global.setTimeout(function()\r\n       {\r\n        if(waiting[0])\r\n         {\r\n          waiting[0]=false;\r\n          $this.savedCont=null;\r\n          ok(null);\r\n         }\r\n       },timeout$1);\r\n       $this.savedCont={\r\n        $:1,\r\n        $0:(b$1=null,Concurrency.Delay(function()\r\n        {\r\n         return waiting[0]?(waiting[0]=false,Global.clearTimeout(pending),ok({\r\n          $:1,\r\n          $0:$this.dequeue()\r\n         }),Concurrency.Zero()):Concurrency.Zero();\r\n        }))\r\n       };\r\n      }\r\n    }\r\n    else\r\n     ok({\r\n      $:1,\r\n      $0:$this.dequeue()\r\n     });\r\n   }\r\n   $this=this;\r\n   timeout$1=(d=this.get_DefaultTimeout(),timeout==null?d:timeout.$0);\r\n   return Concurrency.FromContinuations(function($1,$2,$3)\r\n   {\r\n    return a.apply(null,[$1,$2,$3]);\r\n   });\r\n  },\r\n  Start:function()\r\n  {\r\n   var $this,b;\r\n   $this=this;\r\n   this.started?Operators.FailWith(\"The MailboxProcessor has already been started.\"):(this.started=true,$this.startAsync((b=null,Concurrency.Delay(function()\r\n   {\r\n    return Concurrency.TryWith(Concurrency.Delay(function()\r\n    {\r\n     return Concurrency.Bind($this.initial($this),function()\r\n     {\r\n      return Concurrency.Return(null);\r\n     });\r\n    }),function(a)\r\n    {\r\n     $this.errorEvent.event.Trigger(a);\r\n     return Concurrency.Zero();\r\n    });\r\n   }))));\r\n  },\r\n  set_DefaultTimeout:function(v)\r\n  {\r\n   this.DefaultTimeout=v;\r\n  },\r\n  get_DefaultTimeout:function()\r\n  {\r\n   return this.DefaultTimeout;\r\n  },\r\n  remove_Error:function(handler)\r\n  {\r\n   this.errorEvent.event.RemoveHandler(handler);\r\n  },\r\n  add_Error:function(handler)\r\n  {\r\n   this.errorEvent.event.AddHandler(handler);\r\n  },\r\n  get_Error:function()\r\n  {\r\n   return this.errorEvent.event;\r\n  }\r\n },Obj,MailboxProcessor);\r\n MailboxProcessor.Start=function(initial,token)\r\n {\r\n  var mb;\r\n  mb=new MailboxProcessor.New(initial,token);\r\n  mb.Start();\r\n  return mb;\r\n };\r\n MailboxProcessor.New=Runtime.Ctor(function(initial,token)\r\n {\r\n  var $this,m;\r\n  function callback(u)\r\n  {\r\n   return $this.resume();\r\n  }\r\n  $this=this;\r\n  Obj.New.call(this);\r\n  this.initial=initial;\r\n  this.token=token;\r\n  this.started=false;\r\n  this.errorEvent=new FSharpEvent.New();\r\n  this.mailbox=new LinkedList.New();\r\n  this.savedCont=null;\r\n  m=this.token;\r\n  m==null?void 0:Concurrency.Register(m.$0,function()\r\n  {\r\n   callback();\r\n  });\r\n  this.DefaultTimeout=-1;\r\n },MailboxProcessor);\r\n}());\r\n"
}
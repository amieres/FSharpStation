#nowarn "3242"
////-d:DLL -d:FSharpStation1584484416768 -d:TEE -d:WEBSHARPER
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Web.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Main.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Web.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Control.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
//#nowarn "3242"
/// Root namespace for all code
//#define FSharpStation1584484416768
#if INTERACTIVE
module FsRoot   =
#else
#if DLL
namespace FsRootDll
#else
namespace FsRoot
#endif
#endif

    #if !NETSTANDARD20
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Web.dll"
    
    #if WEBSHARPER
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461"
    
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Main.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Web.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Control.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
    #endif
    #endif
    #if WEBSHARPER
    //#nowarn "3242" 
    
    open WebSharper
    //open WebSharper.JavaScript
    open WebSharper.UI
    open WebSharper.UI.Client
    type on   = WebSharper.UI.Html.on
    type attr = WebSharper.UI.Html.attr
    #else
    /// dummy WebSharper definition in order to avoid having to use #if WEBSHARPER all the time
    module WebSharper =
        type RpcAttribute() =
            inherit System.Attribute()
            let a = 1
        type JavaScriptAttribute(translate:bool) =
            inherit System.Attribute()
            let a = 1
            new() = JavaScriptAttribute true
        type JavaScriptExportAttribute(translate:bool) =
            inherit System.Attribute()
            let a = 1
            new() = JavaScriptExportAttribute true
        type InlineAttribute(code:string) =
            inherit System.Attribute()
            let a = 1
            new() = InlineAttribute ""
        type DirectAttribute(code:string) =
            inherit System.Attribute()
            let a = 1
    
    open WebSharper
    
    #endif
    
        /// Essentials that can be converted to JavaScript with WebSharper
        [< JavaScriptExport ; AutoOpen >]
        module Library = 
            let Error = Result.Error
        
            let [<Inline>] inline swap f a b = f b a
            
            /// swap: for use with operators: [1..5] |> List.map (__ (/) 2)
            let [<Inline>] inline __   f a b = f b a
            
            
            type StringId<'T> = StringId of string 
            with
                member this.Id = match this with StringId v -> v
            
            type GuidId<'T> = GuidId of System.Guid
            with
                member this.Id = match this with GuidId v -> v
            
            /// call a function but return the input value
            /// for logging, debugging
            /// use: (5 * 8) |> tee (printfn "value = %d") |> doSomethingElse
            let [<Inline>] inline tee f v = f v ; v
            
            /// tee: call a function but return the input value
            /// for logging, debugging
            /// use: (5 * 8) |!> printfn "value = %d" |> doSomethingElse
            let [<Inline>] inline  (|>!) v f   = f v ; v
            let [<Inline>] inline  (>>!) g f   = g >> fun v -> f v ; v
            
            let inline print v = 
                match box v with
                | :? string as s -> printfn "%s" s
                | __             -> printfn "%A" v
            
            //#define TEE
            [< Inline "(function (n) { return n.getFullYear() + '-' + ('0'+(n.getMonth()+1)).slice(-2) + '-' +  ('0'+n.getDate()).slice(-2) + ' '+('0'+n.getHours()).slice(-2)+ ':'+('0'+n.getMinutes()).slice(-2)+ ':'+('0'+n.getSeconds()).slice(-2)+ ':'+('00'+n.getMilliseconds()).slice(-3) })(new Date(Date.now()))" >]
            let nowStamp() = 
                let t = System.DateTime.UtcNow // in two steps to avoid Warning: The value has been copied to ensure the original is not mutated
                t.ToString("yyyy-MM-dd HH:mm:ss.fff", System.Globalization.CultureInfo.InvariantCulture)
            
            let [<Inline>] inline traceT t v = tee (sprintf "%A" >> (fun s -> s.[..min 100 s.Length-1]) >> printfn "%s %s: %A" (nowStamp()) t) v
            let [<Inline>] inline trace   v = traceT "trace" v
            let [<Inline>] inline traceI  v = trace          v |> ignore
            
            module Log =
                let [<Inline>] inline In     n f   =      (traceT (sprintf "%s in " n)) >> f
                let [<Inline>] inline Out    n f   = f >> (traceT (sprintf "%s out" n))
                let [<Inline>] inline InA    n f p = async { return! In  n f p }
                let [<Inline>] inline OutA   n f p = async { return! Out n f p }
                let [<Inline>] inline InOut  n     = In  n >> Out  n
                let [<Inline>] inline InOutA n f p = async {
                    let!   r = InA n f  p
                    do         Out n id r |> ignore
                    return r 
                  }
            
                let [<Inline>] inline TimeIt n f p =
                    printfn "Starting %s" n
                    let start = System.DateTime.UtcNow.Ticks
                    f p
                    let elapsedSpan = new System.TimeSpan(System.DateTime.UtcNow.Ticks - start)
                    print <| elapsedSpan.ToString()
            
            
            // issues with websharper Type not found in JavaScript compilation: System.Collections.Generic.IDictionary`2
            #if !WEBSHARPER
            module IDict =
                let inline tryGetValue key (dict:System.Collections.Generic.IDictionary<_, _>) =
                    let mutable res = Unchecked.defaultof<_>
                    if dict.TryGetValue(key, &res)
                    then Some res 
                    else None
                let add          key v (dict:System.Collections.Generic.IDictionary<_, _>) = if dict.ContainsKey key then      dict.[key] <- v else dict.Add(key, v)
            #endif
            
            module Dict =
                let [<Inline>] inline tryGetValue key (dict:System.Collections.Generic. Dictionary<_, _>) =
                    let mutable res = Unchecked.defaultof<_>
                    if dict.TryGetValue(key, &res)
                    then Some res 
                    else None
                let add          key v (dict:System.Collections.Generic. Dictionary<_, _>) = if dict.ContainsKey key then      dict.[key] <- v else dict.Add(key, v)
            
            module LDict =
                let [<Inline>] inline containsKey  key  dict = (^a : (member ContainsKey : _ -> bool) (dict, key))
                //let inline item         key  dict = (^a : (member get_Item    : _ -> _   ) (dict, key))
                let [<Inline>] inline tryGetValue fitem key  dict =
                    if containsKey key dict then Some (fitem key)
                    else None
            
            
            module Memoize =
            
                /// returns 3 functions:
                ///    checkO  : ('p->'v option) 
                ///    getOrAdd: ('p->('p->'v)->'v) 
                ///    clear   : (unit->unit)
                [<Inline>]
                let getStoreWithDict (cache: System.Collections.Generic.Dictionary<_, _>) =
                    let checkO v     = let mutable res = Unchecked.defaultof<_>
                                       let ok          = cache.TryGetValue(v, &res)
                                       if  ok then Some res else None
                    let store  v res = cache.[v] <- res
                                       res
                    let getOrAdd p f = checkO p |> Option.defaultWith (fun () -> f p |> store p )
                    (checkO, getOrAdd), cache.Clear
            
                /// creates a Dictionary to store memoized values
                /// returns 3 functions:
                ///    checkO  : ('p->'v option) 
                ///    getOrAdd: ('p->('p->'v)->'v) 
                ///    clear   : (unit->unit)
                [<Inline>]
                let getStore() = getStoreWithDict (System.Collections.Generic.Dictionary<_, _>() )
            
                /// Memoizes function f using the provided cache
                /// getCache() returns 1 function:
                ///    getOrAdd: ('p->('p->'v)->'v) 
                [< Inline >]
                let memoizeStore (getOrAdd:('key -> ('key -> 'value) -> 'value) ) f =
                    fun p -> getOrAdd p f
            
            
                /// Memoizes the function f using a Dictionary
                /// Returns the memoized function and a clear() function
                /// The dictionary can be reset using the clear() function
                [< Inline >]
                let memoizeResetable f =
                    let (check, getOrAdd), clear = getStore()
                    let memoF = memoizeStore getOrAdd f
                    memoF, clear
            
                /// Memoizes the function f using the provided Dictionary
                [<Inline>]
                let memoizeWithDict dict f =
                    let (check, getOrAdd), clear = getStoreWithDict dict
                    let memoF = memoizeStore getOrAdd f
                    memoF
            
                /// Memoizes the function f and returns Dictionary
                [<Inline>]
                let memoizeDict f =
                    let dict = System.Collections.Generic.Dictionary<_, _>() 
                    let (check, getOrAdd), clear = getStoreWithDict dict
                    let memoF = memoizeStore getOrAdd f
                    memoF, dict
            
                /// Memoizes the function f using a Dictionary
                [<Inline>]
                let memoize f = memoizeResetable f |> fst
            
            
            /// returns a function that delays its execution
            /// cancels prior when multiple calls happen before the delay
            let delayedA delay doF =
                let mutable cancelTokenO = None
                fun parm -> 
                    let asy = async {
                        do! Async.Sleep delay
                        do! doF parm
                    } 
                    cancelTokenO |> Option.iter (fun (tokenSource: System.Threading.CancellationTokenSource) -> tokenSource.Cancel())
                    cancelTokenO <- Some <| new System.Threading.CancellationTokenSource()
                    Async.Start(asy, cancellationToken = cancelTokenO.Value.Token)
            
            /// returns a function that delays its execution
            /// cancels prior when multiple calls happen before the delay
            let delayed delay doF = delayedA delay (doF >> async.Return)
            
            [< AutoOpen >]
            module Monads =
                
                module State =
                
                    type State<'T, 'S> = 'S -> ('S * 'T)
                
                    let rtn v = fun s -> s, v
                    let bind (f:'a->State<'b,'S>) (ma:State<'a,'S>) : State<'b,'S> = 
                        fun s1 -> 
                            let s2, a = ma s1
                            f a s2            
                    let map f = bind (f >> rtn)
                
                
                    type CEBuilder() =
                        member __.Bind   (m, f) = bind f m
                        member __.Return     v  = rtn v
                        member __.Delay      f  = f ()
                
                    let state = CEBuilder()
                
                    module Operators =
                        let (>>=) ma f = bind f ma
                        let (|>>) ma f = map  f ma
                module Result =
                    open Result
                
                    let errorf fmt = Printf.ksprintf Error fmt
                
                    let rtn                          = Ok
                    let join                       r = Result.bind id r
                    let flatten                    r = Result.bind id r
                    let toOption                   r = r   |> function Ok v -> Some v |       _ -> None
                    let defaultWith              f r = r   |> function Ok v ->      v | Error e -> f e
                    let defaultValue             d r = r   |> function Ok v ->      v | Error _ -> d
                    let failIfTrue               m v = if     v then m |> Error  else Ok () 
                    let failIfFalse              m v = if not v then m |> Error  else Ok () 
                    let iter                  fE f r = r   |> map  f |> defaultWith fE                                                 : unit
                    let get                        r = r   |>          defaultWith (string >> failwith)
                    let ofOption              f   vO = vO  |> Option.map Ok           |> Option.defaultWith (f >> Error)
                    let insertO                  vRO = vRO |> Option.map(map Some)    |> Option.defaultWith(fun () -> Ok None)
                    let absorbO               f  vOR = vOR |> bind (ofOption f)
                    let (>>=)                    r f = bind f r
                    let traverseSeq           f   sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                       Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                    let inline sequenceSeq        sq = traverseSeq id sq
                        
                    
                    type Builder() =
                        member inline this.Return          x       = rtn  x
                        member inline this.ReturnFrom      x       =     (x:Result<_,_>)
                        member        this.Bind           (w , r ) = Result.bind  r w
                        member inline this.Zero           ()       = rtn ()
                        member inline this.Delay           f       = f
                        member inline this.Combine        (a, b)   = bind b a
                        member inline this.Run             f       = Ok () |> bind f
                        member this.TryWith   (body, handler     ) = try body() with e -> handler     e
                        member this.TryFinally(body, compensation) = try body() finally   compensation()
                        member this.Using     (disposable, body  ) = using (disposable:#System.IDisposable) body
                        member this.While(guard, body) =
                            let rec whileLoop guard body =
                                if guard() then body() |> bind (fun () -> whileLoop guard body)
                                else rtn   ()
                            whileLoop guard body
                        member this.For(sequence:seq<_>, body) =
                            this.Using(sequence.GetEnumerator(),fun enum -> 
                                this.While(enum.MoveNext, 
                                    this.Delay(fun () -> body enum.Current)))
                                    
                    let result = Builder()
                    
                    module Operators =
                        let inline (|>>) v f   = map   f v
                        let inline (>>=) v f   = bind  f v
                        let inline (>>>) f g v = f v |>> g
                        let inline (>=>) f g v = f v >>= g
                        let inline rtn   v     = rtn    v
                        let result = result
                
                
                module Depend =
                
                    type Depend<'T> = 
                    | Dependency of (string * obj) option * (obj -> Depend<'T>)
                    | NoMore     of 'T
                
                    let dependByName nm (defF:'f) (kf:'f->'T) = Dependency(Some(nm, box defF), fun f -> NoMore (kf (unbox f)) )
                
                    #if !WEBSHARPER
                    open Microsoft.FSharp.Quotations.Patterns 
                    open Microsoft.FSharp.Quotations.DerivedPatterns 
                
                    let pname (prop  :System.Reflection.PropertyInfo) = prop  .DeclaringType.FullName + "." + prop  .Name
                    let mname (method:System.Reflection.MethodInfo  ) = method.DeclaringType.FullName + "." + method.Name
                
                    let shouldBe q = 
                        let rec shouldBe l =
                            function
                            | Call(_, method, _) -> Some(mname method, l)
                            | Lambda(a, q2)      -> shouldBe (l + 1) q2
                            | _ -> None
                        match q with
                        | PropertyGet(o,                                          prop  , [         ]     )-> pname prop  , "should be 0"
                        | Lambda(a,                                    Call(None, method, [         ])    )
                        | Lambda(a,                                    Call(None, method, [_        ])    )-> mname method, "should be 1"
                        | Lambda(a,Lambda(b,                           Call(None, method, [p;q      ]))   )-> mname method, "should be 2"
                        | Lambda(a,Lambda(b,Lambda(c,                  Call(None, method, [p;q;r    ])))  )-> mname method, "should be 3"
                        | Lambda(a,Lambda(b,Lambda(c,Lambda(d,         Call(None, method, [p;q;r;s  ])))) )-> mname method, "should be 4"
                        | Lambda(a,Lambda(b,Lambda(c,Lambda(d,Lambda(e,Call(None, method, [p;q;r;s;t]))))))-> mname method, "should be 5"
                        | q -> 
                            shouldBe 0 q 
                            |> Option.map(fun (nm,l) -> nm, sprintf "Not covered %d parms: %A" l q) 
                            |> Option.defaultWith(fun () -> "?", sprintf "Not covered: %A" q)
                        |> fun (nm, m) -> failwithf " %s : %s" nm m
                
                    let getName0(q:Quotations.Expr<                    'T>) : string *                      'T = 
                        match q with
                        | PropertyGet(o,                                          prop  , [         ]     )-> pname prop  ,                  prop.GetValue(null, [|         |]) |> unbox 
                        |_-> shouldBe q
                    let getName1(q:Quotations.Expr<'a                ->'T>) : string * ('a                ->'T) = 
                        match q with
                        | Lambda(a,                                    Call(None, method, [         ])    )-> mname method, fun a         -> method.Invoke(null, [|         |]) |> unbox 
                        | Lambda(a,                                    Call(None, method, [p        ])    )-> mname method, fun a         -> method.Invoke(null, [|a        |]) |> unbox 
                        |_-> shouldBe q
                    let getName2(q:Quotations.Expr<'a->'b            ->'T>) : string * ('a->'b            ->'T) = 
                        match q with
                        | Lambda(a,Lambda(b,                           Call(None, method, [p;q      ]))   )-> mname method, fun a b       -> method.Invoke(null, [|a;b      |]) |> unbox
                        |_-> shouldBe q
                    let getName3(q:Quotations.Expr<'a->'b->'c        ->'T>) : string * ('a->'b->'c        ->'T) = 
                        match q with
                        | Lambda(a,Lambda(b,Lambda(c,                  Call(None, method, [p;q;r    ])))  )-> mname method, fun a b c     -> method.Invoke(null, [|a;b;c    |]) |> unbox
                        |_-> shouldBe q
                    let getName4(q:Quotations.Expr<'a->'b->'c->'d    ->'T>) : string * ('a->'b->'c->'d    ->'T) = 
                        match q with
                        | Lambda(a,Lambda(b,Lambda(c,Lambda(d,         Call(None, method, [p;q;r;s  ])))) )-> mname method, fun a b c d   -> method.Invoke(null, [|a;b;c;d  |]) |> unbox
                        |_-> shouldBe q
                    let getName5(q:Quotations.Expr<'a->'b->'c->'d->'e->'T>) : string * ('a->'b->'c->'d->'e->'T) = 
                        match q with
                        | Lambda(a,Lambda(b,Lambda(c,Lambda(d,Lambda(e,Call(None, method, [p;q;r;s;t]))))))-> mname method, fun a b c d e -> method.Invoke(null, [|a;b;c;d;e|]) |> unbox
                        |_-> shouldBe q
                
                    let depend0   q                                                                      = let (nm, f) = getName0 q in dependByName nm f id
                    let depend1   q                                                                      = let (nm, f) = getName1 q in dependByName nm f id
                    let depend2   q                                                                      = let (nm, f) = getName2 q in dependByName nm f id
                    let depend3   q                                                                      = let (nm, f) = getName3 q in dependByName nm f id
                    let depend4   q                                                                      = let (nm, f) = getName4 q in dependByName nm f id
                    let depend5   q                                                                      = let (nm, f) = getName5 q in dependByName nm f id
                    let replace0 (q:Quotations.Expr<                    'T>) (fr:                    'T) = let (nm, _) = getName0 q in nm, box fr
                    let replace1 (q:Quotations.Expr<'a->                'T>) (fr:'a->                'T) = let (nm, _) = getName1 q in nm, box fr
                    let replace2 (q:Quotations.Expr<'a->'b->            'T>) (fr:'a->'b->            'T) = let (nm, _) = getName2 q in nm, box fr
                    let replace3 (q:Quotations.Expr<'a->'b->'c->        'T>) (fr:'a->'b->'c->        'T) = let (nm, _) = getName3 q in nm, box fr
                    let replace4 (q:Quotations.Expr<'a->'b->'c->'d->    'T>) (fr:'a->'b->'c->'d->    'T) = let (nm, _) = getName4 q in nm, box fr
                    let replace5 (q:Quotations.Expr<'a->'b->'c->'d->'e->'T>) (fr:'a->'b->'c->'d->'e->'T) = let (nm, _) = getName5 q in nm, box fr
                    #endif
                
                    let bind (f: 'a -> Depend<'b>) (pa:Depend<'a>) : Depend<'b> = 
                        let rec bindR =
                            function
                            | Dependency(dep, k) -> Dependency(dep , fun p -> bindR (k p) ) 
                            | NoMore     v       -> Dependency(None, fun p -> f v         )
                        bindR pa
                    let rtn = NoMore
                    let map f = bind (f >> rtn)
                    let inline apply fR vR = fR |> bind (swap map  vR)
                
                    let replacer lst depend =
                        let rec replace =
                            function
                            | Dependency(None       , k)      -> Dependency(None        , k >> replace)
                            | Dependency(Some(nm, v), k)      ->
                                lst 
                                |> Seq.tryFind (fst >> ((=) nm))
                                |> Option.map  (snd >> fun v2 -> Dependency(Some(nm, v2), k >> replace) )
                                |> Option.defaultWith(fun ()  -> Dependency(Some(nm, v ), k >> replace) )
                            | NoMore v                        -> NoMore              v
                        replace depend
                
                    let replacerDef lst depend =
                        let rec replace =
                            function
                            | Dependency(None       , k)          -> Dependency(None         , k >> replace)
                            | Dependency(Some(nm, v), k)          ->
                                lst 
                                |> Seq.tryFind (fun (_, (nm2, _)) -> nm2 = nm)
                                |> Option.map  (fun (nmN,(_, v2)) -> Dependency(Some(nmN, v2), k >> replace) )
                                |> Option.defaultWith(fun ()      -> Dependency(Some(nm , v ), k >> replace) )
                            | NoMore v                            -> NoMore               v
                        replace depend
                
                    let resolver lst depend = 
                        let rec resolve =
                            function
                            | Dependency(None       , k)      -> k () |> resolve
                            | Dependency(Some(nm, v), k)      ->
                                lst 
                                |> Seq.tryFind (fst >> ((=) nm))
                                |> Option.map  (snd >> fun v2 -> k v2  )
                                |> Option.defaultWith(fun ()  -> k v )
                                |> resolve
                            | NoMore v                        ->   v
                        resolve depend
                
                    type DependBuilder() =
                        member __.Bind   (m, f) = bind f m
                        member __.Return     v  = rtn v
                        member __.Delay      f  = f ()
                
                    let depend = DependBuilder()
                
                    let getDependencies dep =
                        let rec collect lst dep =
                            let     lst2 = dep :: lst
                            match dep with
                            | Dependency(None      , k) -> collect lst2 (k () )
                            | Dependency(Some(_, v), k) -> collect lst2 (k v  )
                            | NoMore f                  -> lst2
                        collect [] dep
                        |> List.filter (function| Depend.Dependency(None,_) -> false |_-> true) 
                        |> List.rev 
                
                    let toString dep =
                        getDependencies dep
                        |> Seq.map       
                            (function 
                            | Depend.Dependency(Some(nm, v), next) -> sprintf "%-50s %A" nm v
                            | x -> string x)
                        |> Seq.distinct
                        |> Seq.sort
                        |> String.concat "\n"
                
                    module Operators =
                        let rtn        = rtn
                        let depend     = depend
                        let (>>=) ma  f = bind f ma
                        let (|>>) ma  f = map  f ma
                        let (|*>) p  mf = apply mf (rtn p)
                        let (>=*) mp mf = apply mf     mp
                        let (<*>) mf mp = apply mf     mp
                        let (>*>)  g mf = depend {
                            let! f = mf
                            return g >> f
                        }
                
                
            type System.String with
                member this.Substring2(from, n) = 
                    if   n    <= 0           then ""
                    elif from >= this.Length then ""
                    elif from <  0           then this.Substring2(0, n + from)
                    else this.Substring(from, min n (this.Length - from))
                member this.Left             n  = if n < 0 
                                                  then this.Substring2(0, this.Length + n)
                                                  else this.Substring2(0, n              )
                member this.Right            n  = this.Substring2(max 0 (this.Length - n), this.Length)
                member this.toUnderscore        = this |> Seq.mapi(fun i c -> if i > 0 && System.Char.IsUpper(c) then [ '_' ; c ] else [ c ])  |> Seq.collect id |> Seq.toArray |> System.String
            
            module String =
                let splitByChar (c: char) (s: string) = s.Split c
                let splitInTwoO spl txt = 
                    let i = (txt:string).IndexOf (spl:string)
                    if  i = -1 then None else
                    (txt.Left(i), txt.Substring (i + spl.Length) )
                    |> Some
                let delimitedO  op cl txt =
                    splitInTwoO op txt
                    |> Option.bind(fun (bef, sec) ->
                        splitInTwoO cl sec
                        |> Option.map(fun (mid, aft) -> bef, mid, aft)
                    )
                let contains     sub  (whole: string) = whole.Contains sub
                let trim                  (s: string) = s.Trim()
                let left  n (s:string) = s.Left  n
                let right n (s:string) = s.Right n
                let append     (a: string)(b: string) =  a + b
                let skipFirstLine (txt:string) = txt.IndexOf '\n' |> fun i -> if i < 0 then "" else txt.[i + 1..]
                let unindent (s:string) =
                    let lines = s.Split '\n'
                    let n     = lines 
                                |> Seq.tryFind (fun l -> l.Trim() <> "")
                                |> Option.defaultValue ""
                                |> Seq.tryFindIndex ((<>) ' ') 
                                |> Option.defaultValue 0
                    lines 
                    |> Seq.map    (fun l -> if l.Length <= n then "" else l.Substring n)
                    |> Seq.filter (fun s -> s.StartsWith "# 1 " |> not)
                let indent n (s:string) =
                    s.Split '\n'
                    |> Seq.map ((+) (String.replicate n " "))
                let unindentStr = unindent >> String.concat "\n"
                let indentStr i = indent i >> String.concat "\n" 
                let skipLastLine =
                       splitByChar '\n' 
                    >> fun s -> s.[0 .. (max 0 (s.Length - 2)) ]
                    >> String.concat "\n"
                let (|StartsWith|_|) (start:string) (s:string) = if s.StartsWith start then Some s.[start.Length..                          ] else None
                let (|EndsWith  |_|) (ends :string) (s:string) = if s.EndsWith   ends  then Some s.[0           ..s.Length - ends.Length - 1] else None
                
                let thousands n =
                    let v = n.ToString()
                    let r = v.Length % 3 
                    let s = if r = 0 then 3 else r
                    [   yield v.[0.. s - 1]
                        for i in 0..(v.Length - s)/ 3 - 1 do
                            yield v.[i * 3 + s .. i * 3 + s + 2]
                    ] |> String.concat ","
            
            module ParseO =
                let tryParseWith tryParseFunc = tryParseFunc >> function
                        | true, v    -> Some v
                        | false, _   -> None
            
            
                /// Javascript adds time zone information when parsing a date and that can change the result
                let parseDateO2  = (fun s -> s + "T00:00:00") >> tryParseWith System.DateTime.TryParse
                let parseDateO   = tryParseWith System.DateTime.TryParse
                let parseIntO    = tryParseWith System.Int32   .TryParse
                let parseInt64O  = tryParseWith System.Int64   .TryParse
                let parseSingleO = tryParseWith System.Single  .TryParse
                let parseDoubleO = tryParseWith System.Double  .TryParse
                let parseGuidO   = tryParseWith System.Guid    .TryParse
                // etc.
                
                // active patterns for try-parsing strings
                let (|Date  |_|) = parseDateO
                let (|Int   |_|) = parseIntO
                let (|Int64 |_|) = parseInt64O
                let (|Single|_|) = parseSingleO
                let (|Double|_|) = parseDoubleO
                let (|Guid  |_|) = parseGuidO
                
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER 
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
            module View =
                let insertWO = 
                    function
                    | Some v -> View.Map Some v
                    | None   -> View.Const None
                    
                let [<Inline>] inline consistent   (vl:View<_>)  = 
                    let prior      = ref <| Var.Create Unchecked.defaultof<_>
                    let setPrior v = if (!prior).Value <> v then (!prior).Set v 
                    View.Sink setPrior vl
                    !prior |> View.FromVar
            
                let bind = View.Bind
                let map  = View.Map
                let rtn  = View.Const
            
                let (>>=)                              v f = bind f v
                let        traverseSeq     f            sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                             Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                let inline sequenceSeq                  sq = traverseSeq id sq
            
                let (<*>)                        =  View.Apply
                let       traverseListApp f list =  let cons head tail = head :: tail
                                                    let folder head tail = rtn cons <*> f head <*> tail
                                                    List.foldBack folder list (rtn [])
                let inline sequenceListApp  list =  traverseListApp id list
            
            module Var =
                let mutable private counter = 1
                let freshId () =
                    counter <- counter + 1
                    "varuid" + string counter
                        
                let lensView get update view0 (var: Var<_>) =
                    let id   = freshId()
                    let view = View.Map2 (fun v _ -> get v) var.View view0
                    { new Var<'V>() with
                        member this.Get        () = get (var.Get())
                        member this.Set         v = var.Update(fun t -> update t v)
                        member this.SetFinal    v = this.Set(v)
                        member this.Update      f = var.Update(fun t -> update t (f (get t)))
                        member this.UpdateMaybe f = var.UpdateMaybe(fun t -> Option.map (fun x -> update t x) (f (get t)))
                        member this.View          = view
                        member this.Id            = id
                    }
            
            module ListModel =
                let lensInto' (m:ListModel<_,_>) (get: 'T       -> 'V) (update: 'T -> 'V -> 'T) (key : 'Key) (view: View<'V>) : Var<'V> =
                    let id = Var.freshId()
                    { new Var<'V>() with
                        member r.Get         () = m.FindByKey key |> get
                        member r.Set         v  = m.UpdateBy (fun i -> v          |>             update i |> Some) key
                        member r.Update      f  = m.UpdateBy (fun i -> get i |> f |>             update i |> Some) key
                        member r.UpdateMaybe f  = m.UpdateBy (fun i -> get i |> f |> Option.map (update i)       ) key
                        member r.SetFinal    v  = r.Set v
                        member r.View           = view
                        member r.Id             = id
                    }
                let lensIntoO'(m: ListModel<_,_>) (get: 'T option -> 'V) (update: 'T -> 'V -> 'T) (key : 'Key) (view: View<'V>) : Var<'V> =
                    let id = Var.freshId()
                    { new Var<'V>() with
                        member r.Get         () = m.TryFindByKey key |> get
                        member r.Set         v  = m.UpdateBy (fun i -> v                  |>             update i |> Some) key
                        member r.Update      f  = m.UpdateBy (fun i -> Some i |> get |> f |>             update i |> Some) key
                        member r.UpdateMaybe f  = m.UpdateBy (fun i -> Some i |> get |> f |> Option.map (update i)       ) key
                        member r.SetFinal    v  = r.Set v
                        member r.View           = view
                        member r.Id             = id
                    }
                let docLensMapView      mapView (f: 'Key -> Var<'T> -> 'V) (m:ListModel<_,_>) =
                    let get k v = f k (lensInto' m   id                        (fun _ -> id) k v)
                    Doc.BindSeqCachedViewBy m.Key get (View.Map mapView m.View)
                let docLensMapViewO def mapView (f: 'Key -> Var<'T> -> 'V) (m:ListModel<_,_>) =
                    let get k v = f k (lensIntoO' m (Option.defaultValue def)  (fun _ -> id) k v)
                    Doc.BindSeqCachedViewBy m.Key get (View.Map mapView m.View)
                let lensDef def k (m:ListModel<_,_>) =
                    let get = Option.defaultValue def
                    lensIntoO' m get (fun _ -> id) k (m.TryFindByKeyAsView k |> View.Map get)
            
                let currentLensUpd def curr upd (model:ListModel<_,_>) = 
                    curr 
                    |> Var.lensView (Option.bind (model.TryFindByKey) >> Option.defaultValue def) 
                                    (fun kO v -> kO |> Option.iter (upd v) ; kO)
                                    model.View
                let currentLensUpd' def curr upd (model:ListModel<_,_>) = 
                    let view = curr |> View.Map2 (fun _mdl kO -> kO |> Option.bind model.TryFindByKey |> Option.defaultValue def) model.View
                    Var.Make view upd
                let currentLens def curr (model:ListModel<_,_>) = 
                    model 
                    |> currentLensUpd' def curr (fun v -> model.UpdateBy (fun _ -> model.TryFindByKey (model.Key v) |> Option.map (fun _ -> v) ) <| model.Key v)
                
                let refreshLM (lm:ListModel<_,_>) elems =
                    lm.AppendMany elems
                    let keys = elems |> Seq.map lm.Key |> Set
                    lm |> Seq.cache |> Seq.iter(fun e ->
                        if keys |> Set.contains (lm.Key e) |> not then lm.RemoveByKey (lm.Key e)
                    )
            
                let MapLens predO (f: 'Key -> Var<'T> -> 'V) (m:ListModel<_,_>) =
                    let get k v = f k (m.Lens k)
                    match predO with
                    | None       -> m.ViewState |> View.MapSeqCachedViewBy m.Key get 
                    | Some predW ->
                        (m.ViewState, predW) 
                        ||> View.Map2(fun vms pred -> vms.ToArray (System.Predicate pred)) 
                        |> View.MapSeqCachedViewBy m.Key get 
            
            [< Inline """(!$v)""">]
            let isUndefined v = v.GetType() = v.GetType()
                
            
            let (|REGEX|_|) (expr: string) (opt: string) (value: string) =
                if value = null then None else
                match JavaScript.String(value).Match(WebSharper.JavaScript.RegExp(expr, opt)) with
                | null         -> None
                | [| |]        -> None
                | m            -> Some m
            
            let rexGuid = """([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})"""
            
            let rexEmail = """(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*"""
            
            module REGEX =
                let getStartWord (line:string) ch =
                    match line.Substring(0, ch) with
                    | REGEX @"([a-zA-Z_]\w*)$" "g" [| txt |] -> txt
                    | _                                      -> ""          
                
                let getEndWord (line:string) ch =
                    match line.Substring(ch) with
                    | REGEX @"^([a-zA-Z_]\w*)" "g" [| txt |] -> txt
                    | _                                      -> ""          
            
                let (|Identifier|_|) =
                    function
                    | REGEX "^[$a-zA-Z_][0-9a-zA-Z_\.\-$]*$" "" [| id |] -> Some id
                    | _                                                  -> None
            
            [< JavaScript >]
            module Hoverable =
                open WebSharper.UI.Html
            
                [<NoComparison ; NoEquality>]
                type Hoverable         = { hover : Var<bool>        } with
                    static member  New() = { hover = Var.Create false }
                    member inline this.Attributes = [ attr.classDynPred (View.Const "hovering") this.hover.View
                                                      on.mouseEnter (fun _ _ -> this.hover.Value <- true )
                                                      on.mouseLeave (fun _ _ -> this.hover.Value <- false)
                                                    ]   
                    member inline this.Content    (ds: Doc seq) = div this.Attributes ds
                    member inline this.Content    ( e: Elt    ) = e.OnMouseEnter(fun _ _ -> e.AddClass    "hovering") // THIS ONE ADDS ONE EXTRA SPACE
                                                                   .OnMouseLeave(fun _ _ -> e.RemoveClass "hovering") // THAT THIS ONE DOES NOT REMOVE      
                    //member inline this.Content    ( e: Elt    ) = e.WithAttrs this.Attributes
                    static member  Demo  = Hoverable.New().Content(Elt.div [ attr.style "flex-flow: column;" ] [ text "Hover over me!" ])
            
                let hoverable (e:Elt) = Hoverable.New().Content e
                
            [< JavaScript >]
            module ResizeObserver =
                open WebSharper.JavaScript
            
                [< Inline "try { return !!(ResizeObserver) } catch(e) { return false }" >] 
                let implementedResizeObserver() = false
                
                [< Inline "new ResizeObserver($_f)" >]
                let newResizeObserver (_f: unit->unit) = X<_> 
                
                [< Inline "$_ro.observe($_el)" >]
                let RObserve _ro (_el:Dom.Element) = X<_> 
                
                let mutable observers : obj list = []
                
                let domRect2Tuple (r:Dom.DomRect) = (r.Top, r.Left, r.Width, r.Height)
                
                let [< Inline "$_el.isConnected" >] isValidElement (_el:Dom.Element) = true
                
                let dimsChanged (el:Dom.Element) = 
                    let dims = ref <| el.GetBoundingClientRect()
                    fun () ->
                        let ndims = el.GetBoundingClientRect()
                        if domRect2Tuple !dims = domRect2Tuple ndims then false
                        else dims := ndims    ; true
                
                let addResizeObserver f el =
                    if implementedResizeObserver() then
                        let ro =  newResizeObserver f
                        observers <- ro::observers
                        RObserve ro el
                    else
                        let changed = dimsChanged el
                        async {
                            while isValidElement el do
                                do! Async.Sleep 110
                                if changed() then f()
                        } |> Async.Start
                        
            [< JavaScriptExport >]
            module WebComponent =
                open WebSharper.JavaScript
            
                [< Inline """return Reflect.construct($global.HTMLElement, [], this.__proto__.constructor);""" >]
                let ReflectConstruct () = X<_>
                
                [< Inline """console.log('defineWebComponent: ' + $_nm);
                            Object.setPrototypeOf($_c.prototype, $global.HTMLElement.prototype);
                            Object.setPrototypeOf($_c, $global.HTMLElement);
                            Object.setPrototypeOf($_o.prototype, $_c.prototype);
                            $global.customElements.define($_nm, $_o)""" >]
                let defineWebComponent_ _nm _o _c = X<_>
            
                let defineWebComponent _nm _o _c = 
                    try defineWebComponent_ _nm _o _c
                    with _ -> printfn "Failed to define WebComponent. Not supported."
            
                module WcTabStrip =
                    open WebSharper.UI.Html
                    //open TabStrip
                    open Hoverable
                
                    let css = @"
                .tab-panel {
                 overflow  : hidden   ;
                 display   : flex     ;
                 flex-flow : column   ;
                 background: lightgray;
                 height    : 100%    ;
                 width     : 100%    ;
                }
                .tab-content {
                 flex      : 1 1     ;
                 overflow  : auto    ;
                 position  : relative;
                }
                .tab-children {
                 height    : 100%    ;
                 width     : 100%    ;
                 position  : absolute;
                 display   : grid    ;
                }
                .tab-strip {
                 padding   : 0pt     ;
                 flex      : 0 0     ;
                }
                .tab {
                 border     : 0.2pt solid transparent;
                 padding    : 0pt 4pt;
                 display    : inline-block;
                 font-family: sans-serif;
                 font-weight: 200;
                 font-size  : small;
                 color      : #666;
                 cursor     : pointer;
                }
                .top>.tab {
                 border-radius: 2pt 2pt 0pt 0pt;
                 border-bottom-width: 0pt;
                 vertical-align: bottom;
                }
                .bottom>.tab {
                 border-top-width: 0pt;
                 border-radius: 0pt 0pt 2pt 2pt;
                 vertical-align: top;
                }
                .horizontal>.tab:not(:first-child) {
                 border-left-width: 0pt;
                }
                .tab.hovering {
                 background: red;
                }
                .tab.selected {
                 background: white;
                 border-left-width: 0.2pt;
                 color: black;
                 font-weight: 500;
                 border-color: black;
                }
                .horizontal>.tab.selected {
                 border-left-width: 0.2pt;
                }
                ::slotted(*              ) { 
                 width : 100%;
                 height: 100%;
                }
                        "
                
                    let tabStrip (selected:Var<int>) top horizontal tabs content =
                        let strip =
                            div [ attr.``class`` <| sprintf "tab-strip %s %s"
                                                        (if top        then "top"        else "bottom"  ) 
                                                        (if horizontal then "horizontal" else "vertical")
                                ]
                                [ for i, (txt, _) in  tabs |> Seq.indexed  do
                                      yield Hoverable.New().Content (
                                          Elt.div [ attr.classDyn <| View.Map (fun sel -> "tab" + (if sel = i + 1 then " selected" else "")) selected.View
                                                    attr.draggable "true"
                                                    on.click   (fun _  _  -> selected.Value <- i + 1 ) 
                                                  ]
                                                  [ text txt ]) :> Doc
                                ] 
                        div [ attr.``class`` "tab-panel" 
                                //on.dragOver(fun _  ev -> ev.PreventDefault()                                      )
                                //on.drop    (fun _e ev -> ev.PreventDefault() ; this.reorder this.tabs.Value.Length)
                            ]
                            [   if     top then yield strip
                                yield div [ attr.``class`` "tab-content" ] [ content ]
                                if not top then yield strip
                                yield Elt.Element "style" [] [ text css ] :> Doc
                                yield Elt.Element "style" [] 
                                        [ Doc.TextView <| View.Map (sprintf """
                                              ::slotted(*              ) { display: none }
                                              ::slotted(*:nth-child(%d)) { display: grid }
                                           """) selected.View 
                                        ] 
                                    :> Doc
                            ]
                
                    type WcTabStripT () =
                        let mutable added = false
                        let selected = Var.Create 1
                        do printfn "WcTabStripT initializer"
                        #if DLL 
                        [< Inline """$global.FsRootDll.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New""" >] static member NewPointer = X<_>
                        #else
                        [< Inline """$global.FsRoot   .LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New""" >] static member NewPointer = X<_>
                        #endif
                        static member Constructor() = 
                            let this = ReflectConstruct()
                            WcTabStripT.NewPointer?call this
                            this
                        member this.connectedCallback() = 
                            //printfn "my-el connected %A %A" added this?outerHTML
                            if not added then
                                let el : Dom.Element = this |> box |> unbox
                                let shadowRoot       = el.AttachShadow (Dom.ShadowRootInit Dom.ShadowRootMode.Open)
                                let elsh = JS.Document.CreateElement "div"
                                shadowRoot.AppendChild elsh |> ignore
                                let addTab () =
                                    //printfn "my-el modified %A %A" added this?outerHTML
                                    let top  = el.HasAttribute "bottom" |> not
                                    let tabs = [ for i in 1..el.ChildNodes.Length do 
                                                    let node = el.ChildNodes.[i - 1]
                                                    if node.NodeType = Dom.NodeType.Element then
                                                        let elem = node :?> Dom.Element
                                                        let tabName = if elem.HasAttribute "tabname" then elem.GetAttribute "tabname" else sprintf "Tab %d" i
                                                        yield (tabName, elem)
                                                ]
                                    while elsh.ChildNodes.Length > 0 do
                                        elsh.RemoveChild elsh.LastChild |> ignore
                                    Elt.Element "slot" [] []
                                    |> tabStrip selected top true tabs
                                    |> Doc.Run elsh
                                addTab()
                                el.AddEventListener("DOMSubtreeModified", delayed 50 addTab)
                                added <- true
                    let init =
                        lazy
                            let x = WcTabStripT().connectedCallback
                            if IsClient then defineWebComponent "wcomp-tabstrip" WcTabStripT.Constructor WcTabStripT.NewPointer
                    
                module WcSplitter =    
                    open ResizeObserver
                    
                    type Layout = View<string> -> (Dom.Element -> unit) -> (Dom.Element -> unit) -> (Dom.MouseEvent -> unit) -> View<string> -> Doc
                    
                    let mutable layoutHorizontal : Layout = fun partSizes afterRender afterRenderSp mouseDown gap -> Doc.Empty
                    let mutable layoutVertical   : Layout = fun partSizes afterRender afterRenderSp mouseDown gap -> Doc.Empty
                    
                    type WcSplitterT () =
                        let mutable added = false
                        do printfn "WcSplitterT initializer"
                        #if DLL 
                        [< Inline """$global.FsRootDll.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New""" >] static member NewPointer = X<_>
                        #else
                        [< Inline """$global.FsRoot   .LibraryJS.WebComponent.WcSplitter.WcSplitterT.New""" >] static member NewPointer = X<_>
                        #endif
                        static member Constructor() = 
                            let this = ReflectConstruct()
                            WcSplitterT.NewPointer?call this
                            this
                        member this.connectedCallback() = 
                            //printfn "my-el connected %A %A" added this?outerHTML
                            if not added then
                                let el : Dom.Element = this |> box |> unbox
                                let shadowRoot  = el.AttachShadow (Dom.ShadowRootInit Dom.ShadowRootMode.Open)
                                let elsh        = JS.Document.CreateElement "div"
                                let minV        = if el.HasAttribute "min"      then el.GetAttribute "min"   |> JS.ParseFloat else  4.0
                                let maxV        = if el.HasAttribute "max"      then el.GetAttribute "max"   |> JS.ParseFloat else 96.0
                                let value       =(if el.HasAttribute "value"    then el.GetAttribute "value" |> JS.ParseFloat else 50.0)|> Var.Create
                                let first       =    el.HasAttribute "second"   |> not
                                let vertical    =    el.HasAttribute "vertical"
                                let size        = ref        (0.0, 0.0)
                                let padding     = ref         0.0
                                let gap         = Var.Create  0.0
                                let sizeCalc (sh:Dom.Element) : float * float =
                                    let p1, p2, gp = if vertical then "padding-left", "padding-right" , "grid-column-gap"
                                                                 else "padding-top" , "padding-bottom", "grid-row-gap" 
                                    let pt   = JQuery.JQuery(sh.ParentElement.ParentElement).Css p1 |> (+) "0" |> JS.ParseFloat
                                    let pb   = JQuery.JQuery(sh.ParentElement.ParentElement).Css p2 |> (+) "0" |> JS.ParseFloat
                                    gap.Set   (JQuery.JQuery(sh.ParentElement.ParentElement).Css gp |> (+) "0" |> JS.ParseFloat)
                                    padding := pt + pb
                                    el.GetBoundingClientRect() 
                                    |> fun r -> 
                                         match vertical, first with
                                         | true , true  ->  r.Width , r.Height 
                                         | true , false -> -r.Width , r.Height
                                         | false, true  ->  r.Height, r.Width
                                         | false, false -> -r.Height, r.Width
                                let dragging : bool               ref = ref false   
                                let startP   : float              ref = ref 0.0
                                let start    : float              ref = ref 0.0
                                let domElem  : Dom.Element option ref = ref None                 
                                let mouseCoord (ev: Dom.MouseEvent) = if vertical then float ev.ClientX else float ev.ClientY
                                let drag       (ev: Dom.Event     ) =
                                    ev :?> Dom.MouseEvent
                                    |> mouseCoord
                                    |> fun m   -> (m - !start) * 100.0 / (fst !size) + !startP
                                    |> fun v   -> value.Value <- min maxV (max minV v)
                                   
                                let rec finishDragging (_: Dom.Event) =
                                    if !dragging then
                                        dragging := false
                                        JS.Window.RemoveEventListener("mousemove", drag          , false) 
                                        JS.Window.RemoveEventListener("mouseup"  , finishDragging, false)
                                let startDragging (ev: Dom.MouseEvent) =
                                    if not !dragging then
                                        dragging := true
                                        startP   := value.Value
                                        start    := mouseCoord ev
                                        size     := !domElem |> Option.map sizeCalc |> Option.defaultValue (100.0, 500.0)
                                        JS.Window.AddEventListener("mousemove", drag          , false) 
                                        JS.Window.AddEventListener("mouseup"  , finishDragging, false) 
                                        ev.PreventDefault()
                                    //div [
                                    //    SomeAttr  <| on.mouseDown startDragging
                                    //    SomeAttr  <| on.afterRender (fun el -> domElem := Some el; size := sizeCalc vertical el ; value.Set value.Value)
                                    //    style     <| styleSplitter !gap
                                    //    style        "z-index: 10; background-color: #eef"
                                    //]
                                let partSizes sz gap pad spl = (sz - gap - pad) *          spl  / 100.0          
                                                             , (sz - gap - pad) * (100.0 - spl) / 100.0
                                let styleSections (p1:float, p2:float) = sprintf " %.2fpx %.2fpx ; %s : %.2fpx; " p1 p2 (if vertical then "height" else "width") (snd !size)
                                let styleSizes           spl = partSizes (fst !size) gap.Value !padding spl |> styleSections
                                //div [ 
                                //    style <| sprintf "display: grid; grid-template-areas: 'one' 'two' ; %s" styleRest
                                //    style <| Val.map styleSizes value
                                //    slot [                   div [ style "background-color: red ; grid-area: one" ] ]
                                //    slot [ name "part2"    ; div [ style "background-color: blue; grid-area: two" ] ]
                                //    slot [ name "splitter" ; splitter                                               ]
                                //]
                                let recalc() = !domElem |> Option.iter (fun sh -> size := sizeCalc sh); value.Set value.Value
                                //addResizeObserver recalc el
                                (if vertical then layoutVertical else layoutHorizontal)
                                    <| View.Map styleSizes value.View
                                    <| fun (sh:Dom.Element) -> addResizeObserver recalc el ; recalc()
                                    <| fun  sp              -> domElem :=          Some sp ; recalc()
                                    <| fun  me              -> startDragging me
                                    <| View.Map (sprintf "%Apx") gap.View
                                |> Doc.Run elsh
                                shadowRoot.AppendChild elsh.FirstChild |> ignore
                                added <- true
                    let init layoutH layoutV =
                        let x = WcSplitterT().connectedCallback
                        layoutHorizontal <- layoutH
                        layoutVertical   <- layoutV
                        if IsClient then defineWebComponent "wcomp-splitter" WcSplitterT.Constructor WcSplitterT.NewPointer
                    
            module AppFrameworkTemplate =
                let html = """
            <div style="display:none" >
                <div links>
                    <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" rel="stylesheet">
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"   type="text/javascript"></script>
                </div>
                <div ws-template="AppFramework" style="height: calc(100vh - 4px); width: calc(100vw - 4px) " class="relative" >
                    <div ws-hole="MainClient"></div>
                    <div class="AppFrameworkGo"><button ws-onclick="GoClient">${MainDoc}</button></div>
                </div>
                <div ws-template="VSplitter1" class="versplitter" ws-attr="Attrs" vertical>
                    <div style="min-width :Calc((100% - ${gap}) *        ${perc}  / 100);max-width :Calc((100% - ${gap}) *        ${perc}  / 100)">${doc1}</div>
                    <div style="min-width :             ${gap}" ws-onmousedown="MouseDown" ></div>
                    <div style="min-width :Calc((100% - ${gap}) * (100 - ${perc}) / 100);max-width :Calc((100% - ${gap}) * (100 - ${perc}) / 100)">${doc2}</div>
                </div>
                <div ws-template="HSplitter1" class="horsplitter" ws-attr="Attrs">
                    <div style="min-height:Calc((100% - ${gap}) *        ${perc}  / 100);max-height:Calc((100% - ${gap}) *        ${perc}  / 100)">${doc1}</div>
                    <div style="min-height:             ${gap}" ws-onmousedown="MouseDown" ></div>
                    <div style="min-height:Calc((100% - ${gap}) * (100 - ${perc}) / 100);max-height:Calc((100% - ${gap}) * (100 - ${perc}) / 100)">${doc2}</div>
                </div>
                <style>
                    .horsplitter                    { display: flex; flex-direction:column              } 
                    .horsplitter > div:nth-child(2) { background: #eef; cursor: row-resize; z-index:400 }
                    .horsplitter > div              { overflow: hidden                                  }
                    .versplitter                    { display: flex; flex-direction:row                 } 
                    .versplitter > div:nth-child(2) { background: #eef; cursor: col-resize; z-index:400 }
                    .versplitter > div              { overflow: hidden                                  }
                </style>
                <style>
                    .AppFrameworkGo {
                        max-width: 2px;
                        max-height: 2px;
                        z-index: 4000;
                        overflow: hidden;
                        position: fixed;
                        top: 0px;
                        left: 0px;
                    }
                </style>
                <div ws-template="FixedSplitterVer" 
                    style="display: grid; 
                           grid-gap: 0px; 
                           box-sizing: border-box; 
                           height: 100%;
                           width : 100%;
                           grid-template-areas: 'one two'; 
                           grid-template-rows   :100%; 
                           overflow: hidden; 
                           grid-template-columns: ${PartSizes}"  >
                   <div ws-hole="First"  style="grid-area: one; " class="relative" ></div>
                   <div ws-hole="Second" style="grid-area: two; " class="relative" ></div>
                </div>               
                <div ws-template="FixedSplitterHor" 
               style="display: grid; 
                      grid-gap: 0px; 
                      box-sizing: border-box; 
                      height: 100%;
                      width : 100%;
                      grid-template-areas: 'one' 'two'; 
                      grid-template-columns:100%; 
                      overflow: hidden; 
                      grid-template-rows   : ${PartSizes}"  >
              <div ws-hole="First"  style="grid-area: one; " class="relative" ></div>
              <div ws-hole="Second" style="grid-area: two; " class="relative" ></div>
                </div>               
                <div ws-template="WCompSplitterHor" 
                     ws-onafterrender="AfterRender"
                     style="display: grid;
                            grid-gap: 5px; 
                            box-sizing: border-box; 
                            grid-template-areas: 'one' 'two'; 
                            grid-template-columns:100%; 
                            overflow: hidden; 
                            grid-template-rows   : ${PartSizes}" 
                     >
                     <slot></slot>
                    <slot name="splitter">  <div style="grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}" ws-onmousedown="MouseDown" ws-onafterrender="AfterRenderSp" ></div> </slot>
                    <style>
                        ::slotted(*) {
                            display: grid;
                            height : 100%;
                            width  : 100%;
                            overflow: hidden;
                        }
                        ::slotted(*:nth-child(2)) {
                            grid-area: two;
                        }
                        ::slotted(*[slot="splitter"]) {
                            grid-row:2; grid-column:1 / 1 ; 
                            cursor: row-resize; 
                            z-index: 3; 
                            background-color: #eef ; 
                            height: ${Gap}; 
                            margin-top :-${Gap}
                        }
                    </style>
                </div>        
                <div ws-template="WCompSplitterVer" 
                     ws-onafterrender="AfterRender"
                     style="display: grid; 
                            grid-gap: 5px; 
                            box-sizing: border-box; 
                            grid-template-areas: 'one two'; 
                            grid-template-rows   :100%; 
                            overflow: hidden; 
                            grid-template-columns: ${PartSizes}"  >
                    <slot></slot>
                    <slot name="splitter"> <div style="grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}" ws-onmousedown="MouseDown" ws-onafterrender="AfterRenderSp" ></div> </slot>
                    <style>
                        ::slotted(*) {
                            display: grid;
                            height : 100%;
                            width  : 100%;
                            overflow: hidden;
                        }
                        ::slotted(*:nth-child(2)) {
                            grid-area: two;
                        }
                        ::slotted(*[slot="splitter"]) {
                            grid-column:2; grid-row:1 / 1
                            cursor: column-resize; 
                            z-index: 3; 
                            background-color: #eef ; 
                            width: ${Gap}; 
                            margin-left:-${Gap}
                        }
                    </style>
                </div>
                <div ws-template="AppFwkClient" >
                    <ws-FixedSplitterHor>
                        <PartSizes>55px calc(100% - 55px)</PartSizes>
                        <First>
                            <span style="display: grid;
                                  grid-template-columns: 30% 20% 20% 10%;
                                  grid-gap: 25px;
                                ">
                                <div class="mainTitle">AppFramework</div>
                            </span>
                        </First>
                        <Second>
                                <ws-FixedSplitterVer>
                                    <PartSizes>calc(100% - 2px) 2px</PartSizes>
                                    <First>
                                        <wcomp-splitter vertical value="18" max="100">
                                            <div><div ws-hole="PlugIns" style="overflow:auto" >
                                                <div ws-template="Tile">
                                                    <div draggable="true" class="code-editor-list-tile ${Predecessor} ${Selected}" 
                                                    ws-ondrag="Drag"
                                                    ws-ondragover="DragOver"
                                                    ws-ondrop="Drop"
                                                   >
                                                   <span class="node ${Parent} ${ErrorMsg}" title="expand" ws-onclick="ToggleCollapse"></span>
                                                   <div  class="code-editor-list-text" style="text-indent:${Indent}em; white-space: pre" ws-onclick="Select" ws-onafterrender="AfterRender" >${Name}</div>
                                                   <span class="predecessor" title="toggle predecessor" ws-onclick="TogglePred">X</span>
                                               </div>
                                       
                                                </div>
                                            </div></div>
                                            <wcomp-splitter vertical value="80" min="30" max="100">
                                                <ws-FixedSplitterHor>
                                                    <PartSizes>32px calc(100% - 32px)</PartSizes>
                                                    <First>
                                                        <div>
                                                            <div class="input-group">
                                                                <span class="input-group-addon">${PlugInName}</span>
                                                            </div>
                                                        </div>
                                                    </First>
                                                    <Second>
                                                        <div style="overflow:auto; display:flex; flex-direction:column">
                                                            <div>
                                                                <h3>Vars:</h3>
                                                                <table style="overflow:auto;width:100%" class="table table-condensed table-striped">
                                                                    <thead>
                                                                        <th style="width: 10%  ">Name</th>
                                                                        <th style="width: 90% ">Value</th>
                                                                    </thead>
                                                                    <tbody ws-hole="Vars">
                                                                    <tr ws-template="NameValueInput" >
                                                                        <td >${Name}:</td>
                                                                        <td>
                                                                        <textarea placeholder="Value..." ws-var="Value" style="resize:vertical; width:100%" spellcheck="false"></textarea>
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div>
                                                                <h3>Views:</h3>
                                                                <table style="overflow:auto" class="table table-condensed table-striped" >
                                                                    <thead>
                                                                        <th style="width: 10%  ">Name</th>
                                                                        <th style="width: 90% ">Value</th>
                                                                    </thead>
                                                                    <tbody ws-hole="Views" >
                                                                    <tr ws-template="NameValue" class="">
                                                                        <td>${Name}:</td>
                                                                        <td>${Value}</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div>
                                                                <h3>Docs:</h3>
                                                                <div ws-hole="Docs" style="overflow:auto" ></div>
                                                            </div>
                                                            <div>
                                                                <h3>Queries:</h3>
                                                                <table style="overflow:auto" >
                                                                    <tbody ws-hole="Queries" >
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </Second>
                                                </ws-FixedSplitterHor>
                                        <div style="font-size:small; overflow: hidden; display: flex; flex-direction: column;"  class="absolute" ws-hole="Actions" >
                                            <button ws-template="Action" style="font-size:small" ws-onclick="Click" class="btn" type="button" id="" ws-attr="Attrs" >${Name}</button>
                                        </div>
                                            </wcomp-splitter>
                                        </wcomp-splitter>
                                    </First>
                                    <Second>
                                                <wcomp-tabstrip >
                                                    <div tabname="Properties">
                                                        <div>
                                                            <table style="border-spacing:0px">
                                                                <thead>
                                                                    <th style="width: 30%  ">Name</th>
                                                                    <th style="width: 70% ">Value</th>
                                                                </thead>
                                                                <tbody ws-hole="Properties" ws-children-template="Property">
                                                                    <tr ws-onclick="Select" style="margin-bottom: 2px" class="level  ">
                                                                        <td class="level-item">
                                                                            <div>
                                                                                <input ws-var="Name" type="text" class="form-control" id="" placeholder="Property...">
                                                                            </div>
                                                                        </td>
                                                                        <td class="level-item">
                                                                            <div>
                                                                                <textarea ws-var="Value" class="form-control" id="" placeholder="Value..."></textarea>
                                                                            </div>
                                                                        </td>
                                                                        <td class="level-item">
                                                                            <div style=" cursor: pointer " title="remove">
                                                                                <button ws-onclick="Remove" class="delete is-small">x</button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <button ws-onclick="AddProperty" class="add is-small">add ...</button>
                                                        </div>
                                                    </div>
                                                </wcomp-tabstrip>
                                    </Second>
                                </ws-FixedSplitterVer>
                        </Second>
                    </ws-FixedSplitterHor>
                </div>
                <style style="display: none">
                        .Hidden     { display   : none         }
                        table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }
                        td input.form-control { 
                            padding    : 0px; 
                            font-family: monospace;
                            font-size  :   small;
                            margin-top :   0px;
                            margin-left: -2px;
                            width      : 100%
                        }
                        td select {
                            font-size : smaller;
                            max-width : 8ch;
                        }
                        textarea {
                           resize : vertical;
                        }
                        .tab-content {
                            overflow: hidden
                        }
                        .tab-children {
                            position:relative;
                        }
                        .tab-children>div>* {
                            position:absolute;
                            height: 100%;
                            width:  100%;
                            display: grid;
                        }
                        .relative {
                            position:relative;
                        }
                        .relative>* {
                            position:absolute;
                            height: 100%;
                            width:  100%;
                            display: grid;
                        }
                        table.table-striped    tbody tr:nth-child(even) { background: #EEE  }
                        table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }
                        table.table-striped    tbody input              { background: transparent; border: none}
                        table.table-striped    tbody select             { background: transparent; border: none}
                        table.table-nonstriped tbody tr:nth-child(even) { background: inherit }
                        table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }
                        table.table            tbody tr.hover           { border    : solid thin transparent; } 
                        table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } 
                        table.table            tbody th:hover           { background: gray; cursor: pointer }
                        table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; 
                                                                   border-bottom: solid thin blue     ; } 
                        table.table            tbody tr.selected { background   : #b9eeff             ; }
                        table.table            tbody tr.formula.selected { background: #20f7f7             ; }
                        thead { color: gray }
                        h3 { 
                            color: gray;
                            line-height: 1em;
                        }
                        button       { border: solid thin transparent ; border-radius: 3px; }
                        button:hover { border: solid thin blue }
                        .indenter { position  : absolute; 
                                    top:0px; bottom:0px; left:0px; 
                                    background: white; color:white;
                                    border-right: gray thin dotted;
                                    }
                        body {
                            color      : #333;
                            font-size  : small;
                            font-family: monospace;
                            line-height: 1.2;
                        }
                        .mainTitle {  
                            font-size: 48px;
                            font-weight: 500;
                            color: gray;
                            margin-top: -12px;
                        }
                        .CodeMirror {
                            height: 100%;
                        }
                        
                      
                        body { margin: 0px }     
                             
                        div textarea {
                            font-family     : monospace;
                        }
                        .code-editor-list-tile {
                            white-space     : nowrap; 
                            border-style    : solid none none;
                            border-color    : white;
                            border-width    : 1px;
                            background-color: #D8D8D8;
                            display         : flex;
                        }
                        .code-editor-list-text{
                            padding         : 1px 10px 1px 5px;
                            overflow        : hidden;
                            text-overflow   : ellipsis;
                            white-space     : nowrap;
                            flex            : 1;
                        }
                        
                        .code-editor-list-tile span.node.ErrorMsg {
                            background-color: red
                        }
                        .code-editor-list-tile span.node.expanded::before {
                            content: "-"
                        }
                        .code-editor-list-tile span.node.collapsed::before {
                            content: "+"
                        }
                        .code-editor-list-tile.direct-predecessor {
                            font-weight     : bold;
                            color           : blue;
                        }
                        .code-editor-list-tile.indirect-predecessor {
                            color           : blue;
                        }
                        .code-editor-list-tile.included-predecessor {
                            color           : chocolate;
                        }
                        .code-editor-list-tile.selected {
                            background-color: #77F;
                            color           : white;
                        }
                        .code-editor-list-tile.codeSnippet {
                            text-decoration: underline
                        }
                        .code-editor-list-tile:hover {
                            background      : lightgray;
                        }
                        .code-editor-list-tile.selected:hover {
                            background      : blue;
                        }
                        .code-editor-list-tile>.predecessor {
                            font-weight     : bold;
                            border-style    : inset;
                            border-width    : 1px;
                            text-align      : center;
                            color           : transparent;
                        }
                        .code-editor-list-tile.direct-predecessor>.predecessor {
                            color           : blue;
                        }
                        
                        .CodeMirror { height: 100%; }
                        
                        .node {
                            background-color: white; 
                            width           : 2ch; 
                            color           : #A03; 
                            font-weight     : bold; 
                            text-align      : center;
                            font-family     : arial;
                        }
                        .Warning { text-decoration: underline lightblue } 
                        .Error   { text-decoration: underline red       } 
                        
                    </style>
            </div>
            """
            [< JavaScriptExport >]
            module AppFramework =
                open WebSharper.JavaScript
            
                type PlgElemName = PlgElemName of string with member this.Id = match this with PlgElemName v -> v
                type PlugInName  = PlugInName  of string with member this.Id = match this with PlugInName  v -> v
            
                type PlugInVar   = { 
                    varName      : PlgElemName
                    varVar       : Var<string>
                }
            
                type PlugInView  = {
                    viwName      : PlgElemName
                    viwView      : View<string>
                }
            
                type DocFunction =
                | JustDoc of                                                    Doc
                | FunDoc0 of (                                        unit   -> Doc)
                | FunDoc1 of (                                        string -> Doc) * string                                     
                | FunDoc2 of (                              string -> string -> Doc) * string * string                            
                | FunDoc3 of (                    string -> string -> string -> Doc) * string * string * string                   
                | FunDoc4 of (          string -> string -> string -> string -> Doc) * string * string * string * string          
                | FunDoc5 of (string -> string -> string -> string -> string -> Doc) * string * string * string * string * string  
            
                type PlugInDoc = {
                    docName        : PlgElemName
                    docDoc         : Lazy<DocFunction>
                }
            
                type ActFunction =
                | FunAct0 of (                                         unit -> unit)
                | FunAct1 of (                                          obj -> unit) * string
                | FunAct2 of (                                   obj -> obj -> unit) * string * string
            
                type PlugInAction = {
                    actName        : PlgElemName
                    actFunction    : ActFunction
                    actEnabled     : View<bool>
                }
            
                type PlugInQuery = {
                    qryName        : PlgElemName
                    qryFunction    : obj -> obj
                }
            
                type PlugIn = {
                    plgName        : PlugInName
                    plgVars        : ListModel<PlgElemName, PlugInVar   >
                    plgViews       : ListModel<PlgElemName, PlugInView  >
                    plgDocs        : ListModel<PlgElemName, PlugInDoc   >
                    plgActions     : ListModel<PlgElemName, PlugInAction>
                    plgQueries     : ListModel<PlgElemName, PlugInQuery >
                }
             
                let plugIns = ListModel (fun plg -> plg.plgName)
            
                let mainDocV = Var.Create "AppFramework.AppFwkClient"
                //let titleV   = Var.Create "AppFramework.mainDocV"
            
                open WebSharper.UI.Templating
            
                let [< Literal >] TemplateFileName =  @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\website\AppFramework.html"
                //let [< Literal >] TemplateFileName =  @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\FSharpStation\website\Templates.html"
            
                type AppFwkTemplate = Templating.Template<TemplateFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
            
                let defaultPlugIn() = {
                        plgName    = PlugInName ""
                        plgVars    = ListModel (fun (var:PlugInVar   ) -> var.varName)
                        plgViews   = ListModel (fun (viw:PlugInView  ) -> viw.viwName)
                        plgDocs    = ListModel (fun (doc:PlugInDoc   ) -> doc.docName)
                        plgActions = ListModel (fun (act:PlugInAction) -> act.actName)
                        plgQueries = ListModel (fun (qry:PlugInQuery ) -> qry.qryName)
                    }
            
                let splitName (lytNm:PlugInName) : _ -> PlugInName * PlgElemName = String.splitByChar '.' >>  (fun a -> if a.Length = 1 then (lytNm, a.[0].Trim() |> PlgElemName ) else (a.[0].Trim() |> PlugInName, a.[1].Trim() |> PlgElemName) )
            
                let selectionPlugInO = Var.Create <| Some (PlugInName "AppFramework")
                let currentPlugInW   = selectionPlugInO.View |>  View.Bind(function Some k -> plugIns.TryFindByKeyAsView k | None -> View.Const (Some <| defaultPlugIn())) |> View.Map (Option.defaultWith defaultPlugIn)
                let currentPlugInV   = Var.Make currentPlugInW plugIns.Add
            
                let renderPlugIns() = plugIns.DocLens(fun name plug -> 
                    AppFwkTemplate.Tile()
                        .Name(     name.Id                                                   )
                        .Select(   fun _ -> selectionPlugInO.Set <| Some name                )
                        .Selected( if selectionPlugInO.V = Some name then "selected" else "" )
                        .Doc() 
                )
            
                let renderVars() = 
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgVars |> Seq.map (fun v -> plg, v))
                    |> Doc.BindSeqCachedBy (fun (plg, var) -> plg.plgName, var.varName) (fun (plg, var) -> 
                        AppFwkTemplate.NameValueInput()
                            .Name(    var.varName.Id ) 
                            .Value(   var.varVar     )
                            .Doc() 
                    ) 
            
                let renderViews() = 
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgViews |> Seq.map (fun v -> plg, v))
                    |> Doc.BindSeqCachedBy (fun (plg, viw) -> plg.plgName, viw.viwName) (fun (plg, viw) -> 
                        AppFwkTemplate.NameValue()
                            .Name(    viw.viwName.Id )
                            .Value(   viw.viwView    )
                            .Doc() 
                    ) 
            
                let docParms (doc:PlugInDoc) = 
                    match doc.docDoc.Value with
                    | JustDoc _                          -> ""
                    | FunDoc0 __                         -> "()"
                    | FunDoc1(_, p1                    ) -> [ p1                ] |> String.concat ", " |> sprintf "(%s)"
                    | FunDoc2(_, p1 , p2               ) -> [ p1; p2            ] |> String.concat ", " |> sprintf "(%s)"
                    | FunDoc3(_, p1 , p2 , p3          ) -> [ p1; p2; p3        ] |> String.concat ", " |> sprintf "(%s)"
                    | FunDoc4(_, p1 , p2 , p3 , p4     ) -> [ p1; p2; p3; p4    ] |> String.concat ", " |> sprintf "(%s)"
                    | FunDoc5(_, p1 , p2 , p3 , p4 , p5) -> [ p1; p2; p3; p4; p5] |> String.concat ", " |> sprintf "(%s)"
            
                let renderDocs() =
                    currentPlugInW
                    |> View.Bind (fun plg -> plg.plgDocs.View |> View.Map (Seq.map (fun v -> plg, v)) )
                    |> Doc.BindSeqCachedBy (fun (plg, doc) -> plg.plgName, doc.docName) (fun (plg, doc) -> 
                        AppFwkTemplate.Tile()
                            .Name(     doc.docName.Id +  docParms doc)
                            .Select(   fun _ -> currentPlugInW |> View.Get (fun plg ->  mainDocV.Set <| plg.plgName.Id + "." + doc.docName.Id ) )
                            .Doc() 
                    ) 
            
                let callFunction p1 p2 actF =
                    match actF with
                    | FunAct0(f      ) -> f    ()
                    | FunAct1(f, _   ) -> f    p2
                    | FunAct2(f, _, _) -> f p1 p2
            
                let renderActions() = 
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgActions |> Seq.map (fun v -> plg, v))
                    |> Doc.BindSeqCachedBy (fun (plg, act) -> plg.plgName, act.actName) (fun (plg, act) -> 
                        let parms = match act.actFunction with
                                    | FunAct0(_        ) -> ""
                                    | FunAct1(_, p1    ) -> [ p1      ] |> String.concat ", " |> sprintf "(%s)"
                                    | FunAct2(_, p1, p2) -> [ p1 ; p2 ] |> String.concat ", " |> sprintf "(%s)"
                        AppFwkTemplate.Action() 
                            .Name(     act.actName.Id + parms                             )
                            .Click(    fun ev -> act.actFunction |> callFunction () ev )
                            .Attrs(    Attr.DynamicPred "disabled" (V (not act.actEnabled.V)) (View.Const "") )
                            .Doc()            
                    ) 
            
                let renderQueries() = 
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgQueries |> Seq.map (fun v -> plg, v))
                    |> Doc.BindSeqCachedBy (fun (plg, qry) -> plg.plgName, qry.qryName) (fun (plg, qry) -> 
                        AppFwkTemplate.Tile()
                            .Name(     qry.qryName.Id  )
                            .Select(   fun _ -> () |> box |> qry.qryFunction |> unbox |> JS.Alert )
                            .Doc() 
                    ) 
            
                let AppFwkClient = 
                    lazy
                        AppFwkTemplate.AppFwkClient()
                            .PlugIns(     renderPlugIns()           )
                            .PlugInName(  currentPlugInW.V.plgName.Id )
                            .Vars(        renderVars()              )
                            .Views(       renderViews()             ) 
                            .Docs(        renderDocs()              )
                            .Actions(     renderActions()           )
                            .Queries(     renderQueries()           )
                            .Doc()
            
                let getActualDoc doc =
                    match doc.docDoc.Value with
                    | JustDoc jdoc -> jdoc
                    | FunDoc0 fdoc -> fdoc()
                    | _ -> Html.div [] [ Html.text <| sprintf "Doc with parameters not allowed here: %A" doc ]
            
                let getMainClientDoc() =
                    plugIns.View
                    |> View.Map2(fun (mainDoc:string) plgs -> 
                        plgs |> Seq.tryPick(fun plg ->
                            plg.plgDocs 
                            |> Seq.tryFind(fun doc -> plg.plgName.Id = mainDoc || plg.plgName.Id + "." + doc.docName.Id = mainDoc) 
                            |> Option.map getActualDoc
                        )
                        |> Option.defaultValue AppFwkClient.Value
                    ) mainDocV.View
                    |> Doc.EmbedView
            
                let mainDoc() = 
                        AppFwkTemplate.AppFramework()
                            .MainDoc(     mainDocV.View                                     )
                            .GoClient(    fun _ -> mainDocV.Set "AppFramework.AppFwkClient" )
                            .MainClient(  getMainClientDoc()                                )
                            .Doc()
            
                open WebComponent
            
                let horizontal : WcSplitter.Layout = fun partSizes afterRender afterRenderSp mouseDown gap ->
                    AppFwkTemplate.WCompSplitterHor()
                        .PartSizes(    partSizes)
                        .AfterRender(  afterRender)
                        .AfterRenderSp(afterRenderSp)
                        .MouseDown(    fun te -> mouseDown te.Event)
                        .Gap(          gap)
                        .Doc()
                let vertical   : WcSplitter.Layout = fun partSizes afterRender afterRenderSp mouseDown gap ->
                    AppFwkTemplate.WCompSplitterVer()
                        .PartSizes(    partSizes)
                        .AfterRender(  afterRender)
                        .AfterRenderSp(afterRenderSp)
                        .MouseDown(    fun te -> mouseDown te.Event)
                        .Gap(          gap)
                        .Doc()
            
                let newVar  name var = { varName = name ; varVar      = var                                 }
                let newViw  name viw = { viwName = name ; viwView     = viw                                 }
                let newDoc  name doc = { docName = name ; docDoc      = lazy(JustDoc (doc:Lazy<Doc>).Value) }
                let newDoc0 name f   = { docName = name ; docDoc      = lazy(FunDoc0 f                    ) }
                let newQry  name qry = { qryName = name ; qryFunction = qry          }
                let newAct  name fnc = {
                    actName        = name
                    actFunction    = FunAct0 fnc
                    actEnabled     = View.Const true
                }
            
                let newActF name fncF = {
                    actName        = name
                    actFunction    = fncF
                    actEnabled     = View.Const true
                }
                
                let newDocL name docL = { docName = name ; docDoc =      docL }
                let newDocF name docF = { docName = name ; docDoc = lazy docF }
            
                type PlugInBuilder() =
                    member __.Zero() = { defaultPlugIn() with plgName    = PlugInName "Main" }
                    member this.Yield(()) = this.Zero()
                    member __.For(coll:seq<_>, func) =
                        let ie = coll.GetEnumerator()
                        while ie.MoveNext() do
                            func ie.Current
                    [<CustomOperation("plgName"   )>] member __.Name  ( plg:PlugIn, name:string               ) = { plg with plgName    =    PlugInName name }
                    [<CustomOperation("plgVar"    )>] member __.AddVar( plg:PlugIn, name:string, var          ) = plg.plgVars   .Add(newVar  (PlgElemName name)          var            )  ; plg
                    [<CustomOperation("plgDoc"    )>] member __.AddDoc( plg:PlugIn, name:string, doc          ) = plg.plgDocs   .Add(newDoc  (PlgElemName name)          doc            )  ; plg
                    [<CustomOperation("plgDoc0"   )>] member __.AddDoc0(plg:PlugIn, name:string, doc          ) = plg.plgDocs   .Add(newDoc0 (PlgElemName name)          doc            )  ; plg
                    [<CustomOperation("plgDoc1"   )>] member __.AddDoc1(plg:PlugIn, name:string, doc, p1      ) = plg.plgDocs   .Add(newDocF (PlgElemName name) (FunDoc1(doc,p1       )))  ; plg
                    [<CustomOperation("plgDoc2"   )>] member __.AddDoc2(plg:PlugIn, name:string, doc, p1, p2  ) = plg.plgDocs   .Add(newDocF (PlgElemName name) (FunDoc2(doc,p1,p2    )))  ; plg
                    [<CustomOperation("plgDoc3"   )>] member __.AddDoc3(plg:PlugIn, name:string, doc,a,b,c    ) = plg.plgDocs   .Add(newDocF (PlgElemName name) (FunDoc3(doc,a,b,c    )))  ; plg
                    [<CustomOperation("plgDoc4"   )>] member __.AddDoc4(plg:PlugIn, name:string, doc,a,b,c,d  ) = plg.plgDocs   .Add(newDocF (PlgElemName name) (FunDoc4(doc,a,b,c,d  )))  ; plg
                    [<CustomOperation("plgDoc5"   )>] member __.AddDoc5(plg:PlugIn, name:string, doc,a,b,c,d,e) = plg.plgDocs   .Add(newDocF (PlgElemName name) (FunDoc5(doc,a,b,c,d,e)))  ; plg
                    //[<CustomOperation("plgDocDyn" )>] member __.AddDocF(plg:PlugIn, name:string, docF)  = plg.plgDocs   .Add(newDoc name (lazy LayoutEngine.turnToView docF) ) ; plg
                    [<CustomOperation("plgQuery"  )>] member __.AddQry( plg:PlugIn, name:string, qry          ) = plg.plgQueries.Add(newQry  (PlgElemName name) qry) ; plg
                    [<CustomOperation("plgAct"    )>] member __.AddAct( plg:PlugIn, name:string, act          ) = plg.plgActions.Add(newAct  (PlgElemName name) act) ; plg
                    [<CustomOperation("plgAct1"   )>] member __.AddAct1(plg:PlugIn, name:string, act, p1      ) = plg.plgActions.Add(newActF (PlgElemName name) (FunAct1(act,p1   )) ) ; plg
                    [<CustomOperation("plgAct2"   )>] member __.AddAct2(plg:PlugIn, name:string, act, p1, p2  ) = plg.plgActions.Add(newActF (PlgElemName name) (FunAct2(act,p1,p2)) ) ; plg
                    [<CustomOperation("plgActOpt" )>] member __.AddActO(plg:PlugIn, name:string,         actO ) = 
                                                        match actO with 
                                                        | Some act -> plg.plgActions.Add(newAct (PlgElemName name) act)
                                                        | None     -> ()
                                                        plg
                    //[<CustomOperation("mainDoc")>] member __.InsDoc(plg:PlugIn, name:string, doc) = plg.plgDocs.    = [| newDoc (PlgElemName name) doc |] |> Array.append <| plg.plgDocs    }
                    [<CustomOperation("plgView"   )>] member __.AddViw( plg:PlugIn, name:string, viw )  = plg.plgViews.Add(newViw (PlgElemName name) viw) ; plg
                    [<CustomOperation("plgMerge"  )>] member __.Merge ( plg:PlugIn, prefix:string, p2:PlugIn) = 
                                                        plg.plgVars   .AppendMany(p2.plgVars    |> Seq.map (fun v -> { v with varName = PlgElemName (prefix + v.varName.Id) } ) ) 
                                                        plg.plgViews  .AppendMany(p2.plgViews   |> Seq.map (fun w -> { w with viwName = PlgElemName (prefix + w.viwName.Id) } ) ) 
                                                        plg.plgDocs   .AppendMany(p2.plgDocs    |> Seq.map (fun d -> { d with docName = PlgElemName (prefix + d.docName.Id) } ) ) 
                                                        plg.plgActions.AppendMany(p2.plgActions |> Seq.map (fun a -> { a with actName = PlgElemName (prefix + a.actName.Id) } ) ) 
                                                        plg.plgQueries.AppendMany(p2.plgQueries |> Seq.map (fun q -> { q with qryName = PlgElemName (prefix + q.qryName.Id) } ) ) 
                                                        plg
            
                let plugin = PlugInBuilder()
            
            
                let tryGetPlugInW plgName = plugIns.TryFindByKeyAsView plgName
            
                let tryGetVarW plgName varName = tryGetPlugInW plgName |> View.Bind (function Some plg -> plg.plgVars   .TryFindByKeyAsView varName |_-> View.Const None ) //|> View.consistent
                let tryGetViwW plgName viwName = tryGetPlugInW plgName |> View.Bind (function Some plg -> plg.plgViews  .TryFindByKeyAsView viwName |_-> View.Const None ) //|> View.consistent
                let tryGetActW plgName actName = tryGetPlugInW plgName |> View.Bind (function Some plg -> plg.plgActions.TryFindByKeyAsView actName |_-> View.Const None )
                let tryGetQryW plgName qryName = tryGetPlugInW plgName |> View.Bind (function Some plg -> plg.plgQueries.TryFindByKeyAsView qryName |_-> View.Const None )
                let tryGetDocW plgName docName = tryGetPlugInW plgName |> View.Bind (function Some plg -> plg.plgDocs   .TryFindByKeyAsView docName |_-> View.Const None )
                let tryGetVoVW plgName varName = 
                    tryGetVarW plgName varName
                    |> View.Bind(function
                        | Some var -> Some var.varVar |> View.Const
                        | None -> 
                            tryGetViwW plgName varName
                            |> View.Map(function
                            | Some viw -> Var.Make viw.viwView ignore |> Some
                            | None -> None
                    ))
                let tryGetWoWW plgName viwName =
                    tryGetViwW plgName viwName
                    |> View.Bind(function
                        | Some viw -> viw.viwView |> View.Map Some
                        | None -> 
                            tryGetVarW plgName viwName
                            |> View.Bind(function
                            | Some var -> var.varVar.View |> View.Map Some
                            | None -> None |> View.Const
                    ))
            
                let tryGetPlugIn plgName = plugIns.TryFindByKey plgName
            
                let tryGetVar plgName varName = tryGetPlugIn plgName |> Option.bind (fun plg -> plg.plgVars   .TryFindByKey varName)
                let tryGetViw plgName viwName = tryGetPlugIn plgName |> Option.bind (fun plg -> plg.plgViews  .TryFindByKey viwName)
                let tryGetAct plgName actName = tryGetPlugIn plgName |> Option.bind (fun plg -> plg.plgActions.TryFindByKey actName)
                let tryGetQry plgName qryName = tryGetPlugIn plgName |> Option.bind (fun plg -> plg.plgQueries.TryFindByKey qryName)
                let tryGetDoc plgName docName = tryGetPlugIn plgName |> Option.bind (fun plg -> plg.plgDocs   .TryFindByKey docName)
                let tryGetVoV plgName varName = 
                    tryGetVar plgName varName 
                    |> Option.map (fun var -> Some var.varVar)
                    |> Option.defaultWith (fun () -> 
                        tryGetViw plgName varName 
                        |> Option.map (fun viw -> Var.Make viw.viwView ignore)
                    )
                let tryGetWoW plgName viwName = 
                    tryGetViw plgName viwName 
                    |> Option.map (fun viw -> Some viw.viwView)
                    |> Option.defaultWith (fun () -> 
                        tryGetVar plgName viwName 
                        |> Option.map (fun var -> var.varVar.View )
                    )
            
                type TextData = 
                | TDText  of string
                | TDAct   of PlugInAction
            
                let rec getOneTextData lytNm name bef aft =
                    let plg, n = splitName lytNm name
                    tryGetActW plg n
                    |> View.Bind(function
                    | Some act -> TDAct act |> View.Const
                    | None     ->
                    tryGetWoWW plg n
                    |> View.Bind(function
                        | Some txt ->
                            getTextData lytNm aft
                            |> View.Bind (function
                                | TDText  b    -> View.Const <| (TDText  <|     bef + txt + b                             )
                                | TDAct   act  -> View.Const <| (TDText  <| sprintf "Unexpected Action @{%s}" (act.actName.Id) )
                            )
                        | None                 -> View.Const <| (TDText  <| sprintf "%s @{Missing %s}%s" bef name aft     )  
                        )
                    )
            
                and getTextData lytNm (txt:string) =
                    txt
                    |> String.delimitedO "@{" "}"
                    |> Option.map(fun (bef, name, aft) -> getOneTextData lytNm name bef aft )
                    |> Option.defaultWith (fun () -> TDText  txt |> View.Const)
            
                let getAttrs lytNm (attrs: string) = [
                    yield!  attrs
                            |> String.splitByChar ';'
                            |> Seq.map(String.splitByChar '=')
                            |> Seq.choose(
                                function 
                                | [| name ; value |] when name.Trim() <> "" && value.Trim() <> "" ->
                                        value.Trim() 
                                        |> getTextData lytNm
                                        |> Attr.DynamicCustom (fun el -> function
                                            | TDText  v   -> try el.SetAttribute(name.Trim(), v.Trim())                                                                 with e -> printfn "%A" e
                                            | TDAct   act -> try el.AddEventListener(name.Trim(), (fun (ev:Dom.Event) -> act.actFunction |> callFunction el ev), false) with e -> printfn "%A" e
                                        )
                                        |> Some
                                |_      -> None )
                    yield!  attrs
                            |> String.splitByChar ';'
                            |> Seq.map(String.splitByChar ':')
                            |> Seq.choose(
                                function 
                                | [| name ; value |] when name.Trim() <> "" && value.Trim() <> "" -> 
                                        value.Trim() 
                                        |> getTextData lytNm
                                        |> View.Map(function
                                            | TDText  v   -> v.Trim()
                                            | TDAct   act -> sprintf "@{%s}" (act.actName.Id)
                                        )
                                        |> Attr.DynamicStyle (name.Trim())
                                        |> Some
                                |_      -> None )
                ]
            
                type  Fun<'P, 'R> = { f : Val<'P -> 'R> ; p : Val<'P> }
                and   Val<'P    > = VView of View<'P> | VConst of 'P
                    with
                    //[<Inline>] static member ( <* )(vf:Val<'a->'b> , a :    'a ) = VConst a
                    [<Inline>] static member ( <* )(vf:Val<'a->'b> , aV:Var<'a>) = VView  aV.View
            
                type P<'T> = { r:Depend.Depend<'T> }
            
                type PFn<'P, 'R> = P<Fun<'P, 'R>>
                type PVl<'P    > = P<Val<'P    >>
            
                open Depend.Operators
            
                let bindWrap       f  pv       : P<'b> = { r = pv   >>= fun v -> (f v).r }
                let unwrapBindWrap f (pv:P<_>) : P<'b> = { r = pv.r |>> fun v ->  f v    }
            
                let add1 a = a + 1
                let a11V = Var.Create 11
            
                let mainX = VConst add1 <* a11V
            
                let [<Inline>] callF f = 
                    match f with
                    | { f = VConst f  ; p = VConst p  } -> VConst (                       f              p )
                    | { f = VConst f  ; p = VView  pV } -> VView  (View.Apply (View.Const f)             pV)
                    | { f = VView  fV ; p = VView  pV } -> VView  (View.Apply             fV             pV)
                    | { f = VView  fV ; p = VConst p  } -> VView  (View.Apply             fV (View.Const p))
            
            
                let baseView        = mainDocV.View
                let makeAViewDoc  f = baseView |> Doc.BindView(fun _ -> f())
                let makeAViewDocL f = lazy makeAViewDoc f
                let makeAViewDoc0 f = f // fun () -> makeAViewDoc f
            
                let [<Inline>] callDoc f =
                    makeAViewDoc(fun _ -> 
                        match callF f with
                        | VConst d  -> d
                        | VView  dW -> Doc.BindView id dW
                    )
            
                let [<Inline>] callAtt f : Attr =
                    match callF f with
                    | VConst a  -> a
                    | VView  aW -> failwithf "View<Attr> not implemented"
            
                let [<Inline>] ff f p = { f = f       ; p = p }
                let [<Inline>] fc c p = { f = callF c ; p = p }
            
                let [<Inline>] pff pf p = { r = pf.r |>> fun f -> ff f p }
                let [<Inline>] pfc pc p = { r = pc.r |>> fun c -> fc c p }
            
                module Val =
            
                    let map f = function
                    | VConst p  -> VConst (         f p )
                    | VView  pv -> VView  (View.Map f pv)
            
                    let rtn = VConst
                    let apply (fv:Val<'a->'b>) (vv:Val<'a>) : Val<'b> = 
                        match fv, vv with
                        | VConst f  , VConst p  -> VConst (                       f              p )
                        | VConst f  , VView  pV -> VView  (View.Apply (View.Const f)             pV)
                        | VView  fV , VView  pV -> VView  (View.Apply             fV             pV)
                        | VView  fV , VConst p  -> VView  (View.Apply             fV (View.Const p))
            
                    let (<*>)                        =  apply
                    let       traverseListApp f list =  let cons head tail = head :: tail
                                                        let folder head tail = rtn cons <*> f head <*> tail
                                                        List.foldBack folder list (rtn [])
                    let inline sequenceListApp  list =  traverseListApp id list
            
            
                    let toView = function
                    | VConst p  -> View.Const p
                    | VView  pv ->            pv
            
                    let addDoc d (docs:Val<seq<Doc>>) =
                        match docs with
                        | VConst ds  -> VConst (Seq.append ds [ d ] )
                        | VView  dsW -> VConst (seq [ Doc.BindView Doc.Concat dsW ; d ])
            
                    let addAtt a (atts:Val<seq<Attr>>) =
                        match atts with
                        | VConst ats  -> VConst (Seq.append ats [ a ] )
                        | VView  atsW -> failwithf "addAtt for VView not implemented"// VConst (seq [ Doc.BindView Doc.Concat atsW ; a ])
            
                    let textDoc = function
                    | VConst txt  -> Html.text     txt
                    | VView  txtW -> Html.textView txtW
            
                    let textAtt : Val<string> -> Attr = fun _ -> failwithf "textAtt not implemented"
            
                let choiceToString   = function Choice1Of2 v -> v | Choice2Of2 r -> sprintf "@{%A}" r
                let valToStyle atn = function
                | VConst s -> Attr.Style  atn s
                | VView  w -> Attr.DynamicStyle atn w
            
                let valToAttr atn = function
                | VConst s -> Attr.Create  atn s
                | VView  w -> Attr.Dynamic atn w
            
                type AAttr = 
                | AStyle of string * string
                | AAttr  of string * string
                | AAttrX of string * string
                | AEmpty
            
                module Extract0 =
            
                    type TextType =
                    | TSimple    of string
                    | TReference of string
            
                    let getDocFromReference         ref = sprintf "getDocFromReference not implemented: @{%s}"         ref |> Html.text
                    let getTextActViewFromReference ref = sprintf "getTextActViewFromReference not implemented: @{%s}" ref |> Choice1Of2 |> View.Const : View<Choice<string, PlugInAction>>
            
                    let rec getOneTextData(bef, name, aft) =
                        TReference name ::  match aft with
                                            | ""  -> []
                                            | aft -> getTextData aft
                        |> 
                        match bef with
                        | ""  -> id
                        | bef -> fun ls -> TSimple bef :: ls
                    and getTextData (txt:string) =
                        txt
                        |> String.delimitedO "@{" "}"
                        |> Option.map getOneTextData
                        |> Option.defaultWith (fun () -> [ TSimple txt ])
            
                    let getDocFromReferenceD         = Depend.dependByName "getDocFromReference"         getDocFromReference         id
                    let getTextActViewFromReferenceD = Depend.dependByName "getTextActViewFromReference" getTextActViewFromReference id
            
                    let getDocFromTextTypesD = Depend.depend {
                        let! getDoc = getDocFromReferenceD
                        return
                            List.map (function
                                | TSimple    t -> Html.text   t
                                | TReference r -> getDoc r
                            ) 
                            >> Doc.Concat
                    }
            
                    let extractDocD = Depend.depend {
                        let! getDocFromTextTypes = getDocFromTextTypesD
                        return getTextData >> getDocFromTextTypes
                    }
            
                    let getTextValFromSeqD = Depend.depend {
                        let! getTextActView = getTextActViewFromReferenceD
                        return 
                            Val.traverseListApp (function
                                | TSimple    v -> VConst     v
                                | TReference r -> getTextActView r |> View.Map (function Choice1Of2 s -> s | Choice2Of2 _ -> sprintf "@{%s}" r) |> VView
                            )
                            >> Val.apply (VConst (String.concat ""))
                    }
            
                    let getTextValD = getTextData >*> getTextValFromSeqD
            
                    let extractAtsD = Depend.depend {
                        let! getTextVal     = getTextValD
                        let! getTextActView = getTextActViewFromReferenceD
                        return fun txt ->
                            let parseAttr (t:string) =
                                match t.Split ':' with
                                | [| atn ; sty |] -> AStyle(atn, sty)
                                | _ ->
                                match t.Split '=' |> Array.map (fun t -> t.Trim()) with
                                | [| atn; atv |] -> match getTextData atv with
                                                    | [ TReference r ] -> AAttrX(atn, r  )
                                                    |_                 -> AAttr (atn, atv)
                                | [| at       |] -> AAttr(at, "")
                                |_-> AEmpty
                            let splitAttrs (txt:string) =
                                txt.Split ';'
                                |> Seq.map    (fun t -> t.Trim())
                                |> Seq.filter ((<>) "")
                            let addedListeners el : (string * (Dom.Event -> unit)) [] = el?addedListeners |> fun v -> if isUndefined v then [||] else v
                            let setCustomAttr atn (el:Dom.Element) = function
                                | Choice1Of2 s   -> try el.SetAttribute(atn, (s:string).Trim()) with e -> printfn "%A" e
                                | Choice2Of2 act ->
                                    let listener (ev:Dom.Event) = (act:PlugInAction).actFunction |> callFunction el ev
                                    let same, others = addedListeners el |> Array.partition (fst >> (=) atn)
                                    for (_,f) in same do
                                        el.RemoveEventListener(atn, f)
                                    el.AddEventListener(   atn, listener, false)
                                    el?addedListeners <- Array.append others [| atn, listener |]
                            let viewAttr atn = Attr.DynamicCustom (setCustomAttr atn)
                            let constAttr = function
                                | AStyle(n, v) -> getTextVal     v |> valToStyle n
                                | AAttr (n, v) -> getTextVal     v |> valToAttr  n
                                | AAttrX(n, v) -> getTextActView v |> viewAttr   n
                                | AEmpty       -> Attr.Empty
                            let viewAttrs = 
                                Attr.DynamicCustom(fun el sq ->
                                    let styles = sq |> Seq.choose (function AStyle(n,v) -> Some (n + ":" + v) |_-> None)
                                    let atts = [|
                                        if Seq.isEmpty styles |> not then
                                            yield ("style", String.concat ";" styles)
                                        yield! sq
                                            |> Seq.choose (function
                                                | AStyle _     -> None
                                                | AAttr (n, v) -> Some(n, v)
                                                | AAttrX(n, v) -> Some(n, v)
                                                | AEmpty       -> None
                                            )
                                    |]
                                    let attsNow = seq [ for i in [0..el.Attributes.Length-1] -> el.Attributes.[i].Name, el.Attributes.[i].Value ]
                                    let names   = Seq.map fst >> Set
                                    for nm in names attsNow - names atts do 
                                        try el.Attributes.RemoveNamedItem nm |> ignore            with e -> printfn "%A" e
                                    for (n,v) in Set atts - Set attsNow do
                                        try el.SetAttribute(n, v)                                 with e -> printfn "%A" e
                                    for (n,l) in addedListeners el do 
                                        try el.RemoveEventListener(n, (unbox l : System.Action) ) with e -> printfn "%A" e
                                    for (n,v) in sq |> Seq.choose (function AAttrX(n, v) -> Some(n, v) |_-> None) do
                                        getTextActView v |> View.Get (setCustomAttr n el)
                                )
                            let extract (txt:string) =
                                splitAttrs txt
                                |> Seq.toArray
                                |> function
                                    | [| v |] ->    
                                        match getTextVal v with
                                        | VConst v -> parseAttr v |> constAttr
                                        | VView  w -> w |> View.Map (splitAttrs >> Seq.map parseAttr) |> viewAttrs
                                        |> Seq.singleton
                                    | vs -> vs |> Seq.map (parseAttr >> constAttr) 
                            extract txt
                    }
            
                    let extractTextD = Depend.depend {
                        let! getTextVal = getTextValD
                        return getTextVal >> Val.toView 
                    }
            
                let currentPlugInNameDef : PlugInName = PlugInName "NewLYx"
                let currentPlugInNameD                = Depend.dependByName "currentPlugInName" currentPlugInNameDef id
            
                let getDocwD = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    return fun r -> 
                        let pName, oName = splitName currentPlugInName r
                        tryGetDocW pName oName
                        |> Doc.BindView (fun docO -> 
                            docO
                            |> Option.map getActualDoc
                            |> Option.defaultWith (fun () ->
                                tryGetWoWW pName oName
                                |> View.Map (Option.defaultWith (fun () -> sprintf "Reference not found @{%s}" r))
                                |> Doc.TextView
                            )
                        )
                }
            
                let getDocD = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    return fun r -> 
                        let pName, oName = splitName currentPlugInName r
                        tryGetDoc pName oName
                        |> Option.map getActualDoc
                        |> Option.defaultWith (fun () ->
                            tryGetWoW pName oName
                            |> Option.defaultWith (fun () -> sprintf "Reference not found @{%s}" r |> View.Const)
                            |> Doc.TextView
                        )
                }
            
                let getTextActViewD = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    return fun r ->
                        let pName, oName = splitName currentPlugInName r
                        tryGetActW pName oName
                        |> View.Bind(function
                            | Some act -> View.Const <| Choice2Of2 act
                            | None     ->
                            tryGetWoWW pName oName
                            |> View.Map (Option.defaultWith (fun () -> sprintf "Text Reference not found @{%s}" r))
                            |> View.Map Choice1Of2
                        )
                }
            
                let errDoc  txt = Html.div [] [ Html.text txt ]
                let errDocf fmt = Printf.ksprintf errDoc fmt
            
                let run (pin:PlugInName) d =
                    depend {
                        let! getDoc            = getDocwD
                        let! getTextActView    = getTextActViewD
                        let! currentPlugInName = currentPlugInNameD
                        return 
                            d
                            |> Depend.resolver [
                                "getDocFromReference"        , getDoc            :> obj
                                "getTextActViewFromReference", getTextActView    :> obj
                                "currentPlugInName"          , currentPlugInName :> obj
                            ]
                    } |> Depend.resolver [ "currentPlugInName", pin ]
            
                let extractTextD    = Extract0.extractTextD
                let extractDocD     = Extract0.extractDocD
                let extractAtsD     = Extract0.extractAtsD
                let extractAttD     = depend { 
                    let! extractAts = extractAtsD
                    return fun p -> extractAts p |> Attr.Concat 
                }
            
            
                let defPlugInName = PlugInName "AppFramework"
                let runDef d = run defPlugInName d
            
                let getParmRef var =
                    var
                    |> String.delimitedO "@{" "}"
                    |> Option.map (fun (a,b,c) -> b)
                    |> Option.defaultValue var
                    |> splitName defPlugInName
            
                let depWithExtracts f =
                    Depend.depend {
                        let! extractAts  = extractAtsD
                        let! extractDoc  = extractDocD
                        let! extractText = extractTextD
                        return f(extractAts, extractDoc, extractText)
                    } |> runDef
            
                let docWithVar f var =
                    getParmRef var
                    ||> tryGetVoVW
                    |> Doc.BindView (
                        Option.map f
                        >> Option.defaultWith(fun () ->  sprintf "Var not found %s" var |> errDoc )
                    )
            
                let inputFile attrs labelName actName =
                    splitName defPlugInName actName
                    ||> tryGetAct
                    |> Option.map(fun act -> 
                        Html.div (getAttrs defPlugInName attrs) [
                            Html.div              [ attr.``class`` "input-group"       ] [
                                Html.span         [ attr.``class`` "input-group-btn"   ] [ 
                                    Html.label    [ attr.``class`` "btn"               ] [ 
                                        Html.text labelName
                                        Html.input[ attr.``class`` "form-control" 
                                                    attr.``type`` "file" 
                                                    Attr.Style "display" "none" 
                                                    Html.on.click (fun el ev -> el?value <- "")
                                                    Html.on.change(fun el ev -> act.actFunction |> callFunction el ev )
                                                    ] []
                                    ]
                                ]
                                //(if doc <> "" then singleDoc lytNm [ UnQuoted doc ] else Doc.Empty)
                            ]
                        ]
                    ) |> Option.defaultWith(fun () ->  sprintf "Action not found %s" actName |> errDoc )
            
                let inputLabel =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) attrs labelName ->
                        docWithVar (fun var -> 
                            Html.div (extractAts attrs) [
                                Html.div      [ attr.``class`` "input-group"       ] [
                                    Html.span [ attr.``class`` "input-group-addon" ] [ extractDoc labelName ]
                                    Doc.Input [ attr.``class`` "form-control"      ]   var
                                ]
                            ]
                        )
            
                let input =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) attrs ->
                        docWithVar (Doc.Input <| extractAts attrs )
            
                let textArea =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) attrs ->
                        docWithVar (Doc.InputArea <| extractAts attrs)
            
                let htmlDoc =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) html ->
                        extractText html
                        |> Doc.BindView Doc.Verbatim
            
                //let docReference =
                //    let mutable lastRun = Date.Now()
                //    let refresh () =
                //        if Date.Now() - lastRun > 1000 then
                //            mainDocV.Set mainDocV.Value
                //            lastRun <- Date.Now()
                //    depWithExtracts <| fun (extractAts, extractDoc, extractText) docName ->
                //        extractText docName
                //        |> View.Map  (splitName defPlugInName)
                //        |> View.Bind ( __ (||>) tryGetDocW   )
                //        |> Doc.BindView (function
                //            | Some { docDoc = LazyDoc d} -> refresh() ; d.Value
                //            | Some { docDoc = FunDoc0 f} -> refresh() ; f()
                //            | Some d -> errDocf "Doc parameters not resolved: %A" d
                //            | None   -> errDocf "Doc not found: %s" docName
                //        )
            
                let inline (|Lazy|) (l:Lazy<_>) = l.Value
            
                let docReference =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) docName ->
                        extractText docName
                        |> View.Map  (splitName defPlugInName)
                        |> View.Bind ( __ (||>) tryGetDocW   )
                        |> Doc.BindView (function
                            | Some { docDoc = Lazy(JustDoc d)} -> d
                            | Some { docDoc = Lazy(FunDoc0 f)} -> f()
                            | Some d -> errDocf "Doc parameters not resolved: %A" d
                            | None   -> errDocf "Doc not found: %s" docName
                        )
            
                let setVar0 = 
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) (varN:obj, value:obj) ->
                        unbox varN
                        |>  getParmRef
                        ||> tryGetVoV
                        |>  Option.iter(fun var ->
                                unbox value
                                |> extractText
                                |> View.Get var.Set
                            )
            
                let setVar varN value = setVar0(varN, value)
            
                let setVarDirect0 = 
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) (varN:obj, text:obj) ->
                        unbox varN
                        |>  getParmRef
                        ||> tryGetVoV
                        |>  Option.iter(fun var -> 
                                unbox text
                                |> var.Set
                            )
                let setVarDirect  varN value = setVarDirect0(varN, value)
                let setVarDirectD varN value = delayed 100 (setVarDirect varN) value
            
                let getValDirect = 
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) (varN:string) ->
                        varN
                        |>  getParmRef
                        ||> tryGetWoW
                        |>  Option.bind View.TryGet
                        |>  Option.defaultValue null
            
                let draggingEvent first (value: Var<string>) (ev: Dom.MouseEvent) =
                    let el : Dom.Element = ev?toElement
                    let vertical = el.ParentElement.HasAttribute "vertical"
                    let getSize (el:Dom.Element) : float =
                        el.GetBoundingClientRect() 
                        |> fun r ->
                                match vertical, first with
                                | true , true  ->  r.Width 
                                | true , false -> -r.Width 
                                | false, true  ->  r.Height
                                | false, false -> -r.Height
                    let mouseCoord (ev: Dom.MouseEvent) = if vertical then float ev.ClientX else float ev.ClientY
                    let startP   = value.Value |> ParseO.parseDoubleO |> Option.defaultValue 0.
                    let start    = mouseCoord ev
                    let gap      = getSize    el
                    let size     = getSize    el.ParentElement
                    let drag (ev: Dom.Event) =
                        ev :?> Dom.MouseEvent
                        |> mouseCoord
                        |> fun m   -> (m - start) * 100.0 / (size - gap) + startP
                        |> max 0. 
                        |> min 100.
                        |> string
                        |> String.left 5
                        |> fun v -> if value.Value <> v then value.Set v
                    let rec finishDragging (_: Dom.Event) =
                        JS.Window.RemoveEventListener("mousemove", drag          , false) 
                        JS.Window.RemoveEventListener("mouseup"  , finishDragging, false)
                    do  JS.Window.AddEventListener   ("mousemove", drag          , false) 
                    do  JS.Window.AddEventListener   ("mouseup"  , finishDragging, false) 
                    ev.PreventDefault()
            
                let dragSplitter0 = 
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) (varN, eventD:Dom.MouseEvent) ->
                        varN
                        |>  getParmRef
                        ||> tryGetVoV
                        |>  Option.iter(fun var -> draggingEvent true var eventD )
                let dragSplitter varN eventD = dragSplitter0(unbox varN, unbox eventD)
            
                let trigAct =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) trigger actN ->
                        extractText trigger
                        |> Doc.BindView(function
                        | null -> ()
                        |_     ->
                            getParmRef actN
                            ||> tryGetAct 
                            |>  Option.iter(fun a -> callFunction () () a.actFunction )
                        >> fun _ -> Html.div [] []
                        )
            
                let trigActChange =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) trigger actN ->
                        extractText trigger
                        |> View.consistent
                        |> View.Map(function
                        | null -> ()
                        |_     ->
                            getParmRef actN
                            ||> tryGetAct 
                            |>  Option.iter(fun a -> callFunction () () a.actFunction )
                        >> fun _ -> ""
                        ) |>  Doc.TextView
            
                let callAction0 =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) actN (p1:obj) (p2:obj) ->
                        getParmRef actN
                        ||> tryGetAct 
                        |>  Option.iter(fun a -> callFunction p1 p2 a.actFunction )
            
                let callAction actN p1 p2 = callAction0 actN p1 p2
            
                let delayAction =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) delay actN ->
                        getParmRef (unbox actN)
                        ||> tryGetAct 
                        |> Option.iter(fun a -> 
                            async {
                                let! d = extractText (unbox delay) |> View.GetAsync
                                do! Async.Sleep (ParseO.parseIntO d |> Option.defaultValue 100)
                                callFunction () () a.actFunction
                            } |> Async.Start
                        )
            
                let select =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) attrs none vals ->
                        docWithVar (fun var ->
                            let valsW = V ((extractText vals).V.Split ';' |> Seq.toList)
                            let varO  = 
                                Var.Make 
                                    (V (match var.V with 
                                        | s when Seq.contains (s.Trim()) valsW.V -> Some(s.Trim()) 
                                        |_-> None )) 
                                    (function 
                                     | None   ->                                                        var.Set "" 
                                     | Some s -> valsW |> View.Get (fun vs -> if Seq.contains s vs then var.Set s ) )
                            Doc.SelectDynOptional (extractAts attrs) none id valsW varO
                        )
            
                let addPlugIn p =
                    newViw (PlgElemName "PlugInName") (View.Const p.plgName.Id)
                    |> p.plgViews.Append
                    plugIns.Add p
            
                let splitterPerc =
                    depWithExtracts <| fun (extractAts, extractDoc, extractText) template attrs doc1 doc2 ->
                        docWithVar (fun var -> 
                            Html.div (extractAts attrs) [
                                docReference doc1
                                docReference doc2
                            ]
                        )
                if IsClient then
                    plugin { 
                        plgName  "AppFramework" 
                        plgVar   "mainDocV"     mainDocV
                        plgDoc   "AppFwkClient" AppFwkClient
                        plgAct   "Hello"        (fun () -> JS.Window.Alert "Hello!")
                    } |> addPlugIn
                    plugin { 
                        plgName  "AF"
                        plgDoc1  "DocReference"  docReference  "DocName"
                        plgDoc1  "HtmlDoc"       htmlDoc       "Html"
                        plgDoc2  "TrigAction"    trigAct       "Trigger"  "Action"
                        plgDoc2  "TrigChange"    trigActChange "Trigger"  "Action"
                        plgDoc2  "Input"         input         "Attrs"                  "Var"
                        plgDoc2  "TextArea"      textArea      "Attrs"                  "Var"
                        plgDoc4  "Select"        select        "Attrs"    "None" "Vals" "Var"
                        plgDoc3  "InputFile"     inputFile     "Attrs"    "Label" "Action"
                        plgDoc3  "InputLabel"    inputLabel    "Attrs"    "Label"       "Var"
                        plgDoc5  "SplitterPerc"  splitterPerc  "Template" "Attrs" "doc1" "doc2" "Var"
                        plgAct2  "SetVar"        setVar        "Var"      "Value"
                        plgAct2  "SetVarDirect"  setVarDirect  "Var"      "from"
                        plgAct2  "SetVarDirectD" setVarDirectD "Var"      "from"
                        plgAct2  "DelayAction"   delayAction   "delay"    "Äction"
                        plgAct   "Hello"         (fun () -> JS.Window.Alert "Hello!")
                        plgAct2  "DragSplitter"  dragSplitter  "Var"      "dragEvent"
                        plgQuery "getDocNames"   (fun (_:obj) -> plugIns.Value |> Seq.collect (fun plg -> plg.plgDocs |> Seq.map (fun doc -> plg.plgName.Id + "." + doc.docName.Id)) |> Seq.toArray |> box)
                        plgView  "MouseX"        (View.Map (fst >> string               ) UI.Input.Mouse   .Position     )
                        plgView  "MouseY"        (View.Map (snd >> string               ) UI.Input.Mouse   .Position     )
                        plgView  "MouseLeft"     (View.Map (function true -> "1" |_->"0") UI.Input.Mouse   .LeftPressed  )
                        plgView  "MouseRight"    (View.Map (function true -> "1" |_->"0") UI.Input.Mouse   .RightPressed )
                        plgView  "MouseMiddle"   (View.Map (function true -> "1" |_->"0") UI.Input.Mouse   .MiddlePressed)
                        plgView  "Keyboard"      (View.Map (sprintf "%A"                ) UI.Input.Keyboard.KeysPressed  )
                    } |> addPlugIn
            
                    //titleV.View
                    //|> View.Bind(fun nm ->
                    //    nm
                    //    |> String.splitByChar '.'
                    //    |> (function [| a ; b |] -> tryGetWoW a b |_-> None)
                    //    |> Option.defaultWith (fun () -> mainDocV.View )
                    //) |> View.Sink (fun v -> 
                    //    async {
                    //        do! Async.Sleep 500
                    //        JS.Window.Document.Title <- v 
                    //    } |> Async.Start
                    //)
            
                let getMainDoc =
                  lazy
                    WcSplitter.init horizontal vertical
                    WcTabStrip.init.Value
                    mainDoc()
            
            
            
            /////////////////////////////////////////////////////////////////////////////////////////////
            
                type P<'P> with
                    [<Inline>] static member (<*)(vf:PVl<    'a   ->'b> ,  a :      'a   )  =                                            pff vf (VConst  a                     )
                    [<Inline>] static member (<!)(vf:PVl<    'a   ->'b> , pav:PVl<  'a  >) = pav.r       |> bindWrap (fun av         -> pff vf          av )
                    [<Inline>] static member (<!)(vf:PVl<    'a   ->'b> ,  aW:View< 'a  >)  =                                            pff vf (VView   aW                    )
                    [<Inline>] static member (<!)(vf:PVl<    'a   ->'b> ,  aV:Var<  'a  >)  =                                            pff vf (VView   aV.View               )
                    [<Inline>] static member (<!)(vf:PVl<    'a   ->'b> , paF:PFn<_,'a  >) = paF.r       |> bindWrap (fun aF         -> pff vf (callF   aF                    ) )
                    [<Inline>] static member (<&)(vf:PVl<seq<Doc >->'b> ,  a :   string  ) = extractDocD |> bindWrap (fun extractDoc -> pff vf (VConst (seq [extractDoc a  ]) ) )
                    [<Inline>] static member (<&)(vf:PVl<seq<Doc >->'b> , paF:PFn<_,Doc >) = paF.r       |> bindWrap (fun aF         -> pff vf (VConst (seq [callDoc    aF ]) ) )
                    [<Inline>] static member (<&)(vf:PVl<    Doc  ->'b> ,  a :   string  ) = extractDocD |> bindWrap (fun extractDoc -> pff vf (VConst (     extractDoc a   ) ) )
                    [<Inline>] static member (<&)(vf:PVl<    Doc  ->'b> , paF:PFn<_,Doc >) = paF.r       |> bindWrap (fun aF         -> pff vf (VConst (     callDoc    aF  ) ) )
            //        [<Inline>] static member (<&)(vf:Val<seq<Doc>->'b> , aF:Fun<_,Doc>) = ff vf (VConst (seq [callDoc aF ]) )
            
                    [<Inline>] static member (<&)(vf:PVl<seq<Attr>->'b> ,  a :   string  ) = extractAtsD |> bindWrap (fun extractAts -> pff vf (VConst (     extractAts a   ) ) )
                    [<Inline>] static member (<&)(vf:PVl<seq<Attr>->'b> , paF:PFn<_,Attr>) = paF.r       |> bindWrap (fun aF         -> pff vf (VConst (seq [callAtt    aF ]) ) )
                    [<Inline>] static member (<&)(vf:PVl<    Attr ->'b> ,  a :   string  ) = extractAttD |> bindWrap (fun extractAtt -> pff vf (VConst (     extractAtt a   ) ) )
                    [<Inline>] static member (<&)(vf:PVl<    Attr ->'b> , paF:PFn<_,Attr>) = paF.r       |> bindWrap (fun aF         -> pff vf (VConst (     callAtt    aF  ) ) )
            
                type P<'P> with    
                    [<Inline>] static member (<*)(vc , p         ) = pfc vc  (VConst p       )
                    [<Inline>] static member (<!)(vc , p         ) = pfc vc          p
                    [<Inline>] static member (<!)(vc , p         ) = pfc vc  (VView  p       )
                    [<Inline>] static member (<!)(vc , pV:Var< _>) = pfc vc  (VView  pV.View )
                    [<Inline>] static member (<!)(vc , p:Fun<_,_>) = pfc vc  (callF  p       )
            
                    [<Inline>] static member (<&)(c:PFn<_,     Attr  -> _> ,  p :      string ) = extractAttD |> bindWrap (fun extractAtt -> pfc c       (VConst (       extractAtt        p   ) ) )
                    [<Inline>] static member (<&)(c:PFn<_,     Attr  -> _> ,  p :Val<  string>) =                                            pfc c       (VConst (      Val.textAtt        p   ) )
                    [<Inline>] static member (<&)(c:PFn<_,     Attr  -> _> , paF:PFn<_,string>) = paF.r       |> bindWrap (fun aF         -> pfc c       (VConst (      Val.textAtt (callF aF) ) ) )
                    [<Inline>] static member (<&)(c:PFn<_,     Attr  -> _> , paF:PFn<_,Attr  >) = paF.r       |> bindWrap (fun aF         -> pfc c       (VConst (          callAtt        aF  ) ) )
                    [<Inline>] static member (<&)(c:PFn<_,     Attr  -> _> , p  :      Attr   ) =                                            pfc c       (VConst (                         p   ) )
                    [<Inline>] static member (<&)(c:PFn<_, seq<Attr> -> _> , p  :      string ) = extractAtsD |> bindWrap (fun extractAts -> pfc c       (VConst (       extractAts        p   ) ) )
                    [<Inline>] static member (<&)(c:PFn<_, seq<Attr> -> _> , p  :Val<  string>) =                                            pfc c       (VConst (seq [ Val.textAtt        p  ]) )
                    [<Inline>] static member (<&)(c:PFn<_, seq<Attr> -> _> , paF:PFn<_,string>) = paF.r       |> bindWrap (fun aF         -> pfc c       (VConst (seq [ Val.textAtt (callF aF)]) ) )
                    [<Inline>] static member (<&)(c:PFn<_, seq<Attr> -> _> , paF:PFn<_,Attr  >) = paF.r       |> bindWrap (fun aF         -> pfc c       (VConst (seq [     callAtt        aF ]) ) )
                    [<Inline>] static member (<!)(c:PFn<   seq<Attr>,   _> , p  :      string ) = extractAttD |> bindWrap (fun extractAtt -> c |> unwrapBindWrap (fun c -> { c with p = Val.addAtt(  extractAtt        p  ) c.p } ) )
                    [<Inline>] static member (<!)(c:PFn<   seq<Attr>,   _> , p  :Val<  string>) =                                            c |> unwrapBindWrap (fun c -> { c with p = Val.addAtt( Val.textAtt        p  ) c.p } )
                    [<Inline>] static member (<!)(c:PFn<   seq<Attr>,   _> , paF:PFn<_,string>) = paF.r       |> bindWrap (fun aF         -> c |> unwrapBindWrap (fun c -> { c with p = Val.addAtt( Val.textAtt (callF aF)) c.p } ) )
                    [<Inline>] static member (<!)(c:PFn<   seq<Attr>,   _> , paF:PFn<_,Attr  >) = paF.r       |> bindWrap (fun aF         -> c |> unwrapBindWrap (fun c -> { c with p = Val.addAtt(     callAtt        aF ) c.p } ) )
                    [<Inline>] static member (<!)(c:PFn<   seq<Attr>,   _> , p  :      Attr   ) =                                          c |> unwrapBindWrap (fun c -> { c with p = Val.addAtt                     p    c.p } )
            
                    [<Inline>] static member (<&)(c:PFn<_,     Doc   -> _> , p  :      string ) = extractDocD |> bindWrap (fun extractDoc -> pfc c       (VConst (       extractDoc        p   ) ) )
                    [<Inline>] static member (<&)(c:PFn<_,     Doc   -> _> , p  :Val<  string>) =                                            pfc c       (VConst (      Val.textDoc        p   ) )
                    [<Inline>] static member (<&)(c:PFn<_,     Doc   -> _> , paF:PFn<_,string>) = paF.r     |> bindWrap (fun aF           -> pfc c       (VConst (      Val.textDoc (callF aF) ) ) )
                    [<Inline>] static member (<&)(c:PFn<_,     Doc   -> _> , paF:PFn<_,Doc   >) = paF.r     |> bindWrap (fun aF           -> pfc c       (VConst (          callDoc        aF  ) ) )
                    [<Inline>] static member (<&)(c:PFn<_,     Doc   -> _> , p  :      Doc    ) =                                            pfc c       (VConst (                         p   ) )
                    [<Inline>] static member (<&)(c:PFn<_, seq<Doc > -> _> , p  :      string ) = extractDocD |> bindWrap (fun extractDoc -> pfc c       (VConst (seq [  extractDoc        p  ]) ) )
                    [<Inline>] static member (<&)(c:PFn<_, seq<Doc > -> _> , p  :Val<  string>) =                                            pfc c       (VConst (seq [ Val.textDoc        p  ]) )
                    [<Inline>] static member (<&)(c:PFn<_, seq<Doc > -> _> , paF:PFn<_,string>) = paF.r     |> bindWrap (fun aF           -> pfc c       (VConst (seq [ Val.textDoc (callF aF)]) ) )
                    [<Inline>] static member (<&)(c:PFn<_, seq<Doc > -> _> , paF:PFn<_,Doc   >) = paF.r     |> bindWrap (fun aF           -> pfc c       (VConst (seq [     callDoc        aF ]) ) )
                    [<Inline>] static member (<!)(c:PFn<   seq<Doc >,   _> , p  :      string ) = extractDocD |> bindWrap (fun extractDoc -> c |> unwrapBindWrap (fun c -> { c with p = Val.addDoc(  extractDoc        p  ) c.p }) )
                    [<Inline>] static member (<!)(c:PFn<   seq<Doc >,   _> , p  :Val<  string>) =                                            c |> unwrapBindWrap (fun c -> { c with p = Val.addDoc( Val.textDoc        p  ) c.p } )
                    [<Inline>] static member (<!)(c:PFn<   seq<Doc >,   _> , paF:PFn<_,string>) = paF.r     |> bindWrap (fun aF           -> c |> unwrapBindWrap (fun c -> { c with p = Val.addDoc( Val.textDoc (callF aF)) c.p } ) )
                    [<Inline>] static member (<!)(c:PFn<   seq<Doc >,   _> , paF:PFn<_,Doc   >) = paF.r     |> bindWrap (fun aF           -> c |> unwrapBindWrap (fun c -> { c with p = Val.addDoc(     callDoc        aF ) c.p } ) )
                    [<Inline>] static member (<!)(c:PFn<   seq<Doc >,   _> , p  :      Doc    ) =                                            c |> unwrapBindWrap (fun c -> { c with p = Val.addDoc                     p    c.p } )
            
                let inline (!) v = { r = VConst v |> rtn }
            
                let concatMainDocs plugins = 
                    plugins 
                    |> Seq.choose (fun plg -> Seq.tryHead plg.plgDocs) 
                    |> Seq.choose (function 
                                    | {docDoc = Lazy(JustDoc d)}-> Some d 
                                    | {docDoc = Lazy(FunDoc0 f)}-> Some(f()) 
                                    |_-> None) 
                    |> Doc.Concat
            
                let lensStrO (sel:Var<string option>) =
                    Var.Make 
                        (V ( match sel.V with Some s -> s |_-> "" )) 
                        (fun s -> if s = "" then sel.Set None
                                  else Some s |> sel.Set)
                let mapVarO ofBO toB (sel:Var<_ option>) = 
                    Var.Make(V (sel.V |> Option.map toB)) 
                            (function Some s -> ofBO s |> Option.iter (Some >> sel.Set) |_-> sel.Set None) 
            
                type ListModelData<'K, 'D when 'K : equality> = {
                    elemsW : View<ListModel<'K, 'D>>
                    doc    : unit -> Doc
                    selV   : Var<'K option>
                    add    : unit -> 'D  
                    delCur : unit -> unit
                    def    : 'D
                } with 
                    member this.PlugIn ofStrO toStr = plugin {
                        plgDoc0   "list" (this.doc         )
                        //doc    "cur"  (lazy this.CurrentDoc  )
                        plgVar    "sel"  (this.selV |> mapVarO ofStrO toStr |> lensStrO )
                        plgAct    "add"  (this.add >> ignore    )
                        plgAct    "del"  this.delCur
                    }
                    member this.CurrentW = View.Do {
                            let! elems = this.elemsW
                            let! selO  = this.selV.View
                            match selO with
                            | Some sel   -> let! elemO = elems.TryFindByKeyAsView sel
                                            match elemO with
                                            | Some elem -> return elem
                                            | None      -> return this.def
                            | None                      -> return this.def
                        }
                    member this.CurrentV =
                        Var.Make this.CurrentW
                                (fun v -> 
                                    match this.selV.Value with 
                                    | Some k -> this.elemsW |> View.Get (fun elems -> if elems.ContainsKey k then elems.Add v ) 
                                    | None -> ())
            
            //module LayoutEngine =
            //    open LayoutEngine
            //    module AF = AppFramework
            //
            //    let addLayout0 lyt = 
            //        addLayout  lyt
            //        AF.mainDocV.Set <| UoM.Untag lyt.lytName
            
            //module ListModel =
            //    let MapLens predO (f: 'Key -> Var<'T> -> 'V) (m:ListModel<_,_>) =
            //        let get k v = f k (m.Lens k)
            //        match predO with
            //        | None       -> m.ViewState |> View.MapSeqCachedViewBy m.Key get 
            //        | Some predW ->
            //            (m.ViewState, predW) 
            //            ||> View.Map2(fun vms pred -> vms.ToArray (System.Predicate pred)) 
            //            |> View.MapSeqCachedViewBy m.Key get 
            
            module LM =
                module AF = AppFramework
            
                let getDocForW (elementsW: View<ListModel<_,_>>) keyF def newF predWO elUI =
                    let selected0 : Var<_ option>  = Var.Create None
                    let selView = View.Do {
                        let! elements = elementsW
                        let! selO = selected0.View
                        match selO with 
                        | None      -> return None
                        | Some sel  ->
                        let! exists = elements.ContainsKeyAsView sel
                        if not exists then return None else
                        return Some sel
                        //match predWO with
                        //| None       -> return Some sel
                        //| Some predW ->
                        //let! v    = elements.FindByKeyAsView sel
                        //let! pred = predW
                        //return if pred v then Some sel else None
                    }
                    let selectedV : Var<_ option>  = 
                        Var.Make
                            selView
                            (fun v -> elementsW |> View.Get(fun elements -> 
                                match v with 
                                | Some k when elements.ContainsKey k -> Some k 
                                |_-> None
                                |> fun v -> if selected0.Value <> v then selected0.Set v )
                            )
                    let addNew () =
                        let n = newF()
                        elementsW |> View.Get (fun elements ->
                            elements.Add n
                            selectedV.Set (Some <| keyF n)
                        )
                        n
                    let delete  k = fun () -> selectedV.Set None ; elementsW |> View.Get (fun elements -> elements.RemoveByKey k)
                    let result = {
                        AF.elemsW = elementsW
                        AF.doc    = fun () -> Doc.Empty
                        AF.selV   = selectedV
                        AF.delCur = fun () -> selectedV.Value |> Option.iter (fun k -> delete k () )
                        AF.add    = addNew
                        //AF.getDoc = elUI selectedV ignore
                        AF.def    = def
                    }
                    let elUIF     = elUI result
                    let listW     = elementsW |> View.Bind ( fun elems -> elems |> ListModel.MapLens predWO (fun k v -> elUIF (View.Const (Some k)) v ) )
                    { result with AF.doc = fun () -> listW |> Doc.BindSeqCached id }
            
                let getDocFor (elements: ListModel<_,_>) def newF predWO elUI = getDocForW (View.Const elements) elements.Key def newF predWO elUI
            
                let getDoc keyF def newF predWO elUI =
                    let elements  : ListModel<_,_> = ListModel.Create keyF []
                    getDocFor elements def newF predWO elUI
            
                //let setCurrentDoc docF li = { li with AF.getDoc = docF Util.unselectorV ignore }
                let addElements (li:AF.ListModelData<_,_>) elems = li.elemsW |> View.Get (fun elements -> elements.AppendMany elems)
            
            //module LMX =
            //    module AF = AppFramework
            //    open System
            //
            //    let addNewO newF firstKey nextKey=
            //        let mutable k = firstKey
            //        fun () ->
            //            let e = k, newF()
            //            k <- nextKey k
            //            e
            //
            //    let elemUI2 elemUI a b (v:Var<_>) = elemUI a b (v.Lens snd (fun (i, _) nv -> i, nv ) )
            //
            //    let getDocInt    def newElem elemUI = addNewO newElem 0                          ((+) 1)                             |> LM.getDoc fst (-1               , def) <| None <| elemUI2 elemUI
            //    let getDocGuid   def newElem elemUI = addNewO newElem (Guid.NewGuid())           (fun _ -> Guid.NewGuid())           |> LM.getDoc fst (       Guid.Empty, def) <| None <| elemUI2 elemUI
            //    let getDocGuidId def newElem elemUI = addNewO newElem (Guid.NewGuid() |> GuidId) (fun _ -> Guid.NewGuid() |> GuidId) |> LM.getDoc fst (GuidId Guid.Empty, def) <| None <| elemUI2 elemUI
            //                                            : AF.ListModelData<GuidId<'C>, GuidId<'C> * 'C>
            //
            //    //let setCurrentDoc docF = elemUI2 docF |> LM.setCurrentDoc
            //
            //    let addElements (li:AF.ListModelData<_,_>) elems = elems |> Seq.iter (fun v -> (li.add() |> fst, v) |> li.elems.Add )
            
            [< JavaScript ; JavaScriptExport (typeof<WebComponent.WcSplitter.WcSplitterT>) >]
            module StartAppFramework =
                //open FsRoot
                open WebSharper.JavaScript
            
                let htmlD = Depend.dependByName "AppFrameworkTemplate.html" AppFrameworkTemplate.html box
            
                let startWithHtmlD = Depend.depend {
                    let! html = htmlD
                    return fun () ->
                        let d = JS.Window.Document.CreateElement "div"
                        let _ = JS.Window.Document.Body.AppendChild d
                        d?outerHTML <- html
                        AppFramework.getMainDoc.Value 
                        |> Doc.RunAppend JS.Window.Document.Body 
                }
            
                let startWith html =
                    (startWithHtmlD 
                    |> Depend.resolver [
                        "AppFrameworkTemplate.html", AppFrameworkTemplate.html + html
                    ]) ()
            
            
            module AppFrameworkUI =
            
                module AF = AppFramework
            
                let showPlugIn (lmd:AF.ListModelData<_,AF.PlugIn    >) (k:View<_ option>) (plgV:Var<AF.PlugIn>) =
                    AF.AppFwkTemplate.Tile()
                        .Name(     plgV.V.plgName.Id                            )
                        .Select(   fun _ -> View.Get lmd.selV.Set k             )
                        .Selected( if lmd.selV.V = k.V then "selected" else ""  )
                        .Doc() 
            
                let showVar  (lmd:AF.ListModelData<_,AF.PlugInVar   >) (k:View<_ option>) (varV:Var<AF.PlugInVar>) =
                    let nameW = View.Do {
                        let! var = varV.View
                        let! v   = var.varVar.View
                        return var.varName.Id + " = " + v
                    }
                    AF.AppFwkTemplate.Tile()
                        .Name(     nameW                                        )
                        .Select(   fun _ -> View.Get lmd.selV.Set k             )
                        .Selected( if lmd.selV.V = k.V then "selected" else ""  )
                        .Doc() 
            
                let showView (lmd:AF.ListModelData<_,AF.PlugInView  >) (k:View<_ option>) (viwV:Var<AF.PlugInView>) =
                    let nameW = View.Do {
                        let! viw = viwV  .View
                        let! v   = viw.viwView
                        return viw.viwName.Id + " = " + v
                    }
                    AF.AppFwkTemplate.Tile()
                        .Name(     nameW                                        )
                        .Select(   fun _ -> View.Get lmd.selV.Set k             )
                        .Selected( if lmd.selV.V = k.V then "selected" else ""  )
                        .Doc() 
            
                let showAct  (lmd:AF.ListModelData<_,AF.PlugInAction>) (k:View<_ option>) (actV:Var<AF.PlugInAction>) =
                    let parms (act:AF.PlugInAction) = 
                        match act.actFunction with
                        | AF.FunAct0(_        ) -> ""
                        | AF.FunAct1(_, p1    ) -> [ p1      ] |> String.concat ", " |> sprintf "(%s)"
                        | AF.FunAct2(_, p1, p2) -> [ p1 ; p2 ] |> String.concat ", " |> sprintf "(%s)"
                    AF.AppFwkTemplate.Tile()
                        .Name(     actV.V.actName.Id + parms actV.V             )
                        .Select(   fun _ -> View.Get lmd.selV.Set k             )
                        .Selected( if lmd.selV.V = k.V then "selected" else ""  )
                        .Doc() 
            
                let showDoc  (lmd:AF.ListModelData<_,AF.PlugInDoc   >) (k:View<_ option>) (docV:Var<AF.PlugInDoc>) =
                    AF.AppFwkTemplate.Tile()
                        .Name(     docV.V.docName.Id + AF.docParms docV.V )
                        .Select(   fun _ -> View.Get lmd.selV.Set k )
                        .Selected( if lmd.selV.V = k.V then "selected" else ""  )
                        .Doc() 
            
                let defPlg = AF.defaultPlugIn()
                let defDoc = AF.newDoc (AF.PlgElemName "_") (lazy Doc.Empty)
                let defVar = AF.newVar (AF.PlgElemName "_") (Var.Create "" )
                let defViw = AF.newViw (AF.PlgElemName "_") (View.Const "" )
                let defAct = AF.newAct (AF.PlgElemName "_") (fun () -> ()  )
            
                let failCreate s = fun () -> failwithf "Create %s not implemented" s
            
                let pluginsList  = LM.getDocFor   AF.plugIns                                                          defPlg (failCreate "plugin" ) None showPlugIn
                let plgVarsList  = LM.getDocForW (V pluginsList.CurrentW.V.plgVars   ) (fun plgVar -> plgVar.varName) defVar (failCreate "Var"    ) None showVar
                let plgViewsList = LM.getDocForW (V pluginsList.CurrentW.V.plgViews  ) (fun plgViw -> plgViw.viwName) defViw (failCreate "View"   ) None showView
                let plgActsList  = LM.getDocForW (V pluginsList.CurrentW.V.plgActions) (fun plgAct -> plgAct.actName) defAct (failCreate "Action" ) None showAct
                let plgDocsList  = LM.getDocForW (V pluginsList.CurrentW.V.plgDocs   ) (fun plgDoc -> plgDoc.docName) defDoc (failCreate "Doc"    ) None showDoc
            
                let plugInAdded =
                    AF.plugin {
                        plgName   "AppFrmkUI"
                        plgMerge  "plugIns_"     (pluginsList .PlugIn (AF.PlugInName  >> Some) (fun n -> n.Id) )
                        plgMerge  "plgVars_"     (plgVarsList .PlugIn (AF.PlgElemName >> Some) (fun n -> n.Id) )
                        plgMerge  "plgViews_"    (plgViewsList.PlugIn (AF.PlgElemName >> Some) (fun n -> n.Id) )
                        plgMerge  "plgActs_"     (plgActsList .PlugIn (AF.PlgElemName >> Some) (fun n -> n.Id) )
                        plgMerge  "plgDocs_"     (plgDocsList .PlugIn (AF.PlgElemName >> Some) (fun n -> n.Id) )
                    }
                    |> AF.addPlugIn
            
            
            //#define DLL
            
            [< JavaScriptExport >]
            type LayoutEngine = {
                lytName       : AppFramework.PlugInName 
                lytDefinition : Var<string>
            }
            
            [< JavaScriptExport >]
            module LayoutEngine =
                open WebSharper.UI
                open WebSharper.JavaScript
                module AF = AppFramework
            
                open WebSharper.UI.Client
            
                type LayoutEntry =
                    | EntryVar    of AF.PlugInVar   
                    | EntryView   of AF.PlugInView  
                    | EntryDoc    of AF.PlugInDoc
                    | EntryAction of AF.PlugInAction
                    | EntryQuery  of AF.PlugInQuery
            
                type Token = Quoted of string | UnQuoted of string
            
                let (|S|) = function Quoted s | UnQuoted s -> s
            
                let (|Identifier|_|) =
                    function
                    | UnQuoted(REGEX "^[$a-zA-Z_][0-9a-zA-Z_\.\-$]*$" "" [| id |] ) -> Some id
                    | _                                                             -> None
            
                let (|I|_|) = function Identifier i -> Some i | _ -> None
            
                let (|Vertical|Horizontal|Layout|Grid|Template|Elem|Nothing|) =
                    function
                    | UnQuoted s when s = "vertical"   -> Vertical
                    | UnQuoted s when s = "horizontal" -> Horizontal
                    | UnQuoted s when s = "layout"     -> Layout
                    | UnQuoted s when s = "grid"       -> Grid
                    | UnQuoted s when s = "template"   -> Template
                    | Identifier id                    -> Elem id
                    |                                _ -> Nothing
            
                let (|PlugIn|Button|Input|TextArea|Select|Actions|Nothing|) =
                    function
                    | UnQuoted s when s = "PlugIn"     -> PlugIn
                    | UnQuoted s when s = "Button"     -> Button
                    | UnQuoted s when s = "input"      -> Input
                    | UnQuoted s when s = "textarea"   -> TextArea
                    | UnQuoted s when s = "select"     -> Select
                    | UnQuoted s when s = "Actions"    -> Actions
                    |                                _ -> Nothing
            
                let (|Var|Doc|View|ViewJS|Docs|Action|Nothing|) =
                    function
                    | UnQuoted s when s = "Var"        -> Var
                    | UnQuoted s when s = "Doc"        -> Doc
                    | UnQuoted s when s = "View"       -> View
                    | UnQuoted s when s = "ViewJS"     -> ViewJS
                    | UnQuoted s when s = "Docs"       -> Docs
                    | UnQuoted s when s = "Action"     -> Action
                    |                                _ -> Nothing
            
                type Measures = 
                | Fixed    of pixel: float * first: bool
                | Variable of min:   float * value: float * max: float
                    with override this.ToString() = 
                            match this with
                            | Fixed(        v, f  ) -> string (int (if f then v else -v) )
                            | Variable(min, v, max) -> sprintf "%d-%d-%d" (int min) (int v) (int max)
            
                let splitChar   ch = String.splitByChar ch >> Seq.map    String.trim
                let splitSemiColon = splitChar         ';' >> Seq.filter ((<>) "")
                let splitInTwo  ch = splitChar          ch >> Seq.toArray
            
                let (|Measures|_|) =
                    function 
                    | Quoted _     -> None 
                    | UnQuoted txt ->
                    String.splitByChar '-' txt
                    |> function
                       | [|                     ParseO.Double v                     |] -> Some <| Fixed    (     v, true )
                       | [| "";                 ParseO.Double v                     |] -> Some <| Fixed    (     v, false)
                       | [| ParseO.Double min ; ParseO.Double v ; ParseO.Double max |] -> Some <| Variable (min, v, max  )
                       | _                                                             -> None
            
                let fixedSplitter vertical pixel first (doc1:Doc) (doc2:Doc) =
                    let sizes = sprintf (if first then "%fpx calc(100%% - %fpx)" else "calc(100%% - %fpx) %fpx") pixel pixel
                    if vertical then 
                        AF.AppFwkTemplate.FixedSplitterVer()
                            .PartSizes( sizes)
                            .First(     doc1 )
                            .Second(    doc2 )
                            .Doc()
                    else 
                        AF.AppFwkTemplate.FixedSplitterHor()
                            .PartSizes( sizes)
                            .First(     doc1 )
                            .Second(    doc2 )
                            .Doc()
            
                let variableSplitter vertical min value max doc1 doc2 =
                    Doc.Element "wcomp-splitter" [
                        if vertical then yield Attr.Create "vertical"    ""
                        yield                  Attr.Create "min"      <| string min
                        yield                  Attr.Create "value"    <| string value
                        yield                  Attr.Create "max"      <| string max
                    ] [ doc1 ; doc2 ]
                    :> Doc
                    
                //let getLDoc name =
                //    splitName name
                //    ||> AF.tryGetDoc 
                //    |>  Option.map         AF.getLazyDoc
                //    |>  Option.defaultWith(fun ()  -> sprintf "missing %s" name |> AF.errDoc )                            
            
                //let xxhookOrText =
                //    function
                //    | Identifier id -> hookDoc id
                //    | txt           -> Doc.TextNode txt
            
                //type Token = string * bool
            
                let rec doubleQuote = function
                    | []                                            -> []
                    | UnQuoted c :: _ when c.StartsWith "//"        -> []
                    | Quoted t1 :: Quoted "\"" :: Quoted t2 :: rest -> (Quoted(t1 + "\"" + t2) :: rest) |> doubleQuote
                    | Quoted t1 :: Quoted "\"" :: []                -> [Quoted t1 ]
                    | h::rest                                       -> h :: doubleQuote rest
            
                let splitTokens line : Token list = // """main h1 "" "Hello World!"""" |> printfn "dd"
                    (if Seq.tryHead line = Some '"' then " " + line else line)
                    |> String.splitByChar '"'
                    |> Seq.mapi(fun i s -> 
                        if  i % 2 = 1  then [| Quoted s    |] else
                        if  s     = "" then [| Quoted "\"" |] else
                        let t     = s.Trim()
                        if  t     = "" then [|             |] else
                        t.Split([| ' ' |], System.StringSplitOptions.RemoveEmptyEntries)
                        |> Array.map         UnQuoted
                    )
                    |> Seq.collect id
                    |> Seq.toList
                    |> doubleQuote
            
            //    type TextData = 
            //    | TDText  of string
            //    | TDAct   of AF.PlugInAction
            //
            //    let splitName = AF.splitName
            //
            //    let rec getOneTextData lytNm name bef aft =
            //        let plg, n = splitName lytNm name
            //        AF.tryGetActW plg n
            //        |> View.Bind(function
            //        | Some act -> TDAct act |> View.Const
            //        | None     ->
            //        AF.tryGetWoWW plg n
            //        |> View.Bind(function
            //            | Some txt ->
            //                getTextData lytNm aft
            //                |> View.Bind (function
            //                    | TDText  b    -> View.Const <| (TDText  <|     bef + txt + b                             )
            //                    | TDAct   act  -> View.Const <| (TDText  <| sprintf "Unexpected Action @{%s}" (act.actName.Id) )
            //                )
            //            | None                 -> View.Const <| (TDText  <| sprintf "%s @{Missing %s}%s" bef name aft     )  
            //            )
            //        )
            //
            //    and getTextData lytNm (txt:string) =
            //        txt
            //        |> String.delimitedO "@{" "}"
            //        |> Option.map(fun (bef, name, aft) -> getOneTextData lytNm name bef aft )
            //        |> Option.defaultWith (fun () -> TDText  txt |> View.Const)
            //
            //    let getTextToken lytNm (token: Token) =
            //        match token with
            //        | UnQuoted name -> getOneTextData lytNm name "" ""
            //        | Quoted   txt  -> getTextData    lytNm txt
            //
            //    let getAttrs lytNm (S attrs: Token) = 
            //        [
            //            yield!  attrs
            //                    |> String.splitByChar ';'
            //                    |> Seq.map(String.splitByChar '=')
            //                    |> Seq.choose(
            //                        function 
            //                        | [| name ; value |] when name.Trim() <> "" && value.Trim() <> "" ->
            //                                value.Trim() |> getTextData lytNm
            //                                |> Attr.DynamicCustom (fun el -> function
            //                                    | TDText  v   -> el.SetAttribute(name.Trim(), v.Trim())
            //                                    | TDAct   act -> el.AddEventListener(name.Trim(), (fun (ev:Dom.Event) -> act.actFunction |> AF.callFunction el ev), false)
            //                                )
            //                                |> Some
            //                        |_      -> None )
            //            yield!  attrs
            //                    |> String.splitByChar ';'
            //                    |> Seq.map(String.splitByChar ':')
            //                    |> Seq.choose(
            //                        function 
            //                        | [| name ; value |] when name.Trim() <> "" && value.Trim() <> "" -> 
            //                                value.Trim() |> getTextData lytNm
            //                                |> View.Map(function
            //                                    | TDText  v   -> v.Trim()
            //                                    | TDAct   act -> sprintf "@{%s}" (act.actName.Id)
            //                                )
            //                                |> Attr.DynamicStyle (name.Trim())
            //                                |> Some
            //                        |_      -> None )
            //        ]
            //
            //    let getDocF (parms:Token list) (doc:AF.PlugInDoc) =
            //        match doc.docDoc, parms with
            //        | AF.LazyDoc ldoc                  ,                                                   rest -> ldoc.Value       , rest
            //        | AF.FunDoc0 f0                    ,                                                   rest -> f0()             , rest
            //        | AF.FunDoc1(f1, _                ), (S p1)                                         :: rest -> f1 p1            , rest
            //        | AF.FunDoc2(f2, _ , _            ), (S p1) :: (S p2)                               :: rest -> f2 p1 p2         , rest
            //        | AF.FunDoc3(f3, _ , _ , _        ), (S p1) :: (S p2) :: (S p3)                     :: rest -> f3 p1 p2 p3      , rest          
            //        | AF.FunDoc4(f4, _ , _ , _ , _    ), (S p1) :: (S p2) :: (S p3) :: (S p4)           :: rest -> f4 p1 p2 p3 p4   , rest     
            //        | AF.FunDoc5(f5, _ , _ , _ , _ , _), (S p1) :: (S p2) :: (S p3) :: (S p4) :: (S p5) :: rest -> f5 p1 p2 p3 p4 p5, rest
            //        | _ -> Html.div [] [ Html.text <| sprintf "Parameters do not coincide with definition %A - %A" doc parms ], []
            //
            //    let getDocFinal parms doc = 
            //        match getDocF parms doc with
            //        | res, [] -> res
            //        | _ -> sprintf "Too many parameters %A %A" doc parms |> AF.errDoc
            //
            //    let mutable currentViewTriggger = AF.mainDocV.View
            //
            //    let turnToView f = currentViewTriggger |> View.Map f |> Doc.EmbedView
            //
            //    let getADoc lytNm token =
            //        match token with
            //        | Identifier di  -> let plg, nm = splitName lytNm di
            //                            AF.tryGetDocW plg nm
            //                            |>  Doc.BindView (function 
            //                                | Some pdc -> getDocF [] pdc |> fst
            //                                | None     ->
            //                                AF.tryGetWoWW plg nm
            //                                |> Doc.BindView (function 
            //                                    | Some txt -> Doc.TextNode txt
            //                                    | None     -> sprintf "Missing doc: %s" di |>! print |> AF.errDoc )
            //                            )
            //        | (S txt)        -> txt
            //                            |> getTextData lytNm
            //                            |> View.Map(function
            //                                | TDText  v   ->  v 
            //                                | TDAct   act -> sprintf "Unexpected action: %s" (act.actName.Id)
            //                            )
            //                            |> Doc.TextView
            //
            //    let rec getAllDocs lytNm tokens =
            //        match tokens with
            //        | []            -> []
            //        | token :: rest -> getADoc lytNm token :: getAllDocs lytNm rest
            //
            //    let getOneDoc lytNm docs =
            //        match docs with
            //        | Identifier id :: parms -> let plg, nm = splitName lytNm id
            //                                    AF.tryGetDoc plg nm
            //                                    |>  Option.map (getDocF parms)
            //                                    |>  Option.defaultWith  (fun ()  ->
            //                                        AF.tryGetWoW plg nm
            //                                        |>  Option.map (fun txtW -> Doc.TextView txtW, parms)
            //                                        |> fun vv -> vv
            //                                        |>  Option.defaultWith  (fun () -> sprintf "Missing doc: %s" id |>! print |> AF.errDoc, parms) )
            //        | (S txt)       :: rest  -> txt
            //                                    |> getTextData lytNm
            //                                    |> View.Map(function
            //                                        | TDText  v   ->  v 
            //                                        | TDAct   act -> sprintf "Unexpected action: %s" (act.actName.Id)
            //                                    )
            //                                    |> Doc.TextView, rest
            //        | []                     -> Doc.Empty, []
            //
            //    let rec getDocs_ lytNm docs =
            //        match docs with
            //        | [] -> []
            //        | _  -> 
            //        match getOneDoc lytNm docs with
            //        | res, rest -> res :: getDocs_ lytNm rest
            //
            //    let pairOfDocs lytNm docs =
            //        currentViewTriggger 
            //        |> View.Map (fun _ -> getAllDocs lytNm docs )
            //        |> View.Map (
            //            function 
            //            | [ doc1 ; doc2 ] -> doc1, doc2
            //            | _               -> sprintf "splitter expects exactly 2 elements %A" docs |> AF.errDoc, "part 2" |> AF.errDoc
            //        ) |> (fun dsW -> View.Map fst dsW |> Doc.EmbedView, View.Map snd dsW |> Doc.EmbedView )
            //
            //    let singleDoc lytNm docs =
            //        currentViewTriggger
            //        |> View.Map (fun _ -> getAllDocs lytNm docs )
            //        |> View.Map (
            //            function 
            //            | [ doc1 ] -> doc1
            //            | _        -> sprintf "expected exactly 1 element %A" docs |> AF.errDoc
            //        ) |> Doc.EmbedView
            //
            //    let createSplitter(lytNm, name, vertical, measures, docs) =
            //        let doc1, doc2 = pairOfDocs lytNm docs
            //        match measures with
            //        | Fixed    (pixel,    first) ->    fixedSplitter vertical pixel first   doc1 doc2
            //        | Variable (min, value, max) -> variableSplitter vertical min value max doc1 doc2
            //
            //    let createElement(lytNm, name, element, attrs, docs) =
            //        turnToView <| fun _ ->
            //            getAllDocs lytNm docs 
            //            |> Doc.Concat
            //            |> Seq.singleton
            //            |> Doc.Element element (getAttrs lytNm attrs)
            //
            //    let createButton( lytNm, name, actName, attrs, S text) = 
            //        turnToView <| fun _ ->
            //            splitName lytNm actName
            //            ||> AF.tryGetAct
            //            |>  Option.map          (fun act -> fun () -> act.actFunction |> AF.callFunction () ()  )
            //            |>  Option.defaultValue ignore
            //            |> Doc.Button text (getAttrs lytNm attrs)
            //
            //    let createInput( lytNm, name, varName, attrs ) = 
            //        turnToView <| fun _ ->
            //            splitName lytNm varName
            //            ||> AF.tryGetVoVW
            //            |> Doc.BindView(function
            //                | Some var -> Doc.Input     (getAttrs lytNm attrs) var
            //                | None  -> sprintf "Missing var: %s" varName |> AF.errDoc )
            //
            //    let createTextArea( lytNm, name, varName, attrs ) = 
            //        turnToView <| fun _ ->
            //                splitName lytNm varName
            //                ||> AF.tryGetVoVW
            //                |> Doc.BindView(function
            //                    | Some var -> Doc.InputArea (getAttrs lytNm attrs) var
            //                    | None  -> sprintf "Missing var: %s" varName |> AF.errDoc )
            //
            //    let createDoc( lytNm, name, docName, parms) =
            //        turnToView <| fun _ ->
            //            splitName lytNm docName
            //            ||> AF.tryGetDoc
            //            |>  Option.map (getDocFinal parms)
            //            |>  Option.defaultWith  (fun ()  -> sprintf "Missing doc: %s" docName |> AF.errDoc )
            //
            //    let createTemplate( lytNm, name, tempName:string, attrs:Token, holes) =
            //        turnToView <| fun _ ->
            //            let attrs = getAttrs lytNm attrs
            //            Client.Doc.LoadLocalTemplates "local"
            //            try
            //                holes 
            //                |> Seq.pairwise
            //                |> Seq.indexed
            //                |> Seq.filter(fun (i, _) -> i % 2 = 0)
            //                |> Seq.map  snd
            //                |> Seq.map( function
            //                    | (S nm ), Identifier id -> splitName     lytNm id ||> AF.tryGetDoc |> Option.map (fun doc -> TemplateHole.Elt(   nm.ToLower(), getDocF [] doc |> fst) )
            //                                                |> Option.orElseWith (fun () ->
            //                                                    splitName lytNm id ||> AF.tryGetVar |> Option.map (fun var -> TemplateHole.VarStr(nm.ToLower(), var.varVar) )
            //                                                )
            //                                                |> Option.defaultWith(fun () -> TemplateHole.Elt(nm.ToLower(), sprintf "Missing element: %s" id |> AF.errDoc) )
            //                    | (S nm ), (S txt )      -> //getTextData lytNm txt
            //                                                //|> View.Map (function
            //                                                //    | TDText  v   -> TemplateHole.Text(    nm.ToLower(), v )
            //                                                //    | TDView  vw  -> TemplateHole.TextView(nm.ToLower(), vw)
            //                                                //    | TDAct   act -> TemplateHole.Event(   nm.ToLower(), (fun el ev -> act.actFunction |> AF.callFunction el ev ))
            //                                                //)
            //                                                TemplateHole.Elt(nm.ToLower(), sprintf "Not implemented: %s" txt |> AF.errDoc) 
            //                )
            //                |> (if Seq.isEmpty attrs then id else TemplateHole.Attribute("attrs", Attr.Concat attrs) |> Seq.singleton |> Seq.append)
            //                |> Client.Doc.NamedTemplate "local" (tempName.ToLower() |> Some)
            //                |> Some
            //            with _ -> None
            //            |>  Option.defaultWith  (fun ()  -> sprintf "Missing template: %s" tempName |> AF.errDoc )
            //
            //    let getParamText lytNm token f = 
            //        getTextToken lytNm token
            //        |> View.Get(function
            //            | TDText  txt -> f (box txt)
            //            | TDAct   act -> f (box act)
            //        )
            //
            //    let createAction( lytNm, name, actName, (parms : Token list) ) = 
            //        splitName lytNm actName
            //        ||> AF.tryGetAct
            //        |>  Option.map          (fun act -> 
            //            if parms = [] then act.actFunction else
            //            match act.actFunction, parms with
            //            | AF.FunAct1(f,_    ), [ t1     ] -> AF.FunAct0( fun () -> getParamText lytNm t1                                   f              )
            //            | AF.FunAct2(f,_, _ ), [ t1; t2 ] -> AF.FunAct0( fun () -> getParamText lytNm t1 (fun p1 -> getParamText lytNm t2 (f p1   ) )     )
            //            | AF.FunAct2(f,_, n2), [ t1     ] -> AF.FunAct1((fun p2 -> getParamText lytNm t1 (fun p1 ->                        f p1 p2) ) , n2)
            //            | _ -> AF.FunAct0 (fun () -> printfn "Parameters do not coincide for Action %s %A %A" actName parms act )
            //        )
            //        |>  Option.defaultWith  (fun ()  -> AF.FunAct0 (fun () -> printfn "Action Not Found %s" actName) )
            //
            //    let createConcat(lytNm, name, docs) =
            //        turnToView (fun _ -> getAllDocs lytNm docs |> Doc.Concat)
            //
            //    let createVar( lytNm, varName, v           ) = Var.Create v
            //    let findJSEntry fname =
            //        fname 
            //        |> String.splitByChar '.'
            //        |> Seq.fold(fun oO nm ->
            //            oO |> Option.bind(fun o -> if (isUndefined o?(nm)) then None else Some o?(nm) ) 
            //            ) (Some (JS.Inline("window") :> obj) )
            //
            //    let createView(lytNm, viwName, parms) = 
            //        currentViewTriggger |> View.Bind (fun _ ->
            //            try
            //                parms
            //                |> View.traverseSeq (getTextToken lytNm)
            //                |> View.Map (
            //                    Seq.map 
            //                        (function
            //                        | TDText  txt -> txt
            //                        | TDAct   act -> sprintf "%A" act) 
            //                    >> Seq.toArray
            //                )
            //                |> View.Map (fun ar ->
            //                    try match ar with
            //                        | [|   |] -> "No JS function specified"
            //                        | [| _ |] ->  JS.Eval ar.[0]                                              |> string
            //                        | _       -> (JS.Eval ar.[0] |> unbox<FuncWithArgs<_,obj>>).Call ar.[1..] |> string
            //                    with e -> e.Message
            //                )
            //            with e -> e.Message |> View.Const
            //        )
            //
            //    let createSplitterM = Memoize.memoize createSplitter
            //    let createButtonM   = Memoize.memoize createButton
            //    let createInputM    = Memoize.memoize createInput
            //    let createTextAreaM = Memoize.memoize createTextArea
            //    let createElementM  = Memoize.memoize createElement
            //    let createDocM      = Memoize.memoize createDoc
            //    let createTemplateM = Memoize.memoize createTemplate
            //    let createConcatM   = Memoize.memoize createConcat
            //    let createVarM      = Memoize.memoize createVar
            //    let createViewM     = Memoize.memoize createView
            //    let createActionM   = Memoize.memoize createAction
            //
            //    let entryDoc  n doc = AF.newDoc  n (lazy doc    ) |> EntryDoc    |> Some
            //    let entryVar  n v   = AF.newVar  n  v             |> EntryVar    |> Some
            //    let entryView n w   = AF.newViw  n  w             |> EntryView   |> Some
            //    let entryAct  n a   = AF.newActF n  a             |> EntryAction |> Some
            //
            //    let createEntryO lytNm (line:string) =
            //        try
            //            match splitTokens line with
            //            |   Identifier name :: Vertical   :: Measures measures          :: docs    -> entryDoc  <| AF.PlgElemName name <| createSplitterM(lytNm, name, true , measures, docs ) 
            //            |   Identifier name :: Horizontal :: Measures measures          :: docs    -> entryDoc  <| AF.PlgElemName name <| createSplitterM(lytNm, name, false, measures, docs ) 
            //            | [ Identifier name ;  Button     ;  Identifier act    ;  attrs ;  text  ] -> entryDoc  <| AF.PlgElemName name <| createButtonM  (lytNm, name, act  , attrs   , text ) 
            //            | [ Identifier name ;  Input      ;  Identifier var    ;  attrs          ] -> entryDoc  <| AF.PlgElemName name <| createInputM   (lytNm, name, var  , attrs          ) 
            //            | [ Identifier name ;  TextArea   ;  Identifier var    ;  attrs          ] -> entryDoc  <| AF.PlgElemName name <| createTextAreaM(lytNm, name, var  , attrs          ) 
            //            | [ Identifier name ;  Var        ;                       (S v)          ] -> entryVar  <| AF.PlgElemName name <| createVarM     (lytNm, name, v                     ) 
            //            |   Identifier name :: Doc        :: (S doc  )                  :: parms   -> entryDoc  <| AF.PlgElemName name <| createDocM     (lytNm, name, doc  , parms          ) 
            //            |   Identifier name :: View       ::                               parms   -> entryView <| AF.PlgElemName name <| createViewM    (lytNm, name,        parms          )
            //            |   Identifier name :: Template   :: (S temp )         :: attrs :: holes   -> entryDoc  <| AF.PlgElemName name <| createTemplateM(lytNm, name, temp , attrs   , holes)
            //            |   Identifier name :: Docs                                     :: docs    -> entryDoc  <| AF.PlgElemName name <| createConcatM  (lytNm, name,                  docs )
            //            |   Identifier name :: Action     :: Identifier act             :: parms   -> entryAct  <| AF.PlgElemName name <| createActionM  (lytNm, name, act  , parms          )
            //            |   Identifier name :: Elem elem                       :: attrs :: docs    -> entryDoc  <| AF.PlgElemName name <| createElementM (lytNm, name, elem , attrs   , docs ) 
            //            | _                                                                        -> None
            //        with e -> 
            //            None
            
                module Syntax =
            
                    type ItemRef =
                    | LocalRef of string
                    | FullRef  of string * string
            
                    type DocRef = DocRef of ItemRef
                    type ActRef = ActRef of ItemRef
                    type VarRef = VarRef of ItemRef
                    type ViwRef = ViwRef of ItemRef
            
                    //let pairOfDocs lytNm docs =
                    //    currentViewTriggger 
                    //    |> View.Map (fun _ -> getAllDocs lytNm docs )
                    //    |> View.Map (
                    //        function 
                    //        | [ doc1 ; doc2 ] -> doc1, doc2
                    //        | _               -> sprintf "splitter expects exactly 2 elements %A" docs |> AF.errDoc, "part 2" |> AF.errDoc
                    //    ) |> (fun dsW -> View.Map fst dsW |> Doc.EmbedView, View.Map snd dsW |> Doc.EmbedView )
            
                    type TextVal =
                    | TvConst  of string
                    | TvVarRef of VarRef
                    | TvViwRef of ViwRef
                    | TvActRef of ActRef
                    | TvDocRef of DocRef
            
                    type TextValL = TextVal list
            
                    type AttrVal =
                    | AtStyle of string * TextValL
                    | AtAttr  of string * TextValL
                    | AtAct   of string * ActRef
            
                    type NodeRef =
                    | NdTextValL of TextValL
                    | NdDocRef   of DocRef
                    | NdVarRef   of VarRef
                    | NdViwRef   of ViwRef
            
                    type ParmRef =
                    | PrTextValL of TextValL
                    | PrDocRef   of DocRef
                    | PrVarRef   of VarRef
                    | PrViwRef   of ViwRef
                    | PrActRef   of ActRef
            
                    type RefType =
                    | RDoc
                    | RVar
                    | RViw
                    | RAct
                    | RPlg
            
                    type ElemNames = Map<string, RefType>
                    type ElemName  = string * RefType
            
                    type SplitterDef = SplitterDef of vertical:bool * Measures * DocRef * DocRef
                    type ButtonDef   = ButtonDef   of ActRef * AttrVal[] * TextValL
                    type InputDef    = InputDef    of VarRef * AttrVal[]
                    type TextAreaDef = TextAreaDef of VarRef * AttrVal[]
                    type DocFDef     = DocFDef     of DocRef * ParmRef list
                    type ConcatDef   = ConcatDef   of NodeRef list
                    type ElementDef  = ElementDef  of string * ParmRef * NodeRef list
                    type TemplateDef = { 
                        tmpName : string 
                        vars    : (string * VarRef )[]
                        views   : (string * ParmRef)[]
                        docs    : (string * DocRef )[] 
                        actions : (string * ActRef )[]
                        attrs   : ParmRef
                    }
            
                    let templateDef nm ats vs ws ds acs = { 
                        tmpName = nm
                        attrs   = ats
                        vars    = vs
                        views   = ws
                        docs    = ds
                        actions = acs
                    }
            
                    type ActDef      = ActDef      of ActRef * ParmRef list
                    type ActDefs     = ActDefs     of ActRef  list
                    type VarDef      = VarDef      of string
                    type ViwDef      = ViwDef      of ParmRef list
                    type VJSDef      = VJSDef      of ParmRef list
                    type PlgDef      = PlgDef      of ElemNames
                    type DocDef      = 
                    | DcSplitter of SplitterDef
                    | DcButton   of ButtonDef
                    | DcInput    of InputDef
                    | DcTextArea of TextAreaDef
                    | DcDocF     of DocFDef
                    | DcConcat   of ConcatDef
                    | DcElement  of ElementDef
                    | DcTemplate of TemplateDef
            
                    type Entry =
                    | EnDocDef  of DocDef
                    | EnActDef  of ActDef
                    | EnActDefs of ActDefs
                    | EnVarDef  of VarDef
                    | EnViwDef  of ViwDef
                    | EnVJSDef  of VJSDef
                    | EnPlgDef  of PlgDef
                    | EnPlgRef  of ElemName
            
                    type EntryDef = EntryDef of string * Entry
            
                    let entryDef  n e = EntryDef(n, e)
                    let entryDoc  n d = EnDocDef  d |> entryDef n |> Some
                    let entryAct  n a = EnActDef  a |> entryDef n |> Some
                    let entryActs n a = EnActDefs a |> entryDef n |> Some
                    let entryView n w = EnViwDef  w |> entryDef n |> Some
                    let entryVJS  n w = EnVJSDef  w |> entryDef n |> Some
                    let entryVar  n v = EnVarDef  v |> entryDef n |> Some
                    let entryPlg  n p = EnPlgDef  p |> entryDef n |> Some
                    let entryRef  n e = EnPlgRef  e |> entryDef n |> Some
            
                    let (|R|_|) = function
                    | Identifier n ->
                        match n.Split '.' with
                        | [|     n |] -> LocalRef n    |> Some
                        | [| l ; n |] -> FullRef(l, n) |> Some
                        | _ -> None
                    | _ -> None
            
                    let createEntryO (getType:ItemRef -> RefType * Entry option) lytNm (line:string) =
                        let (|Rt|_|) = function
                        | R itr -> Some (getType itr, itr)
                        |_      -> None
            
                        let (|DocRf|_|) = function
                        | Rt((RDoc, _), itr) -> Some(DocRef itr)
                        |_-> None
                        let (|VarRf|_|) = function
                        | Rt((RVar, _), itr) -> Some(VarRef itr)
                        |_-> None
                        let (|ViwRf|_|) = function
                        | Rt((RViw, _), itr) -> Some(ViwRef itr)
                        |_-> None
                        let (|ActRf|_|) = function
                        | Rt((RAct, _), itr) -> Some(ActRef itr)
                        |_-> None
                        let (|PlgRf|_|) = function
                        | Rt((RPlg, Some(EnPlgRef el)), itr) -> Some(el) 
                        |_-> None
            
                        let (|Name|_|) = function
                        | R(LocalRef nm) -> Some nm
                        |_               -> None
            
                        let (|NamU|_|) = function
                        | Name nm when nm.StartsWith "_" -> Some nm
                        |_                               -> None
            
                        let (|Tr|_|) = function
                        | VarRf vr -> TvVarRef vr |> Some
                        | ViwRf wr -> TvViwRef wr |> Some
                        | ActRf wr -> TvActRef wr |> Some
                        |_-> None
            
                        let (|Indi|_|) txt =
                            match txt |> String.delimitedO "@{" "}" with
                            | Some(bef, nm, aft) -> Some(bef, UnQuoted nm, aft)
                            |_                   -> None
            
                        let rec (|Tx|_|) txt =
                            match txt with
                            | Indi(bef, Tr tv, aft) ->
                                    let tl = if bef = "" then [ tv ] else [ TvConst bef ; tv ]
                                    match aft with
                                    | ""    -> Some tl
                                    | Tx ta -> Some(tl @ ta)
                                    |_      -> None
                            | Indi(_, _, _) -> None
                            |_              -> Some [ TvConst txt ]
            
                        let (|ActI|_|) txt =
                            match txt with
                            | Indi(bef, ActRf ar, aft) when bef.Trim() = "" && aft.Trim() = "" -> Some ar
                            |_                                                                 -> None
            
                        let (|QTx|_|) = function
                        | Quoted (Tx tv) -> tv |> Some
                        |_-> None
            
                        let (|STx|_|) = function
                        | QTx [TvConst v] -> v |> Some
                        |_-> None
            
                        let (|At|_|) = function 
                        | Quoted s ->
                            splitSemiColon s
                            |> Seq.choose(fun a ->
                                match splitInTwo '=' a with
                                | [| nm ; ActI  ar |] -> AtAct  (nm.Trim(), ar)  |> Some
                                | [| nm ; Tx    vl |] -> AtAttr (nm.Trim(), vl)  |> Some
                                |_->
                                match splitInTwo ':' a with
                                | [| nm ; Tx vl |] -> AtStyle(nm.Trim(), vl) |> Some
                                |_->    failwithf "Attributes should be like: \"name=val\" or \"name:val\" and separated by ';' : %s" a
                            )
                            |> Seq.toArray
                            |> Some
                        |_-> None
            
                        let (|Pr|_|) = function 
                        | QTx   v -> Some (PrTextValL v)
                        | DocRf v -> Some (PrDocRef   v)
                        | VarRf v -> Some (PrVarRef   v)
                        | ViwRf v -> Some (PrViwRef   v)
                        | ActRf v -> Some (PrActRef   v)
                        |_        -> None
            
                        let (|Vs|_|) = function 
                        | Quoted s ->
                            splitSemiColon s
                            |> Seq.choose(fun a ->
                                match splitInTwo ':' a |> Array.map UnQuoted with
                                | [| Name nm ; VarRf v |] -> (nm, v) |> Some
                                |_->    failwithf "Expecting Vars \"name:var\" separated by ';' : %s" a
                            )
                            |> Seq.toArray
                            |> Some
                        |_-> None
            
                        let (|Ws|_|) = function 
                        | Quoted s ->
                            splitSemiColon s
                            |> Seq.choose(fun a ->
                                match splitInTwo ':' a |> Array.map splitTokens with
                                | [| [ Name nm ] ; [ Pr v ] |] -> (nm, v) |> Some
                                |_->    failwithf "Expecting Views \"name:view\" separated by ';' : %s" a
                            )
                            |> Seq.toArray
                            |> Some
                        |_-> None
            
                        let (|Ds|_|) = function 
                        | Quoted s ->
                            splitSemiColon s
                            |> Seq.choose(fun a ->
                                match splitInTwo ':' a |> Array.map UnQuoted with
                                | [| Name nm ; DocRf v |] -> (nm, v) |> Some
                                |_->    failwithf "Expecting Docs \"name:doc\" separated by ';' : %s" a
                            )
                            |> Seq.toArray
                            |> Some
                        |_-> None
            
                        let rec (|Prs|_|) = function
                        | []                -> Some []
                        | Pr pr :: Prs rest -> Some( pr :: rest)
                        |_                  -> None
            
                        let rec (|ActRfs|_|)       = function
                        | []                      -> Some []
                        | ActRf ar :: ActRfs rest -> Some( ar :: rest)
                        |_                        -> None
            
                        let (|Acs|_|) = function 
                        | Quoted s ->
                            splitSemiColon s
                            |> Seq.choose(fun a ->
                                match splitInTwo ':' a |> Array.map splitTokens with
                                | [| [ Name nm ] ; [ ActRf v ] |] -> (nm, v) |> Some
                                |_->    failwithf "Expecting Actions \"name:action\" separated by ';' : %s" a
                            )
                            |> Seq.toArray
                            |> Some
                        |_-> None
            
                        let (|Nd|_|) = function 
                        | QTx   v -> Some (NdTextValL v)
                        | DocRf v -> Some (NdDocRef   v)
                        | VarRf v -> Some (NdVarRef   v)
                        | ViwRf v -> Some (NdViwRef   v)
                        |_        -> None
            
                        let rec (|Nds|_|) = function
                        | []                -> Some []
                        | Nd nd :: Nds rest -> Some( nd :: rest)
                        |_                  -> None
            
                        let rec (|Pgs|_|) = function
                        | []                -> Some []
                        | PlgRf el :: Pgs rest -> Some( el :: rest)
                        |_                  -> None
            
                        match splitTokens line with
                        |   Name name :: PlugIn     :: Pgs els                                   -> entryPlg  name <| PlgDef  (Map els )
                        | [ NamU name ;  Doc        ;  Name nm                                 ] -> entryRef  name <| ElemName(nm, RDoc)
                        | [ NamU name ;  Var        ;  Name nm                                 ] -> entryRef  name <| ElemName(nm, RVar)
                        | [ NamU name ;  View       ;  Name nm                                 ] -> entryRef  name <| ElemName(nm, RViw)
                        | [ NamU name ;  Action     ;  Name nm                                 ] -> entryRef  name <| ElemName(nm, RAct)
                    (**)| [ Name name ;  Vertical   ;  Measures measures ;  DocRf l ; DocRf r  ] -> entryDoc  name <| DcSplitter(SplitterDef(true , measures, l, r) )
                    (**)| [ Name name ;  Horizontal ;  Measures measures ;  DocRf l ; DocRf r  ] -> entryDoc  name <| DcSplitter(SplitterDef(false, measures, l, r) ) 
                    (**)| [ Name name ;  Button     ;  ActRf      act    ;  At att  ; QTx text ] -> entryDoc  name <| DcButton  (ButtonDef  (act  , att     , text) )
                    (**)| [ Name name ;  Input      ;  VarRf      var    ;  At att             ] -> entryDoc  name <| DcInput   (InputDef   (var  , att           ) )
                    (**)| [ Name name ;  TextArea   ;  VarRf      var    ;  At att             ] -> entryDoc  name <| DcTextArea(TextAreaDef(var  , att           ) )
                        | [ Name name ;  Var        ;                       STx v              ] -> entryVar  name <| VarDef    (v.Trim())
                        |   Name name :: Doc        :: DocRf      dr               :: Prs    ps  -> entryDoc  name <| DcDocF    (DocFDef    ( dr  , ps            ) )
                        |   Name name :: View       ::                                Prs    ps  -> entryView name <| ViwDef           ps
                        |   Name name :: ViewJS     ::                                Prs    ps  -> entryVJS  name <| VJSDef           ps
                        |   Name name :: Docs                                      :: Nds    ns  -> entryDoc  name <| DcConcat  (ConcatDef                  ns      )
                        |   Name name :: Actions    ::                                ActRfs acs -> entryActs name <| ActDefs  acs
                        |   Name name :: Action     :: ActRf      act              :: Prs    ps  -> entryAct  name <| ActDef  ( act  , ps          )
                        | [ Name name ;  Template   ;  Name tn; Pr att; Ws w; Ds d; Vs v; Acs a] -> entryDoc  name <| DcTemplate (templateDef tn att v w d a )
                        |   Name name :: Elem elem  ::           Pr att            :: Nds    ns  -> entryDoc  name <| DcElement (ElementDef(elem , att   , ns ) )
                        | _                                                                      -> None
            
                    let createEntryO2 (lytNm:AF.PlugInName) (refs:System.Collections.Generic.Dictionary<string, _>) =
                        let addR nm en = if refs.ContainsKey nm then Result.errorf "Already exists %s : %A " nm en else refs.Add(nm, en) ; Ok()
                        let ok   nm en = addR nm en |> Result.map (fun () -> nm, en)
                        let ko msg (line:string) =
                            let nm = line.Split([| ' ' ; '\t' |], System.StringSplitOptions.RemoveEmptyEntries) |> Seq.head
                            addR nm (ElementDef("div", PrTextValL [], [NdTextValL [ TvConst msg ] ] ) |> DcElement |> EnDocDef )
                            |> Result.bind (fun () -> Result.Error msg)
                        let getRef nm =
                            try refs.[nm]
                            with e -> failwithf "Could not find reference to %s" nm
                        let getType rf = 
                            match rf with
                            | LocalRef      nm  -> 
                                let entry = getRef nm
                                match entry with
                                | EnDocDef  _ -> RDoc
                                | EnActDef  _ -> RAct
                                | EnActDefs _ -> RAct
                                | EnVarDef  _ -> RVar
                                | EnViwDef  _ -> RViw
                                | EnVJSDef  _ -> RViw
                                | EnPlgRef  _ -> RPlg
                                | EnPlgDef  _ -> failwithf "PlugIn should not be referenced by itself: %A" rf
                                , Some entry
                            | FullRef  (ly, nm) ->
                                try
                                    getRef ly
                                    |> function
                                    | EnPlgDef(PlgDef ps) -> try ps.[nm] with e-> failwithf "Could not find reference to %s.%s" ly nm
                                    | _                   -> failwithf "PlugIn not registered: %A" rf
                                    , None
                                with e ->
                                    match AF.tryGetPlugIn (AF.PlugInName ly) with
                                    | None    -> failwith e.Message
                                    | Some pg ->
                                    let nmm = AF.PlgElemName nm
                                    if   pg.plgDocs   .ContainsKey nmm then RDoc
                                    elif pg.plgActions.ContainsKey nmm then RAct
                                    elif pg.plgVars   .ContainsKey nmm then RVar
                                    elif pg.plgViews  .ContainsKey nmm then RViw
                                    else failwithf "Could not find reference to %s.%s" ly nm
                                    , None
                        fun (line:string) ->
                            try 
                                createEntryO getType lytNm line
                                |> function
                                | Some(EntryDef(nm, en)) ->         ok nm en
                                | None                   -> line |> ko (sprintf "Line not matched!: %s" line)
                            with e                       -> line |> ko e.Message
                            |> Some
            
                module Layout =
                    open ParseO
            
                    type Node = 
                        | Node        of string []
                        | SubSplitter of Splitter
            
                    and Splitter =
                        Splitter of bool * Measures * Node * Node
            
                    let extractMeasuresO (m:string) =
                        match m.Split([| ' ' |], System.StringSplitOptions.RemoveEmptyEntries) with
                        | [|           Int v          |] -> Some (Fixed   (           float (abs(v)), v >= 0   ) ) 
                        | [| Int min ; Int v; Int max |] -> Some (Variable(float min, float      v  , float max) )
                        | _                              -> None
            
                    let horizontalSplit (lines:string[]) =
                        lines
                        |> Seq.indexed
                        |> Seq.choose (fun (i, l) ->
                            match l with
                            | REGEX "^ *--+([ ^v0-9]*)-* *$" "" p -> 
                                let ms    = p 
                                            |> Seq.tryItem 1 
                                            |> Option.bind ((fun s -> s.Replace("^", "").Replace("v", "-") ) >> extractMeasuresO) 
                                            |> Option.defaultValue (Variable(5., 50., 95.))
                                Some((i, ms), l.IndexOf '-')
                            | _ -> None
                        )
                        |> Seq.sortBy snd
                        |> Seq.tryHead
                        |> Option.map fst
                        |> Option.map (fun (i, ms) ->
                            lines.[.. i - 1]
                          , lines.[i + 1.. ]
                          , ms
                        )
            
                    let transpose (lines:string[]) =
                        let max   = lines |> Seq.map (fun l -> l.Length) |> Seq.max
                        [|
                            for i in 0..max-1 do
                                yield 
                                    new System.String( [| for l in lines do yield if l.Length > i then l.[i] else ' ' |])
                                    
                        |]
            
                    let verticalSplit (lyt:string[]) =
                        let lines = transpose lyt
                        lines
                        |> Seq.indexed
                        |> Seq.choose (fun (i, l) -> 
                            match l with
                            | REGEX @"^ *\|+ *$" "" [| _ |] -> Some(i, l.IndexOf '|')
                            | _ -> None
                        )
                        |> Seq.sortBy snd
                        |> Seq.tryHead
                        |> Option.map fst
                        |> Option.map (fun i -> lines.[.. i - 1] |> transpose
                                              , lines.[i + 1 ..] |> transpose )
                        |> Option.map (fun (l,r) ->
                            l |> Array.filter(extractMeasuresO >> (=) None),
                            r |> Array.filter(extractMeasuresO >> (=) None),
                            seq {
                                yield! l |> Seq.choose(extractMeasuresO)
                                yield! r |> Seq.choose(extractMeasuresO) |> Seq.map (function Fixed(v, true) -> Fixed(v, false) | m -> m)
                            } 
                            |> Seq.tryHead
                            |> Option.defaultValue (Variable(5., 50., 95.))
                        )
            
                    let cleanSpaces (lyt:string[]) = 
                        lyt 
                        |> String.concat " "
                        |> fun s -> s.Split([| " " |], System.StringSplitOptions.RemoveEmptyEntries)
                        |> Array.filter(function Int _ -> false |_-> true)
            
                    let rec extractNodes lyt =
                        let checkSplitter dir m one two =
                            match extractNodes one, extractNodes two with
                            | Node [||], other
                            | other    , Node [||] -> other
                            | nOne     , nTwo      -> Splitter(dir, m, nOne, nTwo) |> SubSplitter
                        match horizontalSplit lyt with
                        | None -> 
                            match verticalSplit lyt with
                            | None              -> Node (cleanSpaces lyt)
                            | Some(one, two, m) -> checkSplitter true  m one two
                        |     Some(one, two, m) -> checkSplitter false m one two
            
                    let rec createLayoutDefinitions nameBase node =
                        match node with
                        | Node [|      |] -> "___"    , [||]
                        | Node [| elem |] ->  elem    , [||]
                        | Node    svrl    ->  nameBase, [| nameBase + " div \"\" " + String.concat " " svrl |]
                        | SubSplitter(Splitter(dir, meas, one, two)) ->
                            let name1, def1 = createLayoutDefinitions (nameBase + "_1") one
                            let name2, def2 = createLayoutDefinitions (nameBase + "_2") two
                            nameBase, [| yield [ nameBase  ; (if dir then "vertical" else "horizontal") ; meas.ToString() ; name1 ; name2 ] |> String.concat " " 
                                         yield! def1
                                         yield! def2 |]
            
                let emptyLine (l:string) = 
                    let lt = l.Trim()
                    lt = "" || lt.StartsWith "//"
                let notEmpty = emptyLine >> not
            
                let getExtraLines pred (ls: string[]) =
                    ls 
                    |> Seq.skip 1 
                    |> Seq.tryFindIndex (fun l -> notEmpty l && not(pred l) )
                    |> Option.map ((+) 1)
                    |> Option.defaultValue ls.Length
                    |> fun i -> 
                        ls.[1..i-1] |> Array.filter notEmpty, ls.[i..] 
            
                let rec createLines baseName n (names: string[]) (lines: string[]) i (ls:string[]) =
                    let prefix  = String.replicate n ":"
                    let prefix2 = ":" + prefix
                    match Seq.tryHead ls with
                    | None   -> names, lines
                    | Some l ->
                    match l.Trim() with
                    | String.StartsWith prefix l ->
                        let children, rest = ls |> getExtraLines(fun (l:string) -> l.Trim().StartsWith prefix2)
                        let name = sprintf "_%s_%d" baseName i
                        let childNames, childrenLines = createLines name (n+1) [||] [||] 1 children
                        let names2 = [| yield! names ; yield name |]
                        let lines2 = [| yield! lines
                                        yield! childrenLines
                                        yield  name + " " + l + " " + String.concat " " childNames
                                     |]
                        createLines baseName n names2 lines2 (i+1) rest
                    | _   -> names, lines
            
                let processLines f ls =
                    let rec processLinesR (ls: string[]) =
                        match Seq.tryHead ls with
                        | None   -> [||]
                        | Some l ->
                        match splitTokens l with
                        | [ Identifier name ;  Layout ] ->
                            let lyt, rest = ls |> getExtraLines(fun (l:string) -> l.Trim().StartsWith "|")
                            lyt
                            |> Layout.extractNodes
                            |> Layout.createLayoutDefinitions name
                            |> snd
                            |> Array.append <| rest
                            |> processLinesR
                        |[] -> processLinesR ls.[1..]
                        | _ ->
                            let docs, rest = ls |> getExtraLines(fun (l:string) -> l.Trim().StartsWith ":")
                            if docs.Length > 0 then
                                let prefix = l.Split([|' '|], System.StringSplitOptions.RemoveEmptyEntries) |> Seq.item 0
                                let names, ls = createLines prefix 1 [||] [||] 1 docs
                                [|  yield! ls
                                    yield  l + " " + String.concat " " names
                                    yield! rest
                                |]
                                |> processLinesR
                            else
                                [| 
                                    match f l with
                                    | Some r -> yield r
                                    | _ -> ()
                                    yield! processLinesR rest
                                |]
                    processLinesR ls 
            
                let processText f (txt:string) =
                    txt.Split(  [|'\n' ; '\r' |], System.StringSplitOptions.RemoveEmptyEntries)
                    |> processLines f
            
                let parseEntries (lytNm:AF.PlugInName) txt =
                    let localRefs = System.Collections.Generic.Dictionary<_,_>()
                    sprintf "PlugInName View \"%s\"\n%s" lytNm.Id txt
                    |> processText (Syntax.createEntryO2 lytNm localRefs)
            
                //let createEntries lytNm = processText (createEntryO lytNm)
                                        //|> Seq.choose (createEntryO lytNm)
                                        //|> Seq.toArray
            
                let getText lytNm txtName =
                    match txtName with
                    | Identifier id -> let plg, nm = AF.splitName lytNm id 
                                       AF.tryGetViw plg nm
                                       |> Option.map (fun viw -> Doc.TextView viw.viwView    )
                                       |> Option.defaultWith (fun () -> 
                                       AF.tryGetVar plg nm
                                       |> Option.map (fun var -> Doc.TextView var.varVar.View)
                                       |> Option.defaultWith (fun () -> Html.text id))
                    | (S txt)       -> Html.text txt
            
                let getDocEntries entries =
                    entries
                    |> Seq.choose (function | EntryDoc doc -> Some doc |_-> None)
                    |> Seq.groupBy (fun d -> d.docName) |> Seq.map (snd >> Seq.last)
            
                let getVarEntries entries =
                    entries
                    |> Seq.choose (function | EntryVar var -> Some var |_-> None)
                    |> Seq.groupBy (fun v -> v.varName) |> Seq.map (snd >> Seq.last)
            
                let getViewEntries entries =
                    entries
                    |> Seq.choose (function | EntryView vw -> Some vw |_-> None)
                    |> Seq.groupBy (fun v -> v.viwName) |> Seq.map (snd >> Seq.last)
            
                let getActionEntries entries =
                    entries
                    |> Seq.choose (function | EntryAction ac -> Some ac |_-> None)
                    |> Seq.groupBy (fun v -> v.actName) |> Seq.map (snd >> Seq.last)
            
                let getQueryEntries entries =
                    entries
                    |> Seq.choose (function | EntryQuery qr -> Some qr |_-> None)
                    |> Seq.groupBy (fun v -> v.qryName) |> Seq.map (snd >> Seq.last)
            
            //    let inputFile lytNm attrs labelName actName doc =
            //        splitName lytNm actName
            //        ||> AF.tryGetAct
            //        |> Option.map(fun act -> 
            //            Html.div (getAttrs lytNm (Quoted attrs)) [
            //                Html.div              [ attr.``class`` "input-group"       ] [
            //                    Html.span         [ attr.``class`` "input-group-btn"   ] [ 
            //                        Html.label    [ attr.``class`` "btn"               ] [ 
            //                            getText lytNm (Quoted labelName)
            //                            Html.input[ attr.``class`` "form-control" 
            //                                        attr.``type`` "file" 
            //                                        Attr.Style "display" "none" 
            //                                        Html.on.click (fun el ev -> el?value <- "")
            //                                        Html.on.change(fun el ev -> act.actFunction |> AF.callFunction el () )
            //                                        ] []
            //                        ]
            //                    ]
            //                    (if doc <> "" then singleDoc lytNm [ UnQuoted doc ] else Doc.Empty)
            //                ]
            //            ]
            //        ) |> Option.defaultWith(fun () ->  sprintf "Action not found %s" actName |> AF.errDoc )
            //
            //    let inputLabel lytNm attrs labelName varName =
            //        splitName  lytNm varName
            //        ||> AF.tryGetVar
            //        |> Option.map(fun var -> 
            //            Html.div (getAttrs lytNm (Quoted attrs)) [
            //                Html.div      [ attr.``class`` "input-group"       ] [
            //                    Html.span [ attr.``class`` "input-group-addon" ] [ getText lytNm (Quoted labelName) ]
            //                    Doc.Input [ attr.``class`` "form-control"      ]   var.varVar
            //                ]
            //            ]
            //        ) |> Option.defaultWith(fun () ->  sprintf "Var not found %s" varName |> AF.errDoc )
            
                let none x = Html.span [][]
            
                let refreshEntries lytN entries =
                    let plg =   match AF.tryGetPlugIn lytN with
                                | Some plg -> plg
                                | None     -> 
                                    let plg = { AF.defaultPlugIn() with plgName = lytN }
                                    AF.addPlugIn plg
                                    plg
                    ListModel.refreshLM plg.plgVars    [| yield! getVarEntries    entries |]
                    ListModel.refreshLM plg.plgViews   [| yield! getViewEntries   entries |]
                    ListModel.refreshLM plg.plgActions [| yield! getActionEntries entries |]
                    ListModel.refreshLM plg.plgQueries [| yield! getQueryEntries  entries |]
                    ListModel.refreshLM plg.plgDocs    [| 
                        yield! getDocEntries    entries
                        //yield  AF.newDocF <| AF.PlgElemName "InputFile"  <| AF.FunDoc4(inputFile  lytN, "attrs", "Label", "Action", "[Doc]")
                        //yield  AF.newDocF <| AF.PlgElemName "InputLabel" <| AF.FunDoc3(inputLabel lytN, "attrs", "Label", "Var"            )
                        //yield  AF.newDocF <| AF.PlgElemName "none"       <| AF.FunDoc1(none           , "x"                                )
                    |]
            
            //    let addLayout (lyt:LayoutEngine) =
            //        lyt.lytDefinition.View |> View.Sink(fun txt ->
            //            currentViewTriggger <- V ( lyt.lytDefinition.V + AF.mainDocV.V)
            //            createEntries lyt.lytName txt
            //            |> Seq.append [ AF.newVar (AF.PlgElemName "Layout") lyt.lytDefinition |> EntryVar ]
            //            |> refreshEntries lyt.lytName
            //        )
            
                let newLyt name (lyt:string) = {
                    lytName       = name
                    lytDefinition = Var.Create lyt
                }
            
            //    let addNewLayout (name:obj) (layout:obj) =
            //        (if layout <> null then unbox layout else """
            //split horizontal 0-50-100 AppFramework.AppFwkClient Hello
            //Hello h1 "color:blue; class=btn-primary" "How are you today?" Ask
            //Ask Doc InputLabel "placeholder=Type you answer here..." "Answer:" AppFramework.mainDocV  
            //"""     |> String.unindentStr)
            //        |> newLyt (if layout <> null then unbox name else System.Guid.NewGuid() |> string |> fun s -> "Lyt_" + s.Replace("-", "") |> AF.PlugInName )
            //        |> addLayout
            //
            //    if IsClient then
            //        AF.tryGetPlugIn AF.defPlugInName
            //        |> Option.iter(fun plg ->
            //            plg.plgActions.Add <| ( AF.newActF <| AF.PlgElemName  "AddLayout" <| AF.FunAct2(addNewLayout, "[Name]", "[Layout]") )
            //        )
            
            module NewLY =
                //open FsRoot
                open WebSharper.UI
                open WebSharper.UI.Client
            
                open AppFramework
                module AF = AppFramework
            
                open Html
            
                open Depend.Operators
            
                let concat a b = sprintf "Concat(%d, %f)" a b 
                let aV = Var.Create 4
                let pa = aV.View
                let pb = 6.2
            
                let currentPlugInNameDef : PlugInName = PlugInName "NewLYx"
                let currentPlugInNameD                = Depend.dependByName "currentPlugInName" currentPlugInNameDef id
            
                module P =
                    let run pin (p:P<_>) = p.r |> run pin
            
                let name       = Var.Create "World"
            
                let checkName (n:string) = if n = "World".[0..n.Length-1] || n.Length <= 1 then "<---- Please enter your name" else "" 
            
                let enterName  = ! checkName             <! name
                let now        = ! (fun _ -> nowStamp()) <! name
            
                let sayHello  =
                    let sayHello_0 = ! Doc.Concat <& "Hello @{name}!" <! enterName
                    let sayHello_1 = ! Doc.Concat <& "How are you?"
                    ! Doc.Concat <& sayHello_0       <! sayHello_1
            
                let aString = Var.Lens aV string (fun _ -> int)
            
                let main0 = ! concat <! aV <* 3.2
                let main1 = !(sprintf "result = %s %s") <! main0 <* "main0"
                let main  = ! h3 <& "color:@{name}; background:red; click=@{AppFramework.Hello}" <& "MAIN:" <! main1 <! main1 <! ":" <! sayHello <! ":" <! " Más >> " <! sayHello <! " <<"
            
                let main2 = makeAViewDoc <| fun () -> h4 [ attr.styleDyn <| V("color:" + name.V) ] [ text "MAIN2:" ; Doc.TextView name.View] 
            
                let appFwk = ! div <& "color:@{name}" <& "@{AppFramework.AppFwkClient}"
                let split  = ! (LayoutEngine.variableSplitter false 0. 50. 100.) <& appFwk <& main
                let split2 = ! (LayoutEngine.variableSplitter false 0. 50. 100.) <& appFwk <& main2
            
                let callDocPFn pin pf = pf |> P.run pin |> callDoc
            
                //let pName = PlugInName "NewLY" 
            //
                //AF.plugin {
                //    plgName pName.Id
                //    plgVar  "name"      name
                //    plgVar  "a"         aString
                //    plgDoc  "split"     (lazy         (split      |> callDocPFn pName ) )
                //    plgDoc  "split2"    (lazy         (split2     |> callDocPFn pName ) )
                //    plgDoc  "main"      (lazy         (main       |> callDocPFn pName ) )
                //    plgDoc  "main2"     (lazy          main2                            )
                //    plgDoc  "sayHello"  (lazy         (sayHello   |> callDocPFn pName ) )
                //    plgDoc  "sayHello2" (lazy         (sayHello   |> callDocPFn pName ) )
                //}
                //|> AF.addPlugIn
            
            
                //[< SPAEntryPoint >]
                //let mainProgram() =
                //    do (StartAppFramework.startWithHtmlD 
                //        |> Depend.resolver [
                //            "AppFrameworkTemplate.html", AppFrameworkTemplate.html + SnippetTemplates.html
                //        ]) ()
            
                open LayoutEngine
                open LayoutEngine.Syntax
            
                let itemRefToTextType = function
                | LocalRef     t  -> Extract0.TReference t
                | FullRef(pr, er) -> Extract0.TReference (sprintf "%s.%s" pr er)
            
                let itemRefToString = function
                | LocalRef     t  -> t
                | FullRef(pr, er) -> (sprintf "%s.%s" pr er)
            
                let textValToTextType = function
                | TvConst  s          -> Extract0.TSimple  s
                | TvActRef (ActRef v)  
                | TvDocRef (DocRef v)  
                | TvVarRef (VarRef v)  
                | TvViwRef (ViwRef v) -> itemRefToTextType v
            
                let (|ActRVs|) = function | ActRef v -> [ TvVarRef (VarRef v)]
            
            //    let attrValToAttrD = Depend.depend {
            //        let! getTextValFromTextTypes = Extract0.getTextValFromTextTypesD
            //        let! getTextVal              = Extract0.getTextValD
            //        return
            //            function
            //            | AtStyle (an,        vs) -> vs, valToStyle an
            //            | AtAct   (an, ActRVs vs) 
            //            | AtAttr  (an,        vs) -> vs, valToAttr  an
            //            >> fun (vs, f) -> 
            //                List.map textValToTextType vs
            //                |> getTextValFromTextTypes
            //                |> f
            //    }
            
                let nodeRefToDocD = Depend.depend {
                    let! getDocFromTextTypes = Extract0.getDocFromTextTypesD
                    return function
                        | NdTextValL       vs ->  vs |> List.map textValToTextType 
                        | NdDocRef (DocRef r)
                        | NdVarRef (VarRef r)
                        | NdViwRef (ViwRef r) -> [ itemRefToTextType r ]
                        >> getDocFromTextTypes
                }
            
                let varRefToVarD = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    return fun (VarRef ref) ->
                        let r = itemRefToString ref
                        AF.splitName currentPlugInName r
                        ||> AF.tryGetVar
                        |>  Option.map (fun v -> v.varVar)
                        |>  Option.defaultWith(fun () -> Var.Make (View.Const <| sprintf "Could not find var %s" r) ignore )
                }
            
                let actRefToActD = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    return fun (ActRef ref) ->
                        let r = itemRefToString ref
                        AF.splitName currentPlugInName r
                        ||> AF.tryGetAct
                        //|>  Option.map (fun v -> v.)
                        |>  Option.defaultWith(fun () -> AF.newAct (PlgElemName r) (fun () -> printfn "Could not find action %s" r) ) 
                }
            
                let getParamD = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    let! getTextValFromSeq = Extract0.getTextValFromSeqD
                    return fun (p:ParmRef) ->
                        let refToSplit = itemRefToString >> AF.splitName currentPlugInName
                        match p with
                        | PrTextValL       ts -> ts|> List.map textValToTextType   |> getTextValFromSeq |> Val.toView |> View.Map box
                        | PrDocRef (DocRef r) -> r |> refToSplit ||> AF.tryGetDocW |> View.Map  (Option.map ((fun d -> d.docDoc     ) >>          box ) >> Option.defaultWith (fun () -> sprintf "missing ref Doc %A"    r :> obj              ) )
                        | PrVarRef (VarRef r) -> r |> refToSplit ||> AF.tryGetVarW |> View.Bind (Option.map ((fun v -> v.varVar.View) >> View.Map box ) >> Option.defaultWith (fun () -> sprintf "missing ref Var %A"    r :> obj |> View.Const) )
                        | PrViwRef (ViwRef r) -> r |> refToSplit ||> AF.tryGetViwW |> View.Bind (Option.map ((fun v -> v.viwView    ) >> View.Map box ) >> Option.defaultWith (fun () -> sprintf "missing ref View %A"   r :> obj |> View.Const) )
                        | PrActRef (ActRef r) -> r |> refToSplit ||> AF.tryGetActW |> View.Map  (Option.map ((fun v -> v.actFunction) >>          box ) >> Option.defaultWith (fun () -> sprintf "missing ref Action %A" r :> obj              ) )
                }
            
                let itemRefToAbsolute lyt = 
                    function
                    | LocalRef     t  -> lyt, t
                    | FullRef(pr, er) -> pr , er
                    >> fun (a,b) -> sprintf "%s.%s" a b
            
                let getParam2D = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    let! getTextValFromSeq = Extract0.getTextValFromSeqD
                    return fun (p:ParmRef) ->
                        let toAbs = itemRefToAbsolute currentPlugInName.Id >> sprintf "@{%s}"
                        let toAbsRef = function 
                        | TvConst s-> s 
                        | TvVarRef (VarRef r) 
                        | TvActRef (ActRef r) 
                        | TvDocRef (DocRef r) 
                        | TvViwRef (ViwRef r) -> toAbs r
                        match p with
                        | PrTextValL       ts -> ts|> Seq.map toAbsRef |> String.concat ""
                        | PrViwRef (ViwRef r) 
                        | PrDocRef (DocRef r) 
                        | PrVarRef (VarRef r) 
                        | PrActRef (ActRef r) -> toAbs r
                }
            
                let getParamTextD = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    let! getTextValFromSeq = Extract0.getTextValFromSeqD
                    return fun (p:ParmRef) f ->
                        let refToSplit = itemRefToString >> AF.splitName currentPlugInName
                        match p with
                        | PrTextValL       ts -> ts|> List.map textValToTextType  |> getTextValFromSeq |> Val.toView       |> View.Get (box >> f)
                        | PrDocRef (DocRef r) -> r |> refToSplit ||> AF.tryGetDoc |> Option.iter ((fun d -> d.docDoc     ) >>           box >> f  )
                        | PrVarRef (VarRef r) -> r |> refToSplit ||> AF.tryGetVar |> Option.iter ((fun v -> v.varVar.View) >> View.Get (box >> f) )
                        | PrViwRef (ViwRef r) -> r |> refToSplit ||> AF.tryGetViw |> Option.iter ((fun v -> v.viwView    ) >> View.Get (box >> f) )
                        | PrActRef (ActRef r) -> r |> refToSplit ||> AF.tryGetAct |> Option.iter ((fun v -> v.actFunction) >>           box >> f  )
                }
            
                let defVar(    lytN, n:string, v) = Var.Create v
                let defAction( lytN, n:string, ActRef ac:ActRef, ps:ParmRef list) =
                    Depend.depend {
                        let! currentPlugInName = currentPlugInNameD
                        let! getParamText      = getParamTextD
                        return (
                            let r     = itemRefToString ac
                            AF.splitName currentPlugInName r
                            ||> AF.tryGetAct
                            |>  Option.map          (fun act -> 
                                if ps = [] then act.actFunction else
                                match act.actFunction, ps with
                                | AF.FunAct1(f,_    ), [ t1     ] -> AF.FunAct0( fun () -> getParamText t1                             f              )
                                | AF.FunAct2(f,_, _ ), [ t1; t2 ] -> AF.FunAct0( fun () -> getParamText t1 (fun p1 -> getParamText t2 (f p1   ) )     )
                                | AF.FunAct2(f,_, n2), [ t1     ] -> AF.FunAct1((fun p2 -> getParamText t1 (fun p1 ->                  f p1 p2) ) , n2)
                                | _ -> AF.FunAct0 (fun () -> printfn "Parameters do not coincide for Action %s %A %A" r ps act )
                            )
                            |>  Option.defaultWith  (fun ()  -> AF.FunAct0 (fun () -> printfn "Action Not Found %s" r) )
                        )
                    } |> run lytN
                let defActions( lytN, n:string, acs:ActRef list) =
                    Depend.depend {
                        let! currentPlugInName = currentPlugInNameD
                        let! getParamText      = getParamTextD
                        return (fun () ->
                            acs
                            |> Seq.iter (fun (ActRef ac) -> 
                                let r     = itemRefToString ac
                                AF.splitName currentPlugInName r
                                ||> AF.tryGetAct
                                |>  Option.map(fun act -> act.actFunction)
                                |>  Option.defaultWith  (fun ()  -> AF.FunAct0 (fun () -> printfn "Action Not Found %s" r) )
                                |>  callFunction () ()
                            )
                        ) |> AF.FunAct0
                    } |> run lytN
                let defView( lytN, n:string, ps:ParmRef list) =
                    Depend.depend {
                        let! currentPlugInName = currentPlugInNameD
                        let! getParam2         = getParam2D
                        let! extractText       = extractTextD
                        return baseView |> View.Bind(fun _ ->
                            ps
                            |> View.traverseSeq (getParam2   >> extractText     )
                            |> View.Map         (Seq.toArray >> String.concat "")
                        )
                    } |> run lytN
                let defViewJS( lytN, n:string, ps:ParmRef list) =
                    Depend.depend {
                        let! currentPlugInName = currentPlugInNameD
                        let! getParam          = getParamD
                        return baseView |> View.Bind(fun _ ->
                            try
                                ps
                                |> View.traverseSeq getParam
                                |> View.Map Seq.toArray
                                |> View.Map (fun ar ->
                                    try match ar with
                                        | [|   |] -> "No JS function specified"
                                        | [| _ |] ->  JavaScript.JS.Eval (unbox ar.[0])                                                         |> string
                                        | _       -> (JavaScript.JS.Eval (unbox ar.[0]) |> unbox<JavaScript.FuncWithArgs<_,obj>>).Call ar.[1..] |> string
                                    with e -> e.Message
                                )
                            with e -> e.Message |> View.Const
                        )
                    } |> run lytN
                let defInput(   lytN, n:string, v   , attrs : AttrVal seq) = makeAViewDoc0 <| fun () -> (AF.errDocf "input deprecated use AF.Input"       )
                let defTextArea(lytN, n:string, v   , attrs : AttrVal seq) = makeAViewDoc0 <| fun () -> (AF.errDocf "TextArea deprecated use AF.TextArea" )
                let defElement( lytN, n:string, elem, attrs : ParmRef, docs:NodeRef list) = 
                    Depend.depend {
                        let! nodeRefToDoc  = nodeRefToDocD
                        let! extractAts    = extractAtsD
                        let! getParam2     = getParam2D
                        return
                            makeAViewDoc0 <| fun () ->
                                try
                                    Doc.Element elem
                                        <| extractAts (getParam2 attrs)
                                        <| (docs |> Seq.map nodeRefToDoc )
                                    :> Doc
                                with e -> text e.Message
                    } |> run   lytN
                let defConcat( lytN, n:string, docs:NodeRef list) = 
                    Depend.depend {
                        let! nodeRefToDoc  = nodeRefToDocD
                        return
                            makeAViewDoc0 <| fun () ->
                                docs |> Seq.map nodeRefToDoc |> Doc.Concat
                    } |> run   lytN
                let defDocF(   lytN, n:string, DocRef dc, ds:ParmRef list) =
                    Depend.depend {
                        let! currentPlugInName    = currentPlugInNameD
                        let! getParam2            = getParam2D
                        let  getP                 = getParam2
                        let rec passParm          = function
                            | AF.DocFunction.FunDoc0 f0           , _    ->  AF.DocFunction.JustDoc( f0()                )
                            | df                                  , []   ->                          df
                            | AF.DocFunction.JustDoc ld           , _    ->  AF.DocFunction.JustDoc  ld
                            | AF.DocFunction.FunDoc1(f1,_        ), a::r ->  AF.DocFunction.FunDoc0(fun () ->  getP a  |> f1 )
                            | AF.DocFunction.FunDoc2(f2,_,b      ), a::r -> (AF.DocFunction.FunDoc1(     f2 <| getP a,b      ),r) |> passParm
                            | AF.DocFunction.FunDoc3(f3,_,b,c    ), a::r -> (AF.DocFunction.FunDoc2(     f3 <| getP a,b,c    ),r) |> passParm
                            | AF.DocFunction.FunDoc4(f4,_,b,c,d  ), a::r -> (AF.DocFunction.FunDoc3(     f4 <| getP a,b,c,d  ),r) |> passParm
                            | AF.DocFunction.FunDoc5(f5,_,b,c,d,e), a::r -> (AF.DocFunction.FunDoc4(     f5 <| getP a,b,c,d,e),r) |> passParm
                        let lyt, elem = itemRefToString dc |> splitName currentPlugInName
                        return
                            lazy (
                                AF.tryGetDoc lyt elem
                                |> Option.map (fun d -> passParm(d.docDoc.Value, ds) )
                                |> Option.defaultWith  (fun ()  -> sprintf "Missing doc: %A" dc |> AF.errDoc |> AF.DocFunction.JustDoc)
                            )
                    } |> run   lytN
                let defButton( lytN, n:string, ac, attrs : AttrVal seq, tx:TextVal list) = makeAViewDoc0 <| fun () -> (AF.errDocf "Button deprecated use button \"click=@{Action}\"" )
            
                let defSplitter(lytN, n, v , m, DocRef l, DocRef r) =
                    Depend.depend {
                        let! getDocFromTextTypes = Extract0.getDocFromTextTypesD
                        return fun () -> 
                            let getDoc d = makeAViewDoc (fun () -> itemRefToTextType d |> List.singleton |> getDocFromTextTypes)
                            match m with
                            | Fixed    (pixel,    first) ->    fixedSplitter v pixel first   (getDoc l) (getDoc r)
                            | Variable (min, value, max) -> variableSplitter v min value max (getDoc l) (getDoc r)
                        
                    } |> run lytN
            
                let defTemplate(lytN, n, tmpDef : TemplateDef) =
                    Depend.depend {
                        let! nodeRefToDoc  = nodeRefToDocD
                        let! varRefToVar   = varRefToVarD
                        let! extractText   = extractTextD
                        let! extractAts    = extractAtsD
                        let! actRefToAct   = actRefToActD
                        let! getParam2     = getParam2D
                        return
                            makeAViewDoc0 <| fun () ->
                                let eventAct act = fun (el:JavaScript.Dom.Element) (ev:JavaScript.Dom.Event) -> act.actFunction |> AF.callFunction el ev
                                try
                                    let attrs = extractAts (getParam2 tmpDef.attrs)
                                    Client.Doc.LoadLocalTemplates "local"
                                    seq {
                                        yield!  tmpDef.vars    |> Seq.map (fun (nm, vr) -> TemplateHole.VarStr(  nm.ToLower(), varRefToVar               vr  ) )
                                        yield!  tmpDef.views   |> Seq.map (fun (nm, wr) -> TemplateHole.TextView(nm.ToLower(), extractText  (getParam2   wr) ) )
                                        yield!  tmpDef.docs    |> Seq.map (fun (nm, nr) -> TemplateHole.Elt(     nm.ToLower(), nodeRefToDoc (NdDocRef    nr) ) )
                                        yield!  tmpDef.actions |> Seq.map (fun (nm, ar) -> TemplateHole.Event(   nm.ToLower(), eventAct     (actRefToAct ar) ) )
                                    }
                                    |> (if Seq.isEmpty attrs then id else TemplateHole.Attribute("attrs", Attr.Concat attrs) |> Seq.singleton |> Seq.append)
                                    |> Client.Doc.NamedTemplate "local" (tmpDef.tmpName.ToLower() |> Some)
                                    ///                                //    | TDText  v   -> TemplateHole.Text(    nm.ToLower(), v )
                                    ///                                //    | TDView  vw  -> TemplateHole.TextView(nm.ToLower(), vw)
                                    ///                                //    | TDAct   act -> TemplateHole.Event(   nm.ToLower(), (fun el ev -> act.actFunction |> AF.callFunction el ev ))
                                    ///                                TemplateHole.Elt(nm.ToLower(), sprintf "Not implemented: %s" txt |> AF.errDoc) 
                                with e -> text e.Message
                    } |> run   lytN
            
                let initVal = "-<InitValue>-"
            
                let defVarM0      = Memoize.memoize defVar
                let defVarM(l,n,i)= defVarM0(l,n,initVal) |>! fun v -> if v.Value = initVal then v.Set i
                let defDocFM      = Memoize.memoize defDocF
                let defActionM    = Memoize.memoize defAction
                let defActionsM   = Memoize.memoize defActions
                let defButtonM    = Memoize.memoize defButton
                let defInputM     = Memoize.memoize defInput
                let defTextAreaM  = Memoize.memoize defTextArea
                let defElementM   = Memoize.memoize defElement
                let defConcatM    = Memoize.memoize defConcat
                let defViewM      = Memoize.memoize defView
                let defViewJSM    = Memoize.memoize defViewJS
                let defSplitterM  = Memoize.memoize defSplitter
                let defTemplateM  = Memoize.memoize defTemplate
            
                let generateEntries lytN =
                    Seq.choose(function
                        | n, EnVarDef ( VarDef      v                         ) -> defVarM(     lytN, n, v          ) |> AF.newVar  (AF.PlgElemName n) |> EntryVar    |> Some
                    (**)| n, EnDocDef ( DcSplitter (SplitterDef(v , m, l, r) )) -> defSplitterM(lytN, n, v , m, l, r) |> AF.newDoc0 (AF.PlgElemName n) |> EntryDoc    |> Some
                    (**)| n, EnDocDef ( DcButton   (ButtonDef(  ac, ats, tx) )) -> defButtonM(  lytN, n, ac, ats, tx) |> AF.newDoc0 (AF.PlgElemName n) |> EntryDoc    |> Some
                    (**)| n, EnDocDef ( DcInput    (InputDef(   v , ats    ) )) -> defInputM(   lytN, n, v , ats    ) |> AF.newDoc0 (AF.PlgElemName n) |> EntryDoc    |> Some
                    (**)| n, EnDocDef ( DcTextArea (TextAreaDef(v , ats    ) )) -> defTextAreaM(lytN, n, v , ats    ) |> AF.newDoc0 (AF.PlgElemName n) |> EntryDoc    |> Some
                        | n, EnDocDef ( DcConcat   (ConcatDef            ds  )) -> defConcatM(  lytN, n,          ds) |> AF.newDoc0 (AF.PlgElemName n) |> EntryDoc    |> Some
                        | n, EnDocDef ( DcElement  (ElementDef( el, ats, ds) )) -> defElementM( lytN, n, el, ats, ds) |> AF.newDoc0 (AF.PlgElemName n) |> EntryDoc    |> Some
                        | n, EnDocDef ( DcDocF     (DocFDef(    dc,      ds) )) -> defDocFM(    lytN, n, dc,      ds) |> AF.newDocL (AF.PlgElemName n) |> EntryDoc    |> Some
                        | n, EnActDef ( ActDef               (  ac, parms  )  ) -> defActionM(  lytN, n, ac, parms  ) |> AF.newActF (AF.PlgElemName n) |> EntryAction |> Some
                        | n, EnActDefs( ActDefs                 acs           ) -> defActionsM( lytN, n, acs        ) |> AF.newActF (AF.PlgElemName n) |> EntryAction |> Some
                        | n, EnViwDef ( ViwDef                      parms     ) -> defViewM(    lytN, n,     parms  ) |> AF.newViw  (AF.PlgElemName n) |> EntryView   |> Some
                        | n, EnVJSDef ( VJSDef                      parms     ) -> defViewJSM(  lytN, n,     parms  ) |> AF.newViw  (AF.PlgElemName n) |> EntryView   |> Some
                        | n, EnDocDef ( DcTemplate tmpDef                     ) -> defTemplateM(lytN, n,     tmpDef ) |> AF.newDoc0 (AF.PlgElemName n) |> EntryDoc    |> Some
                        | n, EnPlgRef  _ -> None
                        | n, EnPlgDef  _ -> None
                    )
            
                //let parseNewLayout lytN =
                //    LayoutEngine.parseEntries lytN
                //    >> Seq.choose(function Ok p  -> Some p | Error m -> print m ; None)
                //    >> generateEntries lytN
            
                let addNewLayout (lyt:LayoutEngine) =
                    let parseW      = lyt.lytDefinition.View |> View.Map (LayoutEngine.parseEntries lyt.lytName)
                    let errorsW     = parseW |> View.Map(Seq.choose(function Error msg -> Some msg |_-> None) >> String.concat "\n")
                    let defsW       = parseW |> View.Map(Seq.choose(function Ok    def -> Some def |_-> None) >> generateEntries lyt.lytName)
                    let entries     = [ AF.newVar (AF.PlgElemName "Layout"   ) lyt.lytDefinition |> EntryVar
                                        AF.newViw (AF.PlgElemName "ParseMsgs") errorsW           |> EntryView ]
                    defsW |> View.Sink( Seq.append entries >> refreshEntries lyt.lytName )
            
                let addLayout name content =
                    newLyt (AF.PlugInName name) content
                    |> addNewLayout
            
                let addNewLayoutAct (name:obj) (layout:obj) =
                    let name'   = if name   <> null                 then unbox name   else System.Guid.NewGuid() |> string |> fun s -> "Lyt_" + s.Replace("-", "")
                    let layout' = if layout <> null && name <> null then unbox layout else """
                                        perc  Var "50"
                                        perc2 Var "50"
                                        gap  Var "5px"
            
                                        Ask1 div "background:lightblue; height:100%"
                                        : Doc AF.InputLabel "placeholder=Type percentage here..." "Percentage (%):" perc
            
                                        Ask2a div "background:pink; height:100%"
                                        : Doc AF.InputLabel "placeholder=Type percentage here..." "Percentage (%):" perc2
            
                                        Ask2b div "background:lightgreen; height:100%"
                                        : Doc AF.InputLabel "placeholder=Type gap here..." "Gap:" gap
            
                                        dragSplitter  Action AF.DragSplitter "@{PlugInName}.perc"
                                        dragSplitter2 Action AF.DragSplitter "@{PlugInName}.perc2"
            
                                        Ask2 template HSplitter1 "height:100%" "gap:gap" "doc1: Ask2a; doc2:Ask2b" "perc:perc2" "MouseDown:dragSplitter2"
            
                                        main div ""
                                        :    template VSplitter1  "height:100%" "gap:gap" "doc1: Ask1 ; doc2:Ask2 " "perc:perc " "MouseDown:dragSplitter "
            
                                        split horizontal 0-50-100 AppFramework.AppFwkClient main
                                    """ |> String.unindentStr
                    addLayout name' layout'
            
                if IsClient then
                    AF.tryGetPlugIn AF.defPlugInName
                    |> Option.iter(fun plg ->
                        plg.plgActions.Add <| ( AF.newActF <| AF.PlgElemName  "AddLayout" <| AF.FunAct2(addNewLayoutAct, "[Name]", "[Layout]") )
                    )
            
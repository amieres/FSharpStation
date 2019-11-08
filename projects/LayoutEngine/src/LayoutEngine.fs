#nowarn "3242"
#nowarn "42"
////-d:FSharpStation1573054420242 -d:TEE -d:WEBSHARPER
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
//#nowarn "42"
/// Root namespace for all code
//#define FSharpStation1573054420242
#if INTERACTIVE
module FsRoot   =
#else
namespace FsRoot
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
            
            /// taken from http://fssnip.net/7UH/title/Generalized-Units-of-Measure-Revisited-using-method-overloading
            //#nowarn "42"
            [<AutoOpen>]
            module UoM = 
            
                open System
            
                [<MeasureAnnotatedAbbreviation>] type bool<          [<Measure>] 'm> = bool
                [<MeasureAnnotatedAbbreviation>] type uint64<        [<Measure>] 'm> = uint64
                [<MeasureAnnotatedAbbreviation>] type Guid<          [<Measure>] 'm> = Guid
                [<MeasureAnnotatedAbbreviation>] type string<        [<Measure>] 'm> = string
                [<MeasureAnnotatedAbbreviation>] type TimeSpan<      [<Measure>] 'm> = TimeSpan
                [<MeasureAnnotatedAbbreviation>] type DateTime<      [<Measure>] 'm> = DateTime
                [<MeasureAnnotatedAbbreviation>] type DateTimeOffset<[<Measure>] 'm> = DateTimeOffset
            
                module private Unsafe = let inline cast<'a, 'b> (a : 'a) : 'b = (# "" a : 'b #)
            
                type UoM =
                    static member inline Tag<  [<Measure>]'m                 > (x : bool               ) : bool<          'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : int                ) : int<           'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : int64              ) : int64<         'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : uint64             ) : uint64<        'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : float              ) : float<         'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : decimal            ) : decimal<       'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : Guid               ) : Guid<          'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : string             ) : string<        'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : TimeSpan           ) : TimeSpan<      'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : DateTime           ) : DateTime<      'm > = Unsafe.cast x
                    static member inline Tag<  [<Measure>]'m                 > (x : DateTimeOffset     ) : DateTimeOffset<'m > = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : bool<          'm >) : bool                = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : int<           'm >) : int                 = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : int64<         'm >) : int64               = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : uint64<        'm >) : uint64              = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : float<         'm >) : float               = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : decimal<       'm >) : decimal             = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : Guid<          'm >) : Guid                = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : string<        'm >) : string              = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : TimeSpan<      'm >) : TimeSpan            = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : DateTime<      'm >) : DateTime            = Unsafe.cast x
                    static member inline Untag<[<Measure>]'m                 > (x : DateTimeOffset<'m >) : DateTimeOffset      = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : bool<          'm1>) : bool<          'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : int<           'm1>) : int<           'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : int64<         'm1>) : int64<         'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : uint64<        'm1>) : uint64<        'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : float<         'm1>) : float<         'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : decimal<       'm1>) : decimal<       'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : Guid<          'm1>) : Guid<          'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : string<        'm1>) : string<        'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : TimeSpan<      'm1>) : TimeSpan<      'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : DateTime<      'm1>) : DateTime<      'm2> = Unsafe.cast x
                    static member inline Cast< [<Measure>]'m1, [<Measure>]'m2> (x : DateTimeOffset<'m1>) : DateTimeOffset<'m2> = Unsafe.cast x
            
            (*
                [<Measure>] type m
                [<Measure>] type n
            
                let x = UoM.tag<m> "string"
                let y = UoM.cast<m,n> x
                let z = UoM.untag y
            *)
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
            /// runs only once even if multiple calls happen before the delay
            let delayed delay doF =
                let cancellationTokenSourceO = ref None
                fun parm -> 
                    let asy = async {
                        do! Async.Sleep delay
                        doF parm
                    } 
                    !cancellationTokenSourceO |> Option.iter (fun (tokenSource:System.Threading.CancellationTokenSource) -> tokenSource.Cancel())
                    cancellationTokenSourceO := Some <| new System.Threading.CancellationTokenSource()
                    Async.Start(asy, cancellationToken = (!cancellationTokenSourceO).Value.Token)
            
            
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
                    let setPrior v = if (!prior).Value <> v then (!prior).Value <- v 
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
                        [< Inline """$global.FsRoot.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New""" >] static member NewPointer = X<_>
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
                        [< Inline """$global.FsRoot.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New""" >] static member NewPointer = X<_>
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
                                let drag (ev: Dom.Event) =
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
                    
            [< JavaScriptExport >]
            module AppFramework =
                open WebSharper.JavaScript
            
                type PlugInVar = { 
                    varName        : string
                    varVar         : Var<string>
                }
            
                type PlugInView = {
                    viwName        : string
                    viwView        : View<string>
                }
            
                type DocFunction =
                | LazyDoc of Lazy<Doc>
                | FunDoc1 of (                                        string -> Doc) * string                                     
                | FunDoc2 of (                              string -> string -> Doc) * string * string                            
                | FunDoc3 of (                    string -> string -> string -> Doc) * string * string * string                   
                | FunDoc4 of (          string -> string -> string -> string -> Doc) * string * string * string * string          
                | FunDoc5 of (string -> string -> string -> string -> string -> Doc) * string * string * string * string * string  
            
                type PlugInDoc = {
                    docName        : string
                    docDoc         : DocFunction
                }
            
                type ActFunction =
                | FunAct0 of (                                         unit -> unit)
                | FunAct1 of (                                          obj -> unit) * string
                | FunAct2 of (                                   obj -> obj -> unit) * string * string
            
                type PlugInAction = {
                    actName        : string
                    actFunction    : ActFunction
                    actEnabled     : View<bool>
                }
            
                type PlugInQuery = {
                    qryName        : string
                    qryFunction    : obj -> obj
                }
            
                type PlugIn = {
                    plgName        : string
                    plgVars        : ListModel<string, PlugInVar   >
                    plgViews       : ListModel<string, PlugInView  >
                    plgDocs        : ListModel<string, PlugInDoc   >
                    plgActions     : ListModel<string, PlugInAction>
                    plgQueries     : ListModel<string, PlugInQuery >
                }
             
                let private plugIns = ListModel (fun plg -> plg.plgName)
            
                let mainDocV = Var.Create "AppFramework.AppFwkClient"
                //let titleV   = Var.Create "AppFramework.mainDocV"
            
                open WebSharper.UI.Templating
            
                let [< Literal >] TemplateFileName =  @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\website\AppFramework.html"
                //let [< Literal >] TemplateFileName =  @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\FSharpStation\website\Templates.html"
            
                type AppFwkTemplate = Templating.Template<TemplateFileName, ClientLoad.FromDocument, ServerLoad.WhenChanged, LegacyMode.New>
            
                let defaultPlugIn() = {
                        plgName    = ""
                        plgVars    = ListModel (fun (var:PlugInVar   ) -> var.varName)
                        plgViews   = ListModel (fun (viw:PlugInView  ) -> viw.viwName)
                        plgDocs    = ListModel (fun (doc:PlugInDoc   ) -> doc.docName)
                        plgActions = ListModel (fun (act:PlugInAction) -> act.actName)
                        plgQueries = ListModel (fun (qry:PlugInQuery ) -> qry.qryName)
                    }
            
                let splitName lytNm = String.splitByChar '.' >>  (fun a -> if a.Length = 1 then (lytNm, a.[0]) else (a.[0],a.[1]) )
            
                let selectionPlugInO = Var.Create <| Some "AppFramework"
                let currentPlugInW   = selectionPlugInO.View |>  View.Map2(fun _ -> Option.bind plugIns.TryFindByKey >> Option.defaultWith defaultPlugIn ) plugIns.View
                let currentPlugInV   = Var.Make currentPlugInW plugIns.Add
            
                let renderPlugIns() = plugIns.DocLens(fun name plug -> 
                    AppFwkTemplate.Tile()
                        .Name(     name                                                      )
                        .Select(   fun _ -> selectionPlugInO.Set <| Some name                )
                        .Selected( if selectionPlugInO.V = Some name then "selected" else "" )
                        .Doc() 
                )
            
                let renderVars() = 
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgVars |> Seq.map (fun v -> plg, v))
                    |> Doc.BindSeqCachedBy (fun (plg, var) -> plg.plgName, var.varName) (fun (plg, var) -> 
                        AppFwkTemplate.NameValueInput()
                            .Name(    var.varName  ) 
                            .Value(   var.varVar   )
                            .Doc() 
                    ) 
            
                let renderViews() = 
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgViews |> Seq.map (fun v -> plg, v))
                    |> Doc.BindSeqCachedBy (fun (plg, viw) -> plg.plgName, viw.viwName) (fun (plg, viw) -> 
                        AppFwkTemplate.NameValue()
                            .Name(    viw.viwName  )
                            .Value(   viw.viwView  )
                            .Doc() 
                    ) 
            
                let renderDocs() =
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgDocs |> Seq.map (fun v -> plg, v))
                    |> Doc.BindSeqCachedBy (fun (plg, doc) -> plg.plgName, doc.docName) (fun (plg, doc) -> 
                        let parms = match doc.docDoc with
                                    | LazyDoc _                          -> ""
                                    | FunDoc1(_, p1                    ) -> [ p1                ] |> String.concat ", " |> sprintf "(%s)"
                                    | FunDoc2(_, p1 , p2               ) -> [ p1; p2            ] |> String.concat ", " |> sprintf "(%s)"
                                    | FunDoc3(_, p1 , p2 , p3          ) -> [ p1; p2; p3        ] |> String.concat ", " |> sprintf "(%s)"
                                    | FunDoc4(_, p1 , p2 , p3 , p4     ) -> [ p1; p2; p3; p4    ] |> String.concat ", " |> sprintf "(%s)"
                                    | FunDoc5(_, p1 , p2 , p3 , p4 , p5) -> [ p1; p2; p3; p4; p5] |> String.concat ", " |> sprintf "(%s)"
                        AppFwkTemplate.Tile()
                            .Name(     doc.docName + parms)
                            .Select(   fun _ -> currentPlugInW |> View.Get (fun plg ->  mainDocV.Set <| plg.plgName + "." + doc.docName ) )
                            .Doc() 
                    ) 
            
                let callFunction p1 p2 actF =
                    match actF with
                    | FunAct0(f      ) -> f ()
                    | FunAct1(f, _   ) -> f p1
                    | FunAct2(f, _, _) -> f p1 p2
            
                let renderActions() = 
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgActions |> Seq.map (fun v -> plg, v))
                    |> Doc.BindSeqCachedBy (fun (plg, act) -> plg.plgName, act.actName) (fun (plg, act) -> 
                        let parms = match act.actFunction with
                                    | FunAct0(_        ) -> ""
                                    | FunAct1(_, p1    ) -> [ p1      ] |> String.concat ", " |> sprintf "(%s)"
                                    | FunAct2(_, p1, p2) -> [ p1 ; p2 ] |> String.concat ", " |> sprintf "(%s)"
                        act.actEnabled
                        |> View.Map (function
                            | true  -> AppFwkTemplate.Action() 
                                        .Name(     act.actName + parms                             )
                                        .Click(    fun ev -> act.actFunction |> callFunction ev () )
                                        .Doc() 
                            | false -> AppFwkTemplate.ActionDisabled() 
                                        .Name(     act.actName                                 )
                                        .Click(    fun ev -> act.actFunction |> callFunction ev () )
                                        .Doc() 
                        ) |> Doc.EmbedView
                    ) 
            
                let renderQueries() = 
                    currentPlugInW
                    |> View.Map (fun plg -> plg.plgQueries |> Seq.map (fun v -> plg, v))
                    |> Doc.BindSeqCachedBy (fun (plg, qry) -> plg.plgName, qry.qryName) (fun (plg, qry) -> 
                        AppFwkTemplate.Tile()
                            .Name(    qry.qryName  )
                            .Select(   fun _ -> () |> box |> qry.qryFunction |> unbox |> JS.Alert )
                            .Doc() 
                    ) 
            
                let AppFwkClient = 
                    lazy
                        AppFwkTemplate.AppFwkClient()
                            .PlugIns(     renderPlugIns()           )
                            .PlugInName(  currentPlugInW.V.plgName  )
                            .Vars(        renderVars()              )
                            .Views(       renderViews()             ) 
                            .Docs(        renderDocs()              )
                            .Actions(     renderActions()           )
                            .Queries(     renderQueries()           )
                            .Doc()
            
                let getLazyDoc doc =
                    match doc.docDoc with
                    | LazyDoc ldoc -> ldoc.Value
                    | _ -> Html.div [] [ Html.text <| sprintf "Doc with parameters not allowed here: %A" doc ]
            
                let getMainClientDoc() =
                    plugIns.View
                    |> View.Map2(fun mainDoc plgs -> 
                        plgs |> Seq.tryPick(fun plg ->
                            plg.plgDocs 
                            |> Seq.tryFind(fun doc -> plg.plgName = mainDoc || plg.plgName + "." + doc.docName = mainDoc) 
                            |> Option.map getLazyDoc
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
            
                let newVar name var = { varName = name ; varVar      = var          }
                let newViw name viw = { viwName = name ; viwView     = viw          }
                let newDoc name doc = { docName = name ; docDoc      = LazyDoc doc  }
                let newQry name qry = { qryName = name ; qryFunction = qry          }
                let newAct name fnc = {
                    actName        = name
                    actFunction    = FunAct0 fnc
                    actEnabled     = View.Const true
                }
            
                let newActF name fncF = {
                    actName        = name
                    actFunction    = fncF
                    actEnabled     = View.Const true
                }
                
                let newDocF name docF = { docName = name ; docDoc = docF }
            
                type PlugInBuilder() =
                    member __.Zero() = { defaultPlugIn() with plgName    = "Main" }
                    member this.Yield(()) = this.Zero()
                    member __.For(coll:seq<_>, func) =
                        let ie = coll.GetEnumerator()
                        while ie.MoveNext() do
                            func ie.Current
                    [<CustomOperation("plgName"   )>] member __.Name  ( plg:PlugIn, name               ) = { plg with plgName    =    name }
                    [<CustomOperation("plgVar"    )>] member __.AddVar( plg:PlugIn, name, var          ) = plg.plgVars   .Add(newVar  name var)  ; plg
                    [<CustomOperation("plgDoc"    )>] member __.AddDoc( plg:PlugIn, name, doc          ) = plg.plgDocs   .Add(newDoc  name doc)  ; plg
                    [<CustomOperation("plgDoc2"   )>] member __.AddDoc2(plg:PlugIn, name, doc, p1, p2  ) = plg.plgDocs   .Add(newDocF name (FunDoc2(doc,p1,p2    )))  ; plg
                    [<CustomOperation("plgDoc3"   )>] member __.AddDoc3(plg:PlugIn, name, doc,a,b,c    ) = plg.plgDocs   .Add(newDocF name (FunDoc3(doc,a,b,c    )))  ; plg
                    [<CustomOperation("plgDoc4"   )>] member __.AddDoc4(plg:PlugIn, name, doc,a,b,c,d  ) = plg.plgDocs   .Add(newDocF name (FunDoc4(doc,a,b,c,d  )))  ; plg
                    [<CustomOperation("plgDoc5"   )>] member __.AddDoc5(plg:PlugIn, name, doc,a,b,c,d,e) = plg.plgDocs   .Add(newDocF name (FunDoc5(doc,a,b,c,d,e)))  ; plg
                    //[<CustomOperation("plgDocDyn" )>] member __.AddDocF(plg:PlugIn, name, docF)  = plg.plgDocs   .Add(newDoc name (lazy LayoutEngine.turnToView docF) ) ; plg
                    [<CustomOperation("plgQuery"  )>] member __.AddQry( plg:PlugIn, name, qry          ) = plg.plgQueries.Add(newQry  name qry) ; plg
                    [<CustomOperation("plgAct"    )>] member __.AddAct( plg:PlugIn, name, act          ) = plg.plgActions.Add(newAct  name act) ; plg
                    [<CustomOperation("plgAct1"   )>] member __.AddAct1(plg:PlugIn, name, act, p1      ) = plg.plgActions.Add(newActF name (FunAct1(act,p1   )) ) ; plg
                    [<CustomOperation("plgAct2"   )>] member __.AddAct2(plg:PlugIn, name, act, p1, p2  ) = plg.plgActions.Add(newActF name (FunAct2(act,p1,p2)) ) ; plg
                    [<CustomOperation("plgActOpt" )>] member __.AddActO(plg:PlugIn, name,         actO ) = 
                                                        match actO with 
                                                        | Some act -> plg.plgActions.Add(newAct name act)
                                                        | None     -> ()
                                                        plg
                    //[<CustomOperation("mainDoc")>] member __.InsDoc(plg:PlugIn, name, doc) = plg.plgDocs.    = [| newDoc name doc |] |> Array.append <| plg.plgDocs    }
                    [<CustomOperation("plgView"   )>] member __.AddViw( plg:PlugIn, name, viw )  = plg.plgViews.Add(newViw name viw) ; plg
                    [<CustomOperation("plgMerge"  )>] member __.Merge ( plg:PlugIn, prefix, p2:PlugIn) = 
                                                        plg.plgVars   .AppendMany(p2.plgVars    |> Seq.map (fun v -> { v with varName = prefix + v.varName } ) ) 
                                                        plg.plgViews  .AppendMany(p2.plgViews   |> Seq.map (fun w -> { w with viwName = prefix + w.viwName } ) ) 
                                                        plg.plgDocs   .AppendMany(p2.plgDocs    |> Seq.map (fun d -> { d with docName = prefix + d.docName } ) ) 
                                                        plg.plgActions.AppendMany(p2.plgActions |> Seq.map (fun a -> { a with actName = prefix + a.actName } ) ) 
                                                        plg.plgQueries.AppendMany(p2.plgQueries |> Seq.map (fun q -> { q with qryName = prefix + q.qryName } ) ) 
                                                        plg
            
                let plugin = PlugInBuilder()
            
            
                let tryGetPlugInW plgName = plugIns.TryFindByKeyAsView plgName
            
                let tryGetVarW plgName varName = tryGetPlugInW plgName |> View.Bind (function Some plg -> plg.plgVars   .TryFindByKeyAsView varName |_-> View.Const None ) 
                let tryGetViwW plgName viwName = tryGetPlugInW plgName |> View.Bind (function Some plg -> plg.plgViews  .TryFindByKeyAsView viwName |_-> View.Const None ) 
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
                                | TDAct   act  -> View.Const <| (TDText  <| sprintf "Unexpected Action @{%s}" act.actName )
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
                                            | TDText  v   -> el.SetAttribute(name.Trim(), v.Trim())
                                            | TDAct   act -> el.AddEventListener(name.Trim(), (fun (ev:Dom.Event) -> act.actFunction |> callFunction el ev), false)
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
                                            | TDAct   act -> sprintf "@{%s}" act.actName
                                        )
                                        |> Attr.DynamicStyle (name.Trim())
                                        |> Some
                                |_      -> None )
                ]
            
                type [< Measure >] PlugInNameM
                type PlugInName= string<PlugInNameM>
            
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
            
                    let textAtt : Val<string> -> Attr = failwithf "textAtt not implemented"
            
                let choiceToString   = function Choice1Of2 v -> v | Choice2Of2 r -> sprintf "@{expecting string, got Action: %A}" r
                let valToStyle atn = function
                | VConst(Choice1Of2 s) -> Attr.Style  atn s
                | VView             w  -> Attr.DynamicStyle atn (View.Map choiceToString w)
                |                   v  -> failwithf "Illegal reference %A" v
            
                let valToAttr atn = function
                | VConst(Choice1Of2 s) -> Attr.Create atn s
                | VView             w  ->
                    w |> Attr.DynamicCustom(fun el -> function
                        | Choice1Of2 s   -> el.SetAttribute(atn, s.Trim())
                        | Choice2Of2 act -> el.AddEventListener(atn, (fun (ev:JavaScript.Dom.Event) -> (act:PlugInAction).actFunction |> callFunction el ev), false)
                    )
                | v -> failwithf "Illegal value %A" v
            
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
                            >> function
                            | [ d ] -> d
                            |   ls  -> Doc.Concat ls
                    }
            
                    let extractDocD = Depend.depend {
                        let! getDocFromTextTypes = getDocFromTextTypesD
                        return getTextData >> getDocFromTextTypes
                    }
            
                    let getTextValFromSeqD = Depend.depend {
                        let! getTextActView = getTextActViewFromReferenceD
                        return 
                            View.traverseListApp (function
                                | TSimple    v -> View.Const     v
                                | TReference r -> getTextActView r |> View.Map choiceToString
                            )
                            >> View.Apply (View.Const (String.concat "" >> Choice1Of2))
                            >> VView
                    }
            
                    let getTextValFromTextTypesD = Depend.depend {
                        let! getTextActView    = getTextActViewFromReferenceD
                        let! getTextValFromSeq = getTextValFromSeqD
                        return function
                            | [ TSimple    v ] -> VConst (Choice1Of2     v)
                            | [ TReference r ] -> VView  (getTextActView r)
                            | vs               -> getTextValFromSeq vs
                    }
            
                    let getTextValD = getTextData >*> getTextValFromTextTypesD
            
                    let extractAtsD = Depend.depend {
                        let! getTextVal = getTextValD
                        return fun (txt:string) ->
                            txt.Split ';'
                            |> Seq.map    (fun t -> t.Trim())
                            |> Seq.filter ((<>) "")
                            |> Seq.map    (fun t -> 
                                match t.Split ':' with
                                | [| atn ; sty |] -> getTextVal sty |> valToStyle atn
                                | _ ->
                                match t.Split '=' |> Array.map (fun t -> t.Trim()) with
                                | [| atn ; atv |] -> getTextVal atv |> valToAttr  atn   
                                | _ -> failwithf "single reference attribute not implemented %s" t
            
                            )
                    }
            
                    let extractTextD = Depend.depend {
                        let! getTextVal = getTextValD
                        return fun (txt:string) ->
                            getTextVal txt 
                            |> Val.map choiceToString
                            |> Val.toView
                    }
            
                let currentPlugInNameDef : PlugInName = UoM.Tag<_> "NewLYx"
                let currentPlugInNameD                = Depend.dependByName "currentPlugInName" currentPlugInNameDef id
            
                let getDocD = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    return fun r -> 
                        let pName, oName = splitName (UoM.Untag currentPlugInName) r
                        tryGetDocW pName oName
                        |> Doc.BindView (fun docO -> 
                            docO
                            |> Option.map getLazyDoc
                            |> Option.defaultWith (fun () ->
                                tryGetWoWW pName oName
                                |> View.Map (Option.defaultWith (fun () -> sprintf "Reference not found @{%s}" r))
                                |> Doc.TextView
                            )
                        )
                }
            
                let getTextActViewD = Depend.depend {
                    let! currentPlugInName = currentPlugInNameD
                    return fun r ->
                        let pName, oName = splitName (UoM.Untag currentPlugInName) r
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
                        let! getDoc         = getDocD
                        let! getTextActView = getTextActViewD
                        return 
                            d
                            |> Depend.resolver [
                                "getDocFromReference"        , getDoc         :> obj
                                "getTextActViewFromReference", getTextActView :> obj
                                "currentPlugInName"          , pin            :> obj
                            ]
                    } |> Depend.resolver [ "currentPlugInName", pin ]
            
                let extractTextD    = Extract0.extractTextD
                let extractDocD     = Extract0.extractDocD
                let extractAtsD     = Extract0.extractAtsD
                let extractAttD     = depend { 
                    let! extractAts = extractAtsD
                    return fun p -> extractAts p |> Attr.Concat 
                }
            
                let runDef = run (UoM.Tag "AppFramework")
            
                let getParmRef var = 
                    var
                    |> String.delimitedO "@{" "}"
                    |> Option.map (fun (a,b,c) -> b)
                    |> Option.defaultValue var
                    |>  splitName ""
            
                let inputFile attrs labelName actName =
                    splitName "AppFramework" actName
                    ||> tryGetAct
                    |> Option.map(fun act -> 
                        Html.div (getAttrs "AppFramework" attrs) [
                            Html.div              [ attr.``class`` "input-group"       ] [
                                Html.span         [ attr.``class`` "input-group-btn"   ] [ 
                                    Html.label    [ attr.``class`` "btn"               ] [ 
                                        Html.text labelName
                                        Html.input[ attr.``class`` "form-control" 
                                                    attr.``type`` "file" 
                                                    Attr.Style "display" "none" 
                                                    Html.on.click (fun el ev -> el?value <- "")
                                                    Html.on.change(fun el ev -> act.actFunction |> callFunction el () )
                                                    ] []
                                    ]
                                ]
                                //(if doc <> "" then singleDoc lytNm [ UnQuoted doc ] else Doc.Empty)
                            ]
                        ]
                    ) |> Option.defaultWith(fun () ->  sprintf "Action not found %s" actName |> errDoc )
            
                let inputLabel attrs labelName varName =
                    Depend.depend {
                        let! extractAts = extractAtsD
                        let! extractDoc = extractDocD
                        let! currentPlugInName = currentPlugInNameD
                        return
                            getParmRef varName
                            ||> tryGetVarW
                            |> Doc.BindView (
                                Option.map(fun var -> 
                                    Html.div (extractAts attrs) [
                                        Html.div      [ attr.``class`` "input-group"       ] [
                                            Html.span [ attr.``class`` "input-group-addon" ] [ extractDoc labelName ]
                                            Doc.Input [ attr.``class`` "form-control"      ]   var.varVar
                                        ]
                                    ]
                                ) 
                                >> Option.defaultWith(fun () ->  sprintf "Var not found %s" varName |> errDoc )
                            )
                    } |> runDef
            
                let none x = Html.span [][]
            
                let htmlDoc lytNm html =
                    getTextData lytNm html
                    |> Doc.BindView(function
                        | TDText  v   -> Doc.Verbatim v
                        | TDAct   act -> sprintf "HtmlDoc: unexpected action %A" act |> errDoc
                    )
            
                let setVar  (varN   :obj   ) (value:obj   ) = splitName "AppFramework" (unbox varN) ||> tryGetVar |> Option.iter(fun v -> v.varVar.Set (unbox value)       )
                let trigAct (trigger:string) (actN :string) =
                    getParmRef trigger
                    ||> tryGetWoWW
                    |> View.consistent
                    |> View.Map(function
                        | Some txt ->
                            getParmRef actN
                            ||> tryGetAct 
                            |> function
                                | Some a -> callFunction () () a.actFunction
                                | None -> ()
                            ""
                        | None -> ""
                    ) |>  Doc.TextView
            
                let select attrs none vals var = 
                    Depend.depend {
                        let! extractAts  = extractAtsD
                        let! extractText = extractTextD
                        return
                            getParmRef var
                            ||> tryGetVarW
                            |> Doc.BindView (
                                Option.map (fun v ->
                                    let valsW = V ((extractText vals).V.Split ';' |> Seq.toList)
                                    let varO  = 
                                        Var.Make 
                                            (V (match v.varVar.V with 
                                                | s when Seq.contains (s.Trim()) valsW.V -> Some(s.Trim()) 
                                                |_-> None )) 
                                            (function None ->  v.varVar.Set "" | Some s -> valsW |> View.Get (fun vs -> if Seq.contains s vs then v.varVar.Set s) )
                                    Doc.SelectDynOptional (extractAts attrs) none id valsW varO
                                ) 
                                >> Option.defaultWith (fun () -> errDocf "Var not found %s" var )
                            )
                    }
                    |> runDef
            
                if IsClient then
                    plugin { 
                        plgName  "AppFramework" 
                        plgVar   "mainDocV"     mainDocV
                        plgDoc   "AppFwkClient" AppFwkClient
                        plgDoc2  "TrigAction"   trigAct     "Trigger"  "Action"
                        plgDoc3  "InputFile"    inputFile   "attrs" "Label" "Action"
                        plgDoc3  "InputLabel"   inputLabel  "attrs" "Label" "Var"
                        plgAct2  "SetVar"       setVar   "Var"      "Value"
                        plgAct   "Hello"        (fun () -> JS.Window.Alert "Hello!")
                    } |> plugIns.Add
                    plugin { 
                        plgName  "AF"
                        plgDoc2  "TrigAction"   trigAct     "Trigger"  "Action"
                        plgDoc4  "Select"       select      "Attrs" "None" "Vals" "Var"
                        plgDoc3  "InputFile"    inputFile   "Attrs" "Label" "Action"
                        plgDoc3  "InputLabel"   inputLabel  "Attrs" "Label" "Var"
                        plgAct2  "SetVar"       setVar   "Var"      "Value"
                        plgAct   "Hello"        (fun () -> JS.Window.Alert "Hello!")
                        plgQuery "getDocNames"  (fun (_:obj) -> plugIns.Value |> Seq.collect (fun plg -> plg.plgDocs |> Seq.map (fun doc -> plg.plgName + "." + doc.docName)) |> Seq.toArray |> box)
                    } |> plugIns.Add
            
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
            
                let addPlugIn p = plugIns.Add p
            
            
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
            
            
            [< JavaScriptExport >]
            type LayoutEngine = {
                lytName       : string
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
            
                let (|PlugIn|Button|Input|TextArea|Select|Nothing|) =
                    function
                    | UnQuoted s when s = "PlugIn"     -> PlugIn
                    | UnQuoted s when s = "Button"     -> Button
                    | UnQuoted s when s = "input"      -> Input
                    | UnQuoted s when s = "textarea"   -> TextArea
                    | UnQuoted s when s = "select"     -> Select
                    |                               _ -> Nothing
            
                let (|Var|Doc|View|Concat|Action|Nothing|) =
                    function
                    | UnQuoted s when s = "Var"        -> Var
                    | UnQuoted s when s = "Doc"        -> Doc
                    | UnQuoted s when s = "View"       -> View
                    | UnQuoted s when s = "Concat"     -> Concat
                    | UnQuoted s when s = "Action"     -> Action
                    |                                _ -> Nothing
            
                type Measures = 
                | Fixed    of pixel: float * first: bool
                | Variable of min:   float * value: float * max: float
                    with override this.ToString() = 
                            match this with
                            | Fixed(        v, f  ) -> string (int (if f then v else -v) )
                            | Variable(min, v, max) -> sprintf "%d-%d-%d" (int min) (int v) (int max)
            
            
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
                    line
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
            
                type TextData = 
                | TDText  of string
                | TDAct   of AF.PlugInAction
            
                let splitName = AF.splitName
            
                let rec getOneTextData lytNm name bef aft =
                    let plg, n = splitName lytNm name
                    AF.tryGetActW plg n
                    |> View.Bind(function
                    | Some act -> TDAct act |> View.Const
                    | None     ->
                    AF.tryGetWoWW plg n
                    |> View.Bind(function
                        | Some txt ->
                            getTextData lytNm aft
                            |> View.Bind (function
                                | TDText  b    -> View.Const <| (TDText  <|     bef + txt + b                             )
                                | TDAct   act  -> View.Const <| (TDText  <| sprintf "Unexpected Action @{%s}" act.actName )
                            )
                        | None                 -> View.Const <| (TDText  <| sprintf "%s @{Missing %s}%s" bef name aft     )  
                        )
                    )
            
                and getTextData lytNm (txt:string) =
                    txt
                    |> String.delimitedO "@{" "}"
                    |> Option.map(fun (bef, name, aft) -> getOneTextData lytNm name bef aft )
                    |> Option.defaultWith (fun () -> TDText  txt |> View.Const)
            
                let getTextToken lytNm (token: Token) =
                    match token with
                    | UnQuoted name -> getOneTextData lytNm name "" ""
                    | Quoted   txt  -> getTextData    lytNm txt
            
                let getAttrs lytNm (S attrs: Token) = 
                    [
                        yield!  attrs
                                |> String.splitByChar ';'
                                |> Seq.map(String.splitByChar '=')
                                |> Seq.choose(
                                    function 
                                    | [| name ; value |] when name.Trim() <> "" && value.Trim() <> "" ->
                                            value.Trim() |> getTextData lytNm
                                            |> Attr.DynamicCustom (fun el -> function
                                                | TDText  v   -> el.SetAttribute(name.Trim(), v.Trim())
                                                | TDAct   act -> el.AddEventListener(name.Trim(), (fun (ev:Dom.Event) -> act.actFunction |> AF.callFunction el ev), false)
                                            )
                                            |> Some
                                    |_      -> None )
                        yield!  attrs
                                |> String.splitByChar ';'
                                |> Seq.map(String.splitByChar ':')
                                |> Seq.choose(
                                    function 
                                    | [| name ; value |] when name.Trim() <> "" && value.Trim() <> "" -> 
                                            value.Trim() |> getTextData lytNm
                                            |> View.Map(function
                                                | TDText  v   -> v.Trim()
                                                | TDAct   act -> sprintf "@{%s}" act.actName
                                            )
                                            |> Attr.DynamicStyle (name.Trim())
                                            |> Some
                                    |_      -> None )
                    ]
            
                let getDocF (parms:Token list) (doc:AF.PlugInDoc) =
                    match doc.docDoc, parms with
                    | AF.LazyDoc ldoc                  ,                                                   rest -> ldoc.Value       , rest
                    | AF.FunDoc1(f1, _                ), (S p1)                                         :: rest -> f1 p1            , rest
                    | AF.FunDoc2(f2, _ , _            ), (S p1) :: (S p2)                               :: rest -> f2 p1 p2         , rest
                    | AF.FunDoc3(f3, _ , _ , _        ), (S p1) :: (S p2) :: (S p3)                     :: rest -> f3 p1 p2 p3      , rest          
                    | AF.FunDoc4(f4, _ , _ , _ , _    ), (S p1) :: (S p2) :: (S p3) :: (S p4)           :: rest -> f4 p1 p2 p3 p4   , rest     
                    | AF.FunDoc5(f5, _ , _ , _ , _ , _), (S p1) :: (S p2) :: (S p3) :: (S p4) :: (S p5) :: rest -> f5 p1 p2 p3 p4 p5, rest
                    | _ -> Html.div [] [ Html.text <| sprintf "Parameters do not coincide with definition %A - %A" doc parms ], []
            
                let getDocFinal parms doc = 
                    match getDocF parms doc with
                    | res, [] -> res
                    | _ -> sprintf "Too many parameters %A %A" doc parms |> AF.errDoc
            
                let mutable currentViewTriggger = AF.mainDocV.View
            
                let turnToView f = currentViewTriggger |> View.Map f |> Doc.EmbedView
            
                let getADoc lytNm token =
                    match token with
                    | Identifier di  -> let plg, nm = splitName lytNm di
                                        AF.tryGetDocW plg nm
                                        |>  Doc.BindView (function 
                                            | Some pdc -> getDocF [] pdc |> fst
                                            | None     ->
                                            AF.tryGetWoWW plg nm
                                            |> Doc.BindView (function 
                                                | Some txt -> Doc.TextNode txt
                                                | None     -> sprintf "Missing doc: %s" di |>! print |> AF.errDoc )
                                        )
                    | (S txt)        -> txt
                                        |> getTextData lytNm
                                        |> View.Map(function
                                            | TDText  v   ->  v 
                                            | TDAct   act -> sprintf "Unexpected action: %s" act.actName
                                        )
                                        |> Doc.TextView
            
                let rec getAllDocs lytNm tokens =
                    match tokens with
                    | []            -> []
                    | token :: rest -> getADoc lytNm token :: getAllDocs lytNm rest
            
                let getOneDoc lytNm docs =
                    match docs with
                    | Identifier id :: parms -> let plg, nm = splitName lytNm id
                                                AF.tryGetDoc plg nm
                                                |>  Option.map (getDocF parms)
                                                |>  Option.defaultWith  (fun ()  ->
                                                    AF.tryGetWoW plg nm
                                                    |>  Option.map (fun txtW -> Doc.TextView txtW, parms)
                                                    |> fun vv -> vv
                                                    |>  Option.defaultWith  (fun () -> sprintf "Missing doc: %s" id |>! print |> AF.errDoc, parms) )
                    | (S txt)       :: rest  -> txt
                                                |> getTextData lytNm
                                                |> View.Map(function
                                                    | TDText  v   ->  v 
                                                    | TDAct   act -> sprintf "Unexpected action: %s" act.actName
                                                )
                                                |> Doc.TextView, rest
                    | []                     -> Doc.Empty, []
            
                let rec getDocs_ lytNm docs =
                    match docs with
                    | [] -> []
                    | _  -> 
                    match getOneDoc lytNm docs with
                    | res, rest -> res :: getDocs_ lytNm rest
            
                let pairOfDocs lytNm docs =
                    currentViewTriggger 
                    |> View.Map (fun _ -> getAllDocs lytNm docs )
                    |> View.Map (
                        function 
                        | [ doc1 ; doc2 ] -> doc1, doc2
                        | _               -> sprintf "splitter expects exactly 2 elements %A" docs |> AF.errDoc, "part 2" |> AF.errDoc
                    ) |> (fun dsW -> View.Map fst dsW |> Doc.EmbedView, View.Map snd dsW |> Doc.EmbedView )
            
                let singleDoc lytNm docs =
                    currentViewTriggger
                    |> View.Map (fun _ -> getAllDocs lytNm docs )
                    |> View.Map (
                        function 
                        | [ doc1 ] -> doc1
                        | _        -> sprintf "expected exactly 1 element %A" docs |> AF.errDoc
                    ) |> Doc.EmbedView
            
                let createSplitter(lytNm, name, vertical, measures, docs) =
                    let doc1, doc2 = pairOfDocs lytNm docs
                    match measures with
                    | Fixed    (pixel,    first) ->    fixedSplitter vertical pixel first   doc1 doc2
                    | Variable (min, value, max) -> variableSplitter vertical min value max doc1 doc2
            
                let createElement(lytNm, name, element, attrs, docs) =
                    turnToView <| fun _ ->
                        getAllDocs lytNm docs 
                        |> Doc.Concat
                        |> Seq.singleton
                        |> Doc.Element element (getAttrs lytNm attrs)
            
                let createButton( lytNm, name, actName, attrs, S text) = 
                    turnToView <| fun _ ->
                        splitName lytNm actName
                        ||> AF.tryGetAct
                        |>  Option.map          (fun act -> fun () -> act.actFunction |> AF.callFunction () ()  )
                        |>  Option.defaultValue ignore
                        |> Doc.Button text (getAttrs lytNm attrs)
            
                let createInput( lytNm, name, varName, attrs ) = 
                    turnToView <| fun _ ->
                        splitName lytNm varName
                        ||> AF.tryGetVoVW
                        |> Doc.BindView(function
                            | Some var -> Doc.Input     (getAttrs lytNm attrs) var
                            | None  -> sprintf "Missing var: %s" varName |> AF.errDoc )
            
                let createTextArea( lytNm, name, varName, attrs ) = 
                    turnToView <| fun _ ->
                            splitName lytNm varName
                            ||> AF.tryGetVoVW
                            |> Doc.BindView(function
                                | Some var -> Doc.InputArea (getAttrs lytNm attrs) var
                                | None  -> sprintf "Missing var: %s" varName |> AF.errDoc )
            
                let createDoc( lytNm, name, docName, parms) =
                    turnToView <| fun _ ->
                        splitName lytNm docName
                        ||> AF.tryGetDoc
                        |>  Option.map (getDocFinal parms)
                        |>  Option.defaultWith  (fun ()  -> sprintf "Missing doc: %s" docName |> AF.errDoc )
            
                let createTemplate( lytNm, name, tempName:string, attrs:Token, holes) =
                    turnToView <| fun _ ->
                        let attrs = getAttrs lytNm attrs
                        Client.Doc.LoadLocalTemplates "local"
                        try
                            holes 
                            |> Seq.pairwise
                            |> Seq.indexed
                            |> Seq.filter(fun (i, _) -> i % 2 = 0)
                            |> Seq.map  snd
                            |> Seq.map( function
                                | (S nm ), Identifier id -> splitName     lytNm id ||> AF.tryGetDoc |> Option.map (fun doc -> TemplateHole.Elt(   nm.ToLower(), getDocF [] doc |> fst) )
                                                            |> Option.orElseWith (fun () ->
                                                                splitName lytNm id ||> AF.tryGetVar |> Option.map (fun var -> TemplateHole.VarStr(nm.ToLower(), var.varVar) )
                                                            )
                                                            |> Option.defaultWith(fun () -> TemplateHole.Elt(nm.ToLower(), sprintf "Missing element: %s" id |> AF.errDoc) )
                                | (S nm ), (S txt )      -> //getTextData lytNm txt
                                                            //|> View.Map (function
                                                            //    | TDText  v   -> TemplateHole.Text(    nm.ToLower(), v )
                                                            //    | TDView  vw  -> TemplateHole.TextView(nm.ToLower(), vw)
                                                            //    | TDAct   act -> TemplateHole.Event(   nm.ToLower(), (fun el ev -> act.actFunction |> AF.callFunction el ev ))
                                                            //)
                                                            TemplateHole.Elt(nm.ToLower(), sprintf "Not implemented: %s" txt |> AF.errDoc) 
                            )
                            |> (if Seq.isEmpty attrs then id else TemplateHole.Attribute("attrs", Attr.Concat attrs) |> Seq.singleton |> Seq.append)
                            |> Client.Doc.NamedTemplate "local" (tempName.ToLower() |> Some)
                            |> Some
                        with _ -> None
                        |>  Option.defaultWith  (fun ()  -> sprintf "Missing template: %s" tempName |> AF.errDoc )
            
                let getParamText lytNm token f = 
                    getTextToken lytNm token
                    |> View.Get(function
                        | TDText  txt -> f (box txt)
                        | TDAct   act -> f (box act)
                    )
            
                let createAction( lytNm, name, actName, (parms : Token list) ) = 
                    splitName lytNm actName
                    ||> AF.tryGetAct
                    |>  Option.map          (fun act -> 
                        if parms = [] then act.actFunction else
                        match act.actFunction, parms with
                        | AF.FunAct1(f,_    ), [ t1     ] -> AF.FunAct0( fun () -> getParamText lytNm t1                                   f              )
                        | AF.FunAct2(f,_, _ ), [ t1; t2 ] -> AF.FunAct0( fun () -> getParamText lytNm t1 (fun p1 -> getParamText lytNm t2 (f p1   ) )     )
                        | AF.FunAct2(f,_, n2), [ t1     ] -> AF.FunAct1((fun p2 -> getParamText lytNm t1 (fun p1 ->                        f p1 p2) ) , n2)
                        | _ -> AF.FunAct0 (fun () -> printfn "Parameters do not coincide for Action %s %A %A" actName parms act )
                    )
                    |>  Option.defaultWith  (fun ()  -> AF.FunAct0 (fun () -> printfn "Action Not Found %s" actName) )
            
                let createConcat(lytNm, name, docs) =
                    turnToView (fun _ -> getAllDocs lytNm docs |> Doc.Concat)
            
                let createVar( lytNm, varName, v           ) = Var.Create v
                let findJSEntry fname =
                    fname 
                    |> String.splitByChar '.'
                    |> Seq.fold(fun oO nm ->
                        oO |> Option.bind(fun o -> if (isUndefined o?(nm)) then None else Some o?(nm) ) 
                        ) (Some (JS.Inline("window") :> obj) )
            
                let createView(lytNm, viwName, parms) = 
                    currentViewTriggger |> View.Bind (fun _ ->
                        try
                            parms
                            |> View.traverseSeq (getTextToken lytNm)
                            |> View.Map (
                                Seq.map 
                                    (function
                                    | TDText  txt -> txt
                                    | TDAct   act -> sprintf "%A" act) 
                                >> Seq.toArray
                            )
                            |> View.Map (fun ar ->
                                try match ar with
                                    | [|   |] -> "No JS function specified"
                                    | [| _ |] ->  JS.Eval ar.[0]                                              |> string
                                    | _       -> (JS.Eval ar.[0] |> unbox<FuncWithArgs<_,obj>>).Call ar.[1..] |> string
                                with e -> e.Message
                            )
                        with e -> e.Message |> View.Const
                    )
            
                let createSplitterM = Memoize.memoize createSplitter
                let createButtonM   = Memoize.memoize createButton
                let createInputM    = Memoize.memoize createInput
                let createTextAreaM = Memoize.memoize createTextArea
                let createElementM  = Memoize.memoize createElement
                let createDocM      = Memoize.memoize createDoc
                let createTemplateM = Memoize.memoize createTemplate
                let createConcatM   = Memoize.memoize createConcat
                let createVarM      = Memoize.memoize createVar
                let createViewM     = Memoize.memoize createView
                let createActionM   = Memoize.memoize createAction
            
                let entryDoc  n doc = AF.newDoc  n (lazy doc    ) |> EntryDoc    |> Some
                let entryVar  n v   = AF.newVar  n  v             |> EntryVar    |> Some
                let entryView n w   = AF.newViw  n  w             |> EntryView   |> Some
                let entryAct  n a   = AF.newActF n  a             |> EntryAction |> Some
            
                let createEntryO lytNm (line:string) =
                    try
                        match splitTokens line with
                        |   Identifier name :: Vertical   :: Measures measures          :: docs    -> entryDoc  name <| createSplitterM(lytNm, name, true , measures, docs ) 
                        |   Identifier name :: Horizontal :: Measures measures          :: docs    -> entryDoc  name <| createSplitterM(lytNm, name, false, measures, docs ) 
                        | [ Identifier name ;  Button     ;  Identifier act    ;  attrs ;  text  ] -> entryDoc  name <| createButtonM  (lytNm, name, act  , attrs   , text ) 
                        | [ Identifier name ;  Input      ;  Identifier var    ;  attrs          ] -> entryDoc  name <| createInputM   (lytNm, name, var  , attrs          ) 
                        | [ Identifier name ;  TextArea   ;  Identifier var    ;  attrs          ] -> entryDoc  name <| createTextAreaM(lytNm, name, var  , attrs          ) 
                        | [ Identifier name ;  Var        ;                       (S v)          ] -> entryVar  name <| createVarM     (lytNm, name, v                     ) 
                        |   Identifier name :: Doc        :: (S doc  )                  :: parms   -> entryDoc  name <| createDocM     (lytNm, name, doc  , parms          ) 
                        |   Identifier name :: View       ::                               parms   -> entryView name <| createViewM    (lytNm, name,        parms          )
                        |   Identifier name :: Template   :: (S temp )         :: attrs :: holes   -> entryDoc  name <| createTemplateM(lytNm, name, temp , attrs   , holes)
                        |   Identifier name :: Concat                                   :: docs    -> entryDoc  name <| createConcatM  (lytNm, name,                  docs )
                        |   Identifier name :: Action     :: Identifier act             :: parms   -> entryAct  name <| createActionM  (lytNm, name, act  , parms          )
                        |   Identifier name :: Elem elem                       :: attrs :: docs    -> entryDoc  name <| createElementM (lytNm, name, elem , attrs   , docs ) 
                        | _                                                                        -> None
                    with e -> 
                        None
            
                module Syntax =
            
                    type ItemRef =
                    | LocalRef of string
                    | FullRef  of string * string
            
                    type DocRef = DocRef of ItemRef
                    type ActRef = ActRef of ItemRef
                    type VarRef = VarRef of ItemRef
                    type ViwRef = ViwRef of ItemRef
            
                    let pairOfDocs lytNm docs =
                        currentViewTriggger 
                        |> View.Map (fun _ -> getAllDocs lytNm docs )
                        |> View.Map (
                            function 
                            | [ doc1 ; doc2 ] -> doc1, doc2
                            | _               -> sprintf "splitter expects exactly 2 elements %A" docs |> AF.errDoc, "part 2" |> AF.errDoc
                        ) |> (fun dsW -> View.Map fst dsW |> Doc.EmbedView, View.Map snd dsW |> Doc.EmbedView )
            
                    type TextVal =
                    | TvConst  of string
                    | TvVarRef of VarRef
                    | TvViwRef of ViwRef
            
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
                    type ElementDef  = ElementDef  of string * AttrVal[] * NodeRef list
            
                    type ActDef      = ActDef      of ActRef * ParmRef list
                    type VarDef      = VarDef      of string
                    type ViwDef      = ViwDef      of ParmRef  list
                    type PlgDef      = PlgDef      of ElemNames
                    type DocDef      = 
                    | DcSplitter of SplitterDef
                    | DcButton   of ButtonDef
                    | DcInput    of InputDef
                    | DcTextArea of TextAreaDef
                    | DcDocF     of DocFDef
                    | DcConcat   of ConcatDef
                    | DcElement  of ElementDef
            
                    type Entry =
                    | EnDocDef of DocDef
                    | EnActDef of ActDef
                    | EnVarDef of VarDef
                    | EnViwDef of ViwDef
                    | EnPlgDef of PlgDef
                    | EnPlgRef of ElemName
            
                    type EntryDef = EntryDef of string * Entry
            
                    let entryDef  n e = EntryDef(n, e)
                    let entryDoc  n d = EnDocDef d |> entryDef n |> Some
                    let entryAct  n a = EnActDef a |> entryDef n |> Some
                    let entryView n w = EnViwDef w |> entryDef n |> Some
                    let entryVar  n v = EnVarDef v |> entryDef n |> Some
                    let entryPlg  n p = EnPlgDef p |> entryDef n |> Some
                    let entryRef  n e = EnPlgRef e |> entryDef n |> Some
            
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
                            s.Trim().Split ';'
                            |> Seq.filter (fun v -> v.Trim() <> "")
                            |> Seq.choose(fun a ->
                                match a.Trim().Split '=' with
                                | [| nm ; ActI  ar |] -> AtAct  (nm.Trim(), ar)  |> Some
                                | [| nm ; Tx    vl |] -> AtAttr (nm.Trim(), vl)  |> Some
                                |_->
                                match a.Trim().Split ':' with
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
            
                        let rec (|Prs|_|) = function
                        | []                -> Some []
                        | Pr pr :: Prs rest -> Some( pr :: rest)
                        |_                  -> None
            
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
                        | [ Name name ;  Vertical   ;  Measures measures ;  DocRf l ; DocRf r  ] -> entryDoc  name <| DcSplitter(SplitterDef(true , measures, l, r) )
                        | [ Name name ;  Horizontal ;  Measures measures ;  DocRf l ; DocRf r  ] -> entryDoc  name <| DcSplitter(SplitterDef(false, measures, l, r) ) 
                        | [ Name name ;  Button     ;  ActRf      act    ;  At att  ; QTx text ] -> entryDoc  name <| DcButton  (ButtonDef  (act  , att     , text) )
                        | [ Name name ;  Input      ;  VarRf      var    ;  At att             ] -> entryDoc  name <| DcInput   (InputDef   (var  , att           ) )
                        | [ Name name ;  TextArea   ;  VarRf      var    ;  At att             ] -> entryDoc  name <| DcTextArea(TextAreaDef(var  , att           ) )
                        | [ Name name ;  Var        ;                       STx v              ] -> entryVar  name <| VarDef    (v.Trim())
                        |   Name name :: Doc        :: DocRf      dr               :: Prs ps     -> entryDoc  name <| DcDocF    (DocFDef    ( dr  , ps            ) )
                        |   Name name :: View       ::                                Prs ps     -> entryView name <| ViwDef            ps              
                        //|   Name name :: Template   :: (S temp )         :: At att :: holes      -> entryDoc  name <| entryTemplate(lytNm, name, temp , attrs   , holes)
                        |   Name name :: Concat                                    :: Nds ns     -> entryDoc  name <| DcConcat  (ConcatDef                  ns      )
                        |   Name name :: Action     :: ActRf      act              :: Prs ps     -> entryAct  name <| ActDef  ( act  , ps          )
                        |   Name name :: Elem elem                       :: At att :: Nds ns     -> entryDoc  name <| DcElement (ElementDef(elem , att   , ns ) )
                        | _                                                                      -> None
            
                    let createEntryO2 lytNm (refs:System.Collections.Generic.Dictionary<string, _>) =
                        let ok nm en = refs.Add(nm, en) ; Some (Ok(nm, en)) 
                        let ko msg (line:string) =
                            let nm = line.Split ' ' |> Seq.head
                            refs.Add(nm, ElementDef("div", [||], [NdTextValL [ TvConst msg ] ] ) |> DcElement |> EnDocDef )
                            Result.Error msg |> Some
                        let getRef nm =
                            try refs.[nm]
                            with e -> failwithf "Could not find reference to %s" nm
                        let getType rf = 
                            match rf with
                            | LocalRef      nm  -> 
                                let entry = getRef nm
                                match entry with
                                | EnDocDef _ -> RDoc
                                | EnActDef _ -> RAct
                                | EnVarDef _ -> RVar
                                | EnViwDef _ -> RViw
                                | EnPlgRef _ -> RPlg
                                | EnPlgDef _ -> failwithf "PlugIn should not be referenced by itself: %A" rf
                                , Some entry
                            | FullRef  (ly, nm) -> 
                                getRef ly
                                |> function
                                | EnPlgDef(PlgDef ps) -> try ps.[nm] with e-> failwithf "Could not find reference to %s.%s" ly nm
                                | _                   -> failwithf "PlugIn not registered: %A" rf
                                , None
                        fun (line:string) ->
                            try 
                                createEntryO getType lytNm line
                                |> function
                                | Some(EntryDef(nm, en)) -> ok nm en
                                | None -> line |> ko (sprintf "Line not matched!: %s" line)
                            with e     -> line |> ko e.Message
            
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
            
                let getExtraLines pred (ls: string[]) =
                    ls 
                    |> Seq.skip 1 
                    |> Seq.tryFindIndex (fun l -> l.Trim() <> "" && not(pred l) )
                    |> Option.map ((+) 1)
                    |> Option.defaultValue ls.Length
                    |> fun i -> 
                        ls.[1..i-1], ls.[i..] 
            
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
            
                let parseEntries lytNm txt =
                    let localRefs = System.Collections.Generic.Dictionary<_,_>()
                    processText (Syntax.createEntryO2 lytNm localRefs) txt
            
                let createEntries lytNm = processText (createEntryO lytNm)
                                        //|> Seq.choose (createEntryO lytNm)
                                        //|> Seq.toArray
            
                let getText lytNm txtName =
                    match txtName with
                    | Identifier id -> let plg, nm = splitName lytNm id 
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
            
                let inputFile lytNm attrs labelName actName doc =
                    splitName lytNm actName
                    ||> AF.tryGetAct
                    |> Option.map(fun act -> 
                        Html.div (getAttrs lytNm (Quoted attrs)) [
                            Html.div              [ attr.``class`` "input-group"       ] [
                                Html.span         [ attr.``class`` "input-group-btn"   ] [ 
                                    Html.label    [ attr.``class`` "btn"               ] [ 
                                        getText lytNm (Quoted labelName)
                                        Html.input[ attr.``class`` "form-control" 
                                                    attr.``type`` "file" 
                                                    Attr.Style "display" "none" 
                                                    Html.on.click (fun el ev -> el?value <- "")
                                                    Html.on.change(fun el ev -> act.actFunction |> AF.callFunction el () )
                                                    ] []
                                    ]
                                ]
                                (if doc <> "" then singleDoc lytNm [ UnQuoted doc ] else Doc.Empty)
                            ]
                        ]
                    ) |> Option.defaultWith(fun () ->  sprintf "Action not found %s" actName |> AF.errDoc )
            
                let inputLabel lytNm attrs labelName varName =
                    splitName  lytNm varName
                    ||> AF.tryGetVar
                    |> Option.map(fun var -> 
                        Html.div (getAttrs lytNm (Quoted attrs)) [
                            Html.div      [ attr.``class`` "input-group"       ] [
                                Html.span [ attr.``class`` "input-group-addon" ] [ getText lytNm (Quoted labelName) ]
                                Doc.Input [ attr.``class`` "form-control"      ]   var.varVar
                            ]
                        ]
                    ) |> Option.defaultWith(fun () ->  sprintf "Var not found %s" varName |> AF.errDoc )
            
                let none x = Html.span [][]
            
                let htmlDoc lytNm html =
                    getTextData lytNm html
                    |> Doc.BindView(function
                        | TDText  v   -> Doc.Verbatim              v
                        | TDAct   act -> sprintf "HtmlDoc: unexpected action %A" act |> AF.errDoc
                    )
            
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
                        yield  AF.newDocF "InputFile"  <| AF.FunDoc4(inputFile  lytN, "attrs", "Label", "Action", "[Doc]")
                        yield  AF.newDocF "InputLabel" <| AF.FunDoc3(inputLabel lytN, "attrs", "Label", "Var"            )
                        yield  AF.newDocF "HtmlDoc"    <| AF.FunDoc1(htmlDoc    lytN, "html"                             )
                        yield  AF.newDocF "none"       <| AF.FunDoc1(none           , "x"                                )
                    |]
            
                let addLayout (lyt:LayoutEngine) =
                    lyt.lytDefinition.View |> View.Sink(fun txt ->
                        currentViewTriggger <- V ( lyt.lytDefinition.V + AF.mainDocV.V)
                        createEntries lyt.lytName txt
                        |> Seq.append [ AF.newVar "Layout" lyt.lytDefinition |> EntryVar ]
                        |> refreshEntries lyt.lytName
                    )
            
                let newLyt name (lyt:string) = {
                    lytName       = name
                    lytDefinition = Var.Create lyt
                }
            
                let addNewLayout (name:obj) (layout:obj) = 
                    (if layout <> null then unbox layout else """
            split horizontal 0-50-100 AppFramework.AppFwkClient Hello
            Hello h1 "color:blue; class=btn-primary" "How are you today?" Ask
            Ask Doc InputLabel "placeholder=Type you answer here..." "Answer:" AppFramework.mainDocV  
            """     |> String.unindentStr)
                    |> newLyt (if layout <> null then unbox name else System.Guid.NewGuid() |> string |> fun s -> "Lyt_" + s.Replace("-", ""))
                    |> addLayout
            
                if IsClient then
                    AF.tryGetPlugIn "AppFramework"
                    |> Option.iter(fun plg ->
                        plg.plgActions.Add <| ( AF.newActF "AddLayout" <| AF.FunAct2(addNewLayout, "[Name]", "[Layout]") )
                    )
            
#nowarn "3242"
////-d:FSharpStation1571155948940 -d:TEE -d:WEBSHARPER
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
//#define FSharpStation1571155948940
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
    open WebSharper.JavaScript
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
        [< JavaScript ; AutoOpen >]
        module Library = 
            let Error = Result.Error
        
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
                let rec    traverseSeq     f            sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                             Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                let inline sequenceSeq                  sq = traverseSeq id sq
            
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
                match JavaScript.String(value).Match(RegExp(expr, opt)) with
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
                            plg.plgDocs |> Seq.tryFind(fun doc -> plg.plgName = mainDoc || plg.plgName + "." + doc.docName = mainDoc) |> Option.map getLazyDoc
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
            
                let setVar  (varN   :obj   ) (value:obj   ) = splitName "AppFramework" (unbox varN) ||> tryGetVar |> Option.iter(fun v -> v.varVar.Set (unbox value)       )
                let trigAct (trigger:string) (actN :string) =
                    splitName "AppFramework" trigger
                    ||> tryGetWoWW
                    |> View.consistent
                    |> View.Map(function
                        | Some txt ->
                            splitName "AppFramework" actN
                            ||> tryGetAct 
                            |> function
                                | Some a -> callFunction () () a.actFunction
                                | None -> ()
                            ""
                        | None -> ""
                    ) |>  Doc.TextView
            
                let actHello   = newAct  "Hello"               (fun () -> JS.Window.Alert "Hello!")
                let actSetVar  = newActF "SetVar"      (FunAct2(setVar , "Var"    , "Value" ) )
                let docTrigAct = newDocF "TrigAction"  (FunDoc2(trigAct, "Trigger", "Action") )
                let qryDocs    = newQry  "getDocNames"         (fun (_:obj) -> plugIns.Value |> Seq.collect (fun plg -> plg.plgDocs |> Seq.map (fun doc -> plg.plgName + "." + doc.docName)) |> Seq.toArray |> box)
            
                if IsClient then
                    let plg = { defaultPlugIn() with plgName    = "AppFramework" }
                    plg.plgVars   .Add ( newVar "mainDocV"     mainDocV     )
                    //plg.plgViews  .Add (                                    )
                    plg.plgDocs   .Add ( newDoc "AppFwkClient" AppFwkClient )
                    plg.plgDocs   .Add ( docTrigAct                         )
                    plg.plgActions.Add ( actHello                           )
                    plg.plgActions.Add ( actSetVar                          )
                    plg.plgQueries.Add ( qryDocs                            )
                    plugIns.Add plg
            
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
            [< JavaScriptExport >]
            type LayoutEngine = {
                lytName       : string
                lytDefinition : Var<string>
            }
            
            [< JavaScriptExport >]
            module LayoutEngine =
                open WebSharper.UI
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
            
                let (|Vertical|Horizontal|Layout|Grid|Template|Elem|Nothing|) =
                    function
                    | UnQuoted s when s = "vertical"   -> Vertical
                    | UnQuoted s when s = "horizontal" -> Horizontal
                    | UnQuoted s when s = "layout"     -> Layout
                    | UnQuoted s when s = "grid"       -> Grid
                    | UnQuoted s when s = "template"   -> Template
                    | Identifier id                    -> Elem id
                    |                                _ -> Nothing
            
                let (|Button|Input|TextArea|Select|Nothing|) =
                    function
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
                    
                let errDoc txt = Html.div [] [ Html.text txt ]
            
                //let getLDoc name =
                //    splitName name
                //    ||> AF.tryGetDoc 
                //    |>  Option.map         AF.getLazyDoc
                //    |>  Option.defaultWith(fun ()  -> sprintf "missing %s" name |> errDoc )                            
            
                //let xxhookOrText =
                //    function
                //    | Identifier id -> hookDoc id
                //    | txt           -> Doc.TextNode txt
            
                //type Token = string * bool
            
                let rec doubleQuote = function
                    | []                                            -> []
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
                    | _ -> sprintf "Too many parameters %A %A" doc parms |> errDoc
            
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
                                                | None     -> sprintf "Missing doc: %s" di |>! print |> errDoc )
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
                                                    |>  Option.defaultWith  (fun () -> sprintf "Missing doc: %s" id |>! print |> errDoc, parms) )
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
                        | _               -> sprintf "splitter expects exactly 2 elements %A" docs |> errDoc, "part 2" |> errDoc
                    ) |> (fun dsW -> View.Map fst dsW |> Doc.EmbedView, View.Map snd dsW |> Doc.EmbedView )
            
                let singleDoc lytNm docs =
                    currentViewTriggger
                    |> View.Map (fun _ -> getAllDocs lytNm docs )
                    |> View.Map (
                        function 
                        | [ doc1 ] -> doc1
                        | _        -> sprintf "expected exactly 1 element %A" docs |> errDoc
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
                            | None  -> sprintf "Missing var: %s" varName |> errDoc )
            
                let createTextArea( lytNm, name, varName, attrs ) = 
                    turnToView <| fun _ ->
                            splitName lytNm varName
                            ||> AF.tryGetVoVW
                            |> Doc.BindView(function
                                | Some var -> Doc.InputArea (getAttrs lytNm attrs) var
                                | None  -> sprintf "Missing var: %s" varName |> errDoc )
            
                let createDoc( lytNm, name, docName, parms) =
                    turnToView <| fun _ ->
                        splitName lytNm docName
                        ||> AF.tryGetDoc
                        |>  Option.map (getDocFinal parms)
                        |>  Option.defaultWith  (fun ()  -> sprintf "Missing doc: %s" docName |> errDoc )
            
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
                                                            |> Option.defaultWith(fun () -> TemplateHole.Elt(nm.ToLower(), sprintf "Missing element: %s" id |> errDoc) )
                                | (S nm ), (S txt )      -> //getTextData lytNm txt
                                                            //|> View.Map (function
                                                            //    | TDText  v   -> TemplateHole.Text(    nm.ToLower(), v )
                                                            //    | TDView  vw  -> TemplateHole.TextView(nm.ToLower(), vw)
                                                            //    | TDAct   act -> TemplateHole.Event(   nm.ToLower(), (fun el ev -> act.actFunction |> AF.callFunction el ev ))
                                                            //)
                                                            TemplateHole.Elt(nm.ToLower(), sprintf "Not implemented: %s" txt |> errDoc) 
                            )
                            |> (if Seq.isEmpty attrs then id else TemplateHole.Attribute("attrs", Attr.Concat attrs) |> Seq.singleton |> Seq.append)
                            |> Client.Doc.NamedTemplate "local" (tempName.ToLower() |> Some)
                            |> Some
                        with _ -> None
                        |>  Option.defaultWith  (fun ()  -> sprintf "Missing template: %s" tempName |> errDoc )
            
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
                        | [ Identifier name ;  Button     ;  Identifier act    ;  attrs ;  text  ] -> entryDoc  name <| createButtonM(  lytNm, name, act  , attrs   , text ) 
                        | [ Identifier name ;  Input      ;  Identifier var    ;  attrs          ] -> entryDoc  name <| createInputM(   lytNm, name, var  , attrs          ) 
                        | [ Identifier name ;  TextArea   ;  Identifier var    ;  attrs          ] -> entryDoc  name <| createTextAreaM(lytNm, name, var  , attrs          ) 
                        | [ Identifier name ;  Var        ;                       (S v)          ] -> entryVar  name <| createVarM(     lytNm, name, v                     ) 
                        |   Identifier name :: Doc        :: (S doc  )                  :: parms   -> entryDoc  name <| createDocM(     lytNm, name, doc  , parms          ) 
                        |   Identifier name :: View       ::                               parms   -> entryView name <| createViewM(    lytNm, name,        parms          )
                        |   Identifier name :: Template   :: (S temp )         :: attrs :: holes   -> entryDoc  name <| createTemplateM(lytNm, name, temp , attrs   , holes)
                        |   Identifier name :: Concat                                   :: docs    -> entryDoc  name <| createConcatM(  lytNm, name,                  docs )
                        |   Identifier name :: Action     :: Identifier act             :: parms   -> entryAct  name <| createActionM(  lytNm, name, act  , parms          )
                        |   Identifier name :: Grid       :: cols :: rows      :: attrs :: docs    -> None
                        |   Identifier name :: Elem elem                       :: attrs :: docs    -> entryDoc  name <| createElementM( lytNm, name, elem , attrs   , docs ) 
                        | _                                                                        -> None
                    with e -> 
                        printfn "%A" e
                        None
            
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
                        let name = sprintf "%s_%d" baseName i
                        let childNames, childrenLines = createLines name (n+1) [||] [||] 1 children
                        let names2 = [| yield! names ; yield name |]
                        let lines2 = [| yield! lines
                                        yield  name + " " + l + " " + String.concat " " childNames
                                        yield! childrenLines
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
                                //printfn "l = ;%s;" l
                                let prefix = l.Split([|' '|], System.StringSplitOptions.RemoveEmptyEntries) |> Seq.item 0
                                let names, ls = createLines prefix 1 [||] [||] 1 docs
                                [|  yield l + " " + String.concat " " names
                                    yield! ls
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
            
                let createEntries lytNm (txt:string) =
                    txt.Split(  [|'\n' ; '\r' |], System.StringSplitOptions.RemoveEmptyEntries)
                    |> processLines (createEntryO lytNm)
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
                    ) |> Option.defaultWith(fun () ->  sprintf "Action not found %s" actName |> errDoc )
            
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
                    ) |> Option.defaultWith(fun () ->  sprintf "Var not found %s" varName |> errDoc )
            
                let none x = Html.span [][]
            
                let htmlDoc lytNm html =
                    getTextData lytNm html
                    |> Doc.BindView(function
                        | TDText  v   -> Doc.Verbatim              v
                        | TDAct   act -> sprintf "HtmlDoc: unexpected action %A" act |> errDoc
                    )
            
                let addLayout (lyt:LayoutEngine) =
                    lyt.lytDefinition.View |> View.Sink(fun txt ->
                        currentViewTriggger <- V ( lyt.lytDefinition.V + AF.mainDocV.V)
                        let entries = createEntries lyt.lytName txt
                        let plg =   match AF.tryGetPlugIn lyt.lytName with
                                    | Some plg -> plg
                                    | None     -> 
                                        let plg = { AF.defaultPlugIn() with plgName = lyt.lytName }
                                        AF.addPlugIn plg
                                        plg
                        ListModel.refreshLM plg.plgVars    [|
                            yield  AF.newVar "Layout" lyt.lytDefinition  
                            yield! getVarEntries    entries
                        |]
                        ListModel.refreshLM plg.plgViews   [| yield! getViewEntries   entries       |]
                        ListModel.refreshLM plg.plgDocs    [| 
                            yield! getDocEntries    entries
                            yield  AF.newDocF "InputFile"  <| AF.FunDoc4(inputFile  lyt.lytName, "attrs", "Label", "Action", "[Doc]")
                            yield  AF.newDocF "InputLabel" <| AF.FunDoc3(inputLabel lyt.lytName, "attrs", "Label", "Var"            )
                            yield  AF.newDocF "HtmlDoc"    <| AF.FunDoc1(htmlDoc    lyt.lytName, "html"                             )
                            yield  AF.newDocF "none"       <| AF.FunDoc1(none                  , "x"                                )
                        |]
                        ListModel.refreshLM plg.plgActions [| yield! getActionEntries entries         |]
                        ListModel.refreshLM plg.plgQueries [| yield! getQueryEntries  entries         |]
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
            
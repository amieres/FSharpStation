
            //#nowarn "1182"
            //#nowarn "40"
            //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
            //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
            //#r @"D:\Abe\CIPHERWorkspace\CIPHERPrototype\WebServer\bin\FSharp.Core.dll"
            #if INTERACTIVE
            //#I @"../WebServer/bin"
            module FSSGlobal   =
            #else
            namespace FSSGlobal
            #endif
            
            // Code to be evaluated using FSI: `Evaluate F#`
              #if WEBSHARPER
              //#I @"..\packages\WebSharper\lib\net461"
              //#I @"..\packages\WebSharper.UI\lib\net461"
              
              //#r @"..\packages\WebSharper\lib\net461\WebSharper.Core.dll"
              //#r @"..\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
              //#r @"..\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
              //#r @"..\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
              //#r @"..\packages\WebSharper\lib\net461\WebSharper.Main.dll"
              //#r @"..\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
              //#r @"..\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
              //#r @"..\packages\WebSharper\lib\net461\WebSharper.Web.dll"
              //#r @"..\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
              //#r @"..\packages\WebSharper\lib\net461\WebSharper.Control.dll"
              //#r @"..\packages\WebSharper.UI.Next\lib\net40\WebSharper.UI.Next.dll"
              //#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
              //#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
              //#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
              //#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
              
              open WebSharper
              open WebSharper.JavaScript
              open WebSharper.UI
              open WebSharper.UI.Client
              type on   = WebSharper.UI.Html.on
              type attr = WebSharper.UI.Html.attr
              #else
              
              module WebSharper =
                  type RpcAttribute() =
                      let a = 1
                  type JavaScriptAttribute(translate:bool) =
                      let a = 1
                      new() = JavaScriptAttribute true
                  type InlineAttribute(code:string) =
                      let a = 1
                      new() = InlineAttribute ""
                  type DirectAttribute(code:string) =
                      let a = 1
              
              open WebSharper
              
              #endif
              [<JavaScript>]
              module Useful =
                let [<Inline>] inline swap f a b = f b a
                let [<Inline>] inline __   f a b = f b a
                
                
            //#define WEBSHARPER
            (*
             Code to be Compiled to Javascript and run in the browser
             using `Compile WebSharper` or `Run WebSharper`
            *)
            
              
              [<JavaScript>]
              module HtmlNode      =
              
                [<NoComparison>]
                type Val<'a> =
                    | Constant  of 'a
                    | DynamicV  of Var<'a>
                    | Dynamic   of View<'a>
                  with member this.ValTypeMember = 0
                
                module View =
                    let [<Inline>] inline consistent   (vl:View<_>)  = 
                        let prior      = ref <| Var.Create Unchecked.defaultof<_>
                        let setPrior v = if (!prior).Value <> v then (!prior).Value <- v 
                        View.Sink setPrior vl
                        !prior |> View.FromVar
                
                module Var =
                    let mutable private counter = 1
                    let freshId () =
                        counter <- counter + 1
                        "varuid" + string counter
                            
                //    let Make (init: 'T) (view: View<'T>) (set: 'T -> unit) =
                //        let id = freshId ()
                //        let current = ref init
                //        let view = view |> View.Map (fun x -> current := x; x)
                //        { new Var<'T>() with
                //            member this.View           = view
                //            member this.Get         () = !current
                //            member this.Set         x  = set x
                //            member this.SetFinal    x  = set x
                //            member this.UpdateMaybe f  = view |> View.Get (f >> Option.iter set)
                //            member this.Update      f  = view |> View.Get (f >>             set)
                //            member this.Id             = id
                //        }
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
                    
                module Val =
                    let swap = Useful.swap
                    
                    let mapV : ('a -> 'b) -> Val<'a> -> Val<'b> =
                        fun    f             va      ->
                            match va with
                            | Constant  a -> f a                   |> Constant
                            | Dynamic  wa -> wa      |> View.Map f |> Dynamic 
                            | DynamicV va -> va.View |> View.Map f |> Dynamic 
                
                    let iterV : ('a -> unit) -> Val<'a> -> unit = //f v = toView v |> View.Get f
                        fun     f               va      ->
                            match va with
                            | Constant  a ->          f  a                  
                            | Dynamic  wa -> View.Get f wa 
                            | DynamicV va ->          f va.Value 
                
                    let toView v =
                        match v with
                        | Constant  a -> View.Const a
                        | Dynamic  wa -> wa
                        | DynamicV va -> va.View
                
                    let getAsync v =
                        match v with
                        | Constant  a -> async.Return   a
                        | Dynamic  wa -> View.GetAsync wa
                        | DynamicV va -> async.Return  va.Value
                
                    let bindV : ('a -> Val<'b>) -> Val<'a> -> Val<'b> =
                        fun     f                  v       -> 
                            match v with
                            | Constant  a -> f a
                            | Dynamic  wa -> wa      |> View.Bind (f >> toView) |> Dynamic 
                            | DynamicV va -> va.View |> View.Bind (f >> toView) |> Dynamic 
                
                    let inline map2V (f_a_b_c: 'a->'b->'c) : Val<'a>->Val<'b>->Val<'c> =
                        let inline    f_aVbVc   a =  mapV  (f_a_b_c   a)
                        let inline    fVb_aVc  vb = (swap   f_aVbVc) vb
                        let inline    fVbVaVc  vb =  bindV (fVb_aVc  vb)
                        let inline    fVaVbVc  va = (swap   fVbVaVc) va
                        fVaVbVc
                
                    let inline map3V f3 v1 v2 v3    = map2V f3 v1 v2    |> map2V (|>) v3
                    let inline map4V f3 v1 v2 v3 v4 = map3V f3 v1 v2 v3 |> map2V (|>) v4
                    
                    let tagDoc: ('a -> Doc) -> Val<'a> -> Doc =
                        fun     tag            va      ->
                            match va with
                            | Constant  a -> tag   a
                            | Dynamic  wa -> wa      |> View.Map tag |> Doc.EmbedView
                            | DynamicV va -> va.View |> View.Map tag |> Doc.EmbedView
                
                    let tagElt: ('a -> Elt) -> Val<'a> -> Doc =
                        fun     tag            va     ->
                            match va with
                            | Constant  a -> tag   a :> Doc
                            | Dynamic  wa -> wa      |> View.Map tag |> Doc.EmbedView
                            | DynamicV va -> va.View |> View.Map tag |> Doc.EmbedView
                
                    let attrVO att       vao     =
                            match vao with
                            | Constant (Some a)-> Attr.Create      att   a
                            | Constant  None   -> Attr.DynamicPred att  (View.Const false              ) (View.Const                      ""         )
                            | Dynamic       wa -> Attr.DynamicPred att  (View.Map Option.isSome wa     ) (View.Map   (Option.defaultValue "") wa     )
                            | DynamicV      va -> Attr.DynamicPred att  (View.Map Option.isSome va.View) (View.Map   (Option.defaultValue "") va.View)
                
                    let attrV att       va      =
                            match va with
                            | Constant  a -> Attr.Create  att   a
                            | Dynamic  wa -> Attr.Dynamic att  wa
                            | DynamicV va -> Attr.Dynamic att  va.View    
                
                    type HelperType = HelperType with
                        static member (&>) (HelperType, a :     string option   ) = Constant  a
                        static member (&>) (HelperType, a :     string          ) = Constant  a
                        static member (&>) (HelperType, a :     bool            ) = Constant  a
                        static member (&>) (HelperType, a :     int             ) = Constant  a
                        static member (&>) (HelperType, a :     float           ) = Constant  a
                        static member (&>) (HelperType, a :     Doc             ) = Constant  a
                        static member (&>) (HelperType, va: Val<string option>  ) =          va
                        static member (&>) (HelperType, va: Val<string       >  ) =          va
                        static member (&>) (HelperType, va: Val<bool         >  ) =          va
                        static member (&>) (HelperType, va: Val<int          >  ) =          va
                        static member (&>) (HelperType, va: Val<float        >  ) =          va
                        static member (&>) (HelperType, va: Val<Doc          >  ) =          va
                        static member (&>) (HelperType, va: Val<_            >  ) =          va
                        static member (&>) (HelperType, vr: Var<_            >  ) = DynamicV vr
                        static member (&>) (HelperType, vw: View<_           >  ) = Dynamic  vw
                
                (*    [< Inline @"(
                            typeof($v) == 'function' ? {$:2, $0:$v} // View
                            :   typeof($v) == 'object'
                                      ? typeof($v.$) != 'undefined' // Val
                                            ? $v 
                                            : typeof($v.Id) == 'number' || typeof($v.i) == 'number' || typeof($v.RView == 'function')// Var
                                                 ? {$:1, $0:$v}
                                                 : typeof($v.docNode) != 'undefined'
                                                     ? {$:0, $0:$v} // Doc
                                                     : {$:2, $0:$v} // View?
                                      : {$:0, $0:$v}) // other
                                                     " >]
                    let fixit0 v = Constant v
                    let fixit2 v = let result = fixit0 v
                                   result
                                   
                    [< Direct "FSSGlobal.HtmlNode.Val.fixit2($v)" >]
                    //[< Inline >]
                    let inline fixit v = HelperType &> v
                *)
                    let toVal (o: obj) =
                        match o with
                        | :?      string   as t   -> Val.Constant t 
                        | :?      int      as t   -> Val.Constant t |> As<Val<string>> 
                        | :?      bool     as t   -> Val.Constant t |> As<Val<string>>  
                        | :?      Doc      as t   -> Val.Constant t |> As<Val<string>>  
                        | :? Val< string>  as v   ->              v        
                        | :? Var< string>  as v   -> Val.DynamicV v        
                        | v when JS.In "RSet" v   -> Val.DynamicV (As<Var< string>> v)
                        | :? Function      as vw  -> Val.Dynamic  (As<View<string>> vw)        
                        | _ when o?get_ValTypeMember() = 0 -> o |> As<Val<string>> 
                        | _                       -> failwith <| sprintf "Could not convert %A" o
                
                    [< Direct "$_f($v)" >]
                    let inline fixitF _f v = HelperType &> v
                    let inline fixit    v = fixitF toVal v
                
                    let [<Inline>] inline bindIRefO0 (f: 'a->Var< 'b> option) (view: View<'a>) = 
                        let contentVar                          = Var.Create None
                        let changingIRefO : Var< 'b> option ref = ref        None
                        let contentVarChanged                   = ref 0L
                        let refVarChanged                       = ref 0L
                    
                        contentVar.View 
                        |> View.Sink (fun _ ->            
                            match !changingIRefO, contentVar.Value with
                            | Some(r), Some(v) ->
                                if  !contentVarChanged  > !refVarChanged   then refVarChanged := !contentVarChanged
                                elif r.Value           <> v                then refVarChanged := !refVarChanged       + 1L ; r.Value         <-  v
                            | None, Some(_)    -> contentVar.Value <- None
                            | _   , None       -> ()
                         )
                    
                        view |> View.Bind (fun cur ->
                            let rO            = f cur
                            changingIRefO    := rO
                            refVarChanged    := !contentVarChanged + 100L
                            contentVar.Value <- rO |> Option.map (fun r -> r.Value)
                            rO |> Option.map (fun r -> r.View) |> Option.defaultWith (fun () -> View.Const Unchecked.defaultof<_>)
                        ) |> View.Sink (fun _ -> 
                            !changingIRefO 
                            |> Option.iter (fun r -> 
                                if  !refVarChanged  > !contentVarChanged then contentVarChanged := !refVarChanged
                                elif Some r.Value  <>  contentVar.Value  then contentVarChanged := !contentVarChanged + 10L; contentVar.Value  <- Some r.Value
                            )
                        )
                        contentVar
                        
                    let [<Inline>] inline bindIRef0 (f: 'a->Var< 'b>) (view: View<'a>) = 
                        let contentVar = Var.Create Unchecked.defaultof<'b>
                        let changingIRefO : Var< 'b> option ref = ref None
                        let contentVarChanged = ref 0L
                        let refVarChanged     = ref 0L
                    
                        contentVar.View 
                        |> View.Sink (fun _ -> 
                            !changingIRefO 
                            |> Option.iter (fun r -> 
                                if  !contentVarChanged  > !refVarChanged   then refVarChanged := !contentVarChanged
                                elif r.Value           <> contentVar.Value then refVarChanged := !refVarChanged       + 1L ; r.Value         <-  contentVar.Value
                               )
                           )
                    
                        view |> View.Bind (fun cur ->
                            let r = f cur
                            changingIRefO    := Some r
                            refVarChanged    := !contentVarChanged + 100L
                            contentVar.Value <- r.Value
                            r.View
                        ) |> View.Sink (fun _ -> 
                            !changingIRefO 
                            |> Option.iter (fun r -> 
                                if  !refVarChanged  > !contentVarChanged then contentVarChanged := !refVarChanged
                                elif r.Value       <> contentVar.Value   then contentVarChanged := !contentVarChanged + 10L; contentVar.Value  <-  r.Value
                               )
                            )
                        contentVar
                        
                    let inline toDoc         v           = toView            (fixit v ) |> Doc.EmbedView
                    let [<Inline>] inline bindIRef  f  v           = bindIRef0  f (fixit v   |> toView)
                    let [<Inline>] inline bindIRefO f  v           = bindIRefO0 f (fixit v   |> toView)
                    let inline iter       f  v           = iterV           f (fixit v )
                    let inline bind       f  v           = bindV           f (fixit v )
                    let inline map        f  v           = mapV            f (fixit v )
                    let inline map2       f  v1 v2       = map2V           f (fixit v1) (fixit v2)
                    let inline map3       f  v1 v2 v3    = map3V           f (fixit v1) (fixit v2) (fixit v3)
                    let inline map4       f  v1 v2 v3 v4 = map4V           f (fixit v1) (fixit v2) (fixit v3) (fixit v4)
                
                    let inline apply      va vf          = bindV(fun f-> mapV f va) vf
                  
                    let inline iter2      f  v1 v2       = map2            f v1 v2       |> iterV id
                    let inline iter3      f  v1 v2 v3    = map3            f v1 v2 v3    |> iterV id
                    let inline iter4      f  v1 v2 v3 v4 = map4            f v1 v2 v3 v4 |> iterV id
                  
                    let inline mapAsync   f  v           = View.MapAsync   f (fixit v |> toView) |> Dynamic
                    let inline sink       f  v           = View.Sink       f (fixit v |> toView) 
                    let inline mapCached  f  v           = View.MapCached  f (      v |> toView) |> Dynamic
                
                    let [<Inline>] inline consistent   (vl:Val<_>)  = 
                        let prior      = ref <| Var.Create Unchecked.defaultof<_>
                        let setPrior v = if (!prior).Value <> v then (!prior).Value <- v 
                        let vw         = toView vl
                        View.Sink setPrior vw
                        !prior :> Var< _> |> DynamicV
                
                    type valBuilder() =
                        member inline this.Return     (x)                            = Constant x
                        member inline this.ReturnFrom (x)                            = x
                        member        this.Bind       (w:Val<'a> , r: 'a -> Val<'b>) = bind r w
                        member        this.Bind       (w:Var<'a> , r: 'a -> Val<'b>) = bind r w
                        member        this.Bind       (w:View<'a>, r: 'a -> Val<'b>) = bind r w
                        member inline this.Zero       ()                             = Constant ()
                        member inline this.Delay      (f)                            = f()
                    
                    let valFlow = valBuilder()
                
                [<NoComparison ; NoEquality>]
                type HtmlNode =
                    | HtmlElement    of name: string * children: HtmlNode seq
                    | HtmlElementF   of func:(Attr seq -> Doc seq -> Doc) * children: HtmlNode seq
                    | HtmlElementV   of Val<HtmlNode>
                    | HtmlAttribute  of name: string * value:    Val<string>
                    | HtmlAttributeO of name: string * value:    Val<string option>
                    | HtmlText       of Val<string>
                    | HtmlEmpty
                    | SomeDoc        of Doc
                    | SomeAttr       of Attr
                    
                let addClassX    (classes:string) (add:string) = classes.Split ' ' |> Set.ofSeq |> Set.union  (Set.ofSeq <| add.Split ' ') |> String.concat " "
                //let removeClass (classes:string) (rem:string) = classes.Split ' ' |> Set.ofSeq |> Set.remove               rem            |> String.concat " "
                
                //let callAddClassX = addClassX "a" "b" // so that WebSharper.Collections.js is included
                
                let inline chooseAttr node = 
                    match node with
                    | HtmlAttribute (name, value   ) when name <> "class" && name <> "style" 
                                                     -> Some <| Val.attrV    name value
                    | HtmlAttributeO(name, valueO  ) when name <> "class" && name <> "style" 
                                                     -> Some <| Val.attrVO   name valueO
                    | SomeAttr             attr      -> Some <| attr
                    | _                              -> None
                
                let chooseThisAttr this node =
                    match node with
                    | HtmlAttribute (att, value) when att = this -> Some value
                    | _                                          -> None
                
                let concat s a b = a + s + b
                let groupAttr name sep children = 
                    children 
                    |> Seq.choose (chooseThisAttr name)
                    |> (fun ss -> if ss |> Seq.isEmpty 
                                  then None 
                                  else ss |> Seq.reduce (Val.map2 <| concat sep ) |> Val.attrV name |> Some)
                
                let inline getAttrsFromSeq children =
                    children 
                    |> Seq.choose chooseAttr
                    |> Seq.append (List.choose id [ children |> groupAttr "class" " " ; children |> groupAttr "style" "; " ])
                
                let rec chooseNode node =
                    match node with
                    | HtmlElement (name, children) -> Some <| (Doc.Element name (getAttrsFromSeq children) (children |> Seq.choose chooseNode) :> Doc)
                    | HtmlElementF(func, children) -> Some <| (func             (getAttrsFromSeq children) (children |> Seq.choose chooseNode)       )
                    | HtmlElementV vnode           -> Some <| (vnode |> Val.toView |> Doc.BindView (chooseNode >> Option.defaultValue Doc.Empty))
                    | HtmlText     vtext           -> Some <| Val.tagDoc WebSharper.UI.Html.text vtext
                    | SomeDoc      doc             -> Some <| doc
                    | _                            -> None
                
                let getAttrChildren attr =
                    Seq.tryPick (function 
                                | HtmlAttribute(a, v) when a = attr -> Some v 
                                | _                                 -> None)
                    >> Option.defaultValue (Constant "")
                
                let rec mapHtmlElement (f:string -> seq<HtmlNode> -> string * HtmlNode seq) (element:HtmlNode) :HtmlNode =
                    match element with
                    | HtmlElement (name, children) -> f name  children                    |> HtmlElement
                    | HtmlElementV vnode           -> vnode |> Val.map (mapHtmlElement f) |> HtmlElementV
                    | _                            -> element
                
                //let getAttr attr element =
                //    match element with
                //    | HtmlElement(_, children) -> children
                //    | _                        -> seq []
                //    |> getAttrChildren attr
                //
                //let getClass = getAttr "class"
                //let getStyle = getAttr "style"
                
                //let replaceAttribute att (children: HtmlNode seq) newVal =
                //    HtmlAttribute(att, newVal)
                //    :: (children
                //        |> Seq.filter (function HtmlAttribute(old, _) when old = att -> false | _ -> true)
                //        |> Seq.toList
                //       )
                //
                //let replaceAtt att node newVal = mapHtmlElement (fun n ch -> n, replaceAttribute att ch newVal |> Seq.ofList) node
                
                let inline htmlElement    name ch = HtmlElement   (name, ch           )
                let inline htmlElementF   func ch = HtmlElementF  (func, ch           )
                let inline htmlAttribute  name v  = HtmlAttribute (name, Val.fixit v  )
                let inline htmlAttributeO name v  = HtmlAttributeO(name, Val.fixit v  )
                let inline htmlText       txt     = HtmlText      (      Val.fixit txt)
                let inline str            txt     = HtmlText      (      Val.fixit txt)
                let inline someElt        elt     = SomeDoc       (elt :> Doc         )    
                  
                let inline addChildren    add (h:HtmlNode) = h |> mapHtmlElement (fun n ch -> n, Seq.append ch   add)
                let inline insertChildren add (h:HtmlNode) = h |> mapHtmlElement (fun n ch -> n, Seq.append add  ch )
                let inline addClass       c    h           = h |> addChildren [ htmlAttribute  "class" c ] 
                let inline addClassIf     c v              = addClass <| Val.map (fun b -> if b then c else "") (Val.fixit v)
                
                let out (ps:HtmlNode list) =
                    match ps with
                    | [ ]            -> [ ]
                    | [h]            -> [h]
                    | h :: p :: tail -> addChildren [h] p :: tail
                    
                let rec indent2Level lvl chn  (ps:HtmlNode list) =
                    match ps with
                    | l when l.Length < lvl -> chn :: l
                    | _                     -> indent2Level lvl chn <| out ps        
                
                type HtmlNode with
                    member inline this.toDoc = 
                        match this with
                        | HtmlAttribute _
                        | HtmlEmpty       -> Doc.Empty
                        | _               -> chooseNode this |> Option.defaultValue Doc.Empty
                    // member inline   this.Class          clas = Val.fixit clas |> replaceAtt "class" this
                    member          this.AddChildren    add  = this |> addChildren    add
                    member          this.InsertChildren add  = this |> insertChildren add
                    member inline   this.AddClass       c    = this |> addClass       c
                    static member ( - ) (ps:HtmlNode list, chn : HtmlNode) : HtmlNode list = 
                        match ps with 
                        | h :: tail -> h.AddChildren [chn] :: tail
                        | []        -> []        
                    static member ( --- ) (ps:HtmlNode list, chn) : HtmlNode list = 
                        match ps with 
                        | [ ]            -> [ ]
                        | [h]            -> [ h.AddChildren [                 chn ] ]
                        | h :: p :: tail ->   p.AddChildren [ h.AddChildren [ chn ] ] :: tail
                    static member ( +  ) (ps:HtmlNode list, r:HtmlNode) : (HtmlNode list) =   r :: ps
                    static member ( --                   ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level  2 chn ps
                    static member ( ----                 ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level  3 chn ps    
                    static member ( ------               ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level  4 chn ps    
                    static member ( --------             ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level  5 chn ps    
                    static member ( ----------           ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level  6 chn ps    
                    static member ( ------------         ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level  7 chn ps    
                    static member ( --------------       ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level  8 chn ps    
                    static member ( ----------------     ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level  9 chn ps    
                    static member ( ------------------   ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level 10 chn ps    
                    static member ( -------------------- ) (ps: HtmlNode list, chn:HtmlNode) : HtmlNode list = indent2Level 11 chn ps    
                
                let rec finishO (ps:HtmlNode list) =
                    match ps with
                    | [ ]               -> None
                    | [h]               -> Some h
                    | _h :: _p :: _tail -> finishO <| out ps        
                
                let endHtmlIndent ps = finishO ps |> Option.defaultWith (fun () -> htmlText "Malformed HTMLNode")
                let ( !! ) (p:HtmlNode seq -> HtmlNode) l = [ p l ]
                
                let renderDoc = chooseNode >> Option.defaultValue Doc.Empty
                    
                let inline atr att v = Val.attrV  att (Val.fixit v)
                let inline tag tag v = Val.tagDoc tag (Val.fixit v)
                
                let inline _class       v = atr "class"       v
                let inline _type        v = atr "type"        v
                let inline _style       v = atr "style"       v
                let inline _placeholder v = atr "placeholder" v
                let inline textV        v = tag  Html.text    v
                
                let inline a           ch = htmlElement   "a"           ch
                let inline p           ch = htmlElement   "p"           ch
                let inline ul          ch = htmlElement   "ul"          ch
                let inline li          ch = htmlElement   "li"          ch
                let inline br          ch = htmlElement   "br"          ch
                let inline hr          ch = htmlElement   "hr"          ch
                let inline h1          ch = htmlElement   "h1"          ch
                let inline h2          ch = htmlElement   "h2"          ch
                let inline h3          ch = htmlElement   "h3"          ch
                let inline h4          ch = htmlElement   "h4"          ch
                let inline h5          ch = htmlElement   "h5"          ch
                let inline h6          ch = htmlElement   "h6"          ch
                let inline div         ch = htmlElement   "div"         ch
                let inline img         ch = htmlElement   "img"         ch
                let inline span        ch = htmlElement   "span"        ch
                let inline form        ch = htmlElement   "form"        ch
                let inline table       ch = htmlElement   "table"       ch
                let inline thead       ch = htmlElement   "thead"       ch
                let inline th          ch = htmlElement   "th"          ch
                let inline tr          ch = htmlElement   "tr"          ch
                let inline td          ch = htmlElement   "td"          ch
                let inline tbody       ch = htmlElement   "tbody"       ch
                let inline label       ch = htmlElement   "label"       ch
                let inline button      ch = htmlElement   "button"      ch
                let inline script      sc = htmlElement   "script"      sc
                let inline styleH      st = htmlElement   "style"       st
                let inline fieldset    ch = htmlElement   "fieldset"    ch
                let inline link        sc = htmlElement   "link"        sc
                let inline iframe      at = htmlElement   "iframe"      at
                let inline body        ch = htmlElement   "body"        ch
                let inline section     ch = htmlElement   "section"     ch
                let inline strong      at = htmlElement   "strong"      at
                
                
                let inline target      v  = htmlAttribute  "target"      v
                let inline href        v  = htmlAttribute  "href"        v
                let inline hrefO       vO = htmlAttributeO "href"        vO
                let inline rel         v  = htmlAttribute  "rel"         v
                let inline charset     v  = htmlAttribute  "charset"     v
                let inline src         v  = htmlAttribute  "src"         v
                let inline ``class``   v  = htmlAttribute  "class"       v
                let inline ``type``    v  = htmlAttribute  "type"        v
                let inline width       v  = htmlAttribute  "width"       v
                let inline title       v  = htmlAttribute  "title"       v
                let inline Id          v  = htmlAttribute  "id"          v
                let inline frameborder v  = htmlAttribute  "frameborder" v
                let inline spellcheck  v  = htmlAttribute  "spellcheck"  v
                let inline draggable   v  = htmlAttribute  "draggable"   v
                let inline style       v  = htmlAttribute  "style"       v
                let inline placeholder v  = htmlAttribute  "placeholder" v
                
                let inline style1    n v  = style <| Val.map ((+) (n + ":")) v
                
                type HtmlNode with
                    member inline   this.Style          sty  = this.AddChildren([ style sty ])
                
                let inline css         v  = styleH [ htmlText v ] 
                
                let inline classIf cls v = ``class`` <| Val.map (fun b -> if b then cls else "") (Val.fixit v)
                
                //let inline ``xclass`` v  = 
                //    match Val.fixit v with
                //    | Constant c  -> Attr.Class        c       
                //    | Dynamic  cw -> Attr.DynamicClass "class_for_view_not_implemented" cw      ((<>)"")
                //    | DynamicV cv -> Attr.DynamicClass cv.Value                         cv.View ((<>)"")
                //    |> SomeAttr
                
                let style2pairs (ss:string) : (string * string) [] =
                    ss.Split(';') 
                    |> Array.map   (fun s -> s.Split(':') ) 
                    |> Array.filter(fun d -> d.Length = 2 )
                    |> Array.map   (fun d -> d.[0].Trim(), d.[1].Trim() )
                
                let string2Styles = style2pairs >> Array.map (fun (n, v) -> Attr.Style n v |> SomeAttr)
                
                //let composeDoc elt dtl dtlVal = dtlVal |> Val.toView |> Doc.BindView (Seq.append dtl >> elt >> renderDoc) |> SomeDoc
                
                let inline bindHElem hElemF v  = Val.map hElemF  (Val.fixit v) |> HtmlElementV
                
                let createIFrame f =
                    let cover = Var.Create true
                    div [ style           "position: relative; overflow: hidden; height: 100%; width: 100%;" 
                          iframe 
                            [ style       "position: absolute; width:100%; height:100%;"
                              frameborder "0"
                              SomeAttr <| on.afterRender f
                              SomeAttr <| on.mouseLeave (fun _ _ -> cover.Value <- true)
                            ]
                          div 
                            [ style       "position: absolute;"
                              classIf     "iframe-cover" (Val.map id cover)               
                              SomeAttr <| on.mouseEnter (fun _ _ -> Input.Mouse.MousePressed 
                                                                    |> View.Get (fun pressed -> if not pressed then cover.Value <- false))
                            ]          
                          styleH [ htmlText ".iframe-cover { top:0; left:0; right:0; bottom:0; background: blue; opacity: 0.04; z-index: 2; }" ]
                        ]
                
                [< Inline "(!$v)">]
                let isUndefined v = v.GetType() = v.GetType()
                
                let  findRootElement (e:Dom.Element) =
                    if isUndefined e.GetRootNode then JS.Document.Body
                    else
                        let root = e.GetRootNode()
                        if isUndefined root?body 
                        then root.FirstChild :?> Dom.Element
                        else root?body  |> unbox<Dom.Element>
                
              open HtmlNode
              [<JavaScript>]
              module Template      =
                type Bootstrap() =
                    member this.Render =
                        div [
                          script [ src  "http://code.jquery.com/jquery-3.1.1.min.js' type='text/javascript"    ; ``type`` "text/javascript" ; charset "UTF-8"      ]
                          script [ src  "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"   ; ``type`` "text/javascript" ; charset "UTF-8"      ]
                          link   [ href "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" ; ``type`` "text/css"        ; rel     "stylesheet" ]
                          link   [ href "/EPFileX/css/main.css"                                                ; ``type`` "text/css"        ; rel     "stylesheet" ]
                         ]
                
                [<NoComparison ; NoEquality>]
                type Input = {
                    _type       : Val<string>
                    _class      : Val<string>
                    style       : Val<string>
                    placeholder : Val<string>
                    id          : string
                    var         : Var<string>
                    prefix      : HtmlNode
                    suffix      : HtmlNode
                    content     : Attr seq
                    prefixAdded : bool
                    suffixAdded : bool
                    disabled    : Val<bool>
                } with
                  static member  New(var) = { _class      = Val.fixit "form-control" 
                                              _type       = Val.fixit "text" 
                                              style       = Val.fixit "" 
                                              placeholder = Val.fixit "Enter text:"
                                              id          = ""
                                              content     = []
                                              prefix      = HtmlEmpty
                                              prefixAdded = false
                                              suffix      = HtmlEmpty
                                              suffixAdded = false
                                              var         = var   
                                              disabled    = Val.fixit false
                                            }
                  member        this.Render    =         
                    let groupClass det = match det with HtmlText _  -> "input-group-addon" | _ -> "input-group-btn"
                    div [
                        if this.prefixAdded || this.suffixAdded then
                            yield ``class`` "input-group"
                        if this.prefixAdded then
                            yield  span     [ ``class`` <| groupClass this.prefix 
                                              this.prefix       ]
                        yield Doc.Input ([_type            this._type
                                          _class           this._class
                                          _style           this.style
                                          attr.id          this.id  
                                          attr.disabledDynPred (View.Const "") (this.disabled |> Val.toView)
                                          _placeholder     this.placeholder ] |> Seq.append this.content)
                                          this.var
                              :> Doc |> SomeDoc
                        if this.suffixAdded then
                            yield  span     [ ``class`` <| groupClass this.suffix 
                                              this.suffix       ]
                      ]
                  member inline this.Class       clas = { this with _class      = Val.fixit clas                  }
                  member inline this.Type        typ  = { this with _type       = Val.fixit typ                   }
                  member inline this.Style       sty  = { this with style       = Val.fixit sty                   }
                  member inline this.Placeholder plc  = { this with placeholder = Val.fixit plc                   }
                  member inline this.Id          id   = { this with id          =       id                        }
                  member inline this.Content     c    = { this with content     =       c                         }
                  member inline this.Prefix      p    = { this with prefix      =       p    ; prefixAdded = true }
                  member inline this.Prefix      p    = this.Prefix(htmlText p)
                  member inline this.Suffix      s    = { this with suffix      =       s    ; suffixAdded = true }
                  member inline this.SetVar      v    = { this with var         = v                               }
                  member inline this.Disabled    dis  = { this with disabled    = Val.fixit dis                   }
                  member inline this.Var              = this.var
                  static member  New(v:string)              = Input.New(Var.Create v)
                  static member  New(v:Var<string option>) = Input.New(Var.Lens v (Option.defaultValue "") (fun sO s -> sO |> Option.map (fun _ -> s) )).Disabled(v |> Val.map Option.isNone)
                  
                [<NoComparison ; NoEquality>]
                type Panel = {
                    _class   : Val<string>
                    _style   : Val<string>
                    title    : Val<string>
                    header   : HtmlNode seq
                    content  : HtmlNode seq
                    disabled : Val<bool>
                } with
                  static member  New   = { _class   = Val.fixit <| "panel panel-default shadow"
                                           _style   = Val.fixit <| "text-align:center" 
                                           title    = Val.fixit <| "Panel"        
                                           header   =          [ htmlText "Some text"    ] 
                                           content  =          [ htmlText "Some Content" ] 
                                           disabled = Val.fixit <| Var.Create false
                                         }
                  member        this.Render          =  
                    fieldset [ SomeAttr <| attr.disabledDynPred (View.Const "")  (this.disabled |> Val.toView)
                               div [ ``class`` this._class
                                     div (Seq.append
                                              [ ``class`` "panel-heading"
                                                label [ ``class``  "panel-title text-center" ; htmlText this.title ]
                                              ]
                                              this.header)
                
                                     div (Seq.append
                                              [ ``class`` "panel-body"
                                                style     this._style 
                                              ]
                                              this.content)
                                   ] 
                             ]
                  member inline this.Class       clas = { this with _class   = Val.fixit clas }
                  member inline this.Style       sty  = { this with _style   = Val.fixit sty  }
                  member inline this.Title       txt  = { this with title    = Val.fixit txt  }
                  member inline this.Header      h    = { this with header   =       h        }
                  member inline this.Content     c    = { this with content  =       c        }
                  member inline this.Disabled    dis  = { this with disabled =       dis      }
                
              [<JavaScript>]
              module RunCode       =
                type RunNode(nodeName, ?clearNode: bool, ?useShadowRoot:bool) =
                  let bClearNode    = defaultArg clearNode     true
                  let useShadowRoot = defaultArg useShadowRoot true
                  let createNode() =
                      let e = JS.Document.CreateElement "div"
                      e?style <- "height: 100%; width: 100%;"
                      e
                  let createBaseNode () =
                      let el = JS.Document.CreateElement "div"
                      el.SetAttribute("id", nodeName)
                      JS.Document.Body.AppendChild el |> ignore
                      el
                  let baseNode = 
                      match JS.Document.GetElementById nodeName with
                      | null -> createBaseNode()
                      | node -> node
                  let runNode =
                      if not useShadowRoot then baseNode else
                      match baseNode.ShadowRoot with
                      | null -> let p = createNode()
                                baseNode.AttachShadow(Dom.ShadowRootInit(Dom.ShadowRootMode.Open)).AppendChild p |> ignore
                                let e = createNode()
                                p.AppendChild e |> ignore
                                e
                      | root -> root.FirstChild :?> Dom.Element
                  do if bClearNode then runNode.InnerHTML <- ""
                with
                  new(?clearNode: bool, ?useShadowRoot:bool) = RunNode("TestNode", ?clearNode = clearNode, ?useShadowRoot = useShadowRoot)
                  member this.RunNode   = runNode
                
                  member this.AddBootstrap =
                    JS.Document.CreateElement "div"
                    |> fun el -> 
                        el.InnerHTML <- 
                          @"<script src='http://code.jquery.com/jquery-3.1.1.min.js' type='text/javascript' charset='UTF-8'></script>
                            <script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' type='text/javascript' charset='UTF-8'></script>
                            <link type='text/css' rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
                            <link type='text/css' rel='stylesheet' href='/EPFileX/css/main.css'>
                           "
                        runNode.ParentElement.AppendChild el |> ignore
                    this
              module WSServer = 
                //#r @"..\packages\Owin\lib\net40\Owin.dll"
                //#r @"..\packages\Microsoft.Owin\lib\net45\Microsoft.Owin.dll"
                //#r @"..\packages\Microsoft.Owin.Hosting\lib\net45\Microsoft.Owin.Hosting.dll"
                //#r @"..\packages\Microsoft.Owin.Host.HttpListener\lib\net45\Microsoft.Owin.Host.HttpListener.dll"
                //#r @"..\packages\Microsoft.Owin.StaticFiles\lib\net45\Microsoft.Owin.StaticFiles.dll"
                //#r @"..\packages\Microsoft.Owin.FileSystems\lib\net45\Microsoft.Owin.FileSystems.dll"
                //#r @"..\packages\WebSharper.Owin\lib\net461\WebSharper.Owin.dll"
                //#r @"..\packages\WebSharper.Owin\lib\net461\HttpMultipartParser.dll"
                //#r @"..\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
                //#r @"..\packages\WebSharper.Owin.WebSocket\lib\net461\Owin.WebSocket.dll"
                //#r @"..\packages\WebSharper.Owin.WebSocket\lib\net461\WebSharper.Owin.WebSocket.dll"
                
                open WebSharper.Owin.WebSocket
                open WebSharper.Owin.WebSocket.Client
                
                type [<JavaScript; NamedUnionCases>]
                    C2SMessage =
                    | Request1 of str: string[]
                    | Request2 of int: int   []
                
                type [<JavaScript; NamedUnionCases "type">]
                    S2CMessage =
                    | [<Name "int"   >] Response2 of value: int
                    | [<Name "string">] Response1 of value: string
                
                [< JavaScript >]
                let WebSocketClient (epWebSocket : Endpoint<S2CMessage, C2SMessage>) =
                    let output = Var.Create ""
                    let writen fmt = Printf.ksprintf (fun s -> output.Value <- output.Value + "\n" + s) fmt
                    async {
                        do  writen "Checking regression #4..."
                            JQuery.AjaxSettings(Url     = "/ws.txt"
                                              , Method  = JQuery.RequestType.GET
                                              , Success = (fun x _ _ -> writen "%s" (x :?> _))
                                              , Error   = (fun _ _ e -> writen "KO: %s." e)
                            )
                            |> JQuery.JQuery.Ajax
                            |> ignore
                        let! server =
                            ConnectStateful epWebSocket <| fun server -> async {
                                return 0, fun state msg -> async {
                                    match msg with
                                    | Message data ->
                                        match data with
                                        | Response1 x -> writen "Response1 %s (state: %i)" x state
                                        | Response2 x -> writen "Response2 %i (state: %i)" x state
                                        return (state + 1)
                                    | Close ->
                                        writen "WebSocket connection closed."
                                        return state
                                    | Open ->
                                        writen "WebSocket connection open."
                                        return state
                                    | Error ->
                                        writen "WebSocket connection error!"
                                        return state
                                }
                            }
                        
                        let lotsOfHellos = "HELLO" |> Array.create 1000
                        let lotsOf123s = 123 |> Array.create 1000
                        while true do
                            do! Async.Sleep 1000
                            server.Post (Request1 [| "HELLO" |])
                            do! Async.Sleep 1000
                            server.Post (Request2 lotsOf123s)
                    }
                    |> Async.Start
                    output
                
                let invert (txt: string) : string = txt |> Seq.rev |> Seq.map string |> String.concat ""
                
                [< Rpc >]
                let invertA txt = async { return invert txt }
                
                [< JavaScript >]
                let ClientForm epWebSocket =
                    let inp    = Template.Input.New("Type something...")
                    let output = WebSocketClient epWebSocket
                    div [ 
                      ``class`` "container"    
                      Template.Bootstrap().Render
                      Template.Panel.New
                        .Title("Client Server Demo")
                        .Header([])
                        .Content(
                          [ h3 [
                              inp.Render
                              htmlText inp.Var
                              htmlElement "h2" [ htmlText inp.Var ]
                              h1 [ htmlText <| Val.mapAsync invertA inp.Var ]
                            ]
                            htmlText output
                          ]).Render
                    ] |> renderDoc
                
                //#r @"..\packages\WebSharper.UI.Next\lib\net40\HtmlAgilityPack.dll"
                //#r @"..\packages\WebSharper.UI.Next\lib\net40\WebSharper.UI.Next.Templating.dll"
                //#r @"..\packages\WebSharper.UI.Next\lib\net40\WebSharper.UI.Next.Templating.Common.dll"
                //#r @"..\packages\WebSharper.UI.Next\lib\net40\WebSharper.UI.Next.Templating.Runtime.dll"
                
                
                open WebSharper.Sitelets
                open WebSharper.UI.Server
                open WebSharper.UI.Templating
                
                type EndPoint = | [< EndPoint "/" >] EP
                
                type MainTemplate = Template< @"D:\Abe\CIPHERWorkspace\FSharpStation\bin/Compiled/ClientServerDemo/website/test.html">
                
                let content epWebSocket (ctx:Context<EndPoint>) (endpoint:EndPoint) : Async<Content<EndPoint>> =
                    MainTemplate()
                        .Title("Main Page")
                        .Body( [ Html.client <@  ClientForm epWebSocket @> ])
                        .Doc()
                    |> Content.Page
                
                let site epWebSocket = Application.MultiPage (content epWebSocket)
                
                
                module Server =
                    open WebSharper
                    open WebSharper.Owin.WebSocket.Server
                
                    let Start epWebSocket : StatefulAgent<S2CMessage, C2SMessage, int> =
                        /// print to debug output and stdout
                        let dprintfn x =
                            Printf.ksprintf (fun s ->
                                System.Diagnostics.Debug.WriteLine s
                                stdout.WriteLine s
                            ) x
                
                        fun client -> async {
                            let clientIp = client.Connection.Context.Request.RemoteIpAddress
                            return 0, fun state msg -> async {
                                eprintfn "Received message #%i from %s" state clientIp
                                match msg with
                                | Message data -> 
                                    match data with
                                    | Request1 x -> do! client.PostAsync (Response1 x.[0])
                                    | Request2 x -> do! client.PostAsync (Response2 x.[0])
                                    return state + 1
                                | Error exn -> 
                                    dprintfn "Error in WebSocket server connected to %s: %s" clientIp exn.Message
                                    do! client.PostAsync (Response1 ("Error: " + exn.Message))
                                    return state
                                | Close ->
                                    eprintfn "Closed connection to %s" clientIp
                                    return state
                            }
                        }
                
                
                //#r @"..\packages\Owin.Compression\lib\net452\Owin.Compression.dll"
                
                open global.Owin
                open Microsoft.Owin.Hosting
                open Microsoft.Owin.StaticFiles
                open Microsoft.Owin.FileSystems
                open WebSharper.Owin
                open WebSharper.Owin.WebSocket
                
                [< EntryPoint >]
                let Main args =
                    let rootDirectory, url =
                        match args with
                        | [| rootDirectory; url |] -> rootDirectory, url
                        | [| url                |] -> "website"    , url
                        | [|                    |] -> "website"    , "http://localhost:9033/"
                        | _ -> eprintfn "Usage: WebServer3 ROOT_DIRECTORY URL"; exit 1
                    let epWebSocket = Endpoint.Create(url, "/ws", JsonEncoding.Readable)
                    //printfn "Starting, hit <Enter>..." ; stdin.ReadLine() |> ignore
                    use server = 
                        WebApp.Start(url, fun appB ->
                            appB.UseWebSharper(WebSharperOptions(ServerRootDirectory = rootDirectory
                                                               , Sitelet             = Some (site epWebSocket)
                                                               , BinDirectory        = "."
                                                               , Debug               = true))
                                .UseWebSocket(  epWebSocket, Server.Start epWebSocket)
                                .UseStaticFiles(StaticFileOptions(FileSystem = PhysicalFileSystem(rootDirectory)))
                                .UseCompressionModule()
                            |> ignore
                            let listener = appB.Properties.["Microsoft.Owin.Host.HttpListener.OwinHttpListener"] |> unbox<Microsoft.Owin.Host.HttpListener.OwinHttpListener>
                            listener.SetRequestProcessingLimits(1000, 1000)
                            let maxA = ref 0
                            let maxB = ref 0
                            listener.GetRequestProcessingLimits(maxA, maxB)
                            printfn "Accepts: %d Requests:%d" !maxA !maxB
                        )
                    stdout.WriteLine("Serving {0}", url)
                    stdin.ReadLine() |> ignore
                    0
                        
                
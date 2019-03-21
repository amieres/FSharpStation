////-d:FSharpStation1552522263490
/// Root namespace for all code
//#define FSharpStation1552522263490
#if INTERACTIVE
module FsRoot   =
#else
namespace FsRoot
#endif

    
        /// Essentials that cannot run in Javascript (WebSharper)
        [< AutoOpen >]
        module LibraryNoJS =
            let rec getNamespace (t:System.Type) =
                match t.DeclaringType with
                | null -> match t.Namespace with null -> "" | ns -> ns + "."
                | dt   -> getNamespace dt + dt.Name + "."
            
            let rec getTypeName (t:System.Type) =
                if t.IsArray then getTypeName (t.GetElementType()) + "[]" else
                let ns    = getNamespace t
                let name  = if   t.Name = "FSharpOption`1"                then "Option"
                            elif t.Name = "FSharpList`1"                  then "List"
                            elif ns     = "Microsoft.FSharp.Core."
                              || ns     = "Microsoft.FSharp.Collections." then t.Name   
                            else  ns + t.Name
                let name2 = name.Split('`').[0]
                let parms = t.GenericTypeArguments |> Seq.map getTypeName |> String.concat ","
                if parms = "" then name2 else sprintf "%s<%s>" name2 parms
            
//#define FSharpStation1552522263490
let inline tee    f v   = f v ; v
let inline  (|>!) v f   = f v ; v
let inline  (>>!) g f   = g >> fun v -> f v ; v

let inline print v = 
    match box v with
    | :? string as s -> printfn "%s" s
    | __             -> printfn "%A" v
open FsRoot

module Aaaa =
    [< AutoOpen >]
    module Bbbb =
        type CCC = CCCa
        type DDD = {
            a : int
        }
    module Eeee =
        type Pair(n:int) =
            let b = 1
            with member __.a = 3 

let show (v:_) = 
    let t = v.GetType()

    (getTypeName t , t.FullName, t.Namespace, t.Name, t.DeclaringType, t.IsNested
    )
    |> print

{ Aaaa.Bbbb.a = 3}     |> show
[| Aaaa.Bbbb.CCCa  |]  |> show
[ Aaaa.Eeee.Pair(1) ]  |> show

({ Aaaa.Bbbb.a = 3}
, Aaaa.Bbbb.CCCa     
, Aaaa.Eeee.Pair 1)   |> show

open System

let reverseString (myStr: string) = myStr|>Seq.toList|>List.rev |> Array.ofList |> String

"reverseString"
|> Seq.toList|>List.rev |> Array.ofList
|> print

"reverseString"
|> Seq.toList |>List.rev |> Array.ofList |> string
|> print

module Answer =
    open System

    [| 'a'; 'b'; 'c'|] |> string  |> printfn "%A" //   "System.Char[]"
    [| 'a'; 'b'; 'c'|].ToString() |> printfn "%A" //   "System.Char[]"
    [| 'a'; 'b'; 'c'|] |> String  |> printfn "%A" //   "abc" 

    6                  |> string  |> printfn "%A" //   "6"
    6                 .ToString() |> printfn "%A" //   "6"
    6                  |> String  |> printfn "%A" //  error: no overloads for int

    "abc"              |> string  |> printfn "%A" //   "abc"
    "abc"             .ToString() |> printfn "%A" //   "abc"
    "abc"              |> String  |> printfn "%A" //   Strangelly enough gives error too

    "abc"              |> Core.string  |> printfn "%A"
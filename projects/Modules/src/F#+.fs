////-d:FSharpStation1543377169543
/// Root namespace for all code
//#define FSharpStation1543377169543
#if INTERACTIVE
module FsRoot   =
#else
namespace FsRoot
#endif

    
        /// Essentials that cannot run in Javascript (WebSharper)
        [< AutoOpen >]
        module LibraryNoJS =
            /// returns (milliseconds / order)
            let timeMe order round f p =
                let before = System.DateTime.UtcNow
                let r = f p
                let dur = System.DateTime.UtcNow - before
                let rnd = if round then order / 2 else 0
                (dur.Hours * 3_600_000 + dur.Minutes * 60_000 + dur.Seconds * 1000 + dur.Milliseconds + rnd ) / order, r
//#define FSharpStation1543377169543
let inline tee f v = f v ; v
let inline  (|>!) v f   = f v ; v
let inline  (>>!) g f   = g >> fun v -> f v ; v

let inline print v = 
    match box v with
    | :? string as s -> printfn "%s" s
    | __             -> printfn "%A" v
module Answer =
    let update (x : array<double>) : array<double> = 
        let xSum = (x |> Array.sum) - x.[0]

        let xSumN = 
            [|
                1.0 * x.[1] // A
                1.0 * x.[2] // a
                2.0 * x.[3] // AA
                2.0 * x.[4] // Aa
                2.0 * x.[5] // aA
                2.0 * x.[6] // aa
            |]
            |> Array.sum

        let xSumSquaredN = 
            [|
                1.0 * x.[1] * x.[1] // A
                1.0 * x.[2] * x.[2] // a
                2.0 * x.[3] * x.[3] // AA
                2.0 * x.[4] * x.[4] // Aa
                2.0 * x.[5] * x.[5] // aA
                2.0 * x.[6] * x.[6] // aa
            |]
            |> Array.sum

        [|

            // 0 - Y
            [|

                0.0001 * x.[2] // a | SynthesisName: Y <-> a
                -0.001 * x.[0] // Y | SynthesisName: Y <-> a
                0.0001 * x.[1] // A | SynthesisName: Y <-> A
                -0.001 * x.[0] // Y | SynthesisName: Y <-> A
            |]
            |> Array.sum

            // 1 - A
            [|

                0.0001 * x.[5] // aA | LigationName: a + A <-> aA
                -0.001 * x.[2] * x.[1] // a + A | LigationName: a + A <-> aA
                0.0001 * x.[4] // Aa | LigationName: A + a <-> Aa
                -0.001 * x.[1] * x.[2] // A + a | LigationName: A + a <-> Aa
                0.0001 * x.[3] // AA | LigationName: A + A <-> AA
                0.0001 * x.[3] // AA | LigationName: A + A <-> AA
                -0.001 * x.[1] * x.[1] // A + A | LigationName: A + A <-> AA
                -0.001 * x.[1] * x.[1] // A + A | LigationName: A + A <-> AA
                -0.0001 * x.[1] // A | SynthesisName: Y <-> A
                0.001 * x.[0] // Y | SynthesisName: Y <-> A
            |]
            |> Array.sum

            // 2 - a
            [|

                0.0001 * x.[5] // aA | LigationName: a + A <-> aA
                -0.001 * x.[2] * x.[1] // a + A | LigationName: a + A <-> aA
                0.0001 * x.[4] // Aa | LigationName: A + a <-> Aa
                -0.001 * x.[1] * x.[2] // A + a | LigationName: A + a <-> Aa
                0.0001 * x.[6] // aa | LigationName: a + a <-> aa
                0.0001 * x.[6] // aa | LigationName: a + a <-> aa
                -0.001 * x.[2] * x.[2] // a + a | LigationName: a + a <-> aa
                -0.001 * x.[2] * x.[2] // a + a | LigationName: a + a <-> aa
                -0.0001 * x.[2] // a | SynthesisName: Y <-> a
                0.001 * x.[0] // Y | SynthesisName: Y <-> a
            |]
            |> Array.sum

            // 3 - AA
            [|

                -0.0001 * x.[3] // AA | LigationName: A + A <-> AA
                0.001 * x.[1] * x.[1] // A + A | LigationName: A + A <-> AA
            |]
            |> Array.sum

            // 4 - Aa
            [|

                -0.0001 * x.[4] // Aa | LigationName: A + a <-> Aa
                0.001 * x.[1] * x.[2] // A + a | LigationName: A + a <-> Aa
            |]
            |> Array.sum

            // 5 - aA
            [|

                -0.0001 * x.[5] // aA | LigationName: a + A <-> aA
                0.001 * x.[2] * x.[1] // a + A | LigationName: a + A <-> aA
            |]
            |> Array.sum

            // 6 - aa
            [|

                -0.0001 * x.[6] // aa | LigationName: a + a <-> aa
                0.001 * x.[2] * x.[2] // a + a | LigationName: a + a <-> aa
            |]
            |> Array.sum

        |]

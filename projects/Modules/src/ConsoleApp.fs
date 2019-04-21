
            let throwAsync wait = async {
                do! Async.Sleep wait
                failwith "I was not caught!" 
            }
            
            let catchAsync wait = async {
                try 
                    do! throwAsync wait
                with _-> printfn "caught inside async!"
            }
            
            [<EntryPoint>]
            let main argv =
                try throwAsync  100 |> Async.Start 
                with _ -> printfn "I did not catch it!"
                try catchAsync 2000 |> Async.Start 
                with _ -> printfn "I did not catch it either!"
                try throwAsync 1000 |> Async.RunSynchronously 
                with _ -> printfn "caught outside!"
                Async.Sleep 5000 |> Async.RunSynchronously
                printfn "finishing!"
                0
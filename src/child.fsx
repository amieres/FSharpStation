open System

module Mailbox =

    /// A simple Mailbox processor to serially process Async tasks
    /// use:
    ///      let logThisMsgA = Mailbox.iterA (printfn "%A") (fun msg -> async { printfn "Log: %s" msg } )
    ///      logThisMsgA.Post "message Async"
    ///      
    let iterA hndl f =
        MailboxProcessor.Start(fun inbox ->
            async {
                while true do
                    try       let!   msg = inbox.Receive()
                              do!  f msg
                    with e -> hndl e
            }
        )
        
    /// A simple Mailbox processor to serially process tasks
    /// use:
    ///      let logThisMsg = Mailbox.iter (printfn "%A") (printfn "Log: %s")
    ///      logThisMsg.Post "message"
    ///      
    let iter hndl f = iterA hndl (fun msg -> async { f msg } )

let logError (x : string) : unit =
    Console.ForegroundColor <- ConsoleColor.Red
    try stderr.WriteLine x
    finally Console.ResetColor ()

let logWarning (x : string) : unit =
    Console.ForegroundColor <- ConsoleColor.Yellow
    try stdout.WriteLine x
    finally Console.ResetColor ()

let logInfo (x : string) : unit =
    Console.ForegroundColor <- ConsoleColor.Green
    try stdout.WriteLine x
    finally Console.ResetColor ()

let sequenceActions = Mailbox.iter (printfn "%A") (fun f -> f() )

let logSeq f txt = sequenceActions.Post <| fun () -> f txt

let logError2   txt = logSeq logError   txt
let logWarning2 txt = logSeq logWarning txt
let logInfo2    txt = logSeq logInfo    txt

logError2 "The quick brown fox jumps over the lazy dog."

logWarning2 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu est ut arcu finibus iaculis. Maecenas dapibus luctus convallis. Donec tristique accumsan ante sit amet maximus. Sed molestie eros sit amet pretium rhoncus. Sed odio lectus, vestibulum vitae consequat sit amet, eleifend ac augue. Vivamus eros quam, lobortis eget consequat in, pulvinar vel dolor. Sed efficitur fermentum purus eu imperdiet. Mauris posuere, metus nec fringilla accumsan, massa nisi egestas augue, et tristique ligula dolor sit amet nibh. Proin ultricies fermentum tellus, vitae porttitor mauris elementum id. Donec arcu dolor, posuere vel efficitur ultrices, sollicitudin sit amet mauris. Sed eu suscipit leo, in vehicula sem. Morbi congue nibh vitae orci lobortis, gravida volutpat augue imperdiet. Phasellus fringilla arcu ac tellus porttitor mattis. Donec in ante vitae sem varius pulvinar."

logInfo2 "Nam lorem justo, laoreet ac convallis et, semper et leo. Fusce ornare, risus ut porta tristique, purus lacus ultricies ante, ac semper metus eros quis sapien. Nunc vulputate neque ut efficitur condimentum. Quisque facilisis lacus at lorem condimentum suscipit. Aenean volutpat et dui non pharetra. Pellentesque pretium euismod sollicitudin. Phasellus ullamcorper nulla quis nibh tincidunt consectetur. Nulla gravida finibus mi, sed elementum ligula maximus sed. Ut eu dignissim ex. Nullam vestibulum accumsan ex, ut facilisis elit facilisis scelerisque. Integer pellentesque, sem a molestie porta, tortor felis consectetur lorem, ut interdum lacus mauris vel nisi. Maecenas justo nulla, pharetra at malesuada ac, sollicitudin quis tortor. Integer vehicula, mauris ac tristique vehicula, leo nibh cursus sem, sed rhoncus libero sapien ac tellus."


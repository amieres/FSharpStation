#nowarn "1182"
#nowarn "40"
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
  //#I @"..\packages\Zafir\lib\net40"
  
  //#r @"WebSharper.Core.dll"
  //#r @"WebSharper.Core.JavaScript.dll"
  //#r @"WebSharper.Collections.dll"
  //#r @"WebSharper.Main.dll"
  //#r @"WebSharper.JQuery.dll"
  //#r @"WebSharper.JavaScript.dll"
  //#r @"WebSharper.Web.dll"
  //#r @"WebSharper.Sitelets.dll"
  //#r @"..\packages\Zafir.UI.Next\lib\net40\WebSharper.UI.Next.dll"
  
  open WebSharper
  open WebSharper.JavaScript
  open WebSharper.UI.Next
  open WebSharper.UI.Next.Client
  type on   = WebSharper.UI.Next.Html.on
  type attr = WebSharper.UI.Next.Html.attr
  #endif
  module UsefulDotNet =
    //#r @"..\packages\FSharp.Data\lib\net40\FSharp.Data.dll"
    //#r @"..\packages\FSharp.Data\lib\net40\FSharp.Data.DesignTime.dll"
    
    //#define WEBSHARPER
    //#define FSS_SERVER
    
    open System
    open System.Net
    open System.Text
    open System.IO
    open WebSharper
    //open WebSharper.Remoting
    //open WebSharper.JavaScript
    
    //#if FSS_SERVER
    let sendRequestRpcEP     = "RemotingDll:FSSGlobal.UsefulDotNet.sendRequest:-426626804"
    let awaitRequestForRpcEP = "RemotingDll:FSSGlobal.UsefulDotNet.awaitRequestFor:-439983525"
    let replyToRpcEP         = "RemotingDll:FSSGlobal.UsefulDotNet.replyTo:-1092841374"
    //#else
    //let sendRequestRpcEP     = "Remote:CIPHERPrototype.Messaging.sendRequest:1096816393"
    //let awaitRequestForRpcEP = "Remote:CIPHERPrototype.Messaging.awaitRequestFor:278590570"
    //let replyToRpcEP         = "Remote:CIPHERPrototype.Messaging.replyTo:-1092841374"
    //#endif
    
    
    #if WEBSHARPER
    [< JavaScript >]
    #endif
    module Messaging =
        let mutable Debug = true
        
        type AddressId = AddressId of string
        
        type Request = {
            toId              : AddressId
            fromId            : AddressId
            content           : string
            mutable messageId : Guid option
        }
        
        type MBMessage =
        | Listener of AddressId * (Request->unit) * (exn->unit) * (OperationCanceledException->unit)
        | Request  of Request   * (string ->unit) * (exn->unit) * (OperationCanceledException->unit)
        | Reply    of Guid      *  string
        
        type POMessage =
        | POIdentification
        | POEcho   of string
        | POListeners
        | POPendingRequests
        | POPendingReplys
        
        type POResponse =
        | POString  of string
        | POStrings of string[]
    
    open Messaging
    
    let extract n (s:string) = s.Substring(0, min n s.Length)
    let now() = System.DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss.fff", System.Globalization.CultureInfo.InvariantCulture)
    
    type PostOffice() =
        let mutable listeners = [| |]
        let mutable requests  = [| |]
        let mutable sent      = [| |]
        let agent = MailboxProcessor.Start(fun mail ->
            async {
                while true do
                    let! mbMsg = mail.Receive()
                    match mbMsg with
                    | Listener                  (listener, lfs, lfe, lfc)  ->
                        if Messaging.Debug then printfn "%s Listener:   %A"       (now()) listener
                        requests
                        |> Seq.indexed
                        |> Seq.tryPick (fun (i, (request , rfs, rfe, rfc)) -> 
                            if request.toId <> listener then None else
                            requests <- Array.append requests .[0..i-1]  requests .[i+1..requests .Length - 1]
                            if Messaging.Debug then printfn "removed %d" requests.Length
                            Some(lfs, request, rfs))
                        |> (fun v -> (if v.IsNone then 
                                        listeners <- 
                                            listeners 
                                            |> Array.filter(fun (lnr, lfs, exn, cen) -> 
                                                if lnr = listener then
                                                    //exn <| DivideByZeroException ()
                                                    //exn <| TimeoutException ()
                                                    lfs <| {
                                                                toId      = AddressId ""
                                                                fromId    = AddressId ""
                                                                content   = "{\"$\":0}"
                                                                messageId = None
                                                            }
                                                    false
                                                else true) 
                                            |> Array.append [| listener, lfs, lfe, lfc |]); v)
                    | Request                     (request , rfs, rfe, rfc)  ->
                        if Messaging.Debug then printfn "%s Request: %A %A %A" (now()) request.toId request.fromId (extract 80 request.content)
                        listeners
                        |> Seq.indexed
                        |> Seq.tryPick (fun (i, (listener, lfs, lfe, lfc)) -> 
                            if request.toId <> listener then None else 
                            listeners <- Array.append listeners.[0..i-1] listeners.[i+1..listeners.Length - 1]
                            Some(lfs, request, rfs))
                        |> (fun v -> if v.IsNone then requests  <- requests  |> Array.append <| [| request , rfs, rfe, rfc |]
                                                      if Messaging.Debug then printfn "appended %d" requests.Length
                                     v)
                    | Reply                       (reply   , response)  ->
                        if Messaging.Debug then printfn "%s Reply:   %s"       (now()) (extract 100 response)
                        sent
                        |> Seq.indexed
                        |> Seq.pick (fun (i, (request , rfs)) -> 
                            if request.messageId.Value <> reply then None else
                            sent      <- Array.append sent     .[0..i-1] sent     .[i+1..sent     .Length - 1]
                            rfs response
                            Some ())
                        None
                    |> Option.iter (fun (lfs, request, rfs) -> 
                        request.messageId <- Some <| Guid.NewGuid()
                        sent <- sent |> Array.append [| request, rfs |]
                        lfs request
                    )
            }
        )
        with
            member this.AwaitRequest    listener  fs fe fc = agent.Post <| Listener (listener, fs, fe, fc)
            member this.SendRequest     request   fs fe fc = agent.Post <| Request  (request , fs, fe, fc) ; if Messaging.Debug then printfn "SendRequest sent"
            member this.ReplyTo         request   response = agent.Post <| Reply    (request , response  )
            member this.Listeners       ()                 = listeners |> Array.map (function | AddressId id, _, _, _ -> id)
            member this.Requests        ()                 = requests  |> Array.map (sprintf "%A")
            member this.Sent            ()                 = sent      |> Array.map (sprintf "%A")
    
    let postOffice = PostOffice()
    
    [< Rpc >]
    let awaitRequestFor (listener:AddressId) =
        let startAsync (fs, fe, fc) = postOffice.AwaitRequest listener fs fe fc 
        Async.FromContinuations startAsync // ISSUE: fe & fc are never called even when there are exceptions
    
    [< Rpc >]
    let replyTo    (reply:Guid) response =
        async {
            postOffice.ReplyTo reply response
        }
    
    open FSharp.Data
    open FSharp.Data.JsonExtensions
    
    [< Rpc >]
    let sendRequest  toId fromId content =
        if toId = AddressId "WebServer:PostOffice" then
            async {
                let msg = Json.Deserialize<POMessage> content
                return
                    match msg with
                    | POIdentification  -> POString     "WebServer:PostOffice"
                    | POEcho        txt -> POString     txt
                    | POListeners       -> POStrings <| postOffice.Listeners()
                    | POPendingRequests -> POStrings <| postOffice.Requests ()
                    | POPendingReplys   -> POStrings <| postOffice.Sent     ()
                    |> Json.Serialize 
            }
        else
        let startAsync (fs, fe, fc) = postOffice.SendRequest   
                                        { toId      = toId   
                                          fromId    = fromId 
                                          content   = content 
                                          messageId = None }
                                        fs fe fc
        async {
            try 
                let! res = Async.FromContinuations startAsync // ISSUE: fe & fc are never called even when there are exceptions like timeout (this crashes FSharpStation!)
                return res
            with e -> 
                printfn "%A" e
                return "ERROR: exception"
        }
    
    let RpcCall (url:string) method (data:string) =
        async {
            //printfn "RpcCall %s" (extract 100 data)
            let req = WebRequest.Create(url) :?> HttpWebRequest 
            req.Timeout         <- 300_000
            req.ProtocolVersion <- HttpVersion.Version10
            req.Method          <- "POST"
            req.ContentType     <- "application/json"
            req.Headers.Add("x-websharper-rpc", method            )
            let postBytes = Encoding.ASCII.GetBytes(data)
            req.ContentLength <- int64 postBytes.Length
            let reqStream = req.GetRequestStream() 
            reqStream.Write(postBytes, 0, postBytes.Length);
            reqStream.Close()
            
            // Obtain response and download the resulting page 
            // (The sample contains the first & last name from POST data)
            use resp   = req.GetResponse() 
            use stream = resp.GetResponseStream() 
            use reader = new StreamReader(stream)
            let msg    = reader.ReadToEnd()
            //printfn "RpcCallResponse %s" (extract 100 msg)
            let json   = JsonValue.Parse msg
            return       json.["$DATA"]
        }
    
    let serializeAddressId aId =
        match aId with
        | AddressId v -> sprintf """{"$":0,"$0":"%s"}""" v
    
    let sendRequestRpc (toId: AddressId) (fromId: AddressId) (content: string): Async<string> =
        async {
            let! msg =
                [| serializeAddressId toId ; serializeAddressId fromId ; Json.Serialize content |]
                |> String.concat ", "
                |> sprintf "[%s]"
                |> RpcCall WebSharper.Remoting.EndPoint sendRequestRpcEP
            return msg.AsString()
        }
    
    let awaitRequestForRpc (listener:AddressId) =
        async {
            let! msg =
                [| serializeAddressId listener |]
                |> String.concat ", "
                |> sprintf "[%s]"
                |> RpcCall WebSharper.Remoting.EndPoint awaitRequestForRpcEP
            let  v = msg.["$V"]
            let req    =
                {
                    toId      = AddressId <| v?toId  .["$V"].["$0"].AsString()
                    fromId    = AddressId <| v?fromId.["$V"].["$0"].AsString()
                    content   = v?content                          .AsString()
                    messageId = Some <| v?messageId  .["$V"].["$0"].AsGuid  ()
                }
            return req
        }
    
    let replyToRpc (reply:Guid) response =
        async {
            let! msg =
                [| sprintf "\"%s\"" <| reply.ToString() ; Json.Serialize response |]
                |> String.concat ", "
                |> sprintf "[%s]"
                |> RpcCall WebSharper.Remoting.EndPoint replyToRpcEP
            return ()
        }
    
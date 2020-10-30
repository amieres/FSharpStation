#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\other\Lego.Mindstorms\lib\netstandard2.0\Lego.Mindstorms.dll"

open Lego.Mindstorms

let turn() = async {
    use communication = new UsbCommunication()
    use client = new Lego.Mindstorms.MindstormsClient<UsbCommunication>(communication)
    do! client.ConnectAsync()                                               |> Async.AwaitTask
    do! client.TurnMotorAtPowerForTimeAsync(OutputPort.A, 50, 3000u, false) |> Async.AwaitTask
    do! client.PlayToneAsync(50, 5000us, 500us)                             |> Async.AwaitTask
}

turn() |> Async.RunSynchronously
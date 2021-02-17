#nowarn "3242"
#nowarn "1182"
////-d:FSharpStation1613431272838 -d:NETSTANDARD20 -d:NOFSROOTx -d:TEE -d:WEBSHARPER -d:WEBSHARPER47
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\FSharp.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\FSharp.Compiler.Service.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\mscorlib.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\netstandard.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.ComponentModel.Composition.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Data.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Data.DataSetExtensions.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Drawing.Common.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.IO.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.IO.Compression.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.IO.Compression.FileSystem.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Memory.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Net.Http.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Numerics.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Runtime.Serialization.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Transactions.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Xml.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Xml.Linq.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\framework\WebAssembly.Bindings.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.Core.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.Web.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.Sitelets.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.Main.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.UI.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.Compiler.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.JQuery.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.Compiler.FSharp.dll"
//#nowarn "3242"
//#nowarn "1182"
/// Root namespace for all code
//#define FSharpStation1613431272838
#if !NOFSROOT
#if INTERACTIVE
module FsRoot   =
#else
#if DLL
namespace FsRootDll
#else
namespace FsRoot
#endif
#endif
#endif
    #if !NETSTANDARD20
    
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
    ////#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Web.dll"
    
    #if WEBSHARPER
    #if WEBSHARPER47
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461"
    
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Collections.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Main.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.JQuery.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Web.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Sitelets.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper\lib\net461\WebSharper.Control.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461\WebSharper.UI.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper47\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
    #else
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
            type Dependency<'T>(def:'T) = member val D = def with get, set
            
            (*
            module SimplerDependency =
                let log   = Dependency(fun v -> printfn "Log   : %s" v)
                let debug = Dependency(fun v -> printfn "Debug : %s" v)
            
                let doSomething () =
                    log  .D "Hello"
                    debug.D "Hello2"
            
                log  .D <- fun v -> printfn "LogX  : %s" v
                debug.D <- fun v -> printfn "DebugX: %s" v
            
                doSomething()
            
            
            module CommonDefs =
            
                type Reservation = {
                    Date        : System.DateTime
                    Quantity    : int
                    IsAccepted  : bool
                }
            
                module Globals =
                    let capacity         = Dependency 100
                    let connectionString = Dependency "some connection string"
            
                module DB =
                    let readReservations  = Dependency (fun (connectionString:string) (date:System.DateTime   ) -> failwith "readReservations Not Implemented"  : Reservation list)
                    let createReservation = Dependency (fun (connectionString:string) (reservation:Reservation) -> failwith "createReservation Not implemented" : int)
            
                module Log =
                    let   log fmt = Printf.ksprintf (printfn "%s") fmt
                    type ILogger  = abstract Log : Printf.StringFormat<'a,unit> -> 'a
                    let   logger  = Dependency { new ILogger with member __.Log fmt = log fmt }
            
            module Reservation =
                open CommonDefs
            
                let tryAccept reservation =
                    let reservedSeats =
                        DB.readReservations.D   Globals.connectionString.D reservation.Date |> List.sumBy (fun x -> x.Quantity)
                    if reservedSeats + reservation.Quantity <= Globals.capacity.D
                    then DB.createReservation.D Globals.connectionString.D { reservation with IsAccepted = true } |> Some
                    else None
            
                Globals.capacity        .D <-  25
                DB.readReservations     .D <- (fun cs _ -> printfn "readReservations  Connection String: %s" cs;[]        ) 
                DB.createReservation    .D <- (fun cs r -> printfn "createReservation Connection String: %s" cs;r.Quantity) 
                Globals.connectionString.D <- "new Connx Str"
            
                {
                    Date        = System.DateTime.Today
                    Quantity    = 5
                    IsAccepted  = false
                } 
                |> tryAccept
                |> printfn "%A"
            
            //*)
            module Log =
                let printer     = Dependency (fun (txt:string) -> System.Console.WriteLine txt )
                let printfn fmt = Printf.ksprintf printer.D fmt
            
                [< Inline "(function (n) { return n.getFullYear() + '-' + ('0'+(n.getMonth()+1)).slice(-2) + '-' +  ('0'+n.getDate()).slice(-2) + ' '+('0'+n.getHours()).slice(-2)+ ':'+('0'+n.getMinutes()).slice(-2)+ ':'+('0'+n.getSeconds()).slice(-2)+ '.'+('00'+n.getMilliseconds()).slice(-3) })(new Date(Date.now()))" >]
                let nowStamp() = 
                    let t = System.DateTime.Now // in two steps to avoid Warning: The value has been copied to ensure the original is not mutated
                    t.ToString("yyyy-MM-dd HH:mm:ss.fff", System.Globalization.CultureInfo.InvariantCulture)
            
                let [<Inline>] inline traceT t v = tee (sprintf "%A" >> (fun s -> s.[..min 100 s.Length-1]) >> printfn "%s %s: %A" (nowStamp()) t) v
                let [<Inline>] inline trace    v = traceT "trace" v
                let [<Inline>] inline traceI   v = trace          v |> ignore
            
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
                    printfn "%s Starting %s" (nowStamp()) n
                    let start = System.DateTime.UtcNow.Ticks
                    f p
                    let elapsedSpan = new System.TimeSpan(System.DateTime.UtcNow.Ticks - start)
                    printfn "%s Finished %s %0d:%02d:%02d.%03d" (nowStamp()) n (int elapsedSpan.TotalHours) elapsedSpan.Minutes elapsedSpan.Seconds elapsedSpan.Milliseconds
            
                let [<Inline>] inline TimeItA n f p = async {
                    printfn "%s Starting %s" (nowStamp()) n
                    let start = System.DateTime.UtcNow.Ticks
                    do! f p
                    let elapsedSpan = new System.TimeSpan(System.DateTime.UtcNow.Ticks - start)
                    printfn "%s Finished %s %0d:%02d:%02d.%03d" (nowStamp()) n (int elapsedSpan.TotalHours) elapsedSpan.Minutes elapsedSpan.Seconds elapsedSpan.Milliseconds
                }
            
                let [<Inline>] inline TimeItAsync n a = async {
                    printfn "%s Starting %s" (nowStamp()) n
                    let start = System.DateTime.UtcNow.Ticks
                    let! res = a
                    let elapsedSpan = new System.TimeSpan(System.DateTime.UtcNow.Ticks - start)
                    printfn "%s Finished %s %0d:%02d:%02d.%03d" (nowStamp()) n (int elapsedSpan.TotalHours) elapsedSpan.Minutes elapsedSpan.Seconds elapsedSpan.Milliseconds
                    return res
                }
            
                let [<Inline>] inline TimeItLazy n (l:Lazy<_>) = lazy (
                    printfn "%s Starting %s" (nowStamp()) n
                    let start = System.DateTime.UtcNow.Ticks
                    let res = l.Force()
                    let elapsedSpan = new System.TimeSpan(System.DateTime.UtcNow.Ticks - start)
                    printfn "%s Finished %s %0d:%02d:%02d.%03d" (nowStamp()) n (int elapsedSpan.TotalHours) elapsedSpan.Minutes elapsedSpan.Seconds elapsedSpan.Milliseconds
                    res
                )
            
        /// Essentials that cannot run in Javascript (WebSharper)
        [< AutoOpen >]
        module LibraryNoJS =
            // From here https://github.com/jsakamoto/Toolbelt.Blazor.TimeZoneKit
            module TimeZoneKit =
            
                open System
                open System.Collections.ObjectModel
                open System.Reflection
            
                open System.Runtime.CompilerServices
            
                open WebAssembly
                open WebAssembly.Core
                open WebAssembly.Host
            
            
                /// <summary>
                /// Provides system time zones set, and local time zone initialization.
                /// </summary>
                type TimeZoneKit() =       
            
                    static member T( timeOfDay:int64, month:int, day:int) =
                        TimeZoneInfo.TransitionTime.CreateFixedDateRule(DateTime.FromBinary(timeOfDay), month, day)
            
                    static member T( timeOfDay:int64, month:int, week:int, dayOfWeek:DayOfWeek ) =
                        TimeZoneInfo.TransitionTime.CreateFloatingDateRule(DateTime.FromBinary(timeOfDay), month, week, dayOfWeek)
                    /// <summary>
                    /// Create system time zones array.
                    /// </summary>
                    static member CreateSystemTimeZones() : TimeZoneInfo[] =
                        let fields = typeof<TimeZoneInfo.AdjustmentRule>.GetFields(BindingFlags.NonPublic ||| BindingFlags.Instance)
                        let mutable BaseUtcOffsetDeltaField : FieldInfo = fields |> Seq.find(fun f -> f.Name.EndsWith "aseUtcOffsetDelta")
            
                        let TZ(id:string, baseUtcOffset: int64, displayName:string , standardName:string , daylightName:string , rules: TimeZoneInfo.AdjustmentRule[] ) =
                            TimeZoneInfo.CreateCustomTimeZone(id, TimeSpan.FromTicks(baseUtcOffset), displayName, standardName, daylightName, rules)
            
                        let R( dateStart:int64,  dateEnd:int64,  daylightDelta:int64, daylightTransitionStart:TimeZoneInfo.TransitionTime , daylightTransitionEnd: TimeZoneInfo.TransitionTime,  baseUtcOffsetDelta:int64) =
                            let rule = TimeZoneInfo.AdjustmentRule.CreateAdjustmentRule(
                                        DateTime.FromBinary(dateStart),
                                        DateTime.FromBinary(dateEnd),
                                        TimeSpan.FromTicks(daylightDelta),
                                        daylightTransitionStart, daylightTransitionEnd)
                            BaseUtcOffsetDeltaField.SetValue(rule, TimeSpan.FromTicks(baseUtcOffsetDelta))
                            rule
            
                        [|
                            TZ("Dateline Standard Time", -432000000000L, "(UTC-12:00) International Date Line West", "Dateline Standard Time", "Dateline Daylight Time", null)
                            TZ("UTC-11", -396000000000L, "(UTC-11:00) Coordinated Universal Time-11", "UTC-11", "UTC-11", null)
                            TZ("Aleutian Standard Time", -360000000000L, "(UTC-10:00) Aleutian Islands", "Aleutian Standard Time", "Aleutian Daylight Time", [|
                                R(0L, 633031200000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633032064000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Hawaiian Standard Time", -360000000000L, "(UTC-10:00) Hawaii", "Hawaiian Standard Time", "Hawaiian Daylight Time", null)
                            TZ("Marquesas Standard Time", -342000000000L, "(UTC-09:30) Marquesas Islands", "Marquesas Standard Time", "Marquesas Daylight Time", null)
                            TZ("Alaskan Standard Time", -324000000000L, "(UTC-09:00) Alaska", "Alaskan Standard Time", "Alaskan Daylight Time", [|
                                R(0L, 633031200000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633032064000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("UTC-09", -324000000000L, "(UTC-09:00) Coordinated Universal Time-09", "UTC-09", "UTC-09", null)
                            TZ("Pacific Standard Time (Mexico)", -288000000000L, "(UTC-08:00) Baja California", "Pacific Standard Time (Mexico)", "Pacific Daylight Time (Mexico)", [|
                                R(0L, 633978144000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633979008000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("UTC-08", -288000000000L, "(UTC-08:00) Coordinated Universal Time-08", "UTC-08", "UTC-08", null)
                            TZ("Pacific Standard Time", -288000000000L, "(UTC-08:00) Pacific Time (US & Canada)", "Pacific Standard Time", "Pacific Daylight Time", [|
                                R(0L, 633031200000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633032064000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("US Mountain Standard Time", -252000000000L, "(UTC-07:00) Arizona", "US Mountain Standard Time", "US Mountain Daylight Time", null)
                            TZ("Mountain Standard Time (Mexico)", -252000000000L, "(UTC-07:00) Chihuahua, La Paz, Mazatlan", "Mountain Standard Time (Mexico)", "Mountain Daylight Time (Mexico)", [|
                                R(0L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Mountain Standard Time", -252000000000L, "(UTC-07:00) Mountain Time (US & Canada)", "Mountain Standard Time", "Mountain Daylight Time", [|
                                R(0L, 633031200000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633032064000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Central America Standard Time", -216000000000L, "(UTC-06:00) Central America", "Central America Standard Time", "Central America Daylight Time", null)
                            TZ("Central Standard Time", -216000000000L, "(UTC-06:00) Central Time (US & Canada)", "Central Standard Time", "Central Daylight Time", [|
                                R(0L, 633031200000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633032064000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Easter Island Standard Time", -216000000000L, "(UTC-06:00) Easter Island", "Easter Island Standard Time", "Easter Island Daylight Time", [|
                                R(0L, 633346560000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 10, 2, DayOfWeek.Saturday), TimeZoneKit.T(792000000000L, 3, 2, DayOfWeek.Saturday), 0L)
                                R(633347424000000000L, 633662784000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 10, 2, DayOfWeek.Saturday), TimeZoneKit.T(792000000000L, 3, 5, DayOfWeek.Saturday), 0L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 10, 2, DayOfWeek.Saturday), TimeZoneKit.T(792000000000L, 3, 2, DayOfWeek.Saturday), 0L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 10, 2, DayOfWeek.Saturday), TimeZoneKit.T(792000000000L, 4, 1, DayOfWeek.Saturday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 8, 3, DayOfWeek.Saturday), TimeZoneKit.T(792000000000L, 5, 1, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 9, 1, DayOfWeek.Saturday), TimeZoneKit.T(792000000000L, 4, 5, DayOfWeek.Saturday), 0L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 9, 1, DayOfWeek.Saturday), TimeZoneKit.T(792000000000L, 4, 5, DayOfWeek.Saturday), 0L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 9, 1, DayOfWeek.Saturday), TimeZoneKit.T(792000000000L, 4, 5, DayOfWeek.Saturday), 0L)
                                R(635556672000000000L, 635871168000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(635872032000000000L, 636187392000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 8, 2, DayOfWeek.Saturday), TimeZoneKit.T(792000000000L, 5, 2, DayOfWeek.Saturday), 0L)
                                R(636188256000000000L, 636502752000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 8, 2, DayOfWeek.Saturday), TimeZoneKit.T(792000000000L, 5, 2, DayOfWeek.Saturday), 0L)
                                R(636503616000000000L, 636818112000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 8, 2, DayOfWeek.Saturday), TimeZoneKit.T(792000000000L, 5, 2, DayOfWeek.Saturday), 0L)
                                R(636818976000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 9, 1, DayOfWeek.Saturday), TimeZoneKit.T(792000000000L, 4, 1, DayOfWeek.Saturday), 0L)
                            |])
                            TZ("Central Standard Time (Mexico)", -216000000000L, "(UTC-06:00) Guadalajara, Mexico City, Monterrey", "Central Standard Time (Mexico)", "Central Daylight Time (Mexico)", [|
                                R(0L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Canada Central Standard Time", -216000000000L, "(UTC-06:00) Saskatchewan", "Canada Central Standard Time", "Canada Central Daylight Time", null)
                            TZ("SA Pacific Standard Time", -180000000000L, "(UTC-05:00) Bogota, Lima, Quito, Rio Branco", "SA Pacific Standard Time", "SA Pacific Daylight Time", null)
                            TZ("Eastern Standard Time (Mexico)", -180000000000L, "(UTC-05:00) Chetumal", "Eastern Standard Time (Mexico)", "Eastern Daylight Time (Mexico)", [|
                                R(0L, 635555808000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 2, 1, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Thursday), -36000000000L)
                            |])
                            TZ("Eastern Standard Time", -180000000000L, "(UTC-05:00) Eastern Time (US & Canada)", "Eastern Standard Time", "Eastern Daylight Time", [|
                                R(0L, 633031200000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633032064000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Haiti Standard Time", -180000000000L, "(UTC-05:00) Haiti", "Haiti Standard Time", "Haiti Daylight Time", [|
                                R(0L, 633031200000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 4, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                                R(636188256000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Cuba Standard Time", -180000000000L, "(UTC-05:00) Havana", "Cuba Standard Time", "Cuba Daylight Time", [|
                                R(0L, 632084256000000000L, 36000000000L, TimeZoneKit.T(0L, 4, 1, DayOfWeek.Sunday), TimeZoneKit.T(36000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(632085120000000000L, 632400480000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Thursday), 0L)
                                R(632401344000000000L, 632715840000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(632716704000000000L, 633031200000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Sunday), TimeZoneKit.T(36000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633032064000000000L, 633346560000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(36000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633347424000000000L, 633662784000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 3, DayOfWeek.Sunday), TimeZoneKit.T(36000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(36000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(36000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 3, DayOfWeek.Sunday), TimeZoneKit.T(36000000000L, 11, 2, DayOfWeek.Sunday), 0L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(0L, 4, 1, DayOfWeek.Sunday), TimeZoneKit.T(36000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                                R(634925952000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(36000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("US Eastern Standard Time", -180000000000L, "(UTC-05:00) Indiana (East)", "US Eastern Standard Time", "US Eastern Daylight Time", [|
                                R(632716704000000000L, 633031200000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633032064000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Turks And Caicos Standard Time", -180000000000L, "(UTC-05:00) Turks and Caicos", "Turks and Caicos Standard Time", "Turks and Caicos Daylight Time", [|
                                R(0L, 635555808000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Thursday), 0L)
                                R(635872032000000000L, 636187392000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(636188256000000000L, 636502752000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(636503616000000000L, 636818112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                                R(636818976000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Paraguay Standard Time", -144000000000L, "(UTC-04:00) Asuncion", "Paraguay Standard Time", "Paraguay Daylight Time", [|
                                R(0L, 633662784000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 3, 2, DayOfWeek.Saturday), 0L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 3, 1, DayOfWeek.Saturday), 0L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 4, 2, DayOfWeek.Saturday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 4, 2, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 4, 1, DayOfWeek.Saturday), 0L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 3, 4, DayOfWeek.Saturday), 0L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 3, 4, DayOfWeek.Saturday), 0L)
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 3, 3, DayOfWeek.Saturday), 0L)
                                R(635872032000000000L, 636187392000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Saturday), 0L)
                                R(636188256000000000L, 636502752000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 9, 5, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Saturday), 0L)
                                R(636503616000000000L, 636818112000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 3, 4, DayOfWeek.Saturday), 0L)
                                R(636818976000000000L, 637133472000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 3, 4, DayOfWeek.Saturday), 0L)
                                R(637134336000000000L, 637449696000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 3, 3, DayOfWeek.Saturday), 0L)
                                R(637450560000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Saturday), 0L)
                            |])
                            TZ("Atlantic Standard Time", -144000000000L, "(UTC-04:00) Atlantic Time (Canada)", "Atlantic Standard Time", "Atlantic Daylight Time", [|
                                R(0L, 633031200000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633032064000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Venezuela Standard Time", -144000000000L, "(UTC-04:00) Caracas", "Venezuela Standard Time", "Venezuela Daylight Time", [|
                                R(633032064000000000L, 633346560000000000L, 18000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Monday), TimeZoneKit.T(108000000000L, 12, 2, DayOfWeek.Sunday), -18000000000L)
                                R(633347424000000000L, 633662784000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -18000000000L)
                                R(633663648000000000L, 633978144000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -18000000000L)
                                R(633979008000000000L, 634293504000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -18000000000L)
                                R(634294368000000000L, 634608864000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -18000000000L)
                                R(634609728000000000L, 634925088000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -18000000000L)
                                R(634925952000000000L, 635240448000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -18000000000L)
                                R(635241312000000000L, 635555808000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -18000000000L)
                                R(635556672000000000L, 635871168000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -18000000000L)
                                R(635872032000000000L, 636187392000000000L, -18000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Friday), TimeZoneKit.T(90000000000L, 5, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Central Brazilian Standard Time", -144000000000L, "(UTC-04:00) Cuiaba", "Central Brazilian Standard Time", "Central Brazilian Daylight Time", [|
                                R(0L, 632400480000000000L, 36000000000L, TimeZoneKit.T(0L, 11, 1, DayOfWeek.Tuesday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Thursday), 0L)
                                R(632401344000000000L, 632715840000000000L, 36000000000L, TimeZoneKit.T(0L, 10, 3, DayOfWeek.Sunday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(632716704000000000L, 633031200000000000L, 36000000000L, TimeZoneKit.T(0L, 11, 1, DayOfWeek.Sunday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(633032064000000000L, 633346560000000000L, 36000000000L, TimeZoneKit.T(0L, 10, 2, DayOfWeek.Sunday), TimeZoneKit.T(863999990000L, 2, 5, DayOfWeek.Saturday), 0L)
                                R(633347424000000000L, 633662784000000000L, 36000000000L, TimeZoneKit.T(0L, 10, 3, DayOfWeek.Sunday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 2, DayOfWeek.Saturday), 0L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 4, DayOfWeek.Saturday), 0L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(635872032000000000L, 636187392000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(636188256000000000L, 636502752000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 2, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(636503616000000000L, 636818112000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 11, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(636818976000000000L, 637133472000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Tuesday), TimeZoneKit.T(0L, 2, 3, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("SA Western Standard Time", -144000000000L, "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan", "SA Western Standard Time", "SA Western Daylight Time", null)
                            TZ("Pacific SA Standard Time", -144000000000L, "(UTC-04:00) Santiago", "Pacific SA Standard Time", "Pacific SA Daylight Time", [|
                                R(0L, 633346560000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 2, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 3, 2, DayOfWeek.Saturday), 0L)
                                R(633347424000000000L, 633662784000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 2, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Saturday), 0L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 2, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 3, 2, DayOfWeek.Saturday), 0L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 2, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 4, 1, DayOfWeek.Saturday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 8, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 5, 1, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 9, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 4, 5, DayOfWeek.Saturday), 0L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 9, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 4, 5, DayOfWeek.Saturday), 0L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 9, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 4, 5, DayOfWeek.Saturday), 0L)
                                R(635556672000000000L, 635871168000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(635872032000000000L, 636187392000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 8, 2, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 5, 2, DayOfWeek.Saturday), 0L)
                                R(636188256000000000L, 636502752000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 8, 2, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 5, 2, DayOfWeek.Saturday), 0L)
                                R(636503616000000000L, 636818112000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 8, 2, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 5, 2, DayOfWeek.Saturday), 0L)
                                R(636818976000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 9, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 4, 1, DayOfWeek.Saturday), 0L)
                            |])
                            TZ("Newfoundland Standard Time", -126000000000L, "(UTC-03:30) Newfoundland", "Newfoundland Standard Time", "Newfoundland Daylight Time", [|
                                R(0L, 633031200000000000L, 36000000000L, TimeZoneKit.T(600000000L, 4, 1, DayOfWeek.Sunday), TimeZoneKit.T(600000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633032064000000000L, 633346560000000000L, 36000000000L, TimeZoneKit.T(600000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(600000000L, 11, 1, DayOfWeek.Sunday), 0L)
                                R(633347424000000000L, 633662784000000000L, 36000000000L, TimeZoneKit.T(600000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(600000000L, 11, 1, DayOfWeek.Sunday), 0L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(600000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(600000000L, 11, 1, DayOfWeek.Sunday), 0L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(600000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(600000000L, 11, 1, DayOfWeek.Sunday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(600000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                                R(634609728000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Tocantins Standard Time", -108000000000L, "(UTC-03:00) Araguaina", "Tocantins Standard Time", "Tocantins Daylight Time", [|
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(0L, 10, 3, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Sunday), 0L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Tuesday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                            |])
                            TZ("E. South America Standard Time", -108000000000L, "(UTC-03:00) Brasilia", "E. South America Standard Time", "E. South America Daylight Time", [|
                                R(0L, 632400480000000000L, 36000000000L, TimeZoneKit.T(0L, 11, 1, DayOfWeek.Tuesday), TimeZoneKit.T(863999990000L, 2, 2, DayOfWeek.Saturday), 0L)
                                R(632401344000000000L, 632715840000000000L, 36000000000L, TimeZoneKit.T(0L, 10, 3, DayOfWeek.Sunday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(632716704000000000L, 633031200000000000L, 36000000000L, TimeZoneKit.T(0L, 11, 1, DayOfWeek.Sunday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(633032064000000000L, 633346560000000000L, 36000000000L, TimeZoneKit.T(0L, 10, 2, DayOfWeek.Sunday), TimeZoneKit.T(863999990000L, 2, 5, DayOfWeek.Saturday), 0L)
                                R(633347424000000000L, 633662784000000000L, 36000000000L, TimeZoneKit.T(0L, 10, 3, DayOfWeek.Sunday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 2, DayOfWeek.Saturday), 0L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 4, DayOfWeek.Saturday), 0L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(635872032000000000L, 636187392000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(636188256000000000L, 636502752000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 2, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(636503616000000000L, 636818112000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 11, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 2, 3, DayOfWeek.Saturday), 0L)
                                R(636818976000000000L, 637133472000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Tuesday), TimeZoneKit.T(0L, 2, 3, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("SA Eastern Standard Time", -108000000000L, "(UTC-03:00) Cayenne, Fortaleza", "SA Eastern Standard Time", "SA Eastern Daylight Time", null)
                            TZ("Argentina Standard Time", -108000000000L, "(UTC-03:00) City of Buenos Aires", "Argentina Standard Time", "Argentina Daylight Time", [|
                                R(633032064000000000L, 633346560000000000L, 36000000000L, TimeZoneKit.T(0L, 12, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Monday), 0L)
                                R(633347424000000000L, 633662784000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(0L, 3, 3, DayOfWeek.Sunday), 0L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Thursday), TimeZoneKit.T(863999990000L, 3, 2, DayOfWeek.Saturday), 0L)
                            |])
                            TZ("Greenland Standard Time", -108000000000L, "(UTC-03:00) Greenland", "Greenland Standard Time", "Greenland Daylight Time", [|
                                R(0L, 632400480000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(632401344000000000L, 632715840000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(632716704000000000L, 633031200000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(633032064000000000L, 633346560000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 4, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(633347424000000000L, 633662784000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 4, DayOfWeek.Saturday), 0L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 4, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 4, DayOfWeek.Saturday), 0L)
                                R(635872032000000000L, 636187392000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(636188256000000000L, 636502752000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(636503616000000000L, 636818112000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 4, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(636818976000000000L, 637133472000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(637134336000000000L, 637449696000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 4, DayOfWeek.Saturday), 0L)
                                R(637450560000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(792000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(828000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                            |])
                            TZ("Montevideo Standard Time", -108000000000L, "(UTC-03:00) Montevideo", "Montevideo Standard Time", "Montevideo Daylight Time", [|
                                R(0L, 635555808000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 10, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), 0L)
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Thursday), TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Magallanes Standard Time", -108000000000L, "(UTC-03:00) Punta Arenas", "Magallanes Standard Time", "Magallanes Daylight Time", [|
                                R(0L, 633346560000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 2, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 3, 2, DayOfWeek.Saturday), -36000000000L)
                                R(633347424000000000L, 633662784000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 2, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Saturday), -36000000000L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 2, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 3, 2, DayOfWeek.Saturday), -36000000000L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 2, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 4, 1, DayOfWeek.Saturday), -36000000000L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 8, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 5, 1, DayOfWeek.Saturday), -36000000000L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 9, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 4, 5, DayOfWeek.Saturday), -36000000000L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 9, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 4, 5, DayOfWeek.Saturday), -36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 9, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 4, 5, DayOfWeek.Saturday), -36000000000L)
                                R(635872032000000000L, 636187392000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 8, 2, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 5, 2, DayOfWeek.Saturday), -36000000000L)
                            |])
                            TZ("Saint Pierre Standard Time", -108000000000L, "(UTC-03:00) Saint Pierre and Miquelon", "Saint Pierre Standard Time", "Saint Pierre Daylight Time", [|
                                R(0L, 633031200000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633032064000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 2, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Bahia Standard Time", -108000000000L, "(UTC-03:00) Salvador", "Bahia Standard Time", "Bahia Daylight Time", [|
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 10, 3, DayOfWeek.Saturday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Sunday), TimeZoneKit.T(863999990000L, 2, 4, DayOfWeek.Saturday), 0L)
                            |])
                            TZ("UTC-02", -72000000000L, "(UTC-02:00) Coordinated Universal Time-02", "UTC-02", "UTC-02", null)
                            TZ("Mid-Atlantic Standard Time", -72000000000L, "(UTC-02:00) Mid-Atlantic - Old", "Mid-Atlantic Standard Time", "Mid-Atlantic Daylight Time", [|
                                R(0L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 9, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Azores Standard Time", -36000000000L, "(UTC-01:00) Azores", "Azores Standard Time", "Azores Daylight Time", [|
                                R(0L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(36000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Cape Verde Standard Time", -36000000000L, "(UTC-01:00) Cabo Verde Is.", "Cabo Verde Standard Time", "Cabo Verde Daylight Time", null)
                            TZ("UTC", 0L, "(UTC) Coordinated Universal Time", "Coordinated Universal Time", "Coordinated Universal Time", null)
                            TZ("GMT Standard Time", 0L, "(UTC+00:00) Dublin, Edinburgh, Lisbon, London", "GMT Standard Time", "GMT Daylight Time", [|
                                R(0L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(36000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Greenwich Standard Time", 0L, "(UTC+00:00) Monrovia, Reykjavik", "Greenwich Standard Time", "Greenwich Daylight Time", null)
                            TZ("Sao Tome Standard Time", 0L, "(UTC+00:00) Sao Tome", "Sao Tome Standard Time", "Sao Tome Daylight Time", [|
                                R(636503616000000000L, 636818112000000000L, -36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Monday), TimeZoneKit.T(36000000000L, 1, 1, DayOfWeek.Monday), 36000000000L)
                                R(636818976000000000L, 637133472000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Tuesday), TimeZoneKit.T(72000000000L, 1, 1, DayOfWeek.Tuesday), 0L)
                            |])
                            TZ("Morocco Standard Time", 0L, "(UTC+01:00) Casablanca", "Morocco Standard Time", "Morocco Daylight Time", [|
                                R(633347424000000000L, 633662784000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 5, 5, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 8, 5, DayOfWeek.Sunday), 0L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 5, 5, DayOfWeek.Sunday), TimeZoneKit.T(863999990000L, 8, 3, DayOfWeek.Thursday), 0L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 5, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 8, 1, DayOfWeek.Saturday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 4, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 7, 5, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 4, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 9, 5, DayOfWeek.Sunday), 0L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 4, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(635872032000000000L, 636187392000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(636188256000000000L, 636502752000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(636503616000000000L, 636818112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 4, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 4, DayOfWeek.Sunday), 0L)
                                R(636818976000000000L, 637133472000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 6, 2, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Tuesday), 0L)
                                R(637134336000000000L, 637449696000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 5, 4, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 4, 3, DayOfWeek.Sunday), 0L)
                                R(637450560000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 5, 3, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 4, 2, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("W. Europe Standard Time", 36000000000L, "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna", "W. Europe Standard Time", "W. Europe Daylight Time", [|
                                R(0L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Central Europe Standard Time", 36000000000L, "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague", "Central Europe Standard Time", "Central Europe Daylight Time", [|
                                R(0L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Romance Standard Time", 36000000000L, "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris", "Romance Standard Time", "Romance Daylight Time", [|
                                R(0L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Central European Standard Time", 36000000000L, "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb", "Central European Standard Time", "Central European Daylight Time", [|
                                R(0L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("W. Central Africa Standard Time", 36000000000L, "(UTC+01:00) West Central Africa", "W. Central Africa Standard Time", "W. Central Africa Daylight Time", null)
                            TZ("Jordan Standard Time", 72000000000L, "(UTC+02:00) Amman", "Jordan Standard Time", "Jordan Daylight Time", [|
                                R(0L, 634608864000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Thursday), TimeZoneKit.T(36000000000L, 10, 5, DayOfWeek.Friday), 0L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Thursday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Sunday), 0L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Tuesday), TimeZoneKit.T(0L, 12, 3, DayOfWeek.Friday), 0L)
                                R(635241312000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Thursday), TimeZoneKit.T(36000000000L, 10, 5, DayOfWeek.Friday), 0L)
                            |])
                            TZ("GTB Standard Time", 72000000000L, "(UTC+02:00) Athens, Bucharest", "GTB Standard Time", "GTB Daylight Time", [|
                                R(0L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(108000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(144000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Middle East Standard Time", 72000000000L, "(UTC+02:00) Beirut", "Middle East Standard Time", "Middle East Daylight Time", [|
                                R(0L, 633978144000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 4, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 10, 4, DayOfWeek.Saturday), 0L)
                                R(635872032000000000L, 636187392000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(636188256000000000L, 636502752000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(636503616000000000L, 636818112000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 4, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(636818976000000000L, 637133472000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(637134336000000000L, 637449696000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 10, 4, DayOfWeek.Saturday), 0L)
                                R(637450560000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Saturday), 0L)
                            |])
                            TZ("Egypt Standard Time", 72000000000L, "(UTC+02:00) Cairo", "Egypt Standard Time", "Egypt Daylight Time", [|
                                R(0L, 632715840000000000L, 36000000000L, TimeZoneKit.T(0L, 4, 5, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 9, 5, DayOfWeek.Thursday), 0L)
                                R(632716704000000000L, 633031200000000000L, 36000000000L, TimeZoneKit.T(0L, 4, 5, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Thursday), 0L)
                                R(633032064000000000L, 633346560000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 4, 5, DayOfWeek.Thursday), TimeZoneKit.T(863999990000L, 9, 1, DayOfWeek.Thursday), 0L)
                                R(633347424000000000L, 633662784000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 4, 5, DayOfWeek.Thursday), TimeZoneKit.T(863999990000L, 8, 5, DayOfWeek.Thursday), 0L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 4, 4, DayOfWeek.Thursday), TimeZoneKit.T(863999990000L, 8, 3, DayOfWeek.Thursday), 0L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 4, 5, DayOfWeek.Thursday), TimeZoneKit.T(863999990000L, 9, 5, DayOfWeek.Thursday), 0L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 5, 3, DayOfWeek.Thursday), TimeZoneKit.T(863999990000L, 9, 5, DayOfWeek.Thursday), 0L)
                            |])
                            TZ("E. Europe Standard Time", 72000000000L, "(UTC+02:00) Chisinau", "E. Europe Standard Time", "E. Europe Daylight Time", [|
                                R(0L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Syria Standard Time", 72000000000L, "(UTC+02:00) Damascus", "Syria Standard Time", "Syria Daylight Time", [|
                                R(0L, 632400480000000000L, 36000000000L, TimeZoneKit.T(0L, 4, 1, DayOfWeek.Thursday), TimeZoneKit.T(863999990000L, 9, 5, DayOfWeek.Thursday), 0L)
                                R(632401344000000000L, 632715840000000000L, 36000000000L, TimeZoneKit.T(0L, 4, 1, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 9, 5, DayOfWeek.Friday), 0L)
                                R(632716704000000000L, 633031200000000000L, 36000000000L, TimeZoneKit.T(0L, 4, 1, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Thursday), 0L)
                                R(633032064000000000L, 633346560000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 11, 1, DayOfWeek.Thursday), 0L)
                                R(633347424000000000L, 633662784000000000L, 36000000000L, TimeZoneKit.T(0L, 4, 1, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Friday), 0L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Thursday), 0L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(0L, 4, 1, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Thursday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(0L, 4, 1, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Thursday), 0L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Thursday), 0L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 10, 4, DayOfWeek.Thursday), 0L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Thursday), 0L)
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Thursday), 0L)
                                R(635872032000000000L, 636187392000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Thursday), 0L)
                                R(636188256000000000L, 636502752000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Thursday), 0L)
                                R(636503616000000000L, 636818112000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Thursday), 0L)
                                R(636818976000000000L, 637133472000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 10, 4, DayOfWeek.Thursday), 0L)
                                R(637134336000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Thursday), 0L)
                            |])
                            TZ("West Bank Standard Time", 72000000000L, "(UTC+02:00) Gaza, Hebron", "West Bank Gaza Standard Time", "West Bank Gaza Daylight Time", [|
                                R(0L, 634925088000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Thursday), TimeZoneKit.T(36000000000L, 9, 3, DayOfWeek.Friday), 0L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Thursday), TimeZoneKit.T(863999990000L, 9, 5, DayOfWeek.Thursday), 0L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Thursday), TimeZoneKit.T(863999990000L, 10, 4, DayOfWeek.Thursday), 0L)
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 10, 4, DayOfWeek.Thursday), 0L)
                                R(635872032000000000L, 636187392000000000L, 36000000000L, TimeZoneKit.T(36000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(36000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(636188256000000000L, 636502752000000000L, 36000000000L, TimeZoneKit.T(36000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(36000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(636503616000000000L, 636818112000000000L, 36000000000L, TimeZoneKit.T(36000000000L, 3, 4, DayOfWeek.Saturday), TimeZoneKit.T(36000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                                R(636818976000000000L, 637133472000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(36000000000L, 10, 4, DayOfWeek.Saturday), 0L)
                                R(637134336000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 4, DayOfWeek.Friday), TimeZoneKit.T(36000000000L, 10, 5, DayOfWeek.Saturday), 0L)
                            |])
                            TZ("South Africa Standard Time", 72000000000L, "(UTC+02:00) Harare, Pretoria", "South Africa Standard Time", "South Africa Daylight Time", null)
                            TZ("FLE Standard Time", 72000000000L, "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius", "FLE Standard Time", "FLE Daylight Time", [|
                                R(0L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(108000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(144000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Israel Standard Time", 72000000000L, "(UTC+02:00) Jerusalem", "Jerusalem Standard Time", "Jerusalem Daylight Time", [|
                                R(0L, 632400480000000000L, 36000000000L, TimeZoneKit.T(36000000000L, 4, 1, DayOfWeek.Wednesday), TimeZoneKit.T(36000000000L, 9, 4, DayOfWeek.Wednesday), 0L)
                                R(632401344000000000L, 632715840000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 10, 2, DayOfWeek.Sunday), 0L)
                                R(632716704000000000L, 633031200000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 10, 1, DayOfWeek.Sunday), 0L)
                                R(633032064000000000L, 633346560000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 9, 3, DayOfWeek.Sunday), 0L)
                                R(633347424000000000L, 633662784000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 10, 1, DayOfWeek.Sunday), 0L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 9, 5, DayOfWeek.Sunday), 0L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 9, 2, DayOfWeek.Sunday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 10, 1, DayOfWeek.Sunday), 0L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 9, 4, DayOfWeek.Sunday), 0L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(635872032000000000L, 636187392000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(636188256000000000L, 636502752000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 4, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(636503616000000000L, 636818112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 4, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(636818976000000000L, 637133472000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(637134336000000000L, 637449696000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(637450560000000000L, 637765056000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(637765920000000000L, 638080416000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(638081280000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 4, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Kaliningrad Standard Time", 72000000000L, "(UTC+02:00) Kaliningrad", "Russia TZ 1 Standard Time", "Russia TZ 1 Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(634925952000000000L, 635240448000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Sudan Standard Time", 72000000000L, "(UTC+02:00) Khartoum", "Sudan Standard Time", "Sudan Daylight Time", [|
                                R(0L, 636187392000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(636188256000000000L, 636502752000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Sunday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Tuesday), 0L)
                            |])
                            TZ("Libya Standard Time", 72000000000L, "(UTC+02:00) Tripoli", "Libya Standard Time", "Libya Daylight Time", [|
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 11, 2, DayOfWeek.Saturday), -36000000000L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(36000000000L, 3, 5, DayOfWeek.Friday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Tuesday), -36000000000L)
                            |])
                            TZ("Namibia Standard Time", 72000000000L, "(UTC+02:00) Windhoek", "Namibia Standard Time", "Namibia Daylight Time", [|
                                R(0L, 636502752000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 9, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Sunday), -36000000000L)
                            |])
                            TZ("Arabic Standard Time", 108000000000L, "(UTC+03:00) Baghdad", "Arabic Standard Time", "Arabic Daylight Time", [|
                                R(0L, 632400480000000000L, 36000000000L, TimeZoneKit.T(108000000000L, 4, 1, DayOfWeek.Thursday), TimeZoneKit.T(144000000000L, 10, 1, DayOfWeek.Friday), 0L)
                                R(632401344000000000L, 632715840000000000L, 36000000000L, TimeZoneKit.T(108000000000L, 4, 1, DayOfWeek.Friday), TimeZoneKit.T(144000000000L, 10, 1, DayOfWeek.Saturday), 0L)
                                R(632716704000000000L, 633031200000000000L, 36000000000L, TimeZoneKit.T(108000000000L, 4, 1, DayOfWeek.Saturday), TimeZoneKit.T(144000000000L, 10, 1, DayOfWeek.Sunday), 0L)
                                R(633032064000000000L, 633346560000000000L, 36000000000L, TimeZoneKit.T(108000000000L, 4, 1, DayOfWeek.Sunday), TimeZoneKit.T(144000000000L, 10, 1, DayOfWeek.Monday), 0L)
                            |])
                            TZ("Turkey Standard Time", 108000000000L, "(UTC+03:00) Istanbul", "Turkey Standard Time", "Turkey Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(108000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(144000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(108000000000L, 3, 5, DayOfWeek.Monday), TimeZoneKit.T(144000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(108000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(144000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(108000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(144000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(108000000000L, 3, 5, DayOfWeek.Monday), TimeZoneKit.T(144000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(108000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(144000000000L, 11, 2, DayOfWeek.Sunday), -36000000000L)
                                R(635872032000000000L, 636187392000000000L, -36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Friday), TimeZoneKit.T(108000000000L, 3, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Arab Standard Time", 108000000000L, "(UTC+03:00) Kuwait, Riyadh", "Arab Standard Time", "Arab Daylight Time", null)
                            TZ("Belarus Standard Time", 108000000000L, "(UTC+03:00) Minsk", "Belarus Standard Time", "Belarus Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), -36000000000L)
                            |])
                            TZ("Russian Standard Time", 108000000000L, "(UTC+03:00) Moscow, St. Petersburg", "Russia TZ 2 Standard Time", "Russia TZ 2 Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(634925952000000000L, 635240448000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("E. Africa Standard Time", 108000000000L, "(UTC+03:00) Nairobi", "E. Africa Standard Time", "E. Africa Daylight Time", null)
                            TZ("Iran Standard Time", 126000000000L, "(UTC+03:30) Tehran", "Iran Standard Time", "Iran Daylight Time", [|
                                R(0L, 632400480000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 3, DayOfWeek.Sunday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Monday), 0L)
                                R(632401344000000000L, 632715840000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 4, DayOfWeek.Tuesday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Wednesday), 0L)
                                R(633347424000000000L, 633662784000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 3, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Saturday), 0L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 4, DayOfWeek.Sunday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Monday), 0L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 4, DayOfWeek.Monday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Tuesday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 4, DayOfWeek.Tuesday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Wednesday), 0L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 3, DayOfWeek.Wednesday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Thursday), 0L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 4, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Saturday), 0L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 4, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Sunday), 0L)
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 4, DayOfWeek.Sunday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Monday), 0L)
                                R(635872032000000000L, 636187392000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 3, DayOfWeek.Monday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Tuesday), 0L)
                                R(636188256000000000L, 636502752000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 4, DayOfWeek.Wednesday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Thursday), 0L)
                                R(636503616000000000L, 636818112000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 4, DayOfWeek.Thursday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Friday), 0L)
                                R(636818976000000000L, 637133472000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 4, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Saturday), 0L)
                                R(637134336000000000L, 637449696000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 3, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Sunday), 0L)
                                R(637450560000000000L, 637765056000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 4, DayOfWeek.Monday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Tuesday), 0L)
                                R(637765920000000000L, 638080416000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 4, DayOfWeek.Tuesday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Wednesday), 0L)
                                R(638081280000000000L, 638395776000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 4, DayOfWeek.Wednesday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Thursday), 0L)
                                R(638396640000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(0L, 3, 3, DayOfWeek.Thursday), TimeZoneKit.T(863999990000L, 9, 3, DayOfWeek.Friday), 0L)
                            |])
                            TZ("Arabian Standard Time", 144000000000L, "(UTC+04:00) Abu Dhabi, Muscat", "Arabian Standard Time", "Arabian Daylight Time", null)
                            TZ("Astrakhan Standard Time", 144000000000L, "(UTC+04:00) Astrakhan, Ulyanovsk", "Astrakhan Standard Time", "Astrakhan Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), -36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(635556672000000000L, 635871168000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -36000000000L)
                                R(635872032000000000L, 636187392000000000L, -36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Azerbaijan Standard Time", 144000000000L, "(UTC+04:00) Baku", "Azerbaijan Standard Time", "Azerbaijan Daylight Time", [|
                                R(0L, 635871168000000000L, 36000000000L, TimeZoneKit.T(144000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(180000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Russia Time Zone 3", 144000000000L, "(UTC+04:00) Izhevsk, Samara", "Russia TZ 3 Standard Time", "Russia TZ 3 Daylight Time", [|
                                R(0L, 633978144000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Friday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), -36000000000L)
                            |])
                            TZ("Mauritius Standard Time", 144000000000L, "(UTC+04:00) Port Louis", "Mauritius Standard Time", "Mauritius Daylight Time", [|
                                R(633347424000000000L, 633662784000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Tuesday), 0L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Thursday), TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Saratov Standard Time", 144000000000L, "(UTC+04:00) Saratov", "Saratov Standard Time", "Saratov Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), -36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(635556672000000000L, 635871168000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -36000000000L)
                                R(635872032000000000L, 636187392000000000L, -36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 12, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Georgian Standard Time", 144000000000L, "(UTC+04:00) Tbilisi", "Georgian Standard Time", "Georgian Daylight Time", null)
                            TZ("Volgograd Standard Time", 144000000000L, "(UTC+04:00) Volgograd", "Volgograd Standard Time", "Volgograd Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), -36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(635556672000000000L, 635871168000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -36000000000L)
                                R(635872032000000000L, 636187392000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -36000000000L)
                                R(636188256000000000L, 636502752000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -36000000000L)
                                R(636503616000000000L, 636818112000000000L, -36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Monday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Caucasus Standard Time", 144000000000L, "(UTC+04:00) Yerevan", "Caucasus Standard Time", "Caucasus Daylight Time", [|
                                R(0L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Afghanistan Standard Time", 162000000000L, "(UTC+04:30) Kabul", "Afghanistan Standard Time", "Afghanistan Daylight Time", null)
                            TZ("West Asia Standard Time", 180000000000L, "(UTC+05:00) Ashgabat, Tashkent", "West Asia Standard Time", "West Asia Daylight Time", null)
                            TZ("Ekaterinburg Standard Time", 180000000000L, "(UTC+05:00) Ekaterinburg", "Russia TZ 4 Standard Time", "Russia TZ 4 Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(634925952000000000L, 635240448000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Pakistan Standard Time", 180000000000L, "(UTC+05:00) Islamabad, Karachi", "Pakistan Standard Time", "Pakistan Daylight Time", [|
                                R(633347424000000000L, 633662784000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 5, 5, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Friday), 0L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(863999990000L, 4, 2, DayOfWeek.Tuesday), TimeZoneKit.T(863999990000L, 10, 5, DayOfWeek.Saturday), 0L)
                            |])
                            TZ("Qyzylorda Standard Time", 180000000000L, "(UTC+05:00) Qyzylorda", "Qyzylorda Standard Time", "Qyzylorda Daylight Time", [|
                                R(0L, 636502752000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(636503616000000000L, 636818112000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Monday), TimeZoneKit.T(0L, 12, 3, DayOfWeek.Friday), 0L)
                            |])
                            TZ("India Standard Time", 198000000000L, "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi", "India Standard Time", "India Daylight Time", null)
                            TZ("Sri Lanka Standard Time", 198000000000L, "(UTC+05:30) Sri Jayawardenepura", "Sri Lanka Standard Time", "Sri Lanka Daylight Time", null)
                            TZ("Nepal Standard Time", 207000000000L, "(UTC+05:45) Kathmandu", "Nepal Standard Time", "Nepal Daylight Time", null)
                            TZ("Central Asia Standard Time", 216000000000L, "(UTC+06:00) Astana", "Central Asia Standard Time", "Central Asia Daylight Time", null)
                            TZ("Bangladesh Standard Time", 216000000000L, "(UTC+06:00) Dhaka", "Bangladesh Standard Time", "Bangladesh Daylight Time", [|
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(828000000000L, 6, 3, DayOfWeek.Friday), TimeZoneKit.T(863999990000L, 12, 5, DayOfWeek.Thursday), 0L)
                            |])
                            TZ("Omsk Standard Time", 216000000000L, "(UTC+06:00) Omsk", "Omsk Standard Time", "Omsk Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(634925952000000000L, 635240448000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Myanmar Standard Time", 234000000000L, "(UTC+06:30) Yangon (Rangoon)", "Myanmar Standard Time", "Myanmar Daylight Time", null)
                            TZ("SE Asia Standard Time", 252000000000L, "(UTC+07:00) Bangkok, Hanoi, Jakarta", "SE Asia Standard Time", "SE Asia Daylight Time", null)
                            TZ("Altai Standard Time", 252000000000L, "(UTC+07:00) Barnaul, Gorno-Altaysk", "Altai Standard Time", "Altai Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), -36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(635556672000000000L, 635871168000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -36000000000L)
                                R(635872032000000000L, 636187392000000000L, -36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("W. Mongolia Standard Time", 252000000000L, "(UTC+07:00) Hovd", "W. Mongolia Standard Time", "W. Mongolia Daylight Time", [|
                                R(0L, 633031200000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(72000000000L, 9, 5, DayOfWeek.Saturday), 0L)
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 9, 5, DayOfWeek.Friday), 0L)
                                R(635872032000000000L, 636187392000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 9, 4, DayOfWeek.Friday), 0L)
                            |])
                            TZ("North Asia Standard Time", 252000000000L, "(UTC+07:00) Krasnoyarsk", "Russia TZ 6 Standard Time", "Russia TZ 6 Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(634925952000000000L, 635240448000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("N. Central Asia Standard Time", 252000000000L, "(UTC+07:00) Novosibirsk", "Novosibirsk Standard Time", "Novosibirsk Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), -36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(635556672000000000L, 635871168000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -36000000000L)
                                R(635872032000000000L, 636187392000000000L, -36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 7, 4, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Tomsk Standard Time", 252000000000L, "(UTC+07:00) Tomsk", "Tomsk Standard Time", "Tomsk Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), -36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(635556672000000000L, 635871168000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -36000000000L)
                                R(635872032000000000L, 636187392000000000L, -36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 5, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("China Standard Time", 288000000000L, "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi", "China Standard Time", "China Daylight Time", null)
                            TZ("North Asia East Standard Time", 288000000000L, "(UTC+08:00) Irkutsk", "Russia TZ 7 Standard Time", "Russia TZ 7 Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(634925952000000000L, 635240448000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Singapore Standard Time", 288000000000L, "(UTC+08:00) Kuala Lumpur, Singapore", "Malay Peninsula Standard Time", "Malay Peninsula Daylight Time", null)
                            TZ("W. Australia Standard Time", 288000000000L, "(UTC+08:00) Perth", "W. Australia Standard Time", "W. Australia Daylight Time", [|
                                R(632716704000000000L, 633031200000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 12, 1, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Sunday), 0L)
                                R(633032064000000000L, 633346560000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 3, 5, DayOfWeek.Sunday), 0L)
                                R(633347424000000000L, 633662784000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 3, 5, DayOfWeek.Sunday), 0L)
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Thursday), TimeZoneKit.T(108000000000L, 3, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Taipei Standard Time", 288000000000L, "(UTC+08:00) Taipei", "Taipei Standard Time", "Taipei Daylight Time", null)
                            TZ("Ulaanbaatar Standard Time", 288000000000L, "(UTC+08:00) Ulaanbaatar", "Ulaanbaatar Standard Time", "Ulaanbaatar Daylight Time", [|
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 9, 5, DayOfWeek.Friday), 0L)
                                R(635872032000000000L, 636187392000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Saturday), TimeZoneKit.T(863999990000L, 9, 4, DayOfWeek.Friday), 0L)
                            |])
                            TZ("Aus Central W. Standard Time", 315000000000L, "(UTC+08:45) Eucla", "Aus Central W. Standard Time", "Aus Central W. Daylight Time", null)
                            TZ("Transbaikal Standard Time", 324000000000L, "(UTC+09:00) Chita", "Transbaikal Standard Time", "Transbaikal Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(634925952000000000L, 635240448000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(635241312000000000L, 635555808000000000L, 72000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(635556672000000000L, 635871168000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -36000000000L)
                                R(635872032000000000L, 636187392000000000L, -36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Tokyo Standard Time", 324000000000L, "(UTC+09:00) Osaka, Sapporo, Tokyo", "Tokyo Standard Time", "Tokyo Daylight Time", null)
                            TZ("North Korea Standard Time", 324000000000L, "(UTC+09:00) Pyongyang", "North Korea Standard Time", "North Korea Daylight Time", [|
                                R(635556672000000000L, 635871168000000000L, 18000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Thursday), TimeZoneKit.T(863999990000L, 8, 2, DayOfWeek.Friday), -18000000000L)
                                R(635872032000000000L, 636187392000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -18000000000L)
                                R(636188256000000000L, 636502752000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -18000000000L)
                                R(636503616000000000L, 636818112000000000L, -18000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Monday), TimeZoneKit.T(846000000000L, 5, 1, DayOfWeek.Friday), 0L)
                            |])
                            TZ("Korea Standard Time", 324000000000L, "(UTC+09:00) Seoul", "Korea Standard Time", "Korea Daylight Time", null)
                            TZ("Yakutsk Standard Time", 324000000000L, "(UTC+09:00) Yakutsk", "Russia TZ 8 Standard Time", "Russia TZ 8 Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(634925952000000000L, 635240448000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Cen. Australia Standard Time", 342000000000L, "(UTC+09:30) Adelaide", "Cen. Australia Standard Time", "Cen. Australia Daylight Time", [|
                                R(0L, 633346560000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 3, 5, DayOfWeek.Sunday), 0L)
                                R(633347424000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 10, 1, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 4, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("AUS Central Standard Time", 342000000000L, "(UTC+09:30) Darwin", "AUS Central Standard Time", "AUS Central Daylight Time", null)
                            TZ("E. Australia Standard Time", 360000000000L, "(UTC+10:00) Brisbane", "E. Australia Standard Time", "E. Australia Daylight Time", null)
                            TZ("AUS Eastern Standard Time", 360000000000L, "(UTC+10:00) Canberra, Melbourne, Sydney", "AUS Eastern Standard Time", "AUS Eastern Daylight Time", [|
                                R(0L, 633346560000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 3, 5, DayOfWeek.Sunday), 0L)
                                R(633347424000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 10, 1, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 4, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("West Pacific Standard Time", 360000000000L, "(UTC+10:00) Guam, Port Moresby", "West Pacific Standard Time", "West Pacific Daylight Time", null)
                            TZ("Tasmania Standard Time", 360000000000L, "(UTC+10:00) Hobart", "Tasmania Standard Time", "Tasmania Daylight Time", [|
                                R(0L, 633346560000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 10, 1, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 3, 5, DayOfWeek.Sunday), 0L)
                                R(633347424000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 10, 1, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 4, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Vladivostok Standard Time", 360000000000L, "(UTC+10:00) Vladivostok", "Russia TZ 9 Standard Time", "Russia TZ 9 Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(634925952000000000L, 635240448000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Lord Howe Standard Time", 378000000000L, "(UTC+10:30) Lord Howe Island", "Lord Howe Standard Time", "Lord Howe Daylight Time", [|
                                R(0L, 632715840000000000L, 18000000000L, TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), 0L)
                                R(632716704000000000L, 633031200000000000L, 18000000000L, TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Sunday), 0L)
                                R(633032064000000000L, 633346560000000000L, 18000000000L, TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), 0L)
                                R(633347424000000000L, 3155378112000000000L, 18000000000L, TimeZoneKit.T(72000000000L, 10, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 4, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Bougainville Standard Time", 396000000000L, "(UTC+11:00) Bougainville Island", "Bougainville Standard Time", "Bougainville Daylight Time", [|
                                R(0L, 635240448000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 12, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), -36000000000L)
                            |])
                            TZ("Russia Time Zone 10", 396000000000L, "(UTC+11:00) Chokurdakh", "Russia TZ 10 Standard Time", "Russia TZ 10 Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(634925952000000000L, 635240448000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Magadan Standard Time", 396000000000L, "(UTC+11:00) Magadan", "Magadan Standard Time", "Magadan Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), 0L)
                                R(634609728000000000L, 634925088000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(634925952000000000L, 635240448000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 36000000000L)
                                R(635241312000000000L, 635555808000000000L, 72000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(635556672000000000L, 635871168000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -36000000000L)
                                R(635872032000000000L, 636187392000000000L, -36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 4, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Norfolk Standard Time", 396000000000L, "(UTC+11:00) Norfolk Island", "Norfolk Standard Time", "Norfolk Daylight Time", [|
                                R(0L, 635555808000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), 18000000000L)
                                R(635556672000000000L, 635871168000000000L, 18000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Thursday), TimeZoneKit.T(72000000000L, 10, 1, DayOfWeek.Sunday), 0L)
                                R(636818976000000000L, 637133472000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 10, 1, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Tuesday), 0L)
                                R(637134336000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 10, 1, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 4, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Sakhalin Standard Time", 396000000000L, "(UTC+11:00) Sakhalin", "Sakhalin Standard Time", "Sakhalin Daylight Time", [|
                                R(0L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), -36000000000L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Wednesday), TimeZoneKit.T(72000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(635556672000000000L, 635871168000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -36000000000L)
                                R(635872032000000000L, 636187392000000000L, -36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Friday), TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Central Pacific Standard Time", 396000000000L, "(UTC+11:00) Solomon Is., New Caledonia", "Central Pacific Standard Time", "Central Pacific Daylight Time", null)
                            TZ("Russia Time Zone 11", 432000000000L, "(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky", "Russia TZ 11 Standard Time", "Russia TZ 11 Daylight Time", [|
                                R(0L, 633978144000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Friday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), -36000000000L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Saturday), -36000000000L)
                            |])
                            TZ("New Zealand Standard Time", 432000000000L, "(UTC+12:00) Auckland, Wellington", "New Zealand Standard Time", "New Zealand Daylight Time", [|
                                R(0L, 633031200000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 10, 1, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 3, 3, DayOfWeek.Sunday), 0L)
                                R(633032064000000000L, 633346560000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 9, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 3, 3, DayOfWeek.Sunday), 0L)
                                R(633347424000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 9, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 4, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("UTC+12", 432000000000L, "(UTC+12:00) Coordinated Universal Time+12", "UTC+12", "UTC+12", null)
                            TZ("Fiji Standard Time", 432000000000L, "(UTC+12:00) Fiji", "Fiji Standard Time", "Fiji Daylight Time", [|
                                R(633663648000000000L, 633978144000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 11, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Thursday), 0L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 10, 4, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 3, 5, DayOfWeek.Sunday), 0L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 10, 4, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 3, 1, DayOfWeek.Sunday), 0L)
                                R(634609728000000000L, 634925088000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 10, 3, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 1, 4, DayOfWeek.Sunday), 0L)
                                R(634925952000000000L, 635240448000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 10, 4, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 1, 3, DayOfWeek.Sunday), 0L)
                                R(635241312000000000L, 635555808000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), TimeZoneKit.T(72000000000L, 1, 3, DayOfWeek.Sunday), 0L)
                                R(635556672000000000L, 635871168000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 1, 3, DayOfWeek.Sunday), 0L)
                                R(635872032000000000L, 636187392000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 1, 3, DayOfWeek.Sunday), 0L)
                                R(636188256000000000L, 636502752000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 1, 3, DayOfWeek.Sunday), 0L)
                                R(636503616000000000L, 636818112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 1, 2, DayOfWeek.Sunday), 0L)
                                R(636818976000000000L, 637133472000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 11, 2, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 1, 2, DayOfWeek.Sunday), 0L)
                                R(637134336000000000L, 637449696000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 11, 2, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 1, 2, DayOfWeek.Sunday), 0L)
                                R(637450560000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 11, 2, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 1, 3, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Kamchatka Standard Time", 432000000000L, "(UTC+12:00) Petropavlovsk-Kamchatsky - Old", "Kamchatka Standard Time", "Kamchatka Daylight Time", [|
                                R(0L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 3, 5, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 10, 5, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Chatham Islands Standard Time", 459000000000L, "(UTC+12:45) Chatham Islands", "Chatham Islands Standard Time", "Chatham Islands Daylight Time", [|
                                R(0L, 633031200000000000L, 36000000000L, TimeZoneKit.T(99000000000L, 10, 1, DayOfWeek.Sunday), TimeZoneKit.T(135000000000L, 3, 3, DayOfWeek.Sunday), 0L)
                                R(633032064000000000L, 633346560000000000L, 36000000000L, TimeZoneKit.T(99000000000L, 9, 5, DayOfWeek.Sunday), TimeZoneKit.T(135000000000L, 3, 3, DayOfWeek.Sunday), 0L)
                                R(633347424000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(99000000000L, 9, 5, DayOfWeek.Sunday), TimeZoneKit.T(135000000000L, 4, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("UTC+13", 468000000000L, "(UTC+13:00) Coordinated Universal Time+13", "UTC+13", "UTC+13", null)
                            TZ("Tonga Standard Time", 468000000000L, "(UTC+13:00) Nuku'alofa", "Tonga Standard Time", "Tonga Daylight Time", [|
                                R(635872032000000000L, 636187392000000000L, 36000000000L, TimeZoneKit.T(72000000000L, 11, 1, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Friday), 0L)
                                R(636188256000000000L, 636502752000000000L, 36000000000L, TimeZoneKit.T(0L, 1, 1, DayOfWeek.Sunday), TimeZoneKit.T(108000000000L, 1, 3, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Samoa Standard Time", 468000000000L, "(UTC+13:00) Samoa", "Samoa Standard Time", "Samoa Daylight Time", [|
                                R(0L, 633978144000000000L, 0L, TimeZoneKit.T(0L, 1, 1), TimeZoneKit.T(10000L, 1, 1), -864000000000L)
                                R(633979008000000000L, 634293504000000000L, 36000000000L, TimeZoneKit.T(0L, 9, 5, DayOfWeek.Sunday), TimeZoneKit.T(0L, 1, 1, DayOfWeek.Friday), -864000000000L)
                                R(634294368000000000L, 634608864000000000L, 36000000000L, TimeZoneKit.T(108000000000L, 9, 4, DayOfWeek.Saturday), TimeZoneKit.T(144000000000L, 4, 1, DayOfWeek.Saturday), -864000000000L)
                                R(634609728000000000L, 3155378112000000000L, 36000000000L, TimeZoneKit.T(108000000000L, 9, 5, DayOfWeek.Sunday), TimeZoneKit.T(144000000000L, 4, 1, DayOfWeek.Sunday), 0L)
                            |])
                            TZ("Line Islands Standard Time", 504000000000L, "(UTC+14:00) Kiritimati Island", "Line Islands Standard Time", "Line Islands Daylight Time", null)
                        |]
            
                    /// <summary>
                    /// Set system time zones.
                    /// </summary>
                    static member SetSystemTimeZones(timeZones: TimeZoneInfo[] ) =
                        let systemTimeZones = typeof<TimeZoneInfo>.GetField("systemTimeZones", BindingFlags.NonPublic ||| BindingFlags.Static)
                        systemTimeZones.SetValue(null, new ReadOnlyCollection<TimeZoneInfo>(timeZones))
                        |> ignore
            
                    static member IANAtoTZIdMap = "\u0002Australia/Darwin	AUS Central Standard Time\u0003\u0002Australia/Sydney	AUS Eastern Standard Time\u0003\u0002Australia/Melbourne	AUS Eastern Standard Time\u0003\u0002Asia/Kabul	Afghanistan Standard Time\u0003\u0002America/Anchorage	Alaskan Standard Time\u0003\u0002America/Juneau	Alaskan Standard Time\u0003\u0002America/Metlakatla	Alaskan Standard Time\u0003\u0002America/Nome	Alaskan Standard Time\u0003\u0002America/Sitka	Alaskan Standard Time\u0003\u0002America/Yakutat	Alaskan Standard Time\u0003\u0002America/Adak	Aleutian Standard Time\u0003\u0002Asia/Barnaul	Altai Standard Time\u0003\u0002Asia/Riyadh	Arab Standard Time\u0003\u0002Asia/Qatar	Arab Standard Time\u0003\u0002Asia/Dubai	Arabian Standard Time\u0003\u0002Etc/GMT-4	Arabian Standard Time\u0003\u0002Asia/Baghdad	Arabic Standard Time\u0003\u0002America/Argentina/Buenos_Aires	Argentina Standard Time\u0003\u0002America/Argentina/La_Rioja	Argentina Standard Time\u0003\u0002America/Argentina/Rio_Gallegos	Argentina Standard Time\u0003\u0002America/Argentina/Salta	Argentina Standard Time\u0003\u0002America/Argentina/San_Juan	Argentina Standard Time\u0003\u0002America/Argentina/San_Luis	Argentina Standard Time\u0003\u0002America/Argentina/Tucuman	Argentina Standard Time\u0003\u0002America/Argentina/Ushuaia	Argentina Standard Time\u0003\u0002America/Argentina/Catamarca	Argentina Standard Time\u0003\u0002America/Argentina/Cordoba	Argentina Standard Time\u0003\u0002America/Argentina/Jujuy	Argentina Standard Time\u0003\u0002America/Argentina/Mendoza	Argentina Standard Time\u0003\u0002Europe/Astrakhan	Astrakhan Standard Time\u0003\u0002Europe/Ulyanovsk	Astrakhan Standard Time\u0003\u0002America/Halifax	Atlantic Standard Time\u0003\u0002Atlantic/Bermuda	Atlantic Standard Time\u0003\u0002America/Glace_Bay	Atlantic Standard Time\u0003\u0002America/Goose_Bay	Atlantic Standard Time\u0003\u0002America/Moncton	Atlantic Standard Time\u0003\u0002America/Thule	Atlantic Standard Time\u0003\u0002Australia/Eucla	Aus Central W. Standard Time\u0003\u0002Asia/Baku	Azerbaijan Standard Time\u0003\u0002Atlantic/Azores	Azores Standard Time\u0003\u0002America/Scoresbysund	Azores Standard Time\u0003\u0002America/Bahia	Bahia Standard Time\u0003\u0002Asia/Dhaka	Bangladesh Standard Time\u0003\u0002Asia/Thimphu	Bangladesh Standard Time\u0003\u0002Europe/Minsk	Belarus Standard Time\u0003\u0002Pacific/Bougainville	Bougainville Standard Time\u0003\u0002America/Regina	Canada Central Standard Time\u0003\u0002America/Swift_Current	Canada Central Standard Time\u0003\u0002Atlantic/Cape_Verde	Cape Verde Standard Time\u0003\u0002Etc/GMT+1	Cape Verde Standard Time\u0003\u0002Asia/Yerevan	Caucasus Standard Time\u0003\u0002Australia/Adelaide	Cen. Australia Standard Time\u0003\u0002Australia/Broken_Hill	Cen. Australia Standard Time\u0003\u0002America/Guatemala	Central America Standard Time\u0003\u0002America/Belize	Central America Standard Time\u0003\u0002America/Costa_Rica	Central America Standard Time\u0003\u0002Pacific/Galapagos	Central America Standard Time\u0003\u0002America/Tegucigalpa	Central America Standard Time\u0003\u0002America/Managua	Central America Standard Time\u0003\u0002America/El_Salvador	Central America Standard Time\u0003\u0002Etc/GMT+6	Central America Standard Time\u0003\u0002Asia/Almaty	Central Asia Standard Time\u0003\u0002Antarctica/Vostok	Central Asia Standard Time\u0003\u0002Asia/Urumqi	Central Asia Standard Time\u0003\u0002Indian/Chagos	Central Asia Standard Time\u0003\u0002Asia/Bishkek	Central Asia Standard Time\u0003\u0002Asia/Qyzylorda	Central Asia Standard Time\u0003\u0002Etc/GMT-6	Central Asia Standard Time\u0003\u0002America/Cuiaba	Central Brazilian Standard Time\u0003\u0002America/Campo_Grande	Central Brazilian Standard Time\u0003\u0002Europe/Budapest	Central Europe Standard Time\u0003\u0002Europe/Tirane	Central Europe Standard Time\u0003\u0002Europe/Prague	Central Europe Standard Time\u0003\u0002Europe/Belgrade	Central Europe Standard Time\u0003\u0002Europe/Warsaw	Central European Standard Time\u0003\u0002Pacific/Guadalcanal	Central Pacific Standard Time\u0003\u0002Antarctica/Macquarie	Central Pacific Standard Time\u0003\u0002Pacific/Pohnpei	Central Pacific Standard Time\u0003\u0002Pacific/Kosrae	Central Pacific Standard Time\u0003\u0002Pacific/Noumea	Central Pacific Standard Time\u0003\u0002Pacific/Efate	Central Pacific Standard Time\u0003\u0002Etc/GMT-11	Central Pacific Standard Time\u0003\u0002America/Mexico_City	Central Standard Time (Mexico)\u0003\u0002America/Bahia_Banderas	Central Standard Time (Mexico)\u0003\u0002America/Merida	Central Standard Time (Mexico)\u0003\u0002America/Monterrey	Central Standard Time (Mexico)\u0003\u0002America/Chicago	Central Standard Time\u0003\u0002America/Winnipeg	Central Standard Time\u0003\u0002America/Rainy_River	Central Standard Time\u0003\u0002America/Rankin_Inlet	Central Standard Time\u0003\u0002America/Resolute	Central Standard Time\u0003\u0002America/Matamoros	Central Standard Time\u0003\u0002America/Indiana/Knox	Central Standard Time\u0003\u0002America/Indiana/Tell_City	Central Standard Time\u0003\u0002America/Menominee	Central Standard Time\u0003\u0002America/North_Dakota/Beulah	Central Standard Time\u0003\u0002America/North_Dakota/Center	Central Standard Time\u0003\u0002America/North_Dakota/New_Salem	Central Standard Time\u0003\u0002CST6CDT	Central Standard Time\u0003\u0002Pacific/Chatham	Chatham Islands Standard Time\u0003\u0002Asia/Shanghai	China Standard Time\u0003\u0002Asia/Hong_Kong	China Standard Time\u0003\u0002Asia/Macau	China Standard Time\u0003\u0002America/Havana	Cuba Standard Time\u0003\u0002Etc/GMT+12	Dateline Standard Time\u0003\u0002Africa/Nairobi	E. Africa Standard Time\u0003\u0002Antarctica/Syowa	E. Africa Standard Time\u0003\u0002Africa/Juba	E. Africa Standard Time\u0003\u0002Etc/GMT-3	E. Africa Standard Time\u0003\u0002Australia/Brisbane	E. Australia Standard Time\u0003\u0002Australia/Lindeman	E. Australia Standard Time\u0003\u0002Europe/Chisinau	E. Europe Standard Time\u0003\u0002America/Sao_Paulo	E. South America Standard Time\u0003\u0002Pacific/Easter	Easter Island Standard Time\u0003\u0002America/Cancun	Eastern Standard Time (Mexico)\u0003\u0002America/New_York	Eastern Standard Time\u0003\u0002America/Nassau	Eastern Standard Time\u0003\u0002America/Toronto	Eastern Standard Time\u0003\u0002America/Iqaluit	Eastern Standard Time\u0003\u0002America/Nipigon	Eastern Standard Time\u0003\u0002America/Pangnirtung	Eastern Standard Time\u0003\u0002America/Thunder_Bay	Eastern Standard Time\u0003\u0002America/Detroit	Eastern Standard Time\u0003\u0002America/Indiana/Petersburg	Eastern Standard Time\u0003\u0002America/Indiana/Vincennes	Eastern Standard Time\u0003\u0002America/Indiana/Winamac	Eastern Standard Time\u0003\u0002America/Kentucky/Monticello	Eastern Standard Time\u0003\u0002America/Kentucky/Louisville	Eastern Standard Time\u0003\u0002EST5EDT	Eastern Standard Time\u0003\u0002Africa/Cairo	Egypt Standard Time\u0003\u0002Asia/Yekaterinburg	Ekaterinburg Standard Time\u0003\u0002Europe/Kiev	FLE Standard Time\u0003\u0002Europe/Helsinki	FLE Standard Time\u0003\u0002Europe/Sofia	FLE Standard Time\u0003\u0002Europe/Tallinn	FLE Standard Time\u0003\u0002Europe/Vilnius	FLE Standard Time\u0003\u0002Europe/Riga	FLE Standard Time\u0003\u0002Europe/Uzhgorod	FLE Standard Time\u0003\u0002Europe/Zaporozhye	FLE Standard Time\u0003\u0002Pacific/Fiji	Fiji Standard Time\u0003\u0002Europe/London	GMT Standard Time\u0003\u0002Atlantic/Canary	GMT Standard Time\u0003\u0002Atlantic/Faroe	GMT Standard Time\u0003\u0002Europe/Dublin	GMT Standard Time\u0003\u0002Europe/Lisbon	GMT Standard Time\u0003\u0002Atlantic/Madeira	GMT Standard Time\u0003\u0002Europe/Bucharest	GTB Standard Time\u0003\u0002Asia/Nicosia	GTB Standard Time\u0003\u0002Asia/Famagusta	GTB Standard Time\u0003\u0002Europe/Athens	GTB Standard Time\u0003\u0002Asia/Tbilisi	Georgian Standard Time\u0003\u0002America/Godthab	Greenland Standard Time\u0003\u0002Atlantic/Reykjavik	Greenwich Standard Time\u0003\u0002Atlantic/St_Helena	Greenwich Standard Time\u0003\u0002Africa/Abidjan	Greenwich Standard Time\u0003\u0002Africa/Accra	Greenwich Standard Time\u0003\u0002Africa/Bissau	Greenwich Standard Time\u0003\u0002Africa/Monrovia	Greenwich Standard Time\u0003\u0002America/Port-au-Prince	Haiti Standard Time\u0003\u0002Pacific/Honolulu	Hawaiian Standard Time\u0003\u0002Pacific/Rarotonga	Hawaiian Standard Time\u0003\u0002Pacific/Tahiti	Hawaiian Standard Time\u0003\u0002Etc/GMT+10	Hawaiian Standard Time\u0003\u0002Asia/Kolkata	India Standard Time\u0003\u0002Asia/Tehran	Iran Standard Time\u0003\u0002Asia/Jerusalem	Israel Standard Time\u0003\u0002Asia/Amman	Jordan Standard Time\u0003\u0002Europe/Kaliningrad	Kaliningrad Standard Time\u0003\u0002Asia/Kamchatka	Kamchatka Standard Time\u0003\u0002Asia/Seoul	Korea Standard Time\u0003\u0002Africa/Tripoli	Libya Standard Time\u0003\u0002Pacific/Kiritimati	Line Islands Standard Time\u0003\u0002Etc/GMT-14	Line Islands Standard Time\u0003\u0002Australia/Lord_Howe	Lord Howe Standard Time\u0003\u0002Asia/Magadan	Magadan Standard Time\u0003\u0002America/Punta_Arenas	Magallanes Standard Time\u0003\u0002Antarctica/Palmer	Magallanes Standard Time\u0003\u0002Pacific/Marquesas	Marquesas Standard Time\u0003\u0002Indian/Mauritius	Mauritius Standard Time\u0003\u0002Indian/Reunion	Mauritius Standard Time\u0003\u0002Indian/Mahe	Mauritius Standard Time\u0003\u0002Etc/GMT+2	Mid-Atlantic Standard Time\u0003\u0002Asia/Beirut	Middle East Standard Time\u0003\u0002America/Montevideo	Montevideo Standard Time\u0003\u0002Africa/Casablanca	Morocco Standard Time\u0003\u0002Africa/El_Aaiun	Morocco Standard Time\u0003\u0002America/Chihuahua	Mountain Standard Time (Mexico)\u0003\u0002America/Mazatlan	Mountain Standard Time (Mexico)\u0003\u0002America/Denver	Mountain Standard Time\u0003\u0002America/Edmonton	Mountain Standard Time\u0003\u0002America/Cambridge_Bay	Mountain Standard Time\u0003\u0002America/Inuvik	Mountain Standard Time\u0003\u0002America/Yellowknife	Mountain Standard Time\u0003\u0002America/Ojinaga	Mountain Standard Time\u0003\u0002America/Boise	Mountain Standard Time\u0003\u0002MST7MDT	Mountain Standard Time\u0003\u0002Asia/Yangon	Myanmar Standard Time\u0003\u0002Indian/Cocos	Myanmar Standard Time\u0003\u0002Asia/Novosibirsk	N. Central Asia Standard Time\u0003\u0002Africa/Windhoek	Namibia Standard Time\u0003\u0002Asia/Kathmandu	Nepal Standard Time\u0003\u0002Pacific/Auckland	New Zealand Standard Time\u0003\u0002America/St_Johns	Newfoundland Standard Time\u0003\u0002Pacific/Norfolk	Norfolk Standard Time\u0003\u0002Asia/Irkutsk	North Asia East Standard Time\u0003\u0002Asia/Krasnoyarsk	North Asia Standard Time\u0003\u0002Asia/Novokuznetsk	North Asia Standard Time\u0003\u0002Asia/Pyongyang	North Korea Standard Time\u0003\u0002Asia/Omsk	Omsk Standard Time\u0003\u0002America/Santiago	Pacific SA Standard Time\u0003\u0002America/Tijuana	Pacific Standard Time (Mexico)\u0003\u0002America/Los_Angeles	Pacific Standard Time\u0003\u0002America/Vancouver	Pacific Standard Time\u0003\u0002America/Dawson	Pacific Standard Time\u0003\u0002America/Whitehorse	Pacific Standard Time\u0003\u0002PST8PDT	Pacific Standard Time\u0003\u0002Asia/Karachi	Pakistan Standard Time\u0003\u0002America/Asuncion	Paraguay Standard Time\u0003\u0002Europe/Paris	Romance Standard Time\u0003\u0002Europe/Brussels	Romance Standard Time\u0003\u0002Europe/Copenhagen	Romance Standard Time\u0003\u0002Africa/Ceuta	Romance Standard Time\u0003\u0002Europe/Madrid	Romance Standard Time\u0003\u0002Asia/Srednekolymsk	Russia Time Zone 10\u0003\u0002Asia/Anadyr	Russia Time Zone 11\u0003\u0002Europe/Samara	Russia Time Zone 3\u0003\u0002Europe/Moscow	Russian Standard Time\u0003\u0002Europe/Kirov	Russian Standard Time\u0003\u0002Europe/Volgograd	Russian Standard Time\u0003\u0002Europe/Simferopol	Russian Standard Time\u0003\u0002America/Cayenne	SA Eastern Standard Time\u0003\u0002Antarctica/Rothera	SA Eastern Standard Time\u0003\u0002America/Fortaleza	SA Eastern Standard Time\u0003\u0002America/Belem	SA Eastern Standard Time\u0003\u0002America/Maceio	SA Eastern Standard Time\u0003\u0002America/Recife	SA Eastern Standard Time\u0003\u0002America/Santarem	SA Eastern Standard Time\u0003\u0002Atlantic/Stanley	SA Eastern Standard Time\u0003\u0002America/Paramaribo	SA Eastern Standard Time\u0003\u0002Etc/GMT+3	SA Eastern Standard Time\u0003\u0002America/Bogota	SA Pacific Standard Time\u0003\u0002America/Rio_Branco	SA Pacific Standard Time\u0003\u0002America/Eirunepe	SA Pacific Standard Time\u0003\u0002America/Atikokan	SA Pacific Standard Time\u0003\u0002America/Guayaquil	SA Pacific Standard Time\u0003\u0002America/Jamaica	SA Pacific Standard Time\u0003\u0002America/Panama	SA Pacific Standard Time\u0003\u0002America/Lima	SA Pacific Standard Time\u0003\u0002Etc/GMT+5	SA Pacific Standard Time\u0003\u0002America/La_Paz	SA Western Standard Time\u0003\u0002America/Port_of_Spain	SA Western Standard Time\u0003\u0002America/Curacao	SA Western Standard Time\u0003\u0002America/Barbados	SA Western Standard Time\u0003\u0002America/Manaus	SA Western Standard Time\u0003\u0002America/Boa_Vista	SA Western Standard Time\u0003\u0002America/Porto_Velho	SA Western Standard Time\u0003\u0002America/Blanc-Sablon	SA Western Standard Time\u0003\u0002America/Santo_Domingo	SA Western Standard Time\u0003\u0002America/Guyana	SA Western Standard Time\u0003\u0002America/Martinique	SA Western Standard Time\u0003\u0002America/Puerto_Rico	SA Western Standard Time\u0003\u0002Etc/GMT+4	SA Western Standard Time\u0003\u0002Asia/Bangkok	SE Asia Standard Time\u0003\u0002Antarctica/Davis	SE Asia Standard Time\u0003\u0002Indian/Christmas	SE Asia Standard Time\u0003\u0002Asia/Jakarta	SE Asia Standard Time\u0003\u0002Asia/Pontianak	SE Asia Standard Time\u0003\u0002Asia/Ho_Chi_Minh	SE Asia Standard Time\u0003\u0002Etc/GMT-7	SE Asia Standard Time\u0003\u0002America/Miquelon	Saint Pierre Standard Time\u0003\u0002Asia/Sakhalin	Sakhalin Standard Time\u0003\u0002Pacific/Apia	Samoa Standard Time\u0003\u0002Africa/Sao_Tome	Sao Tome Standard Time\u0003\u0002Europe/Saratov	Saratov Standard Time\u0003\u0002Asia/Singapore	Singapore Standard Time\u0003\u0002Asia/Brunei	Singapore Standard Time\u0003\u0002Asia/Makassar	Singapore Standard Time\u0003\u0002Asia/Kuala_Lumpur	Singapore Standard Time\u0003\u0002Asia/Kuching	Singapore Standard Time\u0003\u0002Asia/Manila	Singapore Standard Time\u0003\u0002Etc/GMT-8	Singapore Standard Time\u0003\u0002Africa/Johannesburg	South Africa Standard Time\u0003\u0002Africa/Maputo	South Africa Standard Time\u0003\u0002Etc/GMT-2	South Africa Standard Time\u0003\u0002Asia/Colombo	Sri Lanka Standard Time\u0003\u0002Africa/Khartoum	Sudan Standard Time\u0003\u0002Asia/Damascus	Syria Standard Time\u0003\u0002Asia/Taipei	Taipei Standard Time\u0003\u0002Australia/Hobart	Tasmania Standard Time\u0003\u0002Australia/Currie	Tasmania Standard Time\u0003\u0002America/Araguaina	Tocantins Standard Time\u0003\u0002Asia/Tokyo	Tokyo Standard Time\u0003\u0002Asia/Jayapura	Tokyo Standard Time\u0003\u0002Pacific/Palau	Tokyo Standard Time\u0003\u0002Asia/Dili	Tokyo Standard Time\u0003\u0002Etc/GMT-9	Tokyo Standard Time\u0003\u0002Asia/Tomsk	Tomsk Standard Time\u0003\u0002Pacific/Tongatapu	Tonga Standard Time\u0003\u0002Asia/Chita	Transbaikal Standard Time\u0003\u0002Europe/Istanbul	Turkey Standard Time\u0003\u0002America/Grand_Turk	Turks And Caicos Standard Time\u0003\u0002America/Indiana/Indianapolis	US Eastern Standard Time\u0003\u0002America/Indiana/Marengo	US Eastern Standard Time\u0003\u0002America/Indiana/Vevay	US Eastern Standard Time\u0003\u0002America/Phoenix	US Mountain Standard Time\u0003\u0002America/Dawson_Creek	US Mountain Standard Time\u0003\u0002America/Creston	US Mountain Standard Time\u0003\u0002America/Fort_Nelson	US Mountain Standard Time\u0003\u0002America/Hermosillo	US Mountain Standard Time\u0003\u0002Etc/GMT+7	US Mountain Standard Time\u0003\u0002Etc/GMT-12	UTC+12\u0003\u0002Pacific/Tarawa	UTC+12\u0003\u0002Pacific/Majuro	UTC+12\u0003\u0002Pacific/Kwajalein	UTC+12\u0003\u0002Pacific/Nauru	UTC+12\u0003\u0002Pacific/Funafuti	UTC+12\u0003\u0002Pacific/Wake	UTC+12\u0003\u0002Pacific/Wallis	UTC+12\u0003\u0002Etc/GMT-13	UTC+13\u0003\u0002Pacific/Enderbury	UTC+13\u0003\u0002Pacific/Fakaofo	UTC+13\u0003\u0002Etc/UTC	UTC\u0003\u0002America/Danmarkshavn	UTC\u0003\u0002America/Noronha	UTC-02\u0003\u0002Atlantic/South_Georgia	UTC-02\u0003\u0002Etc/GMT+8	UTC-08\u0003\u0002Pacific/Pitcairn	UTC-08\u0003\u0002Etc/GMT+9	UTC-09\u0003\u0002Pacific/Gambier	UTC-09\u0003\u0002Etc/GMT+11	UTC-11\u0003\u0002Pacific/Pago_Pago	UTC-11\u0003\u0002Pacific/Niue	UTC-11\u0003\u0002Asia/Ulaanbaatar	Ulaanbaatar Standard Time\u0003\u0002Asia/Choibalsan	Ulaanbaatar Standard Time\u0003\u0002America/Caracas	Venezuela Standard Time\u0003\u0002Asia/Vladivostok	Vladivostok Standard Time\u0003\u0002Asia/Ust-Nera	Vladivostok Standard Time\u0003\u0002Australia/Perth	W. Australia Standard Time\u0003\u0002Antarctica/Casey	W. Australia Standard Time\u0003\u0002Africa/Lagos	W. Central Africa Standard Time\u0003\u0002Africa/Algiers	W. Central Africa Standard Time\u0003\u0002Africa/Ndjamena	W. Central Africa Standard Time\u0003\u0002Africa/Tunis	W. Central Africa Standard Time\u0003\u0002Etc/GMT-1	W. Central Africa Standard Time\u0003\u0002Europe/Berlin	W. Europe Standard Time\u0003\u0002Europe/Andorra	W. Europe Standard Time\u0003\u0002Europe/Vienna	W. Europe Standard Time\u0003\u0002Europe/Zurich	W. Europe Standard Time\u0003\u0002Europe/Gibraltar	W. Europe Standard Time\u0003\u0002Europe/Rome	W. Europe Standard Time\u0003\u0002Europe/Luxembourg	W. Europe Standard Time\u0003\u0002Europe/Monaco	W. Europe Standard Time\u0003\u0002Europe/Malta	W. Europe Standard Time\u0003\u0002Europe/Amsterdam	W. Europe Standard Time\u0003\u0002Europe/Oslo	W. Europe Standard Time\u0003\u0002Europe/Stockholm	W. Europe Standard Time\u0003\u0002Asia/Hovd	W. Mongolia Standard Time\u0003\u0002Asia/Tashkent	West Asia Standard Time\u0003\u0002Antarctica/Mawson	West Asia Standard Time\u0003\u0002Asia/Oral	West Asia Standard Time\u0003\u0002Asia/Aqtau	West Asia Standard Time\u0003\u0002Asia/Aqtobe	West Asia Standard Time\u0003\u0002Asia/Atyrau	West Asia Standard Time\u0003\u0002Indian/Maldives	West Asia Standard Time\u0003\u0002Indian/Kerguelen	West Asia Standard Time\u0003\u0002Asia/Dushanbe	West Asia Standard Time\u0003\u0002Asia/Ashgabat	West Asia Standard Time\u0003\u0002Asia/Samarkand	West Asia Standard Time\u0003\u0002Etc/GMT-5	West Asia Standard Time\u0003\u0002Asia/Hebron	West Bank Standard Time\u0003\u0002Asia/Gaza	West Bank Standard Time\u0003\u0002Pacific/Port_Moresby	West Pacific Standard Time\u0003\u0002Antarctica/DumontDUrville	West Pacific Standard Time\u0003\u0002Pacific/Chuuk	West Pacific Standard Time\u0003\u0002Pacific/Guam	West Pacific Standard Time\u0003\u0002Etc/GMT-10	West Pacific Standard Time\u0003\u0002Asia/Yakutsk	Yakutsk Standard Time\u0003\u0002Asia/Khandyga	Yakutsk Standard Time\u0003\u0002Africa/Timbuktu	Greenwich Standard Time\u0003\u0002Africa/Bamako	Greenwich Standard Time\u0003\u0002Africa/Banjul	Greenwich Standard Time\u0003\u0002Africa/Conakry	Greenwich Standard Time\u0003\u0002Africa/Dakar	Greenwich Standard Time\u0003\u0002Africa/Freetown	Greenwich Standard Time\u0003\u0002Africa/Lome	Greenwich Standard Time\u0003\u0002Africa/Nouakchott	Greenwich Standard Time\u0003\u0002Africa/Ouagadougou	Greenwich Standard Time\u0003\u0002Egypt	Egypt Standard Time\u0003\u0002Africa/Maseru	South Africa Standard Time\u0003\u0002Africa/Mbabane	South Africa Standard Time\u0003\u0002Africa/Bangui	W. Central Africa Standard Time\u0003\u0002Africa/Brazzaville	W. Central Africa Standard Time\u0003\u0002Africa/Douala	W. Central Africa Standard Time\u0003\u0002Africa/Kinshasa	W. Central Africa Standard Time\u0003\u0002Africa/Libreville	W. Central Africa Standard Time\u0003\u0002Africa/Luanda	W. Central Africa Standard Time\u0003\u0002Africa/Malabo	W. Central Africa Standard Time\u0003\u0002Africa/Niamey	W. Central Africa Standard Time\u0003\u0002Africa/Porto-Novo	W. Central Africa Standard Time\u0003\u0002Africa/Blantyre	South Africa Standard Time\u0003\u0002Africa/Bujumbura	South Africa Standard Time\u0003\u0002Africa/Gaborone	South Africa Standard Time\u0003\u0002Africa/Harare	South Africa Standard Time\u0003\u0002Africa/Kigali	South Africa Standard Time\u0003\u0002Africa/Lubumbashi	South Africa Standard Time\u0003\u0002Africa/Lusaka	South Africa Standard Time\u0003\u0002Africa/Asmara	E. Africa Standard Time\u0003\u0002Africa/Addis_Ababa	E. Africa Standard Time\u0003\u0002Africa/Dar_es_Salaam	E. Africa Standard Time\u0003\u0002Africa/Djibouti	E. Africa Standard Time\u0003\u0002Africa/Kampala	E. Africa Standard Time\u0003\u0002Africa/Mogadishu	E. Africa Standard Time\u0003\u0002Indian/Antananarivo	E. Africa Standard Time\u0003\u0002Indian/Comoro	E. Africa Standard Time\u0003\u0002Indian/Mayotte	E. Africa Standard Time\u0003\u0002Africa/Asmera	E. Africa Standard Time\u0003\u0002Libya	Libya Standard Time\u0003\u0002America/Atka	Aleutian Standard Time\u0003\u0002US/Aleutian	Aleutian Standard Time\u0003\u0002US/Alaska	Alaskan Standard Time\u0003\u0002America/Buenos_Aires	Argentina Standard Time\u0003\u0002America/Catamarca	Argentina Standard Time\u0003\u0002America/Argentina/ComodRivadavia	Argentina Standard Time\u0003\u0002America/Cordoba	Argentina Standard Time\u0003\u0002America/Rosario	Argentina Standard Time\u0003\u0002America/Jujuy	Argentina Standard Time\u0003\u0002America/Mendoza	Argentina Standard Time\u0003\u0002America/Coral_Harbour	SA Pacific Standard Time\u0003\u0002US/Central	Central Standard Time\u0003\u0002America/Aruba	SA Western Standard Time\u0003\u0002America/Lower_Princes	SA Western Standard Time\u0003\u0002America/Kralendijk	SA Western Standard Time\u0003\u0002America/Shiprock	Mountain Standard Time\u0003\u0002Navajo	Mountain Standard Time\u0003\u0002US/Mountain	Mountain Standard Time\u0003\u0002US/Michigan	Eastern Standard Time\u0003\u0002Canada/Mountain	Mountain Standard Time\u0003\u0002Canada/Atlantic	Atlantic Standard Time\u0003\u0002Cuba	Cuba Standard Time\u0003\u0002America/Fort_Wayne	US Eastern Standard Time\u0003\u0002America/Indianapolis	US Eastern Standard Time\u0003\u0002US/East-Indiana	US Eastern Standard Time\u0003\u0002America/Knox_IN	Central Standard Time\u0003\u0002US/Indiana-Starke	Central Standard Time\u0003\u0002Jamaica	SA Pacific Standard Time\u0003\u0002America/Louisville	Eastern Standard Time\u0003\u0002US/Pacific	Pacific Standard Time\u0003\u0002US/Pacific-New	Pacific Standard Time\u0003\u0002Brazil/West	SA Western Standard Time\u0003\u0002Mexico/BajaSur	Mountain Standard Time (Mexico)\u0003\u0002Mexico/General	Central Standard Time (Mexico)\u0003\u0002US/Eastern	Eastern Standard Time\u0003\u0002Brazil/DeNoronha	UTC-02\u0003\u0002America/Cayman	SA Pacific Standard Time\u0003\u0002US/Arizona	US Mountain Standard Time\u0003\u0002America/Virgin	SA Western Standard Time\u0003\u0002America/Anguilla	SA Western Standard Time\u0003\u0002America/Antigua	SA Western Standard Time\u0003\u0002America/Dominica	SA Western Standard Time\u0003\u0002America/Grenada	SA Western Standard Time\u0003\u0002America/Guadeloupe	SA Western Standard Time\u0003\u0002America/Marigot	SA Western Standard Time\u0003\u0002America/Montserrat	SA Western Standard Time\u0003\u0002America/St_Barthelemy	SA Western Standard Time\u0003\u0002America/St_Kitts	SA Western Standard Time\u0003\u0002America/St_Lucia	SA Western Standard Time\u0003\u0002America/St_Thomas	SA Western Standard Time\u0003\u0002America/St_Vincent	SA Western Standard Time\u0003\u0002America/Tortola	SA Western Standard Time\u0003\u0002Canada/East-Saskatchewan	Canada Central Standard Time\u0003\u0002Canada/Saskatchewan	Canada Central Standard Time\u0003\u0002America/Porto_Acre	SA Pacific Standard Time\u0003\u0002Brazil/Acre	SA Pacific Standard Time\u0003\u0002Chile/Continental	Pacific SA Standard Time\u0003\u0002Brazil/East	E. South America Standard Time\u0003\u0002Canada/Newfoundland	Newfoundland Standard Time\u0003\u0002America/Ensenada	Pacific Standard Time (Mexico)\u0003\u0002Mexico/BajaNorte	Pacific Standard Time (Mexico)\u0003\u0002America/Santa_Isabel	Pacific Standard Time (Mexico)\u0003\u0002Canada/Eastern	Eastern Standard Time\u0003\u0002America/Montreal	Eastern Standard Time\u0003\u0002Canada/Pacific	Pacific Standard Time\u0003\u0002Canada/Yukon	Pacific Standard Time\u0003\u0002Canada/Central	Central Standard Time\u0003\u0002Asia/Ashkhabad	West Asia Standard Time\u0003\u0002Asia/Phnom_Penh	SE Asia Standard Time\u0003\u0002Asia/Vientiane	SE Asia Standard Time\u0003\u0002Asia/Dacca	Bangladesh Standard Time\u0003\u0002Asia/Muscat	Arabian Standard Time\u0003\u0002Asia/Saigon	SE Asia Standard Time\u0003\u0002Hongkong	China Standard Time\u0003\u0002Asia/Tel_Aviv	Israel Standard Time\u0003\u0002Israel	Israel Standard Time\u0003\u0002Asia/Katmandu	Nepal Standard Time\u0003\u0002Asia/Calcutta	India Standard Time\u0003\u0002Asia/Macao	China Standard Time\u0003\u0002Asia/Ujung_Pandang	Singapore Standard Time\u0003\u0002Europe/Nicosia	GTB Standard Time\u0003\u0002Asia/Bahrain	Arab Standard Time\u0003\u0002Asia/Aden	Arab Standard Time\u0003\u0002Asia/Kuwait	Arab Standard Time\u0003\u0002ROK	Korea Standard Time\u0003\u0002Asia/Chongqing	China Standard Time\u0003\u0002Asia/Chungking	China Standard Time\u0003\u0002Asia/Harbin	China Standard Time\u0003\u0002PRC	China Standard Time\u0003\u0002Singapore	Singapore Standard Time\u0003\u0002ROC	Taipei Standard Time\u0003\u0002Iran	Iran Standard Time\u0003\u0002Asia/Thimbu	Bangladesh Standard Time\u0003\u0002Japan	Tokyo Standard Time\u0003\u0002Asia/Ulan_Bator	Ulaanbaatar Standard Time\u0003\u0002Asia/Kashgar	Central Asia Standard Time\u0003\u0002Asia/Rangoon	Myanmar Standard Time\u0003\u0002WET	GMT Standard Time\u0003\u0002Atlantic/Faeroe	GMT Standard Time\u0003\u0002Iceland	Greenwich Standard Time\u0003\u0002Australia/South	Cen. Australia Standard Time\u0003\u0002Australia/Queensland	E. Australia Standard Time\u0003\u0002Australia/Yancowinna	Cen. Australia Standard Time\u0003\u0002Australia/North	AUS Central Standard Time\u0003\u0002Australia/Tasmania	Tasmania Standard Time\u0003\u0002Australia/LHI	Lord Howe Standard Time\u0003\u0002Australia/Victoria	AUS Eastern Standard Time\u0003\u0002Australia/West	W. Australia Standard Time\u0003\u0002Australia/ACT	AUS Eastern Standard Time\u0003\u0002Australia/Canberra	AUS Eastern Standard Time\u0003\u0002Australia/NSW	AUS Eastern Standard Time\u0003\u0002HST	Hawaiian Standard Time\u0003\u0002EST	SA Pacific Standard Time\u0003\u0002MST	US Mountain Standard Time\u0003\u0002Etc/GMT+0	UTC\u0003\u0002Etc/GMT-0	UTC\u0003\u0002Etc/GMT0	UTC\u0003\u0002Etc/Greenwich	UTC\u0003\u0002GMT	UTC\u0003\u0002GMT+0	UTC\u0003\u0002GMT-0	UTC\u0003\u0002GMT0	UTC\u0003\u0002Greenwich	UTC\u0003\u0002Etc/UCT	UTC\u0003\u0002Etc/Universal	UTC\u0003\u0002Etc/Zulu	UTC\u0003\u0002UCT	UTC\u0003\u0002UTC	UTC\u0003\u0002Universal	UTC\u0003\u0002Zulu	UTC\u0003\u0002Etc/GMT	UTC\u0003\u0002Europe/Ljubljana	Central Europe Standard Time\u0003\u0002Europe/Podgorica	Central Europe Standard Time\u0003\u0002Europe/Sarajevo	Central Europe Standard Time\u0003\u0002Europe/Skopje	Central Europe Standard Time\u0003\u0002Europe/Zagreb	Central Europe Standard Time\u0003\u0002MET	W. Europe Standard Time\u0003\u0002EET	GTB Standard Time\u0003\u0002Europe/Tiraspol	E. Europe Standard Time\u0003\u0002Eire	GMT Standard Time\u0003\u0002Europe/Mariehamn	FLE Standard Time\u0003\u0002Asia/Istanbul	Turkey Standard Time\u0003\u0002Turkey	Turkey Standard Time\u0003\u0002Portugal	GMT Standard Time\u0003\u0002Europe/Belfast	GMT Standard Time\u0003\u0002GB	GMT Standard Time\u0003\u0002GB-Eire	GMT Standard Time\u0003\u0002Europe/Jersey	GMT Standard Time\u0003\u0002Europe/Guernsey	GMT Standard Time\u0003\u0002Europe/Isle_of_Man	GMT Standard Time\u0003\u0002W-SU	Russian Standard Time\u0003\u0002Atlantic/Jan_Mayen	W. Europe Standard Time\u0003\u0002Arctic/Longyearbyen	W. Europe Standard Time\u0003\u0002CET	Romance Standard Time\u0003\u0002Europe/Bratislava	Central Europe Standard Time\u0003\u0002Europe/Vatican	W. Europe Standard Time\u0003\u0002Europe/San_Marino	W. Europe Standard Time\u0003\u0002Poland	Central European Standard Time\u0003\u0002Europe/Busingen	W. Europe Standard Time\u0003\u0002Europe/Vaduz	W. Europe Standard Time\u0003\u0002Antarctica/South_Pole	New Zealand Standard Time\u0003\u0002NZ	New Zealand Standard Time\u0003\u0002Antarctica/McMurdo	New Zealand Standard Time\u0003\u0002NZ-CHAT	Chatham Islands Standard Time\u0003\u0002Pacific/Truk	West Pacific Standard Time\u0003\u0002Pacific/Yap	West Pacific Standard Time\u0003\u0002Chile/EasterIsland	Easter Island Standard Time\u0003\u0002Pacific/Saipan	West Pacific Standard Time\u0003\u0002US/Hawaii	Hawaiian Standard Time\u0003\u0002Pacific/Johnston	Hawaiian Standard Time\u0003\u0002Kwajalein	UTC+12\u0003\u0002Pacific/Samoa	UTC-11\u0003\u0002US/Samoa	UTC-11\u0003\u0002Pacific/Midway	UTC-11\u0003\u0002Pacific/Ponape	Central Pacific Standard Time\u0003"
            
                    /// <summary>
                    /// Convert IANA time zone name to .NET time zone id.
                    /// </summary>
                    static member GetTimeZoneIdFromIANA(ianaName: string ) = 
                        let searchText = "\u0002" + ianaName + "\t"
                        let headPos = TimeZoneKit.IANAtoTZIdMap.IndexOf(searchText)
                        if headPos = -1 then "UTC" else
                        let midPos = headPos + searchText.Length
                        let termPos = TimeZoneKit.IANAtoTZIdMap.IndexOf('\u0003', midPos)
                        TimeZoneKit.IANAtoTZIdMap.Substring(midPos, termPos - midPos)
                    
            
                    /// <summary>
                    /// Set TimeZoneInfo.Local to specified time zone.
                    /// </summary>
                    static member SetLocalTimeZone(localTimeZone: TimeZoneInfo) =
                        let localFiled = typeof<TimeZoneInfo>.GetField("local", BindingFlags.NonPublic ||| BindingFlags.Static)
                        localFiled.SetValue(null, localTimeZone) 
                        |> ignore      
            
                    /// <summary>
                    /// Set TimeZoneInfo.Local to specified time zone.
                    /// </summary>
                    static member SetLocalTimeZone(timeZoneId:string) =        
                        for tz in TimeZoneInfo.GetSystemTimeZones() do            
                            if tz.Id = timeZoneId then                
                                TimeZoneKit.SetLocalTimeZone tz
                            
                    /// <summary>
                    /// Set TimeZoneInfo.Local to specified time zone by IANA name.
                    /// </summary>
                    //[< JSInvokable("InitLocalTimeZone") >]
                    static member SetLocalTimeZoneByIANAName(ianaTimeZoneName:string ) =
                        TimeZoneKit.GetTimeZoneIdFromIANA ianaTimeZoneName
                        |> TimeZoneKit.SetLocalTimeZone         
            
            
                let useSystemTimeZones() =
                    if TimeZoneInfo.GetSystemTimeZones().Count = 0 then
                        TimeZoneKit.SetSystemTimeZones(TimeZoneKit.CreateSystemTimeZones())
            
                let useLocalTimeZone() =
                    useSystemTimeZones()
                    "(function(){try { return ''+ Intl.DateTimeFormat().resolvedOptions().timeZone; } catch(e) {} return 'UTC';}())"
                    |> WebAssembly.Runtime.InvokeJS
                    |> TimeZoneKit.SetLocalTimeZoneByIANAName
            
                let setLocalTimeZone(timeZoneId: string ) =
                    useSystemTimeZones()
                    TimeZoneKit.SetLocalTimeZone timeZoneId
            
                let setLocalTimeZoneByIANAName(ianaTimeZoneName: string ) =
                    useSystemTimeZones()
                    TimeZoneKit.SetLocalTimeZoneByIANAName ianaTimeZoneName
            
            
    
    //#define NOFSROOTx
    //#define NETSTANDARD20
    //#define WEBSHARPER
    //#define WEBSHARPER47
    
    //#nowarn "1182"
    
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\FSharp.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\FSharp.Compiler.Service.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\mscorlib.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\netstandard.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.ComponentModel.Composition.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Data.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Data.DataSetExtensions.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Drawing.Common.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.IO.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.IO.Compression.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.IO.Compression.FileSystem.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Memory.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Net.Http.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Numerics.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Runtime.Serialization.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Transactions.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Xml.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Xml.Linq.dll"
    
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\System.Diagnostics.PerformanceCounter.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\framework\WebAssembly.Bindings.dll"
    
    #if WEBSHARPER
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.Core.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.Web.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.Sitelets.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.Main.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.UI.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.Compiler.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.JQuery.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\v47\dlls\WebSharper.Compiler.FSharp.dll"
    
    module RM = WebSharper.Core.Remoting
    
    #else
    module WebSharper =
        type RpcAttribute() =
            inherit System.Attribute()
            let a = 1
        type RemoteAttribute() =
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
    #endif        
    
    module WsTranslator =
    //    open FsRoot.Library.FShUI_AssemblyData
        open System
        open System.IO
        open FSharp.Compiler.SourceCodeServices
        open WebSharper
        open WebSharper.Core
        open WebSharper.Compiler.Translator
    
        let printer = Dependency (fun (ch:string) (txt:string) -> Console.WriteLine (ch + ":: " + txt) )
        let printfnLog channel fmt = Printf.ksprintf (printer.D channel) fmt
        let printfn  fmt  = printfnLog "stdout" fmt
        let eprintfn fmt  = printfnLog "stderr" fmt
    
        Log.printer.D <- (fun txt -> printer.D "Timings" txt )
    
        let environment() =
            printfnLog "WASM"  "************************************************"
            printfnLog "WASM"  "System.Environment.OSVersion.Platform = %A" System.Environment.OSVersion.Platform
            let runningOnMono = try System.Type.GetType("Mono.Runtime") <> null with e-> false
            printfnLog "WASM"  "running on MONO = %A" runningOnMono
            //let isRunningOnCoreClr = (typeof<obj>.Assembly).FullName.StartsWith("System.Private.CoreLib", StringComparison.InvariantCultureIgnoreCase)
            //printfnLog "WASM"  "running on CoreClr = %A" isRunningOnCoreClr
            let is32Bit = IntPtr.Size = 4
            printfnLog "WASM"  "is 32Bit = %A" is32Bit
            TimeZoneKit.useLocalTimeZone()
            let localZone = TimeZoneInfo.Local
            printfnLog "WASM"  "Local Time Zone ID: %s" localZone.Id
            printfnLog "WASM"  "   Display Name is: %s" localZone.DisplayName
            printfnLog "WASM"  "   Standard name is: %s" localZone.StandardName
            printfnLog "WASM"  "   Daylight saving name is: %s" localZone.DaylightName
            printfnLog "WASM"  "Local time is : %s" <| Log.nowStamp()
            printfnLog "WASM"  "************************************************"
    
        let fsharpChecker = 
            lazy (
                System.Environment.SetEnvironmentVariable("FSHARP_COMPILER_BIN", "/managed")
                System.Environment.SetEnvironmentVariable("FSC_MONO", "/managed")
                FSharpChecker.Create( keepAssemblyContents = true) 
    
            ) |> Log.TimeItLazy "FCS checker"
    
        let startLoading (l:Lazy<_>) = ()
            //async {
            //    do! Async.Sleep 40
            //    let _ = l.Force()
            //    ()
            //} |> Async.Start 
    
        //***startLoading fsharpChecker
     
        let dirWasm (d:string) =
            let rec dir (d:string) =
                try 
                    if d = "/proc/self/fd" then Console.WriteLine "skip /proc/self/fd"  else
                    for file in Directory.GetFiles(d, "*") do
                        printfn "%s"  file  
                    for subdir in Directory.EnumerateDirectories d do
                        printfn "%s/" subdir
                        dir           subdir
                with e -> Console.WriteLine e.Message 
            printfn  "dirWasm:"
            dir d
    
        open WebSharper.Compiler
    
        type DllFileName  = DllFileName  of string
        type MetaFileName = MetaFileName of string
    
        [< JavaScript >]
        let justDlls = 
            [|
                DllFileName "/dlls/WebSharper.Main.dll"
                DllFileName "/dlls/WebSharper.Collections.dll"
                DllFileName "/dlls/WebSharper.Control.dll"
                DllFileName "/dlls/WebSharper.Web.dll"
                DllFileName "/dlls/WebSharper.Sitelets.dll"
                DllFileName "/dlls/WebSharper.UI.dll"
                DllFileName "/dlls/WebSharper.UI.Templating.Runtime.dll"
                DllFileName "/dlls/WebSharper.Data.dll"
            |] 
    
        [< JavaScript >]
        let fromDll2Meta (DllFileName fname) = fname.Replace(".dll", ".meta") |> MetaFileName
            
        [< JavaScript >]
        let dlls() = 
            seq [ 
                for f in justDlls do
                    yield f              |> function DllFileName  s -> s
                    //yield fromDll2Meta f |> function MetaFileName s -> s
            ] |> Seq.toArray
    
        /// takes almost 15 seconds to decompress and load
        let getMetaInfoFromAssemblyO = Dependency (fun (DllFileName f) ->FrontEnd.ReadFromFile FrontEnd.ReadOptions.FullMetadata f)
    
        let readMetadata (dllToMetaInfoO : DllFileName -> Metadata.Info option) files =
            let metas = files |> Seq.choose dllToMetaInfoO         |> Seq.cache
            let deps  = metas |> Seq.map (fun m -> m.Dependencies) |> WebSharper.Core.DependencyGraph.Graph.NewWithDependencyAssemblies
            { WebSharper.Core.Metadata.Info.UnionWithoutDependencies metas with Dependencies = deps.GetData() }
    
        let metadataL = 
            lazy (
                justDlls |> readMetadata getMetaInfoFromAssemblyO.D
            ) |> Log.TimeItLazy "Loading Dlls metadata"
    
        // Inject this one for AOTInterp (works now with AOT)
        // This one is a bit faster because is already decompressed. It took 8 seconds
        // getMetaInfoFromAssemblyO.D <- fromDll2Meta >> getMetaInfoFromMetaO
    
        let translateFromAst projectName metadata ast =
            lazy (
                //let macroType = typedefof<WebSharper.UI.Macros.TextView> // necessary so the linker keeps the macros
                //macroType.AssemblyQualifiedName |> printfn "%A"
                //let macrotype2 = System.Type.GetType("WebSharper.UI.Macros+TextView, WebSharper.UI, Version=4.5.0.0, Culture=neutral, PublicKeyToken=null", true)
                //macrotype2.AssemblyQualifiedName |> printfn "%A"
                let comp = 
                    WebSharper.Compiler.FSharp.ProjectReader.transformAssembly
                        (WebSharper.Compiler.Compilation(metadata, false, UseLocalMacros = true))
                        projectName
                        { CommandTools.WsConfig.Empty with JavaScriptScope = CommandTools.JavaScriptScope.JSAssembly }
                        ast
                if not comp.Errors.IsEmpty then None, comp.Errors, comp.Warnings else
                Translator.DotNetToJavaScript.CompileFull comp
                if not comp.Errors.IsEmpty then None, comp.Errors, comp.Warnings else
                let currentMeta = comp.ToCurrentMetadata()
                let js =
                    Packager.packageAssembly metadata currentMeta None Packager.OnLoadIfExists    
                    |> Packager.exprToString JavaScript.Readable JavaScript.Writer.CodeWriter
                    |> fst
                (Some js ), comp.Errors, comp.Warnings
            ) |> Log.TimeItLazy "translateFromAst" |> fun r -> r.Force()
    
        let saveCode projectName opts code =
            let  projOpts = fsharpChecker.Force().GetProjectOptionsFromCommandLineArgs(projectName, opts)
            File.WriteAllText(projOpts.OtherOptions.[1], code)
            projOpts
    
        let parseAndCheckProject projectName opts code = 
            saveCode projectName opts code
            |> fsharpChecker.Force().ParseAndCheckProject
            |> Log.TimeItAsync "ParseAndCheckProject"
    
        let checkMemoryFile() = // it does not work on mono, it is going to be excluded should return Nulls
            try
                Console.WriteLine "in checkMemoryFile"
                System.IO.MemoryMappedFiles.MemoryMappedFileAccess.ReadWriteExecute.ToString()
                |> Console.WriteLine
                Console.WriteLine "before mmf"
                use mmf  = System.IO.MemoryMappedFiles.MemoryMappedFile.CreateFromFile("/dlls/WebSharper.Control.meta", System.IO.FileMode.Open)
                ()
            with e ->
                e.ToString() |> Console.WriteLine 
            Console.WriteLine "after mmf"
    
        let checkGZip() = 
            Console.WriteLine "before new System.IO.MemoryStream()"
            use mem    = new System.IO.MemoryStream() 
            Console.WriteLine "before new System.IO.Compression.GZipStream(mem, System.IO.Compression.CompressionMode.Compress  )"
            use comp   = new System.IO.Compression.GZipStream(mem, System.IO.Compression.CompressionMode.Compress  ) // fails here
            Console.WriteLine "after new System.IO.Compression.GZipStream(mem, System.IO.Compression.CompressionMode.Compress  )"
            use wrt    = new System.IO.StreamWriter(comp)
            wrt.WriteLine "Hello GZipStream"
            wrt.Close()
            use mem2   = new System.IO.MemoryStream(mem.GetBuffer())
            use decomp = new System.IO.Compression.GZipStream(mem2, System.IO.Compression.CompressionMode.Decompress)
            use rdr    = new System.IO.StreamReader(decomp)
            Console.WriteLine(rdr.ReadLine())    
    
        let getParms parms = ("fsc.exe\n" + parms).Split '\n' |> Array.filter (fun s -> s.Trim() <> "")
    
        let testCompile() =
            let opts = getParms("""
                                    /tmp/source.fsx
                                    -d:WEBSHARPER
                                    -o:source.exe
                                    --simpleresolution
                                    --nowarn:3186
                                    --optimize-
                                    --noframework
                                    --fullpaths
                                    --warn:3
                                    --target:exe
                                    -r:/dlls/WebSharper.Core.dll
                                    -r:/dlls/WebSharper.Main.dll
                                    -r:/dlls/WebSharper.UI.dll
                                    -r:/dlls/WebSharper.Sitelets.dll
                                    -r:/managed/FSharp.Core.dll
                                    -r:/managed/mscorlib.dll
                                    -r:/managed/netstandard.dll
                                    -r:/managed/System.dll
                                    -r:/managed/System.Core.dll
                                    -r:/managed/System.IO.dll
                                    -r:/managed/System.Runtime.dll
                                    -r:/managed/System.Net.Http.dll
                                    -r:/managed/System.Threading.dll
                                    -r:/managed/System.Numerics.dll
                                    -r:/managed/System.Runtime.Numerics.dll
                                """.Split '\n' |> Seq.map (fun s ->  s.Trim()) |> String.concat "\n")
            let code = """
    open WebSharper
    open WebSharper.UI
    open WebSharper.UI.Html
    
    let name = Var.Create "World"
    
    [< Inline "'Hello inline '" >]
    let bDoc() = "Hello"
    
    let cDoc() = text name.V
    
    let aDoc() = 
        div [] [
            text <| bDoc()
            cDoc()
        ]
            """
            async { 
                try 
                    Console.WriteLine "before parseAndCheckProject"
                    let! results = parseAndCheckProject "source" opts code
                    Console.WriteLine "Errors:"
                    for err in results.Errors do
                        Console.WriteLine("Error: " + err.ToString())
                    Console.WriteLine "Dependencies:"
                    for dep in results.DependencyFiles do
                        Console.WriteLine("Dependency: " + dep.ToString())
                    //let wsRes =
                    //    if results.HasCriticalErrors then None else
                    //    startLoading metadataL
                    //    translateFromAst "TestCompile" (metadataL.Force()) results
                    //    |> Some
                    //Console.WriteLine "WsErrors:"
                    //match wsRes with
                    //| None -> Console.WriteLine("No translation")
                    //| Some(jsO, errs, warns) ->
                    //for err in errs do
                    //    Console.WriteLine("WsError: "   + err.ToString())
                    //for warn in warns do
                    //    Console.WriteLine("WsWarning: " + warn.ToString())
                    //jsO |> Option.iter Console.WriteLine
                with e ->
                    eprintfn "*************\n%A\n*************" <| e
                    eprintfn "Inner: \n%A\n*************" <| e.InnerException 
            }
    
        module Remoting =
            open WebAssembly
            open WebAssembly.Core
            open WebAssembly.Host
    
            let (?) o prop = printfnLog "Remoting" "?%s" prop; (unbox<JSObject> o).GetObjectProperty prop
            let remoting   = lazy (Runtime.GetGlobalObject()?FsRoot?LibraryJS?WsTranslatorLoader?Remoting |> unbox<JSObject>) 
            let returnValue (md : string, v : string) = 
                try       remoting.Force().Invoke("returnValue", md, v) |> ignore
                with e -> printfnLog "Remoting"  "Could not return value for md %s = %s" md v
                          printfnLog "Remoting"  "%A" e
            let returnExn   (md : string, e : string) = 
                try       remoting.Force().Invoke("returnExn"  , md, e) |> ignore
                with _ -> printfnLog "Remoting"  "Exception md = %s\n%s "md e
            let logThis (channel:string) (txt:string) =
                try       remoting.Force().Invoke("logThis"    , channel, txt) |> ignore
                with _ -> Printf.eprintfn "%s :  %s" channel txt
            printer.D <- logThis
            let wsServer   = 
                lazy (
                    RM.Server.Create WebSharper.Web.Shared.Metadata WebSharper.Web.Shared.Json
                ) |> Log.TimeItLazy "Loading remoting server"
            //startLoading wsServer
    
        environment()
    
        let runRpc(header:string, data:string) = 
            async {
                //printfn "WsTranslator47 runRpc %A %A" header data
                let  wsReq    = {
                    RM.Request.Body    = data
                    RM.Request.Headers = 
                        function
                        | "content-type"     -> Some "application/json"
                        | "x-websharper-rpc" -> Some header
                        | _  -> None
                }
                try
                  //do  environment()
                  //do  checkMemoryFile() // this fails in AOT and AOT-interp
                  //do  checkGZip()       // this works
                  //do  dirWasm "/"       // this works
                  //do! testCompile()     // this fails in AOT and AOT-interp
                    let! wsResp = Remoting.wsServer.Force().HandleRequest wsReq
                    Remoting.returnValue(header, wsResp.Content)
                with e -> 
                    Remoting.returnExn  (header, sprintf "%A" e)
            } |> Log.TimeItAsync header |> Async.Start
    
        [< JavaScript >]
        type Position = {
            FileName : string
            Start    : int * int
            End      : int * int
        }
    
        let fromFSharpToAst (fserr:FSharpErrorInfo) = 
            {
                Position.FileName = fserr.FileName
                Position.Start    = fserr.Start.Line, fserr.Start.Column
                Position.End      = fserr.End  .Line, fserr.End  .Column
            }
            , sprintf "Error %5d: %s" fserr.ErrorNumber fserr.Message
    
        let fromWSPos (wserr:AST.SourcePos) =
            {
                Position.FileName = wserr.FileName
                Position.Start    = wserr.Start
                Position.End      = wserr.End  
            }
    
        let mutable counter = 0
        // WASM has trouble running initializer code in the dll. This does not run (newFileName = 0):
        // let newFileName =
        //    System.Environment.SetEnvironmentVariable("FSHARP_COMPILER_BIN", "/tmp")
        //    let mutable counter = 0
        //    fun () -> 
        //        counter <- counter + 1
        //        sprintf "/tmp/app%d.exe" counter
        let newFileName() =
            //if counter = 0 then
            //    printfnLog "Tracing"  "before System.Environment.SetEnvironmentVariable(\"FSHARP_COMPILER_BIN\", \"/tmp\")"
            //    System.Environment.SetEnvironmentVariable("FSHARP_COMPILER_BIN", "/tmp")
            //    printfnLog "Tracing"  "after System.Environment.SetEnvironmentVariable(\"FSHARP_COMPILER_BIN\", \"/tmp\")"
            printfnLog "Tracing"  "before counter <- counter + 1"
            counter <- counter + 1
            printfnLog "Tracing"  "counter = %A" counter
            sprintf "/tmp/app%d.exe" counter
            |> fun v -> printfnLog "Tracing"  "newFileName = %A" v; v
    
    
        module Token =
    
            type Token = Quoted of string | UnQuoted of string
    
    
            let rec doubleQuote = function
                | []                                            -> []
                | UnQuoted c :: _ when c.StartsWith "//"        -> []
                | Quoted t1 :: Quoted "\"" :: Quoted t2 :: rest -> (Quoted(t1 + "\"" + t2) :: rest) |> doubleQuote
                | Quoted t1 :: Quoted "\"" :: []                -> [Quoted t1 ]
                | h::rest                                       -> h :: doubleQuote rest
    
            let splitTokens line : Token list = // """main h1 "" "Hello World!"""" |> printfn "dd"
                (if Seq.tryHead line = Some '"' then " " + line else line).Split '"'
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
    
            let splitArgs v = v |> splitTokens |> Seq.map (function Quoted s | UnQuoted s -> s) |> Seq.toArray
    
        module Rpc =
            [< Remote >]
            let parseAndCheckProjectRpc projectName opts code = async {
                let! results = parseAndCheckProject projectName opts code 
                return results.Errors |> Array.map fromFSharpToAst, results.DependencyFiles, results.HasCriticalErrors
            }
    
            [< Remote >]
            let compileProjectRpc projectName opts code = async {
                let _projOpts = saveCode projectName opts code
                let! errors, res = fsharpChecker.Force().Compile opts |> Log.TimeItAsync "Compile"
                return errors |> Array.map fromFSharpToAst, res
            }
    
            [< Remote >]
            let translateFsToJsRpc projectName opts code = async {
                let! results = parseAndCheckProject projectName opts code
                let wsRes =
                    if results.HasCriticalErrors then None else
                    match translateFromAst projectName (metadataL.Force()) results with
                    | (jsO, errs, warns) -> jsO
                                            , errs  |> Seq.map(fun (p, e) ->  p |> Option.map fromWSPos, e.ToString() ) |> Seq.toArray
                                            , warns |> Seq.map(fun (p, e) ->  p |> Option.map fromWSPos, e.ToString() ) |> Seq.toArray
                    |> Some
                return results.Errors |> Array.map fromFSharpToAst, wsRes 
            }
    
            [< Remote >]
            let dirRpc (d:string) = async { dirWasm d }
    
            open System.Reflection
    
            [< Remote >]
            let runRpc(commandLine: string) = async {
                //printfnLog "Tracing"  "Environment.CommandLine      = %A" <| Environment.CommandLine
                //printfnLog "Tracing"  "commandLine = %A" commandLine
                let args = Token.splitArgs commandLine
                //printfnLog "Tracing"  "args = %A" args
                let path = args.[0] 
                Environment.CurrentDirectory <- System.IO.Path.GetDirectoryName path
                //printfnLog "Tracing"  "Environment.CurrentDirectory = %s" <| Environment.CurrentDirectory
                //printfnLog "Tracing"  "run(path: string) = %s" path
                //printfnLog "Tracing"  "before: let bytes = System.IO.File.ReadAllBytes path"
                //let bytes = System.IO.File.ReadAllBytes path
                //printfnLog "Tracing"  "bytes.Length = %d" bytes.Length
                //printfnLog "Tracing"  "before: let asm = Assembly.LoadFrom(path)"
                let asm = //Assembly.LoadFrom(path)
                    Assembly.Load(File.ReadAllBytes(path))
                // Run entry point
                //printfnLog "Tracing"  "asm.EntryPoint = %A " <| asm.EntryPoint
                //printfnLog "Tracing"  "before: asm.EntryPoint.Invoke(null, [||]) |> ignore"
                let parms = 
                    asm.EntryPoint.GetParameters() 
                    |> Array.map(fun p -> if p.ParameterType.IsArray then args :> obj else null)
                //printfnLog "Tracing"  "parms = %A" parms
                let _ = asm.EntryPoint.Invoke(null, parms) //|> printfnLog "Tracing"  "res = %A"
                ()
            }
    
    
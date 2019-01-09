#nowarn "1178"
#nowarn "1182"
#nowarn "3180"
////-d:FSharpStation1546539619997 -d:NETSTANDARD2_0
////#cd @"..\projects\Modules\src"
//#I @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm"
//#I @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\netstandard.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\System.Core.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\mscorlib.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\System.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\System.Web.Services.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.IO.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.Collections.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.Globalization.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.Runtime.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\framework\WebAssembly.Bindings.dll"
//#r @"..\..\..\..\Bolero\wasm-sdk\framework\WebAssembly.Net.Http.dll"
//#r @"..\packages\FSharp.Core\lib\netstandard1.6\FSharp.Core.dll"
//#nowarn "1178"
//#nowarn "1182"
//#nowarn "3180"
/// Root namespace for all code
//#define FSharpStation1546539619997
#if INTERACTIVE
module FsRoot   =
#else
namespace FsRoot
#endif

    //#cd "..\projects\Modules\src"
    //#I @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm"
    //#I @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\netstandard.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\System.Core.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\mscorlib.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\System.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\System.Web.Services.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.IO.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.Collections.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.Globalization.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\wasm-bcl\wasm\Facades\System.Runtime.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\framework\WebAssembly.Bindings.dll"
    //#r @"..\..\..\..\Bolero\wasm-sdk\framework\WebAssembly.Net.Http.dll"
    //#r @"..\packages\FSharp.Core\lib\netstandard1.6\FSharp.Core.dll"
        
        // Taken from FSharp.Formatting on Github
        //#define NETSTANDARD2_0
        //#nowarn "1178"
        //#nowarn "1182"
        //#nowarn "3180"
        module MarkdownDef =
            module Log =
        //      open System.Diagnostics
        //      let source = new System.Diagnostics.TraceSource "FSharp.Formatting"
        //    
        //    #if !NETSTANDARD2_0
        //      let ConsoleListener () = new ConsoleTraceListener()
        //      let SvclogListener (file:string) = new XmlWriterTraceListener(file)
        //    #else
        //      let ConsoleListener() = {
        //            new TraceListener() with
        //                override __.WriteLine(s: string) = System.Console.WriteLine(s)
        //                override __.Write(s: string) = System.Console.Write(s) }
        //    #endif
        //      let TextListener (file:string) = new TextWriterTraceListener(file)
        //    
        //      let SetupSource (listeners:_ array) (source:TraceSource) =
        //        source.Listeners.Clear()
        //        source.Switch.Level <- System.Diagnostics.SourceLevels.All
        //        source.Listeners.AddRange listeners
        //    
        //      let SetupListener traceOptions levels (listener:TraceListener) =
        //        listener.Filter <- new EventTypeFilter(levels)
        //        listener.TraceOutputOptions <- traceOptions
        //        listener
        //    
        //      let AddListener listener (source:TraceSource) =
        //        source.Listeners.Add listener |> ignore
        //        
        //      let traceEventf t f =
        //        Printf.kprintf (fun s -> source.TraceEvent(t, 0, s)) f
        //    
        //      let infof f = traceEventf TraceEventType.Information f
              let errorf f = printf f
              let warnf  f = printf f
        //      let critf f = traceEventf TraceEventType.Critical f
        //      let verbf f = traceEventf TraceEventType.Verbose f
            module Common =
            
                type [<Struct>] MarkdownRange = { 
                    StartLine   : int 
                    StartColumn : int
                    EndLine     : int
                    EndColumn   : int 
                }
            
            
                module MarkdownRange =
                    
                    let zero = { StartLine = 0; StartColumn = 0; EndLine = 0; EndColumn = 0 }
            
                    let mergeRanges (ranges:MarkdownRange list) =
                        let startRange = ranges |> List.minBy (fun r -> r.StartLine, r.StartColumn)
                        let endRange = ranges |> List.maxBy (fun r -> r.EndLine, r.EndColumn)
                        {   StartLine   = startRange.StartLine 
                            StartColumn = startRange.StartColumn
                            EndLine     = endRange.EndLine 
                            EndColumn   = endRange.EndColumn 
                        }
            // --------------------------------------------------------------------------------------
            // F# Markdown (Collections.fs)
            // (c) Tomas Petricek, 2012, Available under Apache 2.0 license.
            // --------------------------------------------------------------------------------------
            
            module Collections =
            
                
                // --------------------------------------------------------------------------------------
                // Various helper functions for working with lists 
                // that are useful when writing parsers by hand.
                // --------------------------------------------------------------------------------------
                
                /// [omit]
                module List = 
                  /// Returns a singleton list containing a specified value
                  let singleton v = [v]
                
                  /// Skips the specified number of elements. Fails if the list is smaller.
                  let rec skip count = function
                    | xs when count = 0 -> xs
                    | _::xs when count > 0 -> skip (count - 1) xs
                    | _ -> invalidArg "" "Insufficient length"
                
                  /// Skips elements while the predicate returns 'true' and then 
                  /// returns the rest of the list as a result.
                  let rec skipWhile p = function
                    | hd::tl when p hd -> skipWhile p tl
                    | rest -> rest
                
                  /// Partitions list into an initial sequence (while the 
                  /// specified predicate returns true) and a rest of the list.
                  let partitionWhile p input = 
                    let rec loop acc = function
                      | hd::tl when p hd -> loop (hd::acc) tl
                      | rest -> List.rev acc, rest
                    loop [] input
                
                  /// Partitions list into an initial sequence (while the specified predicate 
                  /// returns true) and a rest of the list. The predicate gets the entire 
                  /// tail of the list and can perform lookahead.
                  let partitionWhileLookahead p input = 
                    let rec loop acc = function
                      | hd::tl when p (hd::tl) -> loop (hd::acc) tl
                      | rest -> List.rev acc, rest
                    loop [] input
                
                  /// Partitions list into an initial sequence (while the 
                  /// specified predicate returns 'false') and a rest of the list.
                  let partitionUntil p input = partitionWhile (p >> not) input
                
                  /// Partitions list into an initial sequence (while the 
                  /// specified predicate returns 'false') and a rest of the list.
                  let partitionUntilLookahead p input = partitionWhileLookahead (p >> not) input
                
                  /// Iterates over the elements of the list and calls the first function for 
                  /// every element. Between each two elements, the second function is called.
                  let rec iterInterleaved f g input =
                    match input with 
                    | x::y::tl -> f x; g (); iterInterleaved f g (y::tl)
                    | x::[] -> f x
                    | [] -> ()
                
                  /// Tests whether a list starts with the elements of another
                  /// list (specified as the first parameter)
                  let inline startsWith start (list:'T list) = 
                    let rec loop start (list:'T list) = 
                      match start, list with
                      | x::xs, y::ys when x = y -> loop xs ys
                      | [], _ -> true
                      | _ -> false
                    loop start list
                
                  /// Partitions the input list into two parts - the break is added 
                  /// at a point where the list starts with the specified sub-list.
                  let partitionUntilEquals endl input = 
                    let rec loop acc = function
                      | input when startsWith endl input -> Some(List.rev acc, input)
                      | x::xs -> loop (x::acc) xs
                      | [] -> None
                    loop [] input    
                
                  /// A function that nests items of the input sequence 
                  /// that do not match a specified predicate under the 
                  /// last item that matches the predicate. 
                  let nestUnderLastMatching f input = 
                    let rec loop input = seq {
                      let normal, other = partitionUntil f input
                      match List.rev normal with
                      | last::prev ->
                          for p in List.rev prev do yield p, []
                          let other, rest = partitionUntil (f >> not) other
                          yield last, other 
                          yield! loop rest
                      | [] when other = [] -> ()
                      | _ -> invalidArg "" "Should start with true" }
                    loop input |> List.ofSeq
                
                
                // --------------------------------------------------------------------------------------
                // Simple tree type and a function for turning list with indentation into a tree
                // --------------------------------------------------------------------------------------
                
                /// Represents a tree with nodes containing values an a list of children
                ///
                /// [omit]
                type Tree<'T> = Node of 'T * list<Tree<'T>>
                
                /// [omit]
                module Tree = 
                  /// Takes all elements at the specified level and turns them into nodes
                  let rec private takeAtLevel indent tail = 
                    match tail with 
                    | (i, value)::tail when i >= indent ->  // >= instead of = to handle odd cases
                      let nested, tail = takeDeeperThan i tail
                      let following, tail = takeAtLevel indent tail
                      Node(value, nested) :: following, tail
                    | tail -> [], tail
                
                  /// Takes elements that are deeper (children) and turns them into nodes
                  and private takeDeeperThan indent tail = 
                    match tail with 
                    | (i, value)::tail when i > indent ->
                      let nested, tail = takeDeeperThan i tail
                      let following, tail = takeAtLevel i tail
                      Node(value, nested) :: following, tail
                    | tail -> [], tail
                
                  /// Turns a list of items with an indentation specified by an integer
                  /// into a tree where indented items are children.
                  let ofIndentedList input =
                    let res, tail = takeAtLevel 0 input
                    if tail <> [] then failwith "Wrong indentation"
                    res
            // --------------------------------------------------------------------------------------
            // F# Markdown (StringParsing.fs)
            // (c) Tomas Petricek, 2012, Available under Apache 2.0 license.
            // --------------------------------------------------------------------------------------
            
            module Patterns =
            
                open System
                open Collections
                open Common
                
                // --------------------------------------------------------------------------------------
                // Active patterns that simplify parsing of strings and lists of strings (lines)
                // --------------------------------------------------------------------------------------
                
                module String =
                  /// Matches when a string is a whitespace or null
                  let (|WhiteSpace|_|) (s) = 
                    if String.IsNullOrWhiteSpace(s) then Some() else None
                
                  /// Returns a string trimmed from both start and end
                  let (|TrimBoth|) (text:string) = text.Trim()
                
                  /// Matches when a string starts with the specified sub-string
                  let (|StartsWith|_|) (start:string) (text:string) = 
                    if text.StartsWith(start) then Some(text.Substring(start.Length)) else None
                
                  /// Matches when a string starts with the specified sub-string
                  /// The matched string is trimmed from all whitespace.
                  let (|StartsWithTrim|_|) (start:string) (text:string) = 
                    if text.StartsWith(start) then Some(text.Substring(start.Length).Trim()) else None
                
                  /// Matches when a string starts with the given value and ends 
                  /// with a given value (and returns the rest of it)
                  let (|StartsAndEndsWith|_|) (starts:string, ends:string) (s:string) =
                    if s.StartsWith(starts) && s.EndsWith(ends) && 
                       s.Length >= starts.Length + ends.Length then 
                      Some(s.Substring(starts.Length, s.Length - starts.Length - ends.Length))
                    else None
                
                  /// Matches when a string starts with the given value and ends 
                  /// with a given value (and returns trimmed body)
                  let (|StartsAndEndsWithTrim|_|) args = function
                    | StartsAndEndsWith args (TrimBoth res) -> Some res
                    | _ -> None
                
                  /// Matches when a string starts with a sub-string wrapped using the 
                  /// opening and closing sub-string specified in the parameter.
                  /// For example "[aa]bc" is wrapped in [ and ] pair. Returns the wrapped
                  /// text together with the rest.
                  let (|StartsWithWrapped|_|) (starts:string, ends:string) (text:string) = 
                    if text.StartsWith(starts) then 
                      let id = text.IndexOf(ends, starts.Length)
                      if id >= 0 then 
                        let wrapped = text.Substring(starts.Length, id - starts.Length)
                        let rest = text.Substring(id + ends.Length, text.Length - id - ends.Length)
                        Some(wrapped, rest)
                      else None
                    else None
                
                  /// Ignores everything until a end-line character is detected, returns the remaining string.
                  let (|SkipSingleLine|) (text:string) =
                    let rec tryEol eolList =
                      match eolList with
                      | h : string :: t ->
                        match text.IndexOf(h) with
                        | i when i < 0 -> tryEol t
                        | i ->
                          text.Substring (i + h.Length)
                      | _ ->
                        text
                    let result = tryEol [ "\r\n"; "\n" ]
                    let skipped = text.Substring(0, text.Length - result.Length)
                    if not <| String.IsNullOrWhiteSpace(skipped) then
                      Log.warnf "skipped '%s' which contains non-whitespace character!" skipped
                    if result = text then
                      Log.warnf "could not skip a line of %s, because no line-ending character was found!" text
                    result
                
                  /// Given a list of lines indented with certan number of whitespace 
                  /// characters (spaces), remove the spaces from the beginning of each line 
                  /// and return the string as a list of lines
                  let removeSpaces lines =
                    let spaces =
                      lines 
                      |> Seq.filter (String.IsNullOrWhiteSpace >> not)
                      |> Seq.map (fun line -> line |> Seq.takeWhile Char.IsWhiteSpace |> Seq.length)
                      |> fun xs -> if Seq.isEmpty xs then 0 else Seq.min xs
                    lines 
                    |> Seq.map (fun line -> 
                        if String.IsNullOrWhiteSpace(line) then ""
                        else line.Substring(spaces))
                
                module StringPosition =
                  /// Matches when a string is a whitespace or null
                  let (|WhiteSpace|_|) (s, n: MarkdownRange) = 
                    if String.IsNullOrWhiteSpace(s) then Some() else None
                
                  /// Matches when a string does starts with non-whitespace
                  let (|Unindented|_|) (s:string, n:MarkdownRange) = 
                    if not (String.IsNullOrWhiteSpace(s)) && s.TrimStart() = s then Some() else None
                      
                  /// Returns a string trimmed from both start and end
                  let (|TrimBoth|) (text:string, n:MarkdownRange) = 
                    let trimmedStart = text.TrimStart()
                    let trimmed = trimmedStart.TrimEnd()
                    (trimmed, { n with StartColumn = n.StartColumn + text.Length - trimmedStart.Length; EndColumn = n.EndColumn - trimmedStart.Length + trimmed.Length })
                  /// Returns a string trimmed from the end
                  let (|TrimEnd|) (text:string, n:MarkdownRange) = 
                    let trimmed = text.TrimEnd()
                    (trimmed, { n with EndColumn = n.EndColumn - text.Length + trimmed.Length })
                  /// Returns a string trimmed from the start
                  let (|TrimStart|) (text:string, n:MarkdownRange) = 
                    let trimmed = text.TrimStart()
                    (trimmed, { n with StartColumn = n.StartColumn + text.Length - trimmed.Length })
                
                  /// Returns a string trimmed from the end using characters given as a parameter
                  let (|TrimEndUsing|) chars (text:string, n:MarkdownRange) = 
                    let trimmed = text.TrimEnd(Array.ofSeq chars)
                    (trimmed, { n with EndColumn = n.EndColumn - text.Length + trimmed.Length })
                
                  /// Returns a string trimmed from the start together with 
                  /// the number of skipped whitespace characters
                  let (|TrimStartAndCount|) (text:string, n:MarkdownRange) = 
                    let trimmed = text.TrimStart([|' '; '\t'|])
                    let len = text.Length - trimmed.Length
                    len, text.Substring(0, len).Replace("\t", "    ").Length, (trimmed, { n with StartColumn = n.StartColumn + text.Length - trimmed.Length })
                
                  /// Matches when a string starts with any of the specified sub-strings
                  let (|StartsWithAny|_|) (starts:seq<string>) (text:string, n:MarkdownRange) = 
                    if starts |> Seq.exists (text.StartsWith) then Some() else None
                
                  /// Matches when a string starts with the specified sub-string
                  let (|StartsWith|_|) (start:string) (text:string, n:MarkdownRange) = 
                    if text.StartsWith(start) then Some(text.Substring(start.Length), { n with StartColumn = n.StartColumn + text.Length - start.Length }) else None
                  
                  /// Matches when a string starts with the specified sub-string
                  /// The matched string is trimmed from all whitespace.
                  let (|StartsWithTrim|_|) (start:string) (text:string, n:MarkdownRange) = 
                    if text.StartsWith(start) then Some(text.Substring(start.Length).Trim(), { n with StartColumn = n.StartColumn + text.Length - start.Length }) else None
                
                  /// Matches when a string starts with the specified sub-string (ignoring whitespace at the start)
                  /// The matched string is trimmed from all whitespace.
                  let (|StartsWithNTimesTrimIgnoreStartWhitespace|_|) (start:string) (text:string, n:MarkdownRange) =
                    if text.Contains(start) then
                      let beforeStart = text.Substring(0, text.IndexOf(start))
                      if String.IsNullOrWhiteSpace (beforeStart) then
                        let startAndRest = text.Substring(beforeStart.Length)
                        let startNum =
                          Seq.windowed start.Length startAndRest
                          |> Seq.map (fun chars -> System.String(chars))
                          |> Seq.takeWhile ((=) start)
                          |> Seq.length
                        Some(startNum, beforeStart.Length, text.Substring(beforeStart.Length + (start.Length * startNum)).Trim())
                      else None
                    else None
                
                  /// Matches when a string starts with the given value and ends 
                  /// with a given value (and returns the rest of it)
                  let (|StartsAndEndsWith|_|) (starts:string, ends:string) (s:string, n:MarkdownRange) =
                    if s.StartsWith(starts) && s.EndsWith(ends) && 
                       s.Length >= starts.Length + ends.Length then 
                      Some(s.Substring(starts.Length, s.Length - starts.Length - ends.Length), { n with StartColumn = n.StartColumn + s.Length - starts.Length; EndColumn = n.EndColumn - s.Length + ends.Length })
                    else None
                
                  /// Matches when a string starts with the given value and ends 
                  /// with a given value (and returns trimmed body)
                  let (|StartsAndEndsWithTrim|_|) args = function
                    | StartsAndEndsWith args (TrimBoth res) -> Some res
                    | _ -> None
                
                  /// Matches when a string starts with a non-zero number of complete
                  /// repetitions of the specified parameter (and returns the number
                  /// of repetitions, together with the rest of the string)
                  ///
                  ///    let (StartsWithRepeated "/\" (2, " abc")) = "/\/\ abc"
                  ///
                  let (|StartsWithRepeated|_|) (repeated:string) (text:string, ln:MarkdownRange) = 
                    let rec loop i = 
                      if i = text.Length then i
                      elif text.[i] <> repeated.[i % repeated.Length] then i
                      else loop (i + 1)
                
                    let n = loop 0 
                    if n = 0 || n % repeated.Length <> 0 then None
                    else Some(n/repeated.Length, (text.Substring(n, text.Length - n), { ln with StartColumn = n })) 
                
                  /// Matches when a string starts with a sub-string wrapped using the 
                  /// opening and closing sub-string specified in the parameter.
                  /// For example "[aa]bc" is wrapped in [ and ] pair. Returns the wrapped
                  /// text together with the rest.
                  let (|StartsWithWrapped|_|) (starts:string, ends:string) (text:string, n:MarkdownRange) = 
                    if text.StartsWith(starts) then 
                      let id = text.IndexOf(ends, starts.Length)
                      if id >= 0 then 
                        let wrapped = text.Substring(starts.Length, id - starts.Length)
                        let rest = text.Substring(id + ends.Length, text.Length - id - ends.Length)
                        Some(wrapped, (rest, { n with StartColumn = id + ends.Length }))
                      else None
                    else None
                
                  /// Matches when a string consists of some number of 
                  /// complete repetitions of a specified sub-string.
                  let (|EqualsRepeated|_|) (repeated, n:MarkdownRange) = function
                    | StartsWithRepeated repeated (n, ("", _)) -> Some()
                    | _ -> None 
                
                module List =
                  /// Matches a list if it starts with a sub-list that is delimited
                  /// using the specified delimiters. Returns a wrapped list and the rest.
                  let inline (|DelimitedWith|_|) startl endl input = 
                    if List.startsWith startl input then
                      match List.partitionUntilEquals endl (List.skip startl.Length input) with 
                      | Some(pre, post) -> Some(pre, List.skip endl.Length post, startl.Length, endl.Length)
                      | None -> None
                    else None
                
                  /// Matches a list if it starts with a sub-list. Returns the list.
                  let inline (|StartsWith|_|) startl input = 
                    if List.startsWith startl input then Some input else None
                
                  /// Matches a list if it starts with a sub-list that is delimited
                  /// using the specified delimiter. Returns a wrapped list and the rest.
                  let inline (|Delimited|_|) str = (|DelimitedWith|_|) str str
                
                  let inline (|DelimitedNTimes|_|) str input =
                    let strs, items = List.partitionWhile (fun i -> i = str) input
                    match strs with
                    | h :: _ ->
                      (|Delimited|_|) (List.init strs.Length (fun _ -> str)) input
                    | _ -> None
                
                  /// Matches a list if it starts with a bracketed list. Nested brackets
                  /// are skipped (by counting opening and closing brackets) and can be 
                  /// escaped using the '\' symbol.
                  let (|BracketDelimited|_|) startc endc input =
                    let rec loop acc count = function
                      | '\\'::x::xs when x = endc -> loop (x::acc) count xs
                      | x::xs when x = endc && count = 0 -> Some(List.rev acc, xs)
                      | x::xs when x = endc -> loop (x::acc) (count - 1) xs
                      | x::xs when x = startc -> loop (x::acc) (count + 1) xs
                      | x::xs -> loop (x::acc) count xs
                      | [] -> None
                    match input with
                    | x::xs when x = startc -> loop [] 0 xs
                    | _ -> None
                
                  /// Returns a list of characters as a string.
                  let (|AsString|) chars = String(Array.ofList chars)
                
                module Lines = 
                  /// Removes blank lines from the start and the end of a list
                  let (|TrimBlank|) lines = 
                    lines
                    |> List.skipWhile (fun (s, n) -> String.IsNullOrWhiteSpace s) |> List.rev
                    |> List.skipWhile (fun (s, n) -> String.IsNullOrWhiteSpace s) |> List.rev
                
                  /// Matches when there are some lines at the beginning that are 
                  /// either empty (or whitespace) or start with the specified string.
                  /// Returns all such lines from the beginning until a different line.
                  let (|TakeStartingWithOrBlank|_|) (start:string) input = 
                    match List.partitionWhile (fun s -> 
                            String.IsNullOrWhiteSpace s || s.StartsWith(start)) input with
                    | matching, rest when matching <> [] -> Some(matching, rest)
                    | _ -> None
                
                  /// Matches when there are some lines at the beginning that are
                  /// either empty (or whitespace) or start with at least 4 spaces (a tab counts as 4 spaces here).
                  /// Returns all such lines from the beginning until a different line and
                  /// the number of spaces the first line started with.
                  let (|TakeCodeBlock|_|) (input:(string * MarkdownRange) list) =
                    let spaceNum = 4
                      //match input with
                      //| h :: _ ->
                      //  let head = (input |> List.head).Replace("\t", "    ") |> Seq.toList
                      //  let spaces, _ = List.partitionWhile (fun s -> s = ' ') head
                      //  spaces.Length
                      //| _ -> 0
                    let startsWithSpaces (s:string) =
                      let normalized = s.Replace("\t", "    ")
                      normalized.Length >= spaceNum &&
                        normalized.Substring(0, spaceNum) = System.String(' ', spaceNum)
                    match List.partitionWhile (fun (s, n) ->
                            String.IsNullOrWhiteSpace s || startsWithSpaces s) input with
                    | matching, rest when matching <> [] && spaceNum >= 4 ->
                      Some(spaceNum, matching, rest)
                    | _ -> None
                
                  /// Removes whitespace lines from the beginning of the list
                  let (|TrimBlankStart|) = List.skipWhile (fun (s:string, n:MarkdownRange) -> String.IsNullOrWhiteSpace s)
                
                  /// Trims all lines of the current paragraph
                  let (|TrimParagraphLines|) lines =
                    lines
                    // first remove all whitespace on the beginning of the line
                    |> List.map StringPosition.(|TrimStart|)
                    // Now remove all additional spaces at the end, but keep two spaces if existent
                    |> List.map (fun (s, n) ->
                      let endsWithTwoSpaces = s.EndsWith("  ")
                      let trimmed = s.TrimEnd([|' '|]) + if endsWithTwoSpaces then "  " else ""
                      (trimmed, { n with EndColumn = n.EndColumn - s.Length + trimmed.Length }))
                
                /// Parameterized pattern that assigns the specified value to the 
                /// first component of a tuple. Usage:
                ///
                ///    match str with
                ///    | Let 1 (n, "one") | Let 2 (n, "two") -> n
                /// 
                let (|Let|) a b = (a, b)
                
                open System.Collections.Generic
                
                /// Utility for parsing commands. Commands can be used in different places. We 
                /// recognize `key1=value, key2=value` and also `key1:value, key2:value`
                /// The key of the command should be identifier with just 
                /// characters in it - otherwise, the parsing fails.
                let (|ParseCommands|_|) (str:string) = 
                  let kvs = 
                    [ for cmd in str.Split(',') do
                        let kv = cmd.Split([| '='; ':' |])
                        if kv.Length = 2 then yield kv.[0].Trim(), kv.[1].Trim()
                        elif kv.Length = 1 then yield kv.[0].Trim(), "" ] 
                  let allKeysValid = 
                    kvs |> Seq.forall (fst >> Seq.forall (fun c -> Char.IsLetter c || c = '_' || c = '-'))
                  if allKeysValid && kvs <> [] then Some(dict kvs) else None
                
                /// Utility for parsing commands - this deals with a single command.
                /// The key of the command should be identifier with just 
                /// characters in it - otherwise, the parsing fails.
                let (|ParseCommand|_|) (cmd:string) = 
                  let kv = cmd.Split([| '='; ':' |])
                  if kv.Length >= 1 && not (Seq.forall Char.IsLetter kv.[0]) then None
                  elif kv.Length = 2 then Some(kv.[0].Trim(), kv.[1].Trim())
                  elif kv.Length = 1 then Some(kv.[0].Trim(), "")
                  else None
                  
                /// Lookup in a dictionary
                let (|Command|_|) k (d:IDictionary<_, _>) =
                  match d.TryGetValue(k) with
                  | true, v -> Some v
                  | _ -> None 
            // --------------------------------------------------------------------------------------
            // F# Markdown (Markdown.fs)
            // (c) Tomas Petricek, 2012, Available under Apache 2.0 license.
            // --------------------------------------------------------------------------------------
            module Markdown =
            
                open System
                open System.IO
                open System.Collections.Generic
                open Common
                
                // --------------------------------------------------------------------------------------
                // Definition of the Markdown format
                // --------------------------------------------------------------------------------------
                
                /// A list kind can be `Ordered` or `Unordered` corresponding to `<ol>` and `<ul>` elements
                type MarkdownListKind = 
                  | Ordered 
                  | Unordered
                
                /// Column in a table can be aligned to left, right, center or using the default alignment
                type MarkdownColumnAlignment =
                  | AlignLeft
                  | AlignRight
                  | AlignCenter
                  | AlignDefault
                
                /// Represents inline formatting inside a paragraph. This can be literal (with text), various
                /// formattings (string, emphasis, etc.), hyperlinks, images, inline maths etc.
                type MarkdownSpan =
                  | Literal of text:string * range:MarkdownRange option
                  | InlineCode of code:string * range:MarkdownRange option
                  | Strong of body:MarkdownSpans * range:MarkdownRange option
                  | Emphasis of body:MarkdownSpans * range:MarkdownRange option
                  | AnchorLink of link:string * range:MarkdownRange option
                  | DirectLink of body:MarkdownSpans * link:string * title:option<string> * range:MarkdownRange option
                  | IndirectLink of body:MarkdownSpans * original:string * key:string * range:MarkdownRange option
                  | DirectImage of body:string * link:string * title:option<string> * range:MarkdownRange option
                  | IndirectImage of body:string * link:string * key:string * range:MarkdownRange option
                  | HardLineBreak of range:MarkdownRange option
                  | LatexInlineMath of code:string * range:MarkdownRange option
                  | LatexDisplayMath of code:string * range:MarkdownRange option
                  | EmbedSpans of customSpans:MarkdownEmbedSpans * range:MarkdownRange option
                
                /// A type alias for a list of `MarkdownSpan` values
                and MarkdownSpans = list<MarkdownSpan>
                
                /// Provides an extensibility point for adding custom kinds of spans into a document
                /// (`MarkdownEmbedSpans` values can be embedded using `MarkdownSpan.EmbedSpans`)
                and MarkdownEmbedSpans =
                  abstract Render : unit -> MarkdownSpans
                
                /// A paragraph represents a (possibly) multi-line element of a Markdown document.
                /// Paragraphs are headings, inline paragraphs, code blocks, lists, quotations, tables and
                /// also embedded LaTeX blocks.
                type MarkdownParagraph = 
                  | Heading of size:int * body:MarkdownSpans * range:MarkdownRange option
                  | Paragraph of body:MarkdownSpans * range:MarkdownRange option
                  | CodeBlock of code:string * language:string * ignoredLine:string * range:MarkdownRange option
                  | InlineBlock of code:string * range:MarkdownRange option
                  | ListBlock of kind:MarkdownListKind * items:list<MarkdownParagraphs> * range:MarkdownRange option
                  | QuotedBlock of paragraphs:MarkdownParagraphs * range:MarkdownRange option
                  | Span of body:MarkdownSpans * range:MarkdownRange option
                  | LatexBlock of body:list<string> * range:MarkdownRange option
                  | HorizontalRule of character:char * range:MarkdownRange option
                  | TableBlock of headers:option<MarkdownTableRow> * alignments:list<MarkdownColumnAlignment> * rows:list<MarkdownTableRow> * range:MarkdownRange option
                  | EmbedParagraphs of customParagraphs:MarkdownEmbedParagraphs * range:MarkdownRange option
                
                /// A type alias for a list of paragraphs
                and MarkdownParagraphs = list<MarkdownParagraph>
                
                /// A type alias representing table row as a list of paragraphs
                and MarkdownTableRow = list<MarkdownParagraphs>
                
                /// Provides an extensibility point for adding custom kinds of paragraphs into a document
                /// (`MarkdownEmbedParagraphs` values can be embedded using `MarkdownParagraph.EmbedParagraphs`)
                and MarkdownEmbedParagraphs =
                  abstract Render : unit -> MarkdownParagraphs
                
                // --------------------------------------------------------------------------------------
                // Patterns that make recursive Markdown processing easier
                // --------------------------------------------------------------------------------------
                
                /// This module provides an easy way of processing Markdown documents.
                /// It lets you decompose documents into leafs and nodes with nested paragraphs.
                module Matching =
                  type SpanLeafInfo = private SL of MarkdownSpan
                  type SpanNodeInfo = private SN of MarkdownSpan
                   
                  let (|SpanLeaf|SpanNode|) span = 
                    match span with
                    | Literal _ 
                    | AnchorLink _
                    | InlineCode _
                    | DirectImage _ 
                    | IndirectImage _
                    | LatexInlineMath _
                    | LatexDisplayMath _
                    | EmbedSpans _
                    | HardLineBreak _ -> 
                        SpanLeaf(SL span)
                    | Strong(spans, _)
                    | Emphasis(spans , _)
                    | DirectLink(spans, _, _, _)
                    | IndirectLink(spans, _, _, _) -> 
                        SpanNode(SN span, spans)
                
                  let SpanLeaf (SL(span)) = span
                  let SpanNode (SN(span), spans) =
                    match span with
                    | Strong(_, r) -> Strong(spans , r)
                    | Emphasis(_, r) -> Emphasis(spans, r)
                    | DirectLink(_, l, t, r) -> DirectLink(spans, l, t, r)
                    | IndirectLink(_, a, b, r) -> IndirectLink(spans, a, b, r) 
                    | _ -> invalidArg "" "Incorrect SpanNodeInfo"
                
                  type ParagraphSpansInfo = private PS of MarkdownParagraph
                  type ParagraphLeafInfo = private PL of MarkdownParagraph
                  type ParagraphNestedInfo = private PN of MarkdownParagraph
                
                  let (|ParagraphLeaf|ParagraphNested|ParagraphSpans|) par =
                    match par with  
                    | Heading(_, spans, _)
                    | Paragraph(spans, _)
                    | Span(spans, _) ->
                        ParagraphSpans(PS par, spans)
                    | CodeBlock _
                    | InlineBlock _ 
                    | EmbedParagraphs _
                    | LatexBlock _
                    | HorizontalRule _ ->
                        ParagraphLeaf(PL par)
                    | ListBlock(_, pars, _) ->
                        ParagraphNested(PN par, pars)
                    | QuotedBlock(nested, _) ->
                        ParagraphNested(PN par, [nested])
                    | TableBlock(headers, alignments, rows, _) ->
                      match headers with
                      | None -> ParagraphNested(PN par, rows |> List.concat)
                      | Some columns -> ParagraphNested(PN par, columns::rows |> List.concat)
                
                  let ParagraphSpans (PS(par), spans) = 
                    match par with 
                    | Heading(a, _, r) -> Heading(a, spans, r)
                    | Paragraph(_, r) -> Paragraph(spans, r)
                    | Span(_, r) -> Span(spans, r)
                    | _ -> invalidArg "" "Incorrect ParagraphSpansInfo."
                
                  let ParagraphLeaf (PL(par)) = par
                
                  let ParagraphNested (PN(par), pars) =
                    let splitEach n list =
                      let rec loop n left ansList curList items =
                        if List.isEmpty items && List.isEmpty curList then List.rev ansList
                        elif left = 0 || List.isEmpty items then loop n n ((List.rev curList) :: ansList) [] items
                        else loop n (left - 1) ansList ((List.head items) :: curList) (List.tail items)
                      loop n n [] [] list
                
                    match par with 
                    | ListBlock(a, _, r) -> ListBlock(a, pars, r)
                    | QuotedBlock(_, r) -> QuotedBlock(List.concat pars, r)
                    | TableBlock(headers, alignments, _, r) ->
                        let rows = splitEach (alignments.Length) pars
                        if List.isEmpty rows || headers.IsNone then TableBlock(None, alignments, rows, r)
                        else TableBlock(Some(List.head rows), alignments, List.tail rows, r)
                    | _ -> invalidArg "" "Incorrect ParagraphNestedInfo."
            // --------------------------------------------------------------------------------------
            // F# Markdown (MarkdownParser.fs)
            // (c) Tomas Petricek, 2012, Available under Apache 2.0 license.
            // --------------------------------------------------------------------------------------
            //#r @"..\packages\WebSharper.FSharp\tools\net461\FSharp.Compiler.Service.dll"
            
            module internal Parser =
            
                open System
                open System.Collections.Generic
                open System.Text.RegularExpressions
                
                open Patterns
                open Collections
                open Common
                open Markdown
                
                // --------------------------------------------------------------------------------------
                // Parsing of Markdown - first part handles inline formatting
                // --------------------------------------------------------------------------------------
                
                /// Splits a link formatted as `http://link "title"` into a link part
                /// and an optional title part (may be wrapped using quote or double-quotes)
                let getLinkAndTitle (StringPosition.TrimBoth(input, n)) =
                  let url, title =
                    if input.Length = 0 then "", None else
                    let c = input.[input.Length - 1]
                    if c = '\'' || c = '"' then
                      let start = input.IndexOf(c)
                      input.Substring(0, start).Trim(), Some(input.Substring(start + 1, input.Length - 2 - start).Trim())
                    else input, None
                  url.TrimStart('<').TrimEnd('>'), title
                
                /// Succeeds when the specified character list starts with an escaped
                /// character - in that case, returns the character and the tail of the list
                let inline (|EscapedChar|_|) input =
                  match input with
                  | '\\'::( ( '*' | '\\' | '`' | '_' | '{' | '}' | '[' | ']'
                            | '(' | ')' | '>' | '#' | '.' | '!' | '+' | '-' | '$') as c) ::rest -> Some(c, rest)
                  | _ -> None
                
                /// Escape dollar inside a LaTex inline math span.
                let inline (|EscapedLatexInlineMathChar|_|) input =
                  match input with
                  | '\\'::( ('$') as c) :: rest -> Some(c, rest)
                  | _ -> None
                
                /// Matches a list if it starts with a sub-list that is delimited
                /// using the specified delimiters. Returns a wrapped list and the rest.
                ///
                /// This is similar to `List.Delimited`, but it skips over escaped characters.
                let (|DelimitedMarkdown|_|) bracket input =
                  let startl, endl = bracket, bracket
                  // Like List.partitionUntilEquals, but skip over escaped characters
                  let rec loop acc = function
                    | EscapedChar(x, xs) -> loop (x::'\\'::acc) xs
                    | input when List.startsWith endl input -> Some(List.rev acc, input)
                    | x::xs -> loop (x::acc) xs
                    | [] -> None
                  // If it starts with 'startl', let's search for 'endl'
                  if List.startsWith bracket input then
                    match loop [] (List.skip bracket.Length input) with
                    | Some(pre, post) -> Some(pre, List.skip bracket.Length post)
                    | None -> None
                  else None
                
                
                /// This is similar to `List.Delimited`, but it skips over Latex inline math characters.
                let (|DelimitedLatexDisplayMath|_|) bracket input =
                  let startl, endl = bracket, bracket
                  // Like List.partitionUntilEquals, but skip over escaped characters
                  let rec loop acc = function
                    | EscapedLatexInlineMathChar(x, xs) -> loop (x::'\\'::acc) xs
                    | input when List.startsWith endl input -> Some(List.rev acc, input)
                    | x::xs -> loop (x::acc) xs
                    | [] -> None
                  // If it starts with 'startl', let's search for 'endl'
                  if List.startsWith bracket input then
                    match loop [] (List.skip bracket.Length input) with
                    | Some(pre, post) -> Some(pre, List.skip bracket.Length post)
                    | None -> None
                  else None
                
                /// This is similar to `List.Delimited`, but it skips over Latex inline math characters.
                let (|DelimitedLatexInlineMath|_|) bracket input =
                  let startl, endl = bracket, bracket
                  // Like List.partitionUntilEquals, but skip over escaped characters
                  let rec loop acc = function
                    | EscapedLatexInlineMathChar(x, xs) -> loop (x::'\\'::acc) xs
                    | input when List.startsWith endl input -> Some(List.rev acc, input)
                    | x::xs -> loop (x::acc) xs
                    | [] -> None
                  // If it starts with 'startl', let's search for 'endl'
                  if List.startsWith bracket input then
                    match loop [] (List.skip bracket.Length input) with
                    | Some(pre, post) -> Some(pre, List.skip bracket.Length post)
                    | None -> None
                  else None
                
                /// Recognizes an indirect link written using `[body][key]` or just `[key]`
                /// The key can be preceeded by a space or other single whitespace thing.
                let (|IndirectLink|_|) = function
                  | List.BracketDelimited '[' ']' (body, '\r'::'\n'::(List.BracketDelimited '[' ']' (List.AsString link, rest))) ->
                      Some(body, link, "\r\n[" + link + "]", rest)
                  | List.BracketDelimited '[' ']' (body, ((' ' | '\n') as c)::(List.BracketDelimited '[' ']' (List.AsString link, rest))) ->
                      Some(body, link, c.ToString() + "[" + link + "]", rest)
                  | List.BracketDelimited '[' ']' (body, List.BracketDelimited '[' ']' (List.AsString link, rest)) ->
                      Some(body, link, "[" + link + "]", rest)
                  | List.BracketDelimited '[' ']' (body, rest) ->
                      Some(body, "", "", rest)
                  | _ -> None
                
                /// Recognize a direct link written using `[body](http://url "with title")`
                let (|DirectLink|_|) = function
                  | List.BracketDelimited '[' ']' (body, List.BracketDelimited '(' ')' (link, rest)) ->
                      Some(body, link, rest)
                  | _ -> None
                
                /// Recognizes an automatic link written using `http://url` or `https://url`
                let (|AutoLink|_|) input =
                  let linkFor (scheme:string) =
                    let prefix = scheme.ToCharArray() |> Array.toList
                    match input with
                    | List.DelimitedWith prefix [' '] (List.AsString link, rest, s, e) ->
                        Some(scheme + link, ' '::rest)
                    | List.StartsWith prefix (List.AsString link) ->
                        Some(link, [])
                    | _ -> None
                
                  ["http://";"https://"]
                  |> Seq.tryPick linkFor
                
                /// Recognizes some form of emphasis using `**bold**` or `*italic*`
                /// (both can be also marked using underscore).
                /// TODO: This does not handle nested emphasis well.
                let (|Emphasised|_|) = function
                  | (('_' | '*') :: tail) as input ->
                    match input with
                    | DelimitedMarkdown ['_'; '_'; '_'] (body, rest)
                    | DelimitedMarkdown ['*'; '*'; '*'] (body, rest) ->
                        Some(body, Emphasis >> List.singleton >> (fun s -> Strong(s, None)), rest)
                    | DelimitedMarkdown ['_'; '_'] (body, rest)
                    | DelimitedMarkdown ['*'; '*'] (body, rest) ->
                        Some(body, Strong, rest)
                    | DelimitedMarkdown ['_'] (body, rest)
                    | DelimitedMarkdown ['*'] (body, rest) ->
                        Some(body, Emphasis, rest)
                    | _ -> None
                  | _ -> None
                
                let (|HtmlEntity|_|) input =
                  match input with
                  | '&' :: _ ->
                      // regex from reference implementation: https://github.com/commonmark/commonmark.js/blob/da1db1e/lib/common.js#L10
                      let re =
                        "^&"                     // beginning expect '&'
                        + "(?:"                  // start non-capturing group
                        + "#x[a-f0-9]{1,8}"      // hex
                        + "|#[0-9]{1,8}"         // or decimal
                        + "|[a-z][a-z0-9]{1,31}" // or name
                        + ")"                    // end non-capturing group
                        + ";"                    // expect ';'
                      let match' = Regex.Match(Array.ofList input |> String, re)
                      if match'.Success then
                        let entity = match'.Value
                        let _, rest = List.splitAt entity.Length input
                        Some (entity, rest)
                      else None
                  | _ -> None
                
                
                /// Defines a context for the main `parseParagraphs` function
                type ParsingContext =
                  { Links : Dictionary<string, string * option<string>>
                    Newline : string
                    CurrentRange : MarkdownRange option }
                
                /// Parses a body of a paragraph and recognizes all inline tags.
                let rec parseChars acc input (ctx:ParsingContext) = seq {
                
                  // Zero or one literals, depending whether there is some accumulated input and update the ctx
                  let accLiterals = Lazy<_>.Create (fun () ->
                    if List.isEmpty acc then ([], ctx)
                    else
                      let range = match ctx.CurrentRange with 
                                  | Some(n) -> Some({ n with EndColumn = n.StartColumn + acc.Length }) 
                                  | None -> None
                      let ctx = { ctx with CurrentRange = match ctx.CurrentRange with 
                                                          | Some(n) -> Some({ n with StartColumn = n.StartColumn + acc.Length }) 
                                                          | None -> None }
                      let text = String(List.rev acc |> Array.ofList)
                      ([Literal(text, range)], ctx) )
                
                  match input with
                  // Recognizes explicit line-break at the end of line
                  | ' '::' '::'\r'::'\n'::rest
                  | ' '::' '::('\n' | '\r')::rest ->
                      let (value, ctx) = accLiterals.Value
                      yield! value
                      yield HardLineBreak(ctx.CurrentRange)
                      yield! parseChars [] rest ctx
                
                  | HtmlEntity(entity, rest) ->
                      let (value, ctx) = accLiterals.Value
                      yield! value
                      yield Literal (entity, ctx.CurrentRange)
                      yield! parseChars [] rest ctx
                
                  | '&'::rest ->
                      yield! parseChars (';'::'p'::'m'::'a'::'&'::acc) rest ctx
                
                  // Ignore escaped characters that might mean something else
                  | EscapedChar(c, rest) ->
                      yield! parseChars (c::acc) rest ctx
                
                  // Inline code delimited either using double `` or single `
                  // (if there are spaces around, then body can contain more backticks)
                  | List.DelimitedWith ['`'; ' '] [' '; '`'] (body, rest, s, e)
                  | List.DelimitedNTimes '`' (body, rest, s, e) ->
                      let (value, ctx) = accLiterals.Value
                      yield! value
                      let rng = 
                        match ctx.CurrentRange with 
                        | Some(n) -> Some { n with StartColumn = n.StartColumn + s; EndColumn = n.EndColumn - e } 
                        | None -> None
                      yield InlineCode(String(Array.ofList body).Trim(), rng)
                      yield! parseChars [] rest ctx
                
                  // Display Latex inline math mode
                  | DelimitedLatexDisplayMath ['$';'$'] (body, rest) ->
                    let (value, ctx) = accLiterals.Value
                    yield! value
                    yield LatexDisplayMath(String(Array.ofList body).Trim(), ctx.CurrentRange)
                    yield! parseChars [] rest ctx
                
                  // Inline Latex inline math mode
                  | DelimitedLatexInlineMath ['$'] (body, rest) ->
                    let (value, ctx) = accLiterals.Value
                    let ctx = { ctx with CurrentRange = match ctx.CurrentRange with | Some(n) -> Some({ n with StartColumn = n.StartColumn + 1 }) | None -> None }
                    yield! value
                    let code = String(Array.ofList body).Trim()
                    yield LatexInlineMath(code, match ctx.CurrentRange with | Some(n) -> Some({ n with EndColumn = n.StartColumn + code.Length }) | None -> None)
                    yield! parseChars [] rest ctx
                
                  // Inline link wrapped as <http://foo.bar>
                  | List.DelimitedWith ['<'] ['>'] (List.AsString link, rest, s, e)
                        when Seq.forall (Char.IsWhiteSpace >> not) link && (link.Contains("@") || link.Contains("://")) ->
                      let (value, ctx) = accLiterals.Value
                      yield! value
                      yield DirectLink([Literal(link, ctx.CurrentRange)], link, None, ctx.CurrentRange)
                      yield! parseChars [] rest ctx
                  // Not an inline link - leave as an inline HTML tag
                  | List.DelimitedWith ['<'] ['>'] (tag, rest, s, e) ->
                      yield! parseChars ('>'::(List.rev tag) @ '<' :: acc) rest ctx
                
                  // Recognize direct link [foo](http://bar) or indirect link [foo][bar] or auto link http://bar
                  | DirectLink (body, link, rest) ->
                      let (value, ctx) = accLiterals.Value
                      yield! value
                      let link, title = getLinkAndTitle (String(Array.ofList link), MarkdownRange.zero)
                      yield DirectLink(parseChars [] body ctx |> List.ofSeq, link, title, ctx.CurrentRange)
                      yield! parseChars [] rest ctx
                  | IndirectLink(body, link, original, rest) ->
                      let (value, ctx) = accLiterals.Value
                      yield! value
                      let key = if String.IsNullOrEmpty(link) then String(body |> Array.ofSeq) else link
                      yield IndirectLink(parseChars [] body ctx |> List.ofSeq, original, key, ctx.CurrentRange)
                      yield! parseChars [] rest ctx
                  | AutoLink (link, rest) ->
                      let (value, ctx) = accLiterals.Value
                      yield! value
                      yield DirectLink([Literal(link, ctx.CurrentRange)], link, None, ctx.CurrentRange)
                      yield! parseChars [] rest ctx
                
                  // Recognize image - this is a link prefixed with the '!' symbol
                  | '!'::DirectLink (body, link, rest) ->
                      let (value, ctx) = accLiterals.Value
                      yield! value
                      let link, title = getLinkAndTitle (String(Array.ofList link), MarkdownRange.zero)
                      yield DirectImage(String(Array.ofList body), link, title, ctx.CurrentRange)
                      yield! parseChars [] rest ctx
                  | '!'::IndirectLink(body, link, original, rest) ->
                      let (value, ctx) = accLiterals.Value
                      yield! value
                      let key = if String.IsNullOrEmpty(link) then String(body |> Array.ofSeq) else link
                      yield IndirectImage(String(Array.ofList body), original, key, ctx.CurrentRange)
                      yield! parseChars [] rest ctx
                
                  // Handle emphasised text
                  | Emphasised (body, f, rest) ->
                      let (value, ctx) = accLiterals.Value
                      yield! value
                      let body = parseChars [] body ctx |> List.ofSeq
                      yield f(body, ctx.CurrentRange)
                      yield! parseChars [] rest ctx
                  // Encode '<' char if it is not link or inline HTML
                  | '<'::rest ->
                      yield! parseChars (';'::'t'::'l'::'&'::acc) rest ctx
                  | '>'::rest ->
                      yield! parseChars (';'::'t'::'g'::'&'::acc) rest ctx
                  | x::xs ->
                      yield! parseChars (x::acc) xs ctx
                  | [] ->
                      let (value, ctx) = accLiterals.Value
                      yield! value }
                
                /// Parse body of a paragraph into a list of Markdown inline spans
                let parseSpans (StringPosition.TrimBoth(s, n)) ctx =
                  let ctx = { ctx with CurrentRange = Some(n) }
                  parseChars [] (s.ToCharArray() |> List.ofArray) ctx |> List.ofSeq
                
                let rec trimSpaces numSpaces (s:string) =
                  if numSpaces <= 0 then s
                  elif s.StartsWith(" ") then trimSpaces (numSpaces - 1) (s.Substring(1))
                  elif s.StartsWith("\t") then trimSpaces (numSpaces - 4) (s.Substring(1))
                  else s
                
                // --------------------------------------------------------------------------------------
                // Parsing of Markdown - second part handles paragraph-level formatting (headings, etc.)
                // --------------------------------------------------------------------------------------
                
                /// Recognizes heading, either prefixed with #s or followed by === or --- line
                let (|Heading|_|) = function
                  | (StringPosition.TrimBoth header) :: (StringPosition.TrimEnd (StringPosition.EqualsRepeated("=", MarkdownRange.zero))) :: rest ->
                      Some(1, header, rest)
                  | (StringPosition.TrimBoth header) :: (StringPosition.TrimEnd (StringPosition.EqualsRepeated("-", MarkdownRange.zero))) :: rest ->
                      Some(2, header, rest)
                  | StringPosition.StartsWithRepeated "#" (n, StringPosition.TrimBoth(header, ln)) :: rest ->
                      let header =
                        // Drop "##" at the end, but only when it is preceded by some whitespace
                        // (For example "## Hello F#" should be "Hello F#")
                        if header.EndsWith "#" then
                          let noHash = header.TrimEnd [| '#' |]
                          if noHash.Length > 0 && Char.IsWhiteSpace(noHash.Chars(noHash.Length - 1))
                          then noHash else header
                        else header
                      Some(n, (header, ln), rest)
                  | rest ->
                      None
                
                /// Recognizes a horizontal rule written using *, _ or -
                let (|HorizontalRule|_|) (line:string, n:MarkdownRange) =
                  let rec loop ((h, a, u) as arg) i =
                    if (h >= 3 || a >= 3 || u >= 3) && i = line.Length then Some(line.[0])
                    elif i = line.Length then None
                    elif Char.IsWhiteSpace line.[i] then loop arg (i + 1)
                    elif line.[i] = '-' && a = 0 && u = 0 then loop (h + 1, a, u) (i + 1)
                    elif line.[i] = '*' && h = 0 && u = 0 then loop (h, a + 1, u) (i + 1)
                    elif line.[i] = '_' && a = 0 && h = 0 then loop (h, a, u + 1) (i + 1)
                    else None
                  loop (0, 0, 0) 0
                
                /// Recognizes a code block - lines starting with four spaces (including blank)
                let (|NestedCodeBlock|_|) = function
                  | Lines.TakeCodeBlock (numspaces, Lines.TrimBlank lines, rest) when lines <> [] ->
                      let code =
                        [ for (l, n) in lines ->
                            if String.IsNullOrEmpty l then ""
                            else trimSpaces 4 l ]
                      Some(code @ [""], rest, "", "")
                  | _ -> None
                
                /// Recognizes a fenced code block - starting and ending with at least ``` or ~~~
                let (|FencedCodeBlock|_|) = function
                  | StringPosition.StartsWithNTimesTrimIgnoreStartWhitespace "~" (Let "~" (start,num), indent, header) :: lines
                  //    when num > 2
                  | StringPosition.StartsWithNTimesTrimIgnoreStartWhitespace "`" (Let "`" (start,num), indent, header) :: lines
                      when num > 2 ->
                    let mutable endStr = String.replicate num start
                    if header.Contains (start) then None // info string cannot contain backspaces
                    else
                      let code, rest = lines |> List.partitionUntil (fun line ->
                        match [line] with
                        // end cannot contain info string afterwards (see http://spec.commonmark.org/0.23/#example-104)
                        // end must be indended with less then 4 spaces: http://spec.commonmark.org/0.23/#example-95
                        | StringPosition.StartsWithNTimesTrimIgnoreStartWhitespace start (n, i, h) :: _ when n >= num && i < 4 && String.IsNullOrWhiteSpace h ->
                          endStr <- String.replicate n start
                          true
                        | _ -> false)
                      let handleIndent (l:string) =
                        if l.Length <= indent && String.IsNullOrWhiteSpace l then ""
                        elif l.Length > indent && String.IsNullOrWhiteSpace (l.Substring(0, indent)) then l.Substring(indent, l.Length - indent)
                        else l.TrimStart()
                      let code =
                        [ for (l, n) in code -> handleIndent l ]
                
                      // langString is the part after ``` and ignoredString is the rest until the line ends.
                      let langString, ignoredString =
                        if String.IsNullOrWhiteSpace header then "", "" else
                        let splits = header.Split((null : char array), StringSplitOptions.RemoveEmptyEntries)
                        match splits |> Seq.tryFind (fun _ -> true) with
                        | None -> "", ""
                        | Some langString ->
                            let ignoredString = header.Substring(header.IndexOf(langString) + langString.Length)
                            langString, if String.IsNullOrWhiteSpace ignoredString then "" else ignoredString
                      // Handle the ending line
                      let code, rest =
                        match rest with
                        | (hd, n) :: tl ->
                            let idx = hd.IndexOf(endStr)
                            if idx > -1 && idx + endStr.Length <= hd.Length then
                                let pre = hd.Substring(0, idx)
                                let after = hd.Substring(idx + endStr.Length)
                                code @ [""], (if String.IsNullOrWhiteSpace after then tl else (after, n) :: tl)
                            else
                                code @ [""], tl
                        | _ ->
                            code, rest
                      Some (code, rest, langString, ignoredString)
                  | _ -> None
                
                /// Matches when the input starts with a number. Returns the
                /// rest of the input, following the last number.
                let (|SkipSomeNumbers|_|) (input:string, n:MarkdownRange) =
                  match List.ofSeq input with
                  | x::xs when Char.IsDigit x ->
                      let _, rest = List.partitionUntil (Char.IsDigit >> not) xs
                      Some(input.Length - rest.Length, rest)
                  | _ -> None
                
                /// Recognizes a staring of a list (either 1. or +, *, -).
                /// Returns the rest of the line, together with the indent.
                let (|ListStart|_|) = function
                  | StringPosition.TrimStartAndCount
                      (startIndent, spaces,
                        // NOTE: a tab character after +, * or - isn't supported by the reference implementation
                        // (it will be parsed as paragraph for 0.22)
                        (StringPosition.StartsWithAny ["+ "; "* "; "- " (*; "+\t"; "*\t"; "-\t"*)] as item)) ->
                      let range = snd item
                      let li = ((fst item).Substring(2), { range with StartColumn = range.StartColumn + 2 })
                      let (StringPosition.TrimStartAndCount (startIndent2, spaces2, _)) = li
                      let endIndent =
                        startIndent + 2 +
                        // Handle case of code block
                        if startIndent2 >= 5 then 1 else startIndent2
                      Some(Unordered, startIndent, endIndent, li)
                  | StringPosition.TrimStartAndCount // Remove leading spaces
                      (startIndent, spaces,
                       (SkipSomeNumbers // read a number
                          (skipNumCount, '.' :: ' ' :: List.AsString item))) ->
                      let (StringPosition.TrimStartAndCount (startIndent2, spaces2, _)) = (item, MarkdownRange.zero)
                      let endIndent =
                        startIndent + 2 + skipNumCount +
                        // Handle case of code block
                        if startIndent2 >= 5 then 1 else startIndent2
                      Some(Ordered, startIndent, endIndent, (item, MarkdownRange.zero))
                  | _ -> None
                
                /// Splits input into lines until whitespace or starting of a list and the rest.
                let (|LinesUntilListOrWhite|) =
                  List.partitionUntil (function
                    | ListStart _ | StringPosition.WhiteSpace -> true | _ -> false)
                
                /// Splits input into lines until not-indented line or starting of a list and the rest.
                let (|LinesUntilListOrUnindented|) =
                  List.partitionUntilLookahead (function
                    | (ListStart _ | StringPosition.Unindented)::_
                    | StringPosition.WhiteSpace::StringPosition.WhiteSpace::_ -> true | _ -> false)
                
                /// Recognizes a list item until the next list item (possibly nested) or end of a list.
                /// The parameter specifies whether the previous line was simple (single-line not
                /// separated by a white line - simple items are not wrapped in <p>)
                let (|ListItem|_|) prevSimple = function
                  | ListStart(kind, startIndent, endIndent, item)::
                      // Take remaining lines that belong to the same item
                      // (everything until an empty line or start of another list item)
                      LinesUntilListOrWhite
                        (continued,
                            // Take more things that belong to the item -
                            // the value 'more' will contain indented paragraphs
                            (LinesUntilListOrUnindented (more, rest) as next)) ->
                      let simple =
                        match item with
                        | StringPosition.TrimStartAndCount (_, spaces, _) when spaces >= 4->
                          // Code Block
                          false
                        | _ ->
                          match next, rest with
                          | StringPosition.WhiteSpace::_, (ListStart _)::_ -> false
                          | (ListStart _)::_, _ -> true
                          | [], _ -> true
                          | [ StringPosition.WhiteSpace ], _ -> true
                          | StringPosition.WhiteSpace::StringPosition.WhiteSpace::_, _ -> true
                          | _, StringPosition.Unindented::_ -> prevSimple
                          | _, _ -> false
                
                      let lines =
                        [ yield item
                          for (line, n) in continued do
                            yield (line.Trim(), n)
                          for (line, n) in more do
                            let trimmed = trimSpaces endIndent line
                            yield (trimmed, { n with StartColumn = n.StartColumn + line.Length - trimmed.Length }) ]
                            //let trimmed = line.TrimStart()
                            //if trimmed.Length >= line.Length - endIndent then yield trimmed
                            //else yield line.Substring(endIndent) ]
                      Some(startIndent, (simple, kind, lines), rest)
                  | _ -> None
                
                /// Recognizes a list - returns list items with information about
                /// their indents - these need to be turned into a tree structure later.
                let rec (|ListItems|_|) prevSimple = function
                  | ListItem prevSimple (indent, ((nextSimple, _, _) as info), rest) ->
                      match rest with
                      | (HorizontalRule _)::_ ->
                          Some([indent, info], rest)
                      | ListItems nextSimple (items, rest) ->
                          Some((indent, info)::items, rest)
                      | _ -> Some([indent, info], rest)
                  | _ -> None
                
                
                // Code for parsing pipe tables
                
                // Splits table row into deliminated parts escaping inline code and latex
                let rec pipeTableFindSplits (delim : char array) (line : char list) = 
                    let cLstToStr (x : char list) = 
                        x
                        |> Array.ofList
                        |> System.String.Concat
                    
                    let rec ptfs delim line = 
                        match line with
                        | DelimitedLatexDisplayMath [ '$'; '$' ] (body, rest) -> ptfs delim rest
                        | DelimitedLatexInlineMath [ '$' ] (body, rest) -> ptfs delim rest
                        | List.DelimitedWith [ '`'; ' ' ] [ ' '; '`' ] (body, rest, s, e) -> ptfs delim rest
                        | List.DelimitedNTimes '`' (body, rest, s, e) -> ptfs delim rest
                        | x :: rest when Array.exists ((=) x) delim -> Some rest
                        | '\\' :: _ :: rest | _ :: rest -> ptfs delim rest
                        | [] -> None
                    
                    let rest = ptfs delim line
                    match rest with
                    | None -> [ cLstToStr line ]
                    | Some x when line = [] -> [ "" ]
                    | Some x -> 
                        let chunkSize = List.length line - List.length x - 1
                        cLstToStr (Seq.take chunkSize line |> Seq.toList) :: pipeTableFindSplits delim x
                
                
                    
                    
                
                /// Recognizes alignment specified in the passed separator line.
                let (|TableCellSeparator|_|) = function
                  | StringPosition.StartsAndEndsWith (":", ":") (StringPosition.EqualsRepeated("-", MarkdownRange.zero)) -> Some(AlignCenter)
                  | StringPosition.StartsWith ":" (StringPosition.EqualsRepeated("-", MarkdownRange.zero)) -> Some(AlignLeft)
                  | StringPosition.StartsAndEndsWith ("", ":") (StringPosition.EqualsRepeated("-", MarkdownRange.zero)) -> Some(AlignRight)
                  | StringPosition.EqualsRepeated("-", MarkdownRange.zero) -> Some(AlignDefault)
                  | _ -> None
                
                /// Recognizes row of pipe table.
                /// The function takes number of expected columns and array of delimiters.
                /// Returns list of strings between delimiters.
                let (|PipeTableRow|_|) (size : option<int>) delimiters (line : string, n:MarkdownRange) = 
                    let parts = 
                        pipeTableFindSplits delimiters (line.ToCharArray() |> Array.toList)
                        |> List.toArray
                        |> Array.map (fun s -> (s.Trim(), n))
                    
                    let n = parts.Length
                    
                    let m = 
                        if size.IsNone then 1
                        else size.Value
                    
                    let x = 
                        if String.IsNullOrEmpty (fst parts.[0]) && n > m then 1
                        else 0
                    
                    let y = 
                        if String.IsNullOrEmpty (fst parts.[n - 1]) && n - x > m then n - 2
                        else n - 1
                    
                    if n = 1 || (size.IsSome && y - x + 1 <> m) then None
                    else Some(parts.[x..y] |> Array.toList)
                
                
                /// Recognizes separator row of pipe table.
                /// Returns list of alignments.
                let (|PipeSeparatorRow|_|) size = function
                  | PipeTableRow size [|'|'; '+'|] parts ->
                      let alignments = parts |> List.choose ( |TableCellSeparator|_| )
                      if parts.Length <> alignments.Length then None else (Some alignments)
                  | _ -> None
                
                /// Recognizes pipe table
                let (|PipeTableBlock|_|) input =
                  let rec getTableRows size acc = function
                    | (PipeTableRow size [|'|'|] columns) :: rest ->
                        getTableRows size (List.map (fun l -> [l]) columns :: acc) rest
                    | rest -> (List.rev acc, rest)
                  match input with
                  | (PipeSeparatorRow None alignments) :: rest ->
                      let rows, others = getTableRows (Some alignments.Length) [] rest
                      Some((None, alignments, rows), others)
                  | (PipeTableRow None [|'|'|] headers) :: rest ->
                      match rest with
                      | (PipeSeparatorRow (Some headers.Length) alignments) :: rest ->
                          let rows, others = getTableRows (Some headers.Length) [] rest
                          let header_paragraphs = headers |> List.map (fun l -> [l])
                          Some((Some(header_paragraphs), alignments, rows), others)
                      | _ -> None
                  | _ -> None
                
                // Code for parsing emacs tables
                
                /// Recognizes one line of emacs table. It can be line with content or separator line.
                /// The function takes positions of grid columns (if known) and expected grid separator.
                /// Passed function is used to check whether all parts within grid are valid.
                /// Retuns tuple (position of grid columns, text between grid columns).
                let (|EmacsTableLine|_|) (grid:option<int []>) (c:char) (check:string * MarkdownRange -> bool) (line:string, n:MarkdownRange) =
                  let p = if grid.IsSome then grid.Value else Array.FindAll([|0..line.Length - 1|], fun i -> line.[i] = c)
                  let n = p.Length - 1
                  if n < 2 || line.Length <= p.[n] || Array.exists (fun i -> line.[i] <> c) p then None
                  else
                    let parts = [1..n] |> List.map (fun i -> 
                      let rng = { StartLine = n; StartColumn = 0; EndLine = n; EndColumn = p.[i] - p.[i - 1] - 1 }
                      line.Substring(p.[i - 1] + 1, p.[i] - p.[i - 1] - 1), rng)
                    if List.forall check parts then Some(p, parts) else None
                
                /// Recognizes emacs table
                let (|EmacsTableBlock|_|) (input) =
                  let isCellSep = StringPosition.(|EqualsRepeated|_|)("-", MarkdownRange.zero) >> Option.isSome
                  let isAlignedCellSep = ( |TableCellSeparator|_| ) >> Option.isSome
                  let isHeadCellSep = StringPosition.(|EqualsRepeated|_|)("=", MarkdownRange.zero) >> Option.isSome
                  let isText (s:string, n:MarkdownRange) = true
                  match input with
                  | (EmacsTableLine None '+' isAlignedCellSep (grid, parts)) :: rest ->
                    let alignments = List.choose ( |TableCellSeparator|_| ) parts
                    // iterate over rows and go from state to state
                    // headers - the content of head row (initially none)
                    // prevRow - content of the processed rows
                    // cur - list of paragraphs in the current row (list of empty lists after each separator line)
                    // flag indicates whether current row is empty (similar to List.forall (List.isEmpty) cur)
                    let emptyCur = List.replicate<(string * MarkdownRange) list> (grid.Length - 1) []
                    let rec loop flag headers (prevRows:(string * MarkdownRange) list list list) (cur:(string * MarkdownRange) list list) = function
                      | (EmacsTableLine (Some grid) '|' isText (_, parts)) :: others ->
                          loop false headers prevRows (List.zip parts cur |> List.map (fun ((h, n), t) -> (h.TrimEnd(), n) :: t)) others
                      | (EmacsTableLine (Some grid) '+' isCellSep _) :: others ->
                          loop true headers (List.map (List.rev) cur :: prevRows) emptyCur others
                      | (EmacsTableLine (Some grid) '+' isHeadCellSep _) :: others when Option.isNone headers ->
                          loop true (Some (List.map (List.rev) cur)) prevRows emptyCur others
                      | others when flag -> Some((headers, alignments, List.rev prevRows), others)
                      | _ -> None
                    loop true None [] emptyCur rest
                  | _ -> None
                
                /// Recognizes a start of a blockquote
                let (|BlockquoteStart|_|) (line:string, n:MarkdownRange) =
                  let regex =
                    "^ {0,3}" // Up to three leading spaces
                    + ">" // Blockquote character
                    + "\s?" // Maybe one whitespace character
                    + "(.*)" // Capture everything else
                  let match' = Regex.Match(line, regex)
                  if match'.Success then 
                    let group = match'.Groups.Item(1)
                    Some (group.Value, { n with StartColumn = n.StartColumn + group.Index; EndColumn = n.StartColumn + group.Index + group.Length })
                  else None
                
                /// Takes lines that belong to a continuing paragraph until
                /// a white line or start of other paragraph-item is found
                let (|TakeParagraphLines|_|) input =
                  match List.partitionWhileLookahead (function
                    | Heading _ -> false
                    | FencedCodeBlock _ -> false
                    | BlockquoteStart _::_ -> false
                    | StringPosition.WhiteSpace::_ -> false
                    | _ -> true) input with
                  | matching, rest when matching <> [] -> Some(matching, rest)
                  | _ -> None
                
                /// Recognize nested HTML block
                /// TODO: This is too simple - takes paragraph that starts with <
                let (|HtmlBlock|_|) = function
                  | (first, n)::_ & TakeParagraphLines(html, rest) when first.StartsWith("<") ->
                      Some(html, rest)
                  | _ -> None
                
                /// Continues taking lines until a whitespace line or start of a blockquote
                let (|LinesUntilBlockquoteEnds|) input =
                  List.partitionUntilLookahead (fun next ->
                    match next with
                    | BlockquoteStart _ :: _
                    | Heading _
                    | StringPosition.WhiteSpace :: _ -> true
                    | _ ->
                      false) input
                
                /// Recognizes blockquote - continues taking paragraphs
                /// starting with '>' until there is something else
                let rec (|Blockquote|_|) = function
                  | EmptyBlockquote(Lines.TrimBlankStart rest) ->
                      Some ([("", MarkdownRange.zero)], rest)
                  | BlockquoteStart(line)::LinesUntilBlockquoteEnds(continued, Lines.TrimBlankStart rest) ->
                      let moreLines, rest =
                        match rest with
                        | Blockquote(lines, rest) -> lines, rest
                        | _ -> [], rest
                      Some (line::continued @ moreLines, rest)
                  | _ -> None
                
                /// Recognizes a special case: an empty blockquote line should terminate
                /// the blockquote if the next line is not a blockquote
                and (|EmptyBlockquote|_|) = function
                  | BlockquoteStart(StringPosition.WhiteSpace) :: Blockquote(_) -> None
                  | BlockquoteStart(StringPosition.WhiteSpace) :: rest -> Some rest
                  | _ -> None
                
                /// Recognizes Latex block - start with "$$$"
                let (|LatexBlock|_|) (lines:(string * MarkdownRange) list) = lines |> function
                  | (first, n)::rest when (first.TrimEnd()) = "$$$" -> rest |> function
                    | TakeParagraphLines(body, rest) -> Some(body, rest)
                    | _ -> None
                  | _ -> None
                
                /// Recognize a definition of a link as in `[key]: http://url ...`
                let (|LinkDefinition|_|) = function
                  | ( StringPosition.StartsWithWrapped ("[", "]:") (wrapped, StringPosition.TrimBoth link)
                    | StringPosition.StartsWithWrapped (" [", "]:") (wrapped, StringPosition.TrimBoth link)
                    | StringPosition.StartsWithWrapped ("  [", "]:") (wrapped, StringPosition.TrimBoth link)
                    | StringPosition.StartsWithWrapped ("   [", "]:") (wrapped, StringPosition.TrimBoth link) ) :: rest ->
                        Some((wrapped, link), rest)
                  | _ -> None
                
                let updateCurrentRange lines =
                  match lines with
                  | [] -> None
                  | (_, l)::_ -> Some(l)
                
                /// Parse a list of lines into a sequence of markdown paragraphs
                let rec parseParagraphs (ctx:ParsingContext) (lines:(string * MarkdownRange) list) = seq {
                  let ctx = { ctx with CurrentRange = updateCurrentRange lines }
                  match lines with
                  // Recognize various kinds of standard paragraphs
                  | LinkDefinition ((key, link), Lines.TrimBlankStart lines) ->
                      ctx.Links.Add(key, getLinkAndTitle link)
                      yield! parseParagraphs ctx lines
                  | NestedCodeBlock(code, Lines.TrimBlankStart lines, langString, ignoredLine)
                  | FencedCodeBlock(code, Lines.TrimBlankStart lines, langString, ignoredLine) ->
                      yield CodeBlock(code |> String.concat ctx.Newline, langString, ignoredLine, ctx.CurrentRange)
                      yield! parseParagraphs ctx lines
                  | Blockquote(body, Lines.TrimBlankStart rest) ->
                      yield QuotedBlock(parseParagraphs ctx (body @ [("", MarkdownRange.zero)]) |> List.ofSeq, ctx.CurrentRange)
                      yield! parseParagraphs ctx rest
                  | EmacsTableBlock((headers, alignments, rows), Lines.TrimBlankStart rest)
                  | PipeTableBlock((headers, alignments, rows), Lines.TrimBlankStart rest) ->
                      let headParagraphs =
                        if headers.IsNone then None
                        else Some(headers.Value |> List.map (fun i -> parseParagraphs ctx i |> List.ofSeq))
                      yield TableBlock(headParagraphs, alignments,
                        rows |> List.map (List.map (fun i -> parseParagraphs ctx i |> List.ofSeq)), ctx.CurrentRange)
                      yield! parseParagraphs ctx rest
                  | HorizontalRule(c) :: (Lines.TrimBlankStart lines) ->
                      yield HorizontalRule(c, ctx.CurrentRange)
                      yield! parseParagraphs ctx lines
                  | LatexBlock(body, Lines.TrimBlankStart rest) ->
                    yield LatexBlock(body |> List.map fst, ctx.CurrentRange)
                    yield! parseParagraphs ctx rest
                
                
                  // Recognize list of list items and turn it into nested lists
                  | ListItems true (items, Lines.TrimBlankStart rest) ->
                      let tree = Tree.ofIndentedList items
                
                      // Nest all items that have another kind (i.e. UL vs. OL)
                      let rec nestUnmatchingItems items =
                        match items with
                        | Node((_, baseKind, _), _)::_ ->
                            items
                            |> List.nestUnderLastMatching (fun (Node((_, kind, _), _)) -> kind = baseKind)
                            |> List.map (fun (Node(info, children), nested) ->
                                let children = nestUnmatchingItems children
                                Node(info, children @ nested))
                        | [] -> []
                
                      // Turn tree into nested list definitions
                      let rec formatTree (nodes:Tree<bool * MarkdownListKind * (string * MarkdownRange) list> list) =
                        let kind = match nodes with Node((_, kind, _), _)::_ -> kind | _ -> Unordered
                        let items =
                          [ for (Node((simple, _, body), nested)) in nodes ->
                              [ let rng = body |> List.map snd |> MarkdownRange.mergeRanges
                                if not simple then yield! parseParagraphs ctx body
                                else yield MarkdownParagraph.Span(parseSpans(body |> List.map fst |> String.concat ctx.Newline, rng) ctx, ctx.CurrentRange)
                                if nested <> [] then
                                  yield formatTree nested ] ]
                        ListBlock(kind, items, ctx.CurrentRange)
                
                      // Make sure all items of the list have are either simple or not.
                      let rec unifySimpleProperty (nodes:Tree<bool * MarkdownListKind * (string * MarkdownRange) list> list) =
                        let containsNonSimple =
                          tree |> Seq.exists (function
                            | Node ((false, _, _), _) -> true
                            | _ -> false)
                        if containsNonSimple then
                          nodes |> List.map (function
                            | Node ((_, kind, content), nested) -> Node((false, kind, content), unifySimpleProperty nested))
                        else nodes
                
                      yield  tree |> unifySimpleProperty |> formatTree
                      yield! parseParagraphs ctx rest
                
                  // Recognize remaining types of paragraphs
                  | Heading(n, body, Lines.TrimBlankStart lines) ->
                      yield Heading(n, parseSpans body ctx, ctx.CurrentRange)
                      yield! parseParagraphs ctx lines
                  | HtmlBlock(code, Lines.TrimBlankStart lines) when
                        ( let all = String.concat ctx.Newline (code |> List.map fst)
                          not (all.StartsWith("<http://")) && not (all.StartsWith("<ftp://")) && not (all.Contains("@")) ) ->
                      let all = String.concat ctx.Newline (code |> List.map fst)
                      yield InlineBlock(all, ctx.CurrentRange)
                      yield! parseParagraphs ctx lines
                  | TakeParagraphLines(Lines.TrimParagraphLines lines, Lines.TrimBlankStart rest) ->
                      yield Paragraph (parseSpans (lines |> List.map fst |> String.concat ctx.Newline, lines |> List.map snd |> MarkdownRange.mergeRanges) ctx, ctx.CurrentRange)
                      yield! parseParagraphs ctx rest
                
                  | Lines.TrimBlankStart [] -> ()
                  | _ -> failwithf "Unexpectedly stopped!\n%A" lines }
            // --------------------------------------------------------------------------------------
            // F# Markdown (HtmlFormatting.fs)
            // (c) Tomas Petricek, 2012, Available under Apache 2.0 license.
            // --------------------------------------------------------------------------------------
            
            /// [omit]
            module Html =
            
                open System
                open System.IO
                open System.Collections.Generic
                open System.Text.RegularExpressions
                open Patterns
                open Collections
                open Markdown
                
                // --------------------------------------------------------------------------------------
                // Formats Markdown documents as an HTML file
                // --------------------------------------------------------------------------------------
                
                /// Basic escaping as done by Markdown
                let htmlEncode (code:string) = 
                  code.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;")
                
                /// Basic escaping as done by Markdown including quotes
                let htmlEncodeQuotes (code:string) = 
                  (htmlEncode code).Replace("\"", "&quot;")
                
                /// Lookup a specified key in a dictionary, possibly
                /// ignoring newlines or spaces in the key.
                let (|LookupKey|_|) (dict:IDictionary<_, _>) (key:string) = 
                  [ key; key.Replace("\r\n", ""); key.Replace("\r\n", " "); 
                    key.Replace("\n", ""); key.Replace("\n", " ") ]
                  |> Seq.tryPick (fun key ->
                    match dict.TryGetValue(key) with
                    | true, v -> Some v 
                    | _ -> None)
                
                /// Generates a unique string out of given input
                type UniqueNameGenerator() =
                    let generated = new System.Collections.Generic.Dictionary<string, int>()
                
                    member __.GetName(name : string) =
                        let ok, i = generated.TryGetValue name
                        if ok then
                            generated.[name] <- i + 1
                            sprintf "%s-%d" name i
                        else
                            generated.[name] <- 1
                            name
                
                /// Context passed around while formatting the HTML
                type FormattingContext =
                  { LineBreak : unit -> unit
                    Newline : string
                    Writer : TextWriter
                    Links : IDictionary<string, string * option<string>>
                    WrapCodeSnippets : bool
                    GenerateHeaderAnchors : bool
                    UniqueNameGenerator : UniqueNameGenerator
                    ParagraphIndent : unit -> unit }
                
                let bigBreak (ctx:FormattingContext) () =
                  ctx.Writer.Write(ctx.Newline)
                let smallBreak (ctx:FormattingContext) () =
                  ctx.Writer.Write(ctx.Newline)
                let noBreak (ctx:FormattingContext) () = ()
                
                /// Write MarkdownSpan value to a TextWriter
                let rec formatSpan (ctx:FormattingContext) = function
                  | LatexDisplayMath(body, _) ->
                      // use mathjax grammar, for detail, check: http://www.mathjax.org/
                      ctx.Writer.Write("<span class=\"math\">\\[" + (htmlEncode body) + "\\]</span>")
                  | LatexInlineMath(body, _) ->
                      // use mathjax grammar, for detail, check: http://www.mathjax.org/
                      ctx.Writer.Write("<span class=\"math\">\\(" + (htmlEncode body) + "\\)</span>")
                
                  | AnchorLink(id, _) -> ctx.Writer.Write("<a name=\"" + id + "\">&#160;</a>") 
                  | EmbedSpans(cmd, _) -> formatSpans ctx (cmd.Render())
                  | Literal(str, _) -> ctx.Writer.Write(str)
                  | HardLineBreak(_) -> ctx.Writer.Write("<br />" + ctx.Newline)
                  | IndirectLink(body, _, LookupKey ctx.Links (link, title), _) 
                  | DirectLink(body, link, title, _) -> 
                      ctx.Writer.Write("<a href=\"")
                      ctx.Writer.Write(htmlEncode link)
                      match title with 
                      | Some title ->
                          ctx.Writer.Write("\" title=\"")
                          ctx.Writer.Write(htmlEncodeQuotes title)
                      | _ -> ()
                      ctx.Writer.Write("\">")
                      formatSpans ctx body
                      ctx.Writer.Write("</a>")
                
                  | IndirectLink(body, original, _, _) ->
                      ctx.Writer.Write("[")
                      formatSpans ctx body
                      ctx.Writer.Write("]")
                      ctx.Writer.Write(original)
                
                  | IndirectImage(body, _, LookupKey ctx.Links (link, title), _) 
                  | DirectImage(body, link, title, _) -> 
                      ctx.Writer.Write("<img src=\"")
                      ctx.Writer.Write(htmlEncodeQuotes link)
                      ctx.Writer.Write("\" alt=\"")
                      ctx.Writer.Write(htmlEncodeQuotes body)
                      match title with 
                      | Some title ->
                          ctx.Writer.Write("\" title=\"")
                          ctx.Writer.Write(htmlEncodeQuotes title)
                      | _ -> ()
                      ctx.Writer.Write("\" />")
                  | IndirectImage(body, original, _, _) ->
                      ctx.Writer.Write("[")
                      ctx.Writer.Write(body)
                      ctx.Writer.Write("]")
                      ctx.Writer.Write(original)
                
                  | Strong(body, _) -> 
                      ctx.Writer.Write("<strong>")
                      formatSpans ctx body
                      ctx.Writer.Write("</strong>")
                  | InlineCode(body, _) -> 
                      ctx.Writer.Write("<code>")
                      ctx.Writer.Write(htmlEncode body)
                      ctx.Writer.Write("</code>")
                  | Emphasis(body, _) -> 
                      ctx.Writer.Write("<em>")
                      formatSpans ctx body
                      ctx.Writer.Write("</em>")
                
                /// Write list of MarkdownSpan values to a TextWriter
                and formatSpans ctx = List.iter (formatSpan ctx)
                
                /// generate anchor name from Markdown text
                let formatAnchor (ctx:FormattingContext) (spans:MarkdownSpans) =
                    let extractWords (text:string) =
                        Regex.Matches(text, @"\w+")
                        |> Seq.cast<Match>
                        |> Seq.map (fun m -> m.Value)
                
                    let rec gather (span:MarkdownSpan) : seq<string> = 
                        seq {
                            match span with
                            | Literal(str, _) -> yield! extractWords str
                            | Strong(body, _) -> yield! gathers body
                            | Emphasis(body, _) -> yield! gathers body
                            | DirectLink(body, _, _, _) -> yield! gathers body
                            | _ -> ()
                        }
                
                    and gathers (spans:MarkdownSpans) = Seq.collect gather spans
                
                    spans 
                    |> gathers 
                    |> String.concat "-"
                    |> fun name -> if String.IsNullOrWhiteSpace name then "header" else name
                    |> ctx.UniqueNameGenerator.GetName
                let withInner ctx f =
                  use sb = new StringWriter()
                  let newCtx = { ctx with Writer = sb }
                  f newCtx
                  sb.ToString()
                /// Write a MarkdownParagraph value to a TextWriter
                let rec formatParagraph (ctx:FormattingContext) paragraph =
                  match paragraph with
                  | LatexBlock(lines, _) ->
                    // use mathjax grammar, for detail, check: http://www.mathjax.org/
                    let body = String.concat ctx.Newline lines
                    ctx.Writer.Write("<p><span class=\"math\">\\[" + (htmlEncode body) + "\\]</span></p>")
                
                  | EmbedParagraphs(cmd, _) -> formatParagraphs ctx (cmd.Render())
                  | Heading(n, spans, _) -> 
                      ctx.Writer.Write("<h" + string n + ">")
                      if ctx.GenerateHeaderAnchors then
                        let anchorName = formatAnchor ctx spans
                        ctx.Writer.Write(sprintf """<a name="%s" class="anchor" href="#%s">""" anchorName anchorName)
                        formatSpans ctx spans
                        ctx.Writer.Write "</a>"
                      else
                        formatSpans ctx spans
                      ctx.Writer.Write("</h" + string n + ">")
                  | Paragraph(spans, _) ->
                      ctx.ParagraphIndent()
                      ctx.Writer.Write("<p>")
                      for span in spans do 
                        formatSpan ctx span
                      ctx.Writer.Write("</p>")
                  | HorizontalRule(_, _) ->
                      ctx.Writer.Write("<hr />")
                  | CodeBlock(code, String.WhiteSpace, _, _) ->
                      if ctx.WrapCodeSnippets then ctx.Writer.Write("<table class=\"pre\"><tr><td>")
                      ctx.Writer.Write("<pre><code>")
                      ctx.Writer.Write(htmlEncode code)
                      ctx.Writer.Write("</code></pre>")
                      if ctx.WrapCodeSnippets then ctx.Writer.Write("</td></tr></table>")
                  | CodeBlock(code, codeLanguage, _, _) ->
                      if ctx.WrapCodeSnippets then ctx.Writer.Write("<table class=\"pre\"><tr><td>")
                      let langCode = sprintf "language-%s" codeLanguage
                      ctx.Writer.Write(sprintf "<pre><code class=\"%s\">" langCode)
                      ctx.Writer.Write(htmlEncode code)
                      ctx.Writer.Write("</code></pre>")
                      if ctx.WrapCodeSnippets then ctx.Writer.Write("</td></tr></table>")
                  | TableBlock(headers, alignments, rows, _) ->
                      let aligns = alignments |> List.map (function
                        | AlignLeft -> " align=\"left\""
                        | AlignRight -> " align=\"right\""
                        | AlignCenter -> " align=\"center\""
                        | AlignDefault -> "")
                      ctx.Writer.Write("<table>")
                      ctx.Writer.Write(ctx.Newline)
                      if headers.IsSome then
                        ctx.Writer.Write("<thead>" + ctx.Newline + "<tr class=\"header\">" + ctx.Newline)
                        for cell, align in Seq.zip headers.Value aligns do
                          ctx.Writer.Write("<th" + align + ">")
                          for paragraph in cell do
                            formatParagraph { ctx with LineBreak = noBreak ctx } paragraph
                          ctx.Writer.Write("</th>" + ctx.Newline)
                        ctx.Writer.Write("</tr>" +  ctx.Newline + "</thead>" + ctx.Newline)
                      ctx.Writer.Write("<tbody>" + ctx.Newline)
                      for id, row in rows |> List.mapi (fun i r -> (i + 1, r)) do
                        ctx.Writer.Write("<tr class=\"" + (if id % 2 = 1 then "odd" else "even") + "\">" + ctx.Newline)
                        for cell, align in Seq.zip row aligns do
                          ctx.Writer.Write("<td" + align + ">")
                          for paragraph in cell do
                            formatParagraph { ctx with LineBreak = noBreak ctx } paragraph
                          ctx.Writer.Write("</td>" + ctx.Newline)
                        ctx.Writer.Write("</tr>" + ctx.Newline)
                      ctx.Writer.Write("</tbody>" + ctx.Newline)
                      ctx.Writer.Write("</table>")
                      ctx.Writer.Write(ctx.Newline)
                
                  | ListBlock(kind, items, _) ->
                      let tag = if kind = Ordered then "ol" else "ul"
                      ctx.Writer.Write("<" + tag + ">" + ctx.Newline)
                      for body in items do
                        ctx.Writer.Write("<li>")
                        match body with
                        // Simple Paragraph
                        | [ Paragraph([MarkdownSpan.Literal(s, _)], _) ] when not (s.Contains(ctx.Newline)) ->
                          ctx.Writer.Write s
                        | _ ->
                          let inner =
                            withInner ctx (fun ctx ->
                              body |> List.iterInterleaved
                                    (formatParagraph { ctx with LineBreak = noBreak ctx })
                                    (fun () -> ctx.Writer.Write(ctx.Newline)))
                          let wrappedInner =
                            if inner.Contains(ctx.Newline) then ctx.Newline + inner + ctx.Newline else inner
                          ctx.Writer.Write(wrappedInner)
                        ctx.Writer.Write("</li>" + ctx.Newline)
                      ctx.Writer.Write("</" + tag + ">")
                  | QuotedBlock(body, _) ->
                      ctx.ParagraphIndent()
                      ctx.Writer.Write("<blockquote>" + ctx.Newline)
                      formatParagraphs { ctx with ParagraphIndent = fun () -> ctx.ParagraphIndent() (*; ctx.Writer.Write("  ")*) } body
                      ctx.ParagraphIndent()
                      ctx.Writer.Write("</blockquote>")
                  | Span(spans, _) -> 
                      formatSpans ctx spans
                  | InlineBlock(code, _) ->
                      ctx.Writer.Write(code)
                  ctx.LineBreak()
                
                /// Write a list of MarkdownParagraph values to a TextWriter
                and formatParagraphs ctx paragraphs = 
                  let length = List.length paragraphs
                  let smallCtx = { ctx with LineBreak = smallBreak ctx }
                  let bigCtx = { ctx with LineBreak = bigBreak ctx }
                  for last, paragraph in paragraphs |> Seq.mapi (fun i v -> (i = length - 1), v) do
                    formatParagraph (if last then smallCtx else bigCtx) paragraph
                
                /// Format Markdown document and write the result to 
                /// a specified TextWriter. Parameters specify newline character
                /// and a dictionary with link keys defined in the document.
                let formatMarkdown writer generateAnchors newline wrap links = 
                  formatParagraphs 
                    { Writer = writer
                      Links = links
                      Newline = newline
                      LineBreak = ignore
                      WrapCodeSnippets = wrap
                      GenerateHeaderAnchors = generateAnchors
                      UniqueNameGenerator = new UniqueNameGenerator()
                      ParagraphIndent = ignore }
                // --------------------------------------------------------------------------------------
                // F# Markdown (LatexFormatting.fs)
                // (c) Tomas Petricek, 2012, Available under Apache 2.0 license.
                // --------------------------------------------------------------------------------------
                
                /// [omit]
            module Latex =
                
                open System.IO
                open System.Web
                open System.Collections.Generic
                open Patterns
                open Collections
                open Markdown
                
                /// LaTEX special chars
                /// from http://tex.stackexchange.com/questions/34580/escape-character-in-latex
                let specialChars =
                    [|  // This line comes first to avoid double replacing
                        // It also accommodates \r, \n, \t, etc.
                        @"\", @"<\textbackslash>";
                        "#", @"\#";
                        "$", @"\$";
                        "%", @"\%";
                        "&", @"\&";
                        "_", @"\_";
                        "{", @"\{";
                        "}", @"\}";
                        @"<\textbackslash>", @"{\textbackslash}";
                        "~",@"{\textasciitilde}";
                        "^", @"{\textasciicircum}" |]
                    
                let latexEncode s =
                    specialChars |> Array.fold (fun (acc:string) (k, v) -> acc.Replace(k, v)) (HttpUtility.HtmlDecode s)
                
                /// Lookup a specified key in a dictionary, possibly
                /// ignoring newlines or spaces in the key.
                let (|LookupKey|_|) (dict:IDictionary<_, _>) (key:string) = 
                  [ key; key.Replace("\r\n", ""); key.Replace("\r\n", " "); 
                    key.Replace("\n", ""); key.Replace("\n", " ") ]
                  |> Seq.tryPick (fun key ->
                    match dict.TryGetValue(key) with
                    | true, v -> Some v 
                    | _ -> None)
                
                /// Context passed around while formatting the LaTEX
                type FormattingContext =
                  { LineBreak : unit -> unit
                    Newline : string
                    Writer : TextWriter
                    Links : IDictionary<string, string * option<string>> }
                
                let smallBreak (ctx:FormattingContext) () =
                  ctx.Writer.Write(ctx.Newline)
                let noBreak (ctx:FormattingContext) () = ()
                
                /// Write MarkdownSpan value to a TextWriter
                let rec formatSpan (ctx:FormattingContext) = function 
                  | LatexInlineMath(body, _) -> ctx.Writer.Write(sprintf "$%s$" body)
                  | LatexDisplayMath(body, _) -> ctx.Writer.Write(sprintf "$$%s$$" body)
                  | EmbedSpans(cmd, _) -> formatSpans ctx (cmd.Render())
                  | Literal(str, _) -> ctx.Writer.Write(latexEncode str)
                  | HardLineBreak(_) -> ctx.LineBreak(); ctx.LineBreak()
                
                  | AnchorLink _ -> ()
                  | IndirectLink(body, _, LookupKey ctx.Links (link, _), _) 
                  | DirectLink(body, link, _, _)
                  | IndirectLink(body, link, _, _) ->
                      ctx.Writer.Write(@"\href{")
                      ctx.Writer.Write(latexEncode link)
                      ctx.Writer.Write("}{")
                      formatSpans ctx body
                      ctx.Writer.Write("}")
                
                  | IndirectImage(body, _, LookupKey ctx.Links (link, _), _) 
                  | DirectImage(body, link, _, _) 
                  | IndirectImage(body, link, _, _) ->
                      // Use the technique introduced at
                      // http://stackoverflow.com/q/14014827
                      if not (System.String.IsNullOrWhiteSpace(body)) then
                        ctx.Writer.Write(@"\begin{figure}[htbp]\centering")
                        ctx.LineBreak()
                      ctx.Writer.Write(@"\includegraphics[width=1.0\textwidth]{")
                      ctx.Writer.Write(latexEncode link)
                      ctx.Writer.Write("}") 
                      ctx.LineBreak()
                      if not (System.String.IsNullOrWhiteSpace(body)) then
                        ctx.Writer.Write(@"\caption{")
                        ctx.Writer.Write(latexEncode body)
                        ctx.Writer.Write("}")
                        ctx.LineBreak()
                        ctx.Writer.Write(@"\end{figure}")
                        ctx.LineBreak()
                
                  | Strong(body, _) -> 
                      ctx.Writer.Write(@"\textbf{")
                      formatSpans ctx body
                      ctx.Writer.Write("}")
                  | InlineCode(body, _) -> 
                      ctx.Writer.Write(@"\texttt{")
                      ctx.Writer.Write(latexEncode body)
                      ctx.Writer.Write("}")
                  | Emphasis(body, _) -> 
                      ctx.Writer.Write(@"\emph{")
                      formatSpans ctx body
                      ctx.Writer.Write("}")
                
                /// Write list of MarkdownSpan values to a TextWriter
                and formatSpans ctx = List.iter (formatSpan ctx)
                
                /// Write a MarkdownParagraph value to a TextWriter
                let rec formatParagraph (ctx:FormattingContext) paragraph =
                  match paragraph with
                  | LatexBlock(lines, _) ->
                    ctx.LineBreak(); ctx.LineBreak()
                    ctx.Writer.Write("\["); ctx.LineBreak()
                    for line in lines do
                      ctx.Writer.Write(line)
                      ctx.LineBreak()
                    ctx.Writer.Write("\]")
                    ctx.LineBreak(); ctx.LineBreak()
                
                  | EmbedParagraphs(cmd, _) -> formatParagraphs ctx (cmd.Render())
                  | Heading(n, spans, _) -> 
                      let level = 
                        match n with
                        | 1 -> @"\section*"
                        | 2 -> @"\subsection*"
                        | 3 -> @"\subsubsection*"
                        | 4 -> @"\paragraph"
                        | 5 -> @"\subparagraph"
                        | _ -> ""
                      ctx.Writer.Write(level + "{")
                      formatSpans ctx spans
                      ctx.Writer.Write("}")
                      ctx.LineBreak()
                  | Paragraph(spans, _) ->
                      ctx.LineBreak(); ctx.LineBreak()
                      for span in spans do 
                        formatSpan ctx span
                
                  | HorizontalRule(_) ->
                      // Reference from http://tex.stackexchange.com/q/19579/9623
                      ctx.Writer.Write(@"\noindent\makebox[\linewidth]{\rule{\linewidth}{0.4pt}}\medskip")
                      ctx.LineBreak()
                
                  | CodeBlock(code, _, _, _) ->
                      ctx.Writer.Write(@"\begin{lstlisting}")
                      ctx.LineBreak()
                      ctx.Writer.Write(code)
                      ctx.LineBreak()
                      ctx.Writer.Write(@"\end{lstlisting}")
                      ctx.LineBreak()
                
                  | TableBlock(headers, alignments, rows, _) ->
                      let aligns = alignments |> List.map (function
                        | AlignRight -> "|r"
                        | AlignCenter -> "|c"
                        | AlignDefault | AlignLeft -> "|l") |> String.concat ""
                      ctx.Writer.Write(@"\begin{tabular}{" + aligns + @"|}\hline")
                      ctx.LineBreak()
                
                      let bodyCtx = { ctx with LineBreak = noBreak ctx }
                      let formatRow (prefix:string) (postfix:string) row = 
                        row |> Seq.iteri (fun i cell ->
                          if i <> 0 then ctx.Writer.Write(" & ")
                          ctx.Writer.Write(prefix)
                          cell |> List.iter (formatParagraph bodyCtx) 
                          ctx.Writer.Write(postfix) )
                
                      for header in Option.toList headers do
                        formatRow @"\textbf{" "}" header
                        ctx.Writer.Write(@"\\ \hline\hline")
                        ctx.LineBreak()
                      for row in rows do
                        formatRow "" "" row
                        ctx.Writer.Write(@"\\ \hline")
                        ctx.LineBreak()
                      ctx.Writer.Write(@"\end{tabular}")
                      ctx.LineBreak()
                
                  | ListBlock(kind, items, _) ->
                      let tag = if kind = Ordered then "enumerate" else "itemize"
                      ctx.Writer.Write(@"\begin{" + tag + "}")
                      ctx.LineBreak()
                      for body in items do
                        ctx.Writer.Write(@"\item ")
                        body |> List.iter (formatParagraph ctx)
                        ctx.LineBreak()
                      ctx.Writer.Write(@"\end{" + tag + "}")
                      ctx.LineBreak()
                
                  | QuotedBlock(body, _) ->
                      ctx.Writer.Write(@"\begin{quote}")
                      ctx.LineBreak()
                      formatParagraphs ctx body
                      ctx.Writer.Write(@"\end{quote}")
                      ctx.LineBreak()
                
                  | Span(spans, _) -> 
                      formatSpans ctx spans
                  | InlineBlock(code, _) ->
                      ctx.Writer.Write(code)
                  ctx.LineBreak()
                
                /// Write a list of MarkdownParagraph values to a TextWriter
                and formatParagraphs ctx paragraphs = 
                  let length = List.length paragraphs
                  let ctx = { ctx with LineBreak = smallBreak ctx }
                  for last, paragraph in paragraphs |> Seq.mapi (fun i v -> (i = length - 1), v) do
                    formatParagraph ctx paragraph
                
                /// Format Markdown document and write the result to 
                /// a specified TextWriter. Parameters specify newline character
                /// and a dictionary with link keys defined in the document.
                let formatMarkdown writer newline links = 
                  formatParagraphs 
                    { Writer = writer
                      Links = links
                      Newline = newline
                      LineBreak = ignore }
                // --------------------------------------------------------------------------------------
                // F# Markdown (Main.fs)
                // (c) Tomas Petricek, 2012, Available under Apache 2.0 license.
                // --------------------------------------------------------------------------------------
                
            module Main =
                
                open System
                open System.IO
                open System.Collections.Generic
                
                open Patterns
                open Markdown
                open Parser
                open Html
                open Common
                
                module private Utils  =
                    /// Replace tabs with four spaces - tab will end at the 
                    /// first column that is divisible by four.
                    let replaceTabs size = 
                        List.map (fun (line:string) ->
                            if line.IndexOf '\t' = -1 then line else
                            let chars = ResizeArray<_>()
                            for i in 0 .. line.Length - 1 do
                                if line.[i] <> '\t' then chars.Add line.[i]
                                else 
                                chars.Add ' '
                                while chars.Count % size <> 0 do chars.Add ' '
                            String (chars.ToArray()) 
                        )
                
                // --------------------------------------------------------------------------------------
                // Expose Markdown transformer functions as an overloaded static method (C# friendly)
                // --------------------------------------------------------------------------------------
                
                /// Representation of a Markdown document - the representation of Paragraphs
                /// uses an F# discriminated union type and so is best used from F#.
                type MarkdownDocument(paragraphs, links) =
                  /// Returns a list of paragraphs in the document
                  member x.Paragraphs : MarkdownParagraphs = paragraphs
                  /// Returns a dictionary containing explicitly defined links
                  member x.DefinedLinks : IDictionary<string, string * option<string>> = links
                
                
                /// Static class that provides methods for formatting 
                /// and transforming Markdown documents.
                type Markdown =
                  /// Parse the specified text into a MarkdownDocument. Line breaks in the
                  /// inline HTML (etc.) will be stored using the specified string.
                  static member Parse(text, newline:string) =
                    use reader = new StringReader(text)
                    let lines = 
                      [ let line = ref ""
                        let mutable lineNo = 1
                        while (line := reader.ReadLine(); line.Value <> null) do
                          yield (line.Value, { StartLine = lineNo; StartColumn = 0; EndLine = lineNo; EndColumn = line.Value.Length })
                          lineNo <- lineNo + 1
                        if text.EndsWith(newline) then
                          yield ("", { StartLine = lineNo; StartColumn = 0; EndLine = lineNo; EndColumn = 0 }) ]
                      //|> Utils.replaceTabs 4
                    let links = Dictionary<_, _>()
                    //let (Lines.TrimBlank lines) = lines
                    let ctx : ParsingContext = { Newline = newline; Links = links; CurrentRange = Some(MarkdownRange.zero) }
                    let paragraphs =
                      lines
                      |> FSharp.Collections.List.skipWhile (fun (s, n) -> String.IsNullOrWhiteSpace s)
                      |> parseParagraphs ctx
                      |> List.ofSeq
                    MarkdownDocument(paragraphs, links)
                
                  /// Parse the specified text into a MarkdownDocument.
                  static member Parse(text) =
                    Markdown.Parse(text, Environment.NewLine)
                
                  /// Transform Markdown document into HTML format. The result
                  /// will be written to the provided TextWriter.
                  static member TransformHtml(text, writer:TextWriter, newline) = 
                    let doc = Markdown.Parse(text, newline)
                    formatMarkdown writer false newline false doc.DefinedLinks doc.Paragraphs 
                
                  /// Transform Markdown document into HTML format. The result
                  /// will be written to the provided TextWriter.
                  static member TransformHtml(text, writer:TextWriter) = 
                    Markdown.TransformHtml(text, writer, Environment.NewLine)
                
                  /// Transform Markdown document into HTML format. 
                  /// The result will be returned as a string.
                  static member TransformHtml(text, newline) =
                    let sb = new System.Text.StringBuilder()
                    use wr = new StringWriter(sb)
                    Markdown.TransformHtml(text, wr, newline)
                    sb.ToString()
                
                  /// Transform Markdown document into HTML format. 
                  /// The result will be returned as a string.
                  static member TransformHtml(text) =
                    Markdown.TransformHtml(text, Environment.NewLine)
                  
                  /// Transform the provided MarkdownDocument into HTML
                  /// format and write the result to a given writer.
                  static member WriteHtml(doc:MarkdownDocument, writer, newline) = 
                    formatMarkdown writer false newline false doc.DefinedLinks doc.Paragraphs
                
                  /// Transform the provided MarkdownDocument into HTML
                  /// format and return the result as a string.
                  static member WriteHtml(doc:MarkdownDocument, newline) = 
                    let sb = new System.Text.StringBuilder()
                    use wr = new StringWriter(sb)
                    Markdown.WriteHtml(doc, wr, newline)
                    sb.ToString()
                
                  /// Transform the provided MarkdownDocument into HTML
                  /// format and return the result as a string.
                  static member WriteHtml(doc:MarkdownDocument) = 
                    Markdown.WriteHtml(doc, Environment.NewLine)
                
                  /// Transform the provided MarkdownDocument into HTML
                  /// format and write the result to a given writer.
                  static member WriteHtml(doc:MarkdownDocument, writer) = 
                    Markdown.WriteHtml(doc, writer, Environment.NewLine)
                
                  // -----------------------------------
                  // Now the functions for LaTeX format
                  // -----------------------------------
                
                  /// Transform Markdown document into LaTeX format. The result
                  /// will be written to the provided TextWriter.
                  static member TransformLatex(text, writer:TextWriter, newline) = 
                    let doc = Markdown.Parse(text, newline)
                    Latex.formatMarkdown writer newline doc.DefinedLinks doc.Paragraphs
                
                  /// Transform Markdown document into LaTeX format. The result
                  /// will be written to the provided TextWriter.
                  static member TransformLatex(text, writer:TextWriter) = 
                    Markdown.TransformLatex(text, writer, Environment.NewLine)
                
                  /// Transform Markdown document into LaTeX format. 
                  /// The result will be returned as a string.
                  static member TransformLatex(text, newline) =
                    let sb = new System.Text.StringBuilder()
                    use wr = new StringWriter(sb)
                    Markdown.TransformLatex(text, wr, newline)
                    sb.ToString()
                
                  /// Transform Markdown document into LaTeX format. 
                  /// The result will be returned as a string.
                  static member TransformLatex(text) =
                    Markdown.TransformLatex(text, Environment.NewLine)
                
                  /// Transform the provided MarkdownDocument into LaTeX
                  /// format and write the result to a given writer.
                  static member WriteLatex(doc:MarkdownDocument, writer, newline) = 
                    Latex.formatMarkdown writer newline doc.DefinedLinks doc.Paragraphs
                
                  /// Transform the provided MarkdownDocument into LaTeX
                  /// format and return the result as a string.
                  static member WriteLatex(doc:MarkdownDocument, newline) = 
                    let sb = new System.Text.StringBuilder()
                    use wr = new StringWriter(sb)
                    Markdown.WriteLatex(doc, wr, newline)
                    sb.ToString()
                
                  /// Transform the provided MarkdownDocument into LaTeX
                  /// format and return the result as a string.
                  static member WriteLatex(doc:MarkdownDocument) = 
                    Markdown.WriteLatex(doc, Environment.NewLine)
                
                  /// Transform the provided MarkdownDocument into LaTeX
                  /// format and write the result to a given writer.
                  static member WriteLatex(doc:MarkdownDocument, writer) = 
                    Markdown.WriteLatex(doc, writer, Environment.NewLine)
////-d:FSharpStation1612100328464 -d:NETSTANDARD20 -d:NOFSROOTx -d:WEBSHARPER
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Reflection.Metadata\lib\netstandard2.0"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Collections.Immutable\lib\netstandard2.0"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades\netstandard.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\System.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\FSharp.Compiler.Service.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Core.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Web.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Sitelets.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Main.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.UI.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Compiler.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.JQuery.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Compiler.FSharp.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos/WasmRepo/wasm-sdk/framework\WebAssembly.Bindings.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\System.dll"
/// Root namespace for all code
//#define FSharpStation1612100328464
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
    
    //#define NOFSROOTx
    //#define NETSTANDARD20
    //#define WEBSHARPER
    
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\Facades\netstandard.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\System.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\FSharp.Compiler.Service.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Core.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Web.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Sitelets.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Main.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.UI.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Compiler.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.JQuery.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\website\WASM\publish\dlls\WebSharper.Compiler.FSharp.dll"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Reflection.Metadata\lib\netstandard2.0"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\System.Collections.Immutable\lib\netstandard2.0"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos/WasmRepo/wasm-sdk/framework\WebAssembly.Bindings.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\..\Repos\WasmRepo\wasm-sdk\wasm-bcl\wasm\System.dll" 
    
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\Modules\bin\FShUIAssemblyData.dll"
    
    module Binary =
        open WebSharper.Core
        open WebSharper.Compiler
    
        type Dictionary<'T1,'T2> = System.Collections.Generic.Dictionary<'T1,'T2>
        type IDictionary<'T1,'T2> = System.Collections.Generic.IDictionary<'T1,'T2>
        type ISet<'T> = System.Collections.Generic.ISet<'T>
        type HashSet<'T> = System.Collections.Generic.HashSet<'T>
        type KeyValuePair<'T1,'T2> = System.Collections.Generic.KeyValuePair<'T1,'T2>
    
        exception NoEncodingException of System.Type with
            override this.ToString() =
                System.String.Format("Failed to encode {0} to binary.",
                    this.Data0)
    
        [<AbstractClass>]
        type Encoder() =
            abstract Decode : System.IO.BinaryReader -> obj
            abstract Encode : System.IO.BinaryWriter * obj -> unit
            abstract Type : System.Type
    
        [<AbstractClass>]
        type Encoder<'T>() =
            inherit Encoder()
            abstract Read : System.IO.BinaryReader -> 'T
            abstract Write : System.IO.BinaryWriter * 'T -> unit
            override this.Decode r = this.Read r :> _
            override this.Encode(w, x: obj) = this.Write(w, x :?> _)
            override this.Type = typeof<'T>
    
        /// Implements user-defined binary encoding detection.  The user is expected
        /// to provide an instance Encode and a static Decode methods, for example:
        ///
        ///     type T(x: int) =
        ///         member this.Encode(d: System.IO.BinaryWriter) = w.Write x
        ///         static member Decode(r: System.IO.BinaryReader) = T(r.ReadInt32())
        ///
        module private Custom =
    
            type private DecodeDelegate<'T> =
                delegate of System.IO.BinaryReader -> 'T
    
            type private EncodeDelegate<'T> =
                delegate of 'T * System.IO.BinaryWriter -> unit
    
            [<AbstractClass>]
            type private DecodeAdapter() =
                abstract member Adapt : obj -> (System.IO.BinaryReader -> obj)
    
            [<AbstractClass>]
            type private EncodeAdapter() =
                abstract member Adapt : obj -> (System.IO.BinaryWriter -> obj -> unit)
    
            [<Sealed>]
            type private DecodeAdapter<'T>() =
                inherit DecodeAdapter()
    
                member this.Adapt(del: DecodeDelegate<'T>) =
                    fun r -> del.Invoke r
    
                override this.Adapt(del: obj) =
                    let f = this.Adapt(unbox del)
                    fun r -> box (f r)
    
            [<Sealed>]
            type private EncodeAdapter<'T>() =
                inherit EncodeAdapter()
    
                member this.Adapt(del: EncodeDelegate<'T>) =
                    fun w (x: obj) -> del.Invoke(unbox x, w)
    
                override this.Adapt(del: obj) =
                    this.Adapt(unbox del)
    
            type private BF = System.Reflection.BindingFlags
    
            let private allInstance = BF.Public ||| BF.NonPublic ||| BF.Instance
    
            let private allStatic = BF.Public ||| BF.NonPublic ||| BF.Static
    
            let private guard f =
                try f () with
                | :? System.ArgumentException
                | :? System.Reflection.AmbiguousMatchException -> None
    
            [<Sealed>]
            type private CustomEncoder(t, encode, decode) =
                inherit Encoder()
                override this.Decode r = decode r
                override this.Encode(w, x) = encode w x
                override this.Type = t
    
            let GetEncoder (t: System.Type) : option<Encoder> =
                guard <| fun () ->
                    let m1 = t.GetMethod("Encode", allInstance)
                    if m1 = null then None else
                        let k = typedefof<EncodeDelegate<_>>.MakeGenericType(t)
                        let d = System.Delegate.CreateDelegate(k, m1)
                        let a =
                            typedefof<EncodeAdapter<_>>.MakeGenericType(t)
                            |> System.Activator.CreateInstance :?> EncodeAdapter
                        let encode = a.Adapt d
                        let m2 = t.GetMethod("Decode", allStatic)
                        if m2 = null then None else
                            let k = typedefof<DecodeDelegate<_>>.MakeGenericType(t)
                            let d = System.Delegate.CreateDelegate(k, m2)
                            let a =
                                typedefof<DecodeAdapter<_>>.MakeGenericType(t)
                                |> System.Activator.CreateInstance :?> DecodeAdapter
                            let decode = a.Adapt d
                            Some (CustomEncoder(t, encode, decode) :> _)
    
        [<Sealed>]
        type EncodingException =
            inherit exn
    
            new (message: string) =
                { inherit exn(message) }
    
            new (message: string, inner: exn) =
                { inherit exn(message, inner) }
    
        [<Sealed>]
        type BooleanEncoder() =
            inherit Encoder<bool>()
            override this.Read r = r.ReadBoolean()
            override this.Write(w, x) = w.Write x
    
        [<Sealed>]
        type ByteEncoder() =
            inherit Encoder<byte>()
            override this.Read r = r.ReadByte()
            override this.Write(w, x) = w.Write x
    
        [<Sealed>]
        type CharEncoder() =
            inherit Encoder<char>()
            override this.Read r = r.ReadChar()
            override this.Write(w, x) = w.Write x
    
        [<Sealed>]
        type DecimalEncoder() =
            inherit Encoder<decimal>()
            override this.Read r = r.ReadDecimal()
            override this.Write(w, x) = w.Write x
    
        [<Sealed>]
        type DoubleEncoder() =
            inherit Encoder<double>()
            override this.Read r = r.ReadDouble()
            override this.Write(w, x) = w.Write x
    
        [<Sealed>]
        type Int16Encoder() =
            inherit Encoder<int16>()
            override this.Read r = r.ReadInt16()
            override this.Write(w, x) = w.Write x
    
        [<Sealed>]
        type Int32Encoder() =
            inherit Encoder<int32>()
            override this.Read r = r.ReadInt32()
            override this.Write(w, x) = w.Write x
    
        type Int64Encoder() =
            inherit Encoder<int64>()
            override this.Read r = r.ReadInt64()
            override this.Write(w, x) = w.Write x
    
        [<Sealed>]
        type SByteEncoder() =
            inherit Encoder<sbyte>()
            override this.Read r = r.ReadSByte()
            override this.Write(w, x) = w.Write x
    
        [<Sealed>]
        type SingleEncoder() =
            inherit Encoder<single>()
            override this.Read r = r.ReadSingle()
            override this.Write(w, x) = w.Write x
    
        [<Sealed>]
        type StringEncoder() =
            inherit Encoder<string>()
            override this.Read r = r.ReadString()
            override this.Write(w, x) = w.Write x
    
        [<Sealed>]
        type UInt16Encoder() =
            inherit Encoder<uint16>()
            override this.Read r = r.ReadUInt16()
            override this.Write(w, x) = w.Write x
    
        [<Sealed>]
        type UInt32Encoder() =
            inherit Encoder<uint32>()
            override this.Read r = r.ReadUInt32()
            override this.Write(w, x) = w.Write x
    
        [<Sealed>]
        type UInt64Encoder() =
            inherit Encoder<uint64>()
            override this.Read r = r.ReadUInt64()
            override this.Write(w, x) = w.Write x
    
        let basicEncoders =
            let d = Dictionary<System.Type,Encoder>(14)
            d.[typeof<bool>] <- BooleanEncoder()
            d.[typeof<byte>] <- ByteEncoder()
            d.[typeof<char>] <- CharEncoder()
            d.[typeof<double>] <- DoubleEncoder()
            d.[typeof<decimal>] <- DecimalEncoder()
            d.[typeof<int16>] <- Int16Encoder()
            d.[typeof<int32>] <- Int32Encoder()
            d.[typeof<int64>] <- Int64Encoder()
            d.[typeof<sbyte>] <- SByteEncoder()
            d.[typeof<single>] <- SingleEncoder()
            d.[typeof<uint16>] <- UInt16Encoder()
            d.[typeof<uint32>] <- UInt32Encoder()
            d.[typeof<uint64>] <- UInt64Encoder()
            d.[typeof<string>] <- StringEncoder()
            d
    
        type FST = Reflection.FSharpType
        type FSV = Reflection.FSharpValue
    
        let flags =
            System.Reflection.BindingFlags.Public
            ||| System.Reflection.BindingFlags.NonPublic
    
        [<Sealed>]
        type ArrayEncoder(t: System.Type, re: System.Type -> Encoder) =
            inherit Encoder()
            let eT = t.GetElementType()
            let enc : Encoder = re eT
    
            override this.Decode r =
                let k = r.ReadInt32()
                let res = System.Array.CreateInstance(eT, k)
                for i in 0 .. k - 1 do
                    res.SetValue(enc.Decode r, i)
                res :> obj
    
            override this.Encode(w, o) =
                let o = o :?> System.Array
                w.Write o.Length
                for x in o do
                    enc.Encode(w, x)
    
            override this.Type = t
    
        [<Sealed>]
        type RecordEncoder(t: System.Type, re: System.Type -> Encoder) =
            inherit Encoder()
            let mk = FSV.PreComputeRecordConstructor(t, flags)
            let fields = FST.GetRecordFields(t, flags)
            let encoders =
                fields
                |> Array.map (fun f -> re f.PropertyType)
            let reader = FSV.PreComputeRecordReader(t, flags)
    
            override this.Decode r =
                encoders
                |> Array.map (fun enc -> enc.Decode r)
                |> mk
    
            override this.Encode(w, x) =
                (encoders, reader x)
                ||> Array.iter2 (fun enc x -> enc.Encode(w, x))
    
            override this.Type = t
    
        [<Sealed>]
        type TupleEncoder(t: System.Type, re: System.Type -> Encoder) =
            inherit Encoder()
            let elements = FST.GetTupleElements t
            let read = FSV.PreComputeTupleReader t
            let mk = FSV.PreComputeTupleConstructor t
            let fields = Array.map re elements
    
            override this.Decode r =
                fields
                |> Array.map (fun e -> e.Decode r)
                |> mk
    
            override this.Encode(w, x) =
                (fields, read x)
                ||> Array.iter2 (fun enc x -> enc.Encode(w, x))
    
            override this.Type = t
    
        [<Sealed>]
        type UnionEncoder(t: System.Type, re: System.Type -> Encoder) =
            inherit Encoder()
            let tagReader = FSV.PreComputeUnionTagReader(t, flags)
            let cases = FST.GetUnionCases(t, flags)
            let fields =
                cases
                |> Array.map (fun c ->
                    c.GetFields()
                    |> Array.map (fun f -> re f.PropertyType))
            let readers =
                cases
                |> Array.map (fun c -> FSV.PreComputeUnionReader(c, flags))
            let constructors =
                cases
                |> Array.map (fun c -> FSV.PreComputeUnionConstructor(c, flags))
    
            override this.Decode r =
                let tag = int (r.ReadByte())
                fields.[tag]
                |> Array.map (fun f -> f.Decode r)
                |> constructors.[tag]
    
            override this.Encode(w, x) =
                let tag = tagReader x
                w.Write (byte tag)
                (fields.[tag], readers.[tag] x)
                ||> Array.iter2 (fun enc x -> enc.Encode(w, x))
    
            override this.Type = t
    
        [<AbstractClass>]
        type HashedProcessor() =
            abstract member FromObject : obj -> obj
            abstract member RunOnValue : (obj -> unit) -> obj -> unit
    
        [<AbstractClass>]
        type DictionaryProcessor() =
            abstract member FromArray : array<KeyValuePair<obj,obj>> -> obj
            abstract member GetLength : obj -> int
            abstract member Iterate : (obj -> obj -> unit) -> obj -> unit
    
        [<AbstractClass>]
        type SequenceProcessor() =
            abstract member FromArray : obj [] -> obj
            abstract member GetLength : obj -> int
            abstract member Iterate : (obj -> unit) -> obj -> unit
    
        [<Sealed>]
        type HashedProcessor<'T when 'T : equality and 'T : comparison>() =
            inherit HashedProcessor()
            override this.FromObject x =  
                Hashed(x :?> 'T) |> box
            override this.RunOnValue f x =
                (x :?> Hashed<'T>).Value |> f
    
        [<Sealed>]
        type DictionaryProcessor<'T1,'T2 when 'T1 : comparison>() =
            inherit DictionaryProcessor()
    
            override this.FromArray x =
                let d = Dictionary(x.Length)
                for KeyValue (k, v) in x do
                    d.[k :?> 'T1] <- v :?> 'T2
                box d
    
            override this.GetLength(dict: obj) =
                (dict :?> IDictionary<'T1,'T2>).Count
    
            override this.Iterate f x =
                for KeyValue (k, v) in (x :?> IDictionary<'T1,'T2>) do
                    f (box k) (box v)
    
        [<Sealed>]
        type HashSetProcessor<'T when 'T : comparison>() =
            inherit SequenceProcessor()
    
            override this.FromArray(s: array<obj>) =
                HashSet<'T>(Array.map unbox s) |> box
    
            override this.GetLength(x: obj) =
                (x :?> ISet<'T>).Count
    
            override this.Iterate f x =
                for e in (x :?> ISet<'T>) do
                    f (box x)
    
        [<Sealed>]
        type ListProcessor<'T>() =
            inherit SequenceProcessor()
    
            override this.FromArray(x: array<obj>) =
                List.ofArray<'T> (Array.map unbox x) |> box
    
            override this.GetLength(x: obj) =
                (x :?> list<'T>).Length
    
            override this.Iterate f x =
                for e in (x :?> list<'T>) do
                    f (box e)
    
        [<Sealed>]
        type MapProcessor<'T1,'T2 when 'T1 : comparison>() =
            inherit DictionaryProcessor()
    
            override this.FromArray x =
                x
                |> Array.map (fun (KeyValue (k, v)) -> (k :?> 'T1, v :?> 'T2))
                |> Map.ofArray
                |> box
    
            override this.GetLength(x: obj) =
                (x :?> Map<'T1,'T2>).Count
    
            override this.Iterate f x =
                for KeyValue (k, v) in (x :?> Map<'T1,'T2>) do
                    f (box k) (box v)
    
        [<Sealed>]
        type SetProcessor<'T when 'T : comparison>() =
            inherit SequenceProcessor()
    
            override this.FromArray(x: obj []) =
                x
                |> Array.map (fun x -> x :?> 'T)
                |> Set.ofArray
                |> box
    
            override this.GetLength(x: obj) =
                (x :?> Set<'T>).Count
    
            override this.Iterate f x =
                for e in (x :?> Set<'T>) do
                    f (box e)
    
        [<Sealed>]
        type HashedEncoder<'T when 'T :> HashedProcessor>
            (t: System.Type, derive: System.Type -> Encoder) =
            inherit Encoder()
            let args = t.GetGenericArguments()
            let valueType = args.[0]
            let value = derive valueType
            
            let hP : HashedProcessor =
                typedefof<'T>.MakeGenericType(valueType)       
                |> System.Activator.CreateInstance
                |> unbox
    
            override this.Decode r =
                hP.FromObject (value.Decode r)     
    
            override this.Encode (w, x) =
                hP.RunOnValue (fun v -> value.Encode(w, v)) x
    
            override this.Type = t
    
    
        [<Sealed>]
        type DictionaryEncoder<'T when 'T :> DictionaryProcessor>
            (t: System.Type, derive: System.Type -> Encoder) =
            inherit Encoder()
            let args = t.GetGenericArguments()
            let keyType = args.[0]
            let valueType = args.[1]
            let key = derive keyType
            let value = derive valueType
    
            let dP : DictionaryProcessor =
                typedefof<'T>.MakeGenericType(keyType, valueType)
                |> System.Activator.CreateInstance
                |> unbox
    
            override this.Decode r =
                let k = r.ReadInt32()
                Array.init k (fun _ ->
                    let key = key.Decode r
                    let value = value.Decode r
                    KeyValuePair(key, value))
                |> dP.FromArray
    
            override this.Encode(w, x) =
                w.Write (dP.GetLength x)
                x
                |> dP.Iterate (fun k v ->
                    key.Encode(w, k)
                    value.Encode(w, v))
    
            override this.Type = t
    
        [<Sealed>]
        type SequenceEncoder<'T when 'T :> SequenceProcessor>
            (t: System.Type, derive: System.Type -> Encoder) =
            inherit Encoder()
            let args = t.GetGenericArguments()
            let elType = args.[0]
            let el = derive elType
    
            let sP : SequenceProcessor =
                typedefof<'T>.MakeGenericType(elType)
                |> System.Activator.CreateInstance
                |> unbox
    
            override this.Decode r =
                let k = r.ReadInt32()
                Array.init k (fun _ -> el.Decode r)
                |> sP.FromArray
    
            override this.Encode(w, x) =
                w.Write (sP.GetLength x)
                x
                |> sP.Iterate (fun e ->
                    el.Encode(w, e))
    
            override this.Type = t
    
        let getSpecializedEncoder (re: System.Type -> Encoder) (t: System.Type) =
            let d = t.GetGenericTypeDefinition()
            if d = typedefof<Hashed<_>> then
                Some (HashedEncoder<HashedProcessor<_>>(t, re) :> Encoder)
            elif d = typedefof<Map<_,_>> then
                Some (DictionaryEncoder<MapProcessor<_,_>>(t, re) :> _)
            elif d = typedefof<Set<_>> then
                Some (SequenceEncoder<SetProcessor<_>>(t, re) :> _)
            elif d.IsAssignableFrom(typedefof<IDictionary<_,_>>) then
                Some (DictionaryEncoder<DictionaryProcessor<_,_>>(t, re) :> Encoder)
            elif d.IsAssignableFrom(typedefof<ISet<_>>) then
                Some (SequenceEncoder<HashSetProcessor<_>>(t, re) :> _)
            elif d = typedefof<List<_>> then
                Some (SequenceEncoder<ListProcessor<_>>(t, re) :> _)
            else None
    
        let getAlgebraicEncoder (re: System.Type -> Encoder) (t: System.Type) =
            if t.IsArray && t.GetArrayRank() = 1 then ArrayEncoder(t, re) :> Encoder
            elif FST.IsTuple t then TupleEncoder(t, re) :> _
            elif FST.IsUnion(t, flags) then UnionEncoder(t, re) :> _
            elif FST.IsRecord (t, flags) then RecordEncoder(t, re) :> _
            else raise (NoEncodingException t)
    
        let getEncoder (re: System.Type -> Encoder) (t: System.Type) =
            if t.IsPrimitive then
                if t = typeof<nativeint> || t = typeof<unativeint> then
                    raise (NoEncodingException t)
                basicEncoders.[t]
            elif t = typeof<string> || t = typeof<decimal> then
                basicEncoders.[t]
            elif t.IsEnum then 
                basicEncoders.[System.Enum.GetUnderlyingType(t)]
            else
                match Custom.GetEncoder t with
                | Some e -> e
                | None ->
                    if t.IsGenericType then
                        match getSpecializedEncoder re t with
                        | Some e -> e
                        | None -> getAlgebraicEncoder re t
                    else getAlgebraicEncoder re t
        [<Sealed>]
        type RecursiveEncoder(cache: Dictionary<_,Encoder>, t) =
            inherit Encoder()
            let self =
                lazy
                match cache.TryGetValue t with
                | true, e -> e
                | _ -> raise (NoEncodingException t)
            override this.Decode r = self.Value.Decode r
            override this.Encode(w, x) = self.Value.Encode(w, x)
            override this.Type = t
    
        let rec getCachedEncoder (cache: Dictionary<_,_>) t =
            match cache.TryGetValue t with
            | true, e -> e
            | _ ->
                cache.[t] <- RecursiveEncoder(cache, t) :> _
                let e = getEncoder (getCachedEncoder cache) t
                cache.[t] <- e
                e
        let enc   = getCachedEncoder (Dictionary()) typeof<Metadata.Info>
    
        [<Sealed>]
        type InterningReader(input: System.IO.Stream, reader: System.IO.BinaryReader) =
            inherit System.IO.BinaryReader(input)
    
            let cache =
                let d = Dictionary()
                for i in 0 .. reader.ReadInt32() - 1 do
                    let s = reader.ReadString()
                    d.[uint16 i] <- s
                d
    
            override this.ReadString() =
                cache.[this.ReadUInt16()]
    
    module WsTranslator =
    //    open FsRoot.Library.FShUI_AssemblyData
        open System
        open System.IO
        open Microsoft.FSharp.Compiler.SourceCodeServices
    
        [< WebSharper.JavaScript >]
        type Dependency<'T>(def:'T) = member val D = def with get, set
    
        let  fsharpChecker = lazy (
                printfn "Loading FCS. Hold on, this will take a while..."
                let checker = FSharpChecker.Create( keepAssemblyContents = true)
                printfn "FCS loaded!"
                checker
            )
    
        let startLoading (l:Lazy<_>) = ()
            //async {
            //    do! Async.Sleep 40
            //    let _ = l.Value
            //    ()
            //} |> Async.Start
    
        startLoading fsharpChecker
    
        open WebSharper
        open WebSharper.Core
        open WebSharper.Compiler.Translator
    
        module RM = WebSharper.Core.Remoting
    
        let dirWasm (d:string) =
            let rec dir (d:string) =
                try 
                    if d = "/proc/self/fd" then Console.WriteLine "skip /proc/self/fd"  else
                    for file in Directory.GetFiles(d, "*") do
                        printfn "F: %s" file  
                    for subdir in Directory.EnumerateDirectories d do
                        printfn "D: %s" subdir
                        dir             subdir
                with e -> Console.WriteLine e.Message 
            printfn "dirWasm:"
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
                    yield fromDll2Meta f |> function MetaFileName s -> s
            ] |> Seq.toArray
    
        /// works on Interp mode but not AOT or AOTInterp (now it works in AOTInterp)
        /// takes almost 15 seconds to decompress and load
        let getMetaInfoFromAssemblyO = Dependency (fun (DllFileName f) ->FrontEnd.ReadFromFile FrontEnd.ReadOptions.FullMetadata f)
    
        let decode (stream: System.IO.Stream) : obj =
            use reader = new System.IO.BinaryReader(stream)
            printfn "version: %s, AQN = %s" <| reader.ReadString() <| reader.ReadString()
            use r = new Binary.InterningReader(stream, reader)
            Binary.enc.Decode r
    
        let getMetaInfoFromMetaO (MetaFileName fname) = // this runs in AOTInterp
            try use stream = System.IO.File.OpenRead fname
                decode stream :?> Metadata.Info
                |> Some
            with e -> 
                e.ToString() |> Console.WriteLine
                None
    
        let readMetadata (dllToMetaInfoO : DllFileName -> Metadata.Info option) files =
            let metas = files |> Seq.choose dllToMetaInfoO         |> Seq.cache
            let deps  = metas |> Seq.map (fun m -> m.Dependencies) |> WebSharper.Core.DependencyGraph.Graph.NewWithDependencyAssemblies
            { WebSharper.Core.Metadata.Info.UnionWithoutDependencies metas with Dependencies = deps.GetData() }
    
        let metadataL = lazy (
            printfn "Loading Dlls metadata. Hold on, this will take a while..."
            let meta = justDlls |> readMetadata getMetaInfoFromAssemblyO.D
            printfn "Metadata loaded!"
            meta
        )
    
        // Inject this one for AOTInterp (works now with AOT)
        // This one is a bit faster because is already decompressed. It took 8 seconds
        getMetaInfoFromAssemblyO.D <- fromDll2Meta >> getMetaInfoFromMetaO
    
        let translateFromAst projectName metadata ast =
            let macroType = typedefof<WebSharper.UI.Macros.TextView> // necessary so the linker keeps the macros
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
            (Some js )
            , comp.Errors, comp.Warnings
    
        let parseAndCheckProject projectName opts code = async {
            let  projOpts = fsharpChecker.Value.GetProjectOptionsFromCommandLineArgs(projectName, opts)
            File.WriteAllText(projOpts.OtherOptions.[1], code)
            let! results = fsharpChecker.Value.ParseAndCheckProject projOpts
            return results
        }
    
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
                    let wsRes =
                        if results.HasCriticalErrors then None else
                        startLoading metadataL
                        translateFromAst "TestCompile" metadataL.Value results
                        |> Some
                    Console.WriteLine "WsErrors:"
                    match wsRes with
                    | None -> Console.WriteLine("No translation")
                    | Some(jsO, errs, warns) ->
                    for err in errs do
                        Console.WriteLine("WsError: "   + err.ToString())
                    for warn in warns do
                        Console.WriteLine("WsWarning: " + warn.ToString())
                    jsO |> Option.iter Console.WriteLine
                with e ->
                    printfn "*************\n%A\n*************" <| e
            }
    
        module Remoting =
            open WebAssembly
            open WebAssembly.Core
            open WebAssembly.Host
    
            let (?) o prop = Console.WriteLine("?" + prop); (unbox<JSObject> o).GetObjectProperty prop
            let remoting   = lazy (Runtime.GetGlobalObject()?FsRoot?LibraryJS?WsTranslatorLoader?Remoting |> unbox<JSObject>)
            let returnValue (md : string, v : string) = 
                try       remoting.Force().Invoke("returnValue", md, v) |> ignore
                with e -> printfn "Could not return value for md %s = %s" md v
                          printfn "%A" e
            let returnExn   (md : string, e : string) = 
                try       remoting.Force().Invoke("returnExn"  , md, e) |> ignore
                with _ -> printfn "Exception md = %s\n%s "md e
            let wsServer   = lazy (
                printfn "Loading remoting server. Hold on, this will take a while..."
                let srv = RM.Server.Create WebSharper.Web.Shared.Metadata WebSharper.Web.Shared.Json
                printfn "Remoting server loaded!"
                srv
            )
            startLoading wsServer
    
        let runRpc(header, data) = 
            async {
                let  wsReq    = {
                    RM.Request.Body    = data
                    RM.Request.Headers = 
                        function
                        | "content-type"     -> Some "application/json"
                        | "x-websharper-rpc" -> Some header
                        | _  -> None
                }
                try
                  //do  checkGZip()   // this fails in AOT and AOT-interp
                  //do  dirWasm "/"   // this works
                  //do! testCompile() // this fails in AOT and AOT-interp
                    let! wsResp = Remoting.wsServer.Value.HandleRequest wsReq
                    Remoting.returnValue(header, wsResp.Content)
                with e -> 
                    Remoting.returnExn  (header, sprintf "%A" e)
            } |> Async.Start
    
        module Rpc =
    
            [< Remote >]
            let parseAndCheckProjectRpc projectName opts code = async {
                let! results = parseAndCheckProject projectName opts code
                return results.Errors, results.DependencyFiles, results.HasCriticalErrors
            }
    
            [< Remote >]
            let translateFsToJsRpc projectName opts code = async {
                let! results = parseAndCheckProject projectName opts code
                let wsRes =
                    if results.HasCriticalErrors then None else
                    startLoading metadataL
                    translateFromAst projectName metadataL.Value results
                    |> Some
                return results.Errors, wsRes
            }
    
            [< Remote >]
            let dirRpc (d:string) = async { dirWasm d }
    
    
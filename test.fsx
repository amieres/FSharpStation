#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
// # 1 "required for nowarns to work"
#nowarn "1182"
#nowarn "40"
#nowarn "86"
// # 1 @"bf864f3c-1370-42f2-ac8a-565a604892e8 FSSGlobal.fsx"
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

// # 1 @"edbbf11e-4698-4e33-af0c-135d5b21799b F# Code.fsx"
// Code to be evaluated using FSI: `Evaluate F#`
  // # 1 @"(2)7c4a82bc-58cd-48a7-bd7e-79de148a1cf0 Useful.fsx"
  #if WEBSHARPER
  [<WebSharper.JavaScript>]
  #endif
  module Useful =
    // # 1 @"(4)657c8f34-c917-4659-825d-c9ead206efcf swap.fsx"
    let inline swap f a b = f b a
    
  // # 1 @"(2)002fe5c4-6032-4259-a8dc-9afa8f5f7742 Calculation Editor.fsx"
  module CalcEditor =
    // # 1 @"(4)4c64379b-83c7-4785-874d-99271ccf1859 Calculations.fsx"
    //#r "..\packages\FSharpPlus\lib\net40\FSharpPlus.dll"
    //open FSharpPlus
    open Useful
    open System

    module CalculationModel =

        type DimType =
            | DtDataType
            | DtTime
            | DtVersion
            | DtTCalc
            | DtCalc
            | DtMeasure
            | DtOther
        
        type CubeType =
            | CtOther
            | CtCalc
            | CtFreeze
        
        type AttType =
            | AtString
            | AtNumber
        
        type ElmType =
            | EtString
            | EtNumber
        
        type ModId = ModId of Guid
        type AttId = AttId of Guid
        type ElmId = ElmId of Guid
        type CubId = CubId of Guid
        type DimId = DimId of Guid
        type CalId = CalId of Guid
        type ForId = ForId of Guid
        type RulId = RulId of Guid
        
        type Attribute = {
            attId                  : AttId
            mutable attName        : string
            mutable attType        : AttType
            mutable attTableNum    : int
        }
        
        type Element = {
            elmId                  : ElmId
            elmDim                 : DimId
            mutable elmType        : ElmType
            mutable elmName        : string
            mutable elmDescription : string
            mutable elmAttributes  : Map<AttId, string> 
            mutable elmParents     : ElmId     []
        } 
        with
            static member New name = 
              {
                elmId          = ElmId <| Guid.NewGuid()
                elmDim         = DimId <| Guid.NewGuid()
                elmType        = EtString
                elmName        = name
                elmDescription = name
                elmAttributes  = Map.empty
                elmParents     = [||]
              }
        
        type Dimension = {
            dimId                  : DimId
            mutable dimName        : string
            mutable dimPrefix      : string
            mutable dimType        : DimType
            mutable defaultElm     : ElmId     option
            mutable dimElements    : Element   []
            mutable dimAttributes  : Attribute []
            isCalcDim              : bool
        } with
            member this.GetElement       eId = this.dimElements |> Seq.find (fun e -> e.elmId = eId)
        
        type Operator = 
            | OpAdd      
            | OpSubtract 
            | OpMultiply 
            | OpDivide   
            | OpEQ    
            | OpNE
            | OpGT       
            | OpGE       
            | OpLT       
            | OpLE       
            | OpAnd      
            | OpOr           
        
        type Function = Function
        
        type ElmReference =
            | ElemFixed   of DimId * ElmId
            | ElemDynamic of DimId * ExpressionText
          with
            member this.DimId =
                match this with
                | ElemFixed  (id, _)
                | ElemDynamic(id, _) -> id
                
        and  ExpressionText =
            | ExtNA
            | ExtStet
            | ExtSlice      of Slice
            | ExtString     of string
            | ExtDimElement of DimId
            | ExtDimName    of DimId
            | ExtFunction   of Function * ExpressionAny []
            | ExtIf         of ExpressionNumber * ExpressionText   * ExpressionText
            | ExtSubSt      of ExpressionText   * ExpressionNumber * ExpressionNumber
        
        and  ExpressionNumber =
            | ExnNA
            | ExnStet
            | ExnSlice      of Slice
            | ExnNumber     of float
            | ExnOperationN of Operator * ExpressionNumber * ExpressionNumber
            | ExnOperationT of Operator * ExpressionText   * ExpressionText
            | ExnOperationI of Operator * ExpressionAny    * ExpressionAny
            | ExnFunction   of Function * ExpressionAny []
            | ExnIf         of ExpressionNumber * ExpressionNumber * ExpressionNumber
            | ExnMax        of ExpressionNumber * ExpressionNumber
            | ExnMin        of ExpressionNumber * ExpressionNumber
            | ExnDeIsChild  of ExpressionText   * ExpressionText   * ExpressionText  
            
        and ExpressionAny =    
            | ExiNA
            | ExiStet
            | ExiSlice      of Slice
            | ExNumeric     of ExpressionNumber
            | ExText        of ExpressionText
            | ExiIf         of ExpressionNumber * ExpressionAny * ExpressionAny
            
        and  Slice = {
            sliDims     : Map<DimId, ElmReference>   
            calculation : CalId option
            cube        : CubId option
        } with 
            static member New ds = {
                     sliDims       = ds |> Seq.map (fun (dr:ElmReference) -> dr.DimId, dr) |> Map 
                     calculation   = None
                     cube          = None
            }
            static member ForAll = {
                     sliDims       = Map.empty
                     calculation   = None
                     cube          = None
            }
        
        
        type ForType = 
            | ForBase
            | ForConsolidated
            | ForAll
        
        type Formula = {
            forId                  : ForId
            mutable forDestination : ElmReference list
            mutable forDescription : string
            mutable forExpression  : ExpressionAny
            mutable forType        : ForType
        }
        
        type Calculation = {
            calId                  : CalId
            mutable calName        : string
            mutable calDescription : string
            mutable format         : string
            mutable isText         : bool
            mutable isInput        : bool
            mutable isBalance      : bool
            mutable calDims        : Set<DimId>
            mutable calFormulas    : Formula []
            mutable cube           : CubId   option
            properties             : System.Collections.Generic.Dictionary<string, string>
        } with
            member this.Slice : Slice = 
                 {
                     sliDims       = Map.empty
                     calculation   = Some this.calId
                     cube          = None
                 }
            member this.Type = if this.isInput then "INPUT" else "CALC"
        
        type RuleKey = 
            | RuleKey     of RulId
            | CalcRuleKey of CalId
            | FormulaKey  of ForId
            | ForTextKey  of ForId
            | ActualRuleKey 
            | InputRuleKey
            | ConsolidatedRuleKey
        
        type Cube = {
            cubId                  : CubId
            mutable cubName        : string
            mutable cubRules       : Map<RuleKey, Rule option>
            cubDims                : DimId []
            measureDim             : DimId option
            cubType                : CubeType
        } with
            member this.Slice : Slice = 
                 {
                     sliDims       = Map.empty
                     calculation   = None
                     cube          = Some this.cubId
                 }
            member this.ContainsDim dimId = this.cubDims |> Seq.contains dimId
            member this.IsCalcCube        = this.cubType = CtCalc
        
        and  Rule = {
            rulId                  : RulId
            rulSourceId            : IComparable
            mutable rulDescription : string
            mutable rulDestination : ElmReference list
            mutable rulExpression  : ExpressionAny
            mutable rulType        : ForType
            mutable rulOrder       : string
        }
        
        type Model = {
            modId                   : ModId
            mutable server          : string
            mutable modDims         : Dimension   []
            mutable modCubes        : Cube        []
            mutable modCalculations : Calculation []
        } 
        with
            member this.GetDim        dId   = this.modDims         |> Seq.find    (fun d   ->   d.dimId   =    dId)
            member this.GetCalc       cId   = this.modCalculations |> Seq.find    (fun c   ->   c.calId   =    cId)
            member this.GetCube     cubId   = this.modCubes        |> Seq.tryFind (fun cub -> cub.cubId   =  cubId)
            member this.PickCube       ct   = this.modCubes        |> Seq.tryPick (fun c   ->   if c.cubType = ct then Some c else None)
            member this.PickDim        dt   = this.modDims         |> Seq.tryPick (fun d   ->   if d.dimType = dt then Some d else None)
            member this.PickCalc       cn   = this.modCalculations |> Seq.tryPick (fun c   ->   if c.calName = cn then Some c else None)
            member this.FreezeCube          = this.PickCube CtFreeze
            member this.TCalcDim            = this.PickDim  DtTCalc
            member this.DataTypeDim         = this.PickDim  DtDataType
            member this.TimeDim             = this.PickDim  DtTime    
            member this.VersionDim          = this.PickDim  DtVersion 
            member this.IsActualCalc        = this.PickCalc "IsActual"
            member this.GetCalcCube dims    = 
                this.modCubes 
                |> Seq.filter  (fun cub -> cub.IsCalcCube   ) 
                |> Seq.tryFind (fun cub -> 
                    cub.cubDims 
                    |> Seq.filter (fun d -> Some d <> cub.measureDim) 
                    |> Set = dims )
            member this.withDims f =
                this.TCalcDim                         |> swap Option.bind <| fun tCalcDim    ->
                this.DataTypeDim                      |> swap Option.bind <| fun dataTypeDim ->
                f tCalcDim dataTypeDim
        
        let model = 
          {
            modId           = ModId <| Guid.NewGuid()
            server          = @"local\Budget"
            modDims         = [||]
            modCubes        = [||]
            modCalculations = [||]
          }
        
        //#nowarn "86"
        
        type HelperTypeN = HelperTypeN with
            static member (&%>)  (HelperTypeN, a :     bool             ) : ExpressionNumber = ExnNumber <| if    a then 1.0 else 0.0
            static member (&%>)  (HelperTypeN, a :     int              ) : ExpressionNumber = ExnNumber <| float a
            static member (&%>)  (HelperTypeN, a :     float            ) : ExpressionNumber = ExnNumber          a
            static member (&%>)  (HelperTypeN, a :     Slice            ) : ExpressionNumber = ExnSlice           a
            static member (&%>)  (HelperTypeN, a :     Calculation      ) : ExpressionNumber = ExnSlice           a.Slice
            static member (&%>)  (HelperTypeN, a :     ExpressionNumber ) : ExpressionNumber =                    a
            
        let inline toExpN v : ExpressionNumber = HelperTypeN &%>  v
        
        type HelperTypeT = HelperTypeT with
            static member (&&>)  (HelperTypeT, a :     string           ) : ExpressionText   = ExtString          a 
            static member (&&>)  (HelperTypeT, a :     Dimension        ) : ExpressionText   = ExtDimName         a.dimId 
            static member (&&>)  (HelperTypeT, a :     Slice            ) : ExpressionText   = ExtSlice           a
            static member (&&>)  (HelperTypeT, a :     Calculation      ) : ExpressionText   = ExtSlice           a.Slice
            static member (&&>)  (HelperTypeT, a :     ExpressionText   ) : ExpressionText   =                    a
        
        let inline toExpT  v : ExpressionText = HelperTypeT &&>  v
        
        type HelperTypeA = HelperTypeA with
            static member (&>>)  (HelperTypeA, a :     ExpressionNumber) : ExpressionAny = ExNumeric          a 
            static member (&>>)  (HelperTypeA, a :     ExpressionText  ) : ExpressionAny = ExText             a
            static member (&>>)  (HelperTypeA, a :     Slice           ) : ExpressionAny = ExiSlice           a
            static member (&>>)  (HelperTypeA, a :     Calculation     ) : ExpressionAny = ExiSlice           a.Slice
            static member (&>>)  (HelperTypeA, a :     bool            ) : ExpressionAny = toExpN             a |> ExNumeric
            static member (&>>)  (HelperTypeA, a :     int             ) : ExpressionAny = toExpN             a |> ExNumeric
            static member (&>>)  (HelperTypeA, a :     float           ) : ExpressionAny = toExpN             a |> ExNumeric
            static member (&>>)  (HelperTypeA, a :     string          ) : ExpressionAny = toExpT             a |> ExText
            static member (&>>)  (HelperTypeA, a :     ExpressionAny   ) : ExpressionAny =                    a
        
        let inline toExpA  v : ExpressionAny = HelperTypeA &>>  v
        
        type Formula with
            static member inline New(dest, exp, typ) =
                  {
                      forId          = ForId <| Guid.NewGuid()
                      forDestination = dest
                      forDescription = ""
                      forExpression  = toExpA exp
                      forType        = typ
                  }
            member this.Conso = { this with forType = ForConsolidated }
           //static member inline Base(formula      ) = Formula.New([]  , formula, ForBase        )        
           //static member inline Base(formula, dest) = Formula.New(dest, formula, ForBase        )        
           //static member inline Cons(formula      ) = Formula.New([]  , formula, ForConsolidated)  
           //static member inline Cons(formula, dest) = Formula.New(dest, formula, ForConsolidated)  
           //static member inline All (formula      ) = Formula.New([]  , formula, ForAll         )    
           //static member inline All (formula, dest) = Formula.New(dest, formula, ForAll         )    
           
        
        let Map_adds kvs map = Seq.append (map |> Map.toSeq) kvs |> Map
        
        type Calculation with
            static member Input (name: string) dims  =
                let c =
                  {
                    calId          = CalId <| Guid.NewGuid()
                    calName        = name.Replace("_", " ").Trim()
                    calDescription = ""
                    format         = "#,##0.00"
                    isText         = false
                    isInput        = true
                    isBalance      = false
                    calDims        = dims |> Seq.map (fun d -> d.dimId) |> Set 
                    calFormulas    = [||]
                    cube           = None
                    properties     = System.Collections.Generic.Dictionary<string, string>()
                  }
                model.modCalculations <- Array.append model.modCalculations [| c |]
                c
            static member Calc name dims = 
                let c = Calculation.Input name dims
                c.isInput <- false
                c 
            member        this.Name name           = this.calName     <- name                                                                         ; this
            member inline this.Add (formula      ) = this.calFormulas <- Array.append this.calFormulas [| formula                                  |] ; this 
            member inline this.Base(expr         ) = this.calFormulas <- Array.append this.calFormulas [| Formula.New([]  , expr, ForBase        ) |] ; this 
            member inline this.Base(expr   , dest) = this.calFormulas <- Array.append this.calFormulas [| Formula.New(dest, expr, ForBase        ) |] ; this 
            member inline this.Cons(expr         ) = this.calFormulas <- Array.append this.calFormulas [| Formula.New([]  , expr, ForConsolidated) |] ; this 
            member inline this.Cons(expr   , dest) = this.calFormulas <- Array.append this.calFormulas [| Formula.New(dest, expr, ForConsolidated) |] ; this 
            member inline this.All (expr         ) = this.calFormulas <- Array.append this.calFormulas [| Formula.New([]  , expr, ForAll         ) |] ; this 
            member inline this.All (expr   , dest) = this.calFormulas <- Array.append this.calFormulas [| Formula.New(dest, expr, ForAll         ) |] ; this 
            member inline this.For (es: ElmReference list) = { this.Slice with sliDims = Map_adds (List.map (fun (e:ElmReference) -> e.DimId, e) es) this.Slice.sliDims } 
            member        this.AddFormulas fs = Array.append this.calFormulas (fs |> Seq.toArray)
            member        this.withCube (model: Model) f = this.cube |> Option.bind model.GetCube |> swap Option.bind <| f
        
        type Dimension with 
            static member New(name, isCalcDim) =
                let d =
                  {
                    dimId          = DimId <| Guid.NewGuid()
                    dimName        = name
                    dimPrefix      = ""
                    dimType        = DtOther
                    defaultElm     = None
                    dimElements    = [|  |]
                    dimAttributes  = [|  |]      
                    isCalcDim      = isCalcDim
                  }
                model.modDims <- Array.append model.modDims [| d |]
                d
            static member New     name  = Dimension.New(name, false)
            static member NewCalc name  = Dimension.New(name, true )
            member inline this.Item (it) : ElmReference = 
                match toExpT it with 
                | ExtString s1 -> let s2 = s1.Replace("_", " ")
                                  let elm =
                                     this.dimElements
                                     
                                     |> Seq.tryFind (fun e -> e.elmName = s2)
                                     |> Option.defaultWith (fun () -> 
                                         let newE = Element.New s2
                                         this.dimElements <- Array.append this.dimElements [| newE |]
                                         newE
                                     )
                                  ElemFixed  (this.dimId, elm.elmId) 
                | exp          -> ElemDynamic(this.dimId, exp                         )  
            //member inline this.__     it     = this.Item it
            //member inline this.M      it     = this.Item it
            //member inline this.E      it     = this.Item it
            //member inline this.I      it     = this.Item it
            member        this.Prefix pr     = this.dimPrefix <- pr   ; this
            member        this.DType  dt     = this.dimType   <- dt   ; this
            member        this.Name   name   = this.dimName   <- name ; this
                
        type Rule with
            static member inline New(dest, exp, typ) =
                  {
                      rulId          = RulId <| Guid.NewGuid()
                      rulDestination = dest
                      rulDescription = ""
                      rulExpression  = toExpA exp
                      rulType        = typ
                      rulOrder       = "A"
                      rulSourceId    = None
                  }
            static member inline New(dest, exp, typ) = Rule.New(dest.sliDims |> Map.toList |> List.map snd, exp, typ)
            member this.Conso = { this with rulType = ForConsolidated }    
        
        type Cube with
            static member New(name, dims, mDimO, cType) = 
                let c =
                    {
                      cubId      = CubId <| Guid.NewGuid()
                      cubName    = name
                      cubDims    = dims
                      cubRules   = Map.empty
                      measureDim = mDimO
                      cubType    = cType
                    }
                model.modCubes <- Array.append model.modCubes [| c |]
                c
            static member NewCalc(name, dims, mDimO) = Cube.New(name, dims                                             , mDimO, CtCalc )
            static member New    (name, dims, mDimO) = Cube.New(name, dims |> Seq.map (fun d -> d.dimId) |> Seq.toArray, mDimO, CtOther) 
            member inline this.AddRule key rule      = this.cubRules <- Map.add key rule this.cubRules ; this 
            //member inline this.Calc ()    = { this with cubType = CtCalc } 
            member inline this.For (es: ElmReference list) = { this.Slice with sliDims = Map_adds (List.map (fun (e:ElmReference) -> e.DimId, e) es) this.Slice.sliDims } 
    
    
    // # 1 @"(4)547d9db7-67cb-4879-9568-e16a617b81b9 Syntax.fsx"
    module CalculationSyntax = 
        open CalculationModel
        let And = (&&)
    
        let inline ( +   ) x y = ExnOperationN (OpAdd     , toExpN    x      , toExpN    y)
        let inline ( -   ) x y = ExnOperationN (OpSubtract, toExpN    x      , toExpN    y)
        let inline ( *   ) x y = ExnOperationN (OpMultiply, toExpN    x      , toExpN    y)
        let inline ( /   ) x y = ExnOperationN (OpDivide  , toExpN    x      , toExpN    y)
        let inline ( =   ) x y = ExnOperationN (OpEQ      , toExpN    x      , toExpN    y)
        let inline ( <>  ) x y = ExnOperationN (OpNE      , toExpN    x      , toExpN    y)
        let inline ( >   ) x y = ExnOperationN (OpGT      , toExpN    x      , toExpN    y)
        let inline ( >=  ) x y = ExnOperationN (OpGE      , toExpN    x      , toExpN    y)
        let inline ( <   ) x y = ExnOperationN (OpLT      , toExpN    x      , toExpN    y)
        let inline ( <=  ) x y = ExnOperationN (OpLE      , toExpN    x      , toExpN    y)
        let inline ( &&  ) x y = ExnOperationN (OpAnd     , toExpN    x      , toExpN    y)
        let inline ( ||  ) x y = ExnOperationN (OpOr      , toExpN    x      , toExpN    y)
         
        let inline ( &=  ) x y = ExnOperationT (OpEQ      , toExpT    x      , toExpT    y)
        let inline ( &<> ) x y = ExnOperationT (OpNE      , toExpT    x      , toExpT    y)
        let inline ( &>  ) x y = ExnOperationT (OpGT      , toExpT    x      , toExpT    y)
        let inline ( &>= ) x y = ExnOperationT (OpGE      , toExpT    x      , toExpT    y)
        let inline ( &<  ) x y = ExnOperationT (OpLT      , toExpT    x      , toExpT    y)
        let inline ( &<= ) x y = ExnOperationT (OpLE      , toExpT    x      , toExpT    y)
         
        let inline ( ?   ) (d:Dimension) e = d.[ toExpT e ]
        let inline ( !   ) (d:Dimension)   = ExtDimElement d.dimId
         
        let inline IF          (cond, thenR , elseR) = ExnIf       (toExpN cond, toExpN thenR , toExpN elseR)
        let inline MAX         (v1  , v2           ) = ExnMax      (toExpN v1  , toExpN v2                  )
        let inline MIN         (v1  , v2           ) = ExnMin      (toExpN v1  , toExpN v2                  )
        let inline DE_ISCHILD  (dim , parent, child) = ExnDeIsChild(toExpT dim , toExpT parent, toExpT child)
        
        let inline IFt  (cond, thenR, elseR) = ExtIf   (toExpN cond, toExpT thenR, toExpT elseR)
        let inline IFa  (cond, thenR, elseR) = ExiIf   (toExpN cond, toExpA thenR, toExpA elseR)
        let inline SUBST(txt , from , len  ) = ExtSubSt(toExpT txt , toExpN from , toExpN len  )
        
        let ForAll = {
                     sliDims       = Map.empty
                     calculation   = None
                     cube          = None
        }
        
        let inline toForm0 e = Formula.New([], toExpA e, ForBase)
        let inline addFormula  (c:Calculation) f dest forT = c.Add({ f with forDestination = dest ; forType = forT })
        let inline addFormulaE (c:Calculation) e           = addFormula c (toForm0 e)
        let inline toRule0 e = Rule.New([], toExpA e, ForBase)
        let inline addRule     (c:Cube       ) r dest rulT = c.AddRule (RuleKey r.rulId) (Some { r with rulDestination = dest ; rulType = rulT })
        let inline addRuleE    (c:Cube       ) e           = addRule c (toRule0 e)
        
    (*    let elmRef2ElmId r =
            match r with
            | ElemFixed  (d, eId) -> d, eId
            | ElemDynamic(d, exp) -> failwith <| sprintf "dynamic references not allowed: %O" (d, exp)
            
        let elmRefs2ElmIds rs = rs |> List.map elmRef2ElmId
    *)    
        type HelperForm = HelperForm with
            static member (?<-) (c:Cube       , HelperForm, l : ElmReference list) = fun dest rulT f -> addRule    c f l rulT
            static member (?<-) (c:Calculation, HelperForm, f : Formula          ) = addFormula  c f 
            static member (?<-) (c:Calculation, HelperForm, e : ExpressionNumber ) = addFormulaE c e 
            static member (?<-) (c:Calculation, HelperForm, e : ExpressionText   ) = addFormulaE c e
            static member (?<-) (c:Calculation, HelperForm, e : Slice            ) = addFormulaE c e
            static member (?<-) (c:Calculation, HelperForm, e : Calculation      ) = addFormulaE c e
            static member (?<-) (c:Calculation, HelperForm, e : bool             ) = addFormulaE c e
            static member (?<-) (c:Calculation, HelperForm, e : int              ) = addFormulaE c e
            static member (?<-) (c:Calculation, HelperForm, e : float            ) = addFormulaE c e
            static member (?<-) (c:Calculation, HelperForm, e : string           ) = addFormulaE c e
            static member (?<-) (c:Calculation, HelperForm, e : ExpressionAny    ) = addFormulaE c e 
            static member (?<-) (c:Calculation, HelperForm, l : ElmReference list) = fun dest forT f -> addFormula c f l forT
        
        let inline (<<|  )  c e = (c?(HelperForm)<-e) [] ForBase
        let inline (<<|* )  c e = (c?(HelperForm)<-e) [] ForConsolidated
        
        type HelperForm2 = HelperForm2 with
            static member (?<-) (add :Rule    -> Cube       , HelperForm2, r : Rule             ) = add(r        )
            static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : ExpressionNumber ) = add(toRule0 f) 
            static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : ExpressionText   ) = add(toRule0 f)
            static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : Slice            ) = add(toRule0 f)
            static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : Calculation      ) = add(toRule0 f)
            static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : bool             ) = add(toRule0 f)
            static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : int              ) = add(toRule0 f)
            static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : float            ) = add(toRule0 f)
            static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : string           ) = add(toRule0 f)
            static member (?<-) (add :Rule    -> Cube       , HelperForm2, f : ExpressionAny    ) = add(toRule0 f) 
            static member (?<-) (add :Formula -> Calculation, HelperForm2, f : Formula          ) = add(f        )
            static member (?<-) (add :Formula -> Calculation, HelperForm2, f : ExpressionNumber ) = add(toForm0 f) 
            static member (?<-) (add :Formula -> Calculation, HelperForm2, f : ExpressionText   ) = add(toForm0 f)
            static member (?<-) (add :Formula -> Calculation, HelperForm2, f : Slice            ) = add(toForm0 f)
            static member (?<-) (add :Formula -> Calculation, HelperForm2, f : Calculation      ) = add(toForm0 f)
            static member (?<-) (add :Formula -> Calculation, HelperForm2, f : bool             ) = add(toForm0 f)
            static member (?<-) (add :Formula -> Calculation, HelperForm2, f : int              ) = add(toForm0 f)
            static member (?<-) (add :Formula -> Calculation, HelperForm2, f : float            ) = add(toForm0 f)
            static member (?<-) (add :Formula -> Calculation, HelperForm2, f : string           ) = add(toForm0 f)
            static member (?<-) (add :Formula -> Calculation, HelperForm2, f : ExpressionAny    ) = add(toForm0 f) 
        
        let inline (<<<)  p e = p?(HelperForm2)<-e
        
        let Calc  = Calculation.Calc
        let Input = Calculation.Input
        let NA    = ExnNA
        
        
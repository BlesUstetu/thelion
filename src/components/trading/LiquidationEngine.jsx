import { useState } from "react"

export default function LiquidationEngine(){

const [entry,setEntry]=useState(0)
const [lev,setLev]=useState(10)

const maintenance=0.005

const liq = entry - (entry/lev) + (entry*maintenance)

return(

<div className="panel">

<h3>Liquidation Price</h3>

<input
placeholder="Entry Price"
onChange={(e)=>setEntry(Number(e.target.value))}
/>

<input
placeholder="Leverage"
onChange={(e)=>setLev(Number(e.target.value))}
/>

<div>

Liquidation Price: {liq.toFixed(2)}

</div>

</div>

)

}

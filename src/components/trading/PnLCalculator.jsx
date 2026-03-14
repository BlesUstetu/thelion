import { useState } from "react"

export default function PnLCalculator(){

const [entry,setEntry]=useState(0)
const [exit,setExit]=useState(0)
const [size,setSize]=useState(0)

const pnl=(exit-entry)*size

return(

<div className="panel">

<h3>PnL Calculator</h3>

<input
placeholder="Entry Price"
onChange={(e)=>setEntry(Number(e.target.value))}
/>

<input
placeholder="Exit Price"
onChange={(e)=>setExit(Number(e.target.value))}
/>

<input
placeholder="Size"
onChange={(e)=>setSize(Number(e.target.value))}
/>

<div style={{marginTop:"10px"}}>

PnL: {pnl}

</div>

</div>

)

}

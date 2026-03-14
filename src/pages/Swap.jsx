import { useState } from "react"

export default function Swap(){

const [from,setFrom]=useState("")
const [to,setTo]=useState("")

return(

<div className="panel">

<h2>DEX Swap</h2>

<input
placeholder="Token In"
value={from}
onChange={(e)=>setFrom(e.target.value)}
/>

<input
placeholder="Token Out"
value={to}
onChange={(e)=>setTo(e.target.value)}
/>

<button>

Swap

</button>

</div>

)

}

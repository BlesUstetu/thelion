import { useState } from "react"

export default function LeverageSlider(){

const [lev,setLev]=useState(10)

return(

<div className="panel">

<h3>Leverage</h3>

<div>{lev}x</div>

<input
type="range"
min="1"
max="125"
value={lev}
onChange={(e)=>setLev(e.target.value)}
/>

</div>

)

}

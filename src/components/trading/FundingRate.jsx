import { useState,useEffect } from "react"

export default function FundingRate(){

const [rate,setRate]=useState(0.01)

useEffect(()=>{

setInterval(()=>{

setRate((Math.random()*0.02).toFixed(4))

},5000)

},[])

return(

<div className="panel">

<h3>Funding Rate</h3>

<div>

{rate}% / 8h

</div>

</div>

)

}

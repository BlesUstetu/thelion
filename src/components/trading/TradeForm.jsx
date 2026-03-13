import { useState } from "react"

export default function TradeForm(){

const [price,setPrice]=useState("")
const [amount,setAmount]=useState("")

return(

<div className="trade-form">

<h3>Trade</h3>

<input
placeholder="Price"
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<input
placeholder="Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<button className="buy">Buy</button>

<button className="sell">Sell</button>

</div>

)

}

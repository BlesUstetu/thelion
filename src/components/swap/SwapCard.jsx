import { useState } from "react"

export default function SwapCard(){
  const [amount,setAmount]=useState("")

  return(
    <div className="swap-card">
      <h2>Swap</h2>
      <input
        placeholder="0.0"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
      />
      <button>Swap</button>
    </div>
  )
}

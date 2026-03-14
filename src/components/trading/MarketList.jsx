import { useState } from "react"

export default function MarketList(){

const markets=["BTCUSDT","ETHUSDT","SOLUSDT","BNBUSDT"]

const [selected,setSelected]=useState("BTCUSDT")

return(

<div className="panel">

<h3>Markets</h3>

{markets.map((m)=>(
<div
key={m}
onClick={()=>setSelected(m)}
style={{
cursor:"pointer",
padding:"6px",
background:selected===m?"#1f2937":"transparent"
}}
>
{m}
</div>
))}

</div>

)

}

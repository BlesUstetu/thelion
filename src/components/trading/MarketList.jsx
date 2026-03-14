import { useState } from "react"

export default function MarketList(){

const markets=[
"BTCUSDT",
"ETHUSDT",
"SOLUSDT",
"BNBUSDT",
"XRPUSDT",
"ADAUSDT"
]

const [selected,setSelected]=useState("BTCUSDT")

return(

<div className="panel">

<h3>Markets</h3>

{markets.map((m)=>(
<div
key={m}
style={{
padding:"6px",
cursor:"pointer",
background:selected===m?"#1f2937":"transparent"
}}
onClick={()=>setSelected(m)}
>

{m}

</div>
))}

</div>

)

}

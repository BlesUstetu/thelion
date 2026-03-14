import { useMarketStore } from "../../core/store"

export default function MarketSelector(){

const setSymbol = useMarketStore(s=>s.setSymbol)

const markets=[
"btcusdt",
"ethusdt",
"solusdt",
"bnbusdt",
"xrpusdt"
]

return(

<select onChange={(e)=>setSymbol(e.target.value)}>

{markets.map(m=>(
<option key={m}>{m.toUpperCase()}</option>
))}

</select>

)

}

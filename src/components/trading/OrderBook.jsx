import { useMarketStore } from "../../core/store"

export default function OrderBook(){

const bids = useMarketStore(s=>s.bids)
const asks = useMarketStore(s=>s.asks)

return(

<div className="panel">

<h3>Order Book</h3>

<div>

{asks.slice(0,12).map((a,i)=>{

const vol = Number(a[1])

return(

<div
key={i}
style={{
background:`rgba(239,68,68,${Math.min(vol/5,0.7)})`
}}
>

{a[0]} | {a[1]}

</div>

)

})}

</div>

<div>

{bids.slice(0,12).map((b,i)=>{

const vol = Number(b[1])

return(

<div
key={i}
style={{
background:`rgba(34,197,94,${Math.min(vol/5,0.7)})`
}}
>

{b[0]} | {b[1]}

</div>

)

})}

</div>

</div>

)

}

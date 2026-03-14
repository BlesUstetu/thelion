import { useMarketStore } from "../../core/store"

export default function DepthHeatmap(){

const bids = useMarketStore((s)=>s.bids)

return(

<div className="panel">

<h3>Depth Heatmap</h3>

{bids.slice(0,20).map((b,i)=>{

const volume = Number(b[1])

return(

<div
key={i}
className="heat-row"
style={{
background:`rgba(34,197,94,${Math.min(volume/10,0.8)})`
}}
>

{b[0]} | {b[1]}

</div>

)

})}

</div>

)

}

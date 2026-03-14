import { useEffect,useState } from "react"
import { AreaChart,Area,XAxis,YAxis } from "recharts"

export default function DepthChart(){

const [data,setData]=useState([])

useEffect(()=>{

const ws=new WebSocket(
"wss://stream.binance.com:9443/ws/btcusdt@depth"
)

ws.onmessage=(event)=>{

const d=JSON.parse(event.data)

const depth=d.b.slice(0,20).map(b=>({

price:Number(b[0]),
volume:Number(b[1])

}))

setData(depth)

}

},[])

return(

<div className="panel">

<h3>Depth Chart</h3>

<AreaChart width={300} height={200} data={data}>

<XAxis dataKey="price"/>
<YAxis/>

<Area
type="monotone"
dataKey="volume"
stroke="#16c784"
fill="#16c784"
/>

</AreaChart>

</div>

)

}

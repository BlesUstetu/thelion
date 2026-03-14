import { useEffect,useState } from "react"

export default function OrderBook(){

const [bids,setBids]=useState([])
const [asks,setAsks]=useState([])

useEffect(()=>{

const ws=new WebSocket(
"wss://stream.binance.com:9443/ws/btcusdt@depth"
)

ws.onmessage=(event)=>{

const data=JSON.parse(event.data)

setBids(data.b)
setAsks(data.a)

}

},[])

return(

<div className="panel">

<h3>OrderBook</h3>

<div>

{asks.slice(0,10).map((a,i)=>(
<div key={i}>{a[0]} | {a[1]}</div>
))}

</div>

<div>

{bids.slice(0,10).map((b,i)=>(
<div key={i}>{b[0]} | {b[1]}</div>
))}

</div>

</div>

)

}

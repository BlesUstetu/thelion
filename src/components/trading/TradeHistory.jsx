import { useEffect,useState } from "react"

export default function TradeHistory(){

const [trades,setTrades]=useState([])

useEffect(()=>{

const ws=new WebSocket(
"wss://stream.binance.com:9443/ws/btcusdt@trade"
)

ws.onmessage=(event)=>{

const data=JSON.parse(event.data)

setTrades(t=>[data,...t.slice(0,20)])

}

return()=>ws.close()

},[])

return(

<div className="panel">

<h3>Recent Trades</h3>

{trades.map((t,i)=>(
<div key={i}>
{Number(t.p).toFixed(2)} | {t.q}
</div>
))}

</div>

)

}

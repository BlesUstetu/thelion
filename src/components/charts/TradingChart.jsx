import { useEffect,useRef } from "react"

export default function TradingChart(){

const chartRef = useRef()

useEffect(()=>{

const script = document.createElement("script")

script.src="https://s3.tradingview.com/tv.js"

script.onload=()=>{

new window.TradingView.widget({

symbol:"BINANCE:BTCUSDT",
interval:"5",
container_id:chartRef.current,
width:"100%",
height:420,
theme:"dark",
style:"1",
locale:"en"

})

}

document.body.appendChild(script)

},[])

return <div ref={chartRef}></div>

}

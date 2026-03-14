import { useEffect,useRef } from "react"

export default function TradingChart(){

const ref=useRef()

useEffect(()=>{

const script=document.createElement("script")

script.src="https://s3.tradingview.com/tv.js"

script.onload=()=>{

new window.TradingView.widget({

symbol:"BINANCE:BTCUSDT",
interval:"5",
container_id:ref.current,
theme:"dark",
width:"100%",
height:500

})

}

document.body.appendChild(script)

},[])

return <div ref={ref}></div>

}

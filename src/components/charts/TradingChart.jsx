import { useEffect } from "react"

export default function TradingChart({pair="BTCUSDT"}) {

useEffect(()=>{

if(!window.TradingView){

const script=document.createElement("script")

script.src="https://s3.tradingview.com/tv.js"

script.onload=loadChart

document.body.appendChild(script)

}else{

loadChart()

}

function loadChart(){

new window.TradingView.widget({

container_id:"tv_chart",

symbol:`BINANCE:${pair}`,

interval:"1",

theme:"dark",

style:"1",

locale:"en",

autosize:true,

toolbar_bg:"#0a0f1c",

enable_publishing:false,

allow_symbol_change:true

})

}

},[pair])

return(

<div id="tv_chart" style={{height:"60vh",width:"100%"}}/>

)

}

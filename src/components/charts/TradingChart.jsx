import { useEffect } from "react"

export default function TradingChart(){

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

symbol:"BINANCE:BTCUSDT",

interval:"5",

theme:"dark",

style:"1",

locale:"en",

autosize:true,

hide_side_toolbar:false,

allow_symbol_change:true

})

}

},[])

return(

<div
id="tv_chart"
style={{
height:"450px",
width:"100%"
}}
/>

)

}

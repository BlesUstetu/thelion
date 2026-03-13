import { useEffect, useRef } from "react"
import { createChart } from "lightweight-charts"

export default function TradingChart(){

const chartRef=useRef()

useEffect(()=>{

const chart=createChart(chartRef.current,{
height:400
})

const series=chart.addCandlestickSeries()

series.setData([
{time:"2024-01-01",open:100,high:120,low:90,close:110}
])

},[])

return(

<div ref={chartRef}></div>

)

}

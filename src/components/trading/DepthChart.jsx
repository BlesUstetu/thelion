import { useState } from "react"
import { AreaChart,Area,XAxis,YAxis } from "recharts"

export default function DepthChart(){

const [data] = useState([
{price:65000,volume:10},
{price:65100,volume:15},
{price:65200,volume:8},
{price:65300,volume:12}
])

return(

<div className="panel">

<h3>Depth Chart</h3>

<AreaChart width={300} height={200} data={data}>

<XAxis dataKey="price"/>

<YAxis/>

<Area
type="monotone"
dataKey="volume"
/>

</AreaChart>

</div>

)

}

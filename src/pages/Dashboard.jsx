import MarketList from "../components/trading/MarketList"
import DepthChart from "../components/trading/DepthChart"
import PnLCalculator from "../components/trading/PnLCalculator"

export default function Dashboard(){

return(

<div style={{padding:"20px"}}>

<h1>Dashboard</h1>

<p>Nilai Total Terkunci</p>

<div style={{
display:"grid",
gridTemplateColumns:"300px 1fr 300px",
gap:"20px",
marginTop:"20px"
}}>

<MarketList/>

<DepthChart/>

<PnLCalculator/>

</div>

</div>

)

}

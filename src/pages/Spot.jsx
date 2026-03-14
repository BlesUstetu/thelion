import TradingChart from "../components/charts/TradingChart"
import OrderBook from "../components/trading/OrderBook"
import TradeHistory from "../components/trading/TradeHistory"
import OrderForm from "../components/trading/OrderForm"
import DepthHeatmap from "../components/trading/DepthHeatmap"

export default function Spot(){

return(

<div className="terminal-pro">

<div className="chart">
<TradingChart/>
</div>

<div className="orderbook">
<OrderBook/>
</div>

<div className="heatmap">
<DepthHeatmap/>
</div>

<div className="orderform">
<OrderForm/>
</div>

<div className="trades">
<TradeHistory/>
</div>

</div>

)

}

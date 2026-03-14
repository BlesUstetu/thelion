import TradingChart from "../components/charts/TradingChart"
import OrderBook from "../components/trading/OrderBook"
import TradeHistory from "../components/trading/TradeHistory"
import OrderForm from "../components/trading/OrderForm"

export default function Spot(){

return(

<div className="spot-layout">

<div className="spot-chart">
<TradingChart/>
</div>

<div className="spot-orderbook">
<OrderBook/>
</div>

<div className="spot-orderform">
<OrderForm/>
</div>

<div className="spot-trades">
<TradeHistory/>
</div>

</div>

)

}

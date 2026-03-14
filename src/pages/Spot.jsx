import TradingChart from "../components/charts/TradingChart"
import OrderBook from "../components/trading/OrderBook"
import TradeHistory from "../components/trading/TradeHistory"
import OrderForm from "../components/trading/OrderForm"
import MarketSelector from "../components/trading/MarketSelector"
import Portfolio from "../components/wallet/Portfolio"

export default function Spot(){

return(

<div className="terminal-pro">

<div className="chart">

<MarketSelector/>
<TradingChart/>

</div>

<OrderBook/>

<OrderForm/>

<TradeHistory/>

<Portfolio/>

</div>

)

}

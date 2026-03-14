import TradingChart from "../components/charts/TradingChart"
import OrderBook from "../components/trading/OrderBook"
import TradeHistory from "../components/trading/TradeHistory"
import OrderForm from "../components/trading/OrderForm"

export default function Spot(){

return(

<div className="terminal">

<TradingChart/>

<OrderBook/>

<OrderForm/>

<TradeHistory/>

</div>

)

}

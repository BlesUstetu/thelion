import OrderBook from "../components/trading/OrderBook"
import TradingChart from "../components/trading/TradingChart"
import TradeForm from "../components/trading/TradeForm"

export default function SpotTrade(){

return(

<div className="trade-layout">

<OrderBook/>

<TradingChart/>

<TradeForm/>

</div>

)

}

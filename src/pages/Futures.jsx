import TradingChart from "../components/charts/TradingChart"
import OrderBook from "../components/trading/OrderBook"
import Positions from "../components/trading/Positions"
import OrderForm from "../components/trading/OrderForm"

export default function Futures(){

return(

<div className="terminal">

<TradingChart/>

<OrderBook/>

<OrderForm/>

<Positions/>

</div>

)

}

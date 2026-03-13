import { useState } from "react"

import MarketSelector from "../components/trading/MarketSelector"
import OrderBook from "../components/trading/OrderBook"
import TradingChart from "../components/trading/TradingChart"
import TradeForm from "../components/trading/TradeForm"
import TradeHistory from "../components/trading/TradeHistory"

export default function SpotTrade(){

const [market,setMarket]=useState("BTC/USDT")

return(

<div>

<h2>{market}</h2>

<MarketSelector
market={market}
setMarket={setMarket}
/>

<div className="trade-layout">

<OrderBook/>

<TradingChart/>

<TradeForm/>

</div>

<TradeHistory/>

</div>

)

}

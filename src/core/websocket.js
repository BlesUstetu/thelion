import { useMarketStore } from "./store"

let depthSocket
let tradeSocket

export function connectMarket(symbol="btcusdt"){

const { setOrderBook, addTrade } = useMarketStore.getState()

if(depthSocket) depthSocket.close()
if(tradeSocket) tradeSocket.close()

depthSocket = new WebSocket(
`wss://stream.binance.com:9443/ws/${symbol}@depth`
)

depthSocket.onmessage=(event)=>{

const data = JSON.parse(event.data)

setOrderBook(data.b || [], data.a || [])

}

tradeSocket = new WebSocket(
`wss://stream.binance.com:9443/ws/${symbol}@trade`
)

tradeSocket.onmessage=(event)=>{

const trade = JSON.parse(event.data)

addTrade(trade)

}

}

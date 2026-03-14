import { create } from "zustand"

export const useMarketStore = create((set)=>({

symbol:"btcusdt",

bids:[],
asks:[],
trades:[],

setSymbol:(symbol)=>set({symbol}),

setOrderBook:(bids,asks)=>set({
bids,
asks
}),

addTrade:(trade)=>set((state)=>({

trades:[trade,...state.trades.slice(0,30)]

}))

}))

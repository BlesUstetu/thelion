export default function MarketSelector({market,setMarket}){

const markets=[
"BTC/USDT",
"ETH/USDT",
"BASE/USDC"
]

return(

<select
value={market}
onChange={(e)=>setMarket(e.target.value)}
>

{markets.map((m,i)=>(

<option key={i} value={m}>

{m}

</option>

))}

</select>

)

}

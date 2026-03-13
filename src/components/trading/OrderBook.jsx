export default function OrderBook(){

const bids=[
{price:63990,amount:1.2},
{price:63980,amount:0.8}
]

const asks=[
{price:64010,amount:0.5},
{price:64020,amount:0.7}
]

return(

<div className="orderbook">

<h3>OrderBook</h3>

{asks.map((o,i)=>(

<div key={i} className="ask">

{o.price} {o.amount}

</div>

))}

<hr/>

{bids.map((o,i)=>(

<div key={i} className="bid">

{o.price} {o.amount}

</div>

))}

</div>

)

}

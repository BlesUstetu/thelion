export default function TradeHistory(){

const trades=[
{price:64000,amount:0.12},
{price:63990,amount:0.25},
{price:63980,amount:0.40}
]

return(

<div className="trade-history">

<h3>Trade History</h3>

{trades.map((t,i)=>(

<div key={i}>

{t.price} — {t.amount}

</div>

))}

</div>

)

}

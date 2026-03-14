export default function Portfolio(){

const assets=[
{symbol:"USDT",balance:1200},
{symbol:"BTC",balance:0.02},
{symbol:"ETH",balance:0.5}
]

return(

<div className="panel">

<h3>Portfolio</h3>

<table>

<thead>
<tr>
<th>Asset</th>
<th>Balance</th>
</tr>
</thead>

<tbody>

{assets.map((a,i)=>(

<tr key={i}>
<td>{a.symbol}</td>
<td>{a.balance}</td>
</tr>

))}

</tbody>

</table>

</div>

)

}

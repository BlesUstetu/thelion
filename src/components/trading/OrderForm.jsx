export default function OrderForm(){

return(

<div className="panel">

<h3>Place Order</h3>

<select>

<option>Limit</option>
<option>Market</option>

</select>

<input placeholder="Price"/>

<input placeholder="Amount"/>

<button className="buy">Buy</button>

<button className="sell">Sell</button>

</div>

)

}

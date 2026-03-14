import { Link } from "react-router-dom"
import WalletConnect from "../wallet/WalletConnect"

export default function Header(){

return(

<div className="header">

<div className="logo">
Thelion
</div>

<div className="menu">

<Link to="/">Dashboard</Link>
<Link to="/spot">Spot</Link>
<Link to="/futures">Futures</Link>

</div>

<WalletConnect/>

</div>

)

}

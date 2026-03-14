import { Link } from "react-router-dom"
import WalletButton from "../wallet/WalletButton"

export default function Header(){

return(

<header className="header">

<div className="logo">
Thelion
</div>

<nav>

<Link to="/">Dashboard</Link>

<Link to="/trade">Trade</Link>

<Link to="/swap">Swap</Link>

<Link to="/vault">Vault</Link>

</nav>

<WalletButton/>

</header>

)

}

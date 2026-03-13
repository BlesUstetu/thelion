import { Link } from "react-router-dom"
import ConnectWallet from "../wallet/ConnectWallet"

export default function Header(){

return(
<header className="header">
 <div className="logo">
  HybridDEX
 </div>
  <nav>
    <Link to="/">Dashboard</Link>
    <Link to="/trade">Trade</Link>
    <Link to="/futures">Futures</Link>
    <Link to="/swap">Swap</Link>
    <Link to="/vault">Vault</Link>
    <Link to="/markets">Markets</Link>
    <Link to="/portfolio">Portfolio</Link>
  </nav>
  <ConnectWallet/>
 </header>

)

}

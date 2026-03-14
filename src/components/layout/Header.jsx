import { Link } from "react-router-dom"
import WalletConnect from "../wallet/WalletConnect"

export default function Header(){

return(

<div className="header">
<div className="logo" style={{
fontWeight:"700",
fontSize:"18px",
background:"linear-gradient(90deg,#22c55e,#06b6d4)",
WebkitBackgroundClip:"text",
color:"transparent"
}}>
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

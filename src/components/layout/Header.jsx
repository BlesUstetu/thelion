import ConnectWallet from "../wallet/ConnectWallet"

export default function Header(){
  return(
    <header className="header">
      <div className="logo">HybridDEX</div>
      <nav>
        <a>Trade</a>
        <a>Futures</a>
        <a>Swap</a>
        <a>Vault</a>
        <a>Markets</a>
        <a>Portfolio</a>
      </nav>
      <ConnectWallet/>
    </header>
  )
}

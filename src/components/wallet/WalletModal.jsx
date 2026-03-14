import { useState } from "react"

export default function WalletModal(){

const [open,setOpen]=useState(false)

async function connect(){

if(window.ethereum){

await window.ethereum.request({
method:"eth_requestAccounts"
})

setOpen(false)

}

}

return(

<>

<button onClick={()=>setOpen(true)}>
Connect Wallet
</button>

{open && (

<div className="wallet-modal">

<div className="wallet-card">

<h3>Connect Wallet</h3>

<button onClick={connect}>
MetaMask
</button>

<button onClick={()=>setOpen(false)}>
Cancel
</button>

</div>

</div>

)}

</>

)

}

import { useState } from "react"

export default function WalletConnect(){

const [addr,setAddr]=useState(null)

async function connect(){

if(window.ethereum){

const accounts=
await window.ethereum.request({
method:"eth_requestAccounts"
})

setAddr(accounts[0])

}

}

return(

<button onClick={connect}>

{addr?addr.slice(0,6)+"...":"Connect Wallet"}

</button>

)

}

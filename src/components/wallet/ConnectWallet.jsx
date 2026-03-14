import { useState } from "react"

export default function WalletButton(){

const [connected,setConnected]=useState(false)

function connect(){

setConnected(true)

}

function disconnect(){

setConnected(false)

}

return(

<button onClick={connected?disconnect:connect}>

{connected?"Disconnect":"Connect Wallet"}

</button>

)

}

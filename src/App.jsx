import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from "./components/layout/Header"
import Dashboard from "./pages/Dashboard"
import Spot from "./pages/Spot"
import Futures from "./pages/Futures"
import Web3Background from "./components/layout/Web3Background"

export default function App(){

return(

<BrowserRouter>

<Header/>

<Routes>

<Route path="/" element={<Dashboard/>} />

<Route path="/spot" element={<Spot/>} />

<Route path="/futures" element={<Futures/>} />

</Routes>
<Web3Background/>
</BrowserRouter>

)

}

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/layout/Header"

import Dashboard from "./pages/Dashboard"
import SpotTrade from "./pages/SpotTrade"
import Swap from "./pages/Swap"
import Vault from "./pages/Vault"

export default function App(){

return(

<BrowserRouter>

<Header/>

<Routes>

<Route path="/" element={<Dashboard />} />

<Route path="/trade" element={<SpotTrade />} />

<Route path="/swap" element={<Swap />} />

<Route path="/vault" element={<Vault />} />

</Routes>

</BrowserRouter>

)

}

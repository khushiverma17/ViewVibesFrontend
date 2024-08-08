import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { useState } from "react"

function App() {

  const [sidebar, setSidebar] = useState(true)

  return (
    <BrowserRouter>
    <>
      <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}></Route>
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App

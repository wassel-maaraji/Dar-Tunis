import { Routes ,Route } from "react-router-dom"
import React from "react"
import Navbar from "./components/Navbar"
import DishCard from "./components/DishCard"
import MenuList from "./components/MenuList"
import Home from "./pages/Home"

import './index.css'
function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dishes" element={<MenuList/>} />
    </Routes>
    </>
  )
}

export default App

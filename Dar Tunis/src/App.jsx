import { Routes ,Route } from "react-router-dom"
import React from "react"
import Navbar from "./components/Navbar"
import './index.css'
function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={} />
      <Route path="/dishes" element={} />
      <Route path="/login" element={} />
    </Routes>
    </>
  )
}

export default App

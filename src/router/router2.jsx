import React from "react"
import {Routes, Route, Navigate, Router} from "react-router-dom"
import Home from "../paginas/home"
import About from "../paginas/About"
import Carrito from "../paginas/Carrito"
import NavBar from "../layouts/NavBar"
import Error from '../paginas/Error'
import Footer from '../paginas/Footer'
import { Formulario } from "../paginas/Formulario"

const router2 = () => {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path="Home" element={<Home/>}/>
            <Route path="About" element={<About/>}/>
            <Route path="Carrito" element={<Carrito/>}/> 
            <Route path="/" element= {<Navigate to= "Home"/> }/>
            <Route path="Formulario" element={<Formulario/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>      
    </>
  ) 
}

export default router2
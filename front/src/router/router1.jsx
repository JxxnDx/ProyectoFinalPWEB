import {Routes,Route} from "react-router-dom"
import React from 'react'
import Login from "../paginas/login"
import NavBar from"../navbar/NavBar"
import Footer from"../navbar/Footer"
import Home from"../paginas/home"
import Store from "../paginas/Store";
import Error404 from '../paginas/Error404';
import Producto from '../paginas/producto';


import Register from "../paginas/Register"
import Router2 from "./router2"
import RutasPublicas from "./RutasPublicas"
import RutasPrivadas from "./RutasPrivadas"

const router1 = () => {
  return (
    <>
    
    <Routes>
    
    <Route path="/" element={<RutasPublicas><NavBar/><Home/><Footer/></RutasPublicas>} />
        <Route path = "login" element = {
            <RutasPublicas>
               
               
                <Login/>
            </RutasPublicas>}/>
        <Route path = "register" element = {
            <RutasPublicas>
                <Register/>
            </RutasPublicas>}/>
             <Route path="*" element={<Error404 />} />
             <Route path="/tienda" element={<RutasPublicas><NavBar/><Producto/><Footer/></RutasPublicas>} />
             <Route path="/store" element={<RutasPublicas><NavBar/><Store/><Footer/></RutasPublicas>} />


        
        <Route path = "/privado/*" element = {
            
            <RutasPrivadas>
                
                <Router2/>
            </RutasPrivadas> }/>
    </Routes>
    
    
    </>
    
  )
}

export default router1
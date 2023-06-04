import {Routes,Route} from "react-router-dom"
import React from 'react'
import Login from "../paginas/login"
import NavBar from"../navbar/NavBar"
import Home from"../paginas/home"

import Recuperacion from "../paginas/recuperacion"
import Router2 from "./router2"
import RutasPublicas from "./RutasPublicas"
import RutasPrivadas from "./RutasPrivadas"

const router1 = () => {
  return (
    <>
    
    <Routes>
    
    <Route path="/" element={<RutasPublicas><NavBar/><Home/></RutasPublicas>} />
        <Route path = "login" element = {
            <RutasPublicas>
               
               
                <Login/>
            </RutasPublicas>}/>
        <Route path = "recuperacion" element = {
            <RutasPublicas>
                <Recuperacion/>
            </RutasPublicas>}/>
        
        <Route path = "/*" element = {
            
            <RutasPrivadas>
                
                <Router2/>
            </RutasPrivadas> }/>
    </Routes>
    
    
    </>
    
  )
}

export default router1
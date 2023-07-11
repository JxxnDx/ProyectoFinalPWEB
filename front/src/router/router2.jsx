import {Routes, Route, Navigate} from "react-router-dom"

import Home from "../paginas/home"
import Turismo from "../paginas/Turismo"
import Error404 from '../paginas/Error404';



import About from "../paginas/About"
import Carrito from "../paginas/Carrito"
import NavBar from "../navbar/NavBar"
import Footer from "../navbar/Footer";
import RutasPrivadas from "./RutasPrivadas";
const router2 = () => {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path="Home" element={<Home/>}/> 
            <Route path="About" element={<About/>}/>
            <Route path="Turismo" element={<Turismo/>}/>

            {/* <Route path="Carrito" element={<Carrito/>}/> */}
            <Route path="/" element= {<Navigate to= "Home"/> }/>
            <Route path="*" element={<RutasPrivadas><NavBar/><Error404 /><Footer/></RutasPrivadas>} />



        </Routes>
    
    
    </>
  ) 
}

export default router2
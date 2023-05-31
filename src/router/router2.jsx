import {Routes, Route, Navigate} from "react-router-dom"
import Contenido1 from "../paginas/Contenido1"
import Home from "../paginas/home"
import Contenido2 from "../paginas/Contenido2"
import Contenido3 from "../paginas/Contenido3"
import About from "../paginas/About"
import Carrito from "../paginas/Carrito"
import NavBar from "../navbar/NavBar"
const router2 = () => {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path="Home" element={<Home/>}/>
            <Route path="About" element={<About/>}/>
            {/* <Route path="Carrito" element={<Carrito/>}/> */}
            <Route path="/" element= {<Navigate to= "Home"/> }/>



        </Routes>
    
    
    </>
  ) 
}

export default router2
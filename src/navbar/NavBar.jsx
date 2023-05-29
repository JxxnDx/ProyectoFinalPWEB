import { NavLink, useNavigate } from "react-router-dom";
/**import Login from "../paginas/login";*/
import { useContext } from "react";
import Contexto from "../context/contexto";


const NavBar = () => {
const navegacion = useNavigate();
const{deslogearme} = useContext(Contexto)
const Logout=()=>{
    
    navegacion('/login',{replace:true})
    deslogearme()
}
  return (
    <>
        <nav>
                <NavLink to = "contenido1">contenido1</NavLink>
                <NavLink to = "contenido2">contenido2</NavLink>
                <NavLink to = "contenido3">contenido3</NavLink>
                <NavLink to = "login">login</NavLink>
                <button onClick={Logout}>Logout</button>





        </nav>
    
    
    </>
  )
}

export default NavBar
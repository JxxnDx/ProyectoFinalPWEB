import { NavLink, useNavigate, Outlet } from "react-router-dom";
/**import Login from "../paginas/login";*/
import { useContext } from "react";
import Contexto from "../context/contexto";
import carrito from '../imgs/carrito1.png'
import MyClothes from '../imgs/MyClothes-removebg-preview.png'
import DropdownComponent from './Dropdown';
import usuario from '../imgs/MyClothes.png'
// import DropdownComponent from './Dropdown';
// import { Dropdown } from 'react-bootstrap';
import '../App.css';


const NavBar = () => {
const navegacion = useNavigate();
const{deslogearme, logeado} = useContext(Contexto)
const Logout =()=>{
    
    navegacion('/',{replace:true})
    deslogearme()
}
  return (
    // <>
    //     <nav>
    //             <NavLink to = "home">Home</NavLink>
    //             <NavLink to = "contenido2">contenido2</NavLink>
    //             <NavLink to = "contenido3">contenido3</NavLink>
    //             <NavLink to = "login">login</NavLink>
    //             <button onClick={Logout}>Logout</button>





    //     </nav>
    
    
    // </>

    <div>
    <div className="root-layout">
        {/*<header>
        <nav>
            <h1>Router</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
        </nav>
    </header>*/}
        <div className="Encabezado">
            <div className="logo" style={{float: 'left'}}>
              
                <img src={MyClothes} width="80px" height="80px"></img> 
            </div>
            <div className="titulo">
                MyClothes
            </div>
            <div className="iniciar">
            <DropdownComponent/>
                {/* title={logeado.estado ? 'Logout' : 'Login'}
                variant="secondary"
                id="dropdown-menu"
                align="end"
              >
                {logeado.estado ? (
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                ) : (
                  <Dropdown.Item>Login</Dropdown.Item>
                )}
              </DropdownComponent> */}
            {/* correcto<DropdownComponent Logout={Logout} /> */}
            {/* <DropdownComponent /> */}
                {/* <a href="#"><img src={usuario} width="55px" height="55px"></img></a> */}
            </div>
        </div>
        <div className="menuBar">
            <ul>
                <li><NavLink to="home">Home</NavLink></li>
                <li><NavLink to="about">About</NavLink></li>
                {/* <li><NavLink to="login">login</NavLink></li> */}
                <li><a href="#">Formulario</a></li>
                <li><a href="#">Tienda</a></li>
                 {/* <button onClick={Logout}>Logout</button>  */}
                <li className="item-carrito"><a href="#" style={{float: 'right'}}><img src={carrito} width="35px" height="33px"></img></a></li>
                <form className="d-flex">
                    <input className="form-control me-2" type="text" placeholder="Buscar prendas..."></input>
                    <button className="btn btn-primary" type="button">Buscar</button>
                    </form>
        
            </ul>
        </div>
        <div>
        </div>


        <main>
            <Outlet />
        </main>
    </div>

    <div className="footer">Universidad Industrial de Santander<br></br>
        Bucaramanga - Santander
    </div>
</div>
  )
}

export default NavBar
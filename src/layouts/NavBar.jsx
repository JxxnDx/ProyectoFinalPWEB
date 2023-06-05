import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../context/contexto";
import carrito from '../imgs/carrito1.png'
import MyClothes from '../imgs/MyClothes-removebg-preview.png'
import DropdownComponent from './Dropdown';
import '../App.css';
import React from "react"


const NavBar = () => {
const navegacion = useNavigate();
const{deslogearme, logeado} = useContext(Contexto);
const Logout =()=>{

    navegacion('/',{replace:true})
    deslogearme()
}
  return (
    <div className="all">
        <div className="root-layout">
            <div className="Encabezado">
                    <div className="logo" style={{float: 'left'}}>
                        <img src={MyClothes} width="80px" height="80px"></img>
                    </div>
                <div className="titulo">
                    MyClothes
                </div>
                <div className="iniciar">
                    <DropdownComponent/>
                </div>
            </div>
            <div className="menuBar">
                <ul>        
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    <li><NavLink to="Formulario">Formulario</NavLink></li>
                    <li><NavLink to="carrito">Tienda</NavLink></li>
                    <li className="item-carrito"><NavLink to="carrito" style={{float: 'right'}}><img src={carrito} width="35px" height="33px"></img></NavLink></li>
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Buscar prendas..."></input>
                        {/* <button className="btn btn-primary" type="button">Buscar</button> */}
                    </form>
                </ul>
            </div>

            <div className = "main-content">    
                <main className>
                    <Outlet />
                </main>
            </div>
        </div>
    </div>
  )
}

export default NavBar
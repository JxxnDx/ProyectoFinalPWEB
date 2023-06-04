import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../context/contexto";
import carrito from '../imgs/carrito1.png'
import MyClothes from '../imgs/MyClothes-removebg-preview.png'
import DropdownComponent from './Dropdown';
import ig from '../imgs/ig.png'
import fb from '../imgs/Facebook_f_logo_(2019).svg.png'
import tw from '../imgs/Twitter-logo.png'
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
                    <li><NavLink to="home">Home</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    <li><NavLink to="Formulario">Formulario</NavLink></li>
                    <li><a href="#">Tienda</a></li>
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

        <div className="footer">
            <div className = "redes">
                <a href="https://www.instagram.com/uis/"> <img src={ig} style={{width: "30px", height: "30px"}}/> </a>
                <a href="https://www.facebook.com/UISColombia/"> <img src={fb} style={{width: "30px", height: "30px"}}/> </a>
                <a href="https://twitter.com/UIS"> <img src={tw} style={{width: "30px", height: "30px"}}/> </a>
            </div>
            <div className =  "info">
                Universidad Industrial de Santander <br></br>
                Bucaramanga - Santander
            </div>
            <div className = "otro">

            </div>
        </div>
    </div>
  )
}

export default NavBar
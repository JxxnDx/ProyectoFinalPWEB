import "../App.css";
import promo2 from "../imgs/promo2.jpg"
import promo3 from "../imgs/promo3.jpg"
import hombre from "../imgs/hombre.png"
import mujer from "../imgs/mujer.png"
import niño from "../imgs/niño.png"
import React from "react"
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div className="contenido">
            <div className="filtros">
                <ul>
                    <li><NavLink className="active" to="carrito">Aplicar filtros</NavLink></li>
                    <li><NavLink to="carrito">Tipo de prenda</NavLink></li>
                    <li><NavLink to="carrito">Talla</NavLink></li>
                    <li><NavLink to="carrito">Otros</NavLink></li>
                </ul>
            </div>
            <div className="Productos">
                <div className = "Promociones">
                    <div id="demo" class="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        </div>
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={promo3} alt="Promo1" className="d-block" style={{width: '100%', height: '300px'}}/>
                        </div>
                        <div className="carousel-item">
                            <img src={promo2} alt="Promo2" className="d-block" style={{width: '100%', height: '300px'}}/>
                        </div>
                        <div className="carousel-item">
                            <img src={promo3} alt="Promo3" className="d-block" style={{width: '100%', height: '300px'}}/>        
                        </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
                <div className = "producto">
                    HOMBRE
                    <NavLink to="Carrito"><img src={hombre} width="400" height="300"/></NavLink>
                </div>
                <div className = "producto">
                    MUJER
                    <NavLink to="Carrito" href="#"><img src={mujer} width="350" height="300"/></NavLink>
                </div>
                <div className = "producto">
                    NIÑO
                    <NavLink to="Carrito"><img src={niño} width="400" height="300"/></NavLink>
                </div>        
            </div>
        </div>
    )
}
export default Home;
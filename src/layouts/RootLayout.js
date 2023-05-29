import {NavLink, Outlet} from "react-router-dom";
import carrito from '../imgs/carrito1.png'
import MyClothes from '../imgs/MyClothes-removebg-preview.png'
import usuario from '../imgs/MyClothes.png'
import '../App.css';

export default function RootLayout() {
    return(
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
                    <a href="#"><img src={usuario} width="55px" height="55px"></img></a>
                </div>
            </div>
            <div className="menuBar">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    <li><a href="#">Formulario</a></li>
                    <li><a href="#">Tienda</a></li>
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
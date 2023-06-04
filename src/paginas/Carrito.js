import React from "react";
import '../hojas-de-estilo/carrito.css'
import work from '../imgs/workInProgress.png'

function carrito(){
    return(
        <div className = "carrito">
            <div className = "agregados">
                <h1>Oops! Parece que aún no me encuentro disponible...</h1>
                <p>Esperame en las próximas actualizaciones!</p>
                <img src={work} style={{width: '500px', height: '500px'}}></img>
            </div>
        </div>
    )
}

export default carrito;
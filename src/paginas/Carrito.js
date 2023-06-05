import React from "react";
import '../hojas-de-estilo/carrito.css'
import work from '../imgs/workInProgress.png'

function carrito(){
    return(
        <div className = "carrito">
            <div className = "agregados">
                <h1>Oops! Parece que aún no me encuentro disponible...</h1>
                <p>Esperame en las próximas actualizaciones!</p>
                <img src={work} style={{width: '250px', height: '250px'}}></img>
            </div>
            <div className = "video">
                <p>Mientras, disfruta del siguiente video...</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QCNinrT3u3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default carrito;
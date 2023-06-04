import React from "react"
import "./about.css"

export default function About() {
    return(
        <div className = "about">
            <div className= "aboutUS">
                <img className = "logoUis" src = {require("../imgs/UIS.png")} alt = "uis"/> 
                <div className = "Info">
                    <p className = "titulo2">¿Quiénes somos?</p>
                    <p className = "texto"><span style={{fontSize: '32px', fontWeight: 'bold', color: 'purple'}}>H</span>ola! Somos un grupo de estudiantes de la Universidad Industrial de Santander,
                    de la escuela de Ingenieria de Sistemas. Actualmente estamos cursando la materia de Programación en la Web, 
                    lo que nos lleva al mótivo de crear esta página. Este lo hacemos como proyecto final, para aplicar todos los conocimientos 
                    adquiridos en el curso. Como podrás ver, la página simula una tienda de ropa en linea, con las funciones más comunes
                    que sueles encontrar en una. ¡Esperamos y sea de tu agrado!</p>
                </div>
            </div>
            
            <h1 className="integrantes">Integrantes:</h1>

            <div className="estudiante">
            <p className="nombre">Nery Karolina Aponte Barajas - 2202021</p>
            <p className="texto"></p>
            </div>
            <div className="estudiante">
                <p className="nombre">Juan Jerónimo Jauregui Prince - 2220068</p>
                <p className="texto"></p>
            </div>
            <div className="estudiante">
                <p className="nombre">Roger Sergio Hernandez Sierra - 2220065 </p>
                <p className="texto"></p>
            </div>
            <div className="estudiante">
                <p className="nombre">Juan David Pallares Pallares - 2220079</p>
                <p className="texto"></p>
            </div>
        </div>
        
    )
}
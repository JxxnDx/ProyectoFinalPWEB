import React from "react"
import Accordion from 'react-bootstrap/Accordion';
import "../hojas-de-estilo/about.css"

export default function About() {
    return(
        <div className = "about">
            <div className= "aboutUS">
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

            <Accordion className="acordeon">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="nombre">Nery Karolina Aponte Barajas</Accordion.Header>
                    <Accordion.Body>
                    Código: 2202021 <br></br>
                    Carrera: Ingenieria de Sistemas  <br></br>
                    Semestre: Sexto
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className="nombre">Juan Jerónimo Jauregui Prince</Accordion.Header>
                    <Accordion.Body>
                    Código: 2220065 <br></br>
                    Carrera: Ingenieria de Sistemas <br></br>
                    Semestre: Tercero
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className="nombre">Roger Sergio Hernandez Sierra</Accordion.Header>
                    <Accordion.Body>
                    Código: 2220068 <br></br>
                    Carrera: Ingenieria de Sistemas <br></br>
                    Semestre: Tercero
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className="nombre">Juan David Pallares Pallares</Accordion.Header>
                    <Accordion.Body>
                    Código: 2220079 <br></br>
                    Carrera: Ingenieria de Sistemas <br></br>
                    Semestre: Tercero
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        
    )
}
import React from "react";
import '../App.css'
import ig from '../imgs/ig.png'
import fb from '../imgs/Facebook_f_logo_(2019).svg.png'
import tw from '../imgs/Twitter-logo.png'

function footer(){
    return(
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
    )
}

export default footer;
import Provider from "./context/provider";
import Router1 from "./router/router1.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"

function App () {
  
  return (
    <>
    <Provider>
        <Router1/>
    </Provider>
     
    </>
  )
}

export default App

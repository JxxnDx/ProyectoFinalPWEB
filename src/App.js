import Provider from "./context/provider"
import Router1 from "./router/router1"
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';




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

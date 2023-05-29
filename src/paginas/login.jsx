import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import Contexto from "../context/contexto";
import "./log.css";





const Login = () => {
    const {logearme} = useContext(Contexto)
    const navegacion=useNavigate();
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState("");

    const login=(event)=>{
      event.preventDefault();
      if  (usuario === "usuario" && contrasena === "contrasena") {
        navegacion('/login',{replace:true})
        logearme('usuario')
    }
    else {
      setError("Usuario o contraseña incorrectos");
    }
  };
    return (
    <><div class="todo">
       <div class="tit">
              <p class ="titulo"><span class="c1">MY</span><span class="c2">CLOTHES</span></p>
            </div>
      <div className="container">
           
          <form onSubmit={login}>
               <div>
                   <label htmlFor="usuario">Usuario:</label>
                      <input
                         type="text"
                         id="usuario"
                         value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                      />
                </div>
                <div>
                     <label htmlFor="contrasena">Contraseña:</label>
                      <input
                      type="password"
                     id="contrasena"
                     placeholder="******"
                      value={contrasena}
                     onChange={(e) => setContrasena(e.target.value)}
                    />
                </div>
                <button type="submit">Iniciar sesión</button>
                 {error && <p>{error}</p>}
           </form>
            <button> No tienes Cuenta? !Registrate</button>
      </div>
      </div>

    </>
    
  )
}

export default Login
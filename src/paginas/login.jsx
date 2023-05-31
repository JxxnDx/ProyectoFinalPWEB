import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import Contexto from "../context/contexto";
import "./log2.css";





const Login = () => {
    const {logearme} = useContext(Contexto)
    const navegacion=useNavigate();
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

    const login=(event)=>{
      event.preventDefault();
      if  (usuario === "usuario" && contrasena === "contrasena") {
        navegacion('/',{replace:true})
        logearme('usuario')
    }
    else {
      setError("Usuario o contraseña incorrectos");
    }
  };
    return (
      <div className="container">
      <div className="text-container">
        <h1 className="text-center text-white">MYCLOTHES</h1>
      </div>
      <div className="login-container">
        <form onSubmit={login}>
          <div className="login-form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="text" id="email"  value={usuario}
                        onChange={(e) => setUsuario(e.target.value)} className="form-control" />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Contraseña</label>
            <div className="input-group">
              <input type="password" id="password"  value={contrasena}
                     onChange={(e) => setContrasena(e.target.value)} className="form-control" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <input type="checkbox" id="show-password"  checked={showPassword} onChange={handleShowPassword} />
                  <label className="form-check-label" htmlFor="show-password">
                    Mostrar contraseña
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mx-auto d-block">
            Iniciar sesión
          </button>
        </form>
        <div className="text-center mt-3">
          <a href="#" className="forgot-password-link">
            ¿Olvidaste tu contraseña?
          </a>
          <br />
          <a href="#" className="create-account-link">
            ¿No tienes una cuenta?
          </a>
        </div>
      </div>
    </div>
    
  )
}

export default Login

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../context/contexto";
import Axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import "./log2.css";

const Login = () => {
  const { logearme } = useContext(Contexto);
  const navegacion = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setCaptchaError(false);
  };
  const redirect = () => {
    navegacion('/register')
    // Realiza cualquier otra acción que desees
  };

  const login = (event) => {
    event.preventDefault();

    // Verificar si se completó el CAPTCHA
    if (!captchaValue) {
      setCaptchaError(true);
      return;
    }
    Axios.post("http://localhost:3001/login", {
      username: usuario,
      password: contrasena,
    })
      .then((response) => {
        if (response.data.message) {
          setError(response.data.message);
        } else {
          navegacion("/privado/", { replace: true });
          logearme(response.data[0].email);
        }
      })
      .catch((error) => {
        setError("Ha ocurrido un error. Por favor, intenta nuevamente.");
      });

   
  };

  const passwordInputType = showPassword ? "text" : "password";

  return (
    <div className="todo">
      <div className="container">
        <div className="text-container">
          <h1 className="titulo">MYCLOTHES</h1>
        </div>
        <div className="login-container">
          <form onSubmit={login}>
            <div className="login-form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="text"
                id="email"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="login-form-group">
              <label htmlFor="password">Contraseña</label>
              <div className="input-group">
                <input
                  type={passwordInputType}
                  id="password"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  className="form-control"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <input
                      type="checkbox"
                      id="show-password"
                      checked={showPassword}
                      onChange={handleShowPassword}
                    />
                    <br />
                    <br />
                    <label className="form-check-label" htmlFor="show-password">
                      Mostrar contraseña
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="captcha-container">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleCaptchaChange}
              />
              {captchaError && <span className="error">¿Eres un robot? completa el captcha</span>}
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
            <a href="#" onClick={redirect} className="create-account-link">
              ¿No tienes una cuenta?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

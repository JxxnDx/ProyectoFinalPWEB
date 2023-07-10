import React, { useState } from 'react';
import Axios from 'axios';

import { useNavigate } from "react-router-dom";

import ReCAPTCHA from "react-google-recaptcha";
import "./log2.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  
  const [registerStatus, setRegisterStatus] = useState("");
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setCaptchaError(false);
  };

  const register = (e) => {
    e.preventDefault();
     if (!captchaValue) {
      setCaptchaError(true);
      return;
     }
    Axios.post("http://localhost:3001/register", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setRegisterStatus(response.data.message);
      }else{
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
        navigate('/login');
      }
    });
  };

  return (
    <div className="todo">
      <div className="container">
        <div className="text-container">
          <h1 className="titulo">MYCLOTHES</h1>
        </div>
        <div className="login-container">
          <form onSubmit={register}>
            <div className="login-form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="login-form-group">
              <label htmlFor="username">Usuario</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="login-form-group">
              <label htmlFor="password">Contraseña</label>
              <div className="input-group">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            {<div className="captcha-container">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleCaptchaChange}
              />
              {captchaError && <span className="error">¿Eres un robot? Completa el captcha</span>}
            </div> }
            <button type="submit" className="btn btn-primary mx-auto d-block">
              Registrarse
            </button>
            <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

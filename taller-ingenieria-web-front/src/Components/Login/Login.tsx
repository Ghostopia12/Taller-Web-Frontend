import React, { useState } from "react";
import "./Login.css";
import { login } from "../../shared/services/AuthService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUser, setErrorUser] = useState("");
  const [errorPassword, seterrorPassword] = useState("");
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateFields()) {
      await login({ username, password });
    }
  };

  const validateFields = () => {
    if (!username) {
      setErrorUser("El nombre de usuario es obligatorio");
    } else if (!password) {
      seterrorPassword("La contraseña es obligatoria");
    }

    if (!username || !password) {
      return false;
    }
    setErrorUser("");
    seterrorPassword("");
    return true;
  };

  return (
    <main>
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form>
          <div>
            <label htmlFor="username">Nombre de Usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onFocus={() => setErrorUser("")}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
            <p className="error">{errorUser}</p>
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              autoCapitalize="off"
              onFocus={() => seterrorPassword("")}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error">{errorPassword}</p>
          </div>
          <button
            className="moving-gradient-button"
            onClick={(e) => {
              handleLogin(e);
            }}
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;

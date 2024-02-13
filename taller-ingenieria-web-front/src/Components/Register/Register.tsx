import React, { useState } from "react";
import "./Register.css";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { register } from "../../shared/services/AuthService";
import { UserRole } from "../../shared/enums/UserRoles";


const Register = () => {
  const MySwal = withReactContent(Swal);

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorUser, setErrorUser] = useState("");
  const [errorPassword, seterrorPassword] = useState("");
  const [selectedRole, setSelectedRole] = React.useState(UserRole.RESIDENTE);

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value as UserRole);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateFields()) {
      MySwal.fire({
        title: <p>Iniciando sesion, esto puede tardar un poco</p>,
        didOpen: () => {
          MySwal.showLoading();
          register({email, username, password, role : selectedRole })
            .then((response) => {
              console.log(response);
              localStorage.setItem("token", response.token);
              localStorage.setItem("username", response.username);
              localStorage.setItem("role", response.role);
              window.location.href = "/";
            })
            .catch((error) => {
              console.log(error);
              MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Usuario o contraseña incorrectos",
              });
            });
        },
      });
    }
  };

  const validateFields = () => {
    if (!username) {
      setErrorUser("El nombre de usuario es obligatorio");
    } 
    if(!password){
        seterrorPassword("La contraseña es obligatoria");
    }
    if(!email){
        setErrorEmail("El correo es obligatorio!")
    }

    if (!username || !password || !email) {
      return false;
    }
    setErrorUser("");
    seterrorPassword("");
    setErrorEmail("")
    return true;
  };

  return (
    <main>
      <div className="login-container">
        <h2>¡Unete a Community!</h2>
        <form>
        <div>
            <label htmlFor="email">Correo:</label>
            <input
              type="email"
              id="email"
              value={email}
              onFocus={() => setErrorEmail("")}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
            <p className="error">{errorEmail}</p>
          </div>

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

          <div id="role">
          <select
            name="role"
            value={selectedRole}
            onChange={handleRoleChange}
          >
            <option value={UserRole.RESIDENTE}>Residente</option>
            <option value={UserRole.ADMIN}>Administrador</option>
            <option value={UserRole.CONTABLE}>Contable</option>
            <option value={UserRole.GUARDIA}>Guardia</option>
            <option value={UserRole.TRABAJADOR}>Trabajador</option>
            <option value={UserRole.PROPIETARIO}>Propietario</option>
          </select>
          </div>

          <button
            className="moving-gradient-button"
            onClick={(e) => {
              handleLogin(e);
            }}
          >
            Registrar usuario
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;

import { useState } from "react";
import { RiGameFill } from "react-icons/ri";
import { Navigate, useNavigate } from "react-router-dom";
import User from "../user";

const Login = () => {

    const usuario = {
        login:'oi@gmail',
        senha:'123'
    }

    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if(login === usuario.login && senha === usuario.senha) {
            //Navegacao
            localStorage.setItem("login", login);
            localStorage.setItem('senha', senha);
            navigate("/user")
        }

        console.log("HANDLE LOGIN")
    }


    return(
        <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={login}
              onChange={e => setLogin(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={handleLogin}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
    );
};

export default Login;
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import "./styles.css";
import "./login.css";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router";

const user = {
  login: "Aluno",
  senha: "123",
};

const Login = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    e.preventDefault();

    if (login === user.login && senha === user.senha) {
      localStorage.setItem("login", login);
      localStorage.setItem("senha", senha);
      // alert("Usuário validado")
      navigate("/login");
    } else {
      alert("Usuário ou senha inválido! Tente novamente.");
    }
  };

  return (
    <>
      <div className="header">
        <Navbar className="navbar ms-3">
          <Navbar.Brand href="/home">
            <FaStore className="iconeloja" size={35} />
          </Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link className="home" href="/home">
              Home
            </Nav.Link>
          </Nav>
          <Nav.Link
            className="login btn  btn-outline-primary me-3"
            href="/login"
          >
            Login{" "}
          </Nav.Link>
        </Navbar>
      </div>
      <div className="container mb-4">
        <div className="body mt-4">
          <div className="row">
            <div className="col-md-6">
              <img
                className="photo"
                src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/3242_C9BAF28E8A349AB0-2.jpg?w=876&h=484&crop=1"
                alt="img"
                width="100%"
                height="100%"
              />
            </div>
            <div className="col-md-6">
              <h3 className="text-center">Acesso do funcionário!</h3>
              <div className="btlogin">
                <div className="Auth-form-container">
                  <form className="Auth-form">
                    <div className="Auth-form-content">
                      <h2 className="Auth-form-title"></h2>
                      <div className="form-group">
                        <label>Login</label>
                        <input
                          type="text"
                          placeholder="Entre com o seu Id de usuario"
                          value={login}
                          onChange={(e) => setLogin(e.target.value)}
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Senha</label>
                        <input
                          type="password"
                          placeholder="Entre com sua senha"
                          value={senha}
                          onChange={(e) => setSenha(e.target.value)}
                        />
                      </div>
                      <p>
                        <a className="ancoralog" href="#">Esqueci minha senha</a>
                      </p>
                      <p>
                        <a className="ancoralog" href="../Cadastro">Ainda não tem cadastro?</a>
                      </p>
                      <div className="d-grid gap-2 mt-3">
                        <button
                          type="submit"
                          className="logbottom btn btn-primary"
                          onClick={handleEmail}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

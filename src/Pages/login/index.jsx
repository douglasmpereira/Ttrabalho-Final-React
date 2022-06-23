import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "./login.css";
import { FaStore } from "react-icons/fa";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/auth";

const user = {
  login: "Aluno",
  senha: "123",
};

const Login = () => {
  const { logar } = useContext(AuthContext);

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    e.preventDefault();
    logar(login, senha);

    if (login === user.login && senha === user.senha) {
      localStorage.setItem("login", login);
      localStorage.setItem("senha", senha);
      navigate("/user");
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
                src="https://img.freepik.com/vetores-gratis/homem-sentado-na-mesa-e-desbloqueando-o-computador-configuracoes-do-computador-ilustracao-plana-de-login_74855-20645.jpg?w=740&t=st=1655922614~exp=1655923214~hmac=332ad3fdaba597d16166dd6400fd0b6d4365e859cffd6d42ba32af5be5bdc14a"
                alt="homen acessando o computador"
                width="100%"
                height="96%"
              />
            </div>
            <div className="col-md-6 ">
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
                          placeholder="Entre com o seu Id"
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
                        <a className="ancoralog" href="#esquecisenha">
                          Esqueci minha senha
                        </a>
                      </p>
                      <p>
                        <a className="ancoralog" href="#cadastrar">
                          Ainda não tem cadastro?
                        </a>
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

import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import "./styles.css";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import Produto from "../../Componentes/Produto";

const User = () => {
  return (
    <>
      <div className="head">
        <Navbar className="navbar ms-3">
          <Navbar.Brand href="#home">
            <FaStore className="iconeloja" size={30} />
          </Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link className="navlink" href="/login">
              Sair
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div className="container-fluid">
        <div className="body mt-4">
          <Produto />
        </div>
        <div className="container-fluid">
          <div className="footer py-3 ">
            <div className="row ">
              <div className="col md-2 d-flex ms-5 t">
                <a href="">
                  <BsFacebook size={20} />
                </a>
                <a href="">
                  <RiInstagramFill size={20} />
                </a>
                <a href="">
                  <BsLinkedin size={20} />
                </a>
              </div>
              <div className="rodape col md-10 d-flex justify-content-end me-5">
                <a href="Esta com problemas? fale con">
                  Algum problema? fale conosco!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default User;

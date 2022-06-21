import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import "./styles.css";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { FcBusinesswoman } from "react-icons/fc";
import Produto from "../../Componentes/Produto";

const User = () => {
  return (
    <>
      <div className="header">
        <Navbar className="navbar ms-3">
          <Navbar.Brand href="#home">
            <FaStore className="iconeloja" size={30} />
          </Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <label className="me-2" htmlFor="">Bem vindo(a) novamente, Nome do funcionario </label>
          <FcBusinesswoman className="me-3" size={25}/>
          <Nav.Link
            className="login btn  btn-outline-primary me-3"
            href="#login" >
            Logout{" "}
          </Nav.Link>
        </Navbar>
      </div>
        <div className="body mt-4">
          <Produto />
      </div>
    </>
  );
};
export default User;

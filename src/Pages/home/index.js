import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "./styles.css";
import { FaStore } from "react-icons/fa";

const Home = () => {
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
                src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-planilhas_114360-736.jpg?w=740&t=st=1655921279~exp=1655921879~hmac=7fdc784fc4a39a4f152f87c7146af11df44c4743cdda3ebfecdc5deb7ad51985"
                alt="img"
                width="100%"
                height="100%"
              />
            </div>
            <div className="col-md-6 text-center mt-3">
              <p>
                {" "}
                <br />
                <h4>ADM MARKET SYSTEM-AMS </h4>
                <br /> Sistemas de gerenciamento administrativo AMS te
                proporciona a melhor experiência em gerenciamento do seu
                negócio. <br />
                Mussum Ipsum, cacilds vidis litro abertis. Per aumento de
                cachacis, eu reclamis. Todo mundo vê os porris que eu tomo litro
                abertis de cachacis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

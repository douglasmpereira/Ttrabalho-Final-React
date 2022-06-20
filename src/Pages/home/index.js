import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import './styles.css';
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaStore} from "react-icons/fa";






const Home = () => {
  return (
    <> 
      <div className="head">
        <Navbar className="navbar ms-3" >
            <Navbar.Brand href="#home">
            <FaStore size={30}/>
            </Navbar.Brand>
            <Nav className="me-auto ">
              <Nav.Link  href="#home">Home</Nav.Link>
              <Nav.Link className="navlink" href="#login">Login</Nav.Link>
            </Nav>
        </Navbar>
        </div>
        <div className="container-fluid">
        <div className="body mt-4">
          <div className="row">
            <div className="col-6">
              <img className="photo" 
                src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/3242_C9BAF28E8A349AB0-2.jpg?w=876&h=484&crop=1"
                alt="img"
                width="100%"
                height="100%"/>
            </div>
            <div className="col-6 text-center mt-3">
              <p>
                ipsum ipsum ipsum ipsumipsum ipsumipsum ipsumipsum ipsumipsum
                ipsumipsum ipsumipsum ipsumipsum ipsumipsum ipsumipsum ipsum
                ipsum ipsum ipsum ipsumipsum ipsumipsum ipsumipsum ipsumipsum
                ipsumipsum ipsumipsum ipsumipsum ipsumipsum ipsumipsum ipsum
                ipsum ipsum ipsum ipsumipsum ipsumipsum ipsumipsum ipsumipsum
                ipsumipsum ipsumipsum ipsumipsum ipsumipsum ipsumipsum ipsum
              </p>
            </div>
          </div>
        </div>
        <div className="footer text-center py-3 absolute-bottom">
            <div className="row ">
                <div className="col md-2 d-flex ms-5 tg-3">
                    <BsFacebook/>
                    <RiInstagramFill/>
                    <BsLinkedin/>
                </div>
                <div className="rodape col md-10 d-flex justify-content-end me-5"><a href="Esta com problemas? fale con">Algum problema? fale conosco!</a></div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import redfox from '../images/redfox.svg';
import redfoxText from '../images/redfoxtext.svg';
import '../styles/Navbar.css';

function RedFoxNavbar() {
    return (
        <Navbar expand="lg" className="navbar-light mb-4 everything" style={{ backgroundColor: "#eeeeee" }}>
            <Container>
                <Navbar.Brand href="#home" className="brand-container">
                    <img
                        alt="RedFox Construction Logo"
                        src={redfox}
                        width="70"
                        height="70"
                        className="d-inline-block align-top"
                    />
                    <img
                        alt="RedFox Text Logo"
                        src={redfoxText}
                        width="150"
                        height="90"
                        className="brand-text-svg"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto gap-4">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#about">About Us</Nav.Link>
                      <Nav.Link href="#services">Services</Nav.Link>
                      <Nav.Link href="#projects">Projects</Nav.Link>
                      <Nav.Item href="#book">
                          <Button variant="danger">Book Now!</Button>
                      </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default RedFoxNavbar;

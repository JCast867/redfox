import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import redfox from './redfox.svg';
import redfoxText from './redfoxtext.svg';
import Button from "react-bootstrap/Button";

function RedFoxNavbar() {
    return (
        <Navbar className="navbar-light" sticky="top" style={{ backgroundColor: "#eeeeee" }}>
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
                <Nav className="ms-auto gap-4">
                    <Nav.Link href="#about">About Us</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Item href="#book">
                        <Button variant="dark">Book Now!</Button>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}


export default RedFoxNavbar;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Container fluid className="bg-dark text-light py-3 mt-auto">
            <Row className="justify-content-center">
                <Col md={8} className="text-center">
                    <h4 className="fw-bold mb-0">Jaime Castaneda</h4>

                    <div className="d-flex justify-content-center mb-2">
                        <a href="https://github.com/JCast867/" target="_blank" rel="noreferrer" className="text-light mx-2 fs-2">
                            <FaGithub size={30}/>
                        </a>
                        <a href="https://www.linkedin.com/in/jaimecast03/" target="_blank" rel="noreferrer" className="text-light mx-2 fs-2">
                            <FaLinkedin size={30}/>
                        </a>
                        <a href="mailto:jaiimecast04@gmail.com" target="_blank" rel="noreferrer" className="text-light mx-2 fs-2">
                            <FaEnvelope size={30}/>
                        </a>
                    </div>

                    <p className="text-light opacity-75 mb-0">
                        &copy; {currentYear} Jaime Castaneda | All Rights Reserved
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
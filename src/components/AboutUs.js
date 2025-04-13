import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import guy from '../images/guy.jpg';


function AboutUs() {

    return (
        <Container>

            <Row className="align-items-center">
                <Col md={5}>
                    <img src={guy} alt="Boss Man" className="img-fluid mb-3 rounded"/>
                </Col>

                <Col md={7}>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title className="text-center">About Us</Card.Title>
                            <Card.Text>
                                We believe that exceptional
                                customer service and uncompromising quality are
                                paramount. We view pricing as a way to establish both
                                value and mutual respect with our clients—principles
                                that many in our industry struggle to balance. With
                                over 10 years of experience in the construction field
                                and a team whose expertise often exceeds my own, we
                                are dedicated to delivering projects that meet the
                                highest standards for our community.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import guy from '../images/guy.jpg';
import ListGroup from 'react-bootstrap/ListGroup';
import ServiceItem from './ServiceItems';


function AboutUs() {

    const services = [
    {
      title: "Roofing",
      description: "Professional roof installation, replacement, maintenance, and repair."
    },
    {
      title: "Siding",
      description: "High-quality siding services that elevate your property's look and protection."
    },
    {
      title: "Gutters",
      description: "Customized gutter solutions for optimal water drainage."
    },
    {
      title: "Windows and Doors",
      description: "Installation and repair services for energy-efficient windows and secure doors."
    },
    {
      title: "Decks and Fences",
      description: "Professional design and installation for decks and fences that enhance outdoor living."
    }
  ];


    return (
        <Container className="mb-4">

            <Row className="align-items-center">
                <Col md={5}>
                    <img src={guy} alt="Boss Man" className="img-fluid mb-3 rounded"/>
                </Col>

                <Col md={7}>
                    <Card className="mb-4" id="about">
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
                    <Card className="mb-3" id="services">
                        <Card.Body>
                            <Card.Title className="text-center">Services</Card.Title>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    {services.map((service, index) => (
                                        <ServiceItem
                                        key={index}
                                            title={service.title}
                                            description={service.description}
                                        />
                                    ))}
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;
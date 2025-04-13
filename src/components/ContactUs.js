import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const userID = process.env.REACT_APP_EMAILJS_USER_ID;

        emailjs.send(serviceID, templateID, formData, userID)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                alert('Email sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }, (error) => {
                console.error('Error sending email:', error.text);
                alert('There was an error sending your email. Please try again.');
            });
    };

    return (
        <Container className="mb-4">
            <Row>
                <Col md={5}>
                    <h2 className="text-center mb-3">Contact Us</h2>
                    <p className="text-center mb-4 text-muted">
                        Feel free to contact us for any questions or inquiries
                        by filling out the form, emailing us, or calling us!
                    </p>
                    <h6 className="text-center mb-2">
                        <MdOutlineEmail size={30} className="mb-1"/> redfoxconstruction@rfox.com
                        <br/>
                        <LuPhone size={30}/> 1-800-555-5555
                    </h6>
                </Col>
                <Col md={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message:</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-danger">Send</button>
                        </form>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactUs;

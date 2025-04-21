import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from "react";
import image1 from "../images/img1.jpg"
import image2 from "../images/img2.jpg"
import image3 from "../images/img3.jpg"
import image4 from "../images/img4.jpg"
import image5 from "../images/img5.jpg"
import image6 from "../images/img6.jpg"
import image7 from "../images/img7.jpg"
import image8 from "../images/img8.jpg"
import image9 from "../images/img9.jpg"
import image10 from "../images/img10.jpg"
import image11 from "../images/img11.jpg"
import image12 from "../images/img12.jpg"
import image13 from "../images/img13.jpg"
import image14 from "../images/img14.jpg"
import image15 from "../images/img15.jpg"
import image16 from "../images/img16.jpg"
import image17 from "../images/img17.jpg"
import image18 from "../images/img18.jpg"
import image19 from "../images/img19.jpg"
import '../styles/CarouselStyles.css';


function Main() {
    const redfox_images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19
    ];

    const [images] = useState(redfox_images);


    return (
        <Container className="mb-4" id="home">
            <h2 className="text-center mb-3">Quality Roof Construction</h2>
            <h6 className="text-center mb-5">Tailored Services for Your Property</h6>

            <Carousel className="image-carousel mb-5" id="projects">
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 carousel-image"
                            src={image}
                            alt={`Slide ${index + 1}`}
                            style={{objectFit: "contain"}}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

        </Container>
    )
}

export default Main;
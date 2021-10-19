import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Container>
            <Carousel className="mt-3">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Want to smile like this?</h3>
                        <p>Get a booking very soon!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Want to smile like this?</h3>
                        <p>Get a booking very soon!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Want to smile like this?</h3>
                    <p>Get a booking very soon!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Container>
        </>
    );
};

export default Banner;
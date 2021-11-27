import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import image1 from '../../../images/logo2.jpg';
import image2 from '../../../images/logo3.jpg';

const Banner = () => {
    return (
        <div className="my-5">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />


                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;
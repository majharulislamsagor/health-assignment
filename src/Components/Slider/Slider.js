import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div >

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/tJRwZjm/3.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>



                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/xXgBMkf/2.jpg"
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/8gKM1mp/1.jpg"
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Slider;
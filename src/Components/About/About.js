import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { faCoffee, faLocationArrow, faInbox, faPhone } from '@fortawesome/free-solid-svg-icons'
const About = () => {
    return (
        <div>
            <div>

                <div className="container mt-5 App">

                    <h1> About US</h1>
                    <Row xs={1} md={2}>
                        <Col><p className="w-75 mt-5">Medicare Japan is one of the most trusted and reliable healthcare providers in Bangladesh. We have been faithfully providing medical and diagnostic services to the people of the country at affordable prices since 2015.We are currently providing a total of four types of services which are ningen Dock, home & nursing services, diagnostic services & emergency ambulance services.
                            Our Programs include: Medical Waste, Toxic Materials, Safer Chemicals, Green Building and Energy, Healthy Food, Pharmaceuticals, Sustainable Procurement, Climate and Health, Transportation, Water. Learn more about how Health Care Without Harm works in your region!
                        </p></Col>
                        <Col><img className="img-fluid h-40" src={'https://st3.depositphotos.com/35530942/37242/v/950/depositphotos_372421826-stock-illustration-health-care-insurance-service-concept.jpg'} alt="" /></Col>
                    </Row>
                </div>
                <h1 className="mt-4">Our Location</h1>
                <p><FontAwesomeIcon icon={faLocationArrow} /> Level-4, 34, Awal Centre, Banani, Dhaka</p>
                <p > <FontAwesomeIcon icon={faInbox} /> Official : Info@medicare.com</p>
                <p > <FontAwesomeIcon icon={faPhone} /> Office HotLine : 16247 Office : 01977430976</p>

            </div>

        </div>
    );
};

export default About;
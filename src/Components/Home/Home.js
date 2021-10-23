import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';


const Home = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div>
            <Slider></Slider>
            <br />
            <br />


            <section className="mt-5 mb-4">
                <h1 className="fw-bolder">Our Services</h1>

                <div className="container cards ">

                    {
                        <div className="container mt-4">
                            <Row xs={1} md={3} className="g-4">
                                {services.map((service, idx) => (
                                    <Col>
                                        <Service
                                            key={service.id}
                                            service={service}></Service>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    }

                </div>

            </section>

            <div className="container mt-5 App">

                <h1> About US</h1>
                <Row xs={1} md={2}>
                    <Col><p className="w-75 mt-5">Medicare Japan is one of the most trusted and reliable healthcare providers in Bangladesh. We have been faithfully providing medical and diagnostic services to the people of the country at affordable prices since 2015.We are currently providing a total of four types of services which are ningen Dock, home & nursing services, diagnostic services & emergency ambulance services.
                        Our Programs include: Medical Waste, Toxic Materials, Safer Chemicals, Green Building and Energy, Healthy Food, Pharmaceuticals, Sustainable Procurement, Climate and Health, Transportation, Water. Learn more about how Health Care Without Harm works in your region!
                    </p></Col>
                    <Col><img className="img-fluid h-40" src={'https://st3.depositphotos.com/35530942/37242/v/950/depositphotos_372421826-stock-illustration-health-care-insurance-service-concept.jpg'} alt="" /></Col>
                </Row>
            </div>











        </div>
    );
};

export default Home;
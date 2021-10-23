import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, title, price, img, description } = props.service;
    return (
        <div>
            <Card border="primary" >
                <Card.Img className="imgs" variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-danger">{title}</Card.Title>
                    <Card.Text className="w-80 mx-auto">
                        {description}
                    </Card.Text>
                    <Card.Title>Price: {price} Taka</Card.Title>

                </Card.Body>
                <Link to={`/singelService/${id}`} ><Button className="mb-2" variant="outline-primary">Details</Button></Link>

            </Card>

        </div>
    );
};

export default Service;
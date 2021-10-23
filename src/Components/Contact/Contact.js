import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div >
            <div className="container w-50 border border-primary mt-5 mb-5">
                <div className=" mt-3 mb-5 border border-primary container">
                    <h1 className="  p-2  text-primary "> Fill Up This From </h1>
                    <p><p>Our Experts Will Call You </p></p>
                </div>
                <Form>

                    <Form.Group className="mb-3 border border-primary" controlId="formBasicEmail">

                        <Form.Control type="text" placeholder="Enter Name" />

                    </Form.Group>

                    <Form.Group className="mb-3 border border-primary" controlId="formBasicPassword">

                        <Form.Control type="text" placeholder="Contact number" />
                    </Form.Group>

                    <Button className="mb-3 mt-3" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </div>
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />

            </div>

        </div>

    );
};

export default Contact;
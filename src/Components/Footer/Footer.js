import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div>
            <Navbar bg="primary">
                <Container>
                    <div className="container App">

                        <h3 className="text-white"><FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faTwitter} /> <FontAwesomeIcon icon={faLinkedin} /></h3>


                        <p className="text-white">© 2021 Medical Service Company (MEDICARE) All rights reserved.</p>


                    </div>

                </Container>
            </Navbar>


        </div>
    );
};

export default Footer;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaLinkedin, FaPinterest, FaHandshake, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-area mt-3'>
            <Container>
                <Row>
                    <Col>
                    <div className="footer-text"><h3>Gym Equipment Stock house</h3></div>
                    <p>Exercise equipment is any apparatus or device used during physical activity to enhance the strength or conditioning effects of that exercise by providing either fixed or adjustable amounts of resistance, or to otherwise enhance the experience or outcome of an exercise routine.</p>
                    <div className="icon-area d-flex">
                    <p><FaFacebookF></FaFacebookF></p>
                    <p><FaLinkedin></FaLinkedin></p>
                    <p><FaPinterest></FaPinterest></p>
                    <p><FaHandshake></FaHandshake></p>
                    
                    </div>
                    </Col>
                    <Col>
                        <div className="location mt-4">
                            <div className="location-icon-ares d-flex">
                                <p className='pe-2 icons'><FaMapMarkerAlt></FaMapMarkerAlt></p>
                                <p>Mirpur 10, Dhaka, Bangladesh</p>
                            </div>
                            <div className="location-icon-ares d-flex">
                                <p className='pe-2 icons'><FaPhoneAlt></FaPhoneAlt></p>
                                <p>01767026831</p>
                            </div>
                            <div className="location-icon-ares d-flex">
                                <p className='pe-2 icons'><FaRegEnvelope></FaRegEnvelope></p>
                                <p>badruzzamanpritom@gmail.com</p>
                            </div>
                            <p className="copyRight text-center pt-2">
                                All Rights reserved &copy; Gym stock house - 2022
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
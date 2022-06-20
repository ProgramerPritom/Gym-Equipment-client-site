import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="not-found">
                            <h3>Oops! Can't Find your page!</h3>
                            <Button id='blog-btn' className='mt-2' as={Link} to='/'>Go to Home Page</Button>
                        </div>
                    </Col>
                    <Col>
                        <img className='notFoud-img' src='https://i.ibb.co/grWnJ85/404-thumb.png' alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;
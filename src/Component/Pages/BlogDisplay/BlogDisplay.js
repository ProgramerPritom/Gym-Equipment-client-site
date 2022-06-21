import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './BlogDisplay.css';

const BlogDisplay = () => {
    return (
        <div>
            <div className="blog-display-area">
                <div className="blog-text">
                    <h3 className='text-center'>Equipments Blog</h3>
                </div>
                <div className="blog-card-area">
                <CardGroup>
                    <Card className='m-2'>
                        <Card.Img variant="top" src="https://i.ibb.co/PjnLmzd/3d-render-dumbbells-set-realistic-detailed-close-up-view-isolated-sport-element-fitness-dumbbell-des.jpg" />
                        <Card.Body>
                        {/* <Card.Title>Card title</Card.Title> */}
                        <Button id='blog-btn'>Show Post</Button>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card className='m-2'>
                        <Card.Img variant="top" src="https://i.ibb.co/1K0X8sg/303660-800x533-how-use-most-common-exercise-machines-gym-1.jpg" />
                        <Card.Body>
                        <Button id='blog-btn'>Show Post</Button>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card className='m-2'>
                        <Card.Img variant="top" src="https://i.ibb.co/vxNp44R/img-2-07f96abb-0ee4-4c96-8057-5217d49fabc4-1.png" />
                        <Card.Body>
                        <Button id='blog-btn'>Show Post</Button>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card className='m-2'>
                        <Card.Img variant="top" src="https://i.ibb.co/x8shv3W/Banner-1656x981-gym-1.jpg" />
                        <Card.Body>
                        <Button id='blog-btn'>Show Post</Button>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card className='m-2'>
                        <Card.Img variant="top" src="https://i.ibb.co/23w3Q2m/home-gym-1.jpg" />
                        <Card.Body>
                        <Button id='blog-btn'>Show Post</Button>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card className='m-2'>
                        <Card.Img variant="top" src="https://i.ibb.co/hWs9VqL/to-gym-or-not-to-gym-banner-720x350-1.jpg" />
                        <Card.Body>
                        <Button id='blog-btn'>Show Post</Button>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
                </CardGroup>
                </div>
            </div>
        </div>
    );
};

export default BlogDisplay;
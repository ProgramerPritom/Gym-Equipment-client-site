import React from 'react';
import { Button, Card, Col, Container, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useEquipDetails from '../../../Hooks/useEquipDetails';
import './ManageEquipDetails.css';
import { FaPlus, FaRegEdit } from "react-icons/fa";


const ManageEquipDetails = () => {
    const {id} = useParams();
    const [equipDetail] = useEquipDetails(id);
    // console.log(equipDetail);
    return (
        <div>
            <h2 className='equipName'>{equipDetail.name}</h2>
            <div className="equipement-details">
                
                    <Container>
                    <Row>
                        <Col>
                        <div className=" border rounded">
                        <div className="img-section">
                            <img className='w-50' src={equipDetail.image} alt="" />
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <h4 className='equipmentName'>Supplier: <span className=''> {equipDetail.supplier}</span></h4>
                        
                        <div className="price-text d-flex justify-content-center align-items-center">
                            <p className='mt-4 ms-3 '>Price :</p>
                            <p className='mt-4 ms-3'>$ {equipDetail.price}</p>
                        </div>
                        </div>
                        
                    </div>
                   
                    </Col>
                        <Col>
                        <div className="">
                        <Card>
                            <div className="card-header">
                                <div className="quantity-area">
                                    <h3>Quantity : </h3>
                                    <h4>{equipDetail.quantity}</h4>
                                </div>
                                <Button id='blog-btn'>Delivered</Button>
                            </div>
                            <div className="card-body">
                             
                             <InputGroup className="mb-3">
                                <Form.Control
                                placeholder="Enter Quantity"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                />
                                <Button id='blog-btn'>ReStock</Button>
                            </InputGroup>
                             
                             <div className="description-text">
                             <Form>
                             <FloatingLabel
                                controlId="floatingTextarea"
                                label="Description"
                                className="mb-3"
                                contenteditable="true"
                            >
                                <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '200px' }} contentEditable value={equipDetail.description}/>
                                
                            </FloatingLabel>
                             </Form>
                             
                             </div>
                            </div>
                        </Card>
                    </div>
                    </Col>
                    </Row>
                    </Container>
                

                <Container className='mt-4'>
                    <Row>
                        <Col>
                            <div id='blog-btn2' className="add-item">
                                <div  className="add-item d-flex justify-content-center align-items-center">
                                    <FaPlus></FaPlus>
                                    <h3 className='ms-4'>Add Equipment</h3>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div id="blog-btn2" className='d-flex justify-content-center align-items-center'>
                                <div className="icon"><FaRegEdit></FaRegEdit></div>
                                <h3 className="ms-4">Update this Equipment</h3>
                            </div>
                        </Col>
                    </Row>

                </Container>

                 {}
            </div>
        </div>
    );
};

export default ManageEquipDetails;
import React from 'react';
import { Button, Card, Col, Container, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap';
import {toast} from 'react-toastify';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import useEquipDetails from '../../../Hooks/useEquipDetails';
import './ManageEquipDetails.css';
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from '../../Auth/Loading/Spinner';


const ManageEquipDetails = () => {
    const [user,loading] = useAuthState(auth);
    const {id} = useParams();
    const [equipDetail, setEquipDetail] = useEquipDetails(id);
    const navigate = useNavigate();
    if (loading) {
        return <Spinner></Spinner>
    }
    // console.log(equipDetail);

    const handleAdditem = () => {
        navigate('/additem');
    }
    const handleDeliver = (event) =>{
        
        const {quantity, ...rest} = equipDetail;
        const newQuantity = parseInt(quantity) - 1;
        const newEquipDetail = {quantity: newQuantity, ...rest};
        setEquipDetail(newEquipDetail);
        
    }
    const handleReStock = event =>{
        event.preventDefault();
        // console.log(event.target.formQuantity.value);
        const quantityValue = event.target.formQuantity.value;
        const {quantity, ...rest} = equipDetail;
        if (quantityValue != 0 ) {
            const newQuantity = parseInt(quantity) + parseInt(quantityValue);
            const newEquipDetail = {quantity: newQuantity, ...rest};
            setEquipDetail(newEquipDetail);
            event.target.reset();
        }
        else{
            toast('Please Enter Valid Number');
        }
        
        
    }

    const handleDescription = (event) =>{
        const {description, ...rest} = equipDetail;
        const newDescription = event.target.value;
        const newEquipDetail = {description: newDescription, ...rest};
        // console.log(newEquipDetail);
        setEquipDetail(newEquipDetail);
    }

    const handleUpdateEquip = () =>{
        const quantity = equipDetail.quantity;
        const description = equipDetail.description;
        // const updateDetail = {quantity,description};

        const url = `https://stormy-cove-02772.herokuapp.com/equipments/${id}`;
        fetch(url,{
            method: 'PUT',
            body: JSON.stringify({
                quantity,description
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast('Equipment Updated Successfully')
        })

    }

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
                            <h5 className='equipmentName'>Supplier: <span className=''> {equipDetail.supplier}</span></h5>
                        
                        <div className="price-text d-flex justify-content-center align-itemsj-center">
                            <p className='mt-4 ms-3 '>Price</p>
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
                                    <input className='input-quantity' type="number" name="quantity" value={equipDetail.quantity} id="" />
                                </div>
                                <Button id='blog-btn' onClick={handleDeliver}>Delivered</Button>
                            </div>
                            <div className="card-body">
                             
                             <Form onSubmit={handleReStock}>
                             <InputGroup className="mb-3">
                                <Form.Control
                                placeholder="Enter Quantity"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                name='formQuantity' autoComplete='off'
                                />
                                <Button id='blog-btn' type='submit'>ReStock</Button>
                            </InputGroup>
                             </Form>
                             
                             <div className="description-text">
                             <Form>
                             <FloatingLabel
                                controlId="floatingTextarea"
                                label="Description"
                                className="mb-3"
                                contenteditable="true"
                            >
                                <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '200px' }} contentEditable onChange={handleDescription} value={equipDetail.description}/>
                                
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
                                <div onClick={handleAdditem} className="add-item d-flex justify-content-center align-items-center">
                                    <FaPlus></FaPlus>
                                    <h3 className='ms-4'>Add Equipment</h3>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div onClick={handleUpdateEquip} id="blog-btn2" className='d-flex justify-content-center align-items-center'>
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
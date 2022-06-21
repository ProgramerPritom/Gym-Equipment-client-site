import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Spinner from '../../Auth/Loading/Spinner';

const AddItem = () => {
    const [user,loading] = useAuthState(auth);
    if (loading) {
        return <Spinner></Spinner>
    }

    const handleAddItem = event =>{
        event.preventDefault();

        const name = event.target.name.value;
        const email = user.email;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const description = event.target.description.value;
        const image = event.target.image.value;
        // console.log(name,email,price,quantity,supplier,description,image);
        
        fetch('https://stormy-cove-02772.herokuapp.com/equipments',{
            method: 'POST',
            body: JSON.stringify({
                name,email,price,quantity,supplier,description,image
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            event.target.reset()
            toast('Equipment added, Go to Equipments')
        })


    }



    return (
        <div>
            <h3 className='text-center mt-3'>Add New Equipment to Display</h3>
            <Form onSubmit={handleAddItem} className='mx-auto w-50 mt-4'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={user?.email} placeholder="Enter email" required readOnly disabled/>
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Equipment Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Equipment Name" required autoComplete='off'/>
                
            </Form.Group>
            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                <div className="form-number w-50 px-2">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name='price' placeholder="Enter Price" required autoComplete='off'/>
                </div>
                <div className="form-quantity w-50 px-2"><Form.Label>Quantity</Form.Label>
                <Form.Control type="number" name='quantity' placeholder="Set Quantity" required autoComplete='off'/></div>
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Supplier Name</Form.Label>
                <Form.Control type="text" name='supplier' placeholder="Supplier" required autoComplete='off'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
            as="textarea"
            name='description'
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
            required/>
        </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" name='image' placeholder="Equipment URL" required autoComplete='off'/>
            </Form.Group>
            
            <Button id="blog-btn" variant="primary" type="submit">
                Add new
            </Button>
            </Form>
        </div>
    );
};

export default AddItem;
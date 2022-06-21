import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import useMyItem from '../../../Hooks/useMyItem';
import { HiMinusSm, HiPlusSm, HiOutlineTrash, HiPencilAlt } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from '../../Auth/Loading/Spinner';

const MyItem = () => {
    const [user,loading] = useAuthState(auth);
    const [myItems ,setMyItems] = useMyItem();
    const navigate = useNavigate();

    if (loading) {
        return <Spinner></Spinner>
    }

    const handleUpdate = (id) =>{
        navigate(`/manage/${id}`)
    }

    const handleDelete = (id) =>{
        const confirm = window.confirm('Are you want to Delete this item');
        if (confirm) {
            const url = `https://stormy-cove-02772.herokuapp.com/equipments/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast("Successfully Delete Equipment from Database")
            const remaining = myItems.filter(myNewItem => myNewItem._id !==id);
            setMyItems(remaining);
        })
        }
    }

    return (
        <div>
            <h3 className='text-center my-4'> My Total Items : {myItems.length}</h3>
            <Container>
                <Row>
                <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>UPDATE</th>
                

                </tr>
            </thead>
            {
                myItems.map(myItem => <>
                    <tbody>
                <tr>
                <td className='w-25'><img className='w-25 img-fluid img-thumbnail' src={myItem.image} alt="hi" /></td>
                <td><p>{myItem.name}</p></td>
                <td><p>{myItem.price}</p></td>
                <td>
                    <div className='mt-3 p-0 d-flex justify-content-center align-items-center'>
                    <p>{myItem.quantity}</p>
                    </div>
                    
                    </td>
                <td><div className='icon mt-3 d-flex justify-content-center align-items-center'>
                    <p onClick={() =>handleUpdate(myItem._id)} className='me-2'><HiPencilAlt></HiPencilAlt></p>
                    <p onClick={() => handleDelete(myItem._id)} className='ms-2'><HiOutlineTrash></HiOutlineTrash></p>
                    </div></td>
               

                </tr>
                
                </tbody>
                </>)
            }
            </Table>
                    
                </Row>
            </Container>
        </div>
    );
};

export default MyItem;
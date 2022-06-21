import React from 'react';
import { Table } from 'react-bootstrap';
import useEquipment from '../../../Hooks/useEquipment';
import { HiMinusSm, HiPlusSm, HiOutlineTrash, HiPencilAlt } from "react-icons/hi";
import './ManageEquip.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const ManageEquip = () => {
    const [equipments,setEquipments] = useEquipment();
    const navigate = useNavigate();
    // console.log(equipments);

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
            const remaining = equipments.filter(equipment => equipment._id !==id);
            setEquipments(remaining);
        })
        }
    }

    return (
        <div>
            <h1 className='my-3 text-center '>Available in Stock {equipments.length}</h1>
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
                equipments.map(equipment => <>
                    <tbody>
                <tr>
                <td className='w-25'><img className='w-25 img-fluid img-thumbnail' src={equipment.image} alt="hi" /></td>
                <td><p>{equipment.name}</p></td>
                <td><p>{equipment.price}</p></td>
                <td>
                    <div className='mt-3 p-0 d-flex justify-content-center align-items-center'>
                    <p>{equipment.quantity}</p>
                    </div>
                    
                    </td>
                <td><div className='icon mt-3 d-flex justify-content-center align-items-center'>
                    <p onClick={() =>handleUpdate(equipment._id)} className='me-2'><HiPencilAlt></HiPencilAlt></p>
                    <p onClick={() => handleDelete(equipment._id)} className='ms-2'><HiOutlineTrash></HiOutlineTrash></p>
                    </div></td>
               

                </tr>
                
                </tbody>
                </>)
            }
            </Table>
        </div>
    );
};

export default ManageEquip;
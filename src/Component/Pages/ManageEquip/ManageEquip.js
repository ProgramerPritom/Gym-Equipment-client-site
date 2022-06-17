import React from 'react';
import { Table } from 'react-bootstrap';
import useEquipment from '../../../Hooks/useEquipment';
import { HiMinusSm, HiPlusSm, HiOutlineTrash, HiPencilAlt } from "react-icons/hi";
import './ManageEquip.css';


const ManageEquip = () => {
    const [equipments,setEquipments] = useEquipment();
    // console.log(equipments);
    return (
        <div>
            <h1 className='my-3 text-center '>Available in Stock</h1>
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
                    <div className='mt-3 p-0 d-flex justify-content-center align-items-center'><p className='iconm me-3'><HiMinusSm></HiMinusSm></p>
                    <p>{equipment.quantity}</p>
                    <p className='iconm ms-3'><HiPlusSm></HiPlusSm></p></div>
                    
                    </td>
                <td><div className='icon mt-3 d-flex justify-content-center align-items-center'>
                    <p className='me-2'><HiPencilAlt></HiPencilAlt></p>
                    <p className='ms-2'><HiOutlineTrash></HiOutlineTrash></p>
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
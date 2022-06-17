import React from 'react';
import { useParams } from 'react-router-dom';


const ManageEquipDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h3>This is Manage Details.</h3>
        </div>
    );
};

export default ManageEquipDetails;
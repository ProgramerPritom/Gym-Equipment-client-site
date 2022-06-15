import React from 'react';
import useEquipment from '../../../../Hooks/useEquipment';
import CatagoryCard from '../CatagoryCard/CatagoryCard';
import './CatagoryDisplay.css';

const CatagoryDisplay = () => {
    const [equipments , setEquipments] = useEquipment();
    const showEquipments = equipments.slice(0,6);
    // console.log(showEquipment);
    
    return (
        <div>
            <h2>Display Equipment are : </h2>
            <div className="display-card-area p-3">
            {
                showEquipments.map(showEquipment => <CatagoryCard key={showEquipment._id} showEquipment={showEquipment}></CatagoryCard>)
            }
            </div>
        </div>
    );
};

export default CatagoryDisplay;
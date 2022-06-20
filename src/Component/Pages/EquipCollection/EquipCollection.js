import React from 'react';

import useEquipment from '../../../Hooks/useEquipment';
import EquipCollectionCard from '../EquipmentCollectionCard/EquipCollectionCard';

const EquipCollection = () => {
    const [equipments] = useEquipment();
    // console.log(equipments)
    return (
        <div>
            <h3 className='text-center mt-2'>All Equipment Here</h3>
            <p className='text-center mt-2'>Find Your Equipment</p>
            <div className="display-card-area">
                {
                    equipments.map(equipment => 
                        <EquipCollectionCard key={equipment._id} equipment = {equipment}></EquipCollectionCard>
                    )
                }
            </div>
        </div>
    );
};

export default EquipCollection;
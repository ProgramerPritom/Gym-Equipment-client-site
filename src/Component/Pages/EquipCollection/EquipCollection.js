import React from 'react';

import useEquipment from '../../../Hooks/useEquipment';
import EquipCollectionCard from '../EquipmentCollectionCard/EquipCollectionCard';

const EquipCollection = () => {
    const [equipments] = useEquipment();
    // console.log(equipments)
    return (
        <div>
            <h3>This is Equipments Collection!</h3>
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
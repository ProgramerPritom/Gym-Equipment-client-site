import React, { useEffect, useState } from 'react';

const useEquipment = () => {
    const [equipments, setEquipments] = useState([])
    useEffect( () => {
        fetch("equipment.json")
        .then(res => res.json())
        .then(data => setEquipments(data))
    },[])
    return [equipments, setEquipments];
};

export default useEquipment;
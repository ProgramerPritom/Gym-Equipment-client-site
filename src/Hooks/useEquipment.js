import React, { useEffect, useState } from 'react';

const useEquipment = () => {
    const [equipments, setEquipments] = useState([])
    useEffect( () => {
        const url = "http://localhost:5000/equipments";
        fetch(url)
        .then(res => res.json())
        .then(data => setEquipments(data))
    },[])
    return [equipments, setEquipments];
};

export default useEquipment;
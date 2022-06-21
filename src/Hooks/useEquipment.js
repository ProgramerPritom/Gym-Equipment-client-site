import React, { useEffect, useState } from 'react';

const useEquipment = () => {
    const [equipments, setEquipments] = useState([])
    useEffect( () => {
        const url = "https://stormy-cove-02772.herokuapp.com/equipments";
        fetch(url)
        .then(res => res.json())
        .then(data => setEquipments(data))
    },[])
    return [equipments, setEquipments];
};

export default useEquipment;
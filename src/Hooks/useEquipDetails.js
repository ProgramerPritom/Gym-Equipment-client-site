import React, { useEffect, useState } from 'react';

const useEquipDetails = (id) => {

    const [equipDetail, setEquipDetail] = useState({});
    useEffect( () => {
        const url = `http://localhost:5000/equipments/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setEquipDetail(data))

    },[id])

    return [equipDetail, setEquipDetail];
};

export default useEquipDetails;
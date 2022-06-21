import React, { useEffect, useState } from 'react';

const useEquipDetails = (id) => {

    const [equipDetail, setEquipDetail] = useState({});
    useEffect( () => {
        const url = `https://stormy-cove-02772.herokuapp.com/equipments/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setEquipDetail(data))

    },[id])

    return [equipDetail, setEquipDetail];
};

export default useEquipDetails;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useMyItem = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    const email = user.email;
    useEffect(()=>{
        const url = `https://stormy-cove-02772.herokuapp.com/myitem?email=${email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMyItems(data))
    },[])
    return [myItems ,setMyItems];
};

export default useMyItem;
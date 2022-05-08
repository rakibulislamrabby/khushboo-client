import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([])
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://damp-island-69804.herokuapp.com/inventory?email=${email}`
            const { data } = await axios.get(url);
            //      {
            //     headers: {
            //         authorization: `Bearer ${localStorage.getItem("accessToken")}`
            //     }
            // }


            setItems(data)
        }
        getItems();
    }, [user])

    return (
        <div>
            <h2>My items</h2>
            <h3>{items.length}</h3>

        </div>
    );
};

export default MyItem;
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
            const { data } = await axios.get(url)
            //      {
            //     headers: {
            //         authorization: `Bearer ${localStorage.getItem("accessToken")}`
            //     }
            // });
            setItems(data)
        }
        getItems();
    }, [user])

    return (
        <div className='container'>
            <h2>My items</h2>
            <h3>{items.length}</h3>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Suplier Name</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                {
                    items.map(item =>
                        <tbody key={item._id}>
                            <tr>
                                <th scope='row'>{item.name}</th>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.suppliername}</td>
                                <td><button className='btn btn-danger'><i className="fs-5 text-white pe-2 fa-solid fa-trash-can"></i>Delete</button></td>
                            </tr>
                        </tbody>
                    )
                }
            </table>


        </div>
    );
};

export default MyItem;
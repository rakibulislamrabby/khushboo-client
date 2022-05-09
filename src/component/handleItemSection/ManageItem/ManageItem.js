import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const ManageItem = () => {
    const [items, setItems] = useProducts();

    const handleDelete = (id) => {
        const procced = window.confirm("Are you sure? Think again!!");
        if (procced) {
            const url = `https://damp-island-69804.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div className='container '>
            <h3 className='text-center text-success fs-1 mb-4'>Manage Items</h3>
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
                                <td><button className='btn btn-danger' onClick={() => handleDelete(item._id)}><i className="fs-5 text-white pe-2 fa-solid fa-trash-can"></i>Delete</button></td>
                            </tr>
                        </tbody>
                    )
                }
            </table>

            <Link className="border-1 bg-success rounded-3 mx-auto w-50 text-center text-white fw-bold nav-link" to="/addItem">Add New Item</Link>
        </div >
    );
};

export default ManageItem;
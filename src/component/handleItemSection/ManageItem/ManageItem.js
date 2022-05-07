import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const ManageItem = () => {
    const [items] = useProducts();
    const handleDelete = () => {

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
                                <td onClick={() => handleDelete()}><i className="fs-5 text-danger fa-solid fa-trash-can"></i></td>
                            </tr>
                        </tbody>
                    )
                }
            </table>
            {/* <div className='mx-auto w-50'>
                <Link to="/additem" className='btn btn-success w-50 text-center'>Add New Item</Link>
            </div> */}
            <a className="border-1 bg-success rounded-3 mx-auto w-50 text-center text-white fw-bold nav-link" href="/addItem">Add New Item</a>
        </div >
    );
};

export default ManageItem;
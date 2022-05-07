import React, { useEffect, useState } from 'react';

const ManageItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/inventory")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    const { name, price, Quantity, suplierName } = items;

    return (
        <div className='container my-5'>
            <h3 className='text-center text-success fs-1 mb-4'>Manage Items</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Suplier Name</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{name}</th>
                        <td>{price}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default ManageItem;
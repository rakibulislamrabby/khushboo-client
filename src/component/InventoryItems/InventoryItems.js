import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/inventory")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='container mt-5 mb-0'>
            <h1 className='text-center text-success'>Inventory Items</h1>
            <div className='row'>
                {
                    items.map(item => <InventoryItem key={item._id}
                        item={item}
                    ></InventoryItem>)
                }
            </div>

        </div>
    );
};

export default InventoryItems;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://damp-island-69804.herokuapp.com/inventory")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    const newItems = items.slice(0, 6);

    return (
        <div className='container mt-5 mb-0'>
            <h1 className='text-center text-success'>Inventory Items</h1>
            <div className='row'>
                {
                    newItems.map(item => <InventoryItem
                        key={item._id}
                        item={item}
                    ></InventoryItem>)
                }
            </div>
            <Link className="mt-3 border-1 bg-success rounded-3 mx-auto w-50 text-center text-white fw-bold nav-link" to="/manageitem">Manage Items</Link>
        </div>
    );
};

export default InventoryItems;
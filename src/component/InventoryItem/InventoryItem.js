import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryItem = ({ item }) => {
    const { _id, name, img, price, suppliername, quantity, description } = item;
    const navigate = useNavigate();

    const navigatetoDisplayDetails = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Supplier Name: {suppliername}</h6>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}pcs</p>
                    <p className="card-text">{description}</p>
                    <button onClick={() => navigatetoDisplayDetails(_id)} className="btn btn-primary">Stock Update</button>
                </div>
            </div>

        </div>
    );
};

export default InventoryItem;
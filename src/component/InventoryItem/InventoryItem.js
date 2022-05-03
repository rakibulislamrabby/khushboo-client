import React from 'react';

const InventoryItem = ({ item }) => {
    const { name, img, price, suppliername, quantity, description } = item
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Supplier Name: {suppliername}</h6>
                    <p>{price}</p>
                    <p>Quantity {quantity}</p>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Stock Update</a>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;
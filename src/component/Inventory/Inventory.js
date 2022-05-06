import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const Inventory = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])


    const { _id, name, img, price, suppliername, quantity, description } = product;


    return (
        <div className='container'>
            <h2 className='text-center text-success'>This is inventory section</h2>
            <div className="card ps-4 pt-4">
                <p>ID: {_id}</p>
                <h5>Name: {name}</h5>
                <img src={img} className="card-img-top w-25" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Supplier Name: {suppliername}</h5>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Description:---</p>
                    <p className="card-text"></p>
                    <a href="#" className="btn btn-primary">Delivered</a>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
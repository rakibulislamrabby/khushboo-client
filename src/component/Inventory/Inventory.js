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
            <h2 className='text-center text-success mb-3'>Items Details</h2>
            <div className='row'>
                <div className="col-lg-4">
                    <p>ID: {_id}</p>
                    <h5>Name: {name}</h5>
                    <p>{description}</p>
                    <h5 className="card-title">Supplier Name: {suppliername}</h5>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>

                    <p className="card-text"></p>
                    <a href="#" className="btn btn-success">Delivered</a>
                </div>
                <div className="col-lg-4">
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="col-lg-4">
                    <h5>Restock the Items</h5>
                    <input type="number" placeholder='Quantity' />
                    <br />
                    <button type='button' className='btn btn-success my-2'>Restock</button>

                </div>

            </div>




        </div>
    );
};

export default Inventory;
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

    //update quantity
    const handleRestock = (event) => {
        event.preventDefault();
        const Quantity = event.target.restock.value;
        const updateQuantity = parseInt(Quantity) + parseInt(quantity);
        console.log(updateQuantity);

        const url = `http://localhost:5000/inventory/${productId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success Update', data);
                alert("updated user");
                event.target.reset()
            })
    }

    const handleQuantity = () => {
        let newQuantity = quantity - 1;
        const newItem = { ...product, quantity: newQuantity };
        const url = `http://localhost:5000/inventory/${productId}`
        console.log(url);
    }

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
                    <a href="#" className="btn btn-success" onClick={handleQuantity}>Delivered</a>
                </div>
                <div className="col-lg-4 ">
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="col-lg-4 mt-5 pt-5 ps-5">
                    <h5>Restock the Items</h5>
                    <form onSubmit={handleRestock}>
                        <input type="number" name='restock' placeholder='Quantity' />
                        <br />
                        <button type='submit' className='btn btn-success my-2'>Restock</button>
                    </form>

                </div>

            </div>




        </div>
    );
};

export default Inventory;
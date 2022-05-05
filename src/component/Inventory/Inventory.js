import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import products from "./products.json"

const Inventory = () => {
    const { productId } = useParams();
    const [service] = useProductDetails(productId);

    const { id, name, img, price, suppliername, quantity, description } = service;
    console.log(service.img);

    return (
        <div className='container'>
            <h2 className='text-center text-success'>This is inventory section</h2>
            <div class="card ps-4 pt-4">
                <p>ID: {id}</p>
                <h5>Name: {name}</h5>
                <img src={img} class="card-img-top w-25" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Supplier Name: {suppliername}</h5>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Description:---</p>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Delivered</a>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
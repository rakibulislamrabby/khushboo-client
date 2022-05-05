import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import products from "./products.json"

const Inventory = () => {
    const { productId } = useParams();
    const [service] = useProductDetails(productId);

    console.log(service);

    return (
        <div>
            <h2>This is inventory section</h2>
            <h3>Name {service.name}</h3>
            <p>{service.price}</p>

        </div>
    );
};

export default Inventory;
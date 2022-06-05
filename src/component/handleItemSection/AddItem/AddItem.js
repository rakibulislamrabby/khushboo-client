import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase_init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const item = {
            suppliername: user.displayName,
            email: user.email,
            name: data.name,
            price: data.price,
            description: data.description,
            quantity: data.quantity,
            img: data.img
        }
        const url = "https://damp-island-69804.herokuapp.com/inventory";
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert("Successfully Added")
            })

        reset()
    }
    // axios.post(url, data)
    //     .then(res => {
    //         const { data } = res;
    //         if (data.insertedId) {
    //             alert("Successfuly added")

    //         }
    //     })
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-success text-center'>Add New Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Supplier Name' value={user.displayName} type="text" {...register("suppliername")} />
                <input className='mb-3' placeholder='email' value={user.email} disabled {...register("email")} />
                <input className='mb-3' placeholder='Item Name' {...register("name")} />
                <textarea className='mb-3' placeholder='Description' {...register("description")} />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='btn btn-success w-50 mx-auto' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;
import React from 'react';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = "https://damp-island-69804.herokuapp.com/inventory";
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        alert("Successfully Added")
        data.target.reset()
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-success text-center'>Please add Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name' {...register("name")} />
                <textarea className='mb-3' placeholder='Description' {...register("description")} />
                <input className='mb-3' placeholder='Supplier Name' type="text" {...register("suppliername")} />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='btn btn-success w-50 mx-auto' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;
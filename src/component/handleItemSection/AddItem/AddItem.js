import React from 'react';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = "http://localhost:5000/inventory";
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
    }
    // const handleAddItem = (event) => {
    //     event.preventDefault();
    //     const name = event.target.name.value;
    //     const description = event.target.description.value;
    //     const supplierName = event.target.supplierName.value;
    //     const price = event.target.price.value;
    //     const quantity = event.target.quantity.value;
    //     const photourl = event.target.img.value;

    //     const item = { name, description, supplierName, price, quantity, photourl }
    //     console.log(item);
    //     fetch("", {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(item)
    //     })
    //         .then(res => res.json())
    // }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-success text-center'>Please add Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name' {...register("name")} />
                <textarea className='mb-3' placeholder='Description' {...register("description")} />
                <input className='mb-3' placeholder='Supplier Name' {...register("supplierName")} />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='btn btn-success w-50 mx-auto' type="submit" value="Add Item" />
            </form>
        </div>
        // <div className='w-50 mx-auto my-5'>
        //     <h3 className='text-center text-success'>Please Add a new item</h3>
        //     <form onSubmit={handleAddItem} className='d-flex flex-column'>
        //         <input className='mb-2' type="text" name='name' placeholder='Name' />

        //         <textarea className='mb-2' name="description" placeholder='Description'></textarea>

        //         <input className='mb-2' name='supplierName' placeholder='Supplier Name' type="text" />

        //         <input className='mb-2' name='price' placeholder='Price' type="number" />

        //         <input className='mb-2' name='quantity' placeholder='Quantity' type="number" />

        //         <input className='mb-2' name='img' placeholder='Photo URL' type="text" />
        //         <input type="submit" value="Add Item" className='bg-success rounded-3 border-0 w-50 text-white mx-auto py-2' />
        //     </form>
        // </div>
    );
};

export default AddItem;
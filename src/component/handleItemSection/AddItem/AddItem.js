import React from 'react';

const AddItem = () => {
    return (
        <div className='w-50 mx-auto my-5'>
            <h3 className='text-center text-success'>Please Add a new item</h3>
            <form className='d-flex flex-column'>
                <input className='mb-2' type="text" name='name' placeholder='Name' />

                <textarea className='mb-2' name="description" placeholder='Description'></textarea>

                <input className='mb-2' name='supplierName' placeholder='Supplier Name' type="text" />

                <input className='mb-2' name='price' placeholder='Price' type="number" />

                <input className='mb-2' name='quantity' placeholder='Quantity' type="number" />

                <input className='mb-2' name='img' placeholder='Photo URL' type="text" />
                <input type="submit" value="Add Item" className='bg-success rounded-3 border-0 w-50 text-white mx-auto py-2' />
            </form>
        </div>
    );
};

export default AddItem;
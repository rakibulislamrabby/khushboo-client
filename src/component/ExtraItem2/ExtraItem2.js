import React from 'react';

const ExtraItem2 = () => {
    return (
        <div className='container w-50 mx-auto mt-3'>
            <h1 className='text-center fw-bold text-success'>Attor Exports</h1>
            <form className='w-100'>
                <label htmlFor="">Name*</label> <br />
                <input className='w-100 mb-3' type="text" placeholder='' required />
                <label htmlFor="">Email ID*</label> <br />
                <input className='w-100 mb-3' type="text" placeholder='' required />
                <label htmlFor="">Phone Number*</label> <br />
                <input className='w-100 mb-3' type="number" placeholder='' required />
                <label htmlFor="">City*</label> <br />
                <input className='w-100 mb-3' type="text" placeholder='' required />
                <label htmlFor="">Country*</label> <br />
                <input className='w-100 mb-3' type="text" placeholder='' required />
            </form>
            <button className='btn btn-success w-100 mx-auto'>Exports</button>

        </div>
    );
};

export default ExtraItem2;
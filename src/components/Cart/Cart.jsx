import React from 'react';
import TShirt from '../TShirt/TShirt';

const Cart = ({ cart,handlerRemove }) => {
    return (
        <div>
            <h1 className='text-center text-3xl'>This is Cart:{cart.length}</h1>
            <div className='bg-slate-400 m-4'>
                {
                    cart.map(TShirt => <p key={TShirt._id}> {TShirt.name} <button onClick={()=>handlerRemove(TShirt._id)} className='bg-red-500 text-slate-950 font-semibold px-2 rounded-3xl hover:bg-red-800 duration-100 border-2 border-red-400 active:border-red-200'>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Cart;
import React from 'react';

const TShirt = ({tShirt,handlerBuy}) => {
    const {name,picture, price}=tShirt
    return (
        <div className='border border-cyan-600 rounded-lg text-center p-6'>
            <img  className='h-[350px]' src={picture} alt="" />
            <h1 className='text-xl font-bold'>{name}</h1>
            <p>${price}</p>
            <button onClick={()=>handlerBuy(tShirt)} className='bg-cyan-600 px-6 py-2 rounded-lg hover:bg-cyan-700 duration-150 active:bg-cyan-800 border-2 border-cyan-950 active:border-cyan-300'>Buy now</button>
        </div>
    );
};

export default TShirt;
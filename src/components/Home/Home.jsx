import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tShirts = useLoaderData()
    const [cart, setCart] = useState([])

    const handlerBuy = tShirt => {
        const exist = cart.find(ts => ts._id === tShirt._id)
        if (exist) {
            alert('already added')
        } else {
            const newCart = [...cart, tShirt]
            setCart(newCart)
        }
    }
    const handlerRemove = id => {
        const remaining = cart.filter(ts => ts._id !== id)
        setCart(remaining)
    }
    return (
        <div className='grid md:grid-cols-4 mx-12'>
            <div className='grid md:grid-cols-3 gap-6 md:col-span-3'>
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handlerBuy={handlerBuy}
                    ></TShirt>)
                }
            </div>
            <div>
                <Cart
                    cart={cart}
                    handlerRemove={handlerRemove}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;
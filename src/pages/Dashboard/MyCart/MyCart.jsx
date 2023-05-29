import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/useCart';

const MyCart = () => {
    const  [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0) 
    return (
        <div>
                <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
          <div className='text-2xl uppercase'>
          <h2>Total Items: {cart.length}</h2>
            <h2>Total Price: ${total}</h2>
            <button className="btn bg-[#D1A054] btn-sm">Pay</button>
          </div>
        </div>
    );
};

export default MyCart;
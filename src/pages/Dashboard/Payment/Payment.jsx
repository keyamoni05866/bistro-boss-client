import React from 'react';
import SectionTitles from '../../../components/SectionTitles/SectionTitles';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../Hooks/useCart';

// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
           <SectionTitles
            subHeading="---Please Provide---"
            heading="payment"
           ></SectionTitles>
      <Elements stripe={stripePromise}>
      <CheckoutForm price={price}
        cart={cart}
      ></CheckoutForm>
      </Elements>
           
        </div>
    );
};

export default Payment;
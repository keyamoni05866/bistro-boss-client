import React from 'react';
import SectionTitles from '../../../components/SectionTitles/SectionTitles';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    return (
        <div>
           <SectionTitles
            subHeading="---Please Provide---"
            heading="payment"
           ></SectionTitles>
      <Elements stripe={stripePromise}>
      <CheckoutForm></CheckoutForm>
      </Elements>
           
        </div>
    );
};

export default Payment;
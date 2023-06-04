import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Routes/AuthProvider/AuthProvider";

const CheckoutForm = ({price, cart}) => {
  const {user} = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure()
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing]= useState(false)
  const [transactionId, setTransactionId]= useState('');
  useEffect(() =>{
    axiosSecure.post('/create-payment-intent', {price})
    .then(res =>{
      // console.log(res.data.clientSecret)
      setClientSecret(res.data.clientSecret)
    })
  },[price,axiosSecure])
  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!stripe || !elements){
        return;
    }
    const card = elements.getElement(CardElement);
    if(card === null){
        return;
    }
   const {error, paymentMethod} = await stripe.createPaymentMethod({
    type: 'card',
    card
   })

   if(error){
    console.log('error', error)
    setCardError(error.message);
   }
   else{
    setCardError('')
    // console.log('payment method', paymentMethod)
   }
       setProcessing(true);

   const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
   clientSecret,
    {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'unknown',
         name: user?.displayName || 'anonymous'
        },
      },
    },
  );
    if(confirmError){
      console.log(confirmError);
    }
   console.log('payment intent',paymentIntent)
  setProcessing(false)
   if(paymentIntent.status === 'succeeded'){
    setTransactionId(paymentIntent.id);
    // save payment information to the server
    const payment = {
      email: user?.email,
      transactionId: paymentIntent.id,
      price,
      quantity: cart.length,
      items: cart.map(item => item._id),
      itemNames:cart.map(item =>item.name)
       
    }
    axiosSecure.post('/payments', payment)
    .then(res =>{
      console.log(res.data);
      if(res.data.insertedId){
        // display confirm 
      }
    })

   }
  };
  return (
    <>
    {transactionId && <p className="text-green-500 text-center">Transaction complete with transactionId:{transactionId}</p>}
    <form className="w-1/2 mx-auto mt-36" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
            
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
        {
      cardError && <p className="text-lg text-red-500 mt-8">{cardError}</p>
    }
    <button className="btn btn-primary  mt-12 text-xl w-1/2  mx-36" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
       
    </>
  );
};

export default CheckoutForm;

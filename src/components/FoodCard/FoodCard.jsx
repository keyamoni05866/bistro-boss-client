import React, { useContext } from 'react';
import { AuthContext } from '../../Routes/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';

const FoodCard = ({item}) => {
    const {name, image, recipe, _id, price} = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    const handleAddToCart = item => {
           console.log(item);
           if(user && user.email){
            const cartItem = {foodId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
              method: 'POST',
              headers: {
                'content-type' : 'application/json'
              },
              body: JSON.stringify(cartItem) 
            })
            .then(res => res.json())
            .then(data => {
              if(data.insertedId){
                refetch();
                Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: 'Your food is added successfully',
                  showConfirmButton: false,
                  timer: 1500
                })
              }

            })
           }
           else{
            Swal.fire({
              title: 'Please login for order the food',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Login Now'
            }).then((result) => {
              if (result.isConfirmed) {
             navigate('/login', {state: {from: location}})
              }
            })
           }
    }
    return (

          <div className="card w-96 bg-[#F3F3F3] shadow-xl ">
        <figure><img src={image} alt="Shoes" className='w-full h-72' /></figure>
        <div className="card-body justify-center  items-center ">
          <h2 className="card-title font-semibold text-2xl">{name}</h2>
          <p className='text-center text-lg'>{recipe}</p>
          <div className="card-actions justify-end ">
          <button onClick={() => handleAddToCart(item)} className="btn  rounded-lg btn-outline bg-[#E8E8E8] border-0 border-b-4  mt-3 text-[#BB8506]">Add To Cart</button>
          </div>
        </div>
      </div>

    );
};

export default FoodCard;
import React from 'react';

const FoodCard = ({item}) => {
    const {name, image, recipe} = item;
    return (

          <div className="card w-96 bg-[#F3F3F3] shadow-xl ">
        <figure><img src={image} alt="Shoes" className='w-full h-72' /></figure>
        <div className="card-body justify-center  items-center ">
          <h2 className="card-title font-semibold text-2xl">{name}</h2>
          <p className='text-center text-lg'>{recipe}</p>
          <div className="card-actions justify-end ">
          <button className="btn  rounded-lg btn-outline bg-[#E8E8E8] border-0 border-b-4  mt-3 text-[#BB8506]">Add To Cart</button>
          </div>
        </div>
      </div>

    );
};

export default FoodCard;
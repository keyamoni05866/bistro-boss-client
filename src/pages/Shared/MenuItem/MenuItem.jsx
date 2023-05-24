import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className='lg:flex space-x-4'>
            <img style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" className='w-[100px]' />
            <div>
                <h3 className='uppercase'>{name}-------</h3>
                <p>{recipe}</p>
            </div>
            <p className=' text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default MenuItem;
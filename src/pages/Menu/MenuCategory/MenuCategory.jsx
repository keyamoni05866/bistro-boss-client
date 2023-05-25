import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, subTitle, img}) => {
 

    return (
        <div className='pt-8'>
                {title && subTitle &&  <Cover img={img} title={title} subTitle={subTitle}></Cover>}
               <div className='grid md:grid-cols-2 gap-5 my-16'>
                {
                    items.map(item => <MenuItem
                     key={item._id}
                     item={item}
                    ></MenuItem>)
                }
            </div>
            <div className=' flex justify-center mt-16 mb-9'>
      <Link to={`/order/${title}`}>      <button className="btn  rounded-lg btn-outline   border-0 border-b-4    text-[#BB8506]">ORDER YOUR FAVOURITE FOOD</button></Link>
            
            </div>
        </div>
    );
};

export default MenuCategory;
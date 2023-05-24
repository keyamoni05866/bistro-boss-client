import React from 'react';
import img from '../../../assets/home/chef-service.jpg'
const About = () => {
    return (
        <div className='mb-8 relative w-full'>
           
            <img src={img} alt="" className='rounded-lg' />
         
            <div className='bg-white absolute  top-16 left-36  p-12 w-3/4 h-72 rounded'>
               <div className='text-center mx-auto w-2/3'>
               <h2 className=' text-4xl text-[#151515] uppercase'>Bistro Boss</h2>
               <p className=' text-justify mt-3 ms-8'>At Bistro Boss, we take immense pride in our diverse menu, crafted by our talented team of chefs who have honed their skills in some of the finest culinary establishments around the globe. Our menu is a celebration of flavors, drawing inspiration from international cuisines while incorporating locally sourced ingredients to create dishes that tantalize the taste buds.</p>
               </div>
            </div>
        </div>
    );
};

export default About;
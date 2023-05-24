import React from 'react';
import SectionTitles from '../../../components/SectionTitles/SectionTitles';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item text-white mt-6 mb-8 pt-4 '>
            <SectionTitles
             subHeading={"---check it out---"}
             heading={"featured item"}
            ></SectionTitles>
            <div className='md:flex justify-center items-center py-12 px-16'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 space-y-3'>
                    <p>May 25, 2023</p>
                    <p className=' uppercase'>Where can i get some</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ratione omnis blanditiis? Voluptas eum eius architecto, odit cupiditate cumque minima sint dolore quia sapiente eaque accusamus natus repellendus nisi. Voluptatum ab maiores minus obcaecati illum ratione. Molestiae quisquam et iusto qui magnam fuga eligendi, optio perspiciatis fugiat voluptatem rem laboriosam?</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
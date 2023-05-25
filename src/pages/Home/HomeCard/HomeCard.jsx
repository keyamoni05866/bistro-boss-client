import React from 'react';
import SectionTitles from '../../../components/SectionTitles/SectionTitles';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
const HomeCard = () => {
    return (
 <section className='my-12 mx-7'>
     

    <SectionTitles
       subHeading={"---Should Try---"}
       heading="CHEF RECOMMENDS"
    >

    </SectionTitles>
  <div className='lg:flex gap-8'>
  <div className="card w-96 bg-[#F3F3F3] shadow-xl ">
  <figure><img src={img1} alt="Shoes" className='w-full h-72' /></figure>
  <div className="card-body justify-center  items-center ">
    <h2 className="card-title font-semibold text-2xl">Caeser Salad</h2>
    <p className='text-center text-lg'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-end ">
    <button className="btn  rounded-lg btn-outline bg-[#E8E8E8] border-0 border-b-4  mt-3 text-[#BB8506]">Add To Cart</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-[#F3F3F3] shadow-xl ">
  <figure><img src={img2} alt="Shoes" className='w-full h-72' /></figure>
  <div className="card-body justify-center  items-center ">
    <h2 className="card-title font-semibold text-2xl">Pizza </h2>
    <p className='text-center text-lg'>Pizza sauce,Cheese, Pepperoni, Mushrooms,Olives.</p>
    <div className="card-actions justify-end ">
    <button className="btn  mt-3 text-[#BB8506]">Add To Cart</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-[#F3F3F3] shadow-xl ">
  <figure><img src={img3} alt="Shoes" className='w-full h-72' /></figure>
  <div className="card-body justify-center  items-center ">
    <h2 className="card-title font-semibold text-2xl">Soup </h2>
    <p className='text-center text-lg'>Mushrooms,Onion, Garlic, Mushrooms,Butter or olive oil.</p>
    <div className="card-actions justify-end ">
    <button className="btn  rounded-lg btn-outline bg-[#E8E8E8] border-0 border-b-4   mt-3 text-[#BB8506]">Add To Cart</button>
    </div>
  </div>
</div>
  </div>
 </section>
    );
};

export default HomeCard;
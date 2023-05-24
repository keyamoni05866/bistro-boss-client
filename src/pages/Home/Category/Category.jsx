import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
const Category = () => {
  return (
    <>
    <div className=" mt-16  mb-10 text-center ">
    <p className="mb-2 text-[#D99904] text-lg">---From 11:00am to 10:00pm---</p>
    <div className="border-y-2 w-96 mx-auto">

    </div>
    <h2 className="text-4xl uppercase mt-2 mb-3">Order Online</h2>
    <div className="border-y-2 w-96 mx-auto ">

</div>
    </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-28 text-[#FFFFFF]">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
    
          <img src={slider2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-28 text-[#FFFFFF]">Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
    
          <img src={slider3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-28 text-[#FFFFFF]">Soups</h3>
   
        </SwiperSlide>
        <SwiperSlide>
         
          <img src={slider4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-28 text-[#FFFFFF]">Desert</h3>
        </SwiperSlide>
        <SwiperSlide>
     
          <img src={slider5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-28 text-[#FFFFFF]">Salad</h3>
        </SwiperSlide>
   
      </Swiper>
    </>
  );
};

export default Category;

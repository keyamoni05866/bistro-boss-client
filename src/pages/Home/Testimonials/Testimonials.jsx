import React, { useEffect, useState } from "react";
import SectionTitles from "../../../components/SectionTitles/SectionTitles";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-20">
      <SectionTitles
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTitles>

      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className=" space-y-3 mx-24">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly  className="mx-auto text-[#CD9003]"/>
                <img src={review.img} alt="" className=" w-28 h-28 mx-auto" />
                <p>{review.details}</p>
                <p className="text-2xl uppercase text-[#CD9003] text-center">
                  {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';
import { Parallax } from 'react-parallax';
const Cover = ({img, title, subTitle}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="menu cover"
        strength={-200}
    >
      <div className="hero h-[600px]" >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-7xl font-semibold italic uppercase">{title}</h1>
      <p className=" uppercase text-xl">{subTitle}</p>
     
    </div>
  </div>
</div>
    </Parallax>

       
    );
};

export default Cover;
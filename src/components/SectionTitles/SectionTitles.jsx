import React from 'react';

const SectionTitles = ({heading, subHeading}) => {
    return (
        <div className=" mt-12  mb-10 text-center ">
        <p className="mb-2 text-[#D99904] text-lg">{subHeading}</p>
        <div className="border-y-2 w-96 mx-auto">
    
        </div>
        <h2 className="text-4xl uppercase mt-2 mb-3">{heading}</h2>
        <div className="border-y-2 w-96 mx-auto ">
    
    </div>
        </div>
    );
};

export default SectionTitles;
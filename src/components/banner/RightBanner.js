import React from 'react'
import  bannerImg  from "../../assets/Coding-bro.png"; 

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative   ">
      <img
        className="md:w-[200px] md:h-[600px] lg:w-[670px] lg:h-[680px] z-10 lg:ml-24 mt-10 "
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
}

export default RightBanner
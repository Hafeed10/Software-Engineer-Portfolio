import React from 'react'
import { bannerImg } from "../../assets/index"; 

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="md:w-[400px] md:h-[300px] lg:w-[570px] lg:h-[680px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner
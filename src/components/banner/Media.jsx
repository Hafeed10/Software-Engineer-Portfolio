import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss,  SiPython, SiCss3 } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bannerIcon"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bannerIcon"
      >
        <FaTwitter />
      </a>
      <a
        href="www.linkedin.com/in/hafeed"
        target="_blank"
        rel="noopener noreferrer"
        className="bannerIcon"
      >
        <FaLinkedinIn />
      </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
          <a
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="bannerIcon"
      >
        <FaReact />
      </a>
      <a
        href="https://www.python.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="bannerIcon"
      >
        <SiPython />
      </a>
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bannerIcon"
      >
        <SiTailwindcss />
      </a>
      <a
        href="https://www.w3.org/Style/CSS/Overview.en.html"
        target="_blank"
        rel="noopener noreferrer"
        className="bannerIcon"
      >
        <SiCss3 />
      </a>
          </div>
        </div>
      </div>
  )
}

export default Media
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Professional Coder",
      "Full Stack Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl lg:text-6xl md:text-3xl sm:text-3xl  font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">M Hafeed.</span>
        </h1>
        <h2 className="lg:text-4xl text-4xl  font-bold text-white md:text-3xl sm:text-sm">
          <span className="">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Hi, I'm a Full-stack developer, meaning you work on both the front-end
          user interface and back-end server, database of web applications. You
          handle everything from designing user interactions to managing
          databases and server logic.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;

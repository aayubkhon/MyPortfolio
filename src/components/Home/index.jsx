import React from "react";
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort";

const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-black">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-600 font-bold text-3xl sm:text-4x1">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Akramov Ayubkhon
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-end Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a front-end developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600">
            View Work{" "}
            <ArrowRightShort className="w-[30px] h-[30px] ml-3 group-hover:rotate-90 duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

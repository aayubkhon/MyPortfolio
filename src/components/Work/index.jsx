import React from "react";
import fitness2 from "../../assets/fitness2.jpg";
import shop from "../../assets/shop.jpg";
import iphone from "../../assets/iphone.jpg";
import workss from "../../assets/workss.jpg";
import reale from "../../assets/reale.jpg";
import blank from "../../assets/blank.jpg";

const Work = () => {
  return (
    <div name='work' className="bg-[#0a192f] text-gray-300 w-full md:h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl bold inline border-b-4 text-gray-300 border-red-600">
            Work
          </p>
          <p className="py-6">//Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${fitness2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wide">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${reale})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wide">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${iphone})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wide">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${blank})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wide">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${shop})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wide">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workss})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wide">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

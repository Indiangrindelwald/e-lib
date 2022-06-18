import React from "react";
import Project from "../components/Stuff"

const Main = () => {
  return (
    <div id="Main" className=" w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            International school of photonics
          </p>
          <h1>
            Academic <span className="text-[#826E9C]">Guru</span>
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            The Ultimate One-Stop-Shop for all your Academic Needs
          </p>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            (scroll down for course selction)
          </p>
        </div>
      </div>
    <Project />
    </div>
  );
};

export default Main;

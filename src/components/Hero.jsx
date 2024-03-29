import React from "react";
import { Typed } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[1000px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#FAFE5A] font-bold p-2 text-xl">
          LUNEXIS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          We are disrupting<span className="text-[#FAFE5A]">.</span>
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            The Gaming Industry
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          We're currently working on our debut indie game!
        </p>
        <button
          onClick={console.log("Clicked")}
          className="bg-[#FAFE5A] w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-black hover:bg-[#db8efa] transition-all"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;

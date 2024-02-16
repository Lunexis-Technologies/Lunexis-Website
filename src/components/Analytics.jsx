import React from "react";

import elkan from "../assets/elkan.jpeg";

const Analytics = () => {
  return (
    <div className="w-full bg-[white] py=16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={elkan} alt="/" />

        <div className="flex flex-col justify-center">
          <p className="text-[#black] font-bold ">Our First Indie Game </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[black]">
            About The Game
          </h1>
          <p>
            Immerse yourself in a gripping 2D action-adventure alongside Elkan,
            a fearless protagonist taking on demons that lurk from haunted
            forests to the depths of hell. Maneuver through challenging
            landscapes, engage in intense combat against grotesque creatures,
            and uncover hidden secrets in this thrilling journey through
            infernal and mysterious realms. Brace yourself for an exceptional
            gaming experience, blending seamless action, stunning visuals, and a
            compelling narrative that defies the ordinary. Get ready to be
            captivated as you navigate danger, face nightmarish foes, and unveil
            the mysteries that lie ahead in this exhilarating escapade.
          </p>
          <button className="bg-[#FAFE5A] text-[black] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

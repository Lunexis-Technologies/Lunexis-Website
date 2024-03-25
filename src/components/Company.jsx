import React from "react";

import Logo from "../assets/logo.png";


const Company = () => {
  return (
    <div className="w-full bg-white py=16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Logo} alt="/" />

        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">What is Lunexis?</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Our Mission
          </h1>
          <p>
            Our innovative startup is on a mission to redefine the landscape of
            digital entertainment by crafting games that transcend conventional
            amusement. Envisioned as bridges, these games connect individuals
            and deliver unparalleled experiences through gameplay. Our team,
            with members hailing from diverse corners of the globe—including the
            U.S.A, Canada, Haiti, the Dominican Republic, and
            Vietnam—collaborates fervently on developing our inaugural 2D indie
            game.
            <br />
            <br /> At the heart of our ethos is a commitment to placing players
            at the forefront, weaving extraordinary narratives, and relentlessly
            pushing the boundaries of innovation. More than just a gaming
            endeavor, our overarching goal is to revolutionize digital
            entertainment. We are on a quest to sculpt immersive encounters that
            will resonate far beyond the confines of screens, making an
            indelible impact on the lives of billions. industry.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Company;

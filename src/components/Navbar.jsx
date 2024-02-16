import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaDiscord,
  FaFacebookSquare,
  FaInstagram,
  FaTiktok,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Lunexis from "../assets/lunexislogorbg.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <ul className="hidden md:flex items-center">
        <li className="p-4 font-medium text-[#FAFE5A]">
          {" "}
          <a href="./Newsletter">Company</a>
        </li>
        <li className="p-4 font-medium text-[#FAFE5A]">
          <a href="./Newsletter">Games</a>
        </li>
        <li className="p-4 font-medium text-[#FAFE5A]">
          <a href="./Newsletter">Team</a>
        </li>
        <li className="p-4 font-medium text-[#FAFE5A]">
          <a href="./Newsletter">Careers</a>
        </li>
        <li className="p-4 font-medium text-[#FAFE5A]">
          <a href="./Newsletter">Contact</a>
        </li>
      </ul>

      <h1 className="text-3xl font-bold text-[#db8efa]">
        <img className="w-[100px] my-4" src={Lunexis} alt="/" />
      </h1>
      {/* Social icons on the right */}
      <div className="hidden md:flex justify-between md:w-[30%] my-6 items-center">
        <FaFacebookSquare size={30} color="#FAFE5A" />
        <FaDiscord size={30} color="#FAFE5A" />
        <FaTiktok size={30} color="#FAFE5A" />
        <a href="https://www.instagram.com/lunexistechnologies/">
          <FaInstagram size={30} color="#FAFE5A" />
        </a>
        <a href="https://twitter.com/lunexistech">
          <FaTwitterSquare size={30} color="#FAFE5A" />
        </a>
      </div>

      {/* Mobile menu icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          <img className="w-[100px] my-4" src={Lunexis} alt="/" />
        </h1>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Games</li>
        <li className="p-4 border-b border-gray-600">Team</li>
        <li className="p-4 border-b border-gray-600">Careers</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

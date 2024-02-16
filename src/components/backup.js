import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Route, Router, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";
import {
  FaDiscord,
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTiktok,
  FaTwitterSquare,
} from "react-icons/fa";

import Lunexis from "../assets/lunexislogorbg.png";

import test from "../test";

let screen = test;
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#db8efa]">
        <img className="w-[100px]  my-4" src={Lunexis} alt="/" />
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4  font-medium text-[#db8efa]">
          {" "}
          <a href="./Newsletter">Company</a>
        </li>
        <li className="p-4  font-medium text-[#db8efa]">
          <a href="./Newsletter">Games</a>
        </li>
        <li className="p-4 font-medium text-[#db8efa]">
          <a href="./Newsletter">Team</a>
        </li>
        <li className="p-4 font-medium text-[#db8efa]">
          <a href="./Newsletter">Careers</a>
        </li>
        <li className="p-4 font-medium text-[#db8efa]">
          <a href="./Newsletter">Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          <img className="w-[100px]  my-4" src={Lunexis} alt="/" />
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

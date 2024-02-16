import React from "react";
import {
  FaDiscord,
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTiktok,
  FaTwitterSquare,
} from "react-icons/fa";

import test from "../test";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">LUNEXIS</h1>
        <p className="py-4">
          This website is owned and operated by Lunexis Technologies, Inc. a
          company registered in U.S.A
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaDiscord size={30} />
          <FaTiktok size={30} />
          <a href="https://www.instagram.com/lunexistechnologies/">
            {" "}
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com/lunexistech">
            {" "}
            <FaTwitterSquare size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">About Us</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Company</li>
            <li className="py-2 text-sm">Games</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Work with us</h6>
          <ul>
            <li className="py-2 text-sm">Team</li>
            <li className="py-2 text-sm">Careers</li>
            <li className="py-2 text-sm">Contact</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

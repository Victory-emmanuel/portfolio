/* eslint-disable no-unused-vars */
import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl  text-lightPurple font-semibold"> CodeSquid</h3>
        <div className="flex flex-row gap-6 text-secondary text-4xl">
          <a href="https://github.com/Victory-emmanuel?tab=repositories">
            <FaGithubSquare />
          </a>
          <a href="  https://wa.me/2348109125793">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <p className="text-secondary">@2024 CodeSquid</p>
    </div>
  );
};

export default Footer;

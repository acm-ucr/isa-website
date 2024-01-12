import React from "react";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Image from "next/image";
import icon from "../../public/images/navlogo.webp";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-isa-blue-200 to-isa-blue-100 w-full p-4">
      <div className="flex items-center font-bold text-3xl text-white space-x-3">
        <Image src={icon} alt="ISA icon" className="h-[45px] w-[45px]" />
        <div className="whitespace-nowrap">UCR ISA</div>
        <div className="w-full max-h-full flex space-x-4 place-content-end ">
          <a href="https://www.instagram.com">
            {<FaInstagram className="text-2xl" />}{" "}
          </a>

          <a href="">{<IoMail className="text-2xl" />}</a>

          <a href="">{<FaFacebookSquare className="text-2xl" />}</a>

          <a href="https://www.linkedin.com">
            {<FaLinkedin className="text-2xl" />}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

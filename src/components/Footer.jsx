import React from "react";
import Link from "next/link";
import { ICONS } from "@/data/footer/Icons.js";
import Image from "next/image";
import logo from "../../public/images/navlogo.webp";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-isa-blue-200 to-isa-blue-100 w-full p-2 relative">
      <div className="flex items-center font-bold text-3xl text-white h-[60px]">
        <Image src={logo} alt="ISA icon" className="h-[50px] w-[50px] mr-3" />
        <div className="whitespace-nowrap text-xl md:text-3xl">UCR ISA</div>
        <div className="w-full flex place-content-end relative align-items-center">
          {ICONS.map((icon, index) => (
            <Link
              key={index}
              href={icon.link}
              className={"hover:scale-110 duration-300 m-2"}
            >
              {icon.logo}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

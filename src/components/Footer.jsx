import React from "react";
import Link from "next/link";
import { ICONS } from "@/data/footer/Icons.js";
import Image from "next/image";
import logo from "../../public/images/navlogo.webp";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-isa-blue-200 to-isa-blue-100 w-full p-4 absolute bottom-0">
      <div className="flex items-center font-bold text-3xl text-white space-x-3">
        <Image src={logo} alt="ISA icon" className="h-[45px] w-[45px]" />
        <div className="whitespace-nowrap">UCR ISA</div>
        <div className="w-full max-h-full flex space-x-4 place-content-end ">
          {ICONS.map((icon, index) => (
            <Link key={index} href={icon.link}>
              {icon.logo}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

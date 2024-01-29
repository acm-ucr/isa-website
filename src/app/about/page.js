"use client";
import Logo from "../../../public/assets/logo.svg";
import Image from "next/image";
import { sections } from "@/data/about/Sections.js";
import Sun from "@/public/assets/sun.svg";

const About = () => {
  return (
    <div className="pb-56 overflow-hidden">
      <Image
        src={Logo}
        alt="ISA Icon"
        className="py-8 mx-auto h-[400px] w-[400px]"
      />
      <div className="w-full relative flex flex-row justify-center items-center">
        <Image
          src={Sun}
          alt="Blue sun"
          className="hidden xl:block absolute -right-[25%] scale-140"
        />
        <Image
          src={Sun}
          alt="Blue sun"
          className="hidden xl:block absolute top-[500px] -left-[25%] scale-140"
        />
      </div>
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col mx-auto md:leading-loose w-1/2 md:w-4/5 md:text-xs text-center pb-12"
        >
          <div className="pb-6">{section.title}</div>
          <div className="text-2xl">{section.description}</div>
        </div>
      ))}
    </div>
  );
};

export default About;

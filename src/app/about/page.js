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
          className="hidden lg:block absolute 2xl:-right-[13%] -right-[25%] scale-140"
        />
        <Image
          src={Sun}
          alt="Blue sun"
          className="hidden lg:block absolute top-[500px] 2xl:-left-[13%] -left-[25%] scale-140"
        />
      </div>
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col mx-auto leading-loose md:leading-normal md:w-1/2 w-4/5 text-center pb-12"
        >
          <div className="pb-6">{section.title}</div>
          <div className="text-xl md:text-2xl">{section.description}</div>
        </div>
      ))}
    </div>
  );
};

export default About;

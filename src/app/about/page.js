"use client";
import Logo from "../../../public/assets/logo.svg";
import Image from "next/image";
import { sections } from "@/data/about/Sections.js";
import Sun from "@/public/assets/sun.svg";

const About = () => {
  return (
    <div className="pb-56 absolute overflow-x-hidden">
      <Image
        src={Logo}
        alt="ISA Icon"
        className="py-8 mx-auto h-[400px] w-[400px]"
      />
      <Image
        src={Sun}
        alt="blue sun"
        className="absolute bottom-0 -left-[250px] h-[800px] w-[600px]"
      />
      <Image
        src={Sun}
        alt="blue sun"
        className="absolute top-0 -right-[250px] h-[700px] w-[600px]"
      />
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col mx-auto w-1/2 text-center pb-12"
        >
          <div className="pb-6">{section.title}</div>
          <div className="text-2xl">{section.description}</div>
        </div>
      ))}
    </div>
  );
};

export default About;

"use client";
import Logo from "../../../public/assets/logo.svg";
import Image from "next/image";
import { sections } from "@/data/about/Sections.js";

const About = () => {
  return (
    <div>
      <Image
        src={Logo}
        alt="ISA Icon"
        className="py-8 mx-auto h-[400px] w-[400px]"
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
      <div className="pb-56"></div>
    </div>
  );
};

export default About;

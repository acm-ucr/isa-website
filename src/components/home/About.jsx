import React from "react";
import Title from "@/components/Title";

import Image from "next/image";
import cloud from "@/public/assets/cloud.svg";
import logo from "@/public/assets/logo.svg";

const About = () => {
  return (
    <div className="flex flex-col items-center my-[4%]">
      <div className="flex items-center justify-center px-[10%]">
        <div className="flex w-2/5 justify-center items-start">
          <Image src={logo} alt="Picture of logo" className="z-1" />
        </div>

        <div className="flex-col text-center w-3/5 mx-auto text-2xl mb-5">
          <Title text="About us" />
          <div className="mt-4">
            Indian Student Association-ISA at UCR serves the purpose to provide
            a commonplace for people to share and exchange Indian culture of all
            regions in India. We strive to provide a place for all Indians and
            non-Indians to come to socialize, celebrate festivals, enjoy food,
            meet new people, and learn more about Indian culture
          </div>
        </div>
      </div>

      <Image src={cloud} alt="Picture of cloud" className="z-0 w-full" />
    </div>
  );
};

export default About;

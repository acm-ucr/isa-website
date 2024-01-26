import React from "react";
import Title from "@/components/Title";

import Image from "next/image";
import cloud from "@/public/assets/cloud.svg";
import navlogo from "@/public/images/navlogo.webp";

const About = () => {
  return (
    <div className="flex flex-col items-center mt-52">
      <div className="flex items-center px-32">
        <Image
          src={navlogo}
          alt="Picture of navlogo"
          className="scale-125 z-1 ml-8"
        />

        <div className="flex-co text-center w-1/2 mx-auto text-lg">
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

      <Image
        src={cloud}
        alt="Picture of cloud"
        className="mt-[-68px] z-0 w-full"
      />
    </div>
  );
};

export default About;

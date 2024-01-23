import React from "react";
import Title from "@/components/Title";

import Image from "next/image";
import { navlogo } from "@/public/assets/navlogo.svg";

const About = () => {
  return (
    <div className="mt-10">
      <Image navlogo={navlogo} alt="Picture of navlogo" />
      <Title title="About us" />

      <div className="flex-col">
        <p>
          Indian Student Association-ISA at UCR serves the purpose to provide a
          commonplace for people to share and exchange Indian culture of all
          regions in India. We strive to provide a place for all Indians and
          non-Indians to come to socialize, celebrate festivals, enjoy food,
          meet new people, and learn more about Indian culture
        </p>
      </div>
    </div>
  );
};

export default About;

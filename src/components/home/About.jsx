"use client";
import React from "react";
import Title from "@/components/Title";

import Image from "next/image";
import cloud from "@/public/assets/cloud.svg";
import logo from "@/public/assets/logo.svg";
import { motion } from "framer-motion";

const animationsLTR = {
  start: {
    opacity: 0,
    x: -30,
  },
  end: {
    opacity: 1,
    x: 0,
  },
};

const animationsDTU = {
  start: {
    opacity: 0,
    y: 30,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col xl:flex-row items-center justify-center px-10 lg:w-5/6">
        <div className="flex justify-center items-center w-full md:w-2/5 xl:mr-10">
          <motion.div
            variants={animationsLTR}
            initial="start"
            whileInView="end"
            transition={{ delay: 0.2, type: "tween" }}
          >
            <Image src={logo} alt="Picture of logo" className="z-10" />
          </motion.div>
        </div>

        <div className="flex flex-col items-center text-center w-full md:w-3/5 mt-5 mb-10 md:mt-0 md:text-2xl text-lg">
          <motion.div
            variants={animationsDTU}
            initial="start"
            whileInView="end"
            transition={{ delay: 0.2, type: "tween" }}
          >
            <Title text="About us" />
          </motion.div>
          <div className="mt-4">
            <motion.div
              variants={animationsDTU}
              initial="start"
              whileInView="end"
              transition={{ delay: 0.2 }}
            >
              Indian Student Association-ISA at UCR serves the purpose to
              provide a commonplace for people to share and exchange Indian
              culture of all regions in India. We strive to provide a place for
              all Indians and non-Indians to come to socialize, celebrate
              festivals, enjoy food, meet new people, and learn more about
              Indian culture.
            </motion.div>
          </div>
        </div>
      </div>
      <Image src={cloud} alt="Picture of cloud" className="z-0 w-full" />
    </div>
  );
};

export default About;

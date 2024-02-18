"use client";
import Logo from "../../../public/assets/logo.svg";
import Image from "next/image";
import { sections } from "@/data/about/Sections.js";
import Sun from "@/public/assets/sun.svg";
import { motion } from "framer-motion";

const animations = {
  start: {
    opacity: 0,
    y: 30,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const sunRight = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};

const sunLeft = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};

const About = () => {
  return (
    <div className="pb-56 overflow-hidden">
      <motion.div
        variants={animations}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.2 }}
      >
        <Image
          src={Logo}
          alt="ISA Icon"
          className="py-8 mx-auto h-[400px] w-[400px]"
        />
      </motion.div>

      <div className="w-full relative flex flex-row justify-center items-center">
        <motion.div
          variants={sunRight}
          initial="start"
          whileInView="end"
          transition={{ ease: "easeIn", duration: 2, delay: 0.2 }}
        >
          <Image
            src={Sun}
            alt="Blue sun"
            className="hidden xl:block absolute -right-[25%] scale-140"
          />
        </motion.div>

        <motion.div
          variants={sunLeft}
          initial="start"
          whileInView="end"
          transition={{ ease: "easeIn", duration: 2, delay: 0.2 }}
        >
          <Image
            src={Sun}
            alt="Blue sun"
            className="hidden xl:block absolute top-[500px] -left-[25%] scale-140"
          />
        </motion.div>
      </div>

      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col mx-auto leading-loose md:leading-normal md:w-1/2 w-4/5 text-center pb-12"
        >
          <motion.div
            variants={animations}
            initial="start"
            whileInView="end"
            transition={{ delay: 0.6 }}
          >
            <div className="pb-6">{section.title}</div>
            <div className="text-xl md:text-2xl">{section.description}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default About;

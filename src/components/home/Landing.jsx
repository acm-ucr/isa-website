"use client";
import LandingImage from "@/public/images/landing.webp";
import { FaMapPin } from "react-icons/fa";
import Button from "@/components/Button";
import Image from "next/image";
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

const Landing = () => {
  return (
    <div className="flex items-start justify-center my-[5%]">
      <Image src={LandingImage} alt="Landing Picture" />
      <div className="absolute z-20 text-isa-white text-nowrap lg:text-6xl md:text-4xl text-2xl font-bold flex flex-col items-center justify-center mt-[5%]">
        <motion.div
          variants={animations}
          initial="start"
          whileInView="end"
          transition={{ delay: 0.2 }}
        >
          Indian Student Association
        </motion.div>
        <div className="text-isa-white lg:text-3xl md:text-xl text-sm flex flex-row">
          <motion.div
            className="flex items-center"
            variants={animations}
            initial="start"
            whileInView="end"
            transition={{ delay: 0.2 }}
          >
            <FaMapPin className="mr-5" />
            University of California Riverside
          </motion.div>
        </div>
        <div className="lg:mt-4 mt-3">
          <motion.div
            variants={animations}
            initial="start"
            whileInView="end"
            transition={{ delay: 0.4 }}
          >
            <Button text="JOIN NOW" link="https://discord.gg/bmE32HzaKc" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

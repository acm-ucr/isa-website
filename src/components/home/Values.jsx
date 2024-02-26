"use client";
import React from "react";
import Value from "./Value";
import Title from "../../components/Title.jsx";
import { VALUES } from "../../data/home/Values";
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
const Values = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mt-[5%]">
      <motion.div
        variants={animations}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.2 }}
        className="z-10"
      >
        <Title text="Our Core Values" />
      </motion.div>

      <motion.div
        variants={animations}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.4 }} // Delay for the values to start after the title
        className="flex lg:flex-row flex-col items-center justify-center lg:space-y-0 space-y-10 lg:space-x-6 p-4 mt-6 mb-20"
      >
        {VALUES.map((value, index) => (
          <Value
            key={index}
            title={value.title}
            icon={value.icon}
            description={value.description}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Values;

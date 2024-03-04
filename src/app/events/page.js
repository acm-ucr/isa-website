"use client";
import Title from "@/components/Title";
import CalendarAPI from "@/components/events/CalendarAPI";
import Sun from "@/public/assets/sun.svg";
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

const sun = {
  start: {
    opacity: 0,
    rotate: 30,
  },
  end: {
    opacity: 1,
    rotate: 0,
  },
};

const Events = () => {
  return (
    <div className="overflow-hidden">
      <div className="h-20" />
      <motion.div
        variants={animations}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.2 }}
      >
        <Title text="Calendar" />
      </motion.div>

      <div className="w-full relative flex flex-row justify-center items-center">
        <motion.div
          variants={sun}
          initial="start"
          whileInView="end"
          transition={{ ease: "easeOut", duration: 2, delay: 0.4 }}
          className="hidden lg:block absolute lg:-right-[35%] xl:-right-[20%] top-10 scale-75"
        >
          <Image src={Sun} alt="Blue sun" />
        </motion.div>

        <motion.div
          variants={sun}
          initial="start"
          whileInView="end"
          transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
          className="hidden lg:block absolute lg:-left-[25%] xl:-left-[15%] lg:top-[500px] xl:top-[650px] scale-75"
        >
          <Image src={Sun} alt="Blue sun" />
        </motion.div>
      </div>
      <motion.div
        variants={animations}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.4 }}
      >
        <CalendarAPI />
      </motion.div>
    </div>
  );
};

export default Events;

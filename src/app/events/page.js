"use client";
import Title from "@/components/Title";
import CalendarEvents from "@/components/events/Calendar";
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

const Events = () => {
  return (
    <div className="overflow-hidden">
      <div className="h-10" />
      <motion.div
        variants={animations}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.2 }}
      >
        <Title text="Calendar" />
      </motion.div>

      <div className="w-full relative flex flex-row justify-center items-center">
        <Image
          src={Sun}
          alt="Blue sun"
          className="hidden lg:block absolute lg:-right-[35%] xl:-right-[20%] top-10 scale-75"
        />
        <Image
          src={Sun}
          alt="Blue sun"
          className="hidden lg:block absolute lg:-left-[25%] xl:-left-[15%] lg:top-[500px] xl:top-[650px] scale-75"
        />
      </div>
      <motion.div
        variants={animations}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.4 }}
      >
        <CalendarEvents />
      </motion.div>
    </div>
  );
};

export default Events;

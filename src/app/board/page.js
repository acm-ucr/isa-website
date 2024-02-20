"use client";
import Title from "@/components/Title";
import Board from "@/components/board/Board";
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
  },
  end: {
    opacity: 1,
  },
};

const Meet = () => {
  const boardMembers = Array.from({ length: 12 }, () => ({
    name: "Evan Littlecat",
    position: "Position Name",
  }));

  return (
    <div className="flex flex-col items-center justify-start flex-1 pt-4 sm:pt-16 md:pt-32 lg:pt-16 overflow-hidden">
      <motion.div
        variants={animations}
        initial="start"
        animate="end"
        transition={{ delay: 0.2 }}
      >
        <Title text="Meet the Board" />
      </motion.div>
      <div className="w-full relative flex flex-row justify-center items-center">
        <motion.div
          variants={sun}
          initial="start"
          animate="end"
          transition={{ ease: "easeIn", duration: 2, delay: 0.2 }}
        >
          <Image
            src={Sun}
            alt="Blue sun"
            className="hidden xl:block absolute -right-[25%] translate-y-[-10%] scale-140 pl-8 -z-10"
          />
        </motion.div>
      </div>
      <motion.div
        variants={animations}
        initial="start"
        animate="end"
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 gap-x-6 gap-y-12 mt-4 mb-4 md:grid-cols-3 md:gap-x-16 md:mt-10 lg:grid-cols-4 lg:gap-x-32 lg:mt-10"
      >
        {boardMembers.map((member, index) => (
          <Board key={index} name={member.name} position={member.position} />
        ))}
      </motion.div>
    </div>
  );
};

export default Meet;

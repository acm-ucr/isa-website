"use client";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Stars from "@/public/assets/stars.svg";
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

const What = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <motion.div
        className="absolute md:w-2/5 w-4/5 z-10 top-0"
        variants={animations}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.1 }}
      >
        <Image src={Stars} alt="stars" />
      </motion.div>

      <motion.div
        className="mt-10"
        variants={animations}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.2 }}
      >
        <Title text="What We Do" />
      </motion.div>

      <motion.p
        className="text-center md:text-2xl text-xl my-5 w-3/4 z-20"
        variants={animations}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.4 }}
      >
        Through this organization, we try to promote positive interaction among
        students of either Indian origin or desirous of understanding the Indian
        culture. This includes ensuring the smooth transition of newly-arrived
        graduate students from India into the social setup of the university
        campus.
      </motion.p>

      <Button text="CHECK OUT NEW HANDBOOK" link="handbook" />
    </div>
  );
};

export default What;

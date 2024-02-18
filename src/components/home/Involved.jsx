"use client";
import Social from "@/components/home/Social";
import { SOCIALS } from "@/data/home/Socials";
import Title from "@/components/Title";
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

const Involved = () => {
  return (
    <div>
      <motion.div
        variants={animations}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.2 }}
      >
        <Title text="Get Involved" />
      </motion.div>
      <motion.div
        variants={animations}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.4 }}
      >
        <div className="grid xl:flex xl:flex-row gap-y-5 grid-cols-2 md:grid-cols-3 justify-content-center pb-40 pt-12">
          {SOCIALS.map((social, index) => {
            return (
              <Social
                key={index}
                text={social.name}
                link={social.link}
                icon={social.icon}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Involved;

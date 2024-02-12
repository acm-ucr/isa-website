import LandingImage from "@/public/images/landing.webp";
import { FaMapPin } from "react-icons/fa";
import Button from "@/components/Button";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="flex items-start justify-center my-[5%]">
      <Image src={LandingImage} alt="Landing Picture" />

      <div className="absolute z-20 text-isa-white text-nowrap md:text-6xl text-2xl font-bold flex flex-col items-center justify-center mt-[5%]">
        Indian Student Association
        <div className="text-isa-white md:text-3xl text-sm flex flex-row">
          <FaMapPin className="mr-5" />
          University of California Riverside
        </div>
        <div className="md:mt-4 mt-3">
          <Button text="JOIN NOW" link="https://discord.com" />
        </div>
      </div>
    </div>
  );
};

export default Landing;

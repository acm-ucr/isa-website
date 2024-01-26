import LandingImage from "@/public/images/landing.webp";
import { FaMapPin } from "react-icons/fa";
import Button from "@/components/Button";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <Image
        src={LandingImage}
        alt="Landing Picture"
        className="absolute top-0 scale-90"
      />

      <div className="absolute z-20 text-isa-white text-nowrap scale-[60%] lg:scale-90 text-5xl lg:text-6xl font-bold top-5 lg:top-20 lg:mt-24 flex flex-col items-center justify-center">
        Indian Student Association
        <div className="text-isa-white text-3xl flex flex-row">
          <FaMapPin className="mr-5" />
          University of California Riverside
        </div>
        <div className="mt-4">
          <Button text="JOIN NOW" link="https://discord.com" />
        </div>
      </div>
    </div>
  );
};

export default Landing;

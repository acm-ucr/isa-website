import Sky from "@/public/assets/sky.svg";
import Building from "@/public/assets/building.svg";
import { FaMapPin } from "react-icons/fa";
import Button from "@/components/Button";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      {/* Sky */}
      <Image src={Sky} layout="fill" className="absolute inset-0" />

      {/* Building */}
      <Image
        src={Building}
        className="relative z-10"
        style={{ top: "20%", width: "65%", height: "65%" }} // Adjust the width and height as needed
      />

      <div className="absolute z-20 text-isa-white text-6xl font-bold top-0 mt-24 flex flex-col items-center justify-center">
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

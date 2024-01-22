import Sky from "@/public/assets/sky.svg";
import Building from "@/public/images/building.webp";
import { FaMapPin } from "react-icons/fa";
import Button from "@/components/Button";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="relative flex items-center justify-center h-screen my-10 ">
      <Image src={Sky} alt="Picture of sky" fill={true} />

      <Image
        src={Building}
        alt="Picture of building"
        className="relative z-10 top-[22%] scale-110"
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

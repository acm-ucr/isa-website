import Sky from "@/public/assets/sky.svg";
import Building from "@/public/assets/building.svg";
import { FaMapPin } from "react-icons/fa";
import Button from "@/components/Button";
import Image from "next/image";

const Landing = () => {
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="">
        <Image src={Sky} alt="Picture of sky" fill={true} className="" />
      </div>

      <Image
        src={Building}
        alt="Picture of building"
        className="relative z-10 h-2/3 w-2/3 top-[20%]"
      />

      <div className="absolute z-20 text-isa-white text-6xl font-bold top-0 mt-24 flex flex-col items-center justify-center mb-4">
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

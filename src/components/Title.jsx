import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import { RiRectangleFill } from "react-icons/ri";

const Title = ({ text }) => {
  return (
    <div className="text-isa-yellow-200 flex-col flex items-center relative">
      <div className="text-center font-extrabold text-4xl">{text}</div>

      <div className="flex items-center mt-3">
        <RiRectangleFill className="w-14 h-2 text-isa-yellow-100 rounded-full mr-5" />
        <PiStarFourFill className="w-9 h-9 text-isa-yellow-100 mr-5" />
        <RiRectangleFill className="w-14 h-2 text-isa-yellow-100 rounded-full" />
      </div>
    </div>
  );
};

export default Title;

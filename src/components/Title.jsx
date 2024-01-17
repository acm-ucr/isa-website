import React from "react";
import { PiStarFourFill } from "react-icons/pi";

const Title = ({ text }) => {
  return (
    <div className="flex-col flex items-center">
      <div className="text-isa-yellow-200 text-center font-extrabold text-4xl">
        {text}
      </div>

      <div className="flex items-center mt-3">
        <div className="w-14 h-2 bg-isa-yellow-100 rounded mr-5" />
        <PiStarFourFill className="w-9 h-9 text-isa-yellow-100 mr-5" />
        <div className="w-14 h-2 bg-isa-yellow-100 rounded" />
      </div>
    </div>
  );
};

export default Title;

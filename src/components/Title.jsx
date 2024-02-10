import React from "react";
import { PiStarFourFill } from "react-icons/pi";

const Title = ({ text, size = "text-3xl" }) => {
  return (
    <div className="flex-col flex items-center">
      <div
        className={`text-isa-yellow-200 text-center font-extrabold md:text-4xl ${size}`}
      >
        {text}
      </div>

      <div className="flex items-center mt-3">
        <div className="md:w-14 w-11 md:h-2 h-2 bg-isa-yellow-100 rounded md:mr-5 mr-3" />
        <PiStarFourFill className="md:w-9 w-7 md:h-9 h-7 text-isa-yellow-100 md:mr-5 mr-3" />
        <div className="md:w-14 w-11 md:h-2 h-2 bg-isa-yellow-100 rounded" />
      </div>
    </div>
  );
};

export default Title;

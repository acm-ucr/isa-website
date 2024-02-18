import React from "react";

const Value = ({ title, description, icon }) => {
  return (
    <div className="value-container group bg-gradient-to-t from-isa-blue-200 to-isa-blue-100 text-white text-lg md:text-3xl rounded-2xl h-80 w-80 shadow-black shadow-inner py-8 flex flex-col items-center hover:from-isa-yellow-200 hover:to-isa-yellow-100">
      {icon}
      <div className="w-full text-center pt-2 text-white text-2xl size-10 font-extrabold tracking-wider">
        {title}
      </div>
      <div className="w-full text-lg text-center px-10 pt-4 text-white text-base font-semibold tracking-wider">
        {description}
      </div>
    </div>
  );
};

export default Value;

import React from "react";

const Value = ({ title, description, icon }) => {
  return (
    <div className="bg-gradient-to-t from-isa-blue-200 to-isa-blue-100 hover:shadow-inner inline-block text-white text-lg md:text-3xl rounded-2xl h-72 w-72 shadow-black shadow-inner">
      <div className="w-full flex justify-center pt-4 text-white font-extrabold">
        {icon}
      </div>
      <div className="w-full text-center pt-16 text-white size-9 font-extrabold tracking-wider">
        {title}
      </div>
      <div className="w-full text-center px-10 pt-12 text-white text-base font-semibold tracking-wider">
        {description}
      </div>
    </div>
  );
};

export default Value;

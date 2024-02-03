import React from "react";

const Value = ({ title, description, icon }) => {
  return (
    <div className="value-container group bg-gradient-to-t from-isa-blue-200 to-isa-blue-100 text-white text-3xl rounded-2xl h-72 w-72 shadow-black shadow-inner flex flex-col items-center mb-8 pt-4 hover:from-isa-yellow-200 hover:to-isa-yellow-100">
      {icon}
      <div className="w-full text-center pt-4 text-white size-9 font-extrabold tracking-wider">
        {title}
      </div>
      <div className="w-full text-center px-10 pt-8 text-white text-base font-semibold tracking-wider">
        {description}
      </div>
    </div>
  );
};

export default Value;

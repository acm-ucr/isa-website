import React from "react";
import Value from "./Value";
import { VALUES } from "../../data/home/Values";

const Values = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-6 p-4">
      {VALUES.map((value, index) => (
        <Value
          key={index}
          title={value.title}
          icon={value.icon}
          description={value.description}
        />
      ))}
    </div>
  );
};

export default Values;

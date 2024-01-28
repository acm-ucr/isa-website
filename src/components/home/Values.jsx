import React from "react";
import Value from "./Value";
import Title from "../../components/Title.jsx";
import { VALUES } from "../../data/home/Values";

const Values = () => {
  return (
    <div>
      <Title text="Our Core Values" />
      <div className="flex flex-row items-center justify-center space-x-6 p-4 mt-6 mb-20">
        {VALUES.map((value, index) => (
          <Value
            key={index}
            title={value.title}
            icon={value.icon}
            description={value.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Values;

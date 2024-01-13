import React from "react";

const CustomEvent = ({ event }) => {
  return (
    <div className="font-semibold text-lg p-1">
      <p className="inline whitespace-nowrap">
        {new Date(event.start).toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        })}
        &nbsp;
        {event.title}
      </p>
    </div>
  );
};

export default CustomEvent;

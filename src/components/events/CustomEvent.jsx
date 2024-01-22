const CustomEvent = ({ event }) => {
  return (
    <div className={`font-nunito ${event.color} text-sm flex justify-start`}>
      <p className="whitespace-nowrap m-0">
        {!event.allDay &&
          new Date(event.start).toLocaleTimeString(navigator.language, {})}
        &nbsp;
        {event.summary}
      </p>
    </div>
  );
};

export default CustomEvent;

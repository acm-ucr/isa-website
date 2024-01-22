const CustomEvent = ({ event }) => {
  return (
    <div className="font-nunito bg-isa-yellow-100 text-sm text-center">
      <p className="whitespace-nowrap m-0">{event.title}</p>
    </div>
  );
};

export default CustomEvent;

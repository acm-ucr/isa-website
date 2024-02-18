const CustomEvent = ({ event }) => {
  return (
    <div className="font-nunito bg-isa-yellow-100 text-center h-[28px] text-lg font-semibold flex items-center justify-center">
      <p className="whitespace-nowrap m-0">{event.title}</p>
    </div>
  );
};

export default CustomEvent;

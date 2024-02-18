const CustomEvent = ({ event }) => {
  return (
    <div className="flex items-center justify-center font-nunito bg-isa-yellow-100 text-base text-center h-[30px]">
      <p className="whitespace-nowrap">{event.title}</p>
    </div>
  );
};

export default CustomEvent;

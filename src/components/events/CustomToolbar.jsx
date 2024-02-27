import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CustomToolbar = (event) => {
  return (
    <div className="flex justify-start items-center w-full py-3 flex-col md:flex-row">
      <div className="md:w-1/3 flex gap-3 mb-2 md:mb-0 items-center text-isa-yellow-200 font-bold text-3xl">
        <AiOutlineArrowLeft
          onClick={() => {
            event.onNavigate("PREV");
          }}
          className="hover:cursor-pointer"
        />
        <p className="m-0">{monthNames[event.date.getMonth()]}</p>
        <p className="m-0">{event.date.getFullYear()}</p>
        <AiOutlineArrowRight
          onClick={() => event.onNavigate("NEXT")}
          className="hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CustomToolbar;

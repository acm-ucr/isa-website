import Title from "@/components/Title";
import CalendarEvents from "@/components/events/Calendar";
import Sun from "@/public/assets/sun.svg";
import Image from "next/image";

const Events = () => {
  return (
    <div className="overflow-hidden">
      <div className="h-10" />
      <Title text="Calendar" />
      <CalendarEvents />
      <div className="w-full relative flex flex-row justify-center items-center">
        <Image
          src={Sun}
          alt="Blue sun"
          className="hidden lg:block absolute lg:-right-[35%] bottom-0 scale-75"
        />
        <Image
          src={Sun}
          alt="Blue sun"
          className="hidden lg:block absolute lg:-left-[25%] scale-75"
        />
      </div>
    </div>
  );
};

export default Events;

import Title from "@/components/Title";
import CalendarEvents from "@/components/events/Calendar";
import Sun from "@/public/assets/sun.svg";
import Image from "next/image";

const Events = () => {
  return (
    <div className="overflow-hidden">
      <div className="h-20" />
      <Title text="Calendar" />
      <div className="w-full relative flex flex-row justify-center items-center">
        <Image
          src={Sun}
          alt="Blue sun"
          className="hidden lg:block absolute lg:-right-[35%] xl:-right-[20%] top-10 scale-75"
        />
        <Image
          src={Sun}
          alt="Blue sun"
          className="hidden lg:block absolute lg:-left-[25%] xl:-left-[15%] lg:top-[500px] xl:top-[650px] scale-75"
        />
      </div>
      <CalendarEvents />
    </div>
  );
};

export default Events;

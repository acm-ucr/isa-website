"use client";
import Title from "@/components/Title";
import Board from "@/components/board/Board";

const Meet = () => {
  const boardMembers = Array.from({ length: 12 }, () => ({
    name: "Evan Littlecat",
    position: "Position Name",
  }));

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-4 sm:pt-16 md:pt-32 lg:pt-16">
      <Title text="Meet the Board" />
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 mt-4 mb-4 md:grid-cols-3 md:gap-x-16 md:mt-10 lg:grid-cols-4 lg:gap-x-32 lg:mt-10">
        {boardMembers.map((member, index) => (
          <Board key={index} name={member.name} position={member.position} />
        ))}
      </div>
    </div>
  );
};

export default Meet;

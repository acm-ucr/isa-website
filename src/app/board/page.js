"use client";
import Title from "@/components/Title";
import Board from "@/components/board/Board";

const Meet = () => {
  const boardMembers = Array.from({ length: 12 }, () => ({
    name: "Evan Littlecat",
    position: "Position Name",
  }));

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-10">
      <Title text="Meet the Board" />
      <div className="grid grid-cols-4 gap-12 mt-10">
        {boardMembers.map((member, index) => (
          <Board key={index} name={member.name} position={member.position} />
        ))}
      </div>
    </div>
  );
};

export default Meet;

const Board = ({ name = "No name", position = "N/A" }) => {
  return (
    <div className="board flex">
      <div className="h-h20 w-1.5 bg-gradient-to-t from-isa-yellow-200 to-isa-yellow-100 rounded-lg mr-2" />
      <div className="flex-column align-center">
        <p className="text-xl font-bold bg-gradient-to-r from-isa-yellow-200 to-isa-yellow-100 text-transparent bg-clip-text">
          {position}
        </p>
        <p
          className="text-white w-fit rounded-full text-md font-bold py-1.5 px-4
      text-center whitespace-nowrap bg-gradient-to-r from-isa-blue-200 to-isa-blue-100 shadow-inner"
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default Board;

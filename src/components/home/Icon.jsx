import { FaDiscord } from "react-icons/fa";

const Icon = ({ icon, text, link }) => {
  return (
    <div className="flex flex-col text-isa-yellow-200 text-6xl h-screen flex items-center">
      <FaDiscord />

      <div className="text-xl text-bold bg-gradient-to-r from-isa-yellow-200 to-isa-yellow-100 inline-block text-transparent bg-clip-text">
        {" "}
        Discord{" "}
      </div>
    </div>
  );
};

export default Icon;

// import { FaDiscord } from "react-icons/fa"; //how to make parameter for icon?

// const Icon = ({ icon, text, link }) => {
//     return (

//       <div className="flex flex-col text-isa-yellow-200 text-6xl h-screen flex items-center justify-center">
//         <{icon}} />

//         <div className="text-xl text-bold bg-gradient-to-r from-isa-yellow-200 to-isa-yellow-100 inline-block text-transparent bg-clip-text"> {text} </div>
//       </div>
//     );
//   };

//   export default Icon;

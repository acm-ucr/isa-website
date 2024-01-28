import Link from "next/link";

const Social = ({ icon, text, link }) => {
  return (
    <Link
      className="hover:!text-isa-blue-100 hover:!bg-gradient-to-r hover:!from-isa-blue-200 hover:!bg-clip-text hover:!to-isa-blue-100 flex flex-col cursor-pointer h-25 items-center text-isa-yellow-100 mx-16"
      href={link}
      target="_blank"
    >
      {icon}

      <div className="text-2xl text-bold bg-gradient-to-r from-isa-yellow-200 to-isa-yellow-100 bg-clip-text">
        {text}
      </div>
    </Link>
  );
};

export default Social;

import Link from "next/link";

const Icon = ({ icon, text, link }) => {
  return (
    <Link
      className="flex flex-col cursor-pointer h-25 w-20 text-isa-yellow-200 items-center"
      href={link}
      target="_blank"
    >
      {icon}

      <div className="text-2xl text-bold bg-gradient-to-r from-isa-yellow-200 to-isa-yellow-100 inline-block text-transparent bg-clip-text">
        {text}
      </div>
    </Link>
  );
};

export default Icon;

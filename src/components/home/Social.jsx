import Link from "next/link";

const Social = ({ icon, text, link }) => {
  return (
    <Link
      className=" hover:text-isa-blue-100 duration-300 text-isa-yellow-100 flex flex-col cursor-pointer items-center mx-16"
      href={link}
      target="_blank"
    >
      {icon}

      <div className="text-2xl font-bold mt-2">{text}</div>
    </Link>
  );
};

export default Social;

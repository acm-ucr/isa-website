import Title from "@/components/Title";
import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 overscroll-none">
      <Title text="404" size="text-7xl md:text-7xl" />

      <p className="text-3xl font-bold bg-gradient-to-r from-isa-blue-200 to-isa-blue-100 text-transparent bg-clip-text mb-3">
        Page Not Found
      </p>
      <Button text="Back To Home" link="/" />
    </div>
  );
};

export default NotFound;

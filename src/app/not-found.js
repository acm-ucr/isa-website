import Subtitle from "@/components/handbook/Subtitle";
import Button from "@/components/Button";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Subtitle text="404" />
      <p className="text-3xl text-isa-blue-200 mb-3">Page Not Found</p>
      <Button text={"Back To Home"} link={"/"} />
    </div>
  );
};

export default NotFound;

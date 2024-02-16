import Landing from "@/components/home/Landing";
import About from "@/components/home/About";
import What from "@/components/home/What";
import Values from "@/components/home/Values";
import Involved from "@/components/home/Involved";

const Home = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Landing />
      <About />
      <What />
      <Values />
      <Involved />
    </div>
  );
};

export default Home;

import Landing from "@/components/home/Landing";
import About from "@/components/home/About";
import What from "@/components/home/What";
import Values from "@/components/home/Values";
import Involved from "@/components/Involved";
import NotFound from "./not-found";
const Home = () => {
  return (
    <>
      <NotFound />
      <Landing />
      <About />
      <What />
      <Values />
      <Involved />
    </>
  );
};

export default Home;

import Social from "@/components/home/Social";
import { SOCIALS } from "@/data/home/Socials";
import Title from "@/components/Title";

const Involved = () => {
  return (
    <div>
      <Title text="Get Involved" />
      <div className="flex justify-content-center pb-36">
        {SOCIALS.map((social, index) => {
          return (
            <Social
              key={index}
              text={social.name}
              link={social.link}
              icon={social.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Involved;

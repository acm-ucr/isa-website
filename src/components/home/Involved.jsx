import Social from "@/components/home/Social";
import { SOCIALS } from "@/data/home/Socials";
import Title from "@/components/Title";

const Involved = () => {
  return (
    <div>
      <Title text="Get Involved" />
      <div className="grid xl:flex xl:flex-row gap-y-5 grid-cols-2 md:grid-cols-3 justify-content-center pb-40 pt-12">
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

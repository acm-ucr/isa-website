import Title from "@/components/Title";
import Button from "@/components/Button";
import Stars from "@/public/assets/stars.svg";
import Image from "next/image";

const What = () => {
  return (
    <div className="relative flex flex-col items-center justify-center my-[5%]">
      <Image src={Stars} className="absolute md:w-2/5 w-4/5 z-10 top-0 " />

      <div className="mt-10">
        <Title text="What We Do" />
      </div>

      <p className="text-center md:text-2xl text-xl my-3 w-3/4 z-20">
        Through this organization, we try to promote positive interaction among
        students of either Indian origin or desirous of understanding the Indian
        culture. This includes ensuring the smooth transition of newly-arrived
        graduate students from India into the social setup of the university
        campus.
      </p>

      <Button text="CHECK OUT NEW HANDBOOK" link="handbook" />
    </div>
  );
};

export default What;

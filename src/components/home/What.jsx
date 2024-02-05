import Title from "@/components/Title";
import Button from "@/components/Button";

const What = () => {
  return (
    <div className="flex flex-col items-center justify-center my-[5%]">
      <Title text="What We Do" />
      <p className="text-center md:text-2xl text-xl my-5 w-3/4">
        Through this organization we try to promote the positive interaction
        among students of either Indian origin, or desirous of understanding the
        Indian culture. This includes ensuring the smooth transition of
        newly-arrived graduate students from India into the social setup of the
        university campus.
      </p>
      <Button text="CHECK OUT NEW HANDBOOK" link="handbook" />
    </div>
  );
};

export default What;

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const toolbarItems = [
  {
    topic: "General Meeting",
    color: "bg-isa-yellow-100 text-white font-bold",
  },
  {
    topic: "Fundraiser",
    color: "bg-isa-yellow-100 text-white font-bold",
  },
  {
    topic: "Social",
    color: "bg-isa-yellow-100 text-white font-bold",
  },
];

const CustomToolbar = (event) => {
  return (
    <div className="flex justify-center items-center w-full py-3 flex-col md:flex-row">
      <div className="md:w-1/3 flex gap-3 mb-2 md:mb-0 items-center text-isa-yellow-200 font-bold">
        <AiOutlineArrowLeft
          onClick={() => {
            event.onNavigate("PREV");
          }}
          className="hover:cursor-pointer"
        />
        <p className="m-0">{monthNames[event.date.getMonth()]}</p>
        <p className="m-0">{event.date.getFullYear()}</p>
        <AiOutlineArrowRight
          onClick={() => event.onNavigate("NEXT")}
          className="hover:cursor-pointer"
        />
      </div>
      <Row className="w-10/12 md:w-3/4 m-0 p-0 flex justify-center md:justify-end justify-items-center items-center">
        {toolbarItems.map((item, index) => (
          <Col key={index} xs={9} sm={3} className="p-1">
            <p
              className={`${item.color} whitespace-nowrap text-center text-base p-1`}
            >
              {item.topic}
            </p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CustomToolbar;

"use client";
import React from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState } from "react";
import CustomToolbar from "./CustomToolbar";
import CustomHeader from "./CustomHeader";
import CustomEvent from "./CustomEvent";

const mLocalizer = momentLocalizer(moment);
const CalendarEvents = () => {
  const [date, setDate] = useState(new Date());
  const dummyEvents = [
    {
      title: "Meeting with Team",
      start: new Date(2024, 1, 20, 10, 0),
      end: new Date(2024, 1, 20, 11, 0),
      location: "WCH",
      summary: "nice event",
      color: "isa-yellow-100",
    },
    {
      title: "Lunch Break",
      start: new Date(2024, 2, 20, 10, 0),
      end: new Date(2024, 2, 20, 11, 0),
      location: "WCH",
      summary: "lit event",
      color: "isa-yellow-100",
    },
  ];
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <div className="mb-5 w-11/12 flex justify-center items-center">
        <div className="h-[110vh] w-full relative">
          <Calendar
            className="w-full m-0 p-0 text-3xl"
            date={date}
            onNavigate={(newDate) => {
              setDate(newDate);
            }}
            events={dummyEvents}
            localizer={mLocalizer}
            defaultView="month"
            views={["month"]}
            components={{
              event: CustomEvent,
              header: CustomHeader,
              toolbar: CustomToolbar,
            }}
            onSelectEvent={(event) => setEvent(event)}
            eventPropGetter={() => {
              return {
                className: `p-0 !active:ring-0 !focus:outline-0 !bg-transparent`,
              };
            }}
            dayPropGetter={(event) => {
              return {
                className: `${
                  new Date(event).toLocaleDateString() ==
                  new Date().toLocaleDateString()
                    ? "!bg-opacity-40 !bg-isa-yellow-100"
                    : "!bg-transparent"
                }`,
                style: {
                  margin: 0,
                  padding: 0,
                },
              };
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CalendarEvents;

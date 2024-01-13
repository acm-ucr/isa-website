"use client";
import React from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState } from "react";

const mLocalizer = momentLocalizer(moment);
const CalendarEvents = () => {
  const [date, setDate] = useState(new Date());
  const dummyEvents = [
    {
      title: "Meeting with Team",
      start: new Date(2024, 1, 20, 10, 0),
      end: new Date(2024, 1, 5, 11, 0),
      location: "WCH",
      summary: "nice event",
    },
    {
      title: "Lunch Break",
      start: new Date(2024, 2, 20, 10, 0),
      end: new Date(2024, 2, 5, 11, 0),
      location: "WCH",
      summary: "lit event",
    },
  ];
  return (
    <Calendar
      className="text-3xl"
      date={date}
      events={dummyEvents}
      localizer={mLocalizer}
      defaultView="month"
      views={["month"]}
      onNavigate={(newDate) => {
        setDate(newDate);
      }}
    />
  );
};

export default CalendarEvents;

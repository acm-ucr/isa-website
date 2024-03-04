import React from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState } from "react";
import CustomToolbar from "./CustomToolbar";
import CustomHeader from "./CustomHeader";
import CustomEvent from "./CustomEvent";
import "./rbc.css";
import Modal from "./Modal";

const mLocalizer = momentLocalizer(moment);

const CalendarEvents = ({ events }) => {
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="w-full flex justify-center items-center flex-col mb-20">
      <div className="mb-5 w-11/12 flex justify-center items-center">
        <div className="h-[110vh] w-full relative">
          <Calendar
            className="w-full m-0 p-0 md:text-3xl text-lg"
            date={date}
            onNavigate={(newDate) => {
              setDate(newDate);
            }}
            events={events}
            localizer={mLocalizer}
            defaultView="month"
            views={["month"]}
            components={{
              event: CustomEvent,
              header: CustomHeader,
              toolbar: CustomToolbar,
            }}
            onSelectEvent={(event) => setSelectedEvent(event)}
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
                    ? "!bg-isa-yellow-50"
                    : "!bg-white"
                }`,
                style: {
                  margin: 0,
                  padding: 0,
                },
              };
            }}
          />
        </div>
        {selectedEvent && (
          <Modal setEvents={setSelectedEvent} events={selectedEvent} />
        )}
      </div>
    </section>
  );
};

export default CalendarEvents;

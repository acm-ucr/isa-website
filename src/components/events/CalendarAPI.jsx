import CalendarEvents from "./Calendar";

async function getData() {
  const startDate = new Date(
    new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 100000
  ).toISOString();
  const endDate = new Date(
    new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000
  ).toISOString();
  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${startDate}&timeMax=${endDate}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function CalendarAPI() {
  const data = await getData();
  const items = data.items.map((item) => {
    item.allDay = !item.start.dateTime;
    (item.start = item.start.dateTime
      ? new Date(item.start.dateTime)
      : new Date(new Date(item.start.date).getTime() + offset)),
      (item.end = new Date(
        item.end.dateTime || new Date(item.end.date).getTime() + offset
      )),
      (item.hidden = false);
    return item;
  });
  return (
    <div>
      <CalendarEvents events={items} />
    </div>
  );
}

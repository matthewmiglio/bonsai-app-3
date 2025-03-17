// src/pages/api/events.ts
import { NextApiRequest, NextApiResponse } from "next";

// Define the Event type that matches the expected response from the Google Calendar API
interface Event {
  id: string;
  summary: string;
  startDate: string;
  htmlLink: string;
}

const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

console.log('events.ts api key is ', API_KEY);
console.log('events.ts calendar id is ', CALENDAR_ID);

const fetchEventsFromAPI = async (): Promise<Event[]> => {
  console.log("Fetching events from Google Calendar API...");

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`,
    { method: "GET" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }

  const data = await res.json();

  // Extract only the relevant event details
  const events = data.items.map((event: any) => ({
    id: event.id,
    summary: event.summary,
    startDate: event.start.dateTime || event.start.date, // Extract actual event date
    htmlLink: event.htmlLink,
  }));

  console.log("Processed events data:", events);
  return events;
};


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const events = await fetchEventsFromAPI();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error: error });
  }
}

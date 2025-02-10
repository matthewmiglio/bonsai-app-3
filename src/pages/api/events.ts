// src/pages/api/events.ts
import { NextApiRequest, NextApiResponse } from "next";

// Define the Event type that matches the expected response from the Google Calendar API
interface Event {
  id: string;
  summary: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  htmlLink: string;
}

const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

console.log('events.ts api key is ', API_KEY);
console.log('events.ts calendar id is ', CALENDAR_ID);

const fetchEventsFromAPI = async (): Promise<Event[]> => {  // Specify the return type
  console.log('getting response');
  const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`, {
    method: 'GET',
  });

  console.log('finished getting events response. here is the res var',res);

  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }

  const data = await res.json();
  console.log('This is the const data var in fetchEventsFromAPI():', data);
  return data.items as Event[]; // Ensure the returned data is typed as an array of Event objects
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const events = await fetchEventsFromAPI();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error: error });
  }
}

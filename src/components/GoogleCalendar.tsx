import React, { useState, useEffect } from "react";
import "../styles/globals.css";

// Define the Event type
interface Event {
  id: string;
  summary: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  htmlLink: string;
}

const CalendarWidget = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await getEvents();
      console.log("Fetched events:", eventsData);
      if (Array.isArray(eventsData)) {
        setEvents(eventsData);
      } else {
        console.warn("Fetched data is not an array:", eventsData);
        setEvents([]);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <h2 className="text-2xl font-semibold mb-2">Upcoming Events</h2>
        <p className="text-sm opacity-90">
          Stay up to date with our latest bonsai events!
        </p>
      </div>

      {/* Events List */}
      <div className="p-4 max-h-96 overflow-y-auto">
        {loading ? (
          <p className="text-center text-lg text-gray-500">Loading events...</p>
        ) : events.length === 0 ? (
          <p className="text-center text-lg text-gray-500">
            No events available.
          </p>
        ) : (
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-stone-100 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-green-700">
                  {event.summary}
                </h3>
                <p className="text-gray-700 text-sm">
                  {event.start?.dateTime
                    ? new Date(event.start.dateTime).toLocaleDateString(
                        "en-US",
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )
                    : "No start date available"}
                </p>
                <a
                  href={event.htmlLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-900 font-medium hover:underline transition-all"
                >
                  View Event
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <a
          href="https://calendar.google.com/calendar/u/0/r"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-green-700 hover:bg-green-800 text-white py-2 rounded-md transition-all"
        >
          View Full Calendar
        </a>
      </div>
    </div>
  );
};

// Helper function for fetching events
const getEvents = async (): Promise<Event[]> => {
  console.log("Fetching calendar events...");
  try {
    const res = await fetch("/api/events");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export default CalendarWidget;

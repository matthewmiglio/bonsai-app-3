import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/globals.css";

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
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await getEvents();
      setEvents(Array.isArray(eventsData) ? eventsData : []);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  return (
    <div className="relative bg-gray-100 p-6 rounded-lg shadow-xl w-full max-w-6xl">
      {/* Month Selector */}
      <div className="flex justify-between items-center mb-4">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="text-lg font-bold text-green-700 hover:text-green-900"
          onClick={handlePrevMonth}
        >
          ◀
        </motion.button>
        <h2 className="text-2xl font-bold">
          {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </h2>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="text-lg font-bold text-green-700 hover:text-green-900"
          onClick={handleNextMonth}
        >
          ▶
        </motion.button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {[...Array(daysInMonth)].map((_, index) => {
          const day = index + 1;
          const event = events.find((e) =>
            new Date(e.start.dateTime || e.start.date || "").getDate() === day
          );
          return (
            <motion.div
              key={day}
              whileHover={{ scale: 1.1 }}
              className={`p-4 border rounded-lg cursor-pointer transition-all ${event ? "bg-green-200" : "bg-white"}`}
            >
                <p className="p-5 font-semibold text-xl">{day}</p>
              {event && (
                <a
                  href={event.htmlLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-green-800 underline"
                >
                  {event.summary}
                </a>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* View Full Calendar */}
      <div className="text-center mt-4">
        <a
          href="https://calendar.google.com/calendar/u/0/r"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-md transition-all"
        >
          View Full Calendar
        </a>
      </div>
    </div>
  );
};

const getEvents = async (): Promise<Event[]> => {
  try {
    const res = await fetch("/api/events");
    return await res.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export default CalendarWidget;

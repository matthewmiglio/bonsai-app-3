import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/globals.css";

interface Event {
  id: string;
  summary: string;
  startDate: string;
  htmlLink: string;
}

const CalendarWidget = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await getEvents();
      setEvents(Array.isArray(eventsData) ? eventsData : []);
    };
    fetchEvents();
  }, []);

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const adjustedFirstDayOfMonth = firstDayOfMonth === 0 ? 7 : firstDayOfMonth;

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

  // Filter events for the current displayed month
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.startDate);
    return (
      eventDate.getFullYear() === currentMonth.getFullYear() &&
      eventDate.getMonth() === currentMonth.getMonth()
    );
  });

  const getDayGrid = () => {
    const days = [];

    for (let i = 0; i < adjustedFirstDayOfMonth - 1; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    while (days.length % 7 !== 0) {
      days.push(null);
    }

    return days;
  };

  return (
    <div className="relative bg-gray-100 p-6 rounded-lg shadow-xl w-full max-w-8xl">
      <div className="flex justify-between items-center mb-4">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="text-lg font-bold text-green-700 hover:text-green-900"
          onClick={handlePrevMonth}
        >
          ◀
        </motion.button>
        <h2 className="text-2xl font-bold">
          {currentMonth.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="text-lg font-bold text-green-700 hover:text-green-900"
          onClick={handleNextMonth}
        >
          ▶
        </motion.button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="font-semibold">
            {day}
          </div>
        ))}

        {getDayGrid().map((day, index) => {
          if (day === null) {
            return <div key={index} className="p-4 border rounded-lg"></div>;
          }

          const event = filteredEvents.find(
            (e) =>
              new Date(e.startDate).toISOString().split("T")[0] ===
              new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
                .toISOString()
                .split("T")[0]
          );

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`p-4 border rounded-lg cursor-pointer transition-all h-24 flex flex-col justify-between ${
                event ? "bg-green-200" : "bg-white"
              }`}
            >
              <p className="font-semibold text-xl">{day}</p>
              {event && (
                <a
                  href={event.htmlLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-green-800 underline block mt-1 h-10 overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  {event.summary}
                </a>
              )}
            </motion.div>
          );
        })}
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

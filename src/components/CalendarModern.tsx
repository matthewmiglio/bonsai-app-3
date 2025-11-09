import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/globals.css";

interface Event {
  id: string;
  summary: string;
  startDate: string;
  htmlLink: string;
}

const CalendarModern = () => {
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

  const today = new Date();
  const isToday = (day: number | null) => {
    if (!day) return false;
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevMonth}
            className="p-2 hover:bg-green-500/30 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <h2 className="text-3xl font-bold text-white">
            {currentMonth.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-green-500/30 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-6">
        <div className="grid grid-cols-7 gap-3">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="text-center font-bold text-gray-600 text-sm py-2">
              {day}
            </div>
          ))}

          {getDayGrid().map((day, index) => {
            if (day === null) {
              return <div key={index} className="aspect-square"></div>;
            }

            const event = filteredEvents.find(
              (e) =>
                new Date(e.startDate).toISOString().split("T")[0] ===
                new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
                  .toISOString()
                  .split("T")[0]
            );

            return (
              <div
                key={index}
                className={`aspect-square rounded-xl flex flex-col items-center justify-center p-2 transition-all hover:shadow-md min-h-[100px] ${
                  isToday(day)
                    ? "bg-green-600 text-white ring-4 ring-green-200"
                    : event
                    ? "bg-green-100 hover:bg-green-200"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <span className={`text-lg font-semibold ${isToday(day) ? "text-white" : "text-gray-800"}`}>
                  {day}
                </span>
                <div className="h-8 mt-1 flex items-center">
                  {event && (
                    <a
                      href={event.htmlLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs text-center line-clamp-2 ${
                        isToday(day) ? "text-white" : "text-green-700"
                      }`}
                    >
                      {event.summary}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
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

export default CalendarModern;

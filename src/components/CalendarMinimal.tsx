import { useState, useEffect } from "react";
import "../styles/globals.css";

interface Event {
  id: string;
  summary: string;
  startDate: string;
  htmlLink: string;
}

const CalendarMinimal = () => {
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
    <div className="bg-white border border-gray-200 rounded-lg max-w-5xl mx-auto p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-gray-200">
        <button
          onClick={handlePrevMonth}
          className="text-gray-600 hover:text-green-700 font-medium text-sm transition-colors"
        >
          ← Previous
        </button>
        <h2 className="text-2xl font-light text-gray-800">
          {currentMonth.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button
          onClick={handleNextMonth}
          className="text-gray-600 hover:text-green-700 font-medium text-sm transition-colors"
        >
          Next →
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-4">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, idx) => (
          <div key={idx} className="text-center font-medium text-gray-400 text-xs uppercase pb-2">
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
              className={`aspect-square flex flex-col items-center justify-center border transition-all ${
                isToday(day)
                  ? "border-green-600 bg-green-50"
                  : event
                  ? "border-green-300 bg-green-50/50 hover:bg-green-50"
                  : "border-gray-100 hover:border-gray-300"
              }`}
            >
              <span
                className={`text-base font-normal ${
                  isToday(day) ? "font-bold text-green-700" : "text-gray-700"
                }`}
              >
                {day}
              </span>
              {event && (
                <a
                  href={event.htmlLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-green-600 mt-1 text-center line-clamp-2 px-1"
                >
                  •
                </a>
              )}
            </div>
          );
        })}
      </div>

      {/* Event List */}
      {filteredEvents.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 mb-3 uppercase">Events This Month</h3>
          <div className="space-y-2">
            {filteredEvents.map((event) => (
              <a
                key={event.id}
                href={event.htmlLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 hover:bg-gray-50 transition-colors border-l-2 border-green-600"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-medium text-green-700">
                    {new Date(event.startDate).getDate()}
                  </span>
                  <span className="text-sm text-gray-700">{event.summary}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
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

export default CalendarMinimal;

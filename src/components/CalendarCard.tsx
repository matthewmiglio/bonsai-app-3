import { useState, useEffect } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/globals.css";

interface Event {
  id: string;
  summary: string;
  startDate: string;
  htmlLink: string;
}

const CalendarCard = () => {
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
    <div className="max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-green-50 to-stone-50 rounded-3xl shadow-xl p-8 border border-green-100">
        {/* Header with Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-green-600 p-3 rounded-xl">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-green-900">
              {currentMonth.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrevMonth}
              className="p-2 bg-white rounded-lg hover:bg-green-50 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-green-700" />
            </button>
            <button
              onClick={handleNextMonth}
              className="p-2 bg-white rounded-lg hover:bg-green-50 transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5 text-green-700" />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-7 gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div
                key={day}
                className="text-center font-semibold text-gray-500 text-sm py-3"
              >
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
                  className={`aspect-square rounded-lg flex flex-col items-center justify-center p-2 transition-all ${
                    isToday(day)
                      ? "bg-green-600 text-white shadow-lg scale-105"
                      : event
                      ? "bg-green-100 hover:bg-green-200 cursor-pointer"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`text-base font-medium ${
                      isToday(day) ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {day}
                  </span>
                  {event && !isToday(day) && (
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1"></div>
                  )}
                  {event && isToday(day) && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-1"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Events List in Cards */}
        {filteredEvents.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-green-900 mb-4">
              Upcoming Events
            </h3>
            <div className="grid gap-3">
              {filteredEvents.map((event) => (
                <a
                  key={event.id}
                  href={event.htmlLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
                >
                  <div className="bg-green-100 rounded-lg p-3 group-hover:bg-green-200 transition-colors">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-700">
                        {new Date(event.startDate).getDate()}
                      </div>
                      <div className="text-xs text-green-600 uppercase">
                        {new Date(event.startDate).toLocaleDateString("en-US", {
                          month: "short",
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 group-hover:text-green-700 transition-colors">
                      {event.summary}
                    </h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
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

export default CalendarCard;

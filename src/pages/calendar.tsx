import Header from "../components/Header";
import Footer from "../components/Footer";
import CalendarWidget from "../components/GoogleCalendar";
import { Leaf, CalendarIcon, Clock } from "lucide-react";
import "../styles/globals.css";
import Link from "next/link";

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="justify-items-center max-w-8xl mx-auto">
          <div className=" max-w-6xl grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Leaf className="h-6 w-6 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold text-green-800">
                  Upcoming Events
                </h2>
              </div>
              <p className="text-gray-600">
                Stay tuned for exciting bonsai workshops, exhibitions, and
                seminars. Our calendar is regularly updated with new events.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CalendarIcon className="h-6 w-6 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold text-green-800">
                  Monthly Meetings
                </h2>
              </div>
              <p className="text-gray-600">
                Join us every third Tuesday of the month for our regular club
                meetings. Share your bonsai journey and learn from fellow
                enthusiasts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold text-green-800">
                  Event Times
                </h2>
              </div>
              <p className="text-gray-600">
                Most events start at 7:00 PM and last for about 2-3 hours.
                Check individual event details for specific timings.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <CalendarWidget />
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Can&apos;t find what you&apos;re looking for? Have questions about
              our events?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Link from "next/link";
import { Bell, ArrowRight } from "lucide-react";

export default function CalendarCTA2() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-stone-50 py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-green-100">
          <div className="p-10 md:p-12 text-center">
            <div className="inline-flex items-center justify-center bg-green-600 text-white rounded-full w-16 h-16 mb-6">
              <Bell className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Stay Connected With Our Community
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Want to stay updated on all our events? Reach out to learn more about our workshops, exhibitions, and monthly meetings.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
              <div className="bg-stone-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-700 mb-2">Monthly Meetings</h3>
                <p className="text-sm text-gray-600">Join us every third Tuesday</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-700 mb-2">Special Events</h3>
                <p className="text-sm text-gray-600">Workshops & exhibitions</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

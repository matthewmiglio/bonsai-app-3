import Link from "next/link";
import { Calendar, Users } from "lucide-react";

export default function CalendarCTA1() {
  return (
    <section className="bg-white border-t-4 border-green-600 py-12 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <Calendar className="w-12 h-12 text-green-700" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Don't Miss Our Next Event
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join us for workshops, exhibitions, and community gatherings. Have questions about upcoming events or want to get involved?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
          >
            <Users className="w-5 h-5" />
            Get In Touch
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-green-600"
          >
            Become a Member
          </Link>
        </div>
      </div>
    </section>
  );
}

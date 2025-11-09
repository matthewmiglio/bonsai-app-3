'use client';

import Link from "next/link";

export default function UpcomingEvents() {
  const events = [
    {
      date: "Dec 15",
      year: "2024",
      title: "Winter Pruning Workshop",
      time: "2:00 PM - 4:00 PM",
      location: "Community Center",
      description: "Learn proper techniques for winter maintenance and branch selection",
    },
    {
      date: "Jan 20",
      year: "2025",
      title: "New Year Bonsai Exhibition",
      time: "10:00 AM - 5:00 PM",
      location: "Meijer Gardens",
      description: "Showcase your finest work and vote for the People's Choice Award",
    },
    {
      date: "Feb 10",
      year: "2025",
      title: "Beginner's Styling Session",
      time: "1:00 PM - 3:00 PM",
      location: "Main Library",
      description: "Perfect for newcomers - bring your tree and get hands-on guidance",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/meijer/Meijer-Gardens-1260x680-147744548.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-green-700/85" />

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Upcoming Events
        </h2>
        <p className="text-center text-green-100 text-lg mb-16 max-w-2xl mx-auto">
          Join us for workshops, exhibitions, and community gatherings
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
              }}
            >
              {/* Date badge */}
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-white rounded-xl p-3 shadow-lg min-w-[70px] text-center">
                  <div className="text-2xl font-bold text-green-800">
                    {event.date.split(' ')[1]}
                  </div>
                  <div className="text-xs text-gray-600 uppercase font-semibold">
                    {event.date.split(' ')[0]}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {event.year}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-200 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-green-100 text-sm">
                    {event.time}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-white/90">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-4">
                {event.description}
              </p>

              <button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/40 rounded-lg py-2 px-4 font-medium transition-all duration-300 hover:shadow-lg">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/calendar"
            className="inline-block text-white hover:text-green-200 font-semibold text-lg underline underline-offset-4 transition-colors"
          >
            View Full Calendar →
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

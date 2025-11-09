'use client';
import { useState, useEffect } from "react";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Joining the West Michigan Bonsai Club transformed my understanding of this ancient art. The workshops are invaluable!",
      author: "Sarah Mitchell",
      role: "Member since 2019",
    },
    {
      quote: "The community here is incredible. Everyone is so supportive and willing to share their knowledge and experiences.",
      author: "David Chen",
      role: "Member since 2021",
    },
    {
      quote: "I came as a complete beginner and now I'm confident in caring for multiple bonsai. The mentorship is outstanding!",
      author: "Emily Rodriguez",
      role: "Member since 2022",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Ambient Gradient Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradientFlow 12s ease infinite',
        }}
      />

      <style jsx>{`
        @keyframes gradientFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>

      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-lg">
          What Our Members Say
        </h2>

        <div className="relative min-h-[280px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-700 ${
                index === currentIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 pointer-events-none'
              }`}
            >
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 md:p-12 shadow-2xl">
                <svg
                  className="w-12 h-12 text-green-600 mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-xl md:text-2xl text-gray-800 font-light mb-6 leading-relaxed italic">
                  {testimonial.quote}
                </blockquote>
                <div className="border-t border-gray-200 pt-6">
                  <p className="font-semibold text-green-800 text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

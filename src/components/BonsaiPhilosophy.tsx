'use client';
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function BonsaiPhilosophy() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = ["Patience", "Balance", "Harmony"];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-green-900"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(/matt_stolen_bonsai_pic.jpg)',
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Oversized typography with kinetic animation */}
          <div className="mb-8 overflow-hidden">
            <h2 className="text-sm uppercase tracking-widest text-green-300 mb-6 font-semibold">
              The Art of Bonsai
            </h2>

            <div className="kinetic-headline mb-6">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={`inline-block transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${wordIndex * 200}ms` : '0ms',
                    fontSize: 'clamp(3rem, 12vw, 8rem)',
                    fontWeight: 900,
                    lineHeight: 0.9,
                    letterSpacing: '-0.03em',
                    background: 'linear-gradient(135deg, #ffffff 0%, #86efac 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'block',
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Supporting text */}
          <div
            className={`max-w-3xl mx-auto transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-xl md:text-2xl text-stone-200 leading-relaxed font-light mb-8">
              Bonsai is more than horticulture—it&apos;s a meditation on time, growth, and the delicate
              relationship between nature and human creativity.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-6xl mb-4">🌱</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Living Art
                </h3>
                <p className="text-stone-300 text-sm">
                  Each tree is a unique sculpture that evolves with time
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4">🧘</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Mindful Practice
                </h3>
                <p className="text-stone-300 text-sm">
                  Cultivating trees cultivates inner peace and focus
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4">🌿</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Nature Connection
                </h3>
                <p className="text-stone-300 text-sm">
                  Bringing the majesty of nature into intimate scale
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            className={`mt-16 transition-all duration-700 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-full hover:from-green-500 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Discover Our Philosophy
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .kinetic-headline span {
            transition: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}

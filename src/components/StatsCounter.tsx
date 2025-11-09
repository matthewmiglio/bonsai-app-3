'use client';
import { useState, useEffect, useRef } from "react";

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ members: 0, workshops: 0, years: 0, trees: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetCounts = {
    members: 150,
    workshops: 48,
    years: 35,
    trees: 800,
  };

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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        members: Math.floor(targetCounts.members * easeOut),
        workshops: Math.floor(targetCounts.workshops * easeOut),
        years: Math.floor(targetCounts.years * easeOut),
        trees: Math.floor(targetCounts.trees * easeOut),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(targetCounts);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  const stats = [
    { label: "Active Members", value: counts.members, suffix: "+" },
    { label: "Workshops per Year", value: counts.workshops, suffix: "" },
    { label: "Years of Tradition", value: counts.years, suffix: "" },
    { label: "Collective Trees", value: counts.trees, suffix: "+" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-r from-green-800 to-green-600 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 text-white transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Our Impact in Numbers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="mb-3">
                <span
                  className="text-5xl md:text-6xl font-bold text-white inline-block"
                  style={{
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-4xl md:text-5xl font-bold text-green-200">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-green-100 text-sm md:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

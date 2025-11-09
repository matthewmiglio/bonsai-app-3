"use client";

import { useState, useEffect, useRef } from "react";
import { Users, Calendar, Award, TreePine } from "lucide-react";

export default function AboutStats() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: 150,
      suffix: "+",
      label: "Active Members",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      value: 48,
      suffix: "+",
      label: "Events Per Year",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: 30,
      suffix: "+",
      label: "Years of Excellence",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      value: 100,
      suffix: "%",
      label: "Passion for Bonsai",
      color: "from-amber-500 to-amber-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);

        setCount(Math.floor(end * percentage));

        if (percentage < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <div className="bg-gradient-to-br from-green-800 to-green-700 py-16" ref={statsRef}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-green-100 text-sm md:text-base uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

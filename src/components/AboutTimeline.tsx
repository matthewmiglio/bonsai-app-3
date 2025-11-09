"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutTimeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const milestones = [
    {
      year: "1993",
      title: "Club Founded",
      description: "West Michigan Bonsai Club established in Holland, Michigan, bringing together passionate bonsai enthusiasts."
    },
    {
      year: "1995",
      title: "Relocation to Grand Rapids",
      description: "Club moved to Grand Rapids to better serve the growing West Michigan bonsai community."
    },
    {
      year: "2000",
      title: "Partnership Begins",
      description: "Partnered with Frederik Meijer Gardens & Sculpture Park for monthly meetings and exhibitions."
    },
    {
      year: "2010",
      title: "Annual Show Launches",
      description: "Inaugurated our biannual bonsai exhibitions, showcasing member trees and attracting visitors region-wide."
    },
    {
      year: "2015",
      title: "150+ Members Strong",
      description: "Reached a milestone of over 150 active members, becoming West Michigan's premier bonsai community."
    },
    {
      year: "2024",
      title: "Looking Forward",
      description: "Continuing to grow the art of bonsai through education, fellowship, and community engagement."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = timelineRef.current?.querySelectorAll('[data-index]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-br from-stone-50 to-stone-100 py-16" ref={timelineRef}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-green-800 mb-4 text-center">Our Journey</h2>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Over 30 years of cultivating the art of bonsai in West Michigan
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-200 transform md:-translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <div
              key={index}
              data-index={index}
              className={`relative mb-12 transition-all duration-700 ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Year badge */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                  <span className="text-white font-bold text-sm">{milestone.year}</span>
                </div>

                {/* Content card */}
                <div className={`ml-28 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

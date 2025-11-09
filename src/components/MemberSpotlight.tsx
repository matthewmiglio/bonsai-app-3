'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function MemberSpotlight() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  const spotlights = [
    {
      name: "Steve Jetzer",
      title: "Best Novice 2024 - 1st Place",
      image: "/best_novice_2024_PC_1st_Steve_Jetzer.jpg",
      quote: "Bonsai has taught me patience and the beauty of gradual transformation.",
    },
    {
      name: "Tara Rietberg",
      title: "Best Novice 2024 - 2nd Place",
      image: "/best_novice_2024_pc_2nd_tara_rietberg.jpg",
      quote: "Every tree tells a story - I'm honored to help shape theirs.",
    },
    {
      name: "Tina Chirco",
      title: "Best Novice 2024 - 3rd Place",
      image: "/best_novice_2024_pc_3rd_place_tina_chirco.jpg",
      quote: "The club's mentorship turned my hobby into a genuine passion.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-green-900 mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Member Spotlight
          </h2>
          <p
            className={`text-gray-600 text-lg max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Celebrating our talented members and their exceptional work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {spotlights.map((member, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
              }}
            >
              {/* Image with reveal effect */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className={`transition-transform duration-1000 ${
                    isVisible ? 'scale-100' : 'scale-110'
                  }`}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-green-300 text-sm font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-white/90 text-sm italic leading-relaxed">
                    &quot;{member.quote}&quot;
                  </p>
                </div>

                {/* Award badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full p-3 shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 to-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

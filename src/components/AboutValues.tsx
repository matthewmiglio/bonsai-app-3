"use client";

import { Sprout, Users, GraduationCap, Heart } from "lucide-react";

export default function AboutValues() {
  const values = [
    {
      icon: <Sprout className="h-10 w-10" />,
      title: "Cultivation",
      description: "We nurture not just bonsai trees, but a deep appreciation for the ancient art form and its traditions.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Community",
      description: "Building lasting friendships through shared passion, collaboration, and mutual support among enthusiasts.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: "Education",
      description: "Providing accessible learning opportunities for all skill levels, from curious beginners to master artists.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Passion",
      description: "Fostering genuine love for the art of bonsai through regular gatherings, workshops, and exhibitions.",
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-green-800 mb-4 text-center">Our Values</h2>
        <p className="text-gray-600 text-center mb-12 text-lg max-w-2xl mx-auto">
          The principles that guide our club and inspire our commitment to the art of bonsai
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-stone-50 to-white p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

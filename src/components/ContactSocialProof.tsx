"use client";

import { Users, Calendar, Award, Heart } from "lucide-react";

export default function ContactSocialProof() {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: "150+",
      label: "Active Members",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      value: "48+",
      label: "Events Per Year",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "35",
      label: "Years of Excellence",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      value: "100%",
      label: "Passion for Bonsai",
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Our Community by the Numbers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}>
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

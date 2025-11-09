"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen, Users, Camera } from "lucide-react";

export default function ContactQuickLinks() {
  const links = [
    {
      icon: <Calendar className="h-5 w-5 md:h-6 md:w-6" />,
      title: "View Calendar",
      description: "Check out our upcoming events",
      href: "/calendar",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: <Camera className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Gallery",
      description: "Browse our bonsai collection",
      href: "/gallery",
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      icon: <BookOpen className="h-5 w-5 md:h-6 md:w-6" />,
      title: "About Us",
      description: "Learn about our club history",
      href: "/about",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: <Users className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Chat",
      description: "Connect with members",
      href: "/members",
      color: "bg-orange-500 hover:bg-orange-600"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
      <h2 className="text-xl md:text-3xl font-bold text-green-800 mb-4 md:mb-6">Quick Links</h2>
      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <Button
              variant="outline"
              className="w-full h-auto p-3 md:p-4 flex items-start gap-3 md:gap-4 hover:shadow-md transition-all"
            >
              <div className={`${link.color} text-white p-2 md:p-3 rounded-lg flex-shrink-0`}>
                {link.icon}
              </div>
              <div className="text-left flex-1 min-w-0">
                <div className="font-semibold text-gray-900 text-sm md:text-base">{link.title}</div>
                <div className="text-xs md:text-sm text-gray-600 break-words">{link.description}</div>
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}

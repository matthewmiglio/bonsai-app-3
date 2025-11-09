"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function ContactTestimonials() {
  const testimonials = [
    {
      quote: "Joining WMBC was the best decision for my bonsai journey. The workshops and member support have been invaluable.",
      author: "Sarah M.",
      role: "Member since 2019"
    },
    {
      quote: "As a complete beginner, I was nervous to join. The club welcomed me with open arms and taught me everything I needed to know.",
      author: "James K.",
      role: "Member since 2021"
    },
    {
      quote: "The monthly meetings and access to expert guidance have helped me transform my hobby into a true passion.",
      author: "Linda R.",
      role: "Member since 2018"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-stone-50 rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">What Members Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-green-600 mb-4" />
              <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

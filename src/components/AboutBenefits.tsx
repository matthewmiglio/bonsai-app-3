"use client";

import { Check } from "lucide-react";
import Image from "next/image";

export default function AboutBenefits() {
  const benefits = [
    "Monthly meetings with expert demonstrations",
    "Hands-on workshops and classes",
    "Access to member-only events and exhibitions",
    "Networking with fellow bonsai enthusiasts",
    "Monthly newsletter with tips and updates",
    "Discounts on workshops and materials",
    "Participation in annual bonsai shows",
    "Access to club library and resources"
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/facebook_images/fb_bonsai_26.jpg"
              alt="Bonsai club meeting"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-4xl font-bold text-green-800 mb-6">Membership Benefits</h2>
            <p className="text-gray-600 text-lg mb-8">
              Join a vibrant community and gain access to exclusive resources, expert guidance, and lifelong friendships centered around the art of bonsai.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-600 transition-colors duration-300">
                    <Check className="h-4 w-4 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-lg border-l-4 border-green-600">
              <p className="text-green-900 font-semibold mb-2">Annual Dues</p>
              <p className="text-gray-700">$30 Individual | $40 Family</p>
              <p className="text-sm text-gray-600 mt-2">First meeting is always free for visitors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

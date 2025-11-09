"use client";

import Image from "next/image";

export default function AboutMission() {
  return (
    <div className="relative bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
              <span className="text-green-700 text-sm font-semibold uppercase tracking-wider">Our Mission</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-green-900">
              Promoting the Art of Bonsai Through Awareness, Education & Fellowship
            </h2>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We believe bonsai is more than horticulture—it's a meditative practice, an artistic expression, and a way to connect with nature and each other.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Through monthly meetings, hands-on workshops, and community exhibitions, we provide a welcoming space where beginners learn foundational skills and experienced artists refine their craft. Together, we preserve this ancient tradition while fostering innovation and creativity.
            </p>

            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">Awareness</div>
                <p className="text-gray-600 text-sm">Sharing bonsai beauty with our community</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">Education</div>
                <p className="text-gray-600 text-sm">Teaching skills at every level</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">Fellowship</div>
                <p className="text-gray-600 text-sm">Building lasting friendships</p>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/facebook_images/fb_bonsai_15.jpg"
                alt="Beautiful bonsai"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="text-4xl font-bold text-green-600 mb-1">30+</div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Years Strong</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

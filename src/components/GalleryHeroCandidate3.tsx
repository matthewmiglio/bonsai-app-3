"use client";

import Image from "next/image";

export default function GalleryHeroCandidate3() {
  return (
    <div className="relative w-full">
      <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
        {/* Content Side */}
        <div className="bg-gradient-to-br from-stone-50 to-stone-100 p-12 md:p-16 flex flex-col justify-center">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full mb-4">
              West Michigan Bonsai Club
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6 leading-tight">
              Gallery of Living Art
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Each bonsai tells a story of patience, dedication, and artistic vision. Browse our collection showcasing the finest specimens from our talented community.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold text-green-700">25+</div>
                <div className="text-sm text-gray-600">Trees Featured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-700">Multiple</div>
                <div className="text-sm text-gray-600">Award Winners</div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative min-h-[400px] md:min-h-full hidden md:block">
          <Image
            src="/facebook_images/fb_bonsai_28.jpg"
            alt="Featured Bonsai"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}

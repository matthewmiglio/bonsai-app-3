"use client";

import Image from "next/image";

export default function GalleryHeroCandidate1() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div className="absolute top-4 left-4 z-20 px-4 py-1 bg-green-700 text-white text-sm font-semibold rounded-full">
        CANDIDATE 1: Image Overlay with Gradient
      </div>

      <Image
        src="/facebook_images/fb_bonsai_15.jpg"
        alt="Bonsai Gallery Hero"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Bonsai Gallery
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl drop-shadow-md">
          Explore our curated collection of masterful bonsai artistry from West Michigan&apos;s finest cultivators
        </p>
      </div>
    </div>
  );
}

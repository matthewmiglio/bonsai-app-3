"use client";

import Image from "next/image";

export default function ContactHeroCandidate1() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div className="absolute top-4 left-4 z-20 px-4 py-1 bg-green-700 text-white text-sm font-semibold rounded-full">
        CANDIDATE 1: Image Background with Overlay
      </div>

      <Image
        src="/facebook_images/fb_bonsai_15.jpg"
        alt="Contact Us"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-green-800/70" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
          Get in Touch
        </h1>
        <p className="text-xl md:text-2xl text-white/95 max-w-2xl drop-shadow-lg">
          We'd love to hear from you. Reach out to join our community or ask any questions.
        </p>
      </div>
    </div>
  );
}

"use client";

export default function ContactHeroCandidate2() {
  return (
    <div className="relative w-full bg-gradient-to-r from-green-700 to-green-600 py-20">
      <div className="absolute top-4 left-4 z-20 px-4 py-1 bg-white text-green-700 text-sm font-semibold rounded-full">
        CANDIDATE 2: Solid Gradient
      </div>

      <div className="container mx-auto px-8 text-center">
        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-4">
          West Michigan Bonsai Club
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Let&apos;s Connect
        </h1>
        <p className="text-xl text-green-50 max-w-2xl mx-auto">
          Have questions about bonsai or our club? We&apos;re here to help you grow.
        </p>
      </div>
    </div>
  );
}

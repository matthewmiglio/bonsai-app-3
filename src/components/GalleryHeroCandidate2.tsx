"use client";

export default function GalleryHeroCandidate2() {
  return (
    <div className="relative w-full bg-gradient-to-br from-green-900 via-green-700 to-green-600 py-20 md:py-32">
      <div className="absolute top-4 left-4 z-20 px-4 py-1 bg-white text-green-700 text-sm font-semibold rounded-full">
        CANDIDATE 2: Solid Gradient Background
      </div>

      <div className="container mx-auto px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Community Gallery
        </h1>
        <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto leading-relaxed">
          Discover the beauty and artistry of bonsai through our members&apos; exceptional creations
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <div className="text-white/90 text-center">
            <div className="text-4xl font-bold">25+</div>
            <div className="text-sm uppercase tracking-wider">Bonsai Featured</div>
          </div>
          <div className="w-px bg-white/30 mx-4" />
          <div className="text-white/90 text-center">
            <div className="text-4xl font-bold">150+</div>
            <div className="text-sm uppercase tracking-wider">Club Members</div>
          </div>
          <div className="w-px bg-white/30 mx-4" />
          <div className="text-white/90 text-center">
            <div className="text-4xl font-bold">35</div>
            <div className="text-sm uppercase tracking-wider">Years Strong</div>
          </div>
        </div>
      </div>
    </div>
  );
}

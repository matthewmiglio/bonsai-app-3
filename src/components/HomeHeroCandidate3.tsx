"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomeHeroCandidate3() {
  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <div className="absolute top-4 left-4 z-20 px-4 py-1 bg-green-700 text-white text-sm font-semibold rounded-full">
        CANDIDATE 3: Centered with Background Image
      </div>

      <Image
        src="/facebook_images/fb_bonsai_26.jpg"
        alt="Bonsai Display"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8">
        <div className="max-w-4xl">
          <div className="inline-block px-6 py-2 bg-green-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
            West Michigan&apos;s Premier Bonsai Community Since 1985
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
            Nurture Nature,<br />Master the Art
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-10 drop-shadow-lg leading-relaxed">
            Join a thriving community where ancient tradition meets modern passion. Whether you&apos;re a beginner or expert, discover the meditative art of bonsai with fellow enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-6">
                Become a Member Today
              </Button>
            </Link>
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-10 py-6">
                Explore Our Gallery
              </Button>
            </Link>
          </div>
          <div className="flex justify-center gap-12 text-white">
            <div>
              <div className="text-4xl font-bold">150+</div>
              <div className="text-sm text-white/80 uppercase tracking-wider">Active Members</div>
            </div>
            <div className="w-px bg-white/30" />
            <div>
              <div className="text-4xl font-bold">48+</div>
              <div className="text-sm text-white/80 uppercase tracking-wider">Events Per Year</div>
            </div>
            <div className="w-px bg-white/30" />
            <div>
              <div className="text-4xl font-bold">35</div>
              <div className="text-sm text-white/80 uppercase tracking-wider">Years Strong</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

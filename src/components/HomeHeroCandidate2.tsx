"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomeHeroCandidate2() {
  return (
    <div className="relative w-full">
      <div className="absolute top-4 left-4 z-20 px-4 py-1 bg-green-700 text-white text-sm font-semibold rounded-full">
        CANDIDATE 2: Split Layout Design
      </div>

      <div className="grid md:grid-cols-2 gap-0 min-h-[600px]">
        {/* Content Side */}
        <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 p-12 md:p-20 flex flex-col justify-center text-white">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
              Est. 1985 • West Michigan
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Art of Living Trees
            </h1>
            <p className="text-lg md:text-xl text-green-50 leading-relaxed mb-8">
              Discover the tranquil beauty of bonsai cultivation. Our club brings together enthusiasts of all skill levels to learn, share, and grow together.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-4xl font-bold">150+</div>
                <div className="text-sm text-green-200">Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold">35</div>
                <div className="text-sm text-green-200">Years</div>
              </div>
              <div>
                <div className="text-4xl font-bold">48+</div>
                <div className="text-sm text-green-200">Events/Year</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-green-900 hover:bg-green-50 text-lg px-8">
                  Join Us
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative min-h-[400px] md:min-h-full">
          <Image
            src="/facebook_images/fb_bonsai_15.jpg"
            alt="Beautiful Bonsai Tree"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-green-900/20" />
        </div>
      </div>
    </div>
  );
}

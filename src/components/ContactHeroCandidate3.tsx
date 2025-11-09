"use client";

import Image from "next/image";

export default function ContactHeroCandidate3() {
  return (
    <div className="relative w-full">
      <div className="grid md:grid-cols-2 gap-0 min-h-[400px]">
        {/* Content Side */}
        <div className="bg-gradient-to-br from-stone-50 to-stone-100 p-12 md:p-16 flex flex-col justify-center">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full mb-4">
              Contact Us
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-4 leading-tight">
              We're Here to Help
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're curious about membership, have questions about bonsai care, or want to learn more about our events, we'd love to connect with you.
            </p>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative min-h-[300px] md:min-h-full">
          <Image
            src="/facebook_images/fb_bonsai_21.jpg"
            alt="Beautiful Bonsai"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
    </div>
  );
}

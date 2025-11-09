import Link from "next/link";
import Image from "next/image";

export default function ContactCTA3() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-[400px]">
            <Image
              src="/facebook_images/fb_bonsai_15.jpg"
              alt="Bonsai background"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-2xl px-8 md:px-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Want to Learn More?
              </h2>
              <p className="text-xl text-gray-100 mb-8">
                From beginner tips to advanced techniques, our community is here to help. Reach out and start your conversation with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition-colors"
                >
                  Contact Us Now
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors border-2 border-white"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

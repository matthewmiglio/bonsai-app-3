import Link from "next/link";
import Image from "next/image";
import { MessageSquare } from "lucide-react";

export default function CalendarCTA3() {
  return (
    <section className="py-16 px-4 bg-stone-50">
      <div className="container mx-auto max-w-6xl">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-[450px]">
            <Image
              src="/facebook_images/fb_bonsai_10.jpg"
              alt="Bonsai event background"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-8 md:px-12 pb-12">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full mb-4">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm font-semibold">Let's Connect</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Questions About Our Events?
                </h2>
                <p className="text-xl text-gray-100 mb-8">
                  Whether you're curious about attending, want to showcase your bonsai, or need event details—we're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-lg"
                  >
                    Contact Us Today
                  </Link>
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center bg-white/95 text-green-700 px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors"
                  >
                    Join Our Club
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

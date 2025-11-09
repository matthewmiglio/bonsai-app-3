import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function ContactCTA2() {
  return (
    <section className="bg-stone-100 py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-green-600 p-10 flex flex-col justify-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Inspired by Our Gallery?
              </h2>
              <p className="text-lg text-green-50 mb-6">
                Let&apos;s discuss how you can start your own bonsai journey or showcase your trees in our next exhibition.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>Get expert advice</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  <span>Ask questions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>Connect with us</span>
                </div>
              </div>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Ready to Connect?
              </h3>
              <p className="text-gray-600 mb-6">
                Whether you&apos;re a beginner or an experienced enthusiast, we&apos;re here to support your bonsai passion.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA1() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-700 py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Have Questions About These Bonsai?
        </h2>
        <p className="text-xl text-green-50 mb-8">
          Our experienced members are here to help you on your bonsai journey. Get in touch with us today!
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          Contact Us
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

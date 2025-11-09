"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <div className="bg-gradient-to-br from-green-800 to-green-700 rounded-lg shadow-2xl p-12 text-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Begin Your Journey?</h2>
      <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
        Join our vibrant community of bonsai enthusiasts and discover the art of living trees.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <Link href="/contact">
          <Button size="lg" className="bg-white text-green-800 hover:bg-green-50 text-lg px-8 py-6">
            <MessageCircle className="mr-2 h-5 w-5" />
            Become a Member
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <Link href="/calendar">
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
            <Calendar className="mr-2 h-5 w-5" />
            View Events
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-green-600">
        <div>
          <div className="text-3xl font-bold mb-2">Free</div>
          <div className="text-green-100">First Meeting</div>
        </div>
        <div>
          <div className="text-3xl font-bold mb-2">All Levels</div>
          <div className="text-green-100">Welcome Here</div>
        </div>
        <div>
          <div className="text-3xl font-bold mb-2">Expert</div>
          <div className="text-green-100">Guidance Available</div>
        </div>
      </div>
    </div>
  );
}

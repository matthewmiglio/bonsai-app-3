"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function ContactNewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-lg shadow-xl p-8 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="h-12 w-12 mx-auto mb-4 text-green-100" />
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-green-50 mb-6 text-lg">
          Subscribe to our newsletter for updates on meetings, workshops, and bonsai tips.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white text-gray-900"
            required
          />
          <Button type="submit" className="bg-green-800 hover:bg-green-900 text-white px-8">
            Subscribe
          </Button>
        </form>
        <p className="text-sm text-green-100 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}

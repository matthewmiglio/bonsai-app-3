"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function ContactVisitorInfo() {
  const benefits = [
    "First meeting is free for all visitors",
    "No prior experience necessary",
    "All ages and skill levels welcome",
    "Bring your own bonsai for advice",
    "Meet experienced bonsai artists",
    "Learn about membership options"
  ];

  return (
    <Card className="bg-gradient-to-br from-green-700 to-green-600 text-white shadow-xl">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold mb-6">Visiting Our Club?</h2>
        <p className="text-green-50 mb-6 text-lg">
          We welcome visitors to experience what our community has to offer. Here&apos;s what you need to know:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-200 flex-shrink-0 mt-0.5" />
              <span className="text-green-50">{benefit}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-green-500">
          <p className="text-green-100 text-sm">
            Ready to join? Membership includes access to exclusive workshops, plant swaps, exhibitions, and a supportive community of bonsai enthusiasts.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

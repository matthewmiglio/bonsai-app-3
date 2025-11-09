"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactMembershipPricing() {
  const plans = [
    {
      name: "Individual",
      price: "$30",
      period: "per year",
      features: [
        "Access to all monthly meetings",
        "Workshops and demonstrations",
        "Library access",
        "Newsletter subscription",
        "Discounts on events"
      ]
    },
    {
      name: "Family",
      price: "$40",
      period: "per year",
      features: [
        "All Individual benefits",
        "Up to 2 adults + children",
        "Family workshop access",
        "Shared library privileges",
        "Extra event tickets"
      ],
      popular: true
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-green-800 mb-2 text-center">Membership Options</h2>
      <p className="text-gray-600 text-center mb-8">Join our community and start your bonsai journey</p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.popular ? 'border-2 border-green-500 shadow-xl' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            )}
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-green-700">{plan.price}</span>
                <span className="text-gray-600"> {plan.period}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'}`}>
                  Get Started
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

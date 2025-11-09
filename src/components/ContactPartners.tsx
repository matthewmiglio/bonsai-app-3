"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ContactPartners() {
  return (
    <Card className="bg-stone-50 border-none shadow-lg">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Our Partners</h2>
        <p className="text-gray-600 text-center mb-8">
          We're proud to partner with prestigious organizations in West Michigan
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-md mb-3">
              <Image
                src="/logos/logo_ai.png"
                alt="Frederik Meijer Gardens"
                width={120}
                height={120}
                className="mx-auto"
              />
            </div>
            <h3 className="font-semibold text-gray-900">Frederik Meijer Gardens</h3>
            <p className="text-sm text-gray-600">Meeting Host & Partner</p>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-md mb-3 h-[144px] flex items-center justify-center">
              <div className="text-green-700 font-bold text-xl">
                American Bonsai Society
              </div>
            </div>
            <h3 className="font-semibold text-gray-900">ABS Affiliate</h3>
            <p className="text-sm text-gray-600">National Organization</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            Interested in partnering with WMBC? Reach out to discuss collaboration opportunities.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

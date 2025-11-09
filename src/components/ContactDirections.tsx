"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Navigation, Car, Bus } from "lucide-react";

export default function ContactDirections() {
  return (
    <Card className="bg-white shadow-lg">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Getting to Meijer Gardens</h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Car className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">By Car</h3>
              <p className="text-gray-600 mb-2">
                Located off I-96 and East Beltline Avenue. Free parking available in the main lot.
              </p>
              <p className="text-sm text-gray-500">
                From I-96: Exit at East Beltline Ave (Exit 38), head north for 1 mile
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Bus className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">By Public Transit</h3>
              <p className="text-gray-600">
                The Rapid Route 6 stops near the gardens. Check theride.org for current schedules.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Navigation className="h-6 w-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Meeting Location</h3>
              <p className="text-gray-600">
                Meetings are held in the Wege Foundation Learning Center. Enter through the main entrance and follow signs to the meeting room.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t">
          <a
            href="https://www.google.com/maps/place/Frederik+Meijer+Gardens+%26+Sculpture+Park/@43.0394,-85.5808,15z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center gap-2"
          >
            <Navigation className="h-4 w-4" />
            Open in Google Maps
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

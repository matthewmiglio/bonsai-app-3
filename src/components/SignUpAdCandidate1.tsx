"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import BecomeMemberButton from "./BecomeMemberButton";
import ChatWithMembersButton from "./ChatWithMembersButton";

export default function SignUpAdCandidate1() {
  const { data: session } = useSession();
  const [isMember, setIsMember] = useState(false);

  const checkUserExists = async (email: string): Promise<boolean> => {
    try {
      const response = await fetch("/api/emailExistsInSignups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        console.error("API request failed:", response.status);
        return false;
      }

      const data = await response.json();
      return data.isRegistered === true;
    } catch (error) {
      console.error("Error checking user existence:", error);
      return false;
    }
  };

  useEffect(() => {
    const check = async () => {
      if (session?.user?.email) {
        const exists = await checkUserExists(session.user.email);
        setIsMember(exists);
      }
    };
    check();
  }, [session]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-10 shadow-xl overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-300/20 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-300/20 rounded-full -ml-24 -mb-24" />

        <div className="relative z-10 text-center">
          <div className="inline-block mb-4 px-4 py-1 bg-green-700 text-white text-sm font-semibold rounded-full">
            CANDIDATE 1: Minimal Modern
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Begin Your Bonsai Journey
          </h2>

          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join a passionate community where ancient wisdom meets modern practice.
            Learn, grow, and cultivate beauty one branch at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {!session || (session && !isMember) ? (
              <BecomeMemberButton />
            ) : (
              <ChatWithMembersButton />
            )}

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>150+ Members</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span>Weekly Workshops</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

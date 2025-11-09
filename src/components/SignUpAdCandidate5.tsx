"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import BecomeMemberButton from "./BecomeMemberButton";
import ChatWithMembersButton from "./ChatWithMembersButton";

export default function SignUpAdCandidate5() {
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
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="inline-block mb-4 px-4 py-1 bg-green-700 text-white text-sm font-semibold rounded-full">
        CANDIDATE 5: Compact Elegant
      </div>

      <div className="relative bg-gradient-to-r from-white via-green-50 to-white rounded-2xl shadow-lg border border-green-200 overflow-hidden">
        {/* Decorative leaf pattern */}
        <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full text-green-600">
            <path fill="currentColor" d="M50,10 Q30,30 30,50 T50,90 Q70,70 70,50 T50,10" />
          </svg>
        </div>

        <div className="relative p-8 md:p-10">
          <div className="max-w-3xl">
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="hidden md:block flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
                <svg className="w-10 h-10 text-white transform rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-3">
                  Cultivate More Than Trees
                </h2>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Build lasting friendships, deepen your knowledge, and become part of a 35-year tradition
                  of artistry and excellence in West Michigan.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  {!session || (session && !isMember) ? (
                    <BecomeMemberButton />
                  ) : (
                    <ChatWithMembersButton />
                  )}

                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span>All skill levels</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span>Free first meeting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="h-2 bg-gradient-to-r from-green-600 via-green-500 to-emerald-500" />
      </div>
    </div>
  );
}

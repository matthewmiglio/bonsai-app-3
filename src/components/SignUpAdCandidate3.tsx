"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import BecomeMemberButton from "./BecomeMemberButton";
import ChatWithMembersButton from "./ChatWithMembersButton";

export default function SignUpAdCandidate3() {
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
    <div className="relative py-20 overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/facebook_images/fb_bonsai_8.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/95 via-green-800/90 to-emerald-700/95" />

      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <div className="inline-block mb-4 px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30">
          CANDIDATE 3: Bold Hero Style
        </div>

        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Bonsai Story
            <br />
            <span className="text-green-300">Starts Here</span>
          </h2>

          <p className="text-xl md:text-2xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Join West Michigan&apos;s most passionate community of bonsai artists and cultivators
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            {!session || (session && !isMember) ? (
              <BecomeMemberButton />
            ) : (
              <ChatWithMembersButton />
            )}

            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Learn More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">150+</div>
              <div className="text-sm text-green-200">Active Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">35</div>
              <div className="text-sm text-green-200">Years Strong</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">48+</div>
              <div className="text-sm text-green-200">Events/Year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Leaf } from "lucide-react";
import BecomeMemberButton from "./BecomeMemberButton";
import ChatWithMembersButton from "./ChatWithMembersButton";

export default function SignUpAd() {
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
    <div className="mx-auto max-w-2xl px-4 py-8">
      <div className="pad-10 bg-white rounded-lg shadow-md overflow-hidden ">
        <div className="p-6 bg-gradient-to-r from-green-700 to-green-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <Leaf
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
          <div className="justify-items-center">
            <h2 className="text-2xl  font-semibold mb-2 relative z-10">
              Grow With Us!
            </h2>{" "}
            <p className="text-sm opacity-90 relative z-10">
              Join our community and let your bonsai passion flourish!
            </p>
          </div>
        </div>
        <div className="p-6 flex flex-col items-center">
          <p className="text-gray-600 text-center mb-4">
            Cultivate your skills, root yourself in tradition, and branch out
            with fellow enthusiasts.
          </p>

          {/* Logic for which button to show */}
          {!session || (session && !isMember) ? (
            <BecomeMemberButton />
          ) : (
            <ChatWithMembersButton />
          )}
        </div>
      </div>
    </div>
  );
}

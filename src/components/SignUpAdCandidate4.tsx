"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import BecomeMemberButton from "./BecomeMemberButton";
import ChatWithMembersButton from "./ChatWithMembersButton";

export default function SignUpAdCandidate4() {
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
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="inline-block mb-4 px-4 py-1 bg-green-700 text-white text-sm font-semibold rounded-full">
        CANDIDATE 4: Card with Icon Grid
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-green-100">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 text-center text-white">
          <div className="inline-block p-3 bg-white/20 rounded-2xl mb-4">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Join Our Growing Community
          </h2>
          <p className="text-green-100 text-lg">
            Where tradition meets passion, and every member matters
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="p-8">
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Expert Workshops</h3>
                <p className="text-sm text-gray-600">Hands-on learning from masters</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Vibrant Community</h3>
                <p className="text-sm text-gray-600">Connect with 150+ members</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Regular Events</h3>
                <p className="text-sm text-gray-600">48+ gatherings each year</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Resources & Tools</h3>
                <p className="text-sm text-gray-600">Exclusive member content</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            {!session || (session && !isMember) ? (
              <BecomeMemberButton />
            ) : (
              <ChatWithMembersButton />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

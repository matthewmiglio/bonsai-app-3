"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LoginButton from "./LoginButton";
import BecomeMemberButton from "./BecomeMemberButton";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  const [hideBecomeMember, setHideBecomeMember] = useState(false); // flipped logic

  const shopLink = process.env.NEXT_PUBLIC_STORE_LINK || "";

  const checkUserExists = async (email: string): Promise<boolean> => {
    console.log("checkUserExists(), email:", email);
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
        console.log("User is logged in, exists in SIGNUPs:", exists);
        setHideBecomeMember(exists); // hide if exists
      } else {
        setHideBecomeMember(false); // show if not logged in
      }
    };
    check();
  }, [session]);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Image
            src="/logo6_black.png"
            alt="Bonsai App Logo"
            width={120}
            height={120}
            className="transition-all duration-300 ease-in-out transform hover:scale-105"
          />

          <Link href="/" className="text-4xl font-semibold text-green-800">
            West Michigan Bonsai Club
          </Link>

          <div className="text-xl space-x-4 flex items-center">
            <Link href="/" className="text-gray-600 hover:text-green-800">
              Home
            </Link>
            <Link
              href="/gallery"
              className="text-gray-600 hover:text-green-800"
            >
              Gallery
            </Link>
            <Link
              href={shopLink}
              className="text-gray-600 hover:text-green-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop
            </Link>
            <Link
              href="/calendar"
              className="text-gray-600 hover:text-green-800"
            >
              Calendar
            </Link>
            <Link
              href="/members"
              className="text-gray-600 hover:text-green-800"
            >
              Members
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-green-800">
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-green-800"
            >
              Contact
            </Link>

            {/* ✅ Show if user is not in table OR not logged in */}
            {!hideBecomeMember && <BecomeMemberButton />}

            <LoginButton />
          </div>
        </div>
      </nav>
    </header>
  );
}

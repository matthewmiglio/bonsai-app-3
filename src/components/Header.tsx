"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LoginButton from "./LoginButton";
import BecomeMemberButton from "./BecomeMemberButton";
import { useSession } from "next-auth/react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { data: session } = useSession();
  const [hideBecomeMember, setHideBecomeMember] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const shopLink = process.env.NEXT_PUBLIC_STORE_LINK || "";

  const checkUserExists = async (email: string): Promise<boolean> => {
    try {
      const response = await fetch("/api/emailExistsInSignups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) return false;
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
        setHideBecomeMember(exists);
      } else {
        setHideBecomeMember(false);
      }
    };
    check();
  }, [session]);

  const navLinks = (
    <>
      <Link href="/" className="text-gray-600 hover:text-green-800">
        Home
      </Link>
      <Link href="/gallery" className="text-gray-600 hover:text-green-800">
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
      <Link href="/calendar" className="text-gray-600 hover:text-green-800">
        Calendar
      </Link>
      <Link href="/members" className="text-gray-600 hover:text-green-800">
        Members
      </Link>
      <Link href="/about" className="text-gray-600 hover:text-green-800">
        About
      </Link>
      <Link href="/contact" className="text-gray-600 hover:text-green-800">
        Contact
      </Link>
    </>
  );

  return (
    <header className="bg-white shadow-sm">
      <nav className="px-4 sm:px-6 py-3 max-w-screen-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/logo6_black.png"
              alt="Bonsai App Logo"
              width={60}
              height={60}
              className="transition-all duration-300 ease-in-out transform hover:scale-105"
            />
            <Link
              href="/"
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-800"
            >
              West Michigan Bonsai Club
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex text-xl space-x-4 items-center">
            {navLinks}
            {!hideBecomeMember && <BecomeMemberButton />}
            <LoginButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 flex flex-col space-y-2 text-lg">
            {navLinks}
            {!hideBecomeMember && <BecomeMemberButton />}
            <LoginButton />
          </div>
        )}
      </nav>
    </header>
  );
}

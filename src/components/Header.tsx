import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Image
            src="/LogoBlack5.png"
            alt="Bonsai App Logo"
            width={75}
            height={75}
            className="transition-all duration-300 ease-in-out transform hover:scale-105"
          />

          <Link href="/" className="text-4xl font-semibold text-green-800">
            West Michigan Bonsai Club
          </Link>
          <div className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-green-800">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-green-800">
              About
            </Link>
            <Link
              href="/gallery"
              className="text-gray-600 hover:text-green-800"
            >
              Gallery
            </Link>
            <Link href="/signup" className="text-gray-600 hover:text-green-800">
              Sign Up
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-green-800">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

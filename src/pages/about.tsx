import Image from "next/image";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutMission from "../components/AboutMission";
import AboutValues from "../components/AboutValues";
import AboutBenefits from "../components/AboutBenefits";
import "../styles/globals.css";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import BecomeMemberButton from "../components/BecomeMemberButton";
import ChatWithMembersButton from "../components/ChatWithMembersButton";

export const metadata: Metadata = {
  title: "About West Michigan Bonsai Club",
  description:
    "Learn about the West Michigan Bonsai Club, our history, mission, and activities.",
};

export default function AboutPage() {
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
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/ai/new-club-image.png"
          alt="West Michigan Bonsai Club"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            About Our Club
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4">
            Cultivating the art of bonsai in West Michigan since 1993
          </p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <AboutMission />

      {/* Values Section */}
      <AboutValues />

      {/* Membership Benefits Section */}
      <AboutBenefits />

      {/* Programs Section */}
      <main className="bg-stone-50 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">
            Our Programs & Events
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                Community Meetings
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Monthly gatherings from March to December at Frederik Meijer Gardens.
                Open to members and public, featuring educational classes from beginner
                basics to advanced techniques, plus workshops, field trips, and social events.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                Workshops & Classes
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Hands-on learning with visiting bonsai artists and club experts.
                Unique programs like The Bonsai Journey transform raw nursery stock
                into refined bonsai, guided by experienced mentors.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                Annual Exhibitions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Biannual public exhibits at Meijer Gardens featuring stunning displays,
                live demonstrations, and workshops. Spring All-State Show and Fall Club
                Show with marketplace for trees, tools, and supplies.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Join CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Whether you&apos;re a seasoned bonsai artist or just starting your
            journey, we welcome you to join our vibrant community.
          </p>
          {/* Logic for which button to show */}
          {!session || (session && !isMember) ? (
            <BecomeMemberButton />
          ) : (
            <ChatWithMembersButton />
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

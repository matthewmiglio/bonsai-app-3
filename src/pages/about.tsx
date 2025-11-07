import Image from "next/image";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            About West Michigan Bonsai Club
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Cultivating the art of bonsai in West Michigan since 1985
          </p>
          <div className="relative h-[40vh] mb-8">
            <Image
              src="/ai/ai_club_meeting_clipart_5.png"
              alt="West Michigan Bonsai Club members"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Welcome to the West Michigan Bonsai Club
            </h2>
            <p className="text-gray-700 mb-4">
              Welcome to the West Michigan Bonsai Club! We are a vibrant
              community of bonsai enthusiasts. Dedicated to cultivating a deeper
              appreciation for bonsai by bringing together individuals
              passionate about this ancient art form. We invite you to join us
              on our journey, whether you&apos;re a curious newcomer or a
              seasoned practitioner.
            </p>
            <p className="text-gray-700 text-bold mb-4">
              Our Mission is to promote the art bonsai through awareness,
              education and fellowship.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Our History
            </h2>
            <p className="text-gray-700 mb-4">
              Founded in 1993 in Holland, Michigan, and then relocated to Grand
              Rapids in 1995, the West Michigan Bonsai Club has been dedicated
              to promoting bonsai art across the region. Through our activities,
              we strive to foster appreciation, knowledge, and a sense of
              community among bonsai enthusiasts.
            </p>
            <p className="text-gray-700">
              Since our founding, we have continued to expand our reach and
              provide opportunities for individuals of all experience levels to
              engage with bonsai art. Whether through workshops, exhibits, or
              community events, we are passionate about nurturing the growth of
              bonsai in West Michigan.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Our Programs and Events
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Community
              </h3>
              <p className="text-gray-700">
                The West Michigan Bonsai Club holds monthly meetings from March
                to December at the Frederik Meijer Gardens & Sculpture Park.
                Open to both members and the public, these gatherings offer
                opportunities to sharpen your bonsai skills, exchange ideas, and
                care for your trees. Each meeting features educational classes
                covering everything from beginner bonsai basics and
                horticultural techniques to advanced design and display. The
                club also hosts special events throughout the year, including
                workshops, field trips, an annual bonsai show, and a holiday
                party.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Membership
              </h3>
              <p className="text-gray-700">
                By becoming a member, you support our mission and gain access to
                a wealth of resources. Annual dues are $30 for individuals and
                $40 for families, and include benefits such as access to
                meetings and workshops, invitations to garden tours, and a
                monthly newsletter. Members also enjoy unique programs like The
                Bonsai Journey, where raw nursery stock is transformed into
                refined bonsai, as well as hands-on workshops with visiting
                bonsai artists.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Exhibits
              </h3>
              <p className="text-gray-700">
                Twice a year, we proudly host public exhibits at Frederik Meijer
                Gardens & Sculpture Park, celebrating the beauty of bonsai. In
                the spring, we support the Meijer Gardens All-State Bonsai Show.
                In the fall, the West Michigan Bonsai Club Show features
                stunning displays, live demonstrations, and workshops for all
                skill levels. Attendees can also browse a marketplace offering
                high-quality trees, tools, and more. Join us at the West
                Michigan Bonsai Club — and let&#39;s grow something
                extraordinary together.
              </p>
            </div>
          </div>
        </section>

        <section className=" justify-items-center text-center mb-16">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-700 mb-6">
            Whether you&apos;re a seasoned bonsai artist or just starting your
            journey, we welcome you to join our vibrant community.
          </p>
          {/* Logic for which button to show */}
          {!session || (session && !isMember) ? (
            <BecomeMemberButton />
          ) : (
            <ChatWithMembersButton />
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

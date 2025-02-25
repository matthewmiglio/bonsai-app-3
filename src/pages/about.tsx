import Image from "next/image";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "About West Michigan Bonsai Club",
  description:
    "Learn about the West Michigan Bonsai Club, our history, mission, and activities.",
};

export default function AboutPage() {
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
              src="/ai_club_meeting_clipart_5.png?height=600&width=1200"
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
              community of bonsai enthusiasts, dedicated to cultivating a deeper
              appreciation for bonsai by bringing together individuals
              passionate about this ancient art form. We invite you to join us
              on our journey, whether you're a curious newcomer or a seasoned
              practitioner.
            </p>
            <p className="text-gray-700 text-bold mb-4">
              Our Mission is to promote the art of bonsai through awareness,
              education, and fellowship.
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
                Monthly Meetings & Events
              </h3>
              <p className="text-gray-700">
                The West Michigan Bonsai Club holds monthly meetings at Frederik
                Meijer Gardens from March to December. Open to all, these
                gatherings focus on enhancing bonsai skills, sharing ideas, and
                caring for your trees. We offer classes for all levels and host
                workshops, field trips, and our annual bonsai show and holiday
                party.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Become a Member
              </h3>
              <p className="text-gray-700">
                Become a member to support our mission and enjoy exclusive
                benefits, including access to meetings, workshops, garden tours,
                and a monthly newsletter. Annual dues are $30 for individuals
                and $40 for families. Members also participate in unique
                programs like the Bonsai Journey and hands-on workshops with
                bonsai professionals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Public Exhibits & Shows
              </h3>
              <p className="text-gray-700">
                Twice a year, we host bonsai exhibits at Frederik Meijer
                Gardens. In the spring, we support The Meijer Gardens All-State
                Bonsai Show, and in the fall, the West Michigan Bonsai Club Show
                offers displays, demonstrations, workshops, and a marketplace
                with trees, tools, and more.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-700 mb-6">
            Whether you&apos;re a seasoned bonsai artist or just starting your
            journey, we welcome you to join our vibrant community.
          </p>
          <Button
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
            onClick={() => (window.location.href = "/signup")}
          >
            Become a Member
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

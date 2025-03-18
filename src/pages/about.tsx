import Image from "next/image";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import LoginButton from "@/components/LoginButton";

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
              src="/ai_club_meeting_clipart_5.png"
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
              Welcome to the West Michigan Bonsai Club! We are a vibrant community of bonsai
              enthusiasts. Dedicated to cultivating a deeper appreciation for bonsai by bringing
              together individuals passionate about this ancient art form. We invite you to join
              us on our journey, whether you&apos;re a curious newcomer or a seasoned practitioner.
            </p>
            <p className="text-gray-700 text-bold mb-4">
              Our Mission is to promote the art bonsai through awareness, education and
              fellowship.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Our History
            </h2>
            <p className="text-gray-700 mb-4">
              Founded in 1993 in Holland, Michigan, and then relocated to Grand Rapids in 1995,
              the West Michigan Bonsai Club has been dedicated to promoting bonsai art across
              the region. Through our activities, we strive to foster appreciation, knowledge, and
              a sense of community among bonsai enthusiasts.
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
                The West Michigan Bonsai Club holds monthly meetings from March to December
                at the Frederick Meijer Gardens and Sculpture Park. Open to both members and
                the public, these gatherings are an opportunity to enhance your bonsai skills,
                exchange ideas, and nurture your trees. Our meetings feature educational classes
                covering beginner bonsai basics, horticulture and techniques to advanced design
                and display. We also host various special events, including workshops, field trips,
                and our annual bonsai show and holiday party.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Membership
              </h3>
              <p className="text-gray-700">
                By becoming a member, you support our mission and gain access to a wealth of
                resources. Our annual dues are $30 for individuals and $40 for families, providing
                benefits such as entry to meetings and workshops, invitations to garden tours, and
                a monthly newsletter. We also offer unique programs like the Bonsai Journey,
                where members transform raw stock into refined bonsai, and hands-on workshops
                with visiting bonsai professionals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Exhibits
              </h3>
              <p className="text-gray-700">
                Twice a year, we proudly host public exhibits at Frederik Meijer Gardens and
                Sculpture Park, showcasing the beauty of bonsai. In the spring we support The
                Meijer Gardens All-State Bonsai Show. In the fall the West Michigan Bonsai Club
                Show offers stunning displays, demonstrations, and workshops for all skill levels.
                Attendees can also explore a marketplace featuring high-quality trees, tools, and
                more.

                Join us at the West Michigan Bonsai Club, and let&#39;s grow something extraordinary
                together.
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
          <div className="justify-items-center">
            <LoginButton loginText="Create an Account" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

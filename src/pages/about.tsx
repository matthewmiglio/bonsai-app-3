import Image from "next/image"
import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "About West Michigan Bonsai Club",
  description: "Learn about the West Michigan Bonsai Club, our history, mission, and activities.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-green-800 mb-4">About West Michigan Bonsai Club</h1>
          <p className="text-lg text-gray-700 mb-8">Cultivating the art of bonsai in West Michigan since 1985</p>
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
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Our History</h2>
            <p className="text-gray-700 mb-4">
              Founded in 1985 by a group of passionate bonsai enthusiasts, the West Michigan Bonsai Club has grown into
              a thriving community of artists, hobbyists, and nature lovers. For over three decades, we've been
              dedicated to promoting the art of bonsai in the West Michigan area.
            </p>
            <p className="text-gray-700">
              From our humble beginnings with just a handful of members, we've expanded to become one of the most active
              bonsai clubs in the Midwest, hosting workshops, exhibitions, and educational events throughout the year.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">At West Michigan Bonsai Club, our mission is to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Promote the art and culture of bonsai in West Michigan</li>
              <li>Provide education and resources for bonsai enthusiasts of all levels</li>
              <li>Foster a supportive community for sharing knowledge and experiences</li>
              <li>Organize exhibitions to showcase the beauty of bonsai to the public</li>
              <li>Contribute to the preservation and development of bonsai techniques</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Club Activities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Monthly Meetings</h3>
              <p className="text-gray-700">
                We gather every second Saturday of the month for demonstrations, workshops, and to share our latest
                bonsai creations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Annual Exhibition</h3>
              <p className="text-gray-700">
                Our yearly show in September showcases the best bonsai from our members and invited artists from across
                the Midwest.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Workshops</h3>
              <p className="text-gray-700">
                Throughout the year, we host hands-on workshops led by experienced bonsai artists, covering various
                techniques and styles.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Join Our Community</h2>
          <p className="text-gray-700 mb-6">
            Whether you're a seasoned bonsai artist or just starting your journey, we welcome you to join our vibrant
            community.
          </p>
            <Button
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
            onClick={() => window.location.href = '/signup'}
            >
            Become a Member
            </Button>
        </section>
      </main>
      <Footer />
    </div>
  )
}


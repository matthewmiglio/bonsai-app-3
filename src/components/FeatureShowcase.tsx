import Link from "next/link";

export default function FeatureShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-semibold text-center mb-8 text-green-800">
          Why Join Our Club
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-stone-100 p-6 rounded-lg">
            <div className="py-1">
              <Link
                href="/members"
                className="underline text-xl font-semibold mb-4 text-green-700"
              >
                Expert Guidance
              </Link>
            </div>
            <p className="text-gray-700">
              Learn from experienced bonsai masters with decades of cultivation expertise
            </p>
          </div>
          <div className="bg-stone-100 p-6 rounded-lg">
            <div className="py-1">
              <Link
                href="/calendar"
                className="underline text-xl font-semibold mb-4 text-green-700"
              >
                Hands-On Workshops
              </Link>
            </div>
            <p className="text-gray-700">
              Practice essential techniques like pruning, wiring, and repotting in our monthly sessions
            </p>
          </div>
          <div className="bg-stone-100 p-6 rounded-lg">
            <div className="py-1">
              <Link
                href="/about"
                className="underline text-xl font-semibold mb-4 text-green-700"
              >
                Community Support
              </Link>
            </div>
            <p className="text-gray-700">
              Connect with fellow enthusiasts who share your passion for the art of bonsai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

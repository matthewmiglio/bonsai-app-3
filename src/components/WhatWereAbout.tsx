export default function WhatWereAbout() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-8 text-green-800">What We&apos;re About</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Community</h3>
              <p className="text-gray-700">
                The West Michigan Bonsai Club is a tight-knit group of enthusiasts who love sharing their passion for bonsai. Whether you&apos;re a beginner or an expert, you&apos;re welcome here!
              </p>
            </div>
            <div className="bg-stone-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Workshops & Events</h3>
              <p className="text-gray-700">
                We host regular workshops, meetups, and exhibitions to help members hone their skills and showcase their bonsai creations.
              </p>
            </div>
            <div className="bg-stone-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Passion for Bonsai</h3>
              <p className="text-gray-700">
                Our mission is to cultivate knowledge, appreciation, and the art of bonsai in West Michigan. Join us and grow with us!
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

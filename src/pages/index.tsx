import Header from "../components/Header";
import Hero from "../components/Hero";
import WhatWereAbout from "../components/WhatWereAbout";
import FacebookFeed from "../components/Facebook";
import Footer from "../components/Footer";
import CalendarWidget from "../components/GoogleCalendar";
import Gallery from "../components/GalleryComponent";
import SignUpAd from "../components/SignUpAd";
import "../styles/globals.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main>
        <Hero />

        <WhatWereAbout />
        <section className="container mx-auto px-4 py-12 justify-items-center">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <Gallery />
            <FacebookFeed />
            <CalendarWidget />
            </div>
        </section>
        <div className="p-10 justify-items-center">
          <SignUpAd />
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Header from "../components/Header";
import Hero from "../components/Hero";
import WhatWereAbout from "../components/WhatWereAbout";
import FacebookFeed from "../components/Facebook";
import Footer from "../components/Footer";
import Gallery from "../components/GalleryComponent";
import SignUpAd from "../components/SignUpAd";
import "../styles/globals.css";

/*
Todo
-fix facebook
-bluehost migration
-Fill out contact info with real info
-captions for gallery images
*/

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main>
        <Hero />

        <WhatWereAbout />

        <div className="p-10 justify-items-center">
          <SignUpAd />
        </div>

        <div className="justify-items-center p-10"></div>
        <section className="container mx-auto px-4 py-12 justify-items-center">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Gallery />
            <FacebookFeed />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

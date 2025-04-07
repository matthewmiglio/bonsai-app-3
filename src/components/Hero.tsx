import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/ai_bonsai_5.jpeg",
  "/ai_bonsai_6.jpeg",
  "/ai_bonsai_7.jpeg",
  "/ai_bonsai_8.jpeg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Beautiful bonsai tree"
          fill
          style={{ objectFit: "cover" }}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="relative z-10 text-center text-white">
        <h1
          className="text-8xl mb-4 font-light"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Cultivating Tranquility
        </h1>

        <p className="text-lg font-light">
          Discover the art and beauty of bonsai
        </p>
      </div>
    </section>
  );
}

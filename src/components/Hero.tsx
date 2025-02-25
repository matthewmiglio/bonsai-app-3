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
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Beautiful bonsai tree"
          layout="fill"
          objectFit="cover"
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Cultivating Tranquility</h1>
        <p className="text-xl">
          Discover the art and beauty of miniature trees
        </p>
      </div>
    </section>
  );
}

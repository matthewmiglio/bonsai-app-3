import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Gallery() {
  const galleryItems = [
    { src: "/ai_bonsai_1.jpeg?height=300&width=300", alt: "Bonsai 1" },
    { src: "/ai_bonsai_2.jpeg?height=300&width=300", alt: "Bonsai 2" },
    { src: "/ai_bonsai_3.jpeg?height=300&width=300", alt: "Bonsai 3" },
    { src: "/ai_bonsai_4.jpeg?height=300&width=300", alt: "Bonsai 4" },
    { src: "/ai_bonsai_4.jpeg?height=300&width=300", alt: "Bonsai 4" },
    { src: "/ai_bonsai_4.jpeg?height=300&width=300", alt: "Bonsai 4" },
    { src: "/ai_bonsai_4.jpeg?height=300&width=300", alt: "Bonsai 4" },
    { src: "/ai_bonsai_4.jpeg?height=300&width=300", alt: "Bonsai 4" },
    { src: "/ai_bonsai_4.jpeg?height=300&width=300", alt: "Bonsai 4" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[720px]">
      <div className="p-6 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <h2 className="text-2xl font-semibold mb-2">Our Bonsai Showcase</h2>
        <p className="text-sm opacity-90">
          A glimpse into our miniature forest of artistry
        </p>
      </div>
      <div className="p-4 flex-grow overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-md overflow-hidden"
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-gray-50 border-t border-gray-200 mt-auto">
        <Link href="/gallery">
          <Button
            variant="default"
            className="w-full bg-green-700 hover:bg-green-800 text-white"
          >
            View Full Gallery
          </Button>
        </Link>
      </div>
    </div>
  );
}

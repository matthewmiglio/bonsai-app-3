import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Gallery() {
  const galleryItems = Array.from({ length: 28 }, (_, index) => ({
    src: `/fb_bonsai_${index + 1}.jpg?height=300&width=300`,
    alt: `Bonsai ${index + 1}`,
  }));
  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  shuffleArray(galleryItems);

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
                fill
                style={{ objectFit: "cover" }}
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

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Gallery() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [isArrayShuffled, setIsArrayShuffled] = useState(false);
  const galleryItems = [
    { src: "/facebook_images/fb_bonsai_5.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_6.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_7.jpg", alt: "" },
    { src: "/best_novice_2024_pc_2nd_tara_rietberg.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_11.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_1.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_4.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_12.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_21.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_22.jpg", alt: "" },
    { src: "/best_novice_2024_pc_3rd_place_tina_chirco.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_10.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_8.jpg", alt: "" },
    { src: "/best_novice_2024_PC_1st_Steve_Jetzer.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_24.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_28.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_13.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_20.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_14.jpg", alt: "" },
    { src: "/meijer/87fb729d470d7e194db59e2543d86580-1998567230.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_17.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_18.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_19.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_3.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_26.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_15.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_2.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_9.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_16.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_23.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_25.jpg", alt: "" },
    { src: "/facebook_images/fb_bonsai_27.jpg", alt: "" },

    {
      src: "/meijer/mi-frederik-meijer-gardens-and-sculpture-park-japanese-garden-460172177.jpg",
      alt: "",
    },
    { src: "/meijer/Meijer-Gardens-1260x680-147744548.jpg", alt: "" },
    { src: "/matt_stolen_bonsai_pic.jpg", alt: "" },
    { src: "/meijer/fmg-celebrating-25-years-enews-3288341110.jpg", alt: "" },
  ];

  function shuffleArray(array: any[]) {
    if (isArrayShuffled) {
      return array;
    }

    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    setIsArrayShuffled(true);
    return newArray;
  }

  shuffleArray(galleryItems);

  // ESC key to close fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setFullscreenImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
              className="relative aspect-square rounded-md overflow-hidden cursor-pointer"
              onClick={() => setFullscreenImage(item.src)}
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

      {/* Fullscreen Overlay */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setFullscreenImage(null)}
        >
          <Image
            src={fullscreenImage}
            alt="Fullscreen preview"
            width={1200}
            height={1200}
            className="object-contain max-h-full max-w-full"
          />
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Bonsai Gallery - West Michigan Bonsai Club",
  description:
    "Explore our collection of beautiful bonsai trees from the West Michigan Bonsai Club.",
};

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/best_novice_2024_PC_1st_Steve_Jetzer.jpg?height=800&width=600",
    alt: "First Place Bonsai - Japanese Maple by Steve Jetzer",
    caption:
      "First Place - Steve Jetzer: A beautifully refined Japanese Maple bonsai with stunning ramification.",
  },
  {
    src: "/best_novice_2024_pc_2nd_tara_rietberg.jpg?height=600&width=800",
    alt: "Second Place Bonsai - Pine Bonsai by Tara Rietberg",
    caption:
      "Second Place - Tara Rietberg: A powerful Pine bonsai with rugged bark and expertly styled branches.",
  },
  {
    src: "/best_novice_2024_pc_3rd_place_tina_chirco.jpg?height=700&width=500",
    alt: "Third Place Bonsai - Juniper Bonsai by Tina Chirco",
    caption:
      "Third Place - Tina Chirco: A graceful Juniper bonsai styled in a dynamic windswept design.",
  },

  {
    src: "/fb_bonsai_21.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "One of the many beautiful bonsai trees on display at the West Michigan Bonsai Club.",
  },
  {
    src: "/fb_bonsai_19.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A beautifully cultivated pine bonsai showcasing refined branch structure and dense foliage, a testament to expert styling.",
  },

  {
    src: "/fb_bonsai_27.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A dramatic juniper bonsai with striking deadwood and lush foliage, capturing the essence of aged elegance.",
  },
  {
    src: "/fb_bonsai_1.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A vibrant bald cypress bonsai displaying strong taper and intricate branch ramification, evoking a swampy forest scene.",
  },
  {
    src: "/fb_bonsai_4.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A stunning tropical bonsai with a well-balanced canopy, thriving in its handcrafted display pot.",
  },
  {
    src: "/fb_bonsai_15.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A stunning bonsai with a blend of lush green foliage and a bare branch, symbolizing resilience and growth, displayed against a traditional Japanese-style backdrop.",
  },
  {
    src: "/fb_bonsai_17.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "This striking bonsai composition integrates natural driftwood and live foliage, creating a stunning contrast between aged wood and fresh growth, symbolizing resilience and harmony in nature.",
  },
  {
    src: "/87fb729d470d7e194db59e2543d86580-1998567230.jpg",
    alt: "",
    caption:
      "A breathtaking view of Frederik Meijer Gardens, a place where nature and art converge, providing inspiration for bonsai enthusiasts and horticulturalists alike.",
  },
  {
    src: "/matt_stolen_bonsai_pic.jpg",
    alt: "",
    caption:
      "A powerful pine bonsai with a majestic silhouette, styled to reflect the rugged landscapes of nature.",
  },
  {
    src: "/fb_bonsai_12.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A kusamono accent plant, complementing bonsai with its delicate leaves and vibrant greenery.",
  },

  {
    src: "/fb_bonsai_3.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A flowering bonsai in full bloom, highlighting the seasonal beauty that adds charm to any collection.",
  },
  {
    src: "/fb_bonsai_6.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A compact yet well-structured black pine bonsai, demonstrating refined needle management and artistic form.",
  },
  {
    src: "/fb_bonsai_7.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A stunning Japanese maple bonsai, its fiery autumn foliage creating a breathtaking seasonal display.",
  },
  {
    src: "/fb_bonsai_8.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A windswept-style bonsai with graceful movement, embodying the resilience of trees against harsh elements.",
  },

  {
    src: "/fb_bonsai_9.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A gracefully curved juniper bonsai, expertly trained with a delicate balance of foliage and exposed trunk, embodying the essence of natural beauty.",
  },
  {
    src: "/fb_bonsai_10.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A well-balanced black pine bonsai, meticulously shaped with strong, radiating branches, showcased in an elegant setting with a shoji screen background.",
  },
  {
    src: "/fb_bonsai_11.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A meticulously styled bonsai with dense foliage and an elegant trunk structure, showcasing the artistry and patience required to achieve a well-balanced canopy.",
  },
  {
    src: "/fb_bonsai_14.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A captivating bonsai displayed in a deep blue ceramic pot, skillfully styled with exposed roots gripping a rugged stone, evoking a sense of age and natural beauty.",
  },
  {
    src: "/fb_bonsai_16.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "This bonsai showcases exceptional branch structure and dense, vibrant foliage, creating a well-balanced and mature appearance that highlights expert pruning and styling.",
  },
  {
    src: "/fb_bonsai_20.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A full and dense bonsai with expertly pruned foliage, capturing the essence of a miniature, ancient forest standing in perfect harmony.",
  },
  {
    src: "/fb_bonsai_23.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A rugged and dramatic bonsai with wild, twisting branches and intricate deadwood, embodying the raw power of nature's artistry.",
  },
  {
    src: "/fb_bonsai_24.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A striking bonsai with a vivid contrast between its bright green foliage and bleached deadwood, emphasizing the beauty of time and weathering.",
  },
  {
    src: "/fb_bonsai_26.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "An impressive tiered bonsai, evoking the image of an ancient pine tree in nature, beautifully illuminated against a deep, dramatic backdrop.",
  },
  {
    src: "/fb_bonsai_28.jpg",
    alt: "Facebook Bonsai #21",
    caption:
      "A breathtakingly aged bonsai with intricate deadwood carving, a dense canopy, and a commanding presence, highlighting the mastery of bonsai cultivation.",
  },
  {
    src: "/fb_bonsai_13.jpg",
    alt: "Facebook Bonsai #21",
    caption: "Tara Rietberg's amazing Juniper procumbens bonsai.",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* <h1 className="text-4xl font-bold text-green-800 italic mb-8 text-center">Community Gallery</h1> */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {galleryItems.map((item) => (
            <div key={item.src} className="break-inside-avoid mb-4">
              <div
                className="relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.src || "/ai_bonsai_1.jpeg"}
                  alt={item.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                  {item.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-3xl w-full bg-white rounded-lg overflow-hidden">
          <div className="relative">
            {selectedImage && (
              <>
                <Image
                  src={selectedImage.src || "/ai_bonsai_1.jpeg"}
                  alt={selectedImage.alt}
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1"
                >
                  <X size={24} />
                </button>
              </>
            )}
          </div>
          {selectedImage && (
            <div className="p-4">
              <p className="text-lg font-semibold">{selectedImage.alt}</p>
              <p className="text-gray-600">{selectedImage.caption}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

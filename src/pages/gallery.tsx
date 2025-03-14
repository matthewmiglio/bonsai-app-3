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
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/best_novice_2024_PC_1st_Steve_Jetzer.jpg?height=800&width=600",
    alt: "First Place Bonsai - Japanese Maple by Steve Jetzer",
    caption:
      "First Place - Steve Jetzer: A beautifully refined Japanese Maple bonsai with stunning ramification.",
  },

  {
    id: 2,
    src: "/fb_bonsai_21.jpg",
    alt: "",
    caption:
      "One of the many beautiful bonsai trees on display at the West Michigan Bonsai Club.",
  },

  {
    id: 13,
    src: "/fb_bonsai_13.jpg",
    alt: "",
    caption: "Tara Rietberg's amazing Juniper procumbens bonsai.",
  },

  {
    id: 4,
    src: "/fmg-celebrating-25-years-enews-3288341110.jpg?height=900&width=600",
    alt: "",
    caption:
      "Entrance to the Frederik Meijer Gardens & Sculpture Park in Grand Rapids, Michigan.",
  },


  {
    id: 16,
    src: "/fb_bonsai_19.jpg",
    alt: "",
    caption: "",
  },


  //put here
  {
    id: 18,
    src: "/fb_bonsai_25.jpg",
    alt: "",
    caption: "",
  },
  {
    id: 17,
    src: "/best_novice_2024_pc_2nd_tara_rietberg.jpg?height=600&width=800",
    alt: "Second Place Bonsai - Pine Bonsai by Tara Rietberg",
    caption:
      "Second Place - Tara Rietberg: A powerful Pine bonsai with rugged bark and expertly styled branches.",
  },
  {
    id: 19,
    src: "/fb_bonsai_27.jpg",
    alt: "",
    caption: "",
  },
  {
    id: 10,
    src: "/fb_bonsai_1.jpg",
    alt: "",
    caption: "",
  },

  {
    id: 11,
    src: "/fb_bonsai_4.jpg",
    alt: "",
    caption: "",
  },

  {
    id: 3,
    src: "/best_novice_2024_pc_3rd_place_tina_chirco.jpg?height=700&width=500",
    alt: "Third Place Bonsai - Juniper Bonsai by Tina Chirco",
    caption:
      "Third Place - Tina Chirco: A graceful Juniper bonsai styled in a dynamic windswept design.",
  },

  {
    id: 14,
    src: "/fb_bonsai_15.jpg",
    alt: "",
    caption: "",
  },
  {
    id: 15,
    src: "/fb_bonsai_17.jpg",
    alt: "",
    caption: "",
  },
  {
    id: 7,
    src: "/87fb729d470d7e194db59e2543d86580-1998567230.jpg",
    alt: "",
    caption: "",
  },
  {
    id: 8,
    src: "/matt_stolen_bonsai_pic.jpg",
    alt: "",
    caption: "",
  },

  {
    id: 12,
    src: "/fb_bonsai_12.jpg",
    alt: "",
    caption: "",
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
            <div key={item.id} className="break-inside-avoid mb-4">
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

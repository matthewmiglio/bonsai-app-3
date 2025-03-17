import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Gallery() {
  const galleryItems = [
    { src: "/87fb729d470d7e194db59e2543d86580-1998567230.jpg", alt: "" },
    { src: "/best_novice_2024_PC_1st_Steve_Jetzer.jpg", alt: "" },
    { src: "/best_novice_2024_pc_2nd_tara_rietberg.jpg", alt: "" },
    { src: "/best_novice_2024_pc_3rd_place_tina_chirco.jpg", alt: "" },
    { src: "/fb_bonsai_1.jpg", alt: "" },
    { src: "/fb_bonsai_2.jpg", alt: "" },
    { src: "/fb_bonsai_3.jpg", alt: "" },
    { src: "/fb_bonsai_4.jpg", alt: "" },
    { src: "/fb_bonsai_5.jpg", alt: "" },
    { src: "/fb_bonsai_6.jpg", alt: "" },
    { src: "/fb_bonsai_7.jpg", alt: "" },
    { src: "/fb_bonsai_8.jpg", alt: "" },
    { src: "/fb_bonsai_9.jpg", alt: "" },
    { src: "/fb_bonsai_10.jpg", alt: "" },
    { src: "/fb_bonsai_11.jpg", alt: "" },
    { src: "/fb_bonsai_12.jpg", alt: "" },
    { src: "/fb_bonsai_13.jpg", alt: "" },
    { src: "/fb_bonsai_14.jpg", alt: "" },
    { src: "/fb_bonsai_15.jpg", alt: "" },
    { src: "/fb_bonsai_16.jpg", alt: "" },
    { src: "/fb_bonsai_17.jpg", alt: "" },
    { src: "/fb_bonsai_18.jpg", alt: "" },
    { src: "/fb_bonsai_19.jpg", alt: "" },
    { src: "/fb_bonsai_20.jpg", alt: "" },
    { src: "/fb_bonsai_21.jpg", alt: "" },
    { src: "/fb_bonsai_22.jpg", alt: "" },
    { src: "/fb_bonsai_23.jpg", alt: "" },
    { src: "/fb_bonsai_24.jpg", alt: "" },
    { src: "/fb_bonsai_25.jpg", alt: "" },
    { src: "/fb_bonsai_26.jpg", alt: "" },
    { src: "/fb_bonsai_27.jpg", alt: "" },
    { src: "/fb_bonsai_28.jpg", alt: "" },

    {
      src: "/mi-frederik-meijer-gardens-and-sculpture-park-japanese-garden-460172177.jpg",
      alt: "",
    },
    { src: "/Meijer-Gardens-1260x680-147744548.jpg", alt: "" },
    { src: "/matt_stolen_bonsai_pic.jpg", alt: "" },
    { src: "/fmg-celebrating-25-years-enews-3288341110.jpg", alt: "" },
  ];

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

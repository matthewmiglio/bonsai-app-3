'use client';
import Image from "next/image";

export default function BonsaiCareGuide() {
  const careSteps = [
    {
      title: "Watering",
      description: "Water when the soil feels slightly dry. Bonsai need consistent moisture but not waterlogged soil.",
      icon: "💧",
      image: "/facebook_images/fb_bonsai_5.jpg",
    },
    {
      title: "Sunlight",
      description: "Most bonsai need 5-6 hours of sunlight daily. Indoor varieties prefer bright, indirect light.",
      icon: "☀️",
      image: "/facebook_images/fb_bonsai_12.jpg",
    },
    {
      title: "Pruning",
      description: "Regular pruning maintains shape and encourages new growth. Trim during the growing season.",
      icon: "✂️",
      image: "/facebook_images/fb_bonsai_18.jpg",
    },
    {
      title: "Fertilizing",
      description: "Feed your bonsai during growing season with balanced fertilizer to ensure healthy development.",
      icon: "🌱",
      image: "/facebook_images/fb_bonsai_3.jpg",
    },
  ];

  return (
    <section className="pt-8 pb-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Essential Bonsai Care
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Master the fundamentals of bonsai cultivation with these key practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careSteps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-stone-50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image with overlay */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Icon badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/about"
            className="inline-flex items-center gap-2 bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Learn More About Bonsai Care
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

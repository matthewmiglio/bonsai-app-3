'use client';
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-700 relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="float-shape absolute top-10 left-20 w-32 h-32 bg-white rounded-full" />
        <div className="float-shape absolute top-40 right-32 w-24 h-24 bg-white rounded-full" />
        <div className="float-shape absolute bottom-20 left-40 w-40 h-40 bg-white rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Stay Connected
        </h2>
        <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
          Get monthly tips, workshop announcements, and exclusive member content delivered to your inbox
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
            />
            <button
              type="submit"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="glow-button px-8 py-4 bg-white text-green-800 font-bold rounded-full hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Subscribe</span>

              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 ${
                  isHovered ? 'translate-x-full' : '-translate-x-full'
                }`}
              />
            </button>
          </div>
        </form>

        <p className="text-green-200 text-sm mt-6">
          We respect your privacy. Unsubscribe anytime.
        </p>

        {/* Social links */}
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="#"
            className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
            </svg>
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(5deg);
          }
          66% {
            transform: translateY(-10px) rotate(-5deg);
          }
        }

        .float-shape {
          animation: float 8s ease-in-out infinite;
        }

        .float-shape:nth-child(1) {
          animation-delay: 0s;
          animation-duration: 10s;
        }

        .float-shape:nth-child(2) {
          animation-delay: 2s;
          animation-duration: 12s;
        }

        .float-shape:nth-child(3) {
          animation-delay: 4s;
          animation-duration: 14s;
        }

        .glow-button::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4));
          border-radius: 9999px;
          opacity: 0;
          filter: blur(8px);
          z-index: -1;
          transition: opacity 0.3s ease;
        }

        .glow-button:hover::before {
          opacity: 0.6;
        }
      `}</style>
    </section>
  );
}

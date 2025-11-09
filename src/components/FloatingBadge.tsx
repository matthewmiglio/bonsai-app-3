'use client';
import { useEffect, useState } from "react";

interface FloatingBadgeProps {
  className?: string;
}

export default function FloatingBadge({ className = "" }: FloatingBadgeProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`floating-badge ${isVisible ? 'visible' : ''} ${className}`}
    >
      <div className="flex items-center gap-4">
        {/* Award Icon */}
        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl font-bold text-green-800">35+</span>
            <span className="text-sm text-gray-600">Years</span>
          </div>
          <p className="text-sm text-gray-700 font-medium">
            Cultivating Excellence
          </p>
        </div>

        {/* Rating stars */}
        <div className="flex flex-col items-end">
          <div className="flex gap-0.5 mb-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-xs text-gray-500">150+ Members</p>
        </div>
      </div>

      <style jsx>{`
        .floating-badge {
          position: absolute;
          bottom: -50px;
          left: 50%;
          transform: translateX(-50%) translateY(20px);
          z-index: 20;
          background: white;
          border-radius: 16px;
          padding: 1.25rem 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.2, 0.65, 0.2, 1);
          min-width: 380px;
        }

        .floating-badge.visible {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        @media (max-width: 640px) {
          .floating-badge {
            bottom: -40px;
            padding: 1rem 1.5rem;
            min-width: 320px;
            left: 1rem;
            right: 1rem;
            transform: translateX(0) translateY(20px);
          }

          .floating-badge.visible {
            transform: translateX(0) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

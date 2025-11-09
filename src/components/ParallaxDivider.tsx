'use client';

interface ParallaxDividerProps {
  topColor?: string;
  bottomColor?: string;
  flip?: boolean;
}

export default function ParallaxDivider({
  topColor = "#ffffff",
  bottomColor = "#f5f5f4",
  flip = false,
}: ParallaxDividerProps) {
  return (
    <div className="relative">
      <svg
        className={`section-divider ${flip ? 'flip' : ''}`}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={bottomColor} stopOpacity="0.3" />
            <stop offset="50%" stopColor={bottomColor} stopOpacity="0.5" />
            <stop offset="100%" stopColor={bottomColor} stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Main wave */}
        <path
          d="M0,64 C360,8 1080,8 1440,64 L1440,120 L0,120 Z"
          fill={bottomColor}
        />

        {/* Decorative wave overlay */}
        <path
          d="M0,64 C360,8 1080,8 1440,64 L1440,120 L0,120 Z"
          fill="url(#wave-gradient)"
          opacity="0.3"
        />
      </svg>

      <style jsx>{`
        .section-divider {
          position: relative;
          display: block;
          width: 100%;
          height: 80px;
          z-index: 10;
        }

        .section-divider.flip {
          transform: scaleY(-1);
        }

        @media (min-width: 768px) {
          .section-divider {
            height: 100px;
          }
        }

        @media (min-width: 1024px) {
          .section-divider {
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
}

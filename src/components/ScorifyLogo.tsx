import React from 'react';

interface ScorifyLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textClassName?: string;
  animate?: boolean;
}

export const ScorifyLogo: React.FC<ScorifyLogoProps> = ({
  size = 'md',
  showText = true,
  textClassName = '',
  animate = false,
}) => {
  const dimensionMap = {
    sm: { box: 'w-8 h-8', text: 'text-base', track: 'tracking-[0.25em]' },
    md: { box: 'w-10 h-10', text: 'text-xl sm:text-2xl', track: 'tracking-[0.3em]' },
    lg: { box: 'w-14 h-14', text: 'text-3xl', track: 'tracking-[0.35em]' },
    xl: { box: 'w-24 h-24', text: 'text-5xl', track: 'tracking-[0.4em]' },
  };

  const currentSize = dimensionMap[size];

  return (
    <div className="inline-flex items-center gap-3 select-none group cursor-pointer">
      {/* Target Logo Graphic */}
      <div
        className={`relative ${currentSize.box} flex-shrink-0 ${
          animate ? 'group-hover:scale-105 transition-transform duration-300' : ''
        }`}
      >
        {/* Glow backdrop behind target */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00A3E0] via-[#8B5CF6] to-[#EF4444] opacity-50 blur-md group-hover:opacity-80 transition-opacity duration-300" />

        <svg
          viewBox="0 0 120 120"
          className="relative w-full h-full drop-shadow-2xl"
        >
          <defs>
            {/* Center Gold Radial Gradient with intense core highlight */}
            <radialGradient id="goldCenter" cx="38%" cy="38%" r="62%">
              <stop offset="0%" stopColor="#FFFFDD" />
              <stop offset="25%" stopColor="#FACC15" />
              <stop offset="70%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#CA8A04" />
            </radialGradient>

            {/* Red Ring Gradient */}
            <radialGradient id="redRing" cx="38%" cy="38%" r="62%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="60%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#991B1B" />
            </radialGradient>

            {/* Cyan/Blue Ring Gradient matching image */}
            <radialGradient id="blueRing" cx="38%" cy="38%" r="62%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0369A1" />
            </radialGradient>

            {/* Dark Bezel Outer Ring */}
            <linearGradient id="darkBezel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#373950" />
              <stop offset="100%" stopColor="#12131A" />
            </linearGradient>
          </defs>

          {/* Outer Bezel */}
          <circle cx="60" cy="60" r="58" fill="url(#darkBezel)" stroke="#474A68" strokeWidth="2" />
          <circle cx="60" cy="60" r="53" fill="#111218" />

          {/* Cyan Outer Ring */}
          <circle cx="60" cy="60" r="47" fill="url(#blueRing)" stroke="#090A0F" strokeWidth="2.5" />

          {/* Dark Gap Ring */}
          <circle cx="60" cy="60" r="35" fill="#090A0F" />

          {/* Red Middle Ring */}
          <circle cx="60" cy="60" r="33.5" fill="url(#redRing)" stroke="#090A0F" strokeWidth="2" />

          {/* Dark Gap Ring */}
          <circle cx="60" cy="60" r="21.5" fill="#090A0F" />

          {/* Yellow Gold Center Bullseye */}
          <circle cx="60" cy="60" r="20" fill="url(#goldCenter)" />
          {/* Inner X-ring highlight */}
          <circle cx="60" cy="60" r="7" fill="none" stroke="#FEF08A" strokeWidth="1" opacity="0.6" />
          <circle cx="56" cy="56" r="3" fill="#FFFFFF" opacity="0.8" />

          {/* Piercing Arrow from Lower-Left (7 o'clock) to Gold Bullseye */}
          <g>
            {/* Drop Shadow of Arrow */}
            <path
              d="M 32 88 L 68 52"
              stroke="#000000"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.35"
              transform="translate(1, 2)"
            />
            {/* Arrow Shaft */}
            <path
              d="M 32 88 L 68 52"
              stroke="#FFFFFF"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Arrowhead */}
            <path
              d="M 72 48 L 59 52 L 68 61 Z"
              fill="#FFFFFF"
            />
            {/* Tail Fletchings */}
            <path
              d="M 32 88 L 24 94 M 32 88 L 26 80 M 37 83 L 29 89 M 37 83 L 31 75"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <span
          className={`font-heading font-black text-white uppercase ${currentSize.text} ${currentSize.track} ${textClassName}`}
        >
          SCORIFY
        </span>
      )}
    </div>
  );
};


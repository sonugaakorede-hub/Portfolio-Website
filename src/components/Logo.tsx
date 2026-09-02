import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  iconOnly = false,
}) => {
  // Height classes for responsive scaling while maintaining the exact aspect ratio
  const heightClass = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-11',
    lg: 'h-11 sm:h-14',
  }[size];

  if (iconOnly) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <svg
          viewBox="210 10 510 200"
          className={heightClass}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Zoe Digitals Logo Mark"
        >
          {/* Frame around Digitals */}
          <path
            d="M 234 80 L 234 38 L 706 12 L 688 196 L 234 172 L 234 140"
            fill="none"
            stroke="#000000"
            strokeWidth="11"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
          />
          <text
            x="242"
            y="142"
            fill="#007A00"
            style={{
              fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif",
              fontWeight: 800,
              fontSize: '106px',
              letterSpacing: '-0.025em',
            }}
          >
            Digitals
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center group transition-transform duration-200 ${className}`}>
      <svg
        viewBox="0 0 725 210"
        className={`${heightClass} w-auto max-w-full select-none`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Zoe Digitals"
      >
        {/* Perspective Frame Around "Digitals" */}
        <path
          d="M 234 80 L 234 38 L 706 12 L 688 196 L 234 172 L 234 140"
          fill="none"
          stroke="#000000"
          strokeWidth="11"
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
        />

        {/* Word: "Zoe" (Black) */}
        <text
          x="18"
          y="142"
          fill="#000000"
          style={{
            fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif",
            fontWeight: 800,
            fontSize: '106px',
            letterSpacing: '-0.025em',
          }}
        >
          Zoe
        </text>

        {/* Word: "Digitals" (Green) */}
        <text
          x="238"
          y="142"
          fill="#007A00"
          style={{
            fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif",
            fontWeight: 800,
            fontSize: '106px',
            letterSpacing: '-0.025em',
          }}
        >
          Digitals
        </text>
      </svg>
    </div>
  );
};

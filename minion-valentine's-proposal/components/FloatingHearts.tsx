
import React from 'react';

interface FloatingHeartsProps {
  count?: number;
}

export const FloatingHearts: React.FC<FloatingHeartsProps> = ({ count = 15 }) => {
  const hearts = Array.from({ length: count });

  return (
    <>
      {hearts.map((_, i) => {
        const left = Math.random() * 100;
        const duration = 5 + Math.random() * 10;
        const delay = Math.random() * 5;
        const size = 10 + Math.random() * 30;

        return (
          <div
            key={i}
            className="heart text-red-400/30"
            style={{
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              fontSize: `${size}px`,
            }}
          >
            <svg
              className="fill-current"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        );
      })}
    </>
  );
};


import React, { useState, useMemo } from 'react';

const NO_PHRASES = [
  "No",
  "Are you sure?",
  "Think again! 🥺",
  "Last chance...",
  "Really? 💔",
  "You're breaking my heart!",
  "Surely you mean yes?",
  "Look at my cute eyes!",
  "Wait, reconsider please!",
  "I'll give you bananas! 🍌",
  "Don't do this to me...",
  "Clicking 'No' is impossible now!",
  "Just say Yes already! ✨"
];

export const ValentineCard: React.FC = () => {
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const yesScale = 1 + noCount * 0.45;
  const noScale = Math.max(0, 1 - noCount * 0.1);
  const noOpacity = Math.max(0, 1 - noCount * 0.15);

  const handleNoClick = () => {
    setNoCount(prev => prev + 1);
  };

  const handleYesClick = () => {
    setAccepted(true);
  };

  const noText = useMemo(() => {
    return NO_PHRASES[Math.min(noCount, NO_PHRASES.length - 1)];
  }, [noCount]);

  // Updated URLs for Minion GIFs
  const initialGif = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm9yOGJrajYxeTZiYXJiNXZlNGwwMGVuNG1oZzBvanExbWdlZ285biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kZiDpAW9d9fr2suuS7/giphy.gif";
  const successGif = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjM3eWdoaDA5bnhpODN1NTFoMjQ0N2I1cmY2NzAxeHlrenExYmdvaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IpeXBG7uNM6XJKUVcg/giphy.gif";

  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border-4 border-pink-400 text-center transform transition-all duration-500">
      {!accepted ? (
        <div className="space-y-6">
          <div className="flex justify-center mb-6">
            <img 
              src={initialGif} 
              alt="Minion with flowers" 
              className="rounded-2xl h-64 object-cover shadow-lg border-2 border-pink-200"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-pacifico text-red-600 drop-shadow-sm">
            Suzan, wil jij mijn valentijn zijn?
          </h1>

          <div className="flex flex-col items-center justify-center gap-6 pt-4">
            <button
              onClick={handleYesClick}
              style={{ transform: `scale(${yesScale})` }}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 hover:shadow-green-200 focus:outline-none focus:ring-4 focus:ring-green-300 active:scale-95 z-20"
            >
              YES! 💖
            </button>

            {noScale > 0.05 && (
              <button
                onClick={handleNoClick}
                style={{ 
                  transform: `scale(${noScale})`,
                  opacity: noOpacity,
                  display: noOpacity === 0 ? 'none' : 'block'
                }}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 focus:outline-none active:scale-95"
              >
                {noText}
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-6 animate-bounce-slow">
          <div className="flex justify-center mb-6">
            <img 
              src={successGif} 
              alt="Minions celebrating" 
              className="rounded-2xl h-64 object-cover shadow-lg border-2 border-pink-200"
            />
          </div>
          <h1 className="text-5xl font-pacifico text-pink-600 animate-pulse">
            Yes!!! I love you! ❤️
          </h1>
          <p className="text-xl text-gray-700 font-bold">
            Ik heb er zin in! 💖✨
          </p>
          <div className="flex justify-center gap-4 text-4xl">
            <span>🥰</span>
            <span>💖</span>
            <span>🥳</span>
          </div>
        </div>
      )}
    </div>
  );
};

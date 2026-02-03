
import React, { useState, useEffect, useCallback } from 'react';
import { ValentineCard } from './components/ValentineCard';
import { FloatingHearts } from './components/FloatingHearts';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-200 via-red-100 to-pink-300 flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts count={20} />
      <div className="relative z-10 w-full max-w-lg">
        <ValentineCard />
      </div>
    </div>
  );
};

export default App;

'use client';

import React, { useEffect, useState } from 'react';

const PageReveal = ({ children }: { children: React.ReactNode }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Small delay to ensure initial paint before animation starts
    const timer = setTimeout(() => setIsRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`transition-all duration-[800ms] cubic-bezier(0.23, 1, 0.32, 1) transform ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

export default PageReveal;

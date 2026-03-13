'use client';

import React, { useEffect, useState, useRef } from 'react';

interface ScrollDepthSectionProps {
  children: React.ReactNode;
  depth: number; // Base depth index (0 closest, higher is deeper)
}

const ScrollDepthSection: React.FC<ScrollDepthSectionProps> = ({ children, depth }) => {
  const [zOffset, setZOffset] = useState(depth * -500);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      
      // Calculate dynamic Z based on scroll progress and base depth
      // As we scroll towards it, it comes "closer"
      const dynamicZ = (depth * -800) + (scrollProgress * 600);
      setZOffset(dynamicZ);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [depth]);

  return (
    <div 
      ref={sectionRef}
      className="transition-transform duration-700 ease-out will-change-transform"
      style={{
        transform: `translateZ(${zOffset}px)`,
        opacity: Math.max(0.1, 1 + (zOffset / 2000)) // Fade out as it gets deeper
      }}
    >
      {children}
    </div>
  );
};

export const ScrollDepthController: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="perspective-2000 preserve-3d">
      {children}
    </div>
  );
};

export default ScrollDepthSection;

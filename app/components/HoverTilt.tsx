'use client';

import React, { useRef, useState } from 'react';

interface HoverTiltProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

const HoverTilt: React.FC<HoverTiltProps> = ({ children, className = '', strength = 10 }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const dx = x - centerX;
    const dy = y - centerY;
    
    // Calculate rotation based on cursor distance from center
    const rotY = (dx / centerX) * strength;
    const rotX = -(dy / centerY) * strength;
    
    setRotateY(rotY);
    setRotateX(rotX);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`preserve-3d transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.02 : 1})`,
        zIndex: isHovered ? 20 : 1
      }}
    >
      <div className={`transition-all duration-300 ${isHovered ? 'shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : ''}`}>
        {children}
      </div>
      
      {/* Dynamic Glow Layer */}
      <div 
        className={`absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-accent-blue/10 to-accent-violet/10 blur-xl`} 
        style={{ zIndex: -1 }}
      />
    </div>
  );
};

export default HoverTilt;

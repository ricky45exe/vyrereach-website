'use client';

import React, { useRef, useState, useEffect } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className = '', 
  onClick, 
  variant = 'primary',
  type = 'button'
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic pull strength
    const strength = 0.35;
    setPosition({ x: distanceX * strength, y: distanceY * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    
    setRipples(prev => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 600);
    
    if (onClick) onClick();
  };

  const baseStyles = "relative px-8 py-3 rounded-full font-bold transition-all duration-300 ease-out overflow-hidden flex items-center justify-center gravity-react";
  const variants = {
    primary: "bg-gradient-to-r from-accent-blue to-accent-violet text-white shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_35px_rgba(0,210,255,0.6)]",
    secondary: "glass-card border border-white/10 text-white hover:border-accent-blue/50"
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={createRipple}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${isHovered ? 1.05 : 1})`,
      }}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Glow Border Effect */}
      {isHovered && (
        <div className="absolute inset-x-0 inset-y-0 rounded-full border border-white/40 blur-[2px] pointer-events-none" />
      )}

      {/* Ripple Effects */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '10px',
            height: '10px',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      <style jsx>{`
        @keyframes ripple {
          to {
            transform: translate(-50%, -50%) scale(40);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 0.6s linear forwards;
        }
      `}</style>
    </button>
  );
};

export default MagneticButton;

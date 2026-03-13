'use client';

import React from 'react';

const AnimatedLogo = () => {
  return (
    <div className="relative group cursor-pointer flex items-center gap-2">
      <div className="relative w-10 h-10 preserve-3d group-hover:rotate-y-180 transition-transform duration-1000">
        {/* Animated 3D element of the logo */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue to-accent-violet rounded-lg shadow-lg logo-pulse" 
             style={{ transform: 'translateZ(10px)' }} />
        <div className="absolute inset-0 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30" 
             style={{ transform: 'translateZ(-10px)' }} />
        
        {/* Orbiting particles */}
        <div className="absolute -inset-2 border border-accent-blue/30 rounded-full animate-spin duration-[10s] ease-linear" />
        <div className="absolute -inset-4 border border-accent-violet/10 rounded-full animate-spin duration-[15s] ease-linear reverse" />
      </div>
      
      <span className="text-2xl font-black tracking-tighter">
        Vyre<span className="text-gradient">Reach</span>
      </span>
    </div>
  );
};

export default AnimatedLogo;

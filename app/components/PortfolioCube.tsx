'use client';

import React, { useState } from 'react';

interface PortfolioCubeProps {
  title: string;
  category: string;
  color: string;
}

const PortfolioCube: React.FC<PortfolioCubeProps> = ({ title, category, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="cube-wrapper gravity-react mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`cube ${isHovered ? '' : 'animate-slow-rotate'}`}
        style={{
          transform: isHovered ? 'rotateY(0deg) scale(1.1) translateZ(20px)' : undefined,
        }}
      >
        <div className={`cube-face cube-front flex-col p-4 bg-gradient-to-br ${color} to-black/80`}>
          <span className="text-[10px] uppercase tracking-widest text-accent-blue mb-2">{category}</span>
          <h4 className="text-xl font-black text-center">{title}</h4>
        </div>
        <div className="cube-face cube-back p-4 text-xs italic text-white/40">VyreReach Project</div>
        <div className="cube-face cube-right p-4 text-xs font-bold text-accent-violet">CREATIVE</div>
        <div className="cube-face cube-left p-4 text-xs font-bold text-accent-blue">DIGITAL</div>
        <div className="cube-face cube-top p-4 bg-white/5 opacity-20"></div>
        <div className="cube-face cube-bottom p-4 bg-black/40 shadow-inner"></div>
      </div>

      <style jsx>{`
        @keyframes slow-rotate {
          from { transform: rotateY(0deg) rotateX(10deg); }
          to { transform: rotateY(360deg) rotateX(10deg); }
        }
        .animate-slow-rotate {
          animation: slow-rotate 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PortfolioCube;

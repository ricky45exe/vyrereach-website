'use client';

import React from 'react';

const HolographicPanels = ({ mousePos }: { mousePos: { x: number, y: number } }) => {
  const panels = [
    { title: "Growth", value: "+140%", delay: "0s", pos: "top-20 left-10 md:left-24" },
    { title: "Active Nodes", value: "24", delay: "2s", pos: "bottom-32 left-4 md:left-48" },
    { title: "Signal", value: "98.2", delay: "4s", pos: "top-40 right-10 md:right-32" },
    { title: "Sync", value: "ACTIVE", delay: "1s", pos: "bottom-48 right-12 md:right-56" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {panels.map((panel, i) => (
        <div 
          key={i}
          className={`absolute ${panel.pos} glass-card p-4 rounded-xl border-accent-blue/20 shadow-[0_0_20px_rgba(0,210,255,0.1)] transition-transform duration-500`}
          style={{
            animation: `antigravity-float ${6 + i}s ease-in-out infinite alternate`,
            animationDelay: panel.delay,
            transform: `translate(${mousePos.x * (10 + i * 5)}px, ${mousePos.y * (10 + i * 5)}px) scale(0.8)`,
            opacity: 0.4
          }}
        >
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-white/40">{panel.title}</span>
            <div className="flex items-end gap-2 text-accent-blue font-black text-lg">
              {panel.value}
              <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse mb-1.5" />
            </div>
            
            {/* Small decorative chart-like lines */}
            <div className="flex gap-1 mt-2 h-4 items-end">
              {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8].map((h, j) => (
                <div key={j} className="w-1 bg-accent-blue/30 rounded-t-sm" style={{ height: `${h * 100}%` }} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HolographicPanels;

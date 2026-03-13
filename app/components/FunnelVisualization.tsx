'use client';

import React, { useEffect, useState, useRef } from 'react';

const FunnelVisualization = () => {
  const [isVisible, setIsVisible] = useState(false);
  const funnelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (funnelRef.current) observer.observe(funnelRef.current);
    return () => observer.disconnect();
  }, []);

  const stages = [
    { label: 'Visitors', value: 50000, color: 'from-accent-blue/30', width: 'w-full' },
    { label: 'Leads', value: 7500, color: 'from-accent-blue/50', width: 'w-3/4' },
    { label: 'Customers', value: 1200, color: 'from-accent-violet/60', width: 'w-1/2' },
  ];

  return (
    <div ref={funnelRef} className="w-full flex flex-col items-center gap-6 py-8">
      {stages.map((stage, i) => (
        <div 
          key={i} 
          className="flex flex-col items-center w-full"
        >
          <div 
            className={`glass-card ${stage.width} h-16 md:h-20 rounded-2xl bg-gradient-to-r ${stage.color} to-transparent border-white/10 flex items-center justify-between px-8 transition-all duration-1000 relative overflow-hidden`}
            style={{ 
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0.5)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${i * 300}ms`
            }}
          >
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40">{stage.label}</span>
              <span className="text-xl md:text-2xl font-black text-white">
                {isVisible ? stage.value.toLocaleString() : '0'}
              </span>
            </div>
            
            <div className="text-right">
                <div className="text-[10px] uppercase font-bold tracking-widest text-accent-blue">Conversion</div>
                <div className="text-lg font-black">{i === 0 ? '100%' : i === 1 ? '15%' : '16%'}</div>
            </div>
            
            {/* Animated Glow Line */}
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-accent-blue animate-pulse" />
          </div>
          
          {i < stages.length - 1 && (
            <div 
              className="w-0.5 bg-gradient-to-b from-accent-blue to-transparent h-8 transition-all duration-500"
              style={{
                opacity: isVisible ? 0.3 : 0,
                transitionDelay: `${i * 300 + 500}ms`
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FunnelVisualization;

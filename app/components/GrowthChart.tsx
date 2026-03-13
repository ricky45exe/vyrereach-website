'use client';

import React, { useEffect, useState, useRef } from 'react';

const GrowthChart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);
  
  const points = "M 0 80 Q 50 70, 100 85 T 200 60 T 300 40 T 400 20 T 500 10 T 600 5";

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={chartRef} className="w-full h-full flex flex-col pt-8">
      <div className="flex-1 relative">
        <svg viewBox="0 0 600 100" className="w-full h-full overflow-visible">
          {/* Grid Lines */}
          {[0, 25, 50, 75, 100].map(v => (
            <line key={v} x1="0" y1={v} x2="600" y2={v} stroke="white" strokeOpacity="0.05" strokeWidth="1" />
          ))}

          {/* Glowing Area Fill */}
          <path
            d={`${points} V 100 H 0 Z`}
            fill="url(#chartGradient)"
            className={`transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-20' : 'opacity-0'}`}
          />

          {/* Main Line */}
          <path 
            d={points}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              strokeDasharray: '1000',
              strokeDashoffset: isVisible ? '0' : '1000',
              transition: 'stroke-dashoffset 3s ease-in-out'
            }}
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00d2ff" />
              <stop offset="100%" stopColor="#9d50bb" />
            </linearGradient>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00d2ff" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* Data points (Glowing circles) */}
        {[0, 100, 200, 300, 400, 500, 600].map((x, i) => (
           <div 
             key={i}
             className={`absolute w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white] transition-opacity duration-500`}
             style={{ 
               left: `${(x/600)*100}%`, 
               bottom: `${100 - (i === 0 ? 80 : i === 1 ? 85 : i === 2 ? 60 : i === 3 ? 40 : i === 4 ? 20 : i === 5 ? 10 : 5)}%`,
               transform: 'translate(-50%, 50%)',
               opacity: isVisible ? 1 : 0,
               transitionDelay: `${i * 200}ms`
             }} 
           />
        ))}
      </div>

      {/* X Axis Labels */}
      <div className="flex justify-between mt-6 px-1">
        {['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'].map((label, i) => (
          <span key={i} className="text-[10px] uppercase tracking-widest text-white/30 font-bold">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GrowthChart;

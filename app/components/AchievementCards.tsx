'use client';

import React, { useEffect, useState, useRef } from 'react';

interface StatProps {
  label: string;
  target: number;
  suffix: string;
}

import HoverTilt from './HoverTilt';

const StatCard: React.FC<StatProps> = ({ label, target, suffix }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref}>
      <HoverTilt>
        <div className="glass-card p-10 rounded-[32px] border-white/5 flex flex-col items-center justify-center text-center hover:border-accent-blue/30 transition-all duration-500 group">
          <div className="text-4xl md:text-6xl font-black mb-3 text-white group-hover:text-accent-blue transition-colors">
              {count}{suffix}
          </div>
          <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold">
              {label}
          </p>
        </div>
      </HoverTilt>
    </div>
  );
};

const AchievementCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
      <StatCard label="Projects Delivered" target={120} suffix="+" />
      <StatCard label="Client Satisfaction" target={98} suffix="%" />
      <StatCard label="Countries Served" target={15} suffix="+" />
    </div>
  );
};

export default AchievementCards;

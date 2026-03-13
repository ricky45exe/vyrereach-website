'use client';

import React, { useEffect, useState, useRef } from 'react';

interface MetricCardProps {
  label: string;
  value: string;
  target: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, target, suffix = '', prefix = '', delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.5 });

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, target, delay]);

  return (
    <div 
      ref={cardRef}
      className="glass-card p-8 rounded-3xl border-white/5 hover:border-accent-blue/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)] group relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue to-accent-violet opacity-50" />
      
      <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4 group-hover:text-accent-blue transition-colors">
        {label}
      </p>
      
      <div className="text-4xl md:text-5xl font-black text-white flex items-baseline gap-1">
        {prefix && <span className="text-2xl text-accent-blue">{prefix}</span>}
        {count}
        {suffix && <span className="text-accent-violet">{suffix}</span>}
      </div>

      {/* Decorative pulse */}
      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent-blue/5 rounded-full blur-xl group-hover:bg-accent-blue/10 transition-colors" />
    </div>
  );
};

export default MetricCard;

'use client';

import React, { useState } from 'react';

const services = [
  { title: "Digital Marketing", description: "Strategies that scale growth." },
  { title: "Brand Strategy", description: "Defining unique identities." },
  { title: "UI/UX Design", description: "Intuitive user journeys." },
  { title: "Web Development", description: "Robust scalable tech." },
  { title: "Performance Marketing", description: "ROI-driven campaigns." },
  { title: "Content & Social", description: "Engaging community voices." }
];

import HoverTilt from './HoverTilt';

const OrbitalServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-48 relative overflow-hidden flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 nebula-bg opacity-30 pointer-events-none" />
      
      {/* Central Node */}
      <HoverTilt strength={5}>
        <div className="relative z-20 w-64 h-64 rounded-full glass-card flex items-center justify-center text-center p-8 border-accent-blue/30 shadow-[0_0_50px_rgba(0,210,255,0.2)]">
          <h2 className="text-2xl font-black uppercase tracking-tighter">
            VyreReach <br /> <span className="text-gradient">Capabilities</span>
          </h2>
        </div>
      </HoverTilt>

      {/* Orbiting Nodes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="absolute pointer-events-auto group"
              style={{
                animation: `orbit 40s linear infinite`,
                animationDelay: `${index * -6.6}s`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <HoverTilt strength={15}>
                <div className="glass-card gravity-react w-48 p-6 rounded-2xl border-white/10 hover:border-accent-blue/60 transition-all duration-500 cursor-default shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <div className="w-8 h-8 rounded-lg bg-accent-blue/20 mb-3 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                  </div>
                  <h3 className="text-sm font-bold mb-2 group-hover:text-accent-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className={`text-[10px] text-white/40 leading-relaxed transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    {service.description}
                  </p>
                </div>
              </HoverTilt>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OrbitalServices;

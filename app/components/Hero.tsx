'use client';

import { useEffect, useRef, useState } from 'react';
import FloatingParticles from './FloatingParticles';
import FloatingOrbs from './FloatingOrbs';
import MagneticButton from './MagneticButton';
import HeroGridFloor from './HeroGridFloor';
import HolographicPanels from './HolographicPanels';
import LightBeams from './LightBeams';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#0b0b0f]"
    >
      {/* Cinematic Environment Background Layers */}
      <LightBeams />
      
      <div 
        className="absolute inset-0 z-0 transition-transform duration-300 ease-out"
        style={{ 
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` 
        }}
      >
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
               backgroundSize: '40px 40px' 
             }} 
        />
        <FloatingOrbs />
        <FloatingParticles />
      </div>

      <HeroGridFloor />
      <HolographicPanels mousePos={mousePos} />

      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center z-20">
        <div 
          className={`transition-all duration-[1200ms] cubic-bezier(0.2,0.8,0.2,1) transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            Building Digital <br />
            <span className="text-gradient">Product, Brand</span> <br />
            and Experience
          </h1>
        </div>
        
        <div 
          className={`transition-all duration-[1200ms] cubic-bezier(0.2,0.8,0.2,1) transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 font-light leading-relaxed">
            At VyreReach, we are passionate architects of digital experiences, crafting everything from intuitive interfaces to powerful backend systems. Our team transforms ambitious ideas into seamless, scalable products that look stunning and perform with precision.
          </p>
        </div>

        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-[1200ms] cubic-bezier(0.2,0.8,0.2,1) transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <MagneticButton variant="primary">
            Start a Project
          </MagneticButton>
          <MagneticButton variant="secondary">
            Explore Our Work
            <span className="inline-block translate-x-1 ml-2">→</span>
          </MagneticButton>
        </div>
      </div>

      {/* Bottom Gradient Streaks */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[#0b0b0f] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;

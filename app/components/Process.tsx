'use client';

import React, { useEffect, useState, useRef } from 'react';

const steps = [
  { title: "Discover", description: "Deep dive into your goals." },
  { title: "Design", description: "Crafting the visual world." },
  { title: "Build", description: "Robust scalable technology." },
  { title: "Launch", description: "Validation and deployment." }
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      const progress = Math.max(0, Math.min(1, (viewHeight - rect.top) / (rect.height + viewHeight)));
      const stepIndex = Math.floor(progress * steps.length * 1.5); // Speed up reveal
      setActiveStep(Math.min(stepIndex, steps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="py-48 relative min-h-screen flex items-center" ref={containerRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black mb-32 text-center">Process Journey</h2>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Glowing Path Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 overflow-hidden rounded-full hidden md:block">
             <div 
               className="h-full bg-gradient-to-r from-accent-blue to-accent-violet transition-all duration-1000 ease-out"
               style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`transition-all duration-700 transform ${
                  index <= activeStep ? 'opacity-100 translate-y-0 scale-100' : 'opacity-20 translate-y-12 scale-90'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 border-2 transition-all duration-500 ${
                    index <= activeStep ? 'bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.5)]' : 'bg-transparent border-white/20'
                  }`}>
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 ${index <= activeStep ? 'text-white' : 'text-white/40'}`}>
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

'use client';

import React from 'react';
import ClientLogoCarousel from './ClientLogoCarousel';
import AchievementCards from './AchievementCards';

const TrustedBy = () => {
  return (
    <section id="trusted" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Trusted by <span className="text-gradient">Innovative Brands</span></h2>
          <p className="max-w-2xl mx-auto text-lg text-white/50 font-light">
            Startups and businesses partner with VyreReach to build digital products, grow their brand, and scale faster.
          </p>
        </div>

        <ClientLogoCarousel />
        
        <AchievementCards />
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-violet/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
};

export default TrustedBy;

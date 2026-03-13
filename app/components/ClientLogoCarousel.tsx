'use client';

import React from 'react';

const logos = [
  'Stripe', 'Notion', 'Shopify', 'Slack', 'Figma', 'Airbnb',
  'Stripe', 'Notion', 'Shopify', 'Slack', 'Figma', 'Airbnb' // Duplicated for seamless loop
];

const ClientLogoCarousel = () => {
  return (
    <div className="w-full overflow-hidden relative py-12">
      {/* Gradient Fades for edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0b0f] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b0b0f] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-32 w-max">
        {logos.map((logo, i) => (
          <div 
            key={i} 
            className="group flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 cursor-default"
          >
            <div className="text-3xl md:text-4xl font-black tracking-tighter text-white/20 group-hover:text-accent-blue transition-colors">
              {logo}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ClientLogoCarousel;

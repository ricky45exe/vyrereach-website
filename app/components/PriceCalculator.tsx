'use client';

import React from 'react';

interface PriceCalculatorProps {
  selections: {
    type: string;
    stage: string;
    services: string[];
    budget: string;
  };
}

const PriceCalculator: React.FC<PriceCalculatorProps> = ({ selections }) => {
  const calculateEstimate = () => {
    let base = 0;
    
    // Type Weights
    if (selections.type === 'Website Development') base += 3000;
    if (selections.type === 'Branding') base += 2500;
    if (selections.type === 'Digital Marketing') base += 4000;
    if (selections.type === 'Full Digital Product') base += 10000;

    // Stage Weights
    if (selections.stage === 'Growing Business') base *= 1.5;
    if (selections.stage === 'Established Company') base *= 2;
    if (selections.stage === 'Enterprise') base *= 4;

    // Service Multiplier
    base += selections.services.length * 1000;

    if (base === 0) return '$0';
    
    const min = Math.floor(base);
    const max = Math.floor(base * 1.5);
    
    return `$${min.toLocaleString()} – $${max.toLocaleString()}`;
  };

  return (
    <div className="glass-card bg-accent-blue/10 border border-accent-blue/30 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
      <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-accent-blue mb-4">Estimated Investment</h4>
      <div className="text-3xl md:text-5xl font-black text-white glow-text">
        {calculateEstimate()}
      </div>
      <p className="mt-4 text-white/40 text-xs">Based on your current selections. Final pricing may vary.</p>
    </div>
  );
};

export default PriceCalculator;

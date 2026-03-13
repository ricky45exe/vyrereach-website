'use client';

import React from 'react';
import MetricCard from './MetricCard';
import GrowthChart from './GrowthChart';
import FunnelVisualization from './FunnelVisualization';

const ResultsDashboard = () => {
  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-black mb-6">Real Growth for <span className="text-gradient">Real Businesses</span></h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/50 font-light">
            We don't just run campaigns. We deliver measurable results that drive revenue, engagement, and brand growth.
          </p>
        </div>

        <div className="glass-card rounded-[40px] border-white/5 p-8 md:p-12 relative overflow-hidden">
          {/* Dashboard Header Decoration */}
          <div className="absolute top-0 left-0 w-full p-4 border-b border-white/5 bg-white/5 flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-red-500/50" />
             <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
             <div className="w-2 h-2 rounded-full bg-green-500/50" />
             <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold ml-4">Vyrereach Client Growth Engine v2.4</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Left: Metric Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <MetricCard label="Revenue Growth" target={240} suffix="%" delay={200} />
              <MetricCard label="Customer Acquisition" target={180} suffix="%" delay={400} />
              <MetricCard label="Conversion Rate" target={65} suffix="%" delay={600} />
              <MetricCard label="Return on Ad Spend" target={4} suffix="x" prefix="" delay={800} />
            </div>

            {/* Right: Charts Section */}
            <div className="flex flex-col gap-8">
              <div className="flex-1 glass-card bg-white/5 rounded-3xl p-8 border-white/10 min-h-[300px]">
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Traffic Momentum</h4>
                <GrowthChart />
              </div>
              <div className="glass-card bg-white/5 rounded-3xl p-8 border-white/10">
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Conversion Funnel</h4>
                <FunnelVisualization />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsDashboard;

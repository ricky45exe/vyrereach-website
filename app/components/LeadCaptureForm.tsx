'use client';

import React, { useState } from 'react';
import MagneticButton from './MagneticButton';

const LeadCaptureForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-700">
        <div className="w-20 h-20 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-accent-blue/30 shadow-[0_0_30px_rgba(0,210,255,0.2)]">
            <span className="text-3xl">✓</span>
        </div>
        <h3 className="text-3xl font-black mb-4">Request Received</h3>
        <p className="text-white/50 text-lg">Our team will reach out within 24 hours to schedule your strategy session.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Finalize Your Proposal</h3>
        <p className="text-white/40">Enter your details so we can tailor a roadmap for your business.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input 
          required
          type="text" 
          placeholder="Name" 
          className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-blue/50 transition-all"
        />
        <input 
          required
          type="email" 
          placeholder="Email" 
          className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-blue/50 transition-all"
        />
      </div>
      <input 
        required
        type="text" 
        placeholder="Company Name" 
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-blue/50 transition-all"
      />
      <textarea 
        required
        rows={4} 
        placeholder="Briefly describe your project..." 
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-blue/50 transition-all resize-none"
      />

      <MagneticButton type="submit" variant="primary" className="w-full py-5 text-lg">
        Get My Proposal
      </MagneticButton>
    </form>
  );
};

export default LeadCaptureForm;

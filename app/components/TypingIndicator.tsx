'use client';

import React from 'react';

const TypingIndicator = () => {
  return (
    <div className="flex gap-1.5 px-4 py-3 rounded-2xl glass-card bg-white/5 border border-white/10 w-max">
      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-bounce" style={{ animationDelay: '0.2s' }} />
      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-bounce" style={{ animationDelay: '0.4s' }} />
    </div>
  );
};

export default TypingIndicator;

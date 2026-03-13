'use client';

import React from 'react';

interface ChatMessageProps {
  message: string;
  isAI: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isAI }) => {
  return (
    <div className={`flex w-full mb-4 ${isAI ? 'justify-start' : 'justify-end'}`}>
      <div 
        className={`max-w-[80%] px-5 py-3 rounded-2xl glass-card relative transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 ${
          isAI 
            ? 'bg-white/5 border-white/10 rounded-tl-none' 
            : 'bg-gradient-to-br from-accent-blue/20 to-accent-violet/20 border-accent-blue/30 rounded-tr-none text-right'
        }`}
      >
        {isAI && (
          <div className="absolute -top-6 left-0 text-[10px] font-bold uppercase tracking-widest text-accent-blue opacity-50">
            Vyre AI Assistant
          </div>
        )}
        {!isAI && (
          <div className="absolute -top-6 right-0 text-[10px] font-bold uppercase tracking-widest text-white/40">
            You
          </div>
        )}
        <p className="text-sm md:text-base leading-relaxed text-white/90">
          {message}
        </p>
        
        {/* Glow effect for AI messages */}
        {isAI && (
          <div className="absolute -inset-px rounded-2xl border border-accent-blue/10 blur-[1px] pointer-events-none" />
        )}
      </div>
    </div>
  );
};

export default ChatMessage;

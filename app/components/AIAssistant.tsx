'use client';

import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import MagneticButton from './MagneticButton';

const AIAssistant = () => {
  const [messages, setMessages] = useState<{ text: string, isAI: boolean }[]>([
    { text: "Hello! I'm your VyreReach Marketing Strategist. How can I help you grow your brand today?", isAI: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const responses: Record<string, string> = {
    'grow my startup': "To grow your startup, we usually focus on rapid validation, aggressive SEO for high-intent keywords, and building an automated lead generation funnel. Would you like to deep dive into one of these?",
    'conversion rate': "Improving conversion rates starts with clarity. We optimize the 'Above the Fold' content, simplify your forms, and use heatmaps to identify where users are dropping off in your journey.",
    'social media': "Social media isn't just about posting; it's about community and conversion. We recommend a 70:20:10 ratio: 70% value, 20% engagement, and 10% direct sales content.",
    'marketing strategy': "The best strategy for a small business is 'Narrow and Deep'. Choose one platform where your audience lives, master it with high-value content, and automate your back-end sales process.",
    'default': "That's a great question. At VyreReach, we specialize in scaling digital experiences through precision engineering and data-driven marketing. Could you tell me more about your specific business goals?"
  };

  const handleSend = () => {
    if (!inputValue.trim() || isTyping) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { text: userMsg, isAI: false }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      let aiResponse = responses.default;
      const lowerInput = userMsg.toLowerCase();

      if (lowerInput.includes('grow') || lowerInput.includes('startup')) aiResponse = responses['grow my startup'];
      else if (lowerInput.includes('conversion') || lowerInput.includes('conversion rate')) aiResponse = responses['conversion rate'];
      else if (lowerInput.includes('social')) aiResponse = responses['social media'];
      else if (lowerInput.includes('strategy') || lowerInput.includes('small business')) aiResponse = responses['marketing strategy'];

      setMessages(prev => [...prev, { text: aiResponse, isAI: true }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="ai-assistant" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Ask Our AI <span className="text-gradient">Strategist</span></h2>
          <p className="max-w-2xl mx-auto text-lg text-white/50">
            Ask a question about digital marketing, branding, or growth strategy and see how our AI assistant would help your business.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-[32px] overflow-hidden border-white/10 shadow-2xl flex flex-col h-[600px]">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <ChatMessage key={i} message={msg.text} isAI={msg.isAI} />
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <TypingIndicator />
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 md:p-6 bg-white/5 border-t border-white/10">
              <div className="flex gap-4">
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about growth strategy, SEO, Branding..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-blue/50 transition-all text-sm md:text-base selection:bg-accent-blue/30"
                />
                <MagneticButton 
                  onClick={handleSend}
                  variant="primary"
                  className="!px-6 !py-4 md:!px-10"
                >
                  <span className="hidden md:inline">Ask AI</span>
                  <span className="md:hidden">→</span>
                </MagneticButton>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Grow Startup', 'SEO Help', 'Brand Strategy'].map((suggestion) => (
                  <button 
                    key={suggestion}
                    onClick={() => setInputValue(suggestion)}
                    className="text-[10px] uppercase tracking-widest font-bold py-1.5 px-3 rounded-full bg-white/5 border border-white/10 hover:border-accent-blue/30 hover:text-accent-blue transition-all"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
};

export default AIAssistant;

'use client';

const LiquidGradient = () => {
  return (
    <div className="fixed inset-0 overflow-hidden bg-[#0b0b0f] pointer-events-none" style={{ zIndex: -2 }}>
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#4f46e5]/10 liquid-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#9333ea]/10 liquid-blob" style={{ animationDelay: '-10s' }} />
      <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-[#06b6d4]/10 liquid-blob" style={{ animationDelay: '-5s' }} />
      <div className="absolute bottom-[20%] left-[20%] w-[50%] h-[50%] bg-[#312e81]/10 liquid-blob" style={{ animationDelay: '-15s' }} />
    </div>
  );
};

export default LiquidGradient;

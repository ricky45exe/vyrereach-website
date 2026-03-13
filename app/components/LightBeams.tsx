'use client';

const LightBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="absolute h-[150%] w-px bg-gradient-to-b from-transparent via-accent-blue/20 to-transparent blur-[2px]"
          style={{
            left: `${15 + i * 15}%`,
            top: '-25%',
            transform: 'rotate(15deg)',
            opacity: 0.1,
            animation: `beam-drift ${15 + i * 5}s linear infinite`,
            animationDelay: `${i * -2}s`
          }}
        />
      ))}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i + 6}
          className="absolute h-[150%] w-px bg-gradient-to-b from-transparent via-accent-violet/20 to-transparent blur-[2px]"
          style={{
            left: `${20 + i * 14}%`,
            top: '-25%',
            transform: 'rotate(-15deg)',
            opacity: 0.1,
            animation: `beam-drift ${18 + i * 4}s linear infinite`,
            animationDelay: `${i * -3}s`
          }}
        />
      ))}

      <style jsx>{`
        @keyframes beam-drift {
          0% { transform: translateY(-10%) rotate(var(--rot, 15deg)); }
          100% { transform: translateY(10%) rotate(var(--rot, 15deg)); }
        }
      `}</style>
    </div>
  );
};

export default LightBeams;

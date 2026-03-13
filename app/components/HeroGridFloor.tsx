'use client';

const HeroGridFloor = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[50vh] overflow-hidden pointer-events-none" style={{ perspective: '1000px' }}>
      <div 
        className="absolute inset-x-[-100%] top-0 bottom-[-50%] bg-[linear-gradient(to_right,rgba(0,210,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,210,255,0.1)_1px,transparent_1px)]"
        style={{
          backgroundSize: '100px 100px',
          transform: 'rotateX(60deg) translateY(-20%)',
          animation: 'grid-forward 20s linear infinite',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-transparent z-10" />
      
      <style jsx>{`
        @keyframes grid-forward {
          from { background-position: 0 0; }
          to { background-position: 0 1000px; }
        }
      `}</style>
    </div>
  );
};

export default HeroGridFloor;

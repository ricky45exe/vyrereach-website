'use client';

const FloatingOrbs = () => {
  const orbs = [
    { color: 'bg-accent-blue/20', size: 'w-[400px] h-[400px]', top: '10%', left: '5%', duration: '25s', delay: '0s' },
    { color: 'bg-accent-violet/20', size: 'w-[500px] h-[500px]', top: '40%', left: '60%', duration: '30s', delay: '-5s' },
    { color: 'bg-purple-500/10', size: 'w-[350px] h-[350px]', top: '70%', left: '20%', duration: '22s', delay: '-10s' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-[100px] ${orb.color} ${orb.size}`}
          style={{
            top: orb.top,
            left: orb.left,
            animation: `float-orb ${orb.duration} ease-in-out infinite alternate`,
            animationDelay: orb.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;

'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  life: number;
  color: string;
  vx: number;
  vy: number;
}

const LightTrails = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const addParticle = (x: number, y: number) => {
      // Add a small burst of particles on move
      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x,
          y,
          size: Math.random() * 4 + 2,
          life: 1.0,
          color: Math.random() > 0.5 ? '#00d2ff' : '#9d50bb',
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5
        });
      }
      
      // Keep performance stable
      if (particles.current.length > 100) {
        particles.current = particles.current.slice(-100);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        p.life -= 0.02; // Fade speed
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.life <= 0) {
          particles.current.splice(i, 1);
          i--;
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life * 0.6;
        
        // Add glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        
        ctx.fill();
        
        // Reset shadow for performance
        ctx.shadowBlur = 0;
      }

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      addParticle(e.clientX, e.clientY);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none" 
      style={{ zIndex: 0 }} 
    />
  );
};

export default LightTrails;

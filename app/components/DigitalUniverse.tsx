'use client';

import React, { useEffect, useRef } from 'react';

const DigitalUniverse = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let streaks: Streak[] = [];
    
    const STAR_COUNT = 80; // Layer 1
    const GLOW_COUNT = 30; // Layer 2
    const STREAK_COUNT = 10; // Layer 4

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;

      constructor(type: 'star' | 'glow') {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        
        if (type === 'star') {
          this.size = Math.random() * 1.5;
          this.opacity = Math.random() * 0.5 + 0.2;
          this.color = '#ffffff';
        } else {
          this.size = Math.random() * 3 + 2;
          this.opacity = Math.random() * 0.3 + 0.1;
          this.color = Math.random() > 0.5 ? '#00d2ff' : '#9d50bb';
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = canvas!.width;
        if (this.x > canvas!.width) this.x = 0;
        if (this.y < 0) this.y = canvas!.height;
        if (this.y > canvas!.height) this.y = 0;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.globalAlpha = this.opacity;
        ctx!.fill();
      }
    }

    class Streak {
      x: number = 0;
      y: number = 0;
      length: number = 0;
      speed: number = 0;
      opacity: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.length = Math.random() * 100 + 50;
        this.speed = Math.random() * 0.5 + 0.1;
        this.opacity = Math.random() * 0.1;
      }

      update() {
        this.x += this.speed;
        this.y += this.speed * 0.2;
        if (this.x > canvas!.width) this.reset();
      }

      draw() {
        ctx!.beginPath();
        const grad = ctx!.createLinearGradient(this.x, this.y, this.x - this.length, this.y - this.length * 0.2);
        grad.addColorStop(0, `rgba(0, 210, 255, ${this.opacity})`);
        grad.addColorStop(1, 'rgba(0, 210, 255, 0)');
        ctx!.strokeStyle = grad;
        ctx!.lineWidth = 1;
        ctx!.moveTo(this.x, this.y);
        ctx!.lineTo(this.x - this.length, this.y - this.length * 0.2);
        ctx!.stroke();
      }
    }

    const init = () => {
      particles = [];
      streaks = [];
      for (let i = 0; i < STAR_COUNT; i++) particles.push(new Particle('star'));
      for (let i = 0; i < GLOW_COUNT; i++) particles.push(new Particle('glow'));
      for (let i = 0; i < STREAK_COUNT; i++) streaks.push(new Streak());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      streaks.forEach(s => {
        s.update();
        s.draw();
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden bg-[#0b0b0f]" style={{ zIndex: -3 }}>
      {/* Layer 3: Nebula Clouds */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-accent-blue/5 rounded-full blur-[150px] opacity-40 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-accent-violet/5 rounded-full blur-[150px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[30%] left-[40%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: '4s' }} />
      
      {/* Canvas for Layer 1, 2, 4 */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default DigitalUniverse;

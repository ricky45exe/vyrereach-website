'use client';

import React, { useEffect } from 'react';

const CursorGravity = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const elements = document.querySelectorAll('.gravity-react');
      
      elements.forEach((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const dx = clientX - centerX;
        const dy = clientY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 400) {
          const strength = 1 - dist / 400;
          const moveX = dx * 0.05 * strength;
          const moveY = dy * 0.05 * strength;
          (el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          (el as HTMLElement).style.transform = `translate(0px, 0px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <>
      {children}
    </>
  );
};

export default CursorGravity;

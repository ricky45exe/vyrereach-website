'use client';

import Link from 'next/link';
import AnimatedLogo from './AnimatedLogo';
import MagneticButton from './MagneticButton';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="glass-card rounded-2xl px-6 py-3 flex items-center justify-between">
        <Link href="/">
          <AnimatedLogo />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Services', 'Portfolio', 'Process', 'Testimonials', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-blue transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <MagneticButton variant="primary" className="hidden md:flex !px-6 !py-2 text-sm">
          Get Started
        </MagneticButton>
      </div>
    </nav>
  );
};

export default Navbar;

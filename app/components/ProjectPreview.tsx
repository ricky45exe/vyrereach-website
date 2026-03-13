'use client';

import React, { useEffect, useState } from 'react';
import MagneticButton from './MagneticButton';

interface Project {
  title: string;
  category: string;
  color: string;
  description?: string;
  tags?: string[];
}

interface ProjectPreviewProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project, onClose }) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (project) {
      setIsRendered(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsRendered(false), 500);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [project]);

  if (!isRendered && !project) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-6 transition-all duration-500 ${
        project ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xl transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div 
        className={`relative w-full max-w-4xl glass-card rounded-[40px] overflow-hidden transition-all duration-500 transform ${
          project ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-95 opacity-0'
        }`}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors z-50 group"
        >
          <span className="text-2xl group-hover:rotate-90 transition-transform">×</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Side */}
          <div className={`aspect-square md:aspect-auto bg-gradient-to-br ${project?.color || 'from-blue-500/20'} to-black relative flex items-center justify-center overflow-hidden`}>
            <div className="absolute inset-0 nebula-bg opacity-30" />
            <div className="text-6xl font-black opacity-10 select-none">VYRE</div>
            {/* Project "Image" Placeholder */}
            <div className="relative w-4/5 h-4/5 glass-card rounded-2xl flex items-center justify-center border-white/20 shadow-2xl">
                <div className="w-12 h-12 rounded-full border-4 border-white/10 border-t-accent-blue animate-spin" />
            </div>
          </div>

          {/* Info Side */}
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <span className="text-accent-blue text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
              {project?.category}
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              {project?.title}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              {project?.description || "A cutting-edge solution designed to transform the digital landscape. We Combined aesthetic precision with technical excellence to deliver a seamless user experience that scales with ambition."}
            </p>

            <div className="mb-10">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {(project?.tags || ['Next.js', 'React', 'TypeScript', 'Tailwind']).map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <MagneticButton variant="primary" className="w-full md:w-max !px-12 py-4">
              Visit Project ↗
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;

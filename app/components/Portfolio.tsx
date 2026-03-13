'use client';

import React, { useState } from 'react';
import { useParallax } from './useParallax';
import ProjectPreview from './ProjectPreview';
import PortfolioCube from './PortfolioCube';

const projects = [
  { 
    title: "Project Alpha", 
    category: "Web Development", 
    color: "from-blue-500/40",
    description: "A high-performance web platform built for a tech startup, focusing on speed and intuitive user interaction.",
    tags: ["Next.js", "GraphQL", "Framer Motion"]
  },
  { 
    title: "Project Beta", 
    category: "Branding", 
    color: "from-violet-500/40",
    description: "Complete visual identity and brand strategy for a luxury fashion house, bridging physical and digital worlds.",
    tags: ["Brand Design", "Strategy", "Creative Direction"]
  },
  { 
    title: "Project Gamma", 
    category: "Digital Marketing", 
    color: "from-purple-500/40",
    description: "Multi-channel marketing campaign that increased user acquisition by 240% using data-driven insights.",
    tags: ["SEO", "Performance", "Analytics"]
  },
  { 
    title: "Project Delta", 
    category: "UI/UX Design", 
    color: "from-cyan-500/40",
    description: "Mobile-first financial dashboard that simplifies complex data into actionable user insights.",
    tags: ["UI Design", "UX Research", "Prototyping"]
  },
  { 
    title: "Project Epsilon", 
    category: "Design System", 
    color: "from-indigo-500/40",
    description: "A comprehensive design system created to ensure visual consistency across all product lines.",
    tags: ["Design Ops", "Documentation", "Storybook"]
  },
  { 
    title: "Project Zeta", 
    category: "Social Media", 
    color: "from-fuchsia-500/40",
    description: "Engaging social content strategy that built a community of over 1M followers in 6 months.",
    tags: ["Social Strategy", "Content", "Engagement"]
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const parallax = useParallax(15);

  return (
    <section id="portfolio" className="py-48 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-7xl font-black mb-6">Dimension X</h2>
          <p className="text-white/40 text-xl font-light">Interactive architectural project nodes. Select a node to expand.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 gap-x-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="cursor-pointer transition-transform duration-500"
              onClick={() => setSelectedProject(project)}
              style={{
                transform: `translate(${parallax.x * (index + 1) * 0.1}px, ${parallax.y * (index + 1) * 0.1}px)`
              }}
            >
              <PortfolioCube 
                title={project.title}
                category={project.category}
                color={project.color}
              />
            </div>
          ))}
        </div>
      </div>

      <ProjectPreview 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Portfolio;

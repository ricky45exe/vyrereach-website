'use client';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO at TechFlow",
    content: "VyreReach transformed our digital presence completely. Their attention to detail and creative approach is unmatched in the industry.",
    color: "from-blue-500/10"
  },
  {
    name: "Sarah Chen",
    role: "Founder of Lumina",
    content: "The level of professionalism and technical expertise they brought to our project was refreshing. They didn't just build a site; they built an experience.",
    color: "from-violet-500/10"
  },
  {
    name: "Marcus Thorne",
    role: "Marketing Director",
    content: "Working with the team at VyreReach was the best decision we made for our brand. Our conversions have increased by over 150%.",
    color: "from-purple-500/10"
  }
];

import HoverTilt from './HoverTilt';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-violet/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-24 text-center">Client Voice</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="relative group h-full"
              style={{
                animation: `horizontal-drift 10s ease-in-out infinite alternate`,
                animationDelay: `${index * 2}s`
              }}
            >
              <HoverTilt className="h-full">
                <div className={`absolute -inset-1 bg-gradient-to-br ${t.color} to-transparent blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                
                <div className="glass-card gravity-react p-12 rounded-[40px] relative border-white/5 group-hover:border-accent-blue/30 transition-all duration-500 flex flex-col h-full">
                  <div className="absolute -top-6 left-12 w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-violet rounded-full flex items-center justify-center text-3xl font-serif">
                     "
                  </div>
                  
                  <p className="text-xl md:text-2xl text-white/80 mb-12 font-light italic leading-relaxed pt-4">
                    {t.content}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                       {/* Placeholder Avatar */}
                       <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl group-hover:text-accent-blue transition-colors">{t.name}</h4>
                      <p className="text-white/40 text-sm mt-1 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              </HoverTilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

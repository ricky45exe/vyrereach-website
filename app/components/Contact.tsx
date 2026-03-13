'use client';

import MagneticButton from './MagneticButton';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass-card p-10 md:p-16 rounded-[40px]">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Let's Connect</h2>
            <p className="text-white/50">Ready to start your next big digital venture? We're here to help.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-blue/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-blue/50 transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 ml-1">Message</label>
              <textarea 
                rows={5} 
                placeholder="Tell us about your project..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-blue/50 transition-colors resize-none"
              />
            </div>

            <MagneticButton type="submit" variant="primary" className="w-full py-5 text-lg">
              Send Message
            </MagneticButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AIAssistant from './components/AIAssistant';
import Process from './components/Process';
import ResultsDashboard from './components/ResultsDashboard';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ProjectEstimator from './components/ProjectEstimator';
import Footer from './components/Footer';
import LiquidGradient from './components/LiquidGradient';
import ParticleSwarm from './components/ParticleSwarm';
import LightTrails from './components/LightTrails';
import SectionFadeIn from './components/SectionFadeIn';
import CursorGravity from './components/CursorGravity';

export default function Home() {
  return (
    <main className="relative bg-[#0b0b0f] text-white selection:bg-accent-blue/30">
      {/* Background Layers - Fixed and Behind */}
      <LiquidGradient />
      <ParticleSwarm />
      <LightTrails />
      
      <CursorGravity>
        <Navbar />
        
        {/* Main Scroll Container */}
        <div className="relative z-10 w-full">
          <section id="hero" className="min-h-screen flex flex-col justify-center py-[6rem] px-[2rem]">
            <SectionFadeIn>
              <Hero />
            </SectionFadeIn>
          </section>

          <section id="trusted-section" className="flex flex-col justify-center py-[6rem] px-[2rem]">
            <SectionFadeIn>
              <TrustedBy />
            </SectionFadeIn>
          </section>
          
          <section id="services-section" className="min-h-screen flex flex-col justify-center py-[6rem] px-[2rem]">
            <SectionFadeIn>
              <Services />
            </SectionFadeIn>
          </section>
          
          <section id="portfolio-section" className="min-h-screen flex flex-col justify-center py-[6rem] px-[2rem]">
            <SectionFadeIn>
              <Portfolio />
            </SectionFadeIn>
          </section>

          <section id="ai-section" className="flex flex-col justify-center py-[6rem] px-[2rem]">
            <SectionFadeIn>
              <AIAssistant />
            </SectionFadeIn>
          </section>
          
          <section id="process-section" className="min-h-screen flex flex-col justify-center py-[6rem] px-[2rem]">
            <SectionFadeIn>
              <Process />
            </SectionFadeIn>
          </section>

          <section id="results-section" className="flex flex-col justify-center py-[6rem] px-[2rem]">
            <SectionFadeIn>
              <ResultsDashboard />
            </SectionFadeIn>
          </section>
          
          <section id="testimonials-section" className="min-h-screen flex flex-col justify-center py-[6rem] px-[2rem]">
            <SectionFadeIn>
              <Testimonials />
            </SectionFadeIn>
          </section>
          
          <section id="contact-section" className="min-h-screen flex flex-col justify-center py-[6rem] px-[2rem]">
            <SectionFadeIn>
              <Contact />
            </SectionFadeIn>
          </section>

          <section id="estimator-section" className="flex flex-col justify-center py-[6rem] px-[2rem]">
            <SectionFadeIn>
              <ProjectEstimator />
            </SectionFadeIn>
          </section>
          
          <Footer />
        </div>
      </CursorGravity>
    </main>
  );
}

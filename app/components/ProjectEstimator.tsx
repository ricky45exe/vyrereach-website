'use client';

import React, { useState } from 'react';
import EstimatorStep from './EstimatorStep';
import PriceCalculator from './PriceCalculator';
import LeadCaptureForm from './LeadCaptureForm';

const ProjectEstimator = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    type: '',
    stage: '',
    services: [] as string[],
    budget: '',
  });

  const totalSteps = 5;

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const isStepComplete = () => {
    if (step === 1) return selections.type !== '';
    if (step === 2) return selections.stage !== '';
    if (step === 3) return selections.services.length > 0;
    if (step === 4) return selections.budget !== '';
    return true;
  };

  return (
    <section id="estimator" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">Estimate Your <span className="text-gradient">Project</span></h2>
          <p className="text-white/50 text-lg">Answer a few quick questions and get an instant estimate for your digital product or marketing campaign.</p>
        </div>

        <div className="max-w-4xl mx-auto glass-card rounded-[40px] border-white/5 p-8 md:p-12 relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
             <div 
               className="h-full bg-gradient-to-r from-accent-blue to-accent-violet transition-all duration-700 ease-out"
               style={{ width: `${(step / totalSteps) * 100}%` }}
             />
          </div>

          <div className="min-h-[400px] flex flex-col justify-between">
            <div>
              {step === 1 && (
                <EstimatorStep 
                  title="What type of project are you planning?"
                  options={["Website Development", "Branding", "Digital Marketing", "Full Digital Product"]}
                  currentValue={selections.type}
                  onChange={(v) => setSelections({...selections, type: v})}
                />
              )}
              {step === 2 && (
                <EstimatorStep 
                  title="What is your current business stage?"
                  options={["Startup", "Growing Business", "Established Company", "Enterprise"]}
                  currentValue={selections.stage}
                  onChange={(v) => setSelections({...selections, stage: v})}
                />
              )}
              {step === 3 && (
                <EstimatorStep 
                  title="Which services do you need?"
                  isMulti
                  options={["Website Design", "UI/UX", "SEO", "Paid Ads", "Social Media", "Brand Identity", "Product Development"]}
                  currentValue={selections.services}
                  onChange={(v) => setSelections({...selections, services: v})}
                />
              )}
              {step === 4 && (
                <EstimatorStep 
                  title="What is your planned budget range?"
                  options={["$2k – $5k", "$5k – $15k", "$15k – $50k", "$50k+"]}
                  currentValue={selections.budget}
                  onChange={(v) => setSelections({...selections, budget: v})}
                />
              )}
              {step === 5 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8">
                  <PriceCalculator selections={selections} />
                  <LeadCaptureForm />
                </div>
              )}
            </div>

            {step < 5 && (
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/5">
                <button 
                  onClick={prevStep}
                  disabled={step === 1}
                  className={`text-sm font-bold uppercase tracking-widest px-6 py-2 transition-all ${step === 1 ? 'opacity-0' : 'text-white/40 hover:text-white'}`}
                >
                  Back
                </button>
                <button 
                  onClick={nextStep}
                  disabled={!isStepComplete()}
                  className={`bg-white/10 hover:bg-white/20 px-8 py-3 rounded-xl font-bold transition-all ${!isStepComplete() ? 'opacity-50 cursor-not-allowed' : 'text-accent-blue'}`}
                >
                  {step === 4 ? 'See Estimate' : 'Next Step'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectEstimator;

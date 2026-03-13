'use client';

import React from 'react';

interface EstimatorStepProps {
  title: string;
  options: string[] | { label: string, value: any }[];
  currentValue: any;
  onChange: (value: any) => void;
  isMulti?: boolean;
}

const EstimatorStep: React.FC<EstimatorStepProps> = ({ title, options, currentValue, onChange, isMulti = false }) => {
  const toggleOption = (val: string) => {
    if (isMulti) {
      const current = Array.isArray(currentValue) ? currentValue : [];
      if (current.includes(val)) {
        onChange(current.filter(i => i !== val));
      } else {
        onChange([...current, val]);
      }
    } else {
      onChange(val);
    }
  };

  return (
    <div className="space-y-6 transition-all duration-500 animate-in fade-in slide-in-from-right-8">
      <h3 className="text-2xl font-bold text-white mb-8">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((opt) => {
          const label = typeof opt === 'string' ? opt : opt.label;
          const value = typeof opt === 'string' ? opt : opt.value;
          const isSelected = isMulti 
            ? Array.isArray(currentValue) && currentValue.includes(label)
            : currentValue === label;

          return (
            <button
              key={label}
              onClick={() => toggleOption(label)}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 group relative overflow-hidden ${
                isSelected 
                  ? 'bg-accent-blue/20 border-accent-blue shadow-[0_0_20px_rgba(0,210,255,0.2)]' 
                  : 'bg-white/5 border-white/10 hover:border-white/30'
              }`}
            >
              <span className={`font-medium transition-colors ${isSelected ? 'text-accent-blue' : 'text-white/70'}`}>
                {label}
              </span>
              
              {isSelected && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-accent-blue rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-r from-accent-blue/0 via-accent-blue/5 to-accent-blue/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EstimatorStep;

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

interface FormStepProps {
  step: number;
  totalSteps: number;
  question: string;
  description?: string;
  placeholder: string;
  type?: string;
  value: string;
  options?: string[];
  onChange: (val: string) => void;
  onNext: () => void;
  isLoading?: boolean;
}

export const FormStep: React.FC<FormStepProps> = ({ 
  step, 
  totalSteps, 
  question, 
  description, 
  placeholder, 
  type = 'text', 
  value, 
  options,
  onChange, 
  onNext,
  isLoading
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
      className="flex flex-col items-center justify-start min-h-screen p-6 py-12 overflow-y-auto"
    >
      <div className="panel-industrial space-y-8">
        {/* Progress bar */}
        <div className="flex gap-1">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div 
              key={i}
              className={`h-1.5 flex-1 rounded-sm transition-all duration-500 ${
                i < step ? 'bg-industrial-green' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        <div className="space-y-2">
          <span className="text-industrial-green/50 text-[10px] font-mono uppercase tracking-widest">Section {step.toString().padStart(2, '0')}</span>
          <h2 className="text-2xl font-bold tracking-tight text-industrial-green">{question.toUpperCase()}</h2>
          {description && <p className="text-gray-500 text-sm">{description}</p>}
        </div>

        <div className="space-y-4">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="w-10 h-10 border-4 border-gray-100 border-t-industrial-green rounded-full animate-spin" />
              <p className="text-industrial-green/60 text-sm font-medium">Processing Data...</p>
            </div>
          ) : options ? (
            <div className="grid grid-cols-1 gap-2">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setTimeout(onNext, 200);
                  }}
                  className={`card-option flex items-center justify-between group ${
                    value === option ? 'card-option-selected' : ''
                  }`}
                >
                  <span className={`font-medium ${value === option ? 'text-industrial-green' : 'text-gray-700'}`}>
                    {option}
                  </span>
                  {value === option && (
                    <motion.div 
                      initial={{ scale: 0 }} 
                      animate={{ scale: 1 }}
                      className="bg-industrial-green text-white p-1 rounded-full"
                    >
                      <Check className="w-3 h-3" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {type === 'textarea' ? (
                <textarea
                  autoFocus
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder={placeholder}
                  rows={4}
                  className="input-industrial resize-none"
                />
              ) : (
                <input
                  autoFocus
                  type={type}
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder={placeholder}
                  className="input-industrial"
                  onKeyDown={(e) => e.key === 'Enter' && value.trim() && onNext()}
                />
              )}
              <button
                disabled={!value.trim()}
                onClick={onNext}
                className="btn-industrial disabled:opacity-30 disabled:grayscale transition-all"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

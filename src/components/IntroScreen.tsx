import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

// No import needed for public folder assets
const flyerImage = '/flyer.png';

interface IntroScreenProps {
  onStart: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-start min-h-screen p-6 py-4 overflow-y-auto"
    >
      {/* Header Badge */}
      <motion.div 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="flex items-center gap-2 mb-3 bg-industrial-green/10 px-4 py-2 rounded-full border border-industrial-green/20"
      >
        <ShieldCheck className="w-5 h-5 text-industrial-green" />
        <span className="text-industrial-green font-bold text-xs tracking-widest uppercase">ISPON ACCREDITED SESSION</span>
      </motion.div>

      {/* Main Panel */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="panel-industrial relative overflow-hidden text-center backdrop-blur-md max-w-lg p-5"
      >
        {/* Subtle Flyer Overlay effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-industrial-green" />
        
        {/* Event Flyer Image */}
        <div className="mb-2 relative group">
          <div className="absolute inset-0 bg-industrial-green/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
          <img 
            src={flyerImage} 
            alt="Event Flyer" 
            className="w-full h-auto max-h-[280px] object-contain rounded-lg border border-gray-200 shadow-sm"
            style={{ fetchPriority: 'high' } as any}
          />
        </div>

        <h2 className="text-gray-500 font-bold text-[11px] uppercase tracking-[0.3em] mb-1">Annual Safety Summit Positive</h2>
        
        <h1 className="font-anton text-[26px] font-bold uppercase leading-none text-industrial-green mb-1 tracking-tight">
          Safety Culture
        </h1>
        <div className="text-[14px] font-light text-gray-700 uppercase tracking-wide mb-2">
          In ISO Compliant <span className="font-bold">Organisation</span>
        </div>

        <div className="flex flex-col items-center justify-center border-y border-gray-100 py-2 mb-4 gap-0">
          <span className="text-industrial-green font-bold text-lg">16 MAY 2026</span>
          <span className="text-gray-500 text-[10px] font-medium tracking-widest uppercase">7:00 PM (GMT+1)</span>
        </div>

        <button 
          onClick={onStart}
          className="btn-industrial group py-3"
        >
          Begin Registration
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* Technical Footer */}
      <div className="mt-6 flex items-center gap-12 opacity-30 pb-4">
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-mono uppercase">Ref: ISO-9001:2015</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-mono uppercase">Status: ENR-OPEN</span>
        </div>
      </div>
    </motion.div>
  );
};

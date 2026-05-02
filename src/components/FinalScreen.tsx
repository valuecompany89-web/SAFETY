import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

interface FinalScreenProps {
  name: string;
  role: string;
  whatsappLink: string;
}

export const FinalScreen: React.FC<FinalScreenProps> = ({ name, role, whatsappLink }) => {
  const getPrefix = (userRole: string) => {
    const r = userRole.toLowerCase().trim();
    if (!r) return '';
    
    if (r.includes('engineer')) return 'Engr.';
    if (r.includes('safety') || r.includes('hse') || r.includes('environment') || r.includes('health')) return 'Saf.';
    if (r.includes('architect')) return 'Arch.';
    if (r.includes('doctor') || r.startsWith('dr')) return 'Dr.';
    if (r.includes('professor') || r.startsWith('prof')) return 'Prof.';
    if (r.includes('manager')) return 'Mgr.';
    if (r.includes('officer')) return 'Offr.';
    if (r.includes('technician')) return 'Tech.';
    if (r.includes('consultant')) return 'Cons.';
    if (r.includes('supervisor')) return 'Sup.';
    if (r.includes('director')) return 'Dir.';
    if (r.includes('coordinator')) return 'Coord.';
    if (r.includes('specialist')) return 'Spec.';
    if (r.includes('analyst')) return 'Anl.';
    if (r.includes('inspector')) return 'Insp.';
    if (r.includes('surveyor')) return 'Surv.';
    if (r.includes('advocate')) return 'Adv.';
    if (r.includes('lead')) return 'Ld.';
    
    // Default fallback if a role is provided but no specific abbreviation found
    return 'Pr.'; // Professional
  };

  const prefix = getPrefix(role);
  const firstName = name.split(' ')[0] || 'Professional';
  const addressedName = prefix ? `${prefix} ${firstName}` : firstName;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-start min-h-screen p-6 py-12 overflow-y-auto"
    >
      <div className="panel-industrial text-center space-y-8 max-w-lg">
        <div className="flex justify-center">
          <div className="relative">
            <CheckCircle2 className="w-16 h-16 text-industrial-green" />
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 10 }}
              className="absolute -top-1 -right-1 bg-industrial-green rounded-full p-1"
            >
              <div className="w-3 h-3 bg-white rounded-full" />
            </motion.div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-anton uppercase text-industrial-green tracking-tight leading-none">
            {addressedName}, Registration Confirmed.
          </h2>
          
          <div className="space-y-4 text-gray-600 leading-relaxed text-base">
            <p className="font-medium">
              You're now part of a network focused on building a sustainable safety culture in modern organisations.
            </p>
            <p className="text-sm font-mono uppercase bg-gray-100 py-2 px-4 rounded inline-block">
              Event Access: Pending Channel Entry
            </p>
          </div>
        </div>

        <div className="pt-4 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
            Final Step: Join the official session channel
          </p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-industrial py-5 text-xl group"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" /> 
            Join WhatsApp Channel
          </a>
        </div>
        
        <div className="pt-8 border-t border-gray-100">
          <span className="text-[10px] font-mono text-gray-400 uppercase">
            Certification details will be sent after the webinar.
          </span>
        </div>
      </div>
    </motion.div>
  );
};

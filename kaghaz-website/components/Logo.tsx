import React from 'react';
import { Language } from '../types';

interface LogoProps {
  lang: Language;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ lang, className = "" }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Icon: Stack of papers with checkmark */}
      <div className="relative w-8 h-8 md:w-9 md:h-9">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-sm">
           {/* Back Paper */}
           <path d="M16 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-6-4z" className="fill-white stroke-state-green stroke-[1.5]" />
           {/* Fold */}
           <path d="M14 4v4h4" className="stroke-state-green stroke-[1.5] fill-white" />
           {/* Checkmark */}
           <path d="M9 13l2 2 4-4" className="stroke-state-green stroke-[2.5] stroke-linecap-round stroke-linejoin-round" />
        </svg>
      </div>
      
      {/* Text */}
      <div className={`flex flex-col leading-none ${lang === 'ur' ? 'items-end' : 'items-start'}`}>
        <span className="font-serif font-bold text-xl md:text-2xl text-slate-900 tracking-tight">Kaghaz</span>
      </div>
    </div>
  );
};

export default Logo;
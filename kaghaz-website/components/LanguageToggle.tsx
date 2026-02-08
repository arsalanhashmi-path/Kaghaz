import React from 'react';
import { Language } from '../types';

interface LanguageToggleProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onToggle, className = "" }) => {
  return (
    <div className={`flex bg-slate-100 rounded-full p-1 border border-slate-200 ${className}`}>
      <button
        onClick={() => onToggle('en')}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
          currentLang === 'en' 
            ? 'bg-white text-slate-900 shadow-sm' 
            : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        ENG
      </button>
      <button
        onClick={() => onToggle('ur')}
        className={`px-3 py-1 rounded-full text-xs font-urdu font-bold transition-all ${
          currentLang === 'ur' 
            ? 'bg-white text-slate-900 shadow-sm' 
            : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        اردو
      </button>
    </div>
  );
};

export default LanguageToggle;
import React from 'react';
import { TranslationDictionary, Language } from '../types';
import { User, X, Check, Quote } from 'lucide-react';

interface SocialProofProps {
  content: TranslationDictionary['social'];
  lang: Language;
}

const SocialProof: React.FC<SocialProofProps> = ({ content, lang }) => {
  return (
    <section id="stories" className={`py-24 bg-white ${lang === 'ur' ? 'font-urdu' : ''}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold text-slate-900 ${lang === 'en' ? 'font-serif' : ''}`}>{content.header}</h2>
        </div>

        <div className="relative">
          {/* Connecting line or vs badge could go here */}
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Failure Scenario */}
            <div className="bg-red-50/50 p-8 md:p-10 rounded-3xl border border-red-100 flex flex-col h-full opacity-80 hover:opacity-100 transition-opacity">
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <X className="w-6 h-6 text-alert-red" />
                  </div>
                  <span className="font-bold text-alert-red text-lg uppercase tracking-wider">The Old Way</span>
               </div>
               <div className="flex-grow">
                 <p className="text-slate-700 leading-relaxed text-lg md:text-xl font-medium">
                    "{content.scenario.without}"
                 </p>
               </div>
            </div>

            {/* Success Scenario */}
            <div className="bg-green-50/50 p-8 md:p-10 rounded-3xl border-2 border-state-green/20 shadow-xl shadow-green-900/5 flex flex-col h-full relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-10">
                 <Quote className="w-32 h-32 text-state-green rotate-180" />
               </div>
               
               <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-state-green flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-state-green text-lg uppercase tracking-wider">With Kaghaz</span>
               </div>
               <div className="flex-grow relative z-10">
                 <p className="text-slate-800 leading-relaxed text-lg md:text-xl font-medium">
                    "{content.scenario.with}"
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
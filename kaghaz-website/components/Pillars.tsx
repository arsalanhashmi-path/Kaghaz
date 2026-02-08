import React from 'react';
import { TranslationDictionary, Language, ContentItem } from '../types';
import { Brain, ShieldCheck, ClipboardCheck } from 'lucide-react';

interface PillarsProps {
  content: TranslationDictionary['pillars'];
  lang: Language;
}

const IconMap = {
  Brain: Brain,
  Vault: ShieldCheck,
  CheckCircle: ClipboardCheck
};

const Pillars: React.FC<PillarsProps> = ({ content, lang }) => {
  return (
    <section id="features" className={`py-24 bg-white relative overflow-hidden ${lang === 'ur' ? 'font-urdu' : ''}`}>
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dots opacity-[0.3] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-24 text-state-green ${lang === 'en' ? 'font-serif' : ''}`}>
          {content.header}
        </h2>

        <div className="relative grid md:grid-cols-3 gap-12">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-slate-200 z-0"></div>

          {content.items.map((item: ContentItem, idx) => {
            const Icon = IconMap[item.icon as keyof typeof IconMap] || Brain;
            
            return (
              <div key={item.id} className="flex flex-col items-center text-center group relative z-10">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-lg shadow-green-900/5 border-4 border-slate-50 group-hover:border-green-100 group-hover:scale-110 transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-green-50 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300"></div>
                  <Icon className="w-10 h-10 text-state-green relative z-10" strokeWidth={1.5} />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                    {idx + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 px-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed max-w-xs mx-auto text-lg">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
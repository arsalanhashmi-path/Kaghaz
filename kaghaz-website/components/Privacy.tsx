import React from 'react';
import { TranslationDictionary, Language } from '../types';
import { Lock, Smartphone, WifiOff, ShieldCheck } from 'lucide-react';

interface PrivacyProps {
  content: TranslationDictionary['privacy'];
  lang: Language;
}

const Privacy: React.FC<PrivacyProps> = ({ content, lang }) => {
  return (
    <section id="privacy" className={`py-24 bg-slate-900 relative overflow-hidden text-white ${lang === 'ur' ? 'font-urdu' : ''}`}>
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 relative">
             <div className="absolute inset-0 bg-state-green opacity-20 blur-[100px] rounded-full"></div>
             <div className="relative bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md shadow-2xl">
                <div className="w-20 h-20 bg-state-green/20 rounded-2xl flex items-center justify-center mb-8 border border-state-green/30 shadow-[0_0_30px_rgba(0,100,0,0.3)]">
                  <ShieldCheck className="w-10 h-10 text-state-green" />
                </div>
                <h2 className={`text-4xl font-bold mb-6 ${lang === 'en' ? 'font-serif' : ''}`}>
                  {content.header}
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {content.body}
                </p>
             </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            {content.points.map((point, idx) => (
              <div key={idx} className="group flex items-center gap-6 bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/5 hover:border-state-green/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-state-green group-hover:text-white transition-colors duration-300 shrink-0">
                   {idx === 0 && <Lock className="w-6 h-6 text-state-green group-hover:text-white transition-colors" />}
                   {idx === 1 && <Smartphone className="w-6 h-6 text-state-green group-hover:text-white transition-colors" />}
                   {idx === 2 && <WifiOff className="w-6 h-6 text-state-green group-hover:text-white transition-colors" />}
                </div>
                <span className="font-medium text-xl text-slate-200 group-hover:text-white transition-colors">{point}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Privacy;
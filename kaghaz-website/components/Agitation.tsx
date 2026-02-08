import React from 'react';
import { TranslationDictionary, Language } from '../types';
import { AlertTriangle, XCircle, FileWarning } from 'lucide-react';

interface AgitationProps {
  content: TranslationDictionary['agitation'];
  lang: Language;
}

const Agitation: React.FC<AgitationProps> = ({ content, lang }) => {
  return (
    <section className={`py-24 bg-slate-50 text-slate-800 ${lang === 'ur' ? 'font-urdu' : ''}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <AlertTriangle className="w-8 h-8 text-alert-red" />
          </div>
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 max-w-2xl leading-tight text-slate-900 ${lang === 'en' ? 'font-serif' : ''}`}>
            {content.header}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {content.scenarios.map((scenario, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Red Top Border mimicking a file folder tab or error */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-alert-red"></div>
              
              {/* Watermark Icon */}
              <FileWarning className="absolute -right-6 -bottom-6 w-32 h-32 text-red-50 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
                  <XCircle className="w-5 h-5 text-alert-red" />
                </div>
                <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed italic">
                  {scenario}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-slate-900"></div>
          {/* Abstract green accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-state-green opacity-20 blur-[80px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900 opacity-20 blur-[80px] rounded-full"></div>
          
          <div className="relative p-10 md:p-16 text-center">
             <h3 className="text-2xl md:text-3xl font-medium leading-relaxed max-w-4xl mx-auto text-white">
                {content.pivot}
             </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agitation;
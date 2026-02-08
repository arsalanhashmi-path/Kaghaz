import React from 'react';
import { TranslationDictionary, Language, ContentItem } from '../types';
import { ArrowRight, FileText, Plane, Car, Home, GraduationCap, Users } from 'lucide-react';

interface DocGridProps {
  content: TranslationDictionary['docs'];
  lang: Language;
}

const IconMap: Record<string, React.ElementType> = {
  IdCard: FileText,
  Plane: Plane,
  Car: Car,
  Home: Home,
  GraduationCap: GraduationCap,
  Users: Users
};

const DocGrid: React.FC<DocGridProps> = ({ content, lang }) => {
  return (
    <section id="documents" className={`py-24 bg-slate-50/50 ${lang === 'ur' ? 'font-urdu' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-slate-900 ${lang === 'en' ? 'font-serif' : ''}`}>
          {content.header}
        </h2>
        <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">Select a category to see how Kaghaz simplifies the process</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((item: ContentItem) => {
             const Icon = IconMap[item.icon as string] || FileText;
             return (
               <div key={item.id} className="group bg-white p-8 rounded-2xl shadow-[0_2px_10px_-4px_rgba(6,81,237,0.1)] hover:shadow-2xl hover:shadow-green-900/10 border border-slate-100 transition-all duration-300 relative overflow-hidden cursor-pointer hover:-translate-y-1">
                  {/* Subtle gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-state-green to-state-green-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                  
                  {/* Top content */}
                  <div className="relative z-10 flex items-start justify-between mb-8">
                    <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-white/10 group-hover:backdrop-blur-sm transition-colors border border-slate-100 group-hover:border-white/20">
                      <Icon className="w-8 h-8 text-slate-700 group-hover:text-white" strokeWidth={1.5} />
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-white transform group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-500 group-hover:text-green-100 text-sm mb-6 leading-relaxed border-b border-transparent group-hover:border-white/20 pb-4 transition-colors">{item.description}</p>
                    
                    {/* The "Killer Stat" revealed on hover */}
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <p className="text-xs font-bold text-white tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                         {content.hoverText}
                      </p>
                    </div>
                  </div>
               </div>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default DocGrid;
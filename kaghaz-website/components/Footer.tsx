import React from 'react';
import { TranslationDictionary, Language } from '../types';
import { Apple, Smartphone } from 'lucide-react';

interface FooterProps {
  content: TranslationDictionary['footer'];
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ content, lang }) => {
  return (
    <footer className={`bg-state-green text-white py-20 ${lang === 'ur' ? 'font-urdu' : ''}`}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${lang === 'en' ? 'font-serif' : ''}`}>
          {content.cta}
        </h2>
        <p className="text-green-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          {content.sub}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button className="flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-4 rounded-xl font-bold hover:bg-green-50 transition-colors shadow-lg">
            <Apple className="w-6 h-6" />
            <div className="text-left leading-none">
              <span className="block text-xs text-slate-500 mb-1">Download on the</span>
              <span className="text-lg">App Store</span>
            </div>
          </button>
          
          <button className="flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-4 rounded-xl font-bold hover:bg-green-50 transition-colors shadow-lg">
            <Smartphone className="w-6 h-6" />
            <div className="text-left leading-none">
              <span className="block text-xs text-slate-500 mb-1">Get it on</span>
              <span className="text-lg">Google Play</span>
            </div>
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-green-200 text-sm font-sans">
          {content.links.map((link, i) => (
            <a key={i} href="#" className="hover:text-white transition-colors underline decoration-transparent hover:decoration-white underline-offset-4">
              {link}
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-green-300/50 text-xs font-sans">
          © {new Date().getFullYear()} Kaghaz App. Built for Pakistan 🇵🇰
        </div>
      </div>
    </footer>
  );
};

export default Footer;
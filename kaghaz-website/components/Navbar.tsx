import React, { useState, useEffect } from 'react';
import { TranslationDictionary, Language } from '../types';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import LanguageToggle from './LanguageToggle';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  content: TranslationDictionary['nav'];
  lang: Language;
  onLanguageToggle: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ content, lang, onLanguageToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'features', label: content.features },
    { id: 'documents', label: content.documents },
    { id: 'privacy', label: content.privacy },
    { id: 'stories', label: content.stories },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/50 py-3' 
          : 'bg-transparent py-5'
      } ${lang === 'ur' ? 'font-urdu' : 'font-sans'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <Logo lang={lang} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
           <div className="flex items-center gap-6">
             {navLinks.map((link) => (
               <button 
                 key={link.id}
                 onClick={() => scrollToSection(link.id)}
                 className="text-sm font-medium text-slate-600 hover:text-state-green transition-colors"
               >
                 {link.label}
               </button>
             ))}
           </div>
           
           <div className="h-4 w-px bg-slate-200"></div>
           
           <LanguageToggle currentLang={lang} onToggle={onLanguageToggle} />
           
           <button className="bg-state-green hover:bg-state-green-dark text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-green-900/20">
             {content.cta}
           </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <LanguageToggle currentLang={lang} onToggle={onLanguageToggle} />
           <button 
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className="text-slate-800 p-1"
           >
             {isMobileMenuOpen ? <X /> : <Menu />}
           </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-slate-100"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                 <button 
                   key={link.id}
                   onClick={() => scrollToSection(link.id)}
                   className="text-lg font-medium text-slate-800 text-left py-2 border-b border-slate-50 last:border-0"
                 >
                   {link.label}
                 </button>
               ))}
               <button className="bg-state-green text-white font-bold py-3 rounded-xl w-full mt-4">
                 {content.cta}
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
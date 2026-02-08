import React, { useState, useEffect } from 'react';
import { TranslationDictionary, Language } from '../types';
import { Download, CheckCircle2, WifiOff } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  content: TranslationDictionary['hero'];
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ content, lang }) => {
  const [loadingText, setLoadingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isTyping) {
      const texts = [
        "Connecting to NADRA...",
        "Verifying IBCC Rules...",
        "Checking Passport Status..."
      ];
      let i = 0;
      const interval = setInterval(() => {
        setLoadingText(texts[i % texts.length]);
        i++;
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isTyping]);

  const handleDownloadClick = () => {
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 4500);
  };

  return (
    <div className={`relative min-h-screen flex flex-col md:flex-row overflow-hidden ${lang === 'ur' ? 'font-urdu' : 'font-sans'}`}>
      
      {/* Left Side (Desktop) - Content */}
      <div className="md:w-1/2 bg-off-white relative flex items-center justify-center p-8 md:p-16 border-b md:border-b-0 md:border-r border-slate-200 order-2 md:order-1">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-dots opacity-[0.4] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-80 pointer-events-none"></div>
        
        <div className="max-w-xl w-full z-10 space-y-8">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm border ${
              isTyping 
                ? 'bg-state-green/10 text-state-green border-state-green/20' 
                : 'bg-white text-slate-600 border-slate-200'
             }`}
           >
             {isTyping && <span className="w-2 h-2 rounded-full bg-state-green animate-pulse"></span>}
             {isTyping ? loadingText || content.statusTag : "The Reality"}
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className={`text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] ${lang === 'en' ? 'font-serif tracking-tight' : ''}`}
           >
             {content.headline}
           </motion.h1>
           
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg"
           >
             {content.subheadline}
           </motion.p>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="pt-4 flex flex-col sm:flex-row gap-5 items-start sm:items-center"
           >
             <button 
                onClick={handleDownloadClick}
                className="group relative overflow-hidden bg-state-green hover:bg-state-green-light text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-state-green/20 transition-all active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto"
             >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Download className="w-5 h-5" />
                <span>{content.ctaPrimary}</span>
             </button>
             <div className="flex items-center gap-2 text-slate-500 text-sm font-medium px-2">
                <WifiOff className="w-4 h-4 text-slate-400" />
                {content.ctaSecondary}
             </div>
           </motion.div>
        </div>
      </div>

      {/* Right Side (Desktop) - Visual */}
      <div className="md:w-1/2 bg-gradient-to-br from-state-green to-state-green-dark relative flex items-center justify-center p-8 overflow-hidden order-1 md:order-2 min-h-[50vh] md:min-h-auto">
         {/* Background Patterns */}
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-t from-black/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

         {/* Phone Mockup Container */}
         <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-72 md:w-80 h-[550px] bg-slate-900 rounded-[3.5rem] shadow-2xl border-[10px] border-slate-900 overflow-hidden transform md:rotate-[-6deg] z-10"
         >
            {/* Glossy Reflection */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent z-20 pointer-events-none"></div>

            {/* Screen Content */}
            <div className="w-full h-full bg-slate-50 flex flex-col relative z-10">
              
              {/* Status Bar Area */}
              <div className="h-24 bg-state-green flex items-end justify-center pb-4 px-6 rounded-b-[2.5rem] shadow-md relative z-20">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-xl"></div>
                 <div className="text-white/90 text-sm font-medium">Verified Documents</div>
              </div>

              {/* Main App View */}
              <div className="flex-1 p-6 flex flex-col relative overflow-hidden">
                {/* Decorative background blob inside phone */}
                <div className="absolute top-20 left-10 w-40 h-40 bg-green-200/50 rounded-full blur-3xl"></div>

                <div className="flex flex-col items-center justify-center flex-1 mb-8">
                   <motion.div 
                     initial={{ scale: 0.5, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     transition={{ delay: 0.5, type: "spring" }}
                     className="w-28 h-28 rounded-full bg-green-50 border-4 border-white shadow-xl flex items-center justify-center mb-6 relative"
                   >
                      <CheckCircle2 className="w-14 h-14 text-state-green drop-shadow-sm" />
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 rounded-full border-2 border-state-green/30"
                      ></motion.div>
                   </motion.div>
                   
                   <div className="space-y-3 w-full max-w-[80%]">
                     <div className="h-4 bg-slate-200 rounded-full w-3/4 mx-auto"></div>
                     <div className="h-3 bg-slate-100 rounded-full w-1/2 mx-auto"></div>
                   </div>
                </div>
                
                {/* Checklist Animation */}
                <div className="space-y-3 relative z-10">
                   {[1, 2, 3].map((i) => (
                      <motion.div 
                        key={i}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 + (i * 0.2) }}
                        className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-slate-100"
                      >
                         <div className="w-6 h-6 rounded-full bg-state-green flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                         </div>
                         <div className="space-y-1.5 flex-1">
                            <div className="w-24 h-2.5 bg-slate-200 rounded-full"></div>
                            <div className="w-16 h-2 bg-slate-100 rounded-full"></div>
                         </div>
                      </motion.div>
                   ))}
                </div>
              </div>
            </div>
         </motion.div>

         {/* Floating Elements behind Phone */}
         <motion.div 
           animate={{ y: [0, 20, 0] }}
           transition={{ repeat: Infinity, duration: 5, delay: 1 }}
           className="absolute top-[20%] right-[10%] md:right-[15%] bg-white p-4 rounded-2xl shadow-xl z-20 max-w-[150px]"
         >
           <div className="flex items-center gap-2 mb-2">
             <div className="w-2 h-2 rounded-full bg-red-500"></div>
             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Expiry Alert</div>
           </div>
           <div className="text-xs font-semibold text-slate-800 leading-tight">License expiring in 5 days!</div>
         </motion.div>

      </div>
    </div>
  );
};

export default Hero;
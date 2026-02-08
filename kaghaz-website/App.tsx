import React, { useState } from 'react';
import { CONTENT } from './constants';
import { Language } from './types';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Agitation from './components/Agitation';
import Pillars from './components/Pillars';
import DocGrid from './components/DocGrid';
import Privacy from './components/Privacy';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const content = CONTENT[lang];

  return (
    <div dir={lang === 'ur' ? 'rtl' : 'ltr'} className="min-h-screen bg-paper-white relative">
      <Navbar 
        content={content.nav} 
        lang={lang} 
        onLanguageToggle={setLang} 
      />
      
      <main>
        <Hero content={content.hero} lang={lang} />
        <Agitation content={content.agitation} lang={lang} />
        <Pillars content={content.pillars} lang={lang} />
        <DocGrid content={content.docs} lang={lang} />
        <Privacy content={content.privacy} lang={lang} />
        <SocialProof content={content.social} lang={lang} />
      </main>

      <Footer content={content.footer} lang={lang} />
    </div>
  );
};

export default App;
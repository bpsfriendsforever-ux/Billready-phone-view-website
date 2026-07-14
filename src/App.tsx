import React, { useState, useEffect } from 'react';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import LiveDemo from './components/LiveDemo';
import { CustomerTestimonials } from './components/CustomerTestimonials';
import VideoSection from './components/VideoSection';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';

export default function App() {
  // Initialize current language state from local storage or default to Hinglish
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('billready_lang') as Language;
    return saved === 'en' || saved === 'hi' || saved === 'hinglish' ? saved : 'hinglish';
  });

  // Theme state: light or dark mode
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('billready_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Track state changes to synchronize local storage
  const handleSetCurrentLang = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('billready_lang', lang);
  };

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('billready_theme', next);
      return next;
    });
  };

  // Synchronize HTML element class list for full support
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Pre-load custom Google Fonts to render displays perfectly
  useEffect(() => {
    // Add custom dynamic styling configurations to index.css if needed,
    // otherwise the standard tailwind font stack works beautifully.
    document.title = currentLang === 'hi' 
      ? "बिलरेडी - व्हाट्सएप पर दुकान का बिल और स्टॉक" 
      : currentLang === 'hinglish'
      ? "BillReady - WhatsApp Pe Dukaan Ka Bill"
      : "BillReady - Shop Billing & Stock on WhatsApp";
  }, [currentLang]);

  return (
    <div className={`min-h-screen bg-white dark:bg-[#111B21] text-gray-900 dark:text-gray-100 overflow-x-hidden antialiased selection:bg-[#25D366]/30 selection:text-emerald-950 font-sans scroll-smooth ${theme}`}>
      {/* 1. Header Navigation Bar */}
      <Navbar currentLang={currentLang} setCurrentLang={handleSetCurrentLang} theme={theme} toggleTheme={toggleTheme} />

      {/* 2. Hero Presentation Section */}
      <Hero currentLang={currentLang} />

      {/* 3. Steps Block */}
      <HowItWorks currentLang={currentLang} />

      {/* 4. Full Feature Bento Matrix */}
      <Features currentLang={currentLang} />

      {/* 5. Interactive WhatsApp Demo Screen */}
      <LiveDemo currentLang={currentLang} />

      {/* 5b. Customer Testimonials Grid & Carousel */}
      <CustomerTestimonials currentLang={currentLang} />

      {/* 6. Product Presentation Video */}
      <VideoSection currentLang={currentLang} />

      {/* 7. Interactive Pricing Matrix */}
      <Pricing currentLang={currentLang} />

      {/* 8. Accordion Toggling FAQs */}
      <FAQ currentLang={currentLang} />

      {/* 9. Sign-up Action Form & Confetti Shower */}
      <CTA currentLang={currentLang} />

      {/* 10. Modular Links & Disclaimer Footer */}
      <Footer currentLang={currentLang} />

      {/* 11. Floating WhatsApp Button & Back To Top */}
      <FloatingWidgets currentLang={currentLang} />
    </div>
  );
}

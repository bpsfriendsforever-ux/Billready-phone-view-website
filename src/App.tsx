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
import FeedbackModal from './components/FeedbackModal';

export default function App() {
  // Initialize current language state from local storage or default to English
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('billready_lang') as Language;
    return saved === 'en' || saved === 'hi' || saved === 'hinglish' ? saved : 'en';
  });

  // Theme state: light or dark mode
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('billready_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark';
  });

  // Scroll reading progress bar state
  const [scrollProgress, setScrollProgress] = useState(0);

  // Feedback modal state
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  // Scroll progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once initially to handle any page load scroll offset
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Set up intersection observer for scroll-based fade-in animations on requested sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px', // triggers when section is close to entering the viewport
      threshold: 0.05, // triggers when 5% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once animated, we can unobserve the element
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.section-fade-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={`min-h-screen bg-white dark:bg-[#111B21] text-gray-900 dark:text-gray-100 overflow-x-hidden antialiased selection:bg-[#25D366]/30 selection:text-emerald-950 font-sans scroll-smooth ${theme}`}>
      {/* Scroll Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[#25D366] z-[9999] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 1. Header Navigation Bar */}
      <Navbar currentLang={currentLang} setCurrentLang={handleSetCurrentLang} theme={theme} toggleTheme={toggleTheme} />

      {/* 2. Hero Presentation Section */}
      <Hero currentLang={currentLang} />

      {/* 3. Steps Block */}
      <div className="section-fade-in">
        <HowItWorks currentLang={currentLang} />
      </div>

      {/* 4. Full Feature Bento Matrix */}
      <div className="section-fade-in">
        <Features currentLang={currentLang} />
      </div>

      {/* 5. Interactive WhatsApp Demo Screen */}
      <LiveDemo currentLang={currentLang} />

      {/* 5b. Customer Testimonials Grid & Carousel */}
      <CustomerTestimonials currentLang={currentLang} />

      {/* 6. Product Presentation Video */}
      <VideoSection currentLang={currentLang} />

      {/* 7. Interactive Pricing Matrix */}
      <div className="section-fade-in">
        <Pricing currentLang={currentLang} />
      </div>

      {/* 8. Accordion Toggling FAQs */}
      <FAQ currentLang={currentLang} />

      {/* 9. Sign-up Action Form & Confetti Shower */}
      <CTA currentLang={currentLang} />

      {/* 10. Modular Links & Disclaimer Footer */}
      <Footer currentLang={currentLang} onHelpClick={() => setIsFeedbackModalOpen(true)} />

      {/* Feedback Modal component */}
      <FeedbackModal isOpen={isFeedbackModalOpen} onClose={() => setIsFeedbackModalOpen(false)} currentLang={currentLang} />

      {/* 11. Floating WhatsApp Button & Back To Top */}
      <FloatingWidgets currentLang={currentLang} />
    </div>
  );
}

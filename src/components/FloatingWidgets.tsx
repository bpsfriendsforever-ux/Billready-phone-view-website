import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import translations from '../translations';

interface FloatingWidgetsProps {
  currentLang: Language;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ currentLang }) => {
  const [showScroll, setShowScroll] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const t = (key: string) => {
    return translations[key]?.[currentLang] || key;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 items-end pointer-events-none">
      
      {/* Scroll to Top Button (Enters with scale-in if showScroll is true) */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-white hover:bg-gray-50 text-[#075E54] hover:text-[#25D366] border border-gray-100 rounded-full shadow-2xl transition-all duration-300 transform scale-100 hover:scale-110 active:scale-95 pointer-events-auto cursor-pointer focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Quick Chat Action Button */}
      <div 
        className="relative flex items-center pointer-events-auto"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Tooltip text bubble */}
        {showTooltip && (
          <div className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-xl shadow-xl border border-slate-800 whitespace-nowrap animate-fade-in hidden sm:block">
            {t('floating-widget-tooltip')}
          </div>
        )}

        <a
          href={`https://wa.me/919999999999?text=${encodeURIComponent(currentLang === 'hi' ? 'नमस्ते बिलरेडी' : 'Namaste BillReady')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 active:scale-95 focus:outline-none"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white text-white" />
        </a>
      </div>

    </div>
  );
};
export default FloatingWidgets;

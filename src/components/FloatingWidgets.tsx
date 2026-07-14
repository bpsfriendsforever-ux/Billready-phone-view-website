import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
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
          className="p-4 bg-[#075E54] hover:bg-[#128C7E] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 active:scale-95 focus:outline-none"
          aria-label="Chat on WhatsApp"
          id="whatsapp-floating-chat-button"
        >
          <svg className="w-6 h-6 fill-white text-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.263 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.017-5.091-2.868-6.944-1.851-1.854-4.312-2.875-6.942-2.876-5.44 0-9.866 4.414-9.87 9.831a9.743 9.743 0 001.5 5.07l.315.502-1.003 3.666 3.753-.984.39.232zM16.518 13.5c-.247-.124-1.464-.722-1.692-.805-.228-.083-.393-.124-.559.124-.166.248-.642.805-.788.971-.145.166-.29.186-.537.063a7.562 7.562 0 01-1.984-1.222 8.35 8.35 0 01-1.373-1.709c-.145-.248-.015-.381.11-.504.111-.11.247-.289.372-.434.124-.145.166-.248.248-.414.083-.166.042-.31-.021-.434-.063-.124-.559-1.347-.767-1.847-.203-.487-.406-.421-.559-.429-.144-.007-.31-.008-.477-.008a.916.916 0 00-.662.31c-.228.248-.869.849-.869 2.07 0 1.221.889 2.401.993 2.545.104.145 1.751 2.674 4.244 3.747.593.255 1.056.408 1.417.523.596.19 1.138.163 1.567.099.478-.072 1.464-.598 1.67-.178.206-.419.206-.779.145-.841-.061-.063-.228-.145-.475-.269z"/>
          </svg>
        </a>
      </div>

    </div>
  );
};
export default FloatingWidgets;

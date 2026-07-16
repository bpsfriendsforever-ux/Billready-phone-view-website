import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { Language } from '../types';
import translations from '../translations';

interface FAQProps {
  currentLang: Language;
}

export const FAQ: React.FC<FAQProps> = ({ currentLang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Default keep Q1 open

  const t = (key: string) => {
    return translations[key]?.[currentLang] || key;
  };

  const faqItems = [
    { index: 1, qKey: 'faq-q1', aKey: 'faq-a1' },
    { index: 2, qKey: 'faq-q2', aKey: 'faq-a2' },
    { index: 3, qKey: 'faq-q3', aKey: 'faq-a3' },
    { index: 4, qKey: 'faq-q4', aKey: 'faq-a4' },
    { index: 5, qKey: 'faq-q5', aKey: 'faq-a5' },
    { index: 6, qKey: 'faq-q6', aKey: 'faq-a6' },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 sm:py-16 bg-[#faf8f5] dark:bg-[#0f171c] border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 px-3.5 py-1.5 rounded-full text-[#075E54] dark:text-[#25D366] text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#25D366]" />
            <span>{t('faq-badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t('faq-heading')}
          </h2>
          <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            {t('faq-subheading')}
          </p>
        </div>

        {/* Custom Accordion List (Highly responsive click boundaries) */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openIndex === item.index;
            return (
              <div 
                key={item.index}
                className={`bg-white dark:bg-[#182229] rounded-2xl border border-gray-100 dark:border-emerald-900/10 shadow-sm transition-all duration-300 overflow-hidden ${isOpen ? 'ring-2 ring-[#25D366]/40 border-[#25D366]/30' : 'hover:border-gray-200 dark:hover:border-emerald-800/40'}`}
              >
                {/* Header Question Toggler */}
                <button
                  onClick={() => handleToggle(item.index)}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between space-x-4 cursor-pointer focus:outline-none focus:bg-emerald-50/20 dark:focus:bg-emerald-950/10"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white leading-snug">
                    {t(item.qKey)}
                  </span>
                  <div className={`p-1.5 rounded-xl bg-gray-50 dark:bg-[#202c33] text-gray-400 dark:text-gray-500 transition-all duration-300 ${isOpen ? 'bg-[#25D366]/10 text-[#075E54] dark:text-[#25D366] rotate-180' : 'group-hover:text-gray-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer Box (Animated collapse/expand) */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] border-t border-gray-100 dark:border-gray-800' : 'max-h-0'}`}
                >
                  <div className="px-5 sm:px-6 py-5 text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed bg-emerald-50/10 dark:bg-emerald-950/10">
                    <p>{t(item.aKey)}</p>
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
export default FAQ;

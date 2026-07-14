import React, { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import translations from '../translations';

interface CustomerTestimonialsProps {
  currentLang: Language;
}

export const CustomerTestimonials: React.FC<CustomerTestimonialsProps> = ({ currentLang }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const t = (key: string) => {
    return translations[key]?.[currentLang] || key;
  };

  const testimonials = [
    {
      id: 1,
      name: currentLang === 'hi' ? 'रमेश चंद्र' : currentLang === 'hinglish' ? 'Ramesh Chand' : 'Ramesh Chand',
      initials: 'RC',
      subKey: 'testi1-sub',
      quoteKey: 'testi1-quote',
      color: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
      id: 2,
      name: currentLang === 'hi' ? 'सुनीता देवी' : currentLang === 'hinglish' ? 'Sunita Devi' : 'Sunita Devi',
      initials: 'SD',
      subKey: 'testi2-sub',
      quoteKey: 'testi2-quote',
      color: 'bg-teal-100 text-teal-800 border-teal-200',
    },
    {
      id: 3,
      name: currentLang === 'hi' ? 'राजेश गुप्ता' : currentLang === 'hinglish' ? 'Rajesh Gupta' : 'Rajesh Gupta',
      initials: 'RG',
      subKey: 'testi3-sub',
      quoteKey: 'testi3-quote',
      color: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    },
    {
      id: 4,
      name: currentLang === 'hi' ? 'अमित वर्मा' : currentLang === 'hinglish' ? 'Amit Verma' : 'Amit Verma',
      initials: 'AV',
      subKey: 'testi4-sub',
      quoteKey: 'testi4-quote',
      color: 'bg-sky-100 text-sky-800 border-sky-200',
    },
    {
      id: 5,
      name: currentLang === 'hi' ? 'नेहा पटेल' : currentLang === 'hinglish' ? 'Neha Patel' : 'Neha Patel',
      initials: 'NP',
      subKey: 'testi5-sub',
      quoteKey: 'testi5-quote',
      color: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    },
    {
      id: 6,
      name: currentLang === 'hi' ? 'गुरप्रीत सिंह' : currentLang === 'hinglish' ? 'Gurpreet Singh' : 'Gurpreet Singh',
      initials: 'GS',
      subKey: 'testi6-sub',
      quoteKey: 'testi6-quote',
      color: 'bg-amber-100 text-amber-800 border-amber-200',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  // Keep ref updated to avoid stale state in setInterval
  useEffect(() => {
    autoPlayRef.current = handleNext;
  });

  useEffect(() => {
    if (isHovered) return;
    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };
    const interval = setInterval(play, 6000); // Rotate every 6 seconds
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50/50 dark:bg-[#0a1510]/50 border-y border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#075E54]/10 dark:bg-emerald-950/40 text-[#075E54] dark:text-[#25D366] text-xs font-semibold tracking-wider uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-[#075E54] dark:fill-[#25D366] text-[#075E54] dark:text-[#25D366]" />
            {currentLang === 'hi' ? 'ग्राहक समीक्षाएं' : currentLang === 'hinglish' ? 'Customer Reviews' : 'Customer Testimonials'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 font-sans">
            {t('trust-heading')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
            {t('trust-badge')}
          </p>
        </div>

        {/* Testimonials Layout - Centered Quote Card */}
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Main Focus Rotating Quote Card */}
          <div 
            className="flex flex-col justify-between bg-white dark:bg-[#182229] border border-gray-100 dark:border-emerald-900/20 p-8 sm:p-10 shadow-lg rounded-3xl relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            id="testimonial-carousel-card"
          >
            {/* Background design accents */}
            <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-50/30 dark:bg-emerald-950/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute left-10 bottom-0 w-24 h-24 bg-teal-50/40 dark:bg-emerald-900/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              {/* Star Rating & Quote Icon */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-[#075E54] dark:text-[#25D366]">
                  <Quote className="w-6 h-6 fill-[#075E54] dark:fill-[#25D366] opacity-80" />
                </div>
              </div>

              {/* Animated Quote Text */}
              <div className="min-h-[160px] flex items-center mb-8">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-medium italic leading-relaxed font-sans"
                  >
                    {t(testimonials[activeIndex].quoteKey)}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Quote Owner and Control Actions */}
            <div className="border-t border-gray-100 dark:border-gray-800 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-base border ${testimonials[activeIndex].color} dark:opacity-90 shadow-sm transition-transform duration-300 transform scale-105`}>
                  {testimonials[activeIndex].initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {t(testimonials[activeIndex].subKey)}
                  </p>
                </div>
              </div>

              {/* Arrow navigation triggers */}
              <div className="flex gap-2.5 self-end sm:self-auto">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-xl border border-gray-100 dark:border-emerald-900/20 hover:border-gray-200 dark:hover:border-emerald-800 hover:bg-gray-50 dark:hover:bg-emerald-950/40 text-gray-600 dark:text-gray-300 active:scale-95 transition-all duration-200 cursor-pointer"
                  aria-label="Previous Testimonial"
                  id="testimonial-prev-btn"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-xl border border-gray-100 dark:border-emerald-900/20 hover:border-gray-200 dark:hover:border-emerald-800 hover:bg-gray-50 dark:hover:bg-emerald-950/40 text-gray-600 dark:text-gray-300 active:scale-95 transition-all duration-200 cursor-pointer"
                  aria-label="Next Testimonial"
                  id="testimonial-next-btn"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Progress Bullet Indicators */}
          <div className="flex justify-center gap-2 pt-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? 'w-6 bg-[#075E54] dark:bg-[#25D366]' : 'w-2 bg-gray-200 dark:bg-emerald-950 hover:bg-gray-300 dark:hover:bg-emerald-900'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

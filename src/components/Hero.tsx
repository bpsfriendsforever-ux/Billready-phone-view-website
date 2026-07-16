import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, MessageSquare, Mic, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import translations from '../translations';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = (key: string) => {
    return translations[key]?.[currentLang] || key;
  };

  // WhatsApp chat simulation state
  const [activeStep, setActiveStep] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Steps: 
  // 0: Initial state, message 1 (User request) is shown.
  // 1: Show typing for BillReady reply 1
  // 2: Show BillReady reply 1
  // 3: Show message 2 (User praise)
  // 4: Show typing for BillReady reply 2
  // 5: Show BillReady reply 2
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const runSimulation = () => {
      // Sequence:
      // Start: Step 0 (User message 1 instantly visible)
      // After 1200ms: Step 1 (Show BillReady typing)
      // After 3200ms: Step 2 (Show BillReady reply 1)
      // After 5000ms: Step 3 (Show User praise)
      // After 6800ms: Step 4 (Show BillReady typing 2)
      // After 8800ms: Step 5 (Show BillReady reply 2)
      // After 14800ms: Reset to 0

      timer = setTimeout(() => {
        // Step 1: Typing reply 1
        setShowTyping(true);
        setActiveStep(1);
        scrollToBottom();
      }, 1200);

      const t2 = setTimeout(() => {
        // Step 2: Show reply 1
        setShowTyping(false);
        setActiveStep(2);
        scrollToBottom();
      }, 3200);

      const t3 = setTimeout(() => {
        // Step 3: Show User praise
        setActiveStep(3);
        scrollToBottom();
      }, 5000);

      const t4 = setTimeout(() => {
        // Step 4: Typing reply 2
        setShowTyping(true);
        setActiveStep(4);
        scrollToBottom();
      }, 6800);

      const t5 = setTimeout(() => {
        // Step 5: Show reply 2
        setShowTyping(false);
        setActiveStep(5);
        scrollToBottom();
      }, 8800);

      const tReset = setTimeout(() => {
        // Reset loop
        setActiveStep(0);
        setShowTyping(false);
        runSimulation();
      }, 14800);

      return () => {
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        clearTimeout(t5);
        clearTimeout(tReset);
      };
    };

    const cleanup = runSimulation();

    return () => {
      clearTimeout(timer);
      if (cleanup) cleanup();
    };
  }, [currentLang]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#f4fcf8] via-white to-[#faf8f5] dark:from-[#0a1510] dark:via-[#111B21] dark:to-[#0f171c] py-12 lg:py-24 overflow-hidden border-b border-gray-100 dark:border-gray-800">
      {/* Visual Background Accent Details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 dark:bg-emerald-900/10 rounded-full blur-3xl opacity-60 -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DCF8C6]/30 dark:bg-emerald-800/10 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid Structure (Stacks vertically on mobile, columns on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Product Positioning & Pitch */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8 animate-fade-in">
            {/* WhatsApp Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 px-3.5 py-1.5 rounded-full shadow-sm text-[#075E54] dark:text-[#25D366] text-xs sm:text-sm font-semibold transition-transform hover:scale-105">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
              </span>
              <span>{t('hero-badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight"
              dangerouslySetInnerHTML={{ __html: t('hero-title') }}
            />

            {/* Sub-headline */}
            <div className="space-y-4 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t('hero-subtitle').split('<br>').map((para, index) => (
                <p 
                  key={index}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>

            {/* Action Buttons: Stacked on mobile, row on desktop */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#cta"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-emerald-950 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-emerald-500/10 hover:shadow-xl hover:shadow-emerald-500/30 text-center transition-all duration-300 transform hover:-translate-y-1"
                id="hero-primary-btn"
              >
                {t('hero-cta-primary')}
              </a>
              <a
                href="#demo"
                className="w-full sm:w-auto bg-white dark:bg-emerald-950/20 hover:bg-gray-50 dark:hover:bg-emerald-950/40 border border-gray-200 dark:border-emerald-800 text-gray-700 dark:text-gray-200 px-6 py-4 rounded-2xl font-semibold text-base shadow-sm hover:shadow-md text-center transition-all duration-300 hover:border-gray-300 dark:hover:border-emerald-700 transform hover:-translate-y-0.5 active:scale-95"
              >
                {t('hero-cta-secondary')}
              </a>
            </div>

            {/* Mini Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left text-gray-500 dark:text-gray-400 text-sm font-medium">
              <div className="flex items-center justify-start space-x-2 bg-white dark:bg-emerald-950/10 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-gray-100 dark:border-emerald-900/30 sm:border-0 shadow-sm sm:shadow-none">
                <Mic className="w-5 h-5 text-[#25D366] shrink-0" />
                <span className="text-left">{t('trust-no-app')}</span>
              </div>
              <div className="flex items-center justify-start space-x-2 bg-white dark:bg-emerald-950/10 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-gray-100 dark:border-emerald-900/30 sm:border-0 shadow-sm sm:shadow-none">
                <MessageSquare className="w-5 h-5 text-[#25D366] shrink-0" />
                <span className="text-left">{t('trust-free')}</span>
              </div>
              <div className="flex items-center justify-start space-x-2 bg-white dark:bg-emerald-950/10 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-gray-100 dark:border-emerald-900/30 sm:border-0 shadow-sm sm:shadow-none">
                <ShieldCheck className="w-5 h-5 text-[#25D366] shrink-0" />
                <span className="text-left">{t('trust-langs')}</span>
              </div>
            </div>

          </div>

          {/* Right Side: Animated WhatsApp Interface Mockup */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] bg-[#ECE5DD] dark:bg-[#0b141a] border-[10px] border-gray-900 dark:border-gray-800 rounded-[40px] shadow-2xl h-[560px] flex flex-col overflow-hidden select-none">
              
              {/* Phone Header Indicator Pill */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-5 bg-gray-900 rounded-full z-20 flex items-center justify-center">
                <span className="w-2 h-2 bg-gray-700 rounded-full mr-2"></span>
                <span className="w-10 h-1 bg-gray-800 rounded-full"></span>
              </div>

              {/* Simulated WhatsApp Header */}
              <div className="bg-[#075E54] dark:bg-[#202c33] pt-8 pb-3 px-4 flex items-center justify-between text-white shadow-md z-10">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center font-extrabold text-[#075E54] dark:text-[#25D366]">
                    BR
                  </div>
                  <div>
                    <h3 className="font-bold text-sm tracking-wide flex items-center">
                      BillReady
                      <span className="ml-1.5 w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
                    </h3>
                    <p className="text-[10px] text-emerald-100 dark:text-gray-400">online</p>
                  </div>
                </div>
                <div className="flex space-x-3 text-emerald-100">
                  <Mic className="w-4.5 h-4.5 cursor-pointer hover:text-white" />
                  <span className="font-bold text-sm">⋮</span>
                </div>
              </div>

              {/* Chat Conversation Box */}
              <div 
                ref={chatContainerRef}
                className="flex-1 p-4 overflow-y-auto space-y-4 flex flex-col justify-end pb-6"
                style={{ scrollBehavior: 'smooth' }}
              >
                {/* Notice Bubble */}
                <div className="bg-amber-100/90 dark:bg-[#182229]/90 text-amber-900 dark:text-amber-200 text-[10px] px-3 py-1.5 rounded-lg text-center shadow-sm max-w-[85%] mx-auto font-medium border border-amber-200 dark:border-amber-900/30 flex items-start space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Messages are secured with end-to-end encryption.</span>
                </div>

                {/* Message 1: User Request (Instantly Visible) */}
                <div className="flex justify-end animate-fade-in">
                  <div className="bg-[#DCF8C6] dark:bg-[#005c4b] text-gray-800 dark:text-[#e9edef] text-xs py-2 px-3 rounded-l-xl rounded-br-xl shadow-sm max-w-[80%] relative">
                    <p>{t('hero-chat-user-1')}</p>
                    <span className="text-[9px] text-gray-500 dark:text-emerald-200/60 block text-right mt-1">11:42 AM ✓✓</span>
                    <div className="absolute right-[-6px] top-0 w-0 h-0 border-t-[8px] border-t-[#DCF8C6] dark:border-t-[#005c4b] border-r-[8px] border-r-transparent"></div>
                  </div>
                </div>

                {/* Message 2: BillReady response 1 (Visible from activeStep >= 2) */}
                {activeStep >= 2 && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="bg-white dark:bg-[#202c33] text-gray-800 dark:text-[#e9edef] text-xs py-2 px-3 rounded-r-xl rounded-bl-xl shadow-sm max-w-[80%] relative border border-gray-100 dark:border-transparent">
                      <p dangerouslySetInnerHTML={{ __html: t('hero-chat-reply-1') }} />
                      <span className="text-[9px] text-gray-400 dark:text-gray-500 block mt-1">11:42 AM</span>
                      <div className="absolute left-[-6px] top-0 w-0 h-0 border-t-[8px] border-t-white dark:border-t-[#202c33] border-l-[8px] border-l-transparent"></div>
                    </div>
                  </div>
                )}

                {/* Message 3: User Praise (Visible from activeStep >= 3) */}
                {activeStep >= 3 && (
                  <div className="flex justify-end animate-fade-in">
                    <div className="bg-[#DCF8C6] dark:bg-[#005c4b] text-gray-800 dark:text-[#e9edef] text-xs py-2 px-3 rounded-l-xl rounded-br-xl shadow-sm max-w-[80%] relative">
                      <p>{t('hero-chat-user-2')}</p>
                      <span className="text-[9px] text-gray-500 dark:text-emerald-200/60 block text-right mt-1">11:43 AM ✓✓</span>
                      <div className="absolute right-[-6px] top-0 w-0 h-0 border-t-[8px] border-t-[#DCF8C6] dark:border-t-[#005c4b] border-r-[8px] border-r-transparent"></div>
                    </div>
                  </div>
                )}

                {/* Message 4: BillReady Response 2 (Visible from activeStep >= 5) */}
                {activeStep >= 5 && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="bg-white dark:bg-[#202c33] text-gray-800 dark:text-[#e9edef] text-xs py-2 px-3 rounded-r-xl rounded-bl-xl shadow-sm max-w-[80%] relative border border-gray-100 dark:border-transparent">
                      <p>{t('hero-chat-reply-2')}</p>
                      <span className="text-[9px] text-gray-400 dark:text-gray-500 block mt-1">11:43 AM</span>
                      <div className="absolute left-[-6px] top-0 w-0 h-0 border-t-[8px] border-t-white dark:border-t-[#202c33] border-l-[8px] border-l-transparent"></div>
                    </div>
                  </div>
                )}

                {/* Typing indicator bubble */}
                {showTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-[#202c33] text-gray-800 dark:text-[#e9edef] py-2.5 px-4 rounded-r-xl rounded-bl-xl shadow-sm border border-gray-100 dark:border-transparent flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Simulated Input field */}
              <div className="bg-[#f0f0f0] dark:bg-[#1f2c34] p-2 flex items-center space-x-1.5 border-t border-gray-200 dark:border-transparent">
                <div className="flex-1 bg-white dark:bg-[#2a3942] rounded-full px-3.5 py-1.5 flex items-center justify-between text-xs text-gray-400 dark:text-gray-400 border border-gray-200 dark:border-transparent">
                  <span>{t('whatsapp-msg-placeholder')}</span>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <svg className="w-4 h-4 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    <svg className="w-4 h-4 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-[#075E54] dark:bg-[#00a884] p-2 rounded-full text-white cursor-pointer hover:bg-emerald-800 dark:hover:bg-[#00bfa5] transition-colors">
                  <Mic className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
